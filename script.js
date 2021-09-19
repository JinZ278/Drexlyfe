//Name of File: Main Section
//Purpose: Holds all the main variables, the refresh function, the next week functions, sounds, and classmate functions.
//Last modified: 6/5/20
//Authors: Nick Kirtsos, Allen Cai, Jin Zhing, Richard Lam
//Dependencies: None

/*This file is the main script that determines time progression, limits, variables, and some events in the game.*/

var $ = function(id) {return document.getElementById(id);}

//Time Variables
var term = 1
var week = 1
var time = 1

//Represents a percent
var activityLimit = 100

//Main stats player has
var happiness = Math.floor(Math.random()*50)+50
var health = Math.floor(Math.random()*50)+50
var smarts = Math.floor(Math.random()*50)+50
var money = Math.floor(Math.random()*4001)+3000
var grades = 0
 var varmultiplier = 1

//NPC happiness stats
var momHappinessBar = 100
var dadHappinessBar = 100
var roommateHappinessBar = Math.floor(Math.random()*50)+50

//Change grades by adding test scores into these arrays
var totalQuizzes = []
var totalExams = []
var totalHomeworks = []
var homework_for_the_week = 10
var total_homework_for_the_week = 10

//Winter and Spring Break
var WintB = 0
var SpriB = 0

/*Arrays for username and passwords*/
var Usernames = [];
var Passwords = [];

/*Netflix Checker*/
//Netflix Checker
var hasNetflix = false
var netflixWeek = 0

/*SOUNDS*/
var menuPopup_sound = new sound('drex/sounds/menu_popup.mp3');
var random_event_popup_sound = new sound('drex/sounds/random_event_popup_sound.mp3');
var next_week_button = new sound('drex/sounds/next_week_button.mp3');
var click_button_sound = new sound('drex/sounds/click_button_sound.mp3');

/*------------------------------------------------------*/
/*-------- Very General Functions-----------------------*/
/*------------------------------------------------------*/
//Plays sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
    this.sound.play();
    }
    this.stop = function(){
    this.sound.pause();
    }
}

//Reloads all the happiness, health, smarts, activities, and grades stats.
function refreshbar() {
    //Prevents stats from being above 100 or below 0
    if (happiness > 100) {
        happiness = 100
    }
    if (happiness < 0) {
        happiness = 0
        dropOut()
    }

    if (health > 100) {
        health = 100
    }
    if (health < 0) {
        health = 0
        dropOut()
    }

    if (smarts > 100) {
        smarts = 100
    }
    if (smarts < 0) {
        smarts = 0
        dropOut()
    }
    if (money < 0) {
        money = 0
        dropOut()
    }
    if (momHappinessBar < 0) {
        momHappinessBar = 0
    }
    if (momHappinessBar > 100) {
        momHappinessBar = 100
    }
    if (dadHappinessBar < 0) {
        dadHappinessBar = 0
    }
    if (dadHappinessBar > 100) {
        dadHappinessBar = 100
    }
    if (roommateHappinessBar < 0) {
        roommateHappinessBar = 0
    }
    if (roommateHappinessBar > 100) {
        roommateHappinessBar = 100
    }
    if (activityLimit < 0) {
        activityLimit = 0
    }
    if (classmate1_relationship < 0) {
        classmate1_relationship = 0
    }
    else if (classmate1_relationship > 100) {
        classmate1_relationship = 100
    }
    if (classmate2_relationship < 0) {
        classmate2_relationship = 0
    }
    else if (classmate2_relationship > 100) {
        classmate2_relationship = 100
    }
    if (classmate3_relationship < 0) {
        classmate3_relationship = 0
    }
    else if (classmate3_relationship > 100) {
        classmate3_relationship = 100
    }
    if (classmate4_relationship < 0) {
        classmate4_relationship = 0
    }
    else if (classmate4_relationship > 100) {
        classmate4_relationship = 100
    }
    if (classmate5_relationship < 0) {
        classmate5_relationship = 0
    }
    else if (classmate5_relationship > 100) {
        classmate5_relationship = 100
    }

    $('money').innerHTML = "Money:" + money;
    $('happinessBar').style.width = happiness + '%';
    $('happinessBar').innerHTML = Math.floor(happiness) + '%';
    $('healthBar').style.width = health + '%';
    $('healthBar').innerHTML = Math.floor(health) + '%';
    $('smartsBar').style.width = smarts + '%';
    $('smartsBar').innerHTML = Math.floor(smarts) + '%';
    $('activityLimitBar').style.width = activityLimit + '%';
    $('activityLimitBar').innerHTML = Math.floor(activityLimit) + '%';

    /*----------------------------------------------------------------*/
    /*Calculates the grade based on list of exams, quizzes, and homeworks */

    var totalExams_Sum = 0
    var totalQuizzes_Sum = 0
    var totalHomeworks_Sum = 0

    for (i = 0; i < totalExams.length; i++) {
        totalExams_Sum += totalExams[i]
    }
    for (i = 0; i < totalQuizzes.length; i++) {
        totalQuizzes_Sum += totalQuizzes[i]
    }
    for (i = 0; i < totalHomeworks.length; i++) {
        totalHomeworks_Sum += totalHomeworks[i]
    }

    /*Protects from dividing by a non number or 0 */
    if (totalExams_Sum >= 0) {totalExams_Sum = totalExams_Sum;} else {totalExams_Sum = 0}
    if (totalQuizzes_Sum >= 0) {totalQuizzes_Sum = totalQuizzes_Sum;} else {totalQuizzes_Sum = 0}
    if (totalHomeworks_Sum >= 0) {totalHomeworks_Sum = totalHomeworks_Sum;} else {totalHomeworks_Sum = 0}

    if (totalExams.length > 0) {var number_of_exams = totalExams.length;} else {var number_of_exams = 1}
    if (totalQuizzes.length > 0) {var number_of_quizzes = totalQuizzes.length;} else {var number_of_quizzes = 1}
    if (totalHomeworks.length > 0) {var number_of_homeworks = totalHomeworks.length;} else {var number_of_homeworks = 1}

    var avg_of_exams = (totalExams_Sum / number_of_exams)
    var avg_of_quizzes = (totalQuizzes_Sum / number_of_quizzes)
    var avg_of_homeworks = (totalHomeworks_Sum / number_of_homeworks)

    var gradeCalculation = ((.5 * avg_of_exams) + (.25 * avg_of_quizzes) + (.25 * avg_of_homeworks) )
    $('gradesBar').style.width = gradeCalculation + '%';
    $('gradesBar').innerHTML = Math.floor(gradeCalculation) + '%';
    /*----------------------------------------------------------------*/
    $('homeworkBar').style.width = (homework_for_the_week / total_homework_for_the_week) * 100 + '%';
    $('homeworkBar').innerHTML = "Homework Left: " + Math.floor((homework_for_the_week / total_homework_for_the_week) * 100) + '%';


    $('momHappinessBar').style.width = momHappinessBar + '%';
    $('dadHappinessBar').style.width = dadHappinessBar + '%';
    $('roommateHappinessBar').style.width = roommateHappinessBar + '%';

    /*------------ROOMMATE RELATIONSHIP BARS----------------------*/
    $('classmate1_relationship_bar').style.width = classmate1_relationship + '%';
    $('classmate2_relationship_bar').style.width = classmate2_relationship + '%';
    $('classmate3_relationship_bar').style.width = classmate3_relationship + '%';
    $('classmate4_relationship_bar').style.width = classmate4_relationship + '%';
    $('classmate5_relationship_bar').style.width = classmate5_relationship + '%';

    //This is set to a ridiculously high number so that the scroll bar will always go down to the very bottom
    $('textArea').scrollTop = 1000000;
}

/*------------------------------------------------------*/
/*-------- Turn off Right Page (For RandomEvents)-------*/
/*------------------------------------------------------*/

function turnOffAllActivities() {
    $('mainMiddlePage').style.display='none';
    $('mainActivities').style.display='none';
    $('mainClasses').style.display='none';
    $('netFlixMenu').style.display='none';
    $('mainFinances').style.display='none';
    $('mainRelationships').style.display='none';
}

function turnBackOnAllActivities() {
    $('mainMiddlePage').style.display='block';
    $('mainActivities').style.display='block';
    $('mainClasses').style.display='block';
    $('mainFinances').style.display='block';
    $('mainRelationships').style.display='block';
}

/*------------------------------------------------------*/
/*-------- Login ---------------------------------------*/
/*------------------------------------------------------*/

function Login(){
var x=0
var userEmail = $('emailField').value;
var userPassword = $('passwordField').value;
if(userEmail=="" || userPassword==""){
  alert("Input a Username and Password");
}
else if(userEmail.indexOf('@') < 0 || userEmail.indexOf('.')< 0){
alert("Follow the example: User@domain.ending");
}
else if (userEmail.indexOf('@')>userEmail.indexOf('.')){
 alert('Email address missing @ or .');
}
else if(userPassword.length < 6){
 alert("Your password needs to be 6 or more characters");
}
else{
  while(x<=Usernames.length){
    if(userEmail==Usernames[x] && userPassword==Passwords[x]){
Maingame();
break;
    }

    else{
      x++
alert("Username or Password does not match");
    }
  }
}

}

function createUser(){
  var createEmail = $('emailField2').value;
  var createPassword = $('passwordField2').value;
  if(createEmail=="" || createPassword==""){
    alert("Input a Username and Password");
}
else if(createEmail.indexOf('@') < 0 || createEmail.indexOf('.')< 0){
  alert("Follow the example: User@domain.ending");
}
 else if (createEmail.indexOf('@')>createEmail.indexOf('.')){
   alert('Email address missing @ or .');
 }
 else if(createPassword.length <= 6){
   alert("Your password needs to be 6 or more characters");
 }
  else{
    Usernames.push(createEmail);
    Passwords.push(createPassword);
    alert("Account has been created");
    $('main2').style.display='none';
    $('main').style.display='block';
  }
}
function Maingame(){
  location.replace("index.html");

}

function showcreate(){
  $('main2').style.display='block';
  $('main').style.display='none';
}

//function testCU(){
  //alert(Usernames);
  //alert(Passwords);
//}

/*------------------------------------------------------*/
/*---- Main ShowPage Functions -------------------------*/
/*------------------------------------------------------*/

function showClasses() {
    $('relationshipsPage').style.display='none';
    $('activitiesPage').style.display='none';
    $('financesPage').style.display='none';
    $('classesPage').style.display='inline';
    $('classlist').innerHTML = "<br> Term 1:<br>CI 101<br>CS 164<br>Math 121<br>ENGL 101<br>UNIV CI101<br>BIO 122"
    +"<br><br>Term 2:<br>CI 102<br>CS 171<br>Math 122<br>ENGL 102<br>BIO 124<br>CIVC 101<br>COOP 101"
    +"<br><br>Term 3:<br>CI 103<br>CS 172<br>ENGL 103<br>MATH 123<br>UNIV CI103<br>BIO 126"
    $('parentsPage').style.display='none';
    $('classmatesPage').style.display='none';
    $('roommatePage').style.display='none';
    $('tutorial').style.display='none';

    menuPopup_sound.play();
}
function showActivities() {
    $('relationshipsPage').style.display='none';
    $('activitiesPage').style.display='block';
    $('financesPage').style.display='none';
    $('classesPage').style.display='none';
    $('parentsPage').style.display='none';
    $('classmatesPage').style.display='none';
    $('roommatePage').style.display='none';
    $('tutorial').style.display='none';

    menuPopup_sound.play();
}
function showRelationships() {
    $('relationshipsPage').style.display='block';
    $('activitiesPage').style.display='none';
    $('financesPage').style.display='none';
    $('classesPage').style.display='none';
    $('parentsPage').style.display='none';
    $('classmatesPage').style.display='none';
    $('roommatePage').style.display='none';
    $('tutorial').style.display='none';

    menuPopup_sound.play();
}
function showFinances() {
    $('relationshipsPage').style.display='none';
    $('activitiesPage').style.display='none';
    $('financesPage').style.display='block';
    $('classesPage').style.display='none';
    $('money').innerHTML = "Money:" + money;
    $('parentsPage').style.display='none';
    $('classmatesPage').style.display='none';
    $('roommatePage').style.display='none';
    $('tutorial').style.display='none';

    menuPopup_sound.play();
}

function showParents() {
    $('relationshipsPage').style.display='none';
    $('parentsPage').style.display='block';
}

function showClassmates() {
    $('relationshipsPage').style.display='none';
    $('classmatesPage').style.display='block';
}

function showRoommate() {
    $('relationshipsPage').style.display='none';
    $('roommatePage').style.display='block';
}

/*------------------------------------------------------------------------*/
/*------ Time Function ---------------------------------------------------*/
/*------------------------------------------------------------------------*/
//Moves to the next week, also starts a random event with each passing week
function nextWeek() {


    $('textArea').innerHTML += "<br>"
    /*Plays sound */
    next_week_button.play()

    /*Game ends at time = 40*/
    time += 1
    week += 1
    /*Weeks reset per term*/
    if (time == 14 || time == 27) {
        week = 1
        term += 1
    }

    if (time == 37) {
        winGame()
    }

    /*Tests if user has netflix, in which case update the netflix week and possibly bill them */
    if (hasNetflix == true) {
        netflixWeek += 1

        if (netflixWeek == 4) {
            netflixWeek = 0
            money -= 9
            $('textArea').innerHTML += "Paid $9 for Netflix this month. <br>"
        }
    }

    /* Coronavirus happens.*/
    if (time == 24 ) {
        $('textArea').innerHTML += "<b>Coronavirus has become widespread. You are forced to transition to online calls and stay at home.</b> <br>"
        $('textArea').innerHTML += "<b>There is a chance that you may become infected, run out of food, or economic inflation happesn.</b> <br>"
        $('textArea').innerHTML += "<b>Panic ensues and life becomes much harder.</b> <br>"
        varmultiplier = 2
    }
    /*Your mental health, smarts and happiness decreases every week */
    health -= 3 * varmultiplier
    happiness -= 3 * varmultiplier
    smarts -= 3 * varmultiplier

    /*Updates week headline*/
    $('weekHeader').innerHTML = 'Term '+ term + ': Week ' + week
    if (time == 2) {
        $('textArea').innerHTML += "On your first week at school, you met all your teachers and made friends along the way. You also found out about several places you can go to hang out or study. <br>"
    }
    if (week == 5) {
        $('textArea').innerHTML += "It's week 5. Otherwise known as MIDTERMS week. Are you prepared? <br>"
        var midterm = Math.floor(Math.random()*100)
        if (midterm <= smarts) {
            $('textArea').innerHTML += "You passed your midterm with flying colors!<br>"
            happiness += 10
            smarts += 10
            health += 5
            totalExams.push(100)
        }
        if (midterm > smarts) {
            $('textArea').innerHTML += "You fail your midterm...<br>"
            happiness -= 10
            smarts -= 10
            health -= 5
            totalExams.push(Math.floor(Math.random()*70)) /*Generates a random number between 0 to 69 bc player failed */
        }
    }
    /*FINALS WEEKS */
    if (week == 10) {
        $('textArea').innerHTML += "Time for finals. Are you ready? <br>"
        turnOffAllActivities()

        if (smarts >= 80) {

            $('easyFinalExam').style.display='block'

            $('easyAnswer1').innerHTML = (2 - (Math.floor(Math.random() * 5)))

            var whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 1) {
                $('easyAnswer2').style.display = 'block';
                $('easyAnswer2').innerHTML = (2 - (Math.floor(Math.random() * 3)))
            }
            whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 2) {
                $('easyAnswer4').style.display = 'block';
                $('easyAnswer4').innerHTML = (4 + (Math.floor(Math.random() * 4)))
            }
        }

        else if (smarts < 80) {

            $('hardFinalExam').style.display='block';

            $('answer1').innerHTML = (100 * (Math.floor(Math.random() * 11)))

            var whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 1) {
                $('answer2').style.display = 'block';
                $('answer2').innerHTML = (100 * (Math.floor(Math.random() * 11)))
            }
            whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 1) {
                $('answer3').style.display = 'block';
                $('answer3').innerHTML = (100 * (Math.floor(Math.random() * 11)))
            }
            whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 1) {
                $('answer4').style.display = 'block';
                $('answer4').innerHTML = (100 * (Math.floor(Math.random() * 11)))
            }
            whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 1) {
                $('answer5').style.display = 'block';
                $('answer5').innerHTML = (100 * (Math.floor(Math.random() * 11)))
            }
            whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 1) {
                $('answer6').style.display = 'block';
                $('answer6').innerHTML = (100 * (Math.floor(Math.random() * 11)))
            }
            whichQuestionsToTurnOn = Math.floor(Math.random() * 2)
            if (whichQuestionsToTurnOn == 1) {
                $('answer7').style.display = 'block';
                $('answer7').innerHTML = (100 * (Math.floor(Math.random() * 11)))
            }
        }

    }
    /* Winter Break */
    if (time >= 10 && time <= 14) {
        WintB = 1
        week = "of Winter Break "
        homework_for_the_week = 0
        $('textArea').innerHTML += "It's winter break.<br>"
        if (time == 14) {
            WintB = 0
            week = 1
        refreshbar()
        }
    }
    /* Spring Break */
    if (time >= 23 && time <= 25) {
        SpriB = 1
        week = "of Spring Break "
        homework_for_the_week = 0
        $('textArea').innerHTML += "It's spring break.<br>"
        if (time == 26) {
            SpriB = 0
            week = 1
        refreshbar()
        }
    }

    /*Tuition costs*/
    if (week == 8) {
        $('textArea').innerHTML += "You pay 2500$ for tuition...<br>";
        money -= 2500
        $('money').innerHTML = "Money:" + money;
    }

    /*---------------HOMEWORK FOR THE WEEK----------------- */
    /*Adds homework grade for the week */

    if (SpriB == 0 && WintB == 0) {
        totalHomeworks.push(( (total_homework_for_the_week - homework_for_the_week) / total_homework_for_the_week) * 100)
        total_homework_for_the_week = Math.floor(7 + Math.random() * 8)
        homework_for_the_week = total_homework_for_the_week
    }

    /*---------------------------------------------------------------------*/
    /*SICKNESS AND DISEASES AND INJURIES */
    /*---------------------------------------------------------------------*/


    if (malaria == true) {
        happiness -= 5
        health -= 5
        $('textArea').innerHTML += "I haven't been feeling good. My stomach hurts. I'm sweating a lot. I can't focus in class, and I've been shaking.<br>"
    }
    if (sprained_ankle == true) {
        var sprained_ankle_text = Math.floor(Math.random() * 2)
        if (sprained_ankle_text == 0) {
            happiness -= 2
            health -= 1
            $('textArea').innerHTML += "My ankle is getting worse. It hurts a lot when I walk. I should go to urgent care.<br>"
        }
        else if (sprained_ankle_text == 1) {
            happiness += 1
            $('textArea').innerHTML += "Wow, I think my ankle is getting better! I'm not sure, but I think it is. It still hurts, but it hurts less than last time.<br>"
        }
    }


    /*------------------------------------------------------------------*/
    /*Random events for weeks will be below here*/
    /*------------------------------------------------------------------*/
    if (time > 2 && week != 5 && week !=10 && WintB != 1 && SpriB != 1) {

    var randomEvent = Math.floor(Math.random() * 11)


    /* Random Event 1 Stress Problems */
    if (randomEvent == 0) {
        var howStressedWereYou = Math.floor(Math.random() * 3) //How stressed were you this month? RNG

        if (howStressedWereYou == 0) {
            happiness = happiness - 15
            health = health - 5
            $('textArea').innerHTML = $('textArea').innerHTML + "I've been swamped with work and been really stressed out this week.<br>";
        }
        if (howStressedWereYou == 1) {
            happiness = happiness - 10
            health = health - 2
            $('textArea').innerHTML = $('textArea').innerHTML + "I have a good amount of work to do and it has been fairly stressful this week.<br>";
        }
        if (howStressedWereYou == 2) {
            happiness = happiness - 3
            $('textArea').innerHTML = $('textArea').innerHTML + "I had a pretty reasonable workload this week thankfully, so it hasn't been too stressful.<br>";
        }
    }

    /* Random Event 2 Math */
    if (randomEvent == 1) {
        smarts = smarts - 4
        $('textArea').innerHTML = $('textArea').innerHTML + "I tried to help one of my friends with a math assignment I should have known how to do, but failed to because apparently I've already forgotten it all. So much for higher education!<br>";
    }

    /* Random Event 3 Homework */
    if (randomEvent == 2) {
        smarts = smarts - 4
        $('textArea').innerHTML = $('textArea').innerHTML + "I managed to get ahead on homework and relaxed this weekend.<br>";
    }

    /* Random Event 4 Quiz */
    if (randomEvent == 3) {
        var takeQuiz = Math.floor(Math.random() * 2) //You took a quiz, did you pass or fail? RNG
        if (takeQuiz == 0) {
            happiness = happiness + 5
            totalQuizzes.push(100)
            $('textArea').innerHTML = $('textArea').innerHTML + "I took a quiz in one of my classes and got an A!<br>";
        }
    }

    /* Random Event 5 Bird Poop */
    if (randomEvent == 4) {
            happiness = happiness - 5
            $('textArea').innerHTML = $('textArea').innerHTML + "A bird pooped on my shoulder.<br>";
        }

    /* Random Event 6 Beggar */
    if (randomEvent == 5) {
        turnOffAllActivities()
        $('Beggar').style.display='block';
        random_event_popup_sound.play();
        }

    /*Classmate asks for help if you're smart*/
    if (randomEvent == 6 && smarts > 90) {
        turnOffAllActivities()
        $('HelpClassmate').style.display='block';
        random_event_popup_sound.play();
        }

    /* Random Event 7 SASE EVENT */
    if (randomEvent == 7) {
        turnOffAllActivities()
        $('SaseEvent').style.display='block';
        random_event_popup_sound.play();
        }
    }
    /*Random Event 8 MALARIA EVENT */
    if (randomEvent == 8 || randomEvent == 9 || randomEvent == 10) {
        var getSick = Math.floor(Math.random() * 3)

        /*Getting Sick Random Events: Malaria */
        if (getSick == 0 && health < 50 && malaria == false) {

            turnOffAllActivities()
            $('MalariaEvent').style.display='block';
            random_event_popup_sound.play();

            malaria = true
            health -= 10
            }
        else {
            $('textArea').innerHTML = $('textArea').innerHTML + "I felt a little sick, but now I feel much better!";
        }
    }
    /*Random Event 8 FREE POPCORN EVENT */
    if (randomEvent == 11) {
        turnOffAllActivities()
        $('FreePopcornEvent').style.display='block';
        random_event_popup_sound.play();
    }


    //This will run every time ticket month
    if (week == 7) {
        var timeTicketResult = Math.floor(Math.random() * 2)
        if (timeTicketResult == 0) {
            happiness = happiness + 5
            $('textArea').innerHTML = $('textArea').innerHTML + "I was given a great time ticket slot and got the exact schedule I wanted for next term! <br>";
        }
        if (timeTicketResult == 1) {
            happiness = happiness - 5
            $('textArea').innerHTML = $('textArea').innerHTML + "I was given a bad time ticket slot this quarter and had to make up a whole new schedule!!! I hate this system, why is it random!<br>";
        }
    }

    /*------------------------------------------------------------------*/
    /*Text Relating to Majors Dropdown Here */
    /*------------------------------------------------------------------*/
    major = $('majors').value
    let temp = Math.floor(Math.random()*2)
    if (major == 'cs') {
        if (temp == 1) {
        $('textArea').innerHTML += "I had to do a Zybooks lab for my CS class for homework. I finished coding in like 15 minutes, but debugging and formatting took like 5 hours!<br>";
        happiness -= 5
        }
        if (temp == 2) {
            $('textArea').innerHTML += "I had a really interesting lecture today about programming in Python.";
            happiness -= 5    
        }
    }

    /*------------------------------------------------------------------*/
    /*Text Relating to Hobbies Dropdown Here */
    /*------------------------------------------------------------------*/
    hobby = $('interests').value
    if (hobby == "partying") {
        $('textArea').innerHTML += "I had a blast getting black-out drunk last weekend, but now I've got a hangover and can't focus in class.<br>";
        happiness += 5
        smarts -= 5
        money -= 20
    } if (hobby == "dancing") {
        $('textArea').innerHTML += "I took a fun Zumba dance class at the DAC last weekend.<br>"
        happiness += 5
        health += 5
    } if (hobby == "football") {
        $('textArea').innerHTML += "I regret going to a school with no football team. All my friends are having a blast cheering for the Nittany Lions. Where's the school spirit here at Drexel?!<br>"
        happiness -= 3
    } if (hobby == "basketball") {
        $('textArea').innerHTML += "I had a great time playing pick up basketball games at the DAC last weekend.<br>"
        happiness += 5
        health += 5
    } if (hobby == "jogging") {
        $('textArea').innerHTML += "I went for a jog last weekend, which helped me take my mind off of all the stress from schoolwork.<br>"
        happiness += 5
        health += 5
    } if (hobby == "rockclimbing") {
        $('textArea').innerHTML += "I spent a few hours climbing on the rock wall inside the DAC. It was a great time, and didn't cost me a cent!<br>"
        happiness += 5
        health += 5
    } if (hobby == "soccer") {
        $('textArea').innerHTML += "Over the weekend I played some recreational soccer games inside the Buckley Field Sports Bubble.<br>"
        happiness += 5
        health += 5
    } if (hobby == "graphicdesign") {
        $('textArea').innerHTML += "I screwed around with Photoshop and illustrator last weekend and made some really spicy memes.<br>"
        happiness += 5
        activityLimit -= 5
    } if (hobby == "photography") {
        $('textArea').innerHTML += "Over the weekend I rode the SEPTA Subway and explored Philly to find some cool places to snap pictures of. I got some pretty great shots, so I'm quite happy!<br>"
        happiness += 5
        activityLimit -= 5
    } if (hobby == "cooking") {
        $('textArea').innerHTML += "I got some ingredients from Heirloom Market and tried cooking dinnner for myself. It wasn't perfect, but it was soooo much better than the dining hall food!<br>"
        happiness += 5
        health += 5
        money -= 20
    } if (hobby == "singing") {
        $('textArea').innerHTML += "I had practice last night with my a capella group, it was a fun time and helped me relieve a lot of stress!<br>"
        happiness += 5
        activityLimit -= 5
    } if (hobby == "guitar") {
        $('textArea').innerHTML += "I practiced guitar over the weekend. It was already noon, but some people still came over to tell me to keep it down, since they had been out partying and only went to sleep a few hours ago. <br>"
        happiness += 2
        smarts += 5
    } if (hobby == "videogames") {
        $('textArea').innerHTML += "I stayed up late playing Super Smash Brothers with my dormmates.<br>"
        happiness += 5
        health -= 5
    } if (hobby == "movies") {
        $('textArea').innerHTML += "I went out last night and saw a movie at the Cinemark University City Movie Theatre.<br>"
        happiness += 5
        money -= 10
    } if (hobby == "anime") {
        $('textArea').innerHTML += 'I watched lots of anime last night, and kept telling myself "just one more episode"... and suddenly it was 5AM!<br>'
        happiness += 5
        health -= 5
        smarts -= 2
    } if (hobby == "sleeping") {
        $('textArea').innerHTML += "I took a nice afternoon nap to make up for all the sleep I missed while having fun with friends. <br>"
        happiness += 5
        health += 5
        activityLimit -= 5
    }

    momHappinessBar -= 5
    dadHappinessBar -= 5
    roommateHappinessBar -= 5

    /*refreshes activity limit back to 100%*/
    activityLimit = 100

    refreshbar()
}
/*---------------------------------------------------------------------*/
/*----------------FINAL EXAMS-------------------------------------*/
/*---------------------------------------------------------------------*/
//User selected the right answer on the easy final exam
function easyRightAnswer() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('easyFinalExam').style.display='none';
    $('easyAnswer2').style.display = 'none';
    $('easyAnswer4').style.display = 'none';

    $('textArea').innerHTML = $('textArea').innerHTML + "I passed my final exam. Yeah it was pretty easy. <br>";
    happiness += 15

    /*User got a 90-100 on the final exam */
    totalExams.push( (90 + Math.floor(Math.random() * 11)) )

    refreshbar()
}
//User selected the wrong answer for the easy exam
function easyWrongAnswer() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('easyFinalExam').style.display='none';
    $('easyAnswer2').style.display = 'none';
    $('easyAnswer4').style.display = 'none';

    $('textArea').innerHTML = $('textArea').innerHTML + "I failed my final! What?! That exam was easy! I thought I did better!<br>";
    happiness -= 15

    totalExams.push( (60 + Math.floor(Math.random() * 10)) )

    refreshbar()
}
//User selected the right answer for the hard exam
function rightAnswer() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('hardFinalExam').style.display='none';
    $('answer2').style.display = 'none';
    $('answer3').style.display = 'none';
    $('answer4').style.display = 'none';
    $('answer5').style.display = 'none';
    $('answer6').style.display = 'none';
    $('answer7').style.display = 'none';

    $('textArea').innerHTML = $('textArea').innerHTML + "I passed my final exam! I got really lucky. <br>";
    happiness += 15

    /*User got a 70-100 on the final exam */
    totalExams.push( (70 + Math.floor(Math.random() * 31)) )

    refreshbar()
}
//User selected the wrong answer for the hard exam
function wrongAnswer() {

    /*Plays Click button sound */
    click_button_sound.play()

    turnBackOnAllActivities()
    $('hardFinalExam').style.display='none';
    $('answer2').style.display = 'none';
    $('answer3').style.display = 'none';
    $('answer4').style.display = 'none';
    $('answer5').style.display = 'none';
    $('answer6').style.display = 'none';
    $('answer7').style.display = 'none';

    $('textArea').innerHTML = $('textArea').innerHTML + "I failed my final! That exam was impossible!<br>";
    happiness -= 15

    totalExams.push( (Math.floor(Math.random() * 70)) )

    refreshbar()
}

/*============================================================================================== */
//CLASSMATES PAGE FUNCTIONS
/*============================================================================================== */
//Increases smarts stat
function study() {

    /*Plays Click button sound */
    click_button_sound.play()

    /*If the dude is stupid, then he'll find it harder to succeed at studying (25% chance of succeeding while studing)*/
    if (smarts < 50) {
        var study = Math.floor(Math.random() * 4)
    }
    /*If the dude is not stupid (above 50 smarts), then he'll find it easier to study and succeed */
    else {
        var study = Math.floor(Math.random() * 4)
        if (0 <= study & study <= 2) {
            study = 0
        }
    }

    if (activityLimit >= 5) {
        activityLimit -= 5

        /*If he succeeds at studying */
        if (study == 0) {
            smarts += 5
            happiness += 4

            $('textArea').innerHTML = $('textArea').innerHTML + "I was productive and studied for about an hour.<br>"
        }
        /*If he fails at studying */
        if  (0 < study) {
            happiness -= 5

            $('textArea').innerHTML = $('textArea').innerHTML + "I still don't get it. I studied and the information still isn't clicking with me. Maybe I should go to office hours or get tutoring at the Korman Center.<br>"
        }

    }
    refreshbar()
}
//Increases grades stat
function doHomework() {

    /*Plays Click button sound */
    click_button_sound.play()

    if (homework_for_the_week > 0 && activityLimit >= 4) {
        homework_for_the_week -= 1
        activityLimit -= 4
        if (homework_for_the_week == 0) {
            happiness += 6
            $('textArea').innerHTML += "I got done all my homework for the week! <br>"
        }
        else {
            smarts += Math.floor(Math.random() * 2)
            happiness -= Math.floor(Math.random() * 2)
            $('textArea').innerHTML += "I got done some homework for the week. <br>"
        }
    }
    refreshbar()
}

/*------------------------------------------------------*/
/*---------- Back Button Functions ---------------------*/
/*------------------------------------------------------*/

function backToMainActivities() {
    $('mainActivities').style.display = 'block';
    $('netFlixMenu').style.display = 'none';
}

function backToFrontActivities() {
 $('activitiesPage').style.display = "none";
}

function backToFrontClasses() {
 $('classesPage').style.display = "none";
}

function backToFrontFinance() {
 $('financesPage').style.display = "none";
}

function backToFrontRelations() {
 $('relationshipsPage').style.display = "none";
}
