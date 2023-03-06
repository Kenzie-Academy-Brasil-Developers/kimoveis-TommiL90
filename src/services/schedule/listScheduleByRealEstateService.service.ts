import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../error";
import { scheduleSchemaByRealEstate } from "../../schemas/schedule.schema";


const listScheduleByRealEstateService = async (idRealEstate: number): Promise<RealEstate> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate = await realEstateRepo
    .createQueryBuilder("realEstate")
    .innerJoinAndSelect("realEstate.address", "address")
    .leftJoinAndSelect("realEstate.schedules", "schedule")
    .leftJoinAndSelect("schedule.user", "user.id")
    .leftJoinAndSelect("realEstate.category", "category")
    .where("realEstate.id = :id", { id: idRealEstate })
    .getOne();

    if(!findRealEstate){
        throw new AppError("RealEstate not found", 404)
    }
    console.log(findRealEstate)
    return findRealEstate
}

export default listScheduleByRealEstateService;