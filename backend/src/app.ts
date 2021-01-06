import express from 'express';
import connectDB from './connection';
import routes from './routes/routes';
import cors from 'cors';

const app = express();


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


connectDB();

app.use(routes);

app.listen(4444);

console.log("Listen in 4444...")
