function afficherTickets() {
    console.log('===== tickes achete =====');
    if(tickets.length <= 0){
        console.log('---------------------')
        console.log('Aucun ticket enregisté');
        
    }
    for (let ticket of tickets){
        let trip = trips.find(trip => trip.id === ticket.tripId);
        console.log('---------------------')
        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager :${ticket.passengerName}`);
        console.log(`Trajet :${trip.departure} → ${trip.destination} `);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`prix :${ticket.price}`);
    }
    
    
}