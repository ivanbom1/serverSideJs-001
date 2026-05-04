export const validateEvent = (req, res, next) => {

    const { title, description, date, access } = req.body

    const ACCESS_TYPES = ["public", "members_only"]

    if (!title) return res.status(400).json({ message: "Title is required" })

    if (!description) return res.status(400).json({ message: "Description is required" })

    if (!date) return res.status(400).json({ message: "Date is required" })
    if (isNaN(new Date(date).getTime())) return res.status(400).json({ message: "Date is not valid" })
    if (new Date(date) < new Date()) return res.status(400).json({ message: "Date must be in the future" })

    if (!access) return res.status(400).json({ message: "Access is required" })
    if (!ACCESS_TYPES.includes(access)) return res.status(400).json({ message: "Access must be 'public' or 'members_only'" })

    next()
};