import * as studentService from "../services/studentsService.js"
import * as studentServiceMongoDB from "../services/studentServiceMongoDB.js"

export const getAllStudents = async (req, res) => {
    try {
        const students = await studentServiceMongoDB.findAllStudents()
        res.json({ students })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getStudentById = async (req, res) => {
    try {
        const student = await studentServiceMongoDB.findAllStudentsById(req.params.id)
        if (!student) return res.status(404).json({ error: "Student not found" })
        res.json(student)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createStudent = async (req, res) => {
    try {
        const newStudent = await studentServiceMongoDB.createStudentService(req.body)
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const updateStudent = async (req, res) => {
    try {
        const updated = await studentServiceMongoDB.updateStudentService(req.params.id, req.body)
        if (!updated) return res.status(404).json({ error: "Student not found" })
        res.json(updated)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const deleteStudent = async (req, res) => {
    try {
        await studentServiceMongoDB.deleteStudentService(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}