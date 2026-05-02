import express from "express"
//import * as studentController from "../controllers/studentsController.js"
import * as studentControllerMongoDB from "../controllers/studentsController.js"
import multer from "../middleware/multer-config.js";

const studentRouter = express.Router()

studentRouter.post("/signup",
    (req, res, next) => {
    multerConfig(req, res, (err) => {
        
        if (err) return res.status(400).json({ error: err.message });
        
        next();
    });
  },

  validateStudent,
  studentControllerMongoDB.createStudent
);

studentRouter.get("/", studentControllerMongoDB.getAllStudents)
studentRouter.get("/:id", studentControllerMongoDB.getStudentById)
studentRouter.post("/", studentControllerMongoDB.createStudent)
studentRouter.put("/:id", studentControllerMongoDB.updateStudent)
studentRouter.delete("/:id", studentControllerMongoDB.deleteStudent)

export default studentRouter