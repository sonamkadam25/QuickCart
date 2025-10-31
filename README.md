# 🛒 QickCart

![React](https://img.shields.io/badge/Frontend-React.js-blue)
![Firebase](https://img.shields.io/badge/Backend-Firebase-orange)
![ReduxToolkit](https://img.shields.io/badge/State_Management-Redux_Toolkit-purple)
![Tailwind](https://img.shields.io/badge/UI-Tailwind_CSS-38B2AC)

**QickCart** is a comprehensive **e-commerce application** that allows users to browse, add to cart, and purchase items from various product categories. Built with a focus on usability and performance, QickCart offers a seamless shopping experience from browsing to checkout.

---

##  Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

---

## 1️⃣ Features

-  **User Authentication:** Secure signup, login, and logout with Firebase Authentication  
-  **Product Browsing:** View products across various categories  
-  **Add to Cart:** Add and manage items in the shopping cart  
-  **Checkout:** Streamlined checkout and order placement  
-  **Admin Dashboard:** Manage products, users, and orders efficiently  
-  **Responsive Design:** Works seamlessly on mobile and desktop  

---

## 2️⃣ Technologies Used

- **Frontend:** React, HTML, CSS, JavaScript  
- **Backend:** Firebase (Firestore, Authentication, Hosting)  
- **State Management:** Redux Toolkit  
- **UI Styling:** Tailwind CSS, Material Tailwind  

---

## 3️⃣ Installation

1. To set up QickCart locally, follow these steps:

    Clone the repository:
    git clone https://github.com/your-username/QickCart.git
    cd QickCart
   
3. Install dependencies:

   npm install
   
5. Configure Firebase:

    Create a Firebase project and add your app.
    Set up Firebase Authentication, Firestore, and Storage.
    Copy the Firebase configuration and paste it into a .env file in the root directory:

        REACT_APP_API_KEY=your_api_key
        REACT_APP_AUTH_DOMAIN=your_auth_domain
        REACT_APP_PROJECT_ID=your_project_id
        REACT_APP_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_APP_ID=your_app_id

6. Run the application:
   npm start
   
7. Access the app:
   Open http://localhost:3000 in your browser to view the app.

---

## 4️⃣ Usage

 Sign up or log in to start shopping.
 Browse products and add items to your cart.
 Go to the cart to view selected items and adjust quantities.
 Check out to complete the purchase.
 Admin users can log in to access the admin dashboard to manage products, users, and orders.

---

## 5️⃣ Project Structure

        vite-project/
        ├── public/                    # Public assets and static files
        ├── src/                       # Main source code
        │   ├── Firebase/              # Firebase configuration
        │   ├── assets/                # Images, icons, media assets
        │   ├── components/            # Reusable UI components (e.g., navbar, footer, etc.)
        │   ├── context/               # React Context for global state
        │   ├── pages/                 # Individual app pages (e.g., home, cart, productInfo)
        │   ├── redux/                 # Redux state management (if applicable)
        │   ├── App.css                # Global CSS
        │   ├── App.jsx                # Main App component
        │   ├── index.css              # Additional global CSS
        │   └── main.jsx               # React entry point
        ├── .eslintrc.js               # ESLint config
        ├── README.md                  # Project README
        ├── index.html                 # Main HTML file
        ├── package.json               # Dependencies and scripts
        ├── tailwind.config.js         # Tailwind CSS config
        └── vite.config.js             # Vite config

---

## 6️⃣ Contributing

 Fork the project.
 Create your feature branch (git checkout -b feature/YourFeature).
 Commit your changes (git commit -m 'Add some feature').
 Push to the branch (git push origin feature/YourFeature).
 Open a pull request.

 ---

✨ Developed by **Sonam Ravindra Kadam**
    
