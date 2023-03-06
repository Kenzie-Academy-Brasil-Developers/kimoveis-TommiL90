import { Request, Response } from "express";
import { RealEstate } from "../../entities";
import { tCreateSchedule } from "../../interfaces/schedule.interfaces";
import createScheduleService from "../../services/schedule/createSchedule.service";
import listScheduleByRealEstateService from "../../services/schedule/listScheduleByRealEstateService.service";


const createSchedule = async (request: Request, response: Response) => {
  const data: tCreateSchedule = request.body;

  const idUSer: number = request.user.id;

  const newDateSchedule: { message: string } = await createScheduleService(data, idUSer);

  return response.status(201).json(newDateSchedule);
};


const listScheduleByRealEstate = async (request: Request, response: Response) => {

    const idRealEstate: number = Number(request.params.id)

    const listSchedule: RealEstate = await listScheduleByRealEstateService(idRealEstate)


    return response.status(200).json(listSchedule)
}

export default { createSchedule, listScheduleByRealEstate }