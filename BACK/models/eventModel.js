import mongoose from "mongoose";


const eventSchema = new mongoose.Schema({
    title:       { type: String, required: true },
    description: { type: String, required: true },
    date:        { type: Date, required: true },
    club:        { type: mongoose.Schema.Types.ObjectId, ref: "Club", required: true },
    access:      { type: String, required: true, enum: ["public", "members_only"] },
    attendees:   [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

export default mongoose.model("Event", eventSchema);