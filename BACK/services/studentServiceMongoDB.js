
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
    data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  }
  return await User.findByIdAndUpdate(id, data, { new: true });
};


export const deleteStudentService = (id) => {
    return User.findByIdAndDelete(id);
};  