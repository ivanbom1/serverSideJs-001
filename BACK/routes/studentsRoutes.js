import express from "express"
//import * as studentController from "../controllers/studentsController.js"
import * as studentControllerMongoDB from "../controllers/studentsController.js"
import multer from "../middleware/multer-config.js";

const studentRouter = express.Router()

studentRouter.post("/signup", multer, (req, res) => {
  console.log("req.file:", req.file);
  console.log("req.body:", req.body);

  res.send("login");
});

studentRouter.get("/", studentControllerMongoDB.getAllStudents)
studentRouter.get("/:id", studentControllerMongoDB.getStudentById)
studentRouter.post("/", studentControllerMongoDB.createStudent)
studentRouter.put("/:id", studentControllerMongoDB.updateStudent)
studentRouter.delete("/:id", studentControllerMongoDB.deleteStudent)

export default studentRouter