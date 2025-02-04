import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { User } from "../entity/User";
import { Classroom } from "./Classroom";
import { Schedule } from "./Schedule";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => User, (professor) => professor.courses)
    professor!: User;

    @ManyToMany(() => User, (student) => student.enrolledCourses)
    @JoinTable()
    students!: User[];

    @OneToMany(() => Schedule, (schedule) => schedule.course)
    schedules!: Schedule[];

    @ManyToOne(() => Classroom, (classroom) => classroom.courses)
    classroom!: Classroom;
}
