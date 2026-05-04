import Club from "../models/clubModel.js";


export const isPresident = async (req, res, next) => {
    try {
        const club = await Club.findById(req.params.clubId)
        if (!club) return res.status(404).json({ error: "Club not found" })

        if (club.president.toString() !== req.auth.userId) {
            return res.status(403).json({ error: "Only the club president can perform this action" })
        }

        req.club = club
        next()
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}