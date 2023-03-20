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

  const categoryRepo = AppDataSource.getRepository(Category);

  const category = await categoryRepo.findOneBy({ name: categoryName });

  if (category) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default verifyCategoryExistMiddleware;
