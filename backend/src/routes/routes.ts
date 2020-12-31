import express, { Request, Response } from 'express';
import UserController from '../controllers/userController';

const routes = express.Router();


routes.get('/getUsers', UserController.show);

routes.post('/createUser', UserController.create);

routes.get('/getUser/:id');


export default routes;