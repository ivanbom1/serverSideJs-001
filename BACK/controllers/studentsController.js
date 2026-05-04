import * as studentService from "../services/studentsService.js"
import * as studentServiceMongoDB from "../services/studentServiceMongoDB.js"
import jwt from "jsonwebtoken"
import * as dto from "../dto/student-dto.js"


export const getAllStudents = async (req, res) => {
  try {
    const students = await studentServiceMongoDB.findAllStudents();


    const studentsDTO = students.map(dto.studentPrivateDTO); // In theory we have to use Public DTO, but as we want to see grades, I placed private here
    res.status(200).json(studentsDTO);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getStudentById = async (req, res) => {
    try {
        const student = await studentServiceMongoDB.findAllStudentsById(req.params.id);
        if (!student) return res.status(404).json({ error: "Student not found" });
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const createStudent = async (req, res) => {
    try {
        const { name, email, password, gpa, major } = req.body;
        const newStudent = { name, email, password, gpa, major };
        const loggedUser = await studentServiceMongoDB.createStudentService(newStudent);
        const token = jwt.sign({ id: loggedUser._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
        }); // signed token with user's id ONLY

        const toStudentDTO = (student) => ({
        id: student._id,
        email: student.email,
        });
        
        res.status(201).json({ token, user: toStudentDTO(loggedUser) });
    
    } catch (error) {

        res.status(400).json({ message: error.message });
    }
};


export const updateStudent = async (req, res) => {
    try {
        const updated = await studentServiceMongoDB.updateStudentService(req.params.id, req.body)
        if (!updated) return res.status(404).json({ error: "Student not found" })
        res.json(updated)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};


export const deleteStudent = async (req, res) => {
    console.log("1. deleteStudent called");
    try {
        const deleted = await studentServiceMongoDB.deleteStudentService(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Student not found" });
        res.status(204).send();
    } catch (error) {
        console.log("6. error:", error);
        res.status(500).json({ error: error.message });
    }
};