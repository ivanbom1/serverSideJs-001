
import User from "../models/userModel.js";
import bcrypt from "bcrypt";


export const findAllStudents = () => {
    return User.find({});
};


export const findAllStudentsById = (id) => {
    return User.findById(id);
};


export const createStudentService = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({
        ...data,
        password: hashedPassword,
    });
};


export const updateStudentService = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, parseInt(process.env.SALT_ROUNDS)); // An idea to not expose an amount of SALT ROUNDS for pwd
  }
  return await User.findByIdAndUpdate(id, data, { new: true });
};


export const deleteStudent = async (req, res) => {
    try {
        const deleted = await studentServiceMongoDB.deleteStudentService(req.params.id)
        if (!deleted) return res.status(404).json({ error: "Student not found" })
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};
