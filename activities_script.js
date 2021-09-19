//Name of File: Activities Section
//Purpose: Contains all code related to the activities page of the game, including the netflix menu.
//Last modified: 6/5/20
//Authors: Richard Lam
//Dependencies: Dependent on the 'script.js' file.


/*---------------------------------------------------------------------------------------------------*/
/*--------------------ACTIVITIES PAGE----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------*/
//Changes the happiness and health stats accordingly
//Note: User must have high enough activityLimit stat
function eatAtHans() {

    /*Plays Click button sound */
    click_button_sound.play()

    var food = Math.floor(Math.random() * 13)
    if (activityLimit >= 5) {

        activityLimit -= 5

        if (food == 0) {
            happiness = happiness + 4

            $('textArea').innerHTML = $('textArea').innerHTML + "I ate Korean BBQ Pork at Hans.<br>";
        }
        if (food == 1) {
            happiness = happiness - 4
            health = health - 2

            $('textArea').innerHTML = $('textArea').innerHTML + "I ate a slice of pizza at Hans. It tasted like cardboard.<br>";
        }
        if (food == 2) {
            happiness = happiness - 8
            health = health - 6

            $('textArea').innerHTML = $('textArea').innerHTML + "The chicken was undercooked, and I got a stomach ache.<br>";
        }
        if (food == 3) {
            happiness = happiness - 2
            health = health - 3

            $('textArea').innerHTML = $('textArea').innerHTML + "I ate bacon, eggs, and french toast. The french toast was a little dry.<br>";
        }
        if (food == 4) {
            happiness = happiness + 4
            health = health - 1

            $('textArea').innerHTML = $('textArea').innerHTML + "Hans served chili dogs and they tasted good.<br>";
        }
        if (food == 5) {
            happiness = happiness - 2
            health = health - 3

            $('textArea').innerHTML = $('textArea').innerHTML + "I ate a burger and it was overcooked.<br>";
        }
        if (food == 6) {
            happiness = happiness + 4
            health = health - 2

            $('textArea').innerHTML = $('textArea').innerHTML + "The comfort food station had mac and cheese and I ate some.<br>";
        }
        if (food == 7) {
            happiness = happiness + 3
            health = health - 2

            $('textArea').innerHTML = $('textArea').innerHTML + "I ate some curly fries at the Hanschumacher center.<br>";
        }
        if (food == 8) {
            happiness = happiness
            health = health + 2

            $('textArea').innerHTML = $('textArea').innerHTML + "I decided to eat a salad and some bananas.<br>";
        }
        if (food == 9) {
            happiness = happiness + 5
            health = health - 5

            $('textArea').innerHTML = $('textArea').innerHTML + "Hans was serving General Tso's Chicken and Waffle Fries.<br>";
        }
        if (food == 10) {
            happiness = happiness + 3
            health = health

            $('textArea').innerHTML = $('textArea').innerHTML + "The comfort station had BBQ Chicken, and they were giving out broccoli.<br>";
        }
        if (food == 11) {
            happiness = happiness
            health = health - 3

            $('textArea').innerHTML = $('textArea').innerHTML + "The pizza was ok at Hans.<br>";
        }
        if (food == 12) {
            happiness = happiness
            health = health - 3

            $('textArea').innerHTML = $('textArea').innerHTML + "There was nothing that looked remotely edible at Hans today, so I passed and decided to just spend another meal swipe at Urban.<br>";
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}

//Changes the happiness and health stats accordingly
//Note: User must have high enough activityLimit stat
function eatFoodTruck() {

    /*Plays Click button sound */
    click_button_sound.play()

    var foodTruck = Math.floor(Math.random() * 2)
    if (activityLimit >= 5) {

        activityLimit -= 5

        if (foodTruck == 0) {
            happiness = happiness + 6
            health = health - 4

            $('textArea').innerHTML = $('textArea').innerHTML + "I ordered spring rolls and General Tso's chicken.<br>";
        }
        if (foodTruck == 1) {
            happiness = happiness + 6
            health = health - 4

            $('textArea').innerHTML = $('textArea').innerHTML + "I ordered a Philly cheesesteak, chicken fingers, mozarella sticks, and fries. It tasted good!<br>";
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}

//Changes the happiness and health stats accordingly
//Note: User must have high enough activityLimit stat
function workoutDAC() {

    /*Plays Click button sound */
    click_button_sound.play()

    var workout = Math.floor(Math.random() * 7)

    if (activityLimit >= 14) {

        activityLimit -= 14

        if (workout == 0) {
            happiness = happiness + 3
            health = health + 5

            $('textArea').innerHTML = $('textArea').innerHTML + "I ran on the track for about 10 minutes.<br>";
        }
        else if (workout == 1) {
            happiness = happiness + 2
            health = health + 5

            $('textArea').innerHTML = $('textArea').innerHTML + "I biked for about 20 minutes.<br>";
        }
        else if (workout == 2) {
            happiness = happiness + 2
            health = health + 4

            $('textArea').innerHTML = $('textArea').innerHTML + "I worked on chest today.<br>";
        }
        else if (workout == 3) {
            happiness = happiness - 5
            health = health - 3
            sprained_ankle = true

            turnOffAllActivities()    
           $('SprainedAnkleEvent').style.display='block';
            random_event_popup_sound.play();
        }
        else if (workout == 4) {
            happiness = happiness + 2
            health = health + 3

            $('textArea').innerHTML = $('textArea').innerHTML + "I worked on my back muscles today by doing seated rows.<br>";
        }
        else if (workout == 5) {
            happiness = happiness + 2
            health = health + 2

            $('textArea').innerHTML = $('textArea').innerHTML + "I deadlifted today for 20 minutes.<br>";
        }
        else if (workout == 6) {
            happiness = happiness + 2
            health = health + 4

            $('textArea').innerHTML = $('textArea').innerHTML + "I worked on biceps today for 30 minutes.<br>";
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}

//Changes the happiness and health stats accordingly
//Note: User must have high enough activityLimit stat
function goToTheLibrary() {

    /*Plays Click button sound */
    click_button_sound.play()

    var library = Math.floor(Math.random() * 2)

    if (activityLimit >= 8) {

        activityLimit -= 8

        if (library == 0) {
            happiness = happiness + 1

            $('textArea').innerHTML = $('textArea').innerHTML + "I went to the library and read half a book!<br>";
        }
        if (library == 1) {
            happiness = happiness + 1
            smarts = smarts + 2

            $('textArea').innerHTML = $('textArea').innerHTML + "I read a book at the library.<br>";
        }

    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}

//Changes the happiness and health stats accordingly
//Note: User must have high enough activityLimit stat
function playPool() {

    /*Plays Click button sound */
    click_button_sound.play()

    var pool = Math.floor(Math.random() * 2)

    if (activityLimit >= 20) {

        activityLimit -= 20

        if (pool == 0) {
            happiness = happiness + 8

            $('textArea').innerHTML = $('textArea').innerHTML + "I went to Ross Commons and played pool for about an hour.<br>";
        }
        if (pool == 1) {
            smarts -= 4

            $('textArea').innerHTML = $('textArea').innerHTML + "I hit one of the pool balls so hard, it bounced off the curb, flew in a perfect arc, and hit me dead center in my forehead.<br>";
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}





//The user acquires netflix, loses $9 per month, and unlocks the netflix menu
function getNetflix() {

    /*Plays Click button sound */
    click_button_sound.play()
    
    if (money >= 9) {
        hasNetflix = true
        $('textArea').innerHTML = $('textArea').innerHTML + "You've signed up for Netflix for 9$ per month. <br>"
        money -= 9
        $('getNetflix').style.display = 'none';
        $('watchNetflix').style.display = 'block';
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have enough money to sign up for Netflix. <br>"
    }
    refreshbar()
}

//Switches from the activities menu to the netflix menu
function watchNetflix() {

    /*Plays Click button sound */
    click_button_sound.play()

    $('mainActivities').style.display = 'none';
    $('netFlixMenu').style.display = 'block';
}

//Changes the happiness stats accordingly
//Note: User must have high enough activityLimit stat
function watchAnime() {

    /*Plays Click button sound */
    click_button_sound.play()

    if (activityLimit >= 5) {
        activityLimit -= 5

        var watchAnime =  Math.floor(Math.random() * 4)

        if (watchAnime == 0) {
            happiness += 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched an episode of Bleach. It was pretty good. I should watch more.<br>"
        }
        if (watchAnime == 1) {
            happiness += 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched an episode of One Punch Man. The show is great! I should watch more.<br>"
        }
        if (watchAnime == 2) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched an episode of Naruto. It was ok. I should watch more.<br>"
        }
        if (watchAnime == 3) {
            happiness += 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched an episode of Fullmetal Alchemist. I should watch more.<br>"
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}

//Changes the happiness stats accordingly
//Note: User must have high enough activityLimit stat
function watchMarvel() {

    /*Plays Click button sound */
    click_button_sound.play()

    if (activityLimit >= 5) {
        activityLimit -= 5

        var watchMarvel =  Math.floor(Math.random() * 7)

        if (watchMarvel == 0) {
            happiness += 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Avengers End Game on Netflix. Wow that was amazing. <br>"
        }
        if (watchMarvel == 1) {
            happiness += 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Spiderman Into the Spiderverse on Netflix. That was a great film!<br>"
        }
        if (watchMarvel == 2) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Antman and The Wasp on Netflix. <br>"
        }
        if (watchMarvel == 3) {
            happiness += 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Avengers Infinity War on Netflix. <br>"
        }
        if (watchMarvel == 4) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Black Panther on Netflix. <br>"
        }
        if (watchMarvel == 5) {
            happiness -= 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Captain Marvel on Netflix. I feel disappointed and sad. <br>"
        }
        if (watchMarvel == 6) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Avengers Age of Ultron on Netflix. It was a pretty good movie. <br>"
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}
//Changes the happiness stats accordingly
//Note: User must have high enough activityLimit stat
function watchSciFi() {

    /*Plays Click button sound */
    click_button_sound.play()

    if (activityLimit >= 5) {
        activityLimit -= 5

        var watchSciFi =  Math.floor(Math.random() * 4)

        if (watchSciFi == 0) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Inception on Netflix. <br>"
        }
        if (watchSciFi == 1) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Blade Runner on Netflix. <br>"
        }
        if (watchSciFi == 2) {
            happiness += 2
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Interstellar on Netflix. <br>"
        }
        if (watchSciFi == 3) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched 2012 on Netflix. <br>"
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}
//Changes the happiness stats accordingly
//Note: User must have high enough activityLimit stat
function watchHorror() {

    /*Plays Click button sound */
    click_button_sound.play()
    
    if (activityLimit >= 5) {
        activityLimit -= 5

        var watchHorror =  Math.floor(Math.random() * 4)

        if (watchHorror == 0) {
            var randomNumber = Math.floor(Math.random() * 2)
            if (randomNumber == 0) {
                happiness -= 1
            }
            if (randomNumber == 1) {
                happiness += 1
            }
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Insidious on Netflix. <br>"
        }
        if (watchHorror == 1) {
            var randomNumber = Math.floor(Math.random() * 2)
            if (randomNumber == 0) {
                happiness -= 1
            }
            if (randomNumber == 1) {
                happiness += 1
            }
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Hush on Netflix. <br>"
        }
        if (watchHorror == 2) {
            var randomNumber = Math.floor(Math.random() * 2)
            if (randomNumber == 0) {
                happiness -= 1
            }
            if (randomNumber == 1) {
                happiness += 1
            }
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched Bird Box on Netflix. <br>"
        }
        if (watchHorror == 3) {
            var randomNumber = Math.floor(Math.random() * 2)
            if (randomNumber == 0) {
                happiness -= 1
            }
            if (randomNumber == 1) {
                happiness += 1
            }
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched the Ring on Netflix. <br>"
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}
//Changes the happiness stats accordingly
//Note: User must have high enough activityLimit stat
function watchDocumentary() {

    /*Plays Click button sound */
    click_button_sound.play()
    
    if (activityLimit >= 5) {
        activityLimit -= 5

        var watchDocumentary =  Math.floor(Math.random() * 4)

        if (watchDocumentary == 0) {
            smarts += 2
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "I watched a random crime documentary I learned a lot. <br>"
        }
        if (watchDocumentary == 1) {
            smarts += 2
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "I watched a nature documentary on animals. I learned a few things. <br>"
        }
        if (watchDocumentary == 2) {
            happiness -= 3
            smarts += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "Watched a political documentary and it made me feel sad.<br>"
        }
        if (watchDocumentary == 3) {
            happiness += 1
            $('textArea').innerHTML = $('textArea').innerHTML + "I watched a great documentary on Conor McGregor. <br>"
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}
//Cures any illnesses or ailments the user may have such as a sprainked ankle or malaria
//Note: User must have high enough activityLimit stat
function visitUrgentCare() {

    /*Plays Click button sound */
    click_button_sound.play()

    if (activityLimit >= 10) {
        activityLimit -= 10
        if (malaria == true) {
            malaria = false
            happiness += 5
            health += 10
            $('textArea').innerHTML += "I've been cured of malaria! Thanks Vybe Urgent Care! I feel so much better now!<br>"
        }
        else if (sprained_ankle == true) {
            sprained_ankle = false
            happiness += 4
            health += 3
            $('textArea').innerHTML += "I had my sprained ankle treated! Thanks vybe urgent care! I feel happier now!<br>"
        }
        else {
            $('textArea').innerHTML += "The nurse said there was nothing wrong with me. <br>"
        }
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to do anything. <br>"
    }
    refreshbar()
}