import { Router } from 'express';

import UserController from '@modules/users/infra/http/controllers/UsersController';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', userController.index);

userRouter.post('/', userController.create);

export default userRouter;