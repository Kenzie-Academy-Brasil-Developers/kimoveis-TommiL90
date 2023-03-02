import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error";


const verifyCategoryExistMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const categoryName: string = request.body.name;

  const userRepo = AppDataSource.getRepository(Category);

  const user = await userRepo.findOneBy({ name: categoryName });

  if (user) {
    throw new AppError("Category already exists.", 409);
  }

  return next();
};

export default verifyCategoryExistMiddleware;
