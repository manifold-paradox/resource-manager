import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Course } from "./Course";
import { Classroom } from "./Classroom";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Course, (course) => course.schedules)
    course!: Course;

    @ManyToOne(() => Classroom, (classroom) => classroom.schedules)
    classroom!: Classroom;

    @Column({ type: "timestamp" })
    start_time!: Date;

    @Column({ type: "timestamp" })
    end_time!: Date;
}
