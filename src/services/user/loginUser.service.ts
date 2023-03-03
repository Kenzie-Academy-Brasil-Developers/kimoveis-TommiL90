import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";
import { tLoginUser } from "../../interfaces/user.interfaces";

const loginUserService = async (payload: tLoginUser): Promise<string> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: payload.email });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const pwdMatch: boolean = await compare(payload.password, user.password);

  if (!pwdMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { admin: user.admin },
    String(process.env.SECRET_KEY),
    { expiresIn: "24h", subject: String(user.id) }
  );

  return token
};


export default loginUserService