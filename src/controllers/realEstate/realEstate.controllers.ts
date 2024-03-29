import { Request, Response } from "express";
import { tCreateRealEstateAndAddress, tRealEstate, tResponseRealEstate } from "../../interfaces/realEstate.interfaces";
import createRealStateService from "../../services/realEstate/createRealEstate.service";
import listRealEstatesService from "../../services/realEstate/RealEstateList.service";


const createRealEstate = async (request: Request, response: Response) => {

  const data: tCreateRealEstateAndAddress = request.body;

  const newRealEstate: tResponseRealEstate = await createRealStateService(data);

  return response.status(201).json(newRealEstate);
};

const listRealEstates = async (request: Request, response: Response) => {
  
    const list = await listRealEstatesService()
  
    return response.status(200).json(list)
  }

export default { createRealEstate, listRealEstates }