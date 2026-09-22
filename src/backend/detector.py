import cv2
from ultralytics import YOLO


class ObjectDetector:
    def __init__(self):
        self.model = YOLO("yolo11n.pt")

    def detect(self, image):
        results = self.model(image)
        return results

    def draw_detections(self, image, results):
        for result in results:
            for box in result.boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])

                class_id = int(box.cls[0])
                confidence = float(box.conf[0])
                object_name = result.names[class_id]

                label = f"{object_name} {confidence:.2f}"

                # Draw bounding box
                cv2.rectangle(
                    image,
                    (x1, y1),
                    (x2, y2),
                    (0, 255, 0),
                    2
                )

                # Draw label
                cv2.putText(
                    image,
                    label,
                    (x1, y1 - 10),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.6,
                    (0, 255, 0),
                    2
                )

        return image