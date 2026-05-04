import * as eventService from "../services/eventService.js"
import { eventPublicDTO, eventOwnerDTO } from "../dto/event-dto.js"


export const getAllEvents = async (req, res) => {
    try {
        const events = await eventService.findAllEvents(req.params.clubId)
        res.status(200).json(events.map(eventPublicDTO))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


export const getEventById = async (req, res) => {
    try {
        const event = await eventService.findEventById(req.params.eventId)
        if (!event) return res.status(404).json({ error: "Event not found" })

        const isPresident = req.club?.president.toString() === req.auth.userId
        res.json(isPresident ? eventOwnerDTO(event) : eventPublicDTO(event))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


export const createEvent = async (req, res) => {
    try {
        const { title, description, date, access } = req.body
        const newEvent = {
            title,
            description,
            date,
            access,
            club: req.params.clubId
        }
        const created = await eventService.createEventService(newEvent)
        res.status(201).json(eventOwnerDTO(created))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


export const updateEvent = async (req, res) => {
    try {
        const updated = await eventService.updateEventService(req.params.eventId, req.body)
        if (!updated) return res.status(404).json({ error: "Event not found" })
        res.json(eventOwnerDTO(updated))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};


export const deleteEvent = async (req, res) => {
    try {
        const deleted = await eventService.deleteEventService(req.params.eventId)
        if (!deleted) return res.status(404).json({ error: "Event not found" })
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


export const joinEvent = async (req, res) => {
    try {
        const event = await eventService.findEventById(req.params.eventId)
        if (!event) return res.status(404).json({ error: "Event not found" })

        if (event.access === "members_only") {
            const isMember = req.club.members.some(
                (memberId) => memberId.toString() === req.auth.userId
            )
            if (!isMember) return res.status(403).json({ error: "This event is for club members only" })
        }

        const updated = await eventService.joinEventService(req.params.eventId, req.auth.userId)
        res.json(eventPublicDTO(updated))
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};