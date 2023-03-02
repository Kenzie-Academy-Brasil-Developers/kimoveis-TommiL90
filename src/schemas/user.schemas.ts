import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(45),
  email: z.string().email().max(100),
  password: z.string().max(120),
  admin: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  deletedAt: z.date().nullish(),
});

export const createUserschema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
})

export const returnCreateUserSchema = userSchema.omit({
  password: true
})

export const userListSchema = returnCreateUserSchema.array()

export const loginSchema = userSchema.pick({
  email: true,
  password: true
})

export const updateUserSchema = createUserschema.partial({
  name: true,
  email: true,
  password: true
}).omit({
  admin:true
})