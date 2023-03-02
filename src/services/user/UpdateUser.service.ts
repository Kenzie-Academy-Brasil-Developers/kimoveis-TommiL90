import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tReturnCreateUser, tUserUpdate } from "../../interfaces/user.interfaces";
import { returnCreateUserSchema, updateUserSchema } from "../../schemas/user.schemas";

const updateUserService = async (payload: tUserUpdate, id: number): Promise<tReturnCreateUser> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepo.findOneBy({
        id: id
    });

    const updateUser = userRepo.create({
        ...user,
        ...payload
    })

    await userRepo.save(updateUser)

    return returnCreateUserSchema.parse(updateUser)
}

export default updateUserService