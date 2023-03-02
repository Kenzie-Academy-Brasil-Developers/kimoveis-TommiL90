import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";


const verifyEmailExistMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userEmail: string = request.body.email;
  const idMovie: number = Number(request.params.id);

  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email: userEmail });

  if (request.method === "PATCH" ) {

    if(userEmail){

      // const listMovies: tMovie[] = await listMoviesService();
      // const filteredList: tMovie[] = listMovies.filter(
      //   (movie) => movie.id !== idMovie
      // );
  
      // const nameExists: boolean = filteredList.some(
      //   (el) => el.name === movieName
      // );
  
      if (user) {
        throw new AppError(
          "Email already exists.",
          409
        );
      }
    }

    return next();
  }

  if (user) {
    throw new AppError("Email already exists.", 409);
  }

  return next();
};

export default verifyEmailExistMiddleware;
