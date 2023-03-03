import { z } from "zod";
import { createAddressSchema } from "../schemas/address.schema";


export type tCreateAddress = z.infer<typeof createAddressSchema>