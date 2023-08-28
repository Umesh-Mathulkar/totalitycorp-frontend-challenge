# Totality Corp Frontend Challenge

## Table of Contents

- Overview
- Tech Stack
- Features
- Approach
- Getting Started
- Deployment
- Future Improvements
- Conclusion

## Overview

This project is an intermediate-level e-commerce website developed using React and Typescript. The website replicates a shopping site with essential features, including product listing, cart management, and checkout.

## Tech Stack

This section describes the technologies used to develop the e-commerce website.

- **Frontend**: The frontend of the website was developed using React with Typescript. React is a popular JavaScript library for building user interfaces, while Typescript is a strict syntactical superset of JavaScript that adds type checking to the language.
- **Styling**: The styling of the website was implemented using Tailwind CSS. Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined CSS classes for styling HTML elements.
- **State Management**: The state management of the website was handled using Redux with Thunk and Slice. Redux is a predictable state container for JavaScript applications, while Thunk and Slice are middleware libraries that provide additional functionality for handling asynchronous actions and organizing reducers.
- **Form Handling**: The form handling of the website was implemented using Formik with Yup. Formik is a popular library for building forms in React, while Yup is a JavaScript schema builder for value parsing and validation.
- **Backend**: The backend of the website was developed using Node.js with Express. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, while Express is a web application framework for Node.js.
- **Database**: The database used for the website was MongoDB. MongoDB is a document-based database that stores data in flexible, JSON-like documents.
- **Authentication**: The authentication for the website was implemented using JWT tokens, Passport.js, Node.js, and MongoDB. JWT tokens are used to securely transmit information between parties as a JSON object, while Passport.js is an authentication middleware for Node.js.

## Features

This section describes the features implemented in the e-commerce website.

- **Product Listing**: The product listing feature displays a variety of products with images, names, prices, and "Add to Cart" buttons. Filters allow users to sort products by category, price range, or ratings.
- **Shopping Cart**: The shopping cart feature displays the added products, quantities, and total cost. It allows users to increase, decrease, or remove items from the cart. Real-time updates of the cart total and item count are also provided.
- **Checkout**: The checkout feature calculates the total cost of items in the cart. It allows users to enter shipping information and payment details.
- **Responsive Design**: The responsive design feature ensures that the website is responsive and works seamlessly on both desktop and mobile devices. The layout is optimized for different screen sizes.
- **User Authentication (optional)**: The user authentication feature provides user registration and login functionalities using JWT tokens and Passport.js. It displays the user's name when logged in.

## Approach

This section describes the approach taken to develop the e-commerce website.

The project was developed using a modular approach with well-defined components for each feature. The state management was handled using Redux with Thunk and Slice to ensure efficient data handling and seamless user experience.

The UI design was implemented using Tailwind CSS to provide a visually appealing and user-friendly interface. Careful attention was paid to details such as color schemes, font choices, and spacing to enhance the overall look and feel of the website.

The backend was developed using Node.js with Express to handle server-side logic and data storage. MongoDB was used as the database to store user information and product data.

The authentication process was implemented using JWT tokens and Passport.js to provide secure user registration and login functionalities.

## Getting Started

This section provides instructions on how to set up and run the e-commerce website locally on your machine.

### Prerequisites

Before you can run the project locally, you will need to have the following software installed on your machine:

- Node.js
- MongoDB

### Installation

1. Clone the repository
git clone https://github.com/Umesh-Mathulkar/totalitycorp-frontend-challenge.git


2. Navigate into the project directory
cd totalitycorp-frontend-challenge


3. Install dependencies
npm install


4. Start MongoDB
mongod


5. Start the development server
npm start


6. Open your browser and navigate to `http://localhost:3000` to view the website.

## Deployment

This section provides information about the deployment of the e-commerce website.

The application is deployed on Netlify at [link to deployed application]. The deployment process involved setting up continuous integration and continuous deployment (CI/CD) pipelines to automatically build and deploy the application whenever changes were pushed to the code repository.

## Future Improvements

This section outlines potential future improvements for the e-commerce website.

- **Product Search**: Implement a product search feature to allow users to search for products by keywords or phrases.
- **User Reviews**: Implement a user review feature to allow users to rate and review products.
- **Order History**: Implement an order history feature to allow users to view their past orders and track their delivery status.
- **Payment Gateway Integration**: Integrate with a payment gateway to allow users to complete transactions within the website.
- **Enhanced User Authentication**: Enhance the user authentication process by adding features such as email verification and password reset.

## Conclusion

This section provides a conclusion for the e-commerce website project.

This project showcases my ability to develop a fully functional e-commerce website using modern web development technologies. I have demonstrated my skills in coding, UI design, logical thinking, user interaction, and critical problem-solving.

I am confident that this project will impress my employer and help me secure the job at Totality Corp. I look forward to the opportunity to contribute my skills and expertise to the company and continue to grow as a developer.
