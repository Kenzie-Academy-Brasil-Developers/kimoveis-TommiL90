import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import { tCreateRealEstateAndAddress, tRealEstate } from "../../interfaces/realEstate.interfaces";
import { createAddressSchema } from "../../schemas/address.schema";
import { createRealEstateSchema, realEstateSchema } from "../../schemas/realEstate.schemas";


const createRealStateService = async (payload: tCreateRealEstateAndAddress): Promise<tRealEstate> => {
console.log(payload.zipCode)
  const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)

  const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

if (payload.number) {
    
    const addressExists: Address | null = await addressRepo.findOne({
      where:{
          street: payload.street,
          number: payload.number, 
          city: payload.city
      }
    });
  
    if(addressExists){
      throw new AppError(
        "Address already exists",
        409
      );
    }
}

  const newaddress = createAddressSchema.parse(payload)
  const address: Address = addressRepo.create(newaddress)
  await addressRepo.save(address)

  const category: Category | null = await categoryRepo.findOneBy({
      id: payload.categoryId
})

if(!category){
    throw new AppError('Category not found', 404)
}

const { size, value, sold } = createRealEstateSchema.parse({...payload})

const realEstate: RealEstate = realEstateRepo.create({
    value: value,
    size: size,
    sold: sold,
    address: address!,
    category: category
})

await realEstateRepo.save(realEstate)
  
const resRealEstateRepo = realEstateSchema.parse(realEstate)
return resRealEstateRepo
}

export default createRealStateService;
