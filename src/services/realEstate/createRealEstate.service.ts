import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import { tCategory, tCreateCategory } from "../../interfaces/category.interfaces";
import { tCreateRealEstateAndAddress } from "../../interfaces/realEstate.interfaces";
import { createAddressSchema } from "../../schemas/address.schema";
import { categorySchema } from "../../schemas/category.schemas";
import { createRealEstateSchema } from "../../schemas/realEstate.schemas";


const createRealStateService = async (payload: tCreateRealEstateAndAddress): Promise<RealEstate> => {
console.log(payload.zipCode)
  const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)

  const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

  const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

  const newaddress = createAddressSchema.parse(payload)
  const address: Address = addressRepo.create(newaddress)
  await addressRepo.save(address)

  const category: Category | null = await categoryRepo.findOneBy({
      id: payload.categoryId
})

if(!category){
    throw new AppError('Category not found', 404)
}

const { size, value } = createRealEstateSchema.parse({...payload})

const realEstate: RealEstate = realEstateRepo.create({
    value: value,
    size: size,
    address: address!,
    category: category
})

await realEstateRepo.save(realEstate)
  

return realEstate
}

export default createRealStateService;
