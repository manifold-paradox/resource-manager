import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Course } from "./Course";
import { Reservation } from "./Reservation";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    username!: string;

    @Column()
    password!: string;

    @Column({ type: "enum", enum: ["student", "professor", "admin"], default: "student" })
    role!: string;

    @OneToMany(() => Course, (course) => course.professor)
    courses!: Course[];

    @ManyToMany(() => Course, (course) => course.students)
    enrolledCourses!: Course[];

    @OneToMany(() => Reservation, (reservation) => reservation.professor)
    reservations!: Reservation[];
}
