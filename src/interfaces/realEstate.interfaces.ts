import { z } from "zod";
import { createRealEstateSchema, realEstateSchema, returnRealEstateSchema } from "../schemas/realEstate.schemas";


export type tRealEstate = z.infer<typeof realEstateSchema>


export type tCreateRealEstateAndAddress = z.infer<typeof createRealEstateSchema>

export type tResponseRealEstate = z.infer<typeof returnRealEstateSchema>