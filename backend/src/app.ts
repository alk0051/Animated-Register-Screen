import express from 'express';
import mongoose from 'mongoose';
import connectDB from './connection';
import routes from './routes/routes';

const app = express();

connectDB();

app.use(routes);

app.listen(4444);

console.log("Listen in 4444...")
