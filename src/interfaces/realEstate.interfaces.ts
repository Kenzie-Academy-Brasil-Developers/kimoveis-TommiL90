import { z } from "zod";
import { createRealEstateSchema, requestCreateRealEstateSchema } from "../schemas/realEstate.schemas";


export type createRealEstate  = z.infer<typeof createRealEstateSchema>


export type tCreateRealEstateAndAddress = z.infer<typeof requestCreateRealEstateSchema>