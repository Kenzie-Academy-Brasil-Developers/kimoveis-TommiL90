import { Request, Response, NextFunction } from "express";
import { AppError } from "../../error";

const verifyUserIsAdminMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const authtenticatedAdmin = request.user.admin;
    console.log(authtenticatedAdmin)
    if (authtenticatedAdmin === false) {
      throw new AppError("Insufficient permission", 403);
    }
  
    return next();
  };

  export default verifyUserIsAdminMiddleware