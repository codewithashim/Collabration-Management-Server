import express from 'express';
import { UserRoutes } from '../modules/Users/Users.router';
import { TaskRoutes } from '../modules/Task/Task.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/tasks',
    route: TaskRoutes,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
