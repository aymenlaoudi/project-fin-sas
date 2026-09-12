const prompt = require('prompt-sync')()
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];



let tickets = [
    {
        id: 1,
        passengerName: "Aymen",
        tripId: 1,
        seatNumber: 1,
        price: 25
    },
    {
        id: 2,
        passengerName: "Yassine",
        tripId: 2,
        seatNumber: 1,
        price: 90
    },
    {
        id: 3,
        passengerName: "Omar",
        tripId: 1,
        seatNumber: 2,
        price: 25
    },
    {
        id: 4,
        passengerName: "Hamza",
        tripId: 3,
        seatNumber: 1,
        price: 140
    },
    {
        id: 5,
        passengerName: "Mehdi",
        tripId: 2,
        seatNumber: 2,
        price: 90
    },
    {
        id: 6,
        passengerName: "Zakaria",
        tripId: 4,
        seatNumber: 1,
        price: 65
    },
    {
        id: 7,
        passengerName: "Anas",
        tripId: 1,
        seatNumber: 3,
        price: 25
    },
    {
        id: 8,
        passengerName: "Ayoub",
        tripId: 3,
        seatNumber: 2,
        price: 140
    },
    {
        id: 9,
        passengerName: "Reda",
        tripId: 2,
        seatNumber: 3,
        price: 90
    },
    {
        id: 10,
        passengerName: "Soufiane",
        tripId: 4,
        seatNumber: 2,
        price: 65
    }
]

let choix;
let continuer = true

for(let i=0;i<tickets.length;i++){
    for(let j=0;j<trips.length;j++){
        if(trips[j].id == tickets[i].tripId){
            trips[j].availableSeats = trips[j].availableSeats -1
        }
    }
}

let ticketNumber = tickets.length;


function afficherMenu() {
    
    console.log('=================================');
    console.log('RAILWAY MANAGER');
    console.log('=================================');
    console.log('1. Afficher les trajets');
    console.log('2. Acheter un ticket');
    console.log('3. Afficher les tickets');
    console.log('4. Annuler un ticket');
    console.log('5. Rechercher un ticket');
    console.log('6. Filtrer les trajets');
    console.log('7. Trier les trajets');
    console.log('0. Quitter');

    choix = Number(prompt('Entrez votre choix : ' ))
    switch (choix) {
        case 1:
            afficherTrajet()
            break;
        case 2:
            acheterTicket()
            break
        case 3:
            afficherTickets()
            break
        case 4:
            annulerTicket()
            break
        case 5 :
            rechercherTicket()
            break
        case 6:
            filtrerTrajets()
            break
        case 7 :
            trierTrajets()
            break
            
        case 0 :
            console.log('Au revoir !')
            continuer = false;
            break
            
        default:
            console.log('Choix invalide !');
            break;
    }
}

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


function acheterTicket() {
    
    let nomPassager = prompt('Nom du passager : ')
    while (nomPassager === "" || !isNaN(nomPassager)) {
        console.log('Le nom du passager est incorrect !');
        nomPassager = prompt('Nom du passager : ');
    }
    let idTrajet = Number(prompt('Identifiant du trajet : '))
    let existe = false
    for(const trip of trips){
        if(trip.id == idTrajet && trip.availableSeats > 0)
        {
            existe = true
            let numPlace = 1
            let placeFound =false;
            while(!placeFound){
                placeFound = true
                for(let i=0;i<tickets.length;i++){
                    if(tickets[i].tripId === idTrajet && tickets[i].seatNumber === numPlace){
                        placeFound = false
                        numPlace ++
                        break
                    }
                }
            }
            let ticket = {
                id : ticketNumber+1,
                passengerName : nomPassager,
                tripId : trip.id,
                seatNumber : numPlace,
                price : trip.price
            }
            tickets.push(ticket);
            trip.availableSeats--;
            ticketNumber++
            console.log('===========================');
            console.log('Ticket achetè avec succes');
            console.log('===========================');
            console.log(`Ticket #${ticket.id}`)
            // console.log(`Ticket #${ticketNumber+1}`)
            console.log(`Passager : ${nomPassager.trim()}`);
            console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
            console.log(`Place : ${ticket.seatNumber}`);
            console.log(`Prix : ${trip.price} DH`); 
            console.log('---------------------')
            return ;
        }
        if (trip.id == idTrajet && trip.availableSeats === 0) 
        {
            console.log('===================')
            console.log("Train complet.");
            console.log('===================')
            return;
        }
        if (!existe)
            {
                console.log('===================')
                console.log("Trajet introuvable.");
                console.log('===================')
                return;
            }
}
}
function afficherTickets() {
    console.log('===== TICKETS ACHETES =====');
    if(tickets.length <= 0){
        console.log('---------------------')
        console.log('Aucun ticket enregistré');
        return
    }
    for (let ticket of tickets){
        let trip = trips.find(trip => trip.id === ticket.tripId);
        console.log('---------------------')
        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager :${ticket.passengerName.trim()}`);
        console.log(`Trajet :${trip.departure} → ${trip.destination} `);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`prix :${ticket.price}`);
    }
    
    
}

function annulerTicket(){
    let value = true;

    console.log("\n=== ANNULER UN TICKET ===\n");
    if(tickets.length === 0)
    {
        console.log('---------------------')
        console.log("\nAucun ticket enrgistré\n");
        return
    }

    let idTrajeticket = Number(prompt("Donnez l'identifiant du ticket : "));
    for(let ticket of tickets){
        if(ticket.id === idTrajeticket ){
            value = false;
            let trip = trips.find(t => t.id === ticket.tripId);
            let ticketIndex = tickets.findIndex(t => t.id === idTrajeticket);
            tickets.splice(ticketIndex, 1);
            console.log('---------------------')
            console.log('\nTicket annulé avec succès.\n');
            if (trip) {
                trip.availableSeats += 1;
            }
            break
        }
    }
    if(value){
        console.log('---------------------')
        console.log("\nTicket introuvable.\n");
        return
    }
}

function rechercherTicket() {
    let name = prompt('Entrez le nom du passager : ');
    let resultats = tickets.filter(ticket =>
        ticket.passengerName.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (resultats.length === 0) {
        console.log("---------------------");
        console.log("Aucun ticket trouvé");
        console.log("---------------------");
        return;
    }

    for (let ticket of resultats) {
        let trip = trips.find(trip => trip.id === ticket.tripId);

        console.log("---------------------");
        console.log(`Ticket #${ticket.id}`);
        console.log(`Passager : ${ticket.passengerName.trim()}`);
        console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
        console.log(`Place : ${ticket.seatNumber}`);
        console.log(`Prix : ${ticket.price} DH`);
    }
}

function filtrerTrajets() {
    let ville = prompt("Ville de départ : ");
    let trouve = false
    for (let trip of trips) {
        if (trip.departure.toLowerCase().trim() === ville.toLowerCase().trim()) {
            console.log('---------------------')
            console.log(`${trip.departure} → ${trip.destination} : ${trip.price} DH`);
            trouve = true
        }
    } 
        if (!trouve) {
        console.log("---------------------");
        console.log("Aucun trajet trouvé pour cette ville.");
        console.log("---------------------");
    }
}


function trierTrajets() {
    let tripsTries = [...trips];
    let temp
    for(let i=0;i<tripsTries.length;i++){
        for(let j=i+1;j<tripsTries.length;j++){
            if(tripsTries[i].price > tripsTries[j].price){
                temp = tripsTries[i]
                tripsTries[i] = tripsTries[j]
                tripsTries[j] = temp
            }
        }
    }
    for (let trip of tripsTries) {
        console.log('---------------------')
        console.log(`${trip.departure} → ${trip.destination} : ${trip.price} DH`);
    }
    
}


while (continuer){
    afficherMenu()
}
