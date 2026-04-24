import "dotenv/config";
import mongoose from "mongoose";


const connectMongoDB = async () => {
    try {
	await mongoose.connect(process.env.MONGO_URI);
	console.log("Connected to MongoDB");
} catch (err) {
	console.error(err);
	process.exit(1); 
}
};

export default connectMongoDB;