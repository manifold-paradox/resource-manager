import { MigrationInterface, QueryRunner } from "typeorm";

export class AddClassroomToCourse1738660954476 implements MigrationInterface {
    name = 'AddClassroomToCourse1738660954476'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedule" ("id" SERIAL NOT NULL, "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, "courseId" integer, "classroomId" integer, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classroom" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_321e9ff53b2d2b374d6e8d3df8e" UNIQUE ("name"), CONSTRAINT "PK_729f896c8b7b96ddf10c341e6ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservation" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "professorId" integer, "classroomId" integer, CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('student', 'professor', 'admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'student', CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "professorId" integer, "classroomId" integer, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course_student" ("course_id" SERIAL NOT NULL, "student_id" integer NOT NULL, CONSTRAINT "PK_c34eb3d7ecb91ecb57645767b6b" PRIMARY KEY ("course_id"))`);
        await queryRunner.query(`CREATE TABLE "course_students_user" ("courseId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_b829febb3e18396adc50cbecaa3" PRIMARY KEY ("courseId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7b8f80a3a25083b437eabfa7ab" ON "course_students_user" ("courseId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cf391b2e8e9370753c38e83644" ON "course_students_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_be84bbdf75cfb618d393a7f1194" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule" ADD CONSTRAINT "FK_80bb3cb1fed787e813fa4a3b21e" FOREIGN KEY ("classroomId") REFERENCES "classroom"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_7eb9b26dd0736d9ece95e392ef5" FOREIGN KEY ("professorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_2a551ee5e1d28e89efbc0c3b91a" FOREIGN KEY ("classroomId") REFERENCES "classroom"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_2f6d4e27887411ddb6ed55848f1" FOREIGN KEY ("professorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_c0dab2914630634c358f3f7c60b" FOREIGN KEY ("classroomId") REFERENCES "classroom"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "course_students_user" ADD CONSTRAINT "FK_7b8f80a3a25083b437eabfa7abe" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "course_students_user" ADD CONSTRAINT "FK_cf391b2e8e9370753c38e83644a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course_students_user" DROP CONSTRAINT "FK_cf391b2e8e9370753c38e83644a"`);
        await queryRunner.query(`ALTER TABLE "course_students_user" DROP CONSTRAINT "FK_7b8f80a3a25083b437eabfa7abe"`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_c0dab2914630634c358f3f7c60b"`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_2f6d4e27887411ddb6ed55848f1"`);
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_2a551ee5e1d28e89efbc0c3b91a"`);
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_7eb9b26dd0736d9ece95e392ef5"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_80bb3cb1fed787e813fa4a3b21e"`);
        await queryRunner.query(`ALTER TABLE "schedule" DROP CONSTRAINT "FK_be84bbdf75cfb618d393a7f1194"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cf391b2e8e9370753c38e83644"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7b8f80a3a25083b437eabfa7ab"`);
        await queryRunner.query(`DROP TABLE "course_students_user"`);
        await queryRunner.query(`DROP TABLE "course_student"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "reservation"`);
        await queryRunner.query(`DROP TABLE "classroom"`);
        await queryRunner.query(`DROP TABLE "schedule"`);
    }

}
