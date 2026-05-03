import Event from "../models/eventModel.js";


export const findAllEvents = (clubId) => {
    return Event.find({ club: clubId });
};


export const findEventById = (eventId) => {
    return Event.findById(eventId);
};


export const createEventService = (data) => {
    return Event.create(data);
};


export const updateEventService = (eventId, data) => {
    return Event.findByIdAndUpdate(eventId, data, { new: true });
};


export const deleteEventService = (eventId) => {
    return Event.findByIdAndDelete(eventId);
};


export const joinEventService = (eventId, userId) => {
    return Event.findByIdAndUpdate(
        eventId,
        { $addToSet: { attendees: userId } },  // $addToSet prevents duplicates
        { new: true }
    );
};