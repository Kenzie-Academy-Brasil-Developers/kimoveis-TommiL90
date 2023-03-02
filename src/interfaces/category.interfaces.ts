import { z } from "zod"
import { categorySchema, createCategorySchema } from "../schemas/category.schemas"

export type tCategory = z.infer<typeof categorySchema>

export type tCreateCategory = z.infer<typeof createCategorySchema>