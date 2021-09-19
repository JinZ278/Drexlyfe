//Name of File: Finances Section
//Purpose: Contains all code related to the finances page of the game, including the money system.
//Last modified: 6/5/20
//Authors: Jin Zhang
//Dependencies: Dependent on the 'script.js' file.


/*---------------------------------------------------------------------------------------------------*/
/*--------------------Finances PAGE----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------*/
//Turns off all clickable buttons
//used for random events, so the user is forced to click a random event option
/* This file is used to change the functionality of the buttons on the Finance page of Drexlyfe*/
function turnOffAllActivities() {
    $('mainMiddlePage').style.display='none';
    $('mainActivities').style.display='none';
    $('mainClasses').style.display='none';
    $('netFlixMenu').style.display='none';
    $('mainFinances').style.display='none';
    $('mainRelationships').style.display='none';
}
//Turns back on all clickable buttons after they have been turned off
function turnBackOnAllActivities() {
    $('mainMiddlePage').style.display='block';
    $('mainActivities').style.display='block';
    $('mainClasses').style.display='block';
    $('mainFinances').style.display='block';
    $('mainRelationships').style.display='block';
}
/*Finance Vars*/
var thiefskill = 30

//Changes money, happiness, and health stats accordingly
function workstudy() {

    /*Plays Click button sound */
    click_button_sound.play()

    var workday = Math.floor(Math.random()*2)
    if (activityLimit >= 8) {
        activityLimit -= 8
        if (workday == 0) {
            paid = Math.floor(Math.random()*25)+25
            money += paid
            happiness -= 5
            health -= 5
            $('textArea').innerHTML = $('textArea').innerHTML + "It was a boring and inefficient day at work study.<br>";
        }
        if (workday == 1) {
            paid = Math.floor(Math.random()*45)+45
            money += paid
            happiness += 5
            $('textArea').innerHTML = $('textArea').innerHTML + "It was a relaxing and fun day at work today.<br>";
        }
    $('money').innerHTML = "Money:" + money;
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do workstudy right now.<br>";

    }
    refreshbar()
}
//Changes money, happiness, and health stats accordingly
function work() {

    /*Plays Click button sound */
    click_button_sound.play()

    var workday = Math.floor(Math.random()*4)
    if (activityLimit >= 12) {
        activityLimit -= 12
        if (workday <= 2) {
            paid = Math.floor(Math.random()*35)+35
            money += paid
            happiness -= 7
            health -= 7
            $('textArea').innerHTML = $('textArea').innerHTML + "It was an excruciatingly boring day at work.<br>";
        }
        if (workday >= 3) {
            paid = Math.floor(Math.random()*50)+40
            money += paid
            happiness += 5
            $('textArea').innerHTML = $('textArea').innerHTML + "Surprisingly, work was very fun today and someone dropped a few dollars.<br>";
        }
    $('money').innerHTML = "Money:" + money;
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do work right now.<br>";

    }
    refreshbar()
}
//Changes money, happiness, and health stats accordingly
function stealbag() {

    /*Plays Click button sound */
    click_button_sound.play()

    var stealchance = Math.floor(Math.random()*100)
    var moneyfound = Math.floor(Math.random()*130)
    var randomitemsinbag = Math.floor(Math.random()*2)
    if (activityLimit >= 8) {
        activityLimit -= 8
        if (stealchance <= thiefskill) {
        /* Random Steal Bag Event 1, Success */
            if (randomitemsinbag = 1) {
                money += moneyfound
                $('textArea').innerHTML = $('textArea').innerHTML + "You found $" + moneyfound + " in the bag.<br>";
            }
        /* Random Steal Bag Event 2, Successish */
            if (randomitemsinbag = 2) {
                money += (Math.floor(moneyfound/2))
                $('textArea').innerHTML = $('textArea').innerHTML + "You only had the chance to get half the money in the bag ($"+ Math.floor(moneyfound/2) +").<br>";
            }
        }
        /* Random Steal Bag Event 3, Failure */
        else {
            $('textArea').innerHTML = $('textArea').innerHTML + "You failed to get the bag.<br>";
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do that right now.<br>";
    }
    refreshbar()
}

/*-----------------------------*/
/*----Freelance Event----------*/
/*-----------------------------*/

function freelance() {
    /*Plays Click button sound */
    click_button_sound.play()

    turnOffAllActivities()
    $('FreeLanceChoice').style.display='block';

}

//Turns on the free lance popup menu
function FLC1(a) {
    var randomflwork = Math.floor(Math.random()*2)
    var hours = Math.floor(Math.random()*4)+3
    var chanceFL = Math.random()*100

    /*-------- Test Activity Limit ---------------*/
    if (activityLimit > 14) {

    /*-------- Randomly Generated Job ------------*/

    if (randomflwork == 0){
        var job = "mowed the lawn"
    }
    if (randomflwork == 1){
        var job = "walked a dog"
    }
    if (randomflwork == 2){
        var job = "cleaned a house"
    }

    /*-------- Player Choice of Salary -----------*/

    if (a == 1) {
        var earned = hours * 10
        $('textArea').innerHTML = $('textArea').innerHTML + "You " + job + " for " + hours + " hours and gained $" + earned + ".<br>";
        money += hours*10
    }

    if (a == 2) {
        if (chanceFL > 35) {
            var earned = hours * 20
            $('textArea').innerHTML = $('textArea').innerHTML + "You " + job + " for " + hours + " hours and gained $" + earned + ".<br>";
            money += hours*20
        }
        else {
        $('textArea').innerHTML = $('textArea').innerHTML + "No one hired you. <br>"
        $('textArea').innerHTML = $('textArea').innerHTML + "You wasted " + hours + " hours searching. <br>"
        }
    }

    if (a == 3) {
        if (chanceFL > 65) {
            var earned = hours * 40
            $('textArea').innerHTML = $('textArea').innerHTML + "You " + job + " for " + hours + " hours and gained $" + earned + ".<br>";
            money += hours*40
        }
        else{
            $('textArea').innerHTML = $('textArea').innerHTML + "No one hired you. <br>"
            $('textArea').innerHTML = $('textArea').innerHTML + "You wasted " + hours + " hours searching. <br>"
        }
    }
    if (a == 4) {
        if (chanceFL > 85) {
            var earned = hours * 60
            $('textArea').innerHTML = $('textArea').innerHTML + "You " + job + " for " + hours + " hours and gained $" + earned + ".<br>";
            money += hours*60
        }
        else{
            $('textArea').innerHTML = $('textArea').innerHTML + "No one hired you. <br>"
            $('textArea').innerHTML = $('textArea').innerHTML + "You wasted " + hours + " hours searching. <br>"
        }
    }
    if (a == 5) {
        if (chanceFL > 96) {
            var earned = hours * 80
            $('textArea').innerHTML = $('textArea').innerHTML + "You " + job + " for " + hours + " hours and gained $" + earned + ".<br>";
            money += hours*80
        }
        else{
            $('textArea').innerHTML = $('textArea').innerHTML + "No one hired you. <br>"
            $('textArea').innerHTML = $('textArea').innerHTML + "You wasted " + hours + " hours searching. <br>"
        }
    }

    /*----------- Refreshing bar/Reverting back -----*/

    activityLimit -= hours*2
    turnBackOnAllActivities()
    $('FreeLanceChoice').style.display='none';
    refreshbar()
    }

    else {
        turnBackOnAllActivities()
        $('FreeLanceChoice').style.display='none';
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to look for a job. <br>"
        refreshbar()
    }

}
