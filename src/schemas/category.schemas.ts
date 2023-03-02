import { z } from "zod";

export const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().min(3).max(45)
})

export const createCategorySchema = categorySchema.omit({
    id: true
})

export const categoriesListSchema = categorySchema.array()