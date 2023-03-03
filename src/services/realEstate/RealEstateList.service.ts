import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"

const listRealEstatesService = async (): Promise<RealEstate[]> => {

    const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstates: Array<RealEstate> = await realEstateRepo.find({
        relations: {
            address: true
        }
    })



    return findRealEstates
}

export default listRealEstatesService;