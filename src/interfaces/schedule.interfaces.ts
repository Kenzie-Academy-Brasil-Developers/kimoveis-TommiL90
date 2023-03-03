import { z } from "zod";
import { createScheduleSchema } from "../schemas/schedule.schema";


export type tCreateSchedule  = z.infer<typeof createScheduleSchema>