import { Router } from "express";
import categoryControllers from "../../controllers/category";
import {
  validateTokenMiddleware,
  validateBodyMiddleware,
  verifyUserIsAdminMiddleware,
  verifyCategoryExistMiddleware,
} from "../../middlewares";
import { createCategorySchema } from "../../schemas/category.schemas";

const categoryRoutes: Router = Router();

categoryRoutes.post(
  "",
  validateTokenMiddleware,
  verifyUserIsAdminMiddleware,
  validateBodyMiddleware(createCategorySchema),
  verifyCategoryExistMiddleware,
  categoryControllers.createCategory
);

categoryRoutes.get("", categoryControllers.categoriesList);

categoryRoutes.get("/:id/realEstate", categoryControllers.listImoveisByCategory)

export default categoryRoutes;
