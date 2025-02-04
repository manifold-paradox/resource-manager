import express from "express";
import { AppDataSource } from "../data-source";
import { Course } from "../entity/Course";

const app = express();
const port = 3000;

app.use(express.json()); 

AppDataSource.initialize()
  .then(async () => {
    const courseRepository = AppDataSource.getRepository(Course);

    app.get("/courses", async (req, res) => {
      try {
        const courses = await courseRepository.find(); 
        res.json(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).send("Error fetching courses");
      }
    });

    app.get("/courses/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const course = await courseRepository.findOne({ where: { id: parseInt(id) } });
        if (course) {
          res.json(course);
        } else {
          res.status(404).send("Course not found");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
        res.status(500).send("Error fetching course");
      }
    });

    app.post("/courses", async (req, res) => {
      const { name, schedules, professor, classroom } = req.body;
      try {
        const course = courseRepository.create({ name, schedules, professor, classroom });
        await courseRepository.save(course); 
        res.status(201).json(course); 
      } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).send("Error creating course");
      }
    });

    app.put("/courses/:id", async (req, res) => {
      const { id } = req.params;
      const { name, schedules, professor, classroom } = req.body;
      try {
        const course = await courseRepository.findOne({ where: { id: parseInt(id) } });
        if (course) {
          course.name = name;
          course.schedules = schedules;
          course.professor = professor;
          course.classroom = classroom;
          await courseRepository.save(course); 
          res.json(course); 
        } else {
          res.status(404).send("Course not found");
        }
      } catch (error) {
        console.error("Error updating course:", error);
        res.status(500).send("Error updating course");
      }
    });

    app.delete("/courses/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const course = await courseRepository.findOne({ where: { id: parseInt(id) } });
        if (course) {
          await courseRepository.remove(course); 
          res.status(204).send(); 
        } else {
          res.status(404).send("Course not found");
        }
      } catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).send("Error deleting course");
      }
    });

    
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error during DataSource initialization", error);
  });
