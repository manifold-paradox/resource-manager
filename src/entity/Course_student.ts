import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Course_student {
  @PrimaryGeneratedColumn()
  course_id!: number;

  @Column("int")
  student_id!: number;

}
