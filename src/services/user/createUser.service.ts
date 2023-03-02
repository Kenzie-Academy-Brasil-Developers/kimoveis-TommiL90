import { hashSync } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { tCreateUser, tReturnCreateUser } from "../../interfaces/user.interfaces";
import { returnCreateUserSchema } from "../../schemas/user.schemas";

const createUserService = async (payload: tCreateUser): Promise<tReturnCreateUser> => {

  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const hashedPassword = hashSync(payload.password)

  const user: User = userRepo.create({ ...payload, password: hashedPassword })

  await userRepo.save(user)

  const newUser = returnCreateUserSchema.parse(user)

  return newUser
}

export default createUserService;
