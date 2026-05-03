import * as clubService from "../services/clubServiceMongoDB.js"
import { clubOwnerDTO } from "../dto/clubDTO.js"


export const getAllClubs = async (req, res) => {
    try {
        const clubs = await clubService.findAllClubs();

        // add club DTO here!
        res.status(200).json(clubs);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};


export const getClubById = async (req, res) => {
    try {
        const club = await clubService.findClubById(req.params.id)
        if (!club) return res.status(404).json({ error: "Club not found" })

        const isOwner = club.president.toString() === req.auth.userId 
        res.json(isOwner ? clubOwnerDTO(club) : clubPublicDTO(club)) // send OwnerDTO if owner requests it, and PublicDTO if not
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


export const createClub = async (req, res) => {
    try {
        const { name, category, capacity, description } = req.body;
        
        const newClub = {
            name,
            category,
            capacity,
            description,
            president: req.auth.userId,
            members: [req.auth.userId]
        };

        const createdClub = await clubService.createClubService(newClub);
        res.status(201).json(clubOwnerDTO(createdClub));
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateClub = async (req, res) => {
    try {
        const updated = await clubService.updateClubService(req.params.id, req.body);
        if (!updated) return res.status(404).json({error: "Club not found!"});
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const deleteClub = async (req, res) => {
    try {
        const deleted = await clubService.deleteClubService(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Club not found!"});
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};