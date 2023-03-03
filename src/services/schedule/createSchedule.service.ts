import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../error";
import { tCreateSchedule } from "../../interfaces/schedule.interfaces";

const createScheduleService = async (
  { date, hour, realEstateId }: tCreateSchedule,
  idUser: number
): Promise<Schedule> => {

  const formatedDate = new Date(date)

  const scheduleRepo: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const realEstateRepo: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  // Verificar se a visita já foi agendada para a mesma data e hora
  const scheduleExists = await scheduleRepo
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date })
    .andWhere("schedule.hour = :hour", { hour })
    .andWhere("schedule.propertyId = :realEstateId", { realEstateId })
    .getOne();

  if (scheduleExists) {
    throw new AppError("Visita já agendada para essa data e horário.", 409);
  }

  // Verificar se o usuário já tem outra visita agendada para a mesma data e hora
  const userHasSchedule = await scheduleRepo
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date })
    .andWhere("schedule.hour = :hour", { hour })
    .andWhere("schedule.user = :idUser", { idUser })
    .getOne();

  if (userHasSchedule) {
    throw new AppError(
      "Usuário já tem outra visita agendada para essa data e horário.",
      409
    );
  }

  // Verificar se o horário está dentro do intervalo de horário comercial (08:00 - 18:00)
  const hourParts = hour.split(":");
  const visitHour = parseInt(hourParts[0], 10);
  if (visitHour < 8 || visitHour >= 18) {
    throw new AppError(
      "A visita só pode ser agendada durante o horário comercial (08:00 - 18:00).",
      400
    );
  }

  // Verificar se a data é um dia útil (segunda a sexta)
  const visitDate = formatedDate;
  const dayOfWeek = visitDate.getUTCDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    throw new AppError(
      "A visita só pode ser agendada em dias úteis (segunda a sexta).",
      400
    );
  }

  const user: User | null = await userRepo.findOneBy({
    id: idUser,
  });

  const realEstate: RealEstate | null = await realEstateRepo.findOneBy({
    id: realEstateId,
  });

  if (!realEstate) {
    throw new AppError("realEstate not found", 404);
  }

  const schedule: Schedule = scheduleRepo.create({
    date: formatedDate,
    hour: hour,
    realEstate: realEstate,
    user: user!,
  });

  await scheduleRepo.save(schedule);

  const newSchedule = schedule;

  return newSchedule;
};

export default createScheduleService;
