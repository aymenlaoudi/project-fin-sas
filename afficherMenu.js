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

    choice = Number(prompt("enter your choose :" ))
    switch (choice) {
        case 1:
            afficherTraject()
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
            process.exit(0);
            
        default:
            console.log('invalid !');
            
            break;
    }
    
}