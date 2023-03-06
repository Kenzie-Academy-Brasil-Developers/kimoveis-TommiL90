import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule } from "../../entities";

const listSchedulesService = async (): Promise<Schedule[]> => {

    const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const findRealEstates: Array<Schedule> = await scheduleRepo.find({
        relations: {
            user: true,
            realEstate: true
        }
    })

    return findRealEstates
}

export default listSchedulesService;