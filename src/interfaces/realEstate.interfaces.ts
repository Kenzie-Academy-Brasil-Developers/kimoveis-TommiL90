import { z } from "zod";
import { createRealEstateSchema, realEstateSchema, requestCreateRealEstateSchema } from "../schemas/realEstate.schemas";


export type tRealEstate = z.infer<typeof realEstateSchema>

export type createRealEstate  = z.infer<typeof createRealEstateSchema>


export type tCreateRealEstateAndAddress = z.infer<typeof requestCreateRealEstateSchema>