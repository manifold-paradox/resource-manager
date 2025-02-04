import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express";
import { Course } from "./entity/Course"; 
import { User } from "./entity/User";
import { Classroom } from "./entity/Classroom";
import { Schedule } from "./entity/Schedule";
import { Reservation } from "./entity/Reservation";
import { Course_student } from "./entity/Course_student";

const app = express();
app.use(express.json());

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",  
  port: 5432,         
  username: "admin",  
  password: "secret", 
  database: "resource_manager",  
  entities: [Course, User, Classroom, Schedule, Reservation, Course_student],  
  synchronize: true,   
  migrations: ["src/migrations/*.ts"], 
  logging: true,       
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database connection failed", error);
  });
