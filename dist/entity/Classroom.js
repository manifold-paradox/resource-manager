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
exports.Classroom = void 0;
const typeorm_1 = require("typeorm");
const Schedule_1 = require("./Schedule");
const Reservation_1 = require("./Reservation");
const Course_1 = require("./Course");
let Classroom = class Classroom {
};
exports.Classroom = Classroom;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Classroom.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Classroom.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Schedule_1.Schedule, (schedule) => schedule.classroom),
    __metadata("design:type", Array)
], Classroom.prototype, "schedules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Reservation_1.Reservation, (reservation) => reservation.classroom),
    __metadata("design:type", Array)
], Classroom.prototype, "reservations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Course_1.Course, (course) => course.classroom),
    __metadata("design:type", Array)
], Classroom.prototype, "courses", void 0);
exports.Classroom = Classroom = __decorate([
    (0, typeorm_1.Entity)()
], Classroom);
