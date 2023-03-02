import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category, User } from "../../entities"
import { tCategory } from "../../interfaces/category.interfaces"
import { categoriesListSchema } from "../../schemas/category.schemas"


const listCategoriesService = async (): Promise<tCategory[]> => {

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategories: Array<tCategory> = await categoryRepo.find()

    const categories = categoriesListSchema.parse(findCategories)

    return categories
}

export default listCategoriesService;