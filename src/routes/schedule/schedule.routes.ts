import { Router } from "express";
import scheduleController from "../../controllers/schedule";
import {
  validateBodyMiddleware,
  validateTokenMiddleware,
  verifyUserIsAdminMiddleware,
} from "../../middlewares";
import { createScheduleSchema } from "../../schemas/schedule.schema";

const scheduleRoutes: Router = Router();

scheduleRoutes.post(
  "",
  validateTokenMiddleware,
  validateBodyMiddleware(createScheduleSchema),
  scheduleController.createSchedule
);

scheduleRoutes.get(
  "",
  validateTokenMiddleware,
  verifyUserIsAdminMiddleware,
  scheduleController.listSchedules
);

export default scheduleRoutes;
