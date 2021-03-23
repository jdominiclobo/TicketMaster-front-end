export const findTicket = (tickets, id) => {
    return tickets.find( tkt => tkt._id === id)
}