import { Router } from "express";
import userControllers from "../../controllers/user";
import {
  validateBodyMiddleware,
  verifyEmailExistMiddleware,
  validateTokenMiddleware,
  verifyUserIsAdminMiddleware,
  verifyIdUserMiddleWare,
} from "../../middlewares";
import { createUserschema, updateUserSchema } from "../../schemas/user.schemas";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  validateBodyMiddleware(createUserschema),
  verifyEmailExistMiddleware,
  userControllers.createUser
);

userRoutes.get(
  "",
  validateTokenMiddleware,
  verifyUserIsAdminMiddleware,
  userControllers.listUsers
);

userRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  verifyIdUserMiddleWare,
  validateBodyMiddleware(updateUserSchema),
  userControllers.updateUser
);

userRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  verifyIdUserMiddleWare,
  userControllers.deleteUser
);

export default userRoutes;
