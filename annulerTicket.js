function annulerTicket(){
    let value = true;

    console.log("\n=== ANNULER UN TICKET ===\n");
    if(tickets == "")
    {
        console.log('---------------------')
        console.log("\nAucun Ticket\n");
        return
    }

    let idTicket = Number(prompt("Donnez l'identifiant du ticket : "));
    for(let ticket of tickets){
        if(ticket.id === idTicket ){
            value = false;
            let trip = trips.find(t => t.id === ticket.tripId);
            let ticketIndex = tickets.findIndex(t => t.id === idTicket);
            tickets.splice(ticketIndex, 1);
            console.log('---------------------')
            console.log("\nTicket annulé avec succès.\n");
            if (trip) {
                trip.availableSeats += 1;
            }
        }
    }
    if(value){
        console.log('---------------------')
        console.log("\nTicket introuvable.\n");
        return
    }
}