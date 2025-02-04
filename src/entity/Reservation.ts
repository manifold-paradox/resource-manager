import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./User";
import { Classroom } from "./Classroom";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => User, (user) => user.reservations)
    professor!: User;

    @ManyToOne(() => Classroom, (classroom) => classroom.reservations)
    classroom!: Classroom;

    @Column({ type: "timestamp" })
    date!: Date;
}
