//Name of File: Relationships Section
//Purpose: Contains all code related to the relationships, parents, roommate, and classmates pages
//Last modified: 6/5/20
//Authors: Allen Cai, Richard Lam
//Dependencies: Dependent on the 'script.js' file.


var $ = function(id) {return document.getElementById(id);}

var classmate1_relationship = 10;
var classmate2_relationship = 10;
var classmate3_relationship = 10;
var classmate4_relationship = 10;
var classmate5_relationship = 10;

//Has user call mom, increases the mom's happiness stat
function callMom() {

    /*Plays Click button sound */
    click_button_sound.play()

    momHappinessBar += 5
    activityLimit -= 5
    refreshbar()
}
//Has user call mom, increases the dad's happiness stat
function callDad() {

    /*Plays Click button sound */
    click_button_sound.play()

    dadHappinessBar += 5
    activityLimit -= 5
    refreshbar()
}
//Has user talk with their roommate, increases the user's happiness stat by a random amount
function friendlyConversation(name, npcHappiness) {
    let charisma = Math.floor(Math.random()*10)
    if (activityLimit >= 3) {
        activityLimit -= 3
        if (charisma >= 9) {
            $('textArea').innerHTML += "You and " + name + " really hit it off and found that you had many common interests. It was so much fun that you lost track of time and talked for many hours. <br>";
            happiness += 25
            $(npcHappiness) += 15
            charisma = Math.floor(Math.random()*7)  // This one gives a lot of extra happiness but costs more time.
            if (activityLimit >= 5) {
                activityLimit -= 5 
            }
            refreshbar()
        } else if (charisma >= 7) {
            $('textArea').innerHTML += "You and " + name + " had a blast discussing all the funny things that have been happening across campus recently. <br>";
            happiness += 10
            npcHappiness += 8
            charisma = Math.floor(Math.random()*10)
            refreshbar()
        } else if (charisma >= 5) {
            $('textArea').innerHTML += "You and " + name + " had a fun conversation about what you did last weekend. <br>";
            happiness += 5
            npcHappiness += 5
            charisma = Math.floor(Math.random()*10)
            refreshbar()
        } else if (charisma >= 3) {
            $('textArea').innerHTML += "You and " + name + " made small talk about the weather and how your day was. <br>";
            happiness += 2
            npcHappiness += 2
            charisma = Math.floor(Math.random()*10)
            refreshbar()
        } else {
            $('textArea').innerHTML += name + " was feeling super stressed out, so they snapped at you and told you to go away. <br>";
            happiness -= 10
            npcHappiness -= 5
            charisma = Math.floor(Math.random()*10)
            refreshbar()
        }
    }
    else {
        $('textArea').innerHTML += "You don't have enough time left for that this week.<br>"
    }
    refreshbar()
}
//Has user ask roommate for money, increases the user's money stat
function askMoney(name, happiness) {
    let generosity = Math.floor(Math.random()*10)
    if (activityLimit >= 3) {
        activityLimit -= 3
        if (happiness >= 90 && generosity >= 8) {
            $('textArea').innerHTML += name + " likes you a ton and was feeling really generous today, so they gave you $100 <br>";
            money += 100
            generosity = Math.floor(Math.random()*10)
        } else if (happiness >= 60 && generosity >= 8) {
            $('textArea').innerHTML += name + " likes you a lot and felt generous, so they gave you $50. <br>";
            money += 50
            generosity = Math.floor(Math.random()*10)
        } else if (happiness >= 50 && generosity >= 6){
            $('textArea').innerHTML += name + " likes you, but they're not made of money you know! Even so, they gave you $5. <br>";
            money += 5
            generosity = Math.floor(Math.random()*10)
        } else if (happiness <= 50) {
            $('textArea').innerHTML += name + " really doesn't like you, so why should they give you any of their hard earned money? <br>";
        } else {
            $('textArea').innerHTML += name + " didn't have any money to spare for you today. Go mooch off of someone else! <br>";
        }
    } else {
        $('textArea').innerHTML += "You don't have enough time left for that this week.<br>"
    }
    roommateHappinessBar -= 3
    refreshbar()
}
//Has user clean their room, increases the user's happiness stat
function cleanRoom() {
    let cleanliness = Math.floor(Math.random()*10)
    if (activityLimit >= 3) {
        activityLimit -= 3
        roommateHappinessBar += 3
        if (cleanliness >= 8) {
            $('textArea').innerHTML += "Your room is already so clean that even your Mom wouldn't nag you about cleaning it, but you tidied up your desk and cabinet anyways. <br>";
            happiness += 2
        } else if (cleanliness >= 5) {
            $('textArea').innerHTML += "You cleaned up your room a little, folded your laundry, and made your bed. <br>";
            happiness += 5
        } else if (cleanliness >= 3) {
            $('textArea').innerHTML += "Your desk was a mess and there were dirty clothes everywhere. You cleaned some of it up.<br>";
            happiness += 5
        } else {
            $('textArea').innerHTML += "Your room is an absolute pig sty! It smells terrible, there's dirty laundry laid haphazardly on the furniture, stacks of dishes in need of washing, and random crap strewn everywhere! You cleaned some of it up, but you're still going to clean a lot more.<br>";
            roommateHappinessBar -= 5
        }
    } else {
        $('textArea').innerHTML += "You don't have enough time left for that this week.<br>"
    }
    refreshbar()
}
//Has user ask roommate for help, increases the user's happiness stat
function askForHelp(name) {
    let stress = Math.floor(Math.random()*10)
    if (activityLimit >= 3) {
        activityLimit -= 3
        roommateHappinessBar += 3
        if (stress >= 7) {
            $('textArea').innerHTML += "You were on the brink of having a panic attack because your classes were stressing you out, but " + name + " comforted you until you calmed down.<br>";
            happiness += 5
        } else if (stress >= 4) {
            $('textArea').innerHTML += "You were feeling kinda stressed, but " + name + " cheered you up by showing you some spicy memes.<br>";
            happiness += 5
        } else {
            $('textArea').innerHTML += "You really didn't get how to do one of your assignments, but luckily " + name + " was able to help!<br>";
            happiness += 2
        }  
    } else {
        $('textArea').innerHTML += "You don't have enough time left for that this week.<br>"
    } 
    refreshbar()
}
//Shows the classmates menu
function showClassmate(n) {
    $('mainClassmatesPage').style.display = 'none';
    if (n == 1) {
        $('classmate1Page').style.display = 'block';    
    }
    else if (n == 2) {
        $('classmate2Page').style.display = 'block';
    }
    else if (n == 3) {
        $('classmate3Page').style.display = 'block';
    }
    else if (n == 4) {
        $('classmate4Page').style.display = 'block';
    }
    else if (n == 5) {
        $('classmate5Page').style.display = 'block';
    }
}
//returns back to the main classmates menu
function backToClassmatesList() {
    $('mainClassmatesPage').style.display = 'block';
    $('classmate1Page').style.display = 'none';
    $('classmate2Page').style.display = 'none';
    $('classmate3Page').style.display = 'none';
    $('classmate4Page').style.display = 'none';
    $('classmate5Page').style.display = 'none';
}

//Generates all names and profiles of NPCs
window.onload = function character_generation() {
    player_gender = Math.floor(Math.random() * 2)
    refreshbar()
    bitmojis= ["drex/bitmojis/boys/boy1.jpg", "drex/bitmojis/boys/boy2.jpg", "drex/bitmojis/boys/boy3.jpg", "drex/bitmojis/boys/boy4.jpg", "drex/bitmojis/boys/boy5.jpg", "drex/bitmojis/boys/boy6.jpg", "drex/bitmojis/boys/boy7.jpg", "drex/bitmojis/boys/boy8.jpg", "drex/bitmojis/girls/girl1.jpg", "drex/bitmojis/girls/girl2.jpg", "drex/bitmojis/girls/girl3.jpg", "drex/bitmojis/girls/girl4.jpg", "drex/bitmojis/girls/girl5.jpg", "drex/bitmojis/girls/girl6.jpg", "drex/bitmojis/girls/girl7.jpg", "drex/bitmojis/girls/girl8.jpg"];

    let randomBoyImage = Math.floor(Math.random() * 8);
    let randomGirlImage = (Math.floor(Math.random() * 8) + 8);

    boynames = ['William', 'James', 'Charles', 'George', 'Frank', 'Joseph', 'Thomas', 'Henry', 'Robert', 'Edward', 'Harry', 'Walter', 'Arthur', 'Fred', 'Albert', 'Samuel', 'David', 'Louis', 'Joe', 'Charlie', 'Clarence', 'Richard', 'Andrew', 'Daniel', 'Ernest', 'Will', 'Jesse', 'Oscar', 'Lewis', 'Peter', 'Benjamin', 'Frederick', 'Willie', 'Alfred', 'Sam', 'Roy', 'Herbert', 'Jacob', 'Tom', 'Elmer', 'Carl', 'Lee', 'Howard', 'Martin', 'Michael', 'Bert', 'Herman', 'Jim', 'Francis', 'Harvey', 'Earl', 'Eugene', 'Ralph', 'Ed', 'Claude', 'Edwin', 'Ben', 'Charley', 'Paul', 'Edgar', 'Isaac', 'Otto', 'Luther', 'Lawrence', 'Ira', 'Patrick', 'Guy', 'Oliver', 'Theodore', 'Hugh', 'Clyde', 'Alexander', 'August', 'Floyd', 'Homer', 'Jack', 'Leonard', 'Horace', 'Marion', 'Philip', 'Allen', 'Archie', 'Stephen', 'Chester', 'Willis', 'Raymond', 'Rufus', 'Warren', 'Jessie', 'Milton', 'Alex', 'Leo', 'Julius', 'Ray', 'Sidney', 'Bernard', 'Dan', 'Jerry', 'Calvin', 'Perry', 'Dave', 'Anthony', 'Eddie', 'Amos', 'Dennis', 'Clifford', 'Leroy', 'Wesley', 'Alonzo', 'Garfield', 'Franklin', 'Emil', 'Leon', 'Nathan', 'Harold', 'Matthew', 'Levi', 'Moses', 'Everett', 'Lester', 'Winfield', 'Adam', 'Lloyd', 'Mack', 'Fredrick', 'Jay', 'Jess', 'Melvin', 'Noah', 'Aaron', 'Alvin', 'Norman', 'Gilbert', 'Elijah', 'Victor', 'Gus', 'Nelson', 'Jasper', 'Silas', 'Christopher', 'Jake', 'Mike', 'Percy', 'Adolph', 'Maurice', 'Cornelius', 'Felix', 'Reuben', 'Wallace', 'Claud', 'Roscoe', 'Sylvester', 'Earnest', 'Hiram', 'Otis', 'Simon', 'Willard', 'Irvin', 'Mark', 'Jose', 'Wilbur', 'Abraham', 'Virgil', 'Clinton', 'Elbert', 'Leslie', 'Marshall', 'Owen', 'Wiley', 'Anton', 'Morris', 'Manuel', 'Phillip', 'Augustus', 'Emmett', 'Eli', 'Nicholas', 'Wilson', 'Alva', 'Harley', 'Newton', 'Timothy', 'Marvin', 'Ross', 'Curtis', 'Edmund', 'Jeff', 'Elias', 'Harrison', 'Stanley', 'Columbus', 'Lon', 'Ora', 'Ollie', 'Russell', 'Pearl', 'Solomon', 'Arch', 'Asa', 'Clayton', 'Enoch', 'Irving', 'Mathew', 'Nathaniel', 'Scott', 'Hubert', 'Lemuel', 'Andy', 'Ellis', 'Emanuel', 'Joshua', 'Millard', 'Vernon', 'Wade', 'Cyrus', 'Miles', 'Rudolph', 'Sherman', 'Austin', 'Bill', 'Chas', 'Lonnie', 'Monroe', 'Byron', 'Edd', 'Emery', 'Grant', 'Jerome', 'Max', 'Mose', 'Steve', 'Gordon', 'Abe', 'Pete', 'Chris', 'Clark', 'Gustave', 'Orville', 'Lorenzo', 'Bruce', 'Marcus', 'Preston', 'Bob', 'Dock', 'Donald', 'Jackson', 'Cecil', 'Barney', 'Delbert', 'Edmond', 'Anderson', 'Christian', 'Glenn', 'Jefferson', 'Luke', 'Neal', 'Burt', 'Ike', 'Myron', 'Tony', 'Conrad', 'Joel', 'Matt', 'Riley', 'Vincent', 'Emory', 'Isaiah', 'Nick', 'Ezra', 'Green', 'Juan', 'Clifton', 'Lucius', 'Porter', 'Arnold', 'Bud', 'Jeremiah', 'Taylor', 'Forrest', 'Roland', 'Spencer', 'Burton', 'Don', 'Emmet', 'Gustav', 'Louie', 'Morgan', 'Ned', 'Van', 'Ambrose', 'Chauncey', 'Elisha', 'Ferdinand', 'General', 'Julian', 'Kenneth', 'Mitchell', 'Allie', 'Josh', 'Judson', 'Lyman', 'Napoleon', 'Pedro', 'Berry', 'Dewitt', 'Ervin', 'Forest', 'Lynn', 'Pink', 'Ruben', 'Sanford', 'Ward', 'Douglas', 'Ole', 'Omer', 'Ulysses', 'Walker', 'Wilbert', 'Adelbert', 'Benjiman', 'Ivan', 'Jonas', 'Major', 'Abner', 'Archibald', 'Caleb', 'Clint', 'Dudley', 'Granville', 'King', 'Mary', 'Merton', 'Antonio', 'Bennie', 'Carroll', 'Freeman', 'Josiah', 'Milo', 'Royal', 'Dick', 'Earle', 'Elza', 'Emerson', 'Fletcher', 'Judge', 'Laurence', 'Neil', 'Roger', 'Seth', 'Glen', 'Hugo', 'Jimmie', 'Johnnie', 'Washington', 'Elwood', 'Gust', 'Harmon', 'Jordan', 'Simeon', 'Wayne', 'Wilber', 'Clem', 'Evan', 'Frederic', 'Irwin', 'Junius', 'Lafayette', 'Loren', 'Madison', 'Mason', 'Orval', 'Abram', 'Aubrey', 'Elliott', 'Hans', 'Karl', 'Minor', 'Wash', 'Wilfred', 'Allan', 'Alphonse', 'Dallas', 'Dee', 'Isiah', 'Jason', 'Johnny', 'Lawson', 'Lew', 'Micheal', 'Orin', 'Addison', 'Cal', 'Erastus', 'Francisco', 'Hardy', 'Lucien', 'Randolph', 'Stewart', 'Vern', 'Wilmer', 'Zack', 'Adrian', 'Alvah', 'Bertram', 'Clay', 'Ephraim', 'Fritz', 'Giles', 'Grover', 'Harris', 'Isom', 'Jesus', 'Johnie', 'Jonathan', 'Lucian', 'Malcolm', 'Merritt', 'Otho', 'Perley', 'Rolla', 'Sandy', 'Tomas', 'Wilford', 'Adolphus', 'Angus', 'Arther', 'Carlos', 'Cary', 'Cassius', 'Davis', 'Hamilton', 'Harve', 'Israel', 'Leander', 'Melville', 'Merle', 'Murray', 'Pleasant', 'Sterling', 'Steven', 'Axel', 'Boyd', 'Bryant', 'Clement', 'Erwin', 'Ezekiel', 'Foster', 'Frances', 'Geo', 'Houston', 'Issac', 'Jules', 'Larkin', 'Mat', 'Morton', 'Orlando', 'Pierce', 'Prince', 'Rollie', 'Rollin', 'Sim', 'Stuart', 'Wilburn', 'Bennett', 'Casper', 'Christ', 'Dell', 'Egbert', 'Elmo', 'Fay', 'Gabriel', 'Hector', 'Horatio', 'Lige', 'Saul', 'Smith', 'Squire', 'Tobe', 'Tommie', 'Wyatt', 'Alford', 'Alma', 'Alton', 'Andres', 'Burl', 'Cicero', 'Dean', 'Dorsey', 'Enos', 'Howell', 'Lou', 'Loyd', 'Mahlon', 'Nat', 'Omar', 'Oran', 'Parker', 'Raleigh', 'Reginald', 'Rubin', 'Seymour', 'Wm', 'Young', 'Benjamine', 'Carey', 'Carlton', 'Eldridge', 'Elzie', 'Garrett', 'Isham', 'Johnson', 'Larry', 'Logan', 'Merrill', 'Mont', 'Oren', 'Pierre', 'Rex', 'Rodney', 'Ted', 'Webster', 'West', 'Wheeler', 'Willam', 'Al', 'Aloysius', 'Alvie', 'Anna', 'Art', 'Augustine', 'Bailey', 'Benjaman', 'Beverly', 'Bishop', 'Clair', 'Cloyd', 'Coleman', 'Dana', 'Duncan', 'Dwight', 'Emile', 'Evert', 'Henderson', 'Hunter', 'Jean', 'Lem', 'Luis', 'Mathias', 'Maynard', 'Miguel', 'Mortimer', 'Nels', 'Norris', 'Pat', 'Phil', 'Rush', 'Santiago', 'Sol', 'Sydney', 'Thaddeus', 'Thornton', 'Tim', 'Travis', 'Truman', 'Watson', 'Webb', 'Wellington', 'Winfred', 'Wylie', 'Alec', 'Basil', 'Baxter', 'Bertrand', 'Buford', 'Burr', 'Cleveland', 'Colonel', 'Dempsey', 'Early', 'Ellsworth', 'Fate', 'Finley', 'Gabe', 'Garland', 'Gerald', 'Herschel', 'Hezekiah', 'Justus', 'Lindsey', 'Marcellus', 'Olaf', 'Olin', 'Pablo', 'Rolland', 'Turner', 'Verne', 'Volney', 'Williams', 'Almon', 'Alois', 'Alonza', 'Anson', 'Authur', 'Benton', 'Billie', 'Cornelious', 'Darius', 'Denis', 'Dillard', 'Doctor', 'Elvin', 'Emma', 'Eric', 'Evans', 'Gideon', 'Haywood', 'Hilliard', 'Hosea', 'Lincoln', 'Lonzo', 'Lucious', 'Lum', 'Malachi', 'Newt', 'Noel', 'Orie', 'Palmer', 'Pinkney', 'Shirley', 'Sumner', 'Terry', 'Urban', 'Uriah', 'Valentine', 'Waldo', 'Warner', 'Wong', 'Zeb', 'Abel', 'Alden', 'Archer', 'Avery', 'Carson', 'Cullen', 'Doc', 'Eben', 'Elige', 'Elizabeth', 'Elmore', 'Ernst', 'Finis', 'Freddie', 'Godfrey', 'Guss', 'Hamp', 'Hermann', 'Isadore', 'Isreal', 'Jones', 'June', 'Lacy', 'Lafe', 'Leland', 'Llewellyn', 'Ludwig', 'Manford', 'Maxwell', 'Minnie', 'Obie', 'Octave', 'Orrin', 'Ossie', 'Oswald', 'Park', 'Parley', 'Ramon', 'Rice', 'Stonewall', 'Theo', 'Tillman', 'Addie', 'Aron', 'Ashley', 'Bernhard', 'Bertie', 'Berton', 'Buster', 'Butler', 'Carleton', 'Carrie', 'Clara', 'Clarance', 'Clare', 'Crawford', 'Danial', 'Dayton', 'Dolphus', 'Elder', 'Ephriam', 'Fayette', 'Felipe', 'Fernando', 'Flem', 'Florence', 'Ford', 'Harlan', 'Hayes', 'Henery', 'Hoy', 'Huston', 'Ida', 'Ivory', 'Jonah', 'Justin', 'Lenard', 'Leopold', 'Lionel', 'Manley', 'Marquis', 'Marshal', 'Mart', 'Odie', 'Olen', 'Oral', 'Orley', 'Otha', 'Press', 'Price', 'Quincy', 'Randall', 'Rich', 'Richmond', 'Romeo', 'Russel', 'Rutherford', 'Shade', 'Shelby', 'Solon', 'Thurman', 'Tilden', 'Troy', 'Woodson', 'Worth', 'Aden', 'Alcide', 'Alf', 'Algie', 'Arlie', 'Bart', 'Bedford', 'Benito', 'Billy', 'Bird', 'Birt', 'Bruno', 'Burley', 'Chancy', 'Claus', 'Cliff', 'Clovis', 'Connie', 'Creed', 'Delos', 'Duke', 'Eber', 'Eligah', 'Elliot', 'Elton', 'Emmitt', 'Gene', 'Golden', 'Hal', 'Hardin', 'Harman', 'Hervey', 'Hollis', 'Ivey', 'Jennie', 'Len', 'Lindsay', 'Lonie', 'Lyle', 'Mac', 'Mal', 'Math', 'Miller', 'Orson', 'Osborne', 'Percival', 'Pleas', 'Ples', 'Rafael', 'Raoul', 'Roderick', 'Rose', 'Shelton', 'Sid', 'Theron', 'Tobias', 'Toney', 'Tyler', 'Vance', 'Vivian', 'Walton', 'Watt', 'Weaver', 'Wilton', 'Adolf', 'Albin', 'Albion', 'Allison', 'Alpha', 'Alpheus', 'Anastacio', 'Andre']
    girlnames = ['Alethea', 'Carly', 'Aisha', 'Cicely', 'Anitra', 'Bianca', 'Vonetta', 'Latarsha', 'Nyree', 'Alexa', 'Fatima', 'Keshia', 'Daniela', 'Danyelle', 'Mendy', 'Charissa', 'Shantell', 'Marquita', 'Briana', 'Chanel', 'Danyell', 'Sunshine', 'Nia', 'Nikia', 'Jamila', 'Tanika', 'Brande', 'Meagan', 'Jasmin', 'Maranda', 'Lakeshia', 'Kyla', 'Syreeta', 'Luciana', 'Tobi', 'Alanna', 'Mistie', 'Tamica', 'Carisa', 'Cherish', 'Cecily', 'Haley', 'Mandi', 'Daniele', 'Tamisha', 'Tanesha', 'Danyel', 'Gabriella', 'Tiana', 'Mandie', 'Harmony', 'Shameka', 'Spring', 'Destiny', 'Nakisha', 'Tamekia', 'Ayana', 'Rashida', 'Yadira', 'Alesha', 'Kacey', 'Shawanda', 'Shamika', 'Takisha', 'Pepper', 'Kandice', 'Alina', 'Meggan', 'Farrah', 'Tennille', 'Nadia', 'Rhiannon', 'Jillian', 'January', 'Khalilah', 'Janae', 'Jaimee', 'Farah', 'Chana', 'Sommer', 'Shayna', 'Shasta', 'Torrie', 'Ashlee', 'Carina', 'Chaka', 'Trish', 'Rayna', 'Brianna', 'Eboni', 'Kenisha', 'Caitlin', 'Latoria', 'Torie', 'Venessa', 'Shanika', 'Shandra', 'Kizzy', 'Qiana', 'Talia', 'Hayley', 'Shawnte', 'Shante', 'Salena', 'Liana', 'Quiana', 'Kamilah', 'Shalon', 'Latesha', 'Iesha', 'Brittney', 'Danica', 'Jenelle', 'Yasmin', 'Lashunda', 'Malia', 'Adrianna', 'Tarah', 'Tenisha', 'Shawnna', 'Chante', 'Karissa', 'Corie', 'Chrissy', 'Kylie', 'Aja', 'Meghann', 'Crissy', 'Meaghan', 'Shavon', 'Brianne', 'Krissy', 'Shavonne', 'Lacie', 'Shanita', 'Desirae', 'Abbey', 'Lyndsey', 'Shaunna', 'Marlana', 'Ariane', 'Kylee', 'Sierra', 'Leia', 'Natosha', 'Ariana', 'Somer', 'Ashleigh', 'Star', 'Alaina', 'Casie', 'Kindra', 'Precious', 'Kiana', 'Winter', 'Viviana', 'Breanne', 'Siobhan', 'Maren', 'Kylene', 'Breanna', 'Ashanti', 'Asia', 'Lyndsay', 'Sharee', 'Kacy', 'Princess', 'Ayesha', 'Rikki', 'Lynsey', 'Shaneka', 'Linsey', 'Loni', 'Perla', 'Kristyn', 'Anya', 'Mariana', 'Renada', 'Kacie', 'Britney', 'Reyna', 'Chimere', 'Kaci', 'Brynn', 'Laci', 'Tai', 'Ashlie', 'Jessi', 'Tatiana', 'Kati', 'Krystle', 'Tierra', 'Tiara', 'Fallon', 'Evita', 'Kaitlin', 'Martine', 'Kassandra', 'Jesica', 'Alexia', 'Toccara', 'Latoyia', 'Tashina', 'Chaya', 'Joi', 'Daniella', 'Katelyn', 'Kandace', 'Shanell', 'Kourtney', 'Nereida', 'Jazmin', 'Chelsey', 'Kaleena', 'Kala', 'Kassie', 'Jenilee', 'Emilee', 'Cassondra', 'Shaina', 'Shakira', 'Ciara', 'Hailey', 'Kali', 'Shena', 'Falon', 'Tawny', 'Arielle', 'Ashly', 'Chelsie', 'Tenika', 'Sharita', 'Cristen', 'Tabetha', 'Krysta', 'Carley', 'Arianna', 'Mallory', 'Kaitlyn', 'Ciji', 'Ashely', 'Giselle', 'Tess', 'Maegan', 'Echo', 'Dwan', 'Britni', 'Ashli', 'Paola', 'Ashlea', 'Caitlyn', 'Tyesha', 'Maira', 'Brittani', 'Tasia', 'Grisel', 'Kaylee', 'Shenna', 'Teela', 'Savanna', 'Breann', 'Mckenzie', 'Janessa', 'Kasandra', 'Markita', 'Karly', 'Magen', 'Dannielle', 'Cierra', 'Sade', 'Krystina', 'Micaela', 'Ciera', 'Brittni', 'Kayleigh', 'Britany', 'Alyse', 'Deandra', 'Brittny', 'Kaley', 'Alysha', 'Jazmine', 'Shaquita', 'Krysten', 'Brittanie', 'Krystin', 'Magan', 'Katelin', 'Violeta', 'Kasie', 'Jessika', 'Kelsie', 'Mariel', 'Shira', 'Jaqueline', 'Amberly', 'Samatha', 'Eliana', 'Kaleigh', 'Nakita', 'Phylicia', 'Brittaney', 'Katlyn', 'Shardae', 'Jerrica', 'Porsha', 'Britta', 'Sharde', 'Cherrelle', 'Katelynn', 'Mallorie', 'Cherelle', 'Malorie', 'Sable', 'Kaila', 'Ashlyn', 'Shanae', 'Sharday', 'Fabiola', 'Iliana', 'Kyrie', 'Leandra', 'Shatara', 'Kortney', 'Janay', 'Ayla', 'Cayla', 'Yessenia', 'Skye', 'Kelsi', 'Jerica', 'Tiera', 'Jesenia', 'Kaela', 'Karli', 'Porsche', 'Kalyn', 'Chanelle', 'Alessandra', 'Lakendra', 'Lauryn', 'Kaycee', 'Kailey', 'Denisse', 'Jessenia', 'Anjelica', 'Sarai', 'Tianna', 'Kaylin', 'Kaylyn', 'Denisha', 'Stephani', 'Kaylie', 'Danae', 'Shanice', 'Jaleesa', 'Jalisa', 'Whitley', 'Deja', 'Taja', 'Chelsi', 'Genesis', 'Katlin', 'Kimber', 'Brittnee', 'Kierra', 'Alexandrea', 'Anais', 'Allyssa', 'Kiersten', 'Breana', 'Diandra', 'Sarina', 'Lizbeth', 'Kiera', 'Katarina', 'Jalissa', 'Hali', 'Carli', 'Tiarra', 'Grecia', 'Moriah', 'Kaitlynn', 'Brittnie', 'Flor', 'Elizabet', 'Alexandr', 'Britny', 'Katherin', 'Mikayla', 'Audrianna', 'Kirstie', 'Asha', 'Kallie', 'Kelsea', 'Bryanna', 'Audriana', 'Danika', 'Gianna', 'Makayla', 'Martika', 'Mikaela', 'Destinee', 'Brittnay', 'Yajaira', 'Yasmine', 'Shaniqua', 'Shanelle', 'Lizeth', 'Joana', 'Ryann', 'Isamar', 'Latifah', 'Kanisha', 'Rubi', 'Mariela', 'Symone', 'Ivana', 'Heaven', 'Lucero', 'Shelbi', 'Alysa', 'Dulce', 'Brooklyn', 'Nataly', 'Imani', 'Kalie', 'Alannah', 'Fiona', 'Kanesha', 'Laken', 'Haleigh', 'Eryn', 'Elyssa', 'Shelbie', 'Demi', 'Ieshia', 'Makenzie', 'Shanequa', 'Karlee', 'Haylee', 'Cheyanne', 'Estefania', 'Halie', 'Chynna', 'Karlie', 'Stormy', 'Delaney', 'Carlee', 'Kailee', 'Alayna', 'Mckenna', 'Shaquana', 'Tiesha', 'Brielle', 'Marcela', 'Myranda', 'Miriah', 'Alexus', 'Kelcie', 'Emerald', 'Giovanna', 'Bryana', 'China', 'Essence', 'Bria', 'Aracely', 'Aubree', 'Chelsy', 'Miesha', 'Cinthia', 'Brianda', 'Hailee', 'Karley', 'Ashlynn', 'Macey', 'Tatyana', 'Shawnee', 'Brea', 'Joselyn', 'Ivonne', 'Katerina', 'Marlee', 'Breonna', 'Shaniece', 'Kaylynn', 'Kinsey', 'Kenia', 'Destini', 'Kayley', 'Lexus', 'Selene', 'Yaritza', 'Khadijah', 'Kadijah', 'Halle', 'Brionna', 'Destiney', 'Jazmyn', 'Yazmin', 'Itzel', 'Kassidy', 'Coraima', 'Shannen', 'Kailyn', 'Kalene', 'Katlynn', 'Lexi', 'Deyanira', 'Yasmeen', 'Shyanne', 'Viridiana', 'Kaylene', 'Crysta', 'Reina', 'Alondra', 'Kayli', 'Nayeli', 'Jasmyn', 'Aspen', 'Jasmyne', 'Paloma', 'Eleni', 'Hana', 'Aaliyah', 'Aliyah', 'Dalia', 'Zhane', 'Mckayla', 'Clarisa', 'Mikala', 'Dayana', 'Maddison', 'Kianna', 'Kenzie', 'Bailee', 'Sydnee', 'Haylie', 'Nohely', 'Makenna', 'Vanesa', 'Cydney', 'Aleah', 'Shyann', 'Valentina', 'Caitlynn', 'Tatum', 'Adilene', 'Isis', 'Tatianna', 'Baylee', 'Shania', 'Jocelyne', 'Daisha', 'Kaelyn', 'Jayla', 'Dasia', 'Emely', 'Sydni', 'Abbigail', 'Miracle', 'Zoey', 'Unique', 'Iridian', 'Brooklynn', 'Alia', 'Keanna', 'Alivia', 'Daija', 'Sydnie', 'Fernanda', 'Daja', 'Lesly', 'Annika', 'Kyleigh', 'Sienna', 'Ciarra', 'Maci', 'Destany', 'Tamia', 'Moesha', 'Odalys', 'Yamilex', 'Zaria', 'Mireya', 'Alize', 'Xena', 'Dania', 'Katia', 'Maia', 'Amani', 'Shianne', 'Madisen', 'Odalis', 'Kaylah', 'Sarahi', 'Jailene', 'Jazlyn', 'Alyssia', 'Chyna', 'Estefany', 'Ansley', 'Madyson', 'Jaycie', 'Jacey', 'Lexis', 'Daijah', 'Joslyn', 'Dejah', 'Yulissa', 'Anahi', 'Aylin', 'Julisa', 'Salma', 'Madisyn', 'Erykah', 'Gisselle', 'Raegan', 'Tea', 'Estrella', 'Jayda', 'Rylie', 'Makala', 'Taya', 'Kaylan', 'Camila', 'Annalise', 'Jazmyne', 'Keeley', 'Shaylee', 'Savana', 'Madelynn', 'Micayla', 'Maeve', 'Nautica', 'Cali', 'Serenity', 'Yulisa', 'Baylie', 'Samara', 'Mya', 'Ally', 'Myah', 'Reanna', 'Madilyn', 'Felicity', 'Ireland', 'Skyla', 'Willow', 'Jaida', 'Abigayle', 'Jaelyn', 'Rhianna', 'Amira', 'Shae', 'Zoie', 'Caleigh', 'Abril', 'Deasia', 'Kaylen', 'Tayla', 'Alexys', 'Jaycee', 'Jayde', 'Kennedi', 'Amaya', 'Piper', 'Aniya', 'Noelia', 'Kiarra', 'Shaniya', 'Keara', 'Emmalee', 'Aiyana', 'Miya', 'Jalyn', 'Nyasia', 'Aniyah', 'Jaylene', 'Kyara', 'Citlalli', 'Abigale', 'Isabela', 'Tatyanna', 'Journey', 'Ryleigh', 'Aliya', 'Sky', 'Shyla', 'Bryn', 'Abagail', 'Izabella', 'Nya', 'Saige', 'Jakayla', 'Litzy', 'Brisa', 'Amya', 'Jackeline', 'Kaya', 'Jaquelin', 'Hailie', 'Nyah', 'Amara', 'Dariana', 'Yamilet', 'Monserrat', 'Cielo', 'Aryanna', 'Anaya', 'Arely', 'Kaia', 'Maryam', 'Anjali', 'Lilliana', 'Amiya', 'Belen', 'Aliza', 'Keira', 'Janiya', 'Ashtyn', 'Neha', 'Laisha', 'Amina', 'Jailyn', 'Kenna', 'Iyana', 'Maiya', 'Marlen', 'Nevaeh', 'Ainsley', 'Yuliana', 'Beyonce', 'Nayely', 'Johana', 'Nallely', 'Kaiya', 'Meadow', 'Makaila', 'Kya', 'Ximena', 'Jimena', 'Melany', 'Jamya', 'Taina', 'Aubrie', 'Frida', 'Kaliyah', 'Mikaila', 'Taliyah', 'Taniya', 'Citlali', 'Annabella', 'Dafne', 'Hayleigh', 'Yoselin', 'Areli', 'Madalynn', 'Priscila', 'Miah', 'Keila', 'Natalya', 'Jaylynn', 'Rianna', 'Sheyla', 'Aryana', 'Elle', 'Lisbeth', 'Evelin',] 
    lastnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris', 'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson', 'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson', 'Watson', 'Brooks', 'Lau', 'Dale', 'Camp', 'Connolly', 'Hewitt', 'Cramer', 'Goldberg', 'Morin', 'Sutherland', 'Kaplan', 'Mcallister', 'Byrne', 'Osorio', 'Cash', 'Haines', 'Meeks', 'Wynn', 'Gilliam']
    
    if (player_gender == 0) {
        $('profilepic').src = bitmojis[randomBoyImage]
        firstname = boynames[Math.floor(Math.random() * 701)]
        lastname = lastnames[Math.floor(Math.random() * 100)]
        $('name').innerHTML = firstname + ' ' + lastname;

        momName = girlnames[Math.floor(Math.random() * 701)]
        $('momName').innerHTML = momName + ' ' + lastname
        dadName = boynames[Math.floor(Math.random() * 701)]
        $('dadName').innerHTML = dadName + ' ' + lastname

        roommateName = boynames[Math.floor(Math.random() * 701)]
        $('roommateName').innerHTML = roommateName + ' ' + lastnames[Math.floor(Math.random() * 100)]
        $('roommate').src = bitmojis[(Math.floor(Math.random() * 8))]
        

    } else {
        $('profilepic').src = bitmojis[randomGirlImage]
        firstname = girlnames[Math.floor(Math.random() * 701)]
        lastname = lastnames[Math.floor(Math.random() * 100)]
        $('name').innerHTML = firstname + ' ' + lastname;

        momName = girlnames[Math.floor(Math.random() * 701)]
        $('momName').innerHTML = momName + ' ' + lastname
        dadName = boynames[Math.floor(Math.random() * 701)]
        $('dadName').innerHTML = dadName + ' ' + lastname

        roommateName = girlnames[Math.floor(Math.random() * 701)]
        $('roommateName').innerHTML = roommateName + ' ' + lastnames[Math.floor(Math.random() * 100)]
        $('roommate').src = bitmojis[(Math.floor(Math.random() * 8) + 8)]

    }
    $('mom').src = bitmojis[randomGirlImage];
    $('dad').src = bitmojis[randomBoyImage];

    $('classmate1').src = bitmojis[(Math.floor(Math.random() * 8) + 8)]
    $('classmate1Name').innerHTML =  girlnames[Math.floor(Math.random() * 701)] + ' ' + lastnames[Math.floor(Math.random() * 100)] 
    
    $('classmate2').src = bitmojis[(Math.floor(Math.random() * 8) + 8)]
    $('classmate2Name').innerHTML =  girlnames[Math.floor(Math.random() * 701)] + ' ' + lastnames[Math.floor(Math.random() * 100)] 
    
    $('classmate3').src = bitmojis[(Math.floor(Math.random() * 8))]
    $('classmate3Name').innerHTML =  boynames[Math.floor(Math.random() * 701)] + ' ' + lastnames[Math.floor(Math.random() * 100)]

    $('classmate4').src = bitmojis[(Math.floor(Math.random() * 8))]
    $('classmate4Name').innerHTML =  boynames[Math.floor(Math.random() * 701)] + ' ' + lastnames[Math.floor(Math.random() * 100)]

    $('classmate5').src = bitmojis[(Math.floor(Math.random() * 8))]
    $('classmate5Name').innerHTML =  boynames[Math.floor(Math.random() * 701)] + ' ' + lastnames[Math.floor(Math.random() * 100)]
}



/*------------RICHARD's ADDED WORK------------------------------------*/
//Takes in n (the classmate), and amount (the amount to change the happiness), and changes the appropriate classmate's happiness stat
function change_classmate_relationship(n, amount) {
    if (n == 1) {
        classmate1_relationship += amount;
    }
    else if (n == 2) {
        classmate2_relationship += amount;
    }
    else if (n == 3) {
        classmate3_relationship += amount;
    }
    else if (n == 4) {
        classmate4_relationship += amount;
    }
    else if (n == 5) {
        classmate5_relationship += amount;
    }
}
//Increases classmate's and user's happiness stats
function classmateConversation(n) {
    if (activityLimit >= 3) {
        var RandomNumber = Math.floor(Math.random() * 12)
        if (RandomNumber == 0) {
            change_classmate_relationship(n, -1 * Math.floor(Math.random()*4))
            happiness -= Math.floor(Math.random() * 5)
            $('textArea').innerHTML += "I had an awkward conversation with my classmate about Drexel.<br>";
        }
        else if (RandomNumber == 1) {
            happiness += Math.floor(Math.random() * 5)
            change_classmate_relationship(n, Math.floor(Math.random()*4))
            $('textArea').innerHTML += "My classmate and I had a great conversation about Marvel!<br>";
        }
        else if (RandomNumber == 2) {
            happiness -= 5
            change_classmate_relationship(n, -1 * (5 + Math.floor(Math.random()*6)))
            $('textArea').innerHTML += "I got into a political argument with my classmate and made them cry!<br>";
        }
        else if (RandomNumber == 3) {
            happiness += 4
            change_classmate_relationship(n, (2 + Math.floor(Math.random()*4)))
            $('textArea').innerHTML += "My classmate and I talked about how smart we both are! <br>";
        }
        else if (RandomNumber == 4) {
            happiness += 1
            change_classmate_relationship(n, (1 + Math.floor(Math.random()*3)))
            $('textArea').innerHTML += "I loved the conversation I had with my classmate. I truly felt listented to. Life is good. <br>";
        }
        else if (RandomNumber == 5) {
            happiness += 3
            change_classmate_relationship(n, (2 + Math.floor(Math.random()*3)))
            $('textArea').innerHTML += "While I was talking to my classmate, I found out we both hated eating at Hans and we had a great time discussing how Hans should be changed. <br>";
        }
        else if (RandomNumber == 6) {
            happiness += 1
            change_classmate_relationship(n, (Math.floor(Math.random()*2)))
            $('textArea').innerHTML += "My classmate and I talked about why the sky is blue and why we have ears.<br>";
        }
        else if (RandomNumber == 7) {
            happiness += 3
            change_classmate_relationship(n, (1 + Math.floor(Math.random()*3)))
            $('textArea').innerHTML += "We talked about how awful the time ticket system is at Drexel. Why is it random!??!<br>";
        }
        else if (RandomNumber == 8) {
            happiness += Math.floor(Math.random() * 3)
            change_classmate_relationship(n, (1 + Math.floor(Math.random()*3)))
            $('textArea').innerHTML += "While I was talking to my classmate, I slipped on a banana peel and fell on my back. At least I made my classmate laugh. They thought I did it on purpose.<br>";
        }
        else if (RandomNumber == 9) {
            happiness += Math.floor(Math.random() * 4)
            change_classmate_relationship(n, (1 + Math.floor(Math.random()*4)))
            $('textArea').innerHTML += "My classmate told me how he was chased by a tiger as a kid. I actively listened to his wild tale.<br>";
        }
        else if (RandomNumber == 10) {
            happiness -= 3
            change_classmate_relationship(n, (-1 * Math.floor(Math.random()*3)))
            $('textArea').innerHTML += "I was talking to my classmate when a bee flew in front of my face, my classmate slapped me in the face by accident. I was not happy.<br>";
        }
        else if (RandomNumber == 11) {
            happiness += 5
            change_classmate_relationship(n, 5)
            $('textArea').innerHTML += "Life is crazy. I had a talk with my classmate about the meaning of life, why we're here, and how we are all small snippets of the bigger reality. I really connected with my classmate.<br>";
        }
        activityLimit -= 3
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to talk to your classmate. <br>"
    }
    refreshbar()
}
//Has user study with classmate, increases user's smarts stat and increase classmate's happiness stat
function classmateStudy(n) {
    if (activityLimit >= 10) {
        var RandomNumber = Math.floor(Math.random() * 2)
        if (RandomNumber == 0) {
            if (smarts < 50) {
                smarts += Math.floor(Math.random()*7)
                change_classmate_relationship(n, Math.floor(Math.random()*7))
                $('textArea').innerHTML += "I had a big study session with my classmate at the Hagerty Library. I think we both learned a lot.<br>";
            }
            else {
                smarts += Math.floor(Math.random()*2)
                change_classmate_relationship(n, Math.floor(Math.random()*2))
                $('textArea').innerHTML += "I had a study session with my classmate. I think I should have just studied by myself.<br>";
            }
            
        }
        else if (RandomNumber == 1) {
            if (smarts < 25) {
                smarts += Math.floor(Math.random()*12)
                change_classmate_relationship(n, Math.floor(Math.random()*12))
                $('textArea').innerHTML += "My classmate explained everything to me! I understand a lot more now!<br>";
            }
            else if (smarts < 50) {
                smarts += Math.floor(Math.random()*8)
                change_classmate_relationship(n, Math.floor(Math.random()*5))
                $('textArea').innerHTML += "I had a pretty big study session with my classmate at the Korman Center. I learned a good amount!<br>";
            }
            else {
                smarts += Math.floor(Math.random()*2)
                change_classmate_relationship(n, Math.floor(Math.random()*2))
                $('textArea').innerHTML += "My classmate and I were sorta just arguing back and forth about the homework. I didn't really learn much. I should've just studied by myself.<br>";
            }
        }
        activityLimit -= 10
    }
    else {
        $('textArea').innerHTML = $('textArea').innerHTML + "You don't have the energy to talk to your classmate. <br>"
    }
    refreshbar()
}