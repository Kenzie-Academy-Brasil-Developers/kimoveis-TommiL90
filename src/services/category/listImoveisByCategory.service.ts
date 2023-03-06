import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../error"


const listImoveisByCategoryService = async (id: number): Promise<Category> => {

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoryRepo.findOne({
        where: {
            id: id
        },
        relations: {
            realEstate: true
        }
    })

    if(!category){
        throw new AppError('Category not found', 404)
    }

    return category

}

export default listImoveisByCategoryService;