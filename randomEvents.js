//Name of File: Random Events Section
//Purpose: Contains all code related to the random events that can occur through each week, as well as the sprained ankle event for the gym.
//Last modified: 6/5/20
//Authors: Richard Lam
//Dependencies: Dependent on the 'script.js' file.


/*Sickness/Diseases/Injury */
var malaria = false
var sprained_ankle = false



/*------------------------------------------------------------ */
/*Random Popup Event: Beggar functions-------------------------*/
/*------------------------------------------------------------ */
//Increases happiness stats appropriately
function giveHomelessAlotMoney() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('Beggar').style.display='none';

    /*If player has high happiness, then player will react well to giving away a lot of money*/
    if (happiness >= 70) {
        var howHappyIsBeggar = Math.floor(Math.random() * 2)

        if (howHappyIsBeggar == 0) {
            happiness += 5
            $('textArea').innerHTML = $('textArea').innerHTML + "I gave the guy twenty dollars. I feel really happy about myself.<br>";
        }
        if (howHappyIsBeggar == 1) {
            happiness += 6
            $('textArea').innerHTML = $('textArea').innerHTML + "I gave the guy twenty dollars. The guy was really thankful. Wow I just made his day!<br>";
        }
    }
    /*If player has mediocre happiness, he won't react at all to giving away twenty dollars */
    if (happiness >= 50 && happiness < 70) {
        $('textArea').innerHTML = $('textArea').innerHTML + "I gave the guy twenty dollars and walked away.<br>";
    }
    /*If player has low happiness, then player will react terribly to giving away a lot of money*/
    if (happiness < 50) {
        happiness -= 5
        $('textArea').innerHTML = $('textArea').innerHTML + "I gave the guy twenty dollars. This day isn't going well. I just lost twenty dollars. Why did I do that?<br>";
    }

    money -= 20
    refreshbar()
}
//Increases happiness health stats appropriately
function giveHomelessMoney() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('Beggar').style.display='none';

    /*If the player has at least decent happiness, then the player will react fairly well to giving away a dollar*/
    if (happiness >= 50) {

        var happyOrNot = Math.floor(Math.random() * 2)

        if (happyOrNot == 0) {
            happiness += 3
            $('textArea').innerHTML = $('textArea').innerHTML + "I gave the guy one dollar. I feel happpier about myself.<br>";
        }
        if (happyOrNot == 1) {
            happiness += 5
            $('textArea').innerHTML = $('textArea').innerHTML + "I gave the guy one dollar. The guy said thank you and was really happy! I feel really good about myself.<br>";
        }
    }
    /*If the player has low happiness, then the player won't react well to losing a dollar*/
    if (happiness < 50) {
        happiness -= 3
        $('textArea').innerHTML = $('textArea').innerHTML + "I gave the guy one dollar. I feel sad that I lost money.<br>";
    }

    money -= 1
    refreshbar()
}
//Increases happiness stats appropriately
function dontGiveHomelessMoney() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('Beggar').style.display='none';

    /*If player has really high happiness, then on average he will get sad about ignoring the beggar */
    if (happiness >= 80) {
        var randomNumber = Math.floor(Math.random() * 3)
        /*Player feels bad about ignoring the guy */
        if (randomNumber == 0) {
            happiness -= 5
            $('textArea').innerHTML = $('textArea').innerHTML + "I ignored the guy. I felt sympathy for him and feel sad about myself.<br>";
        }
        /*Player reacts with indifference*/
        if (randomNumber == 1) {
            $('textArea').innerHTML = $('textArea').innerHTML + "I didn't say anything to the guy. But maybe I'll give him a dollar next time.<br>";
        }
        /*Player feels reallllly bad about ignoring the guy */
        if (randomNumber == 2) {
            happiness -= 8
            $('textArea').innerHTML = $('textArea').innerHTML + "I ignored the guy and he looks disappointed. I feel really bad about ignoring him.<br>";
        }
    }
    /*If player doesn't have really high happiness, then on average he will get sad about ignoring the beggar */
    if (30 < happiness && happiness <= 80) {
        var randomNumber = Math.floor(Math.random() * 3)

        if (randomNumber == 0) {
            happiness -= 1
            $('textArea').innerHTML = $('textArea').innerHTML + "I ignored the guy. He still smiled at me and I feel slightly less bad about not giving him money.<br>";
        }
        if (randomNumber == 1) {
            happiness -= 2
            $('textArea').innerHTML = $('textArea').innerHTML + "I ignored the guy. I didn't really feel too bad.<br>";
        }
        /*Player feels no remorse */
        if (randomNumber == 2) {
            $('textArea').innerHTML = $('textArea').innerHTML + "I don't feel bad at all for ignoring him.<br>";
        }
    }
    /*If player has reallly low happiness, then he doesn't react at all */
    if (happiness <= 30){
        var randomNumber = Math.floor(Math.random() * 2)

        if (randomNumber == 0) {
            $('textArea').innerHTML = $('textArea').innerHTML + "I ignored the beggar. I'm in a bad mood so I don't care.<br>";
        }
        if (randomNumber == 1) {
            $('textArea').innerHTML = $('textArea').innerHTML + "I don't feel bad at all for ignoring him. It's my money!<br>";
        }
    }
    refreshbar()
}
//Increases happiness stats appropriately
function lieToHomeless() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('Beggar').style.display='none';

    /*If user has somewhat high happiness, then user will react really bad to lying to the beggar */
    if (happiness >= 60) {
        var randomNumber = Math.floor(Math.random() * 2)
        if (randomNumber == 0) {
            happiness -= 8
            $('textArea').innerHTML = $('textArea').innerHTML + "I lied to him and said I didn't have any spare money. I feel really bad about lying to him.<br>";
        }
        if (randomNumber == 1) {
            happiness -= 4
            $('textArea').innerHTML = $('textArea').innerHTML + "I lied to him and said I didn't have any spare money. He still smiled at me, so I feel less guilty.<br>";
        }
    }
    /*If user has low happiness, then user doesn't really react too much*/
    if (happiness < 60) {
        var randomNumber = Math.floor(Math.random() * 2)
        if (randomNumber == 0) {
            happiness -= 1
            $('textArea').innerHTML = $('textArea').innerHTML + "I lied to him. I might feel guilty about it later but I'm not in a good mood anyways.<br>";
        }
        if (randomNumber == 1) {
            $('textArea').innerHTML = $('textArea').innerHTML + "I lied to him and went about the rest of my day.<br>"
        }
    }
    refreshbar()
}




/*-------------------------------------------------------------*/
/*Random Popup Event: Help Classmate functions-----------------*/
/*-------------------------------------------------------------*/
function HelpClassmateStudy() {

    /*Plays Click button sound */
    click_button_sound.play()

    var classmatePassTest = Math.floor(Math.random() * 3)

    /*You helped classmate study and he passes his test */
    if (0 <= classmatePassTest && classmatePassTest <= 1) {
        happiness += 6
        $('textArea').innerHTML = $('textArea').innerHTML + "I didn't help him cheat. I instead helped him study for his test. He got back to me and he passed! I feel happy for him and feel good about myself.<br>";
    }
    /*You helped classmate study and he still fails his test */
    if (classmatePassTest == 2) {
        happiness -= 2
        $('textArea').innerHTML = $('textArea').innerHTML + "I didn't help him cheat, but I helped him study. He got back to me and he still failed! I feel bad. Maybe I could've helped more.<br>";
    }

    turnBackOnAllActivities()
    $('HelpClassmate').style.display='none';

    refreshbar()
}

function HelpClassmateCheat() {

    /*Plays Click button sound */
    click_button_sound.play()

    var classmateCheat = Math.floor(Math.random() * 10)

    /*You help your classmate cheat and you both get caught*/
    if (0 <= classmateCheat && classmateCheat <= 8) {
        $('textArea').innerHTML = $('textArea').innerHTML + "I decided to help him cheat on his test. We both get caught and I'm getting kicked out!<br>"

    /*SELF NOTE: RICHARD ADD ENDING WHERE PLAYER GETS EXPELLED FOR ACADEMIC DISHONESTY */
    }
    if (classmateCheat == 9) {
        happiness -= 10
        $('textArea').innerHTML = $('textArea').innerHTML + "I decided to help him cheat on his test. He passes his test and he is happy. I feel really guilty.<br>"
    }

    turnBackOnAllActivities()
    $('HelpClassmate').style.display='none';

    refreshbar()
}

function HelpClassmateDecline() {

    /*Plays Click button sound */
    click_button_sound.play()

    var classmateDecline = Math.floor(Math.random() * 5)

    if (0 <= classmateDecline && classmateDecline <= 3) {
        $('textArea').innerHTML = $('textArea').innerHTML + "I politely decline and walk away. <br>"
    }
    if (classmateDecline == 4) {
        $('textArea').innerHTML = $('textArea').innerHTML + "I politely decline. My classmate calls me unreliable. <br>"
    }

    turnBackOnAllActivities()
    $('HelpClassmate').style.display='none';

    refreshbar()
}

function HelpClassmateReport() {

    /*Plays Click button sound */
    click_button_sound.play()

    $('textArea').innerHTML += 'I reported him to the university. He was expelled! I feel bad. <br>'
    happiness -= 5

    turnBackOnAllActivities()
    $('HelpClassmate').style.display='none';
    refreshbar()
}




/*-------------------------------------------------------------*/
/*Random Popup Event: Sase Event-------------------------------*/
/*-------------------------------------------------------------*/

function goToSaseEvent() {

    /*Plays Click button sound */
    click_button_sound.play()

    var randomNumber = Math.floor(Math.random() * 2)

    if (randomNumber == 0) {
        happiness += 5
        activityLimit -= 5
        $('textArea').innerHTML += 'I went to the Sase Event. I had a lot of fun and made some new friends! <br>'
    }
    else if (randomNumber == 1) {
        happiness += 3
        activityLimit -= 5
        $('textArea').innerHTML += 'I went to the Sase Event. It was alright. I had some fun. <br>'
    }

    turnBackOnAllActivities()
    $('SaseEvent').style.display = 'none';
    refreshbar()
}
function ignoreSaseEvent() {

    /*Plays Click button sound */
    click_button_sound.play()

    $('textArea').innerHTML += 'I decide not to go to the SASE event.<br>'

    turnBackOnAllActivities()
    $('SaseEvent').style.display = 'none';
    refreshbar()
}

/*-------------------------------------------------------------*/
/*Random Popup Event: Sase Event-------------------------------*/
/*-------------------------------------------------------------*/

function take_freePopcorn() {

    /*Plays Click button sound */
    click_button_sound.play()

    var randomNumber = Math.floor(Math.random() * 2)

    if (randomNumber == 0) {
        happiness += 3
        health -= 1
        $('textArea').innerHTML += 'I got some popcorn. It tasted really good! <br>'
    }
    else if (randomNumber == 1) {
        happiness -= 2
        health -= 1
        $('textArea').innerHTML += 'I took some popcorn, but it was stale!<br>'
    }

    turnBackOnAllActivities()
    $('FreePopcornEvent').style.display = 'none';
    refreshbar()
}
function ignore_freePopcorn() {

    /*Plays Click button sound */
    click_button_sound.play()

    $('textArea').innerHTML += 'I decided not to get some popcorn.<br>'

    turnBackOnAllActivities()
    $('FreePopcornEvent').style.display = 'none';
    refreshbar()
}



/*--------------------------------------------------------------------------------------- */
/*Random Popup Event: Malaria Functions---------------------------------------------------*/
/*--------------------------------------------------------------------------------------- */

function malaria_visit_urgentcare() {

    /*Plays Click button sound */
    click_button_sound.play()

    visitUrgentCare()

    turnBackOnAllActivities()
    $('MalariaEvent').style.display = 'none';
    refreshbar()
}
function ignore_malaria() {

    /*Plays Click button sound */
    click_button_sound.play()

    $('textArea').innerHTML += "I'm sure I'll be fine. <br>"

    turnBackOnAllActivities()
    $('MalariaEvent').style.display = 'none';
    refreshbar()
}

/*--------------------------------------------------------------------------------------- */
/*Sprained Ankle Functions----------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------- */
function sprained_ankle_visit_urgentcare() {

    /*Plays Click button sound */
    click_button_sound.play()

    visitUrgentCare()

    turnBackOnAllActivities()
    $('SprainedAnkleEvent').style.display = 'none';
    refreshbar()
}
function ignore_sprained_ankle() {

    /*Plays Click button sound */
    click_button_sound.play()

    $('textArea').innerHTML += "I'm sure I'll be fine. I'll just wait for it to heal on its own.<br>"

    turnBackOnAllActivities()
    $('SprainedAnkleEvent').style.display = 'none';
    refreshbar()
}