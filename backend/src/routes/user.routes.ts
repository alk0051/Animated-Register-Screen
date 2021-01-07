import express from 'express';
import { showUsers, createUser, deleteUser, updateUser } from '../controllers/userController';
import sessionsRouter from './sessions.routes';

const routes = express.Router();


routes.get('/', showUsers);

routes.post('/createUser', createUser);

routes.delete('/:id', deleteUser);

routes.put('/:id', updateUser);

routes.use('/sessions', sessionsRouter);

export default routes;
