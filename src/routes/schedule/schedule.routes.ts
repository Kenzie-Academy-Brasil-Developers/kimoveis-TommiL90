import { Router } from "express";
import scheduleController from "../../controllers/schedule";
import { validateBodyMiddleware, validateTokenMiddleware } from "../../middlewares";
import { createScheduleSchema } from "../../schemas/schedule.schema";



const scheduleRoutes: Router = Router();

scheduleRoutes.post(
  "",
  validateTokenMiddleware,
  validateBodyMiddleware(createScheduleSchema),
  scheduleController.createSchedule
);

export default scheduleRoutes