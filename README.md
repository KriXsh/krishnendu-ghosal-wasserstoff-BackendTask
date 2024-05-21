# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

VisionMark AI Backend
Overview
VisionMark AI is a backend application that supports image annotation functionality. It allows users to register, login, upload images, view annotations, update review statuses, and export data in CSV format. The backend is built using Node.js and is hosted on Render.

Features
User Authentication: Register and login users with different roles.
Image Upload: Users can upload images directly to the server.
Annotations: View all annotations or specific annotations by ID.
Review Status: Update the review status of images.
Data Export: Export data in CSV format.
Prerequisites
Node.js (version 12 or higher)
npm (version 6 or higher)


### How do I get set up? ###
Installation
Clone the repository:
git clone https://github.com/yourusername/visionmark-ai-backend.git
cd visionmark-ai-backend
Install dependencies:
# npm install
Configure environment variables:
Create a .env file in the root directory and add the necessary configuration. Example:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the server:
# npm start


### Contribution guidelines ###

### API Endpoints
1. Register a New User
Endpoint: POST /auth/register
Request Body:
{
    "username": "adminuser3",
    "email": "aryansofficial97@gmail.com",
    "password": "adminpassword123",
    "role": "admin"
}

2. Login
Endpoint: POST /auth/login
Request Body:

{
    "username": "adminuser3",
    "password": "adminpassword123"
}

3. Upload an Image
Endpoint:POST /images/upload
Headers:

Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data
Request Body:
image=@"/path/to/your/file.pdf"

4. Get All Annotations or a Single Annotation by ID
Endpoint: GET /annotations
Headers:
Authorization: Bearer <JWT_TOKEN>

5. Update Review Status
Endpoint: POST /reviews/review
Headers:
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
Request Body:
{
    "imageId": "664b38d7725e6268a191210d",
    "status": "approved"
}

6. Export Data as CSV
Endpoint: GET /export/export?format=csv
Headers:
Authorization: Bearer <JWT_TOKEN>

### Contributing
We welcome contributions to enhance the VisionMark AI backend. To contribute, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).

### License
This project is licensed under the MIT License. See the LICENSE file for details.


### Who do I talk to? ###
For any queries or support, please contact:
Name: krish
Email: krishnendughosal999@gmail.com
Position: software devloper - backend
Thank you for using VisionMark AI!

