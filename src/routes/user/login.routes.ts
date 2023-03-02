import { Router } from "express";
import userControllers from "../../controllers/user";
import { validateBodyMiddleware } from "../../middlewares";
import { loginSchema } from "../../schemas/user.schemas";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateBodyMiddleware(loginSchema),
  userControllers.loginUser
);

export default loginRoutes;
