function filtrerTrajets() {
    let ville = prompt("Ville de départ : ");
    for (let trip of trips) {
        if (trip.departure.toLowerCase() === ville.toLowerCase()) {
            console.log('---------------------')
            console.log(`${trip.departure} → ${trip.destination} : ${trip.price} DH`);
        }
    } 
}