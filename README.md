<div align="center">



# 👗 Stylish Wear Aesthetics

✨ Modern • Secure • Feature-Rich  
A scalable e-commerce platform with secure authentication, role-based dashboards, dynamic product management, real-time order handling, and advanced analytics for seamless shopping experiences.

<br/>

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-4ade80?style=for-the-badge)](https://stylish-wear-aesthetics-ctjc.vercel.app/)
[![GitHub](https://img.shields.io/badge/GITHUB-REPOSITORY-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shubham-kumar145/Stylish-Wear-Aesthetics)
[![Frontend](https://img.shields.io/badge/FRONTEND-REACT-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/BACKEND-NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/DATABASE-MONGODB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind](https://img.shields.io/badge/STYLING-TAILWIND_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux](https://img.shields.io/badge/STATE-REDUX_TOOLKIT-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![PayPal](https://img.shields.io/badge/PAYMENT-PAYPAL-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://developer.paypal.com/)
[![Cloudinary](https://img.shields.io/badge/IMAGES-CLOUDINARY-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Vercel](https://img.shields.io/badge/HOSTED_ON-VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/API_ON-RENDER-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

</div>

---

## 📌 Project Overview

**Stylish Wear Aesthetics** is a production-grade **Full Stack MERN E-Commerce Platform** with role-based access control, secure PayPal payment integration, and a fully-featured admin dashboard.

Customers can browse a curated fashion catalog, manage their cart, and check out securely. Admins get a dedicated control panel to manage products, orders, banners, and inventory — all with JWT-protected routes and role-based authorization baked in from the ground up.

> 💡 **Best experienced on Desktop** for the full shopping and admin dashboard experience.

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/shubham-kumar145/Stylish-Wear-Aesthetics.git
cd Stylish-Wear-Aesthetics
```

**Frontend**
```bash
cd client
npm install
npm run dev
```

**Backend**
```bash
cd server
npm install
npm start
```

Then open **http://localhost:5173** for the frontend and configure your `.env` for the backend.

---

## ✨ Features

### 👤 User Features
- JWT-based user authentication (register, login, logout)
- Browse products by category with search and filtering
- Detailed product pages with images, pricing, and description
- Add to cart, update quantities, and remove items
- Secure checkout flow with **PayPal Payment Gateway**
- Order placement with confirmation and transaction ID storage
- Full order history to track past purchases
- Fully responsive UI across all screen sizes

### 🛠️ Admin Features
- Dedicated **Admin Dashboard** with key metrics
- Add, update, and delete products with Cloudinary image upload
- Manage and update order statuses across all customers
- Feature banner management for homepage promotions
- Inventory control — track stock levels across products
- Role-based access control — admins and users are fully separated

### 💳 Payment Integration
- **PayPal** payment gateway with sandbox and live support
- Secure payment processing with error and failure handling
- Orders only created on successful payment confirmation
- Transaction IDs stored against each order for reference

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Tailwind CSS, Vite, React Router, Redux Toolkit, Axios |
| **Backend** | Node.js, Express.js, REST APIs, JWT Authentication |
| **Database** | MongoDB, Mongoose ODM |
| **Payments** | PayPal Payment Gateway |
| **Image Storage** | Cloudinary |
| **Deployment** | Vercel (Frontend) · Render (Backend) |

---

## 🔐 Security

```
All routes are protected at the API level — not just the frontend.

  JWT Authentication    →  Stateless, token-based user sessions
  Role-Based Access     →  Admin routes reject non-admin tokens server-side
  Protected Routes      →  Frontend guards redirect unauthorized users
  Error Middleware      →  Centralized API error handling
  Secure Payments       →  PayPal handles all card/transaction data
```

---

## 🗂️ Project Structure

```
Stylish-Wear-Aesthetics/
│
├── client/                        # React frontend
│   ├── public/
│   └── src/
│       ├── assets/                # Images, icons, static files
│       ├── components/            # Reusable UI components
│       ├── config/                # Axios config, constants
│       ├── lib/                   # Utility functions
│       ├── pages/                 # Route-level page components
│       ├── store/                 # Redux Toolkit slices & store
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/                        # Node.js + Express backend
│   ├── controllers/               # Route handler logic
│   ├── helpers/                   # Cloudinary, PayPal utilities
│   ├── models/                    # Mongoose schemas
│   ├── routes/                    # API route definitions
│   └── server.js                  # Entry point
│
└── README.md
```

---

## 📄 Pages

### 👤 User Pages
| Page | Description |
|---|---|
| 🏠 Home | Featured banners, product highlights, categories |
| 🛍️ Product Listing | Browse all products with filters and sorting |
| 📦 Product Details | Full product view with add-to-cart |
| 🛒 Cart | Manage items, quantities, and subtotal |
| 💳 Checkout | Address, payment, and PayPal integration |
| 📋 Order History | View all past orders and statuses |

### 🛠️ Admin Pages
| Page | Description |
|---|---|
| 📊 Dashboard | Overview of orders, products, and revenue |
| ➕ Add Product | Upload product with Cloudinary image |
| ✏️ Update Product | Edit existing product details |
| 🗑️ Delete Product | Remove products from catalog |
| 📬 Manage Orders | View and update all customer orders |
| 🖼️ Feature Banner | Control homepage promotional banners |

---

## 🔮 Roadmap

- [ ] 🔍 **Advanced Search & Filters** — search by price range, rating, brand
- [ ] ⭐ **Product Reviews & Ratings** — customer feedback system
- [ ] ❤️ **Wishlist** — save favourite items for later
- [ ] 📧 **Email Notifications** — order confirmation and status updates
- [ ] 📱 **Mobile-Optimized UI** — dedicated mobile shopping experience
- [ ] 📲 **PWA Support** — installable, works offline
- [ ] 📊 **Admin Analytics** — revenue charts, top products, sales trends
- [ ] 🚚 **Shipment Tracking** — real-time delivery status updates
- [ ] 🏷️ **Discount Codes & Coupons** — promotional pricing engine
- [ ] 🌍 **Multi-Currency Support** — localized pricing for global users

---

## 👩‍💻 Author

<div align="center">

### Ayushi Kumari
**Frontend Developer · MERN Stack Developer · React Enthusiast**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayushi-kumari48/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayushi48)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ayushikr2016@gmail.com)

</div>

---

<div align="center">

**⭐ If this project impressed you, a star on GitHub means a lot!**

*Full Stack MERN · Role-Based Access · PayPal Payments · Cloudinary Images*

</div>
