import express from 'express';
import dotenv from 'dotenv';

import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';


const app = express(); 
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use("/api/auth", authRoutes);
app.use(express.json()); // for parsing application/json

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});

