function acheterTicket() {
    
    let nom = prompt('Nom du passage : ')
    while (nom === "" || !isNaN(nom)) {
        console.log('le Nom du passage incorrect ! try again');
        nom = prompt('Nom du passage : ');
    }
    let idt = Number(prompt('Identifiant du trajet : '))
    let existe = false
    for(const trip of trips)
    {
        // console.log(trip.id)
        if(trip.id == idt && trip.availableSeats > 0)
        {
            existe = true
            console.log('===========================')
            console.log('Ticket achete avec succes');
            console.log('===========================')
            let place = 50 - trip.availableSeats + 1;
            let ticket = 
            {
                id : ticketNumber+1,
                passengerName : nom,
                tripId : trip.id,
                seatNumber : place,
                price : trip.price
            }
            trip.availableSeats--;
            console.log(`Ticket #${ticketNumber+1}`)
            console.log(`Passager : ${nom}`);
            console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
            console.log(`Place : ${50 - trip.availableSeats}`);
            console.log(`Prix : ${trip.price} DH`); 
            console.log('---------------------')
            tickets.push(ticket);
            ticketNumber++
            return ;
        }
        if (trip.id == idt && trip.availableSeats === 0) 
        {
            console.log('===================')
            console.log("Train complet.");
            console.log('===================')
            return;
        }
    }
    if (!existe)
        {
            console.log('===================')
            console.log("Trajet introuvable.");
            console.log('===================')
            return;
        }
}