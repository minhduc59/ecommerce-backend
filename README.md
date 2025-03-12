# E-commerce Backend

This is the backend for an e-commerce application built with Node.js, Express, and MongoDB.  
It provides APIs for user authentication, product management, order processing, and payment handling.

## Usage  
Start the server:  
```sh
npm start
```

## API Endpoints  

### **User Routes**
- **POST** `/api/v1/register` - Register a new user  
- **POST** `/api/v1/login` - Login a user  
- **POST** `/api/v1/password/forgot` - Forgot password  
- **PUT** `/api/v1/password/reset/:token` - Reset password  
- **GET** `/api/v1/logout` - Logout a user  
- **GET** `/api/v1/me` - Get user details  
- **PUT** `/api/v1/password/update` - Update user password  
- **PUT** `/api/v1/me/update` - Update user profile  
- **GET** `/api/v1/admin/user/:id` - Get single user (admin)  
- **GET** `/api/v1/admin/users` - Get all users (admin)  
- **DELETE** `/api/v1/admin/user/:id` - Delete user (admin)  
- **PUT** `/api/v1/admin/user/:id` - Update user role (admin)  

### **Product Routes**
- **GET** `/api/v1/products` - Get all products  
- **GET** `/api/v1/admin/products` - Get all products (admin)  
- **POST** `/api/v1/admin/products/new` - Create new product (admin)  
- **PUT** `/api/v1/admin/product/:id` - Update product (admin)  
- **DELETE** `/api/v1/admin/product/:id` - Delete product (admin)  
- **POST** `/api/v1/review` - Create product review  
- **GET** `/api/v1/product/:id` - Get product details  
- **GET** `/api/v1/reviews` - Get all reviews  
- **DELETE** `/api/v1/reviewsDelete` - Delete review  

### **Order Routes**
- **POST** `/api/v1/order/new` - Create new order  
- **GET** `/api/v1/order/:id` - Get single order  
- **GET** `/api/v1/orders/me` - Get logged-in user's orders  
- **GET** `/api/v1/admin/orders` - Get all orders (admin)  
- **PUT** `/api/v1/admin/order/:id` - Update order status (admin)  
- **DELETE** `/api/v1/admin/order/:id` - Delete order  

### **Payment Routes**
- **POST** `/api/v1/payment/process` - Process payment  
- **GET** `/api/v1/stripeapikey` - Get Stripe API key  

