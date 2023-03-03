import { Router } from "express";
import realEstateControllers from "../../controllers/realEstate";
import { validateTokenMiddleware, verifyUserIsAdminMiddleware, validateBodyMiddleware } from "../../middlewares";
import { requestCreateRealEstateSchema } from "../../schemas/realEstate.schemas";


const realEstatesRoutes: Router = Router();

realEstatesRoutes.post(
  "",
  validateTokenMiddleware,
  verifyUserIsAdminMiddleware,
  validateBodyMiddleware(requestCreateRealEstateSchema),
  realEstateControllers.createRealEstate
);


realEstatesRoutes.get(
  "",
  realEstateControllers.listRealEstates
);

export default realEstatesRoutes