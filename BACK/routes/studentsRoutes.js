import express from "express"
//import * as studentController from "../controllers/studentsController.js"
import * as studentControllerMongoDB from "../controllers/studentsController.js"
import multerConfig from "../middleware/multer-config.js"
import { validateStudent } from "../middleware/valideStudent.js";

const studentRouter = express.Router()

studentRouter.post(
  "/signup",
  multerConfig,
  validateStudent,
  studentControllerMongoDB.createStudent
);


studentRouter.get("/", studentControllerMongoDB.getAllStudents)
studentRouter.get("/:id", studentControllerMongoDB.getStudentById)
studentRouter.post("/", studentControllerMongoDB.createStudent)
studentRouter.put("/:id", studentControllerMongoDB.updateStudent)
studentRouter.delete("/:id", studentControllerMongoDB.deleteStudent)

export default studentRouter