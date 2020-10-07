import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';

import UserController from '@modules/users/infra/http/controllers/UsersController';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', ensureAuthenticated, userController.index);
userRouter.post('/', userController.create);
userRouter.delete('/:id', ensureAuthenticated, userController.delete);

export default userRouter;
