import { Request, Response } from "express";
import { Schedule } from "../../entities";
import { tCreateSchedule } from "../../interfaces/schedule.interfaces";
import createScheduleService from "../../services/schedule/createSchedule.service";

const createSchedule = async (request: Request, response: Response) => {
  const data: tCreateSchedule = request.body;

  const idUSer: number = request.user.id;

  const newDateSchedule: Schedule = await createScheduleService(data, idUSer);

  return response.status(201).json(newDateSchedule);
};


export default { createSchedule }