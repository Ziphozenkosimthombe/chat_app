import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import connectDB from './config/database.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';


const app = express(); 
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(morgan('dev'));
app.use(express.json()); // for parsing application/json
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});

