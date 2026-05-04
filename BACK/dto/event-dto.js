export const eventPublicDTO = (event) => ({
    id: event._id,
    title: event.title,
    description: event.description,
    date: event.date,
    access: event.access,
    club: event.club,
    attendeeCount: event.attendees.length
});


export const eventOwnerDTO = (event) => ({
    id: event._id,
    title: event.title,
    description: event.description,
    date: event.date,
    access: event.access,
    club: event.club,
    attendees: event.attendees
});