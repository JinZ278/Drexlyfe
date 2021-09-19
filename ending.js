//Name of File: Endings Section
//Purpose: Contains all code related to the the win and lose displays.
//Last modified: 6/5/20
//Authors: Jin Zhang, Richard Lam
//Dependencies: Dependent on the 'script.js' file.

//Drop out button
//Ends the entire game either based on a low health, smarts, money, or happiness stat.
function dropOut() {
    $('TheEntireGame').style.display='none';
    $('dropOutDisplay').style.display='block';
    if (health == 0) {
        $('EndText').innerHTML = "Your weak immune system led you to catch coronavirus. Eventually you succumbed to the diseases, and died in the hospital."
    }
    if (smarts == 0) {
        $('EndText').innerHTML = "You somehow managed to completely fail and get kicked out of Drexel. Perhaps it was because of laziness, perhaps bad teachers, or perhaps its the fault of your relationships. Who cares at this point? Certainly not your parents."
    }
    if (money == 0) {
        $('EndText').innerHTML = "You ran out of money and could not continue college at Drexel. Maybe try again after a gap year of work? Or you can go to the nearest community college CCP."
    }
    if (happiness == 0) {
        $('EndText').innerHTML = "You didn't manage your happiness and eventually fell into a deep depression. Isolated from society, you contemplate life and decide it wasn't worth living. You commited suicide."
    }

}

//Winning Function
//Shows the winning screen
function winGame() {
    $('TheEntireGame').style.display='none';
    $('winDisplay').style.display='block';
}
