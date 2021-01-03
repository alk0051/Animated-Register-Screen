import express from 'express';
import bodyParser from 'body-parser';
import { showUsers, createUser, deleteUser, updateUser } from '../controllers/userController';


const routes = express.Router();

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.get('/getUsers', showUsers);

routes.post('/createUser', createUser);

routes.delete('/:id', deleteUser);

routes.put('/:id', updateUser);


export default routes;