export const validateClub = (req, res, next) => {

    const { name, category, capacity, description } = req.body

    const CATEGORIES = ["Sports", "Arts", "Tech", "Music", "Gaming"]

    if (!name) return res.status(400).json({ message: "Name is required" })
    if (!/^[a-zA-Z\s]+$/.test(name)) return res.status(400).json({ message: "Name must contain only letters" })

    if (!category) return res.status(400).json({ message: "Category is required" })
    if (!CATEGORIES.includes(category)) return res.status(400).json({ message: `Category must be one of: ${CATEGORIES.join(", ")}` })

    if (!capacity) return res.status(400).json({ message: "Capacity is required" })
    if (isNaN(capacity) || capacity <= 0) return res.status(400).json({ message: "Capacity must be a positive number" })

    if (!description) return res.status(400).json({ message: "Description is required" })

    next()
};