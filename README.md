# CreditSea Loan App

> A full-stack personal loan application allowing users to apply for instant loans, view repayment schedules, and manage their loan accounts seamlessly.

![License: MIT](https://img.shields.io/badge/license-MIT-green) ![Node.js](https://img.shields.io/badge/backend-Node.js-brightgreen) ![Express](https://img.shields.io/badge/framework-Express.js-blue) ![JavaScript](https://img.shields.io/badge/frontend-JavaScript-yellow)

---


🌐Deployment link 👉🏻 --- https://creditsea-loan-app-1-t35v.onrender.com

## 🚀 Table of Contents

- [About](#-about)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Repository Structure](#-repository-structure)  
- [Getting Started](#-getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Environment Variables](#environment-variables)  
  - [Running the App](#running-the-app)  
- [API Endpoints](#-api-endpoints)  
- [Contributing](#-contributing)  
- [License](#-license)  
- [Contact](#-contact)  

---

## 📖 About

**CreditSea Loan App** is a modern, full-stack loan management application.  
- **Users** can sign up, submit loan applications, check approval status, and view EMIs.  
- **Admins** can review applications, approve or reject, and manage interest rates.

---

## ✨ Features

- User authentication & authorization (JWT-based)  
- Loan application form with validation  
- Real-time EMI calculation  
- Application status tracking (Pending, Approved, Rejected)  
- Admin dashboard for loan management  
- Responsive UI for desktop & mobile  

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla or React)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (or your choice of SQL)  
- **Authentication**: JSON Web Tokens (JWT)  
- **Styling**: Basic CSS (Flexbox/Grid)  
- **Version Control**: Git & GitHub  

---

## 📁 Repository Structure

creditsea_loan_app/
├── loan-backend/ # Express.js REST API
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── app.js
│ ├── .env.example
│ ├── package.json
│ └── README.md
└── loan-frontend/ # Frontend application
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/ # API calls
│ └── App.js
├── package.json
└── README.md


---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 14  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- [MongoDB](https://www.mongodb.com/) (Atlas or local)

---

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/krishnaHRK5/creditsea_loan_app.git
   cd creditsea_loan_app
Setup Backend

bash
Copy
Edit
cd loan-backend
npm install
Setup Frontend

bash
Copy
Edit
cd ../loan-frontend
npm install
🔑 Environment Variables
Create a .env file in the loan-backend/ folder based on .env.example:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
TOKEN_EXPIRY=1d
(If you’re using a SQL database, set DB_HOST, DB_USER, DB_PASS, etc. accordingly.)

🏃 Running the App
Start the Backend

bash
Copy
Edit
cd loan-backend
npm run dev
# or
node src/app.js
The API will be available at http://localhost:5000/api.

Start the Frontend

bash
Copy
Edit
cd ../loan-frontend
npm start
The UI will open at http://localhost:3000.

📡 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login & receive JWT
POST	/api/loans/apply	Submit a new loan application
GET	/api/loans	Get user’s loan applications
GET	/api/loans/:id	Get single loan by ID
PATCH	/api/loans/:id/approve	Admin: Approve a loan
PATCH	/api/loans/:id/reject	Admin: Reject a loan


🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/my-feature)

Commit your changes (git commit -m 'feat: add some feature')

Push to the branch (git push origin feature/my-feature)

Open a Pull Request

Please follow the existing code style and include clear commit messages.

📜 License
Distributed under the MIT License. See LICENSE for more information.

📬 Contact
Harish Yatham

GitHub: krishnaHRK5

LinkedIn: https://www.linkedin.com/in/harish-rama-krishnayatham

Email: harish74021@gmail.com

Feel free to open issues or reach out if you have any questions!



**How to use:**  
1. Place this `README.md` in your repo root.  
2. Adjust any paths, ports, or environment‐variable names to reflect exactly what your code uses.  
3. Add or remove API endpoints and feature bullet points as needed.  



