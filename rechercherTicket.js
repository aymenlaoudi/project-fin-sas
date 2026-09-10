function rechercherTicket() {
    let name = prompt('entre le nom :')
    for(let ticket of tickets){
        if(name.toLowerCase() == ticket.passengerName.toLowerCase()){
            console.log('---------------------')
            console.log(`Ticket# ${ticket.id}`)
            console.log(`Passager :${ticket.passengerName}`)
            console.log(`Traject ; ${ticket.tripId}`)
            console.log(`Place : ${ticket.seatNumber}`)
            console.log(`Prix : ${ticket.price}`)
            break
        }
    }

}