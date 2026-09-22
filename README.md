# AIVision – AI Object Detection System

## Project Overview

AIVision is an AI-powered object detection system developed using Python and YOLO. The system allows users to upload or provide an image and uses a trained object detection model to identify objects in the image.

The project includes a Python backend and a web-based frontend that allows users to interact with the system.

## Features

* AI-powered object detection
* Image upload and preview
* Detection of objects in images
* Displays detected objects and their locations
* Web-based user interface
* Python backend
* YOLO object detection model

## Technologies Used

* Python
* YOLO
* OpenCV
* HTML
* CSS
* JavaScript

## Project Structure

```text
AIVision/
│
├── src/
│   ├── backend/
│   │   ├── app.py
│   │   ├── detector.py
│   │   └── detected_image.jpg
│   │
│   ├── frontend/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   └── dashboard.js
│   │   ├── dashboard.html
│   │   └── index.html
│   │
│   └── script.js
│
├── docs/
├── screenshots/
├── .gitignore
├── README.md
└── yolo11n.pt
```

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/swazidelisile/AI-Vision.git
```

### 2. Open the project folder

```bash
cd AI-Vision
```

### 3. Create and activate a virtual environment

Windows PowerShell:

```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

### 4. Install the required packages

Install the Python packages required by the project.

```bash
pip install ultralytics opencv-python flask
```

### 5. Run the application

```bash
python src/backend/app.py
```

Open the local address provided by the application in your web browser.

## Project Purpose

The purpose of AIVision is to demonstrate the practical use of artificial intelligence and computer vision in an image-based object detection application.

The project demonstrates skills in Python programming, AI development, computer vision, web development, and integrating a machine learning model into an application.

## Future Improvements

* Add more object detection features
* Improve the user interface
* Add real-time camera detection
* Improve detection accuracy
* Add detection history
* Deploy the application online

## Author

**Swazi Delisile Magudulela**

Bachelor of Commerce in Information & Technology Management

AI Software Development
