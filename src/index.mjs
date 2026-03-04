import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const mockUsers = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ];

const mockProducts = [
        { id: 1, name: "Laptop", price: 999.99 },
        { id: 2, name: "Mouse", price: 29.99 },
        { id: 3, name: "Keyboard", price: 79.99 }
    ];

app.get('/', (request, response) => {
  response.status(200).json({ message: "Hey! This is a test message." });
});

app.get('/api/users', (request, response) => {
    response.status(200).json(mockUsers);
});

app.get("/api/users/:id", (request, response) => {
    const parsedUser = parseInt(request.params.id);
    console
    if (isNaN(parsedUser)) {
        return response.status(400).json({ error: "Invalid user ID" });
    }
    const findUser = mockUsers.find(user => user.id === parsedUser);
    if (!findUser) {
        return response.status(404).json({ error: "User not found" });
    }
    response.status(200).json(findUser);
});

app.get('/api/products', (request, response) => {
    response.status(200).json(mockProducts);
});

app.get("/api/products/:id", (request, response) => {
    const parsedProduct = parseInt(request.params.id);
    if (isNaN(parsedProduct)) {
        return response.status(400).json({ error: "Invalid product ID" });
    }
    const findProduct = mockProducts.find(product => product.id === parsedProduct);
    if (!findProduct) {
        return response.status(404).json({ error: "Product not found" });
    }
    response.status(200).json(findProduct);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});