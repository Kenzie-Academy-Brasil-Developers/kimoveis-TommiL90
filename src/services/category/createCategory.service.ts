import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { tCategory, tCreateCategory } from "../../interfaces/category.interfaces";
import { categorySchema } from "../../schemas/category.schemas";


const createCategoryService = async (payload: tCreateCategory): Promise<tCategory> => {

  const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

  const category: Category = categoryRepo.create(payload)

  await categoryRepo.save(category)

  const newCategory = categorySchema.parse(category)

  return newCategory
}

export default createCategoryService;
