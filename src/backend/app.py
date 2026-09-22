from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from detector import ObjectDetector
import cv2
import numpy as np
import os

app = Flask(__name__)
CORS(app)

detector = ObjectDetector()


@app.route("/")
def home():
    return jsonify({
        "message": "AIVision backend is running",
        "status": "success"
    })


@app.route("/detect", methods=["POST"])
def detect():

    if "image" not in request.files:
        return jsonify({
            "error": "No image provided"
        }), 400

    file = request.files["image"]

    # Read uploaded image
    image_bytes = file.read()
    image_array = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    if image is None:
        return jsonify({
            "error": "Invalid image"
        }), 400

    # Run YOLO object detection
    results = detector.detect(image)

    detections = []

    # Get detected objects
    for result in results:
        for box in result.boxes:

            class_id = int(box.cls[0])
            confidence = float(box.conf[0])

            detections.append({
                "object": result.names[class_id],
                "confidence": round(confidence, 2)
            })

    # Draw bounding boxes on the image
    annotated_image = detector.draw_detections(
        image,
        results
    )

    # Save the detected image
    output_path = os.path.join(
        os.path.dirname(__file__),
        "detected_image.jpg"
    )

    cv2.imwrite(
        output_path,
        annotated_image
    )

    return jsonify({
        "status": "success",
        "detections": detections,
        "image_url": "http://127.0.0.1:5000/detected-image"
    })


@app.route("/detected-image")
def detected_image():

    image_path = os.path.join(
        os.path.dirname(__file__),
        "detected_image.jpg"
    )

    if not os.path.exists(image_path):
        return jsonify({
            "error": "No detected image available"
        }), 404

    return send_file(
        image_path,
        mimetype="image/jpeg"
    )


if __name__ == "__main__":
    app.run(debug=True)