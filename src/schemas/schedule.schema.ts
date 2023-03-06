import { z } from "zod";
import { realEstateSchema } from "./realEstate.schemas";
import { returnCreateUserSchema, userSchema } from "./user.schemas";

export const scheduleSchema = z.object({
  id: z.number().int().positive(),
  date: z
    .string()
    .regex(/^\d{4}[-\/]\d{2}[-\/]\d{2}$/)
    .transform((val) => val.replace("-", "/")),
  hour: z.string().regex(/^\d{2}:\d{2}$/),
  realEstate: realEstateSchema,
  user: userSchema,
});

export const createScheduleSchema = scheduleSchema
  .omit({
    id: true,
    realEstate: true,
    user: true,
  })
  .extend({
    realEstateId: z.number().int().positive(),
  });

export const scheduleSchemaByRealEstate = z.object({
  id: z.number().int().positive(),
  sold: z.boolean(),
  value: z.string(),
  size: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  user: returnCreateUserSchema,
  realEstate: realEstateSchema
  
})
