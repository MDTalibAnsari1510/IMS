import express, { json, urlencoded } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
import cors from 'cors';
import { DBHOST, DBPORT, DATABASE, PORT, DEFAULTUSERNAME, DEFAULTUSERPASSWORD } from './config/config.js';
import apiRoute from './src/v1/api.route.js';
import { createDefaultUser } from './src/v1/controller/user/user.controller.js';
const { connect, set, connection } = mongoose;

//Middleware
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ limit: '50mb', extended: false }));
app.use(cors());

// DB connection
connect(`mongodb://${DBHOST}:${DBPORT}/${DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    createDefaultUser(DEFAULTUSERNAME, DEFAULTUSERPASSWORD);
})
    .catch(err => console.error('MongoDB connection error:', err));

//API_routes
app.use('/v1', apiRoute);

// server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
}); 