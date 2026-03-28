import { students } from "../students.js"


export const getAllStudents = () => students

export const getStudentById = (id) => students.find(s => s.id === parseInt(id))

export const createStudent = (data) => {
    const newStudent = { 
        id: Math.max(...students.map(s => s.id)) + 1,
        ...data 
    }
    students.push(newStudent)
    return newStudent
}

export const updateStudent = (id, data) => {
    const student = students.find(s => s.id === parseInt(id))
    if (student) Object.assign(student, data)
    return student
}

export const deleteStudent = (id) => {
    const index = students.findIndex(s => s.id === parseInt(id))
    if (index > -1) students.splice(index, 1)
}