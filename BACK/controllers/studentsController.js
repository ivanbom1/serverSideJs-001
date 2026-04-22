import * as studentService from "../services/studentsService.js"

export const getAllStudents = (req, res) => {
    try {
        const students = studentService.getAllStudents()
        res.json({ students })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getStudentById = (req, res) => {
    try {
        const student = studentService.getStudentById(req.params.id)
        if (!student) return res.status(404).json({ error: "Student not found" })
        res.json(student)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createStudent = (req, res) => {
    try {
        const newStudent = studentService.createStudent(req.body)
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const updateStudent = (req, res) => {
    try {
        const updated = studentService.updateStudent(req.params.id, req.body)
        if (!updated) return res.status(404).json({ error: "Student not found" })
        res.json(updated)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const deleteStudent = (req, res) => {
    try {
        studentService.deleteStudent(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}