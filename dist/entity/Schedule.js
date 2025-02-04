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
exports.Schedule = void 0;
const typeorm_1 = require("typeorm");
const Course_1 = require("./Course");
const Classroom_1 = require("./Classroom");
let Schedule = class Schedule {
};
exports.Schedule = Schedule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Course_1.Course, (course) => course.schedules),
    __metadata("design:type", Course_1.Course)
], Schedule.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Classroom_1.Classroom, (classroom) => classroom.schedules),
    __metadata("design:type", Classroom_1.Classroom)
], Schedule.prototype, "classroom", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Schedule.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Schedule.prototype, "end_time", void 0);
exports.Schedule = Schedule = __decorate([
    (0, typeorm_1.Entity)()
], Schedule);
