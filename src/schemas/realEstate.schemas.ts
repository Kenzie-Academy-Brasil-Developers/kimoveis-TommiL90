import { union, z } from "zod";
import { addressSchema, createAddressSchema } from "./address.schema";
import { categorySchema } from "./category.schemas";

export const realEstateSchema = z.object({
    id: z.number().positive().int(),
    sold: z.boolean().default(false),
    value: union([
        z.string().min(0).max(9999999999.99).transform((val) => parseFloat(val).toFixed(2)),
        z.number().min(0).max(9999999999.99).transform((val) => parseFloat(val.toFixed(2))),
      ]),
    size: z.number().int().positive(),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: addressSchema,
    category: categorySchema
  });

export const createRealEstateSchema = realEstateSchema.omit({
    id: true,
    address: true,
    category: true,
    createdAt: true,
    updatedAt: true,
}).extend({
    categoryId: z.number(),
    address: z.object({
      street: z.string().max(45),
      zipCode: z.string().max(8),
      number: z.string().max(7).optional(),
      city: z.string().max(20),
      state: z.string().max(2)
    })
})




export const returnRealEstateSchema = realEstateSchema