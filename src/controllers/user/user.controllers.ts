import { Request, Response } from "express";
import { tCreateUser, tListUsers } from "../../interfaces/user.interfaces";
import { createUserService, deleteUserService, listUsersService, loginUserService, updateUserService } from "../../services";

const createUser = async (request: Request, response: Response) => {
  const userData: tCreateUser = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

const loginUser = async (request: Request, response: Response) => {
    const token: string = await loginUserService(request.body);
  
    return response.status(200).json({ token: token });
  };

const listUsers = async (request: Request, response: Response) => {
  const userList: tListUsers = await listUsersService();

  return response.status(200).json(userList);
};

const updateUser = async (request: Request, response: Response) => {
  const id: number = Number(request.params.id)

  const updatedUser = await updateUserService(request.body, id)

  return response.status(200).json(updatedUser)
}

const deleteUser = async (request: Request, response: Response) => {

  const id: number = Number(request.params.id)

  await deleteUserService(id)

  response.status(204).send()
}

export default { createUser, listUsers, loginUser, updateUser, deleteUser };
