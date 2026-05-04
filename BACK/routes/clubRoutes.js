import express from "express"
import * as clubController from "../controllers/clubController.js"
import { authCheck, validateClub } from "../middleware/middleware-manager.js"

const clubRouter = express.Router()

clubRouter.get("/", authCheck, clubController.getAllClubs)
clubRouter.get("/:id", authCheck, clubController.getClubById)
clubRouter.post("/", authCheck, validateClub, clubController.createClub)
clubRouter.put("/:id", authCheck, validateClub, clubController.updateClub)
clubRouter.delete("/:id", authCheck, clubController.deleteClub)
clubRouter.post("/:id/join", authCheck, clubController.joinClub)

export default clubRouter