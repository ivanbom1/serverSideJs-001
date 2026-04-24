import express from "express"
//import * as studentController from "../controllers/studentsController.js"
import * as studentControllerMongoDB from "../controllers/studentsController.js"

const router = express.Router()

router.get("/", studentControllerMongoDB.getAllStudents)
router.get("/:id", studentControllerMongoDB.getStudentById)
router.post("/", studentControllerMongoDB.createStudent)
router.put("/:id", studentControllerMongoDB.updateStudent)
router.delete("/:id", studentControllerMongoDB.deleteStudent)

export default router