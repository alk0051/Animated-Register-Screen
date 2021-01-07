import express from 'express';
import userRoutes from './user.routes';
import sessionsRoutes from './sessions.routes';
import bodyParser from 'body-parser';


const routes = express.Router();

routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use('/users', userRoutes);

routes.use('/sessions', sessionsRoutes);

export default routes;
