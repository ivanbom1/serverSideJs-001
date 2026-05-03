import * as clubService from "../services/clubServiceMongoDB.js"


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
        const club = await clubService.findAllClubsById(req.params.id);
        
        if (!club) return res.status(404).json({ error: "Club was not found!"});
        res.json(club);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};


export const createClub = async (req, res) => {
    try {
        const { name, category, president, capacity} = req.body;
        const newClub = { name, category, president, capacity};
        const createdClub = await clubService.createClubService(newClub);
        // add registration permission only to logged users. In our case, if user exists, he can register club on himself.

        // add club DTO

        res.status(201).json({createdClub});
    } catch (error) {
        res.status(500).json({ message: error.message});
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