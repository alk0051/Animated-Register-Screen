import express, { Request, Response } from 'express';
import userController from '../controllers/userController';

const routes = express.Router();

routes.get('/createUser', (req: Request, res: Response) => {
  res.send('teste');
});

routes.get('/getUsers');

routes.get('/getUser/:id');



export default routes;
