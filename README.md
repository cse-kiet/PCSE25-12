# Title of Project: CROP RECOMMENDATION SYSTEM USING SOIL AND CLIMATE: A COMPARATIVE STUDY

## Team Members:
1. Alok
2. Alok Pal
3. Ankit Gupta


## Steps for Execution:
# [CropMate - MERN, React Native, Flask, Machine Learning](https://crop-mate.vercel.app/)

> CropMate is a comprehensive agricultural project aimed at revolutionizing farming practices by leveraging technology and data-driven insights. It consists of several components, including a React web application, a mobile application developed using React Native, a server-side MERN Stack backend, and ensembled machine learning model for  precise recommendation for the crops based on soil parameters.

## Features
- **Crop Recommendation**: Utilizes machine learning algorithms to provide personalized crop recommendations based on soil and environmental data.
- **RestAPIs**: Single API calls for both web app and mobile app
- **Secure**: The application is secured with Brypt and JWT libraries.
- **Community Forum**: Facilitates knowledge sharing and collaboration among farmers through a dedicated forum.
- **User Authentication**: Users can sign up, log in, and log out securely.

## Technologies Used

- **MongoDB**: NoSQL database used for storing user data, posts, and other information.
- **Express.js**: Web application framework for building APIs and handling HTTP requests.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime environment used for server-side logic.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **React Native**: UI software framework used to develop applications for Android, iOS.
- **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
- **Bcrypt**: Used for encrypting user passwords.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Flask**: Micro web framework written in Python used to load and run the ML model and interact with it.


## Project Structure
The project is organized into the following folders:

- **App**: Contains the code for the mobile application developed using Expo and React Native.
- **Server**: Houses the backend server implementation using the MERN stack (MongoDB, Express.js, React.js, Node.js).
- **Client**: Contains the code for the web application frontend, developed using React.js.
- **ML**: Includes the machine learning module responsible for crop recommendation, implemented using Python.

<h3>How to run</h3>
To run CropMate on your local machine, follow these steps:

1. Clone the Repository
   ```bash
   git clone https://github.com/your-username/cropmate.git
   cd cropmate
   ```


2. Install Dependencies
- **Server**
   ```bash
   cd server
   npm install
   ```

- **Client**
   ```bash
  cd client
  npm install
   ````

- **App**
   ```bash
   cd app
  npm install
   ````

- **ML**
   ```bash
   pip install numpy
   pip install pandas
   pip install sklearn
   pip install requests
   pip install pickle
   ````

4. Set Up MongoDB
Ensure you have MongoDB installed and running on your system. Update the MongoDB connection string in the server code if necessary.

5. Start the Servers
- Server
  ```bash
  cd server
  npm start
  ````
  
- **Client**
   ```bash
  cd client
  npm run dev
   ````

- **App**
   ```bash
   cd app
   npx expo start
   ````

- **ML**
   ```bash
   cd ml
   python app.py 
   ````

6. Access the Application
Web App: Open your web browser and go to http://localhost:3000.
Mobile App: Use the Expo app to scan the QR code generated after running the Expo server.



## Checklist:
1. Final Project Report
2. Certificate VII Semester (Dated: December 2024).
3. Certificate VIII Semester (Dated: May 2025).
4. Synopsis
5. Final Presentation
6. Source Code
7. Database dump (.sql file)
8. If a web project, then a Docker file for deployment
9. README (This file)