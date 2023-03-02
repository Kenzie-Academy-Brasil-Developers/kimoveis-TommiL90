import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { tListUsers } from "../../interfaces/user.interfaces"
import { userListSchema } from "../../schemas/user.schemas"


const listUsersService = async (): Promise<tListUsers> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUsers: Array<User> = await userRepository.find()

    const users = userListSchema.parse(findUsers)

    return users
}

export default listUsersService;