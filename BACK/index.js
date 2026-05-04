import express from "express";
import cors from 'cors';
import connectMongoDB from "./config/db.js";

import studentRouter from "./routes/studentsRoutes.js";

import clubRouter from "./routes/clubRoutes.js"

import eventRouter from "./routes/eventRoutes.js"

const app = express();
const port = 3000;

await connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"))
app.use("/api/students", studentRouter);
app.use("/api/clubs", clubRouter)
app.use("/api/clubs/:clubId/events", eventRouter)

app.get("/", (req, res) => {
    res.send("Server is running ...");
})


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
