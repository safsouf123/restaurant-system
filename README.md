# BAKE-ERA 🍞🥐
**Full-Stack Bakery Ordering System**

BAKE-ERA is a full-stack web application for a bakery that allows users to browse a menu, place orders, and contact the bakery. It includes user authentication, order management, and an admin panel built with **React, Node.js, Express, and MySQL**.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [User Roles](#user-roles)
- [Database Design](#database-design)
- [Installation & Setup](#installation--setup)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)

---

## Overview

BAKE-ERA simulates a real bakery ordering system.
Users can sign up, log in, browse menu items, add items to a cart, and place orders.
Admins can view and manage all user orders.

This project was developed for **CSCI426 – Advanced Web Programming (Project Phase 2)**.

---

## Features

### User Features
- User signup & login
- Browse bakery menu (fetched from database)
- View dish details
- Add items to cart
- Place orders
- View personal orders
- Contact bakery via contact form

### Admin Features
- Admin login
- View all orders from all users
- See which user placed which order
- Update order status (Pending → Completed)
- Delete orders

---

## Tech Stack

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Material UI Icons

### Backend
- Node.js
- Express.js
- MySQL (MariaDB via XAMPP)
- CORS

### Tools
- Git & GitHub
- Postman (API testing)
- XAMPP (MySQL server)

---

## User Roles

| Role | Permissions |
|------|------------|
| User | Browse menu, place orders, view own orders |
| Admin | View all orders, manage order status, delete orders |

Admin access is determined by the `role` field in the `users` table.

---

## Database Design

### Tables
- **users**
- id
- name
- email
- password
- role (`user` / `admin`)

- **menu**
- id
- name
- description
- price
- category
- temperature

- **orders**
- id
- user_id (FK → users.id)
- item_name
- quantity
- price
- status

- **contact_messages**
- id
- name
- email
- subject
- message
- created_at

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/safsuf123/restaurant-system.git 
cd restaurant-system

 

Front-end setup 
npm install
npm start
Frontend runs on:

http://localhost:3000

 
Backend setup 
cd backend
npm install
node server.js
Backend runs on:

http://localhost:5000

4. Database Setup
Start MySQL (MariaDB) using XAMPP

Create database:

CREATE DATABASE bakery_db;
Import provided SQL schema (tables + sample data)

 
API Endpoints (Examples)


Auth
POST /api/auth/signup

POST /api/auth/login



Menu
GET /api/menu

GET /api/menu/:id



Orders
POST /api/orders

GET /api/orders/:userId



Admin
GET /api/admin/orders

PUT /api/admin/orders/:id/status

DELETE /api/admin/orders/:id

 
Deployment
Frontend: GitHub Pages / Netlify

Backend: Render / Railway

Database: Railway / PlanetScale (MySQL-compatible)



Deployment was done after completing backend functionality and testing locally.

 
Future Improvements
Password hashing (bcrypt)

JWT authentication

Email notifications

Payment integration

Admin dashboard analytics

Improved UI for admin panel

 
Contributing


Contributions are welcome.

Please fork the repository and submit a pull request.


