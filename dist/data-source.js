"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const Course_1 = require("./entity/Course");
const User_1 = require("./entity/User");
const Classroom_1 = require("./entity/Classroom");
const Schedule_1 = require("./entity/Schedule");
const Reservation_1 = require("./entity/Reservation");
const Course_student_1 = require("./entity/Course_student");
const app = (0, express_1.default)();
app.use(express_1.default.json());
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "secret",
    database: "resource_manager",
    entities: [Course_1.Course, User_1.User, Classroom_1.Classroom, Schedule_1.Schedule, Reservation_1.Reservation, Course_student_1.Course_student],
    synchronize: true,
    migrations: ["src/migrations/*.ts"],
    logging: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected");
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
});
