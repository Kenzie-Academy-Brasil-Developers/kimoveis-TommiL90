import { z } from 'zod';
import { realEstateSchema } from './realEstate.schemas';
import { userSchema } from './user.schemas';

export const scheduleSchema = z.object({
  date: z.string().regex(/^\d{4}[-\/]\d{2}[-\/]\d{2}$/).transform((val) => val.replace('-', '/')),
  hour: z.string().regex(/^\d{2}:\d{2}$/),
  realEstate: realEstateSchema,
  user: userSchema
});


export const createScheduleSchema = scheduleSchema.omit({
    realEstate: true,
    user:true
}).extend({
    realEstateId: z.number().int().positive()
})