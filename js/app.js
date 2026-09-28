const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");
const previewContainer = document.getElementById("preview-container");


/* Image Preview */

imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if (file) {

        const imageURL = URL.createObjectURL(file);

        imagePreview.src = imageURL;

        previewContainer.style.display = "block";
    }
});


/* Object Detection */

async function detectObjects() {

    const result = document.getElementById("result");

    if (imageInput.files.length === 0) {

        result.innerHTML = `
            <p>Please select an image first.</p>
        `;

        return;
    }


    const file = imageInput.files[0];

    const formData = new FormData();

    formData.append("image", file);


    result.innerHTML = `
        <p>Detecting objects...</p>
    `;


    try {

        const response = await fetch(
            "http://127.0.0.1:5000/detect",
            {
                method: "POST",
                body: formData
            }
        );


        const data = await response.json();


        if (data.error) {

            result.innerHTML = `
                <p>Error: ${data.error}</p>
            `;

            return;
        }


        let output = `
            <h3>Detection Results</h3>

            <div class="detection-count">
                ${data.detections.length} Object(s) Detected
            </div>
        `;


        if (data.detections.length === 0) {

            output += `
                <p>No objects detected.</p>
            `;

        } else {

            output += `
                <ul>
            `;


            data.detections.forEach((detection) => {

                const confidence =
                    Math.round(detection.confidence * 100);


                output += `
                    <li>
                        <strong>${detection.object}</strong>
                        - Confidence: ${confidence}%
                    </li>
                `;

            });


            output += `
                </ul>
            `;
        }


        output += `
            <h3>Detection Result</h3>

            <img
                src="${data.image_url}?t=${Date.now()}"
                alt="Detected objects"
            >
        `;


        result.innerHTML = output;


    } catch (error) {

        result.innerHTML = `
            <p>
                Could not connect to the AIVision backend.
            </p>
        `;

        console.error(error);
    }
}