"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const Classroom_1 = require("./Classroom");
const Schedule_1 = require("./Schedule");
let Course = class Course {
};
exports.Course = Course;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Course.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (professor) => professor.courses),
    __metadata("design:type", User_1.User)
], Course.prototype, "professor", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => User_1.User, (student) => student.enrolledCourses),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Course.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Schedule_1.Schedule, (schedule) => schedule.course),
    __metadata("design:type", Array)
], Course.prototype, "schedules", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Classroom_1.Classroom, (classroom) => classroom.courses),
    __metadata("design:type", Classroom_1.Classroom)
], Course.prototype, "classroom", void 0);
exports.Course = Course = __decorate([
    (0, typeorm_1.Entity)()
], Course);
