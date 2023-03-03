import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../error";

const verifyIdUserMiddleWare = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    
    const idParam: number = Number(request.params.id);
    console.log(request.user)
    const idTokenUser = request.user.id

    const userRepo = AppDataSource.getRepository(User);
   
    const user = await userRepo.findOneBy({ id: idParam });
  


    if(!user){
        throw new AppError("User not found", 404); 
    }
  
    if ((request.method === "PATCH" || request.method === "DELETE") && request.user.admin === true) {
      return next();
    }
  
    if (idParam !== idTokenUser) {
      throw new AppError("Insufficient permission", 403);
    }
  
    return next()
  };

  export default verifyIdUserMiddleWare
  