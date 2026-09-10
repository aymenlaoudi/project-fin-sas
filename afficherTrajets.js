function afficherTrajet(){
        console.log("\n=== TRAJETS DISPONIBLES ===");
    for (let i = 0; i < trips.length; i++) {
        let t = trips[i];
        console.log("\n#" + t.id + " " + t.departure + " → " + t.destination);
        console.log("Départ : " + t.departureTime);
        console.log("Arrivée : " + t.arrivalTime);
        console.log("Prix : " + t.price + " DH");
        console.log("Places disponibles : " + t.availableSeats);
        console.log('--------------------------')
    }
    console.log("");
}