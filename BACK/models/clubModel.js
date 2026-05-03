import mongoose from "mongoose";


const clubSchema = new mongoose.Schema({
    name:        { type: String, required: true },
    category:    { type: String, required: true, enum: ["Sports", "Arts", "Tech", "Music", "Gaming"]},
    president:   { type: String, required: true },
    capacity:    { type: Number, required: true },
    description: { type: String, required: false },
    members:     [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});


export default mongoose.model("Club", clubSchema);