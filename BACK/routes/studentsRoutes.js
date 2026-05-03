import express from "express"
//import * as studentController from "../controllers/studentsController.js"
import * as studentControllerMongoDB from "../controllers/studentsController.js"
import { validateStudent, authCheck, multerConfig } from "../middleware/middleware-manager.js"

const studentRouter = express.Router()

studentRouter.post(
  "/signup",
  multerConfig,
  validateStudent,
  studentControllerMongoDB.createStudent
);


studentRouter.get("/", studentControllerMongoDB.getAllStudents) // for now I will leave it public for testing with FRONT
studentRouter.get("/:id", authCheck, studentControllerMongoDB.getStudentById)
studentRouter.put("/:id", authCheck, studentControllerMongoDB.updateStudent)
studentRouter.delete("/:id", authCheck, studentControllerMongoDB.deleteStudent)

export default studentRouter