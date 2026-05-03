// DTO showed only for President to modify it (or any other role f.e. admin)
export const clubOwnerDTO = (club) => ({
    id: club._id,
    name: club.name,
    category: club.category,
    president: club.president,
    capacity: club.capacity,
    description: club.description,
    members: club.members,
});


// DTO showed to public pages (f.e. list of avalaible university clubs)
export const clubPublicDTO = (club) => ({
    id: club._id,
    name: club.name,
    category: club.category,
    description: club.description
});