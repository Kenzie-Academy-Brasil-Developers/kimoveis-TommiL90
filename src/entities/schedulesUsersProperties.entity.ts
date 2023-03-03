import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./realState.entity";
import { User } from "./user.entity";

@Entity("schedules_users_propierties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time without time zone" })
  hour: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;
}

export { Schedule };
