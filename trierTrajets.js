function trierTrajets() {
    let tripsTries = [...trips];
    tripsTries.sort((a, b) => a.price - b.price);
    for (let trip of tripsTries) {
        console.log('---------------------')
        console.log(`${trip.departure} → ${trip.destination} : ${trip.price} DH`);
    }
    
}