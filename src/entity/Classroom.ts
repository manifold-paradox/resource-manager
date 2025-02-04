import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Schedule } from "./Schedule";
import { Reservation } from "./Reservation";
import { Course } from "./Course";

@Entity()
export class Classroom {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    name!: string;

    @OneToMany(() => Schedule, (schedule) => schedule.classroom)
    schedules!: Schedule[];

    @OneToMany(() => Reservation, (reservation) => reservation.classroom)
    reservations!: Reservation[];

    @OneToMany(() => Course, (course) => course.classroom)
    courses!: Course[];
}
