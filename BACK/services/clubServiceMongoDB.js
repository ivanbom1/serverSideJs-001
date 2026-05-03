import clubModel from "../models/clubModel.js";


export const findAllClubs = () => {
    return clubModel.find({});
};


export const findAllClubsById = (id) => {
    return clubModel.findById(id);
};


export const createClubService = async (data) => {
    return await clubModel.create({
        ...data
    });
};


export const updateClubService = async (id, data) => {
    return await clubModel.findByIdAndUpdate(id, data, {new: true});
};


export const deleteClubService = (id) => {
    return clubModel.findByIdAndDelete(id);
};