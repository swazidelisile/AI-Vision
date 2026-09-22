const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");
const previewContainer = document.getElementById("preview-container");

imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            imagePreview.src = event.target.result;
            previewContainer.style.display = "block";
        };

        reader.readAsDataURL(file);
    }
});