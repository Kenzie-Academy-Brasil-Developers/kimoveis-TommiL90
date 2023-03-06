import { Request, Response } from "express";
import { request } from "http";
import { Schedule } from "../../entities";
import { tCreateSchedule } from "../../interfaces/schedule.interfaces";
import createScheduleService from "../../services/schedule/createSchedule.service";
import listSchedulesService from "../../services/schedule/listSchedule.service";

const createSchedule = async (request: Request, response: Response) => {
  const data: tCreateSchedule = request.body;

  const idUSer: number = request.user.id;

  const newDateSchedule: Schedule = await createScheduleService(data, idUSer);

  return response.status(201).json(newDateSchedule);
};


const listSchedules = async (request: Request, response: Response) => {

    const listSchedules: Array<Schedule> = await listSchedulesService()


    return response.status(200).json(listSchedules)
}

export default { createSchedule, listSchedules }