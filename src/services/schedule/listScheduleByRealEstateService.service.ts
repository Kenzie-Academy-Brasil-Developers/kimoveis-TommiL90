import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../error";


const listScheduleByRealEstateService = async (idRealEstate: number): Promise<RealEstate> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate: RealEstate | null = await realEstateRepo.findOne({
        where: {
            id: idRealEstate
        },
        relations: {
            schedule: true
        }
    })

    if(!findRealEstate){
        throw new AppError("RealEstate not found", 404)
    }
    return findRealEstate
}

export default listScheduleByRealEstateService;