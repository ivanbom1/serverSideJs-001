import express from "express"
import * as clubController from "../controllers/clubController.js"
import { authCheck } from "../middleware/middleware-manager.js"

const clubRouter = express.Router()

clubRouter.get("/", authCheck, clubController.getAllClubs)
clubRouter.get("/:id", authCheck, clubController.getClubById)
clubRouter.post("/", authCheck, clubController.createClub)
clubRouter.put("/:id", authCheck, clubController.updateClub)
clubRouter.delete("/:id", authCheck, clubController.deleteClub)

export default clubRouter