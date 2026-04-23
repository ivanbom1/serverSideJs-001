
import User from "../models/userModel";
import bcrypt from "bcrypt";


export const findAllStudents = () => {
    return await User.find({});
};


export const findAllStudentsById = (id) => {
    return await User.findById(id);
};


export const createStudentService = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return await User.create({
        ...data,
        password: hashedPassword,
    });
};


export const udpateStudentService = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
};


export const deleteStudentService = (id) => {
    return await User.findByIdAndDelete(id);
};  