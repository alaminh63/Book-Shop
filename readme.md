# BookShop

## Overview

**BookShop** is a scalable bookstore management application built with Node.js, Express, MongoDB, and TypeScript. It offers a RESTful API to manage books, customers, and orders.

### Live Link

[BookShop Live](https://book-store-phi-ruby.vercel.app/)

## Features

- RESTful API for managing books, orders, and customers
- MongoDB & Mongoose for efficient database management
- TypeScript for better code quality
- Code linting & hot-reloading for faster development

## Setup

1. **Clone the Repo**
   ```bash
   git clone https://github.com/alaminh63/Book-Shop.git
   cd bookshop
   Install Dependencies
   ```

bash

npm install
Set up .env
Add your MongoDB URI and port in the .env file.

Run the Application

bash

npm run dev
API Endpoints
Create a Book
POST /api/books - Add a new book.

Get All Books
GET /api/books - Fetch all books.

Get a Specific Book
GET /api/books/:id - Fetch a book by ID.

Update a Book
PUT /api/books/:id - Update book details.

Delete a Book
DELETE /api/books/:id - Remove a book.

Order a Book
POST /api/orders - Place an order.

Revenue from Orders
GET /api/orders/revenue - Calculate total revenue.

Contact
For inquiries, email alaminhasanpro@gmail.com.

This shortened version provides the key details and setup instructions for the repository, API endpoints, and contact info, keeping it clean and to the point.
