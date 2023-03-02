
import { DeepPartial } from "typeorm";
import { z } from "zod";
import { createUserschema, returnCreateUserSchema, updateUserSchema, userListSchema, userSchema } from "../schemas/user.schemas";



export type tUser = z.infer<typeof userSchema>

export type tCreateUser = z.infer<typeof createUserschema>

export type tReturnCreateUser = z.infer<typeof returnCreateUserSchema>

export type tListUsers = z.infer<typeof userListSchema>

export type tLoginUser = Pick<tUser, "email" | "password">

export type tUserUpdate = DeepPartial<tCreateUser>