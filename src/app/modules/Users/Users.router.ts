import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './Users.controller';
import { createUserValidator } from './User.validation';

const router = express.Router();
router.post(
  '/create-user',
  validateRequest(createUserValidator.createUserZodSchema),
  UserController.createUser
);

router.get('/email/:email', UserController.getUserByEmail);
router.get('/id/:id', UserController.getUserById);
router.get('/role/:email', UserController.getUserByRole);

router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
