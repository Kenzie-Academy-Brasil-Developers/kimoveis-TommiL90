import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"


const listImoveisByCategory = async (id: number): Promise<> => {

    const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category)

    const category: Category | null = await categoryRepo.findOne({
        where: {
            id: id
        },
        relations: {
            
        }
    })

    if(!tag){
        throw new AppError('Tag not found', 404)
    }

    return tag

}

export default listCategoriesService;