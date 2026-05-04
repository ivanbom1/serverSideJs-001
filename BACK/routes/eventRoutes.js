import express from "express"
import * as eventController from "../controllers/eventController.js"
import { authCheck, isPresident } from "../middleware/middleware-manager.js"


const eventRouter = express.Router({ mergeParams: true }) // mergeParams gives access to :clubId from parent router (to access certain routes we have to get access to clubID)


eventRouter.get("/", authCheck, eventController.getAllEvents)
eventRouter.get("/:eventId", authCheck, eventController.getEventById)
eventRouter.post("/", authCheck, isPresident, eventController.createEvent)
eventRouter.put("/:eventId", authCheck, isPresident, eventController.updateEvent)
eventRouter.delete("/:eventId", authCheck, isPresident, eventController.deleteEvent)
eventRouter.post("/:eventId/join", authCheck, eventController.joinEvent)

export default eventRouter