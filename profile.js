//Name of File: Profile Section
//Purpose: Contains all code related to the generating the profile for the player, as well as the parents and classmates.
//Last modified: 6/5/20
//Authors: Allen Cai
//Dependencies: Dependent on the 'script.js' file.


//Generates all initial profile stats, names/profiles, parent names, and roommate names at the beginning of the game
boynames = ['William', 'James', 'Charles', 'George', 'Frank', 'Joseph', 'Thomas', 'Henry', 'Robert', 'Edward', 'Harry', 'Walter', 'Arthur', 'Fred', 'Albert', 'Samuel', 'David', 'Louis', 'Joe', 'Charlie', 'Clarence', 'Richard', 'Andrew', 'Daniel', 'Ernest', 'Will', 'Jesse', 'Oscar', 'Lewis', 'Peter', 'Benjamin', 'Frederick', 'Willie', 'Alfred', 'Sam', 'Roy', 'Herbert', 'Jacob', 'Tom', 'Elmer', 'Carl', 'Lee', 'Howard', 'Martin', 'Michael', 'Bert', 'Herman', 'Jim', 'Francis', 'Harvey', 'Earl', 'Eugene', 'Ralph', 'Ed', 'Claude', 'Edwin', 'Ben', 'Charley', 'Paul', 'Edgar', 'Isaac', 'Otto', 'Luther', 'Lawrence', 'Ira', 'Patrick', 'Guy', 'Oliver', 'Theodore', 'Hugh', 'Clyde', 'Alexander', 'August', 'Floyd', 'Homer', 'Jack', 'Leonard', 'Horace', 'Marion', 'Philip', 'Allen', 'Archie', 'Stephen', 'Chester', 'Willis', 'Raymond', 'Rufus', 'Warren', 'Jessie', 'Milton', 'Alex', 'Leo', 'Julius', 'Ray', 'Sidney', 'Bernard', 'Dan', 'Jerry', 'Calvin', 'Perry', 'Dave', 'Anthony', 'Eddie', 'Amos', 'Dennis', 'Clifford', 'Leroy', 'Wesley', 'Alonzo', 'Garfield', 'Franklin', 'Emil', 'Leon', 'Nathan', 'Harold', 'Matthew', 'Levi', 'Moses', 'Everett', 'Lester', 'Winfield', 'Adam', 'Lloyd', 'Mack', 'Fredrick', 'Jay', 'Jess', 'Melvin', 'Noah', 'Aaron', 'Alvin', 'Norman', 'Gilbert', 'Elijah', 'Victor', 'Gus', 'Nelson', 'Jasper', 'Silas', 'Christopher', 'Jake', 'Mike', 'Percy', 'Adolph', 'Maurice', 'Cornelius', 'Felix', 'Reuben', 'Wallace', 'Claud', 'Roscoe', 'Sylvester', 'Earnest', 'Hiram', 'Otis', 'Simon', 'Willard', 'Irvin', 'Mark', 'Jose', 'Wilbur', 'Abraham', 'Virgil', 'Clinton', 'Elbert', 'Leslie', 'Marshall', 'Owen', 'Wiley', 'Anton', 'Morris', 'Manuel', 'Phillip', 'Augustus', 'Emmett', 'Eli', 'Nicholas', 'Wilson', 'Alva', 'Harley', 'Newton', 'Timothy', 'Marvin', 'Ross', 'Curtis', 'Edmund', 'Jeff', 'Elias', 'Harrison', 'Stanley', 'Columbus', 'Lon', 'Ora', 'Ollie', 'Russell', 'Pearl', 'Solomon', 'Arch', 'Asa', 'Clayton', 'Enoch', 'Irving', 'Mathew', 'Nathaniel', 'Scott', 'Hubert', 'Lemuel', 'Andy', 'Ellis', 'Emanuel', 'Joshua', 'Millard', 'Vernon', 'Wade', 'Cyrus', 'Miles', 'Rudolph', 'Sherman', 'Austin', 'Bill', 'Chas', 'Lonnie', 'Monroe', 'Byron', 'Edd', 'Emery', 'Grant', 'Jerome', 'Max', 'Mose', 'Steve', 'Gordon', 'Abe', 'Pete', 'Chris', 'Clark', 'Gustave', 'Orville', 'Lorenzo', 'Bruce', 'Marcus', 'Preston', 'Bob', 'Dock', 'Donald', 'Jackson', 'Cecil', 'Barney', 'Delbert', 'Edmond', 'Anderson', 'Christian', 'Glenn', 'Jefferson', 'Luke', 'Neal', 'Burt', 'Ike', 'Myron', 'Tony', 'Conrad', 'Joel', 'Matt', 'Riley', 'Vincent', 'Emory', 'Isaiah', 'Nick', 'Ezra', 'Green', 'Juan', 'Clifton', 'Lucius', 'Porter', 'Arnold', 'Bud', 'Jeremiah', 'Taylor', 'Forrest', 'Roland', 'Spencer', 'Burton', 'Don', 'Emmet', 'Gustav', 'Louie', 'Morgan', 'Ned', 'Van', 'Ambrose', 'Chauncey', 'Elisha', 'Ferdinand', 'General', 'Julian', 'Kenneth', 'Mitchell', 'Allie', 'Josh', 'Judson', 'Lyman', 'Napoleon', 'Pedro', 'Berry', 'Dewitt', 'Ervin', 'Forest', 'Lynn', 'Pink', 'Ruben', 'Sanford', 'Ward', 'Douglas', 'Ole', 'Omer', 'Ulysses', 'Walker', 'Wilbert', 'Adelbert', 'Benjiman', 'Ivan', 'Jonas', 'Major', 'Abner', 'Archibald', 'Caleb', 'Clint', 'Dudley', 'Granville', 'King', 'Mary', 'Merton', 'Antonio', 'Bennie', 'Carroll', 'Freeman', 'Josiah', 'Milo', 'Royal', 'Dick', 'Earle', 'Elza', 'Emerson', 'Fletcher', 'Judge', 'Laurence', 'Neil', 'Roger', 'Seth', 'Glen', 'Hugo', 'Jimmie', 'Johnnie', 'Washington', 'Elwood', 'Gust', 'Harmon', 'Jordan', 'Simeon', 'Wayne', 'Wilber', 'Clem', 'Evan', 'Frederic', 'Irwin', 'Junius', 'Lafayette', 'Loren', 'Madison', 'Mason', 'Orval', 'Abram', 'Aubrey', 'Elliott', 'Hans', 'Karl', 'Minor', 'Wash', 'Wilfred', 'Allan', 'Alphonse', 'Dallas', 'Dee', 'Isiah', 'Jason', 'Johnny', 'Lawson', 'Lew', 'Micheal', 'Orin', 'Addison', 'Cal', 'Erastus', 'Francisco', 'Hardy', 'Lucien', 'Randolph', 'Stewart', 'Vern', 'Wilmer', 'Zack', 'Adrian', 'Alvah', 'Bertram', 'Clay', 'Ephraim', 'Fritz', 'Giles', 'Grover', 'Harris', 'Isom', 'Jesus', 'Johnie', 'Jonathan', 'Lucian', 'Malcolm', 'Merritt', 'Otho', 'Perley', 'Rolla', 'Sandy', 'Tomas', 'Wilford', 'Adolphus', 'Angus', 'Arther', 'Carlos', 'Cary', 'Cassius', 'Davis', 'Hamilton', 'Harve', 'Israel', 'Leander', 'Melville', 'Merle', 'Murray', 'Pleasant', 'Sterling', 'Steven', 'Axel', 'Boyd', 'Bryant', 'Clement', 'Erwin', 'Ezekiel', 'Foster', 'Frances', 'Geo', 'Houston', 'Issac', 'Jules', 'Larkin', 'Mat', 'Morton', 'Orlando', 'Pierce', 'Prince', 'Rollie', 'Rollin', 'Sim', 'Stuart', 'Wilburn', 'Bennett', 'Casper', 'Christ', 'Dell', 'Egbert', 'Elmo', 'Fay', 'Gabriel', 'Hector', 'Horatio', 'Lige', 'Saul', 'Smith', 'Squire', 'Tobe', 'Tommie', 'Wyatt', 'Alford', 'Alma', 'Alton', 'Andres', 'Burl', 'Cicero', 'Dean', 'Dorsey', 'Enos', 'Howell', 'Lou', 'Loyd', 'Mahlon', 'Nat', 'Omar', 'Oran', 'Parker', 'Raleigh', 'Reginald', 'Rubin', 'Seymour', 'Wm', 'Young', 'Benjamine', 'Carey', 'Carlton', 'Eldridge', 'Elzie', 'Garrett', 'Isham', 'Johnson', 'Larry', 'Logan', 'Merrill', 'Mont', 'Oren', 'Pierre', 'Rex', 'Rodney', 'Ted', 'Webster', 'West', 'Wheeler', 'Willam', 'Al', 'Aloysius', 'Alvie', 'Anna', 'Art', 'Augustine', 'Bailey', 'Benjaman', 'Beverly', 'Bishop', 'Clair', 'Cloyd', 'Coleman', 'Dana', 'Duncan', 'Dwight', 'Emile', 'Evert', 'Henderson', 'Hunter', 'Jean', 'Lem', 'Luis', 'Mathias', 'Maynard', 'Miguel', 'Mortimer', 'Nels', 'Norris', 'Pat', 'Phil', 'Rush', 'Santiago', 'Sol', 'Sydney', 'Thaddeus', 'Thornton', 'Tim', 'Travis', 'Truman', 'Watson', 'Webb', 'Wellington', 'Winfred', 'Wylie', 'Alec', 'Basil', 'Baxter', 'Bertrand', 'Buford', 'Burr', 'Cleveland', 'Colonel', 'Dempsey', 'Early', 'Ellsworth', 'Fate', 'Finley', 'Gabe', 'Garland', 'Gerald', 'Herschel', 'Hezekiah', 'Justus', 'Lindsey', 'Marcellus', 'Olaf', 'Olin', 'Pablo', 'Rolland', 'Turner', 'Verne', 'Volney', 'Williams', 'Almon', 'Alois', 'Alonza', 'Anson', 'Authur', 'Benton', 'Billie', 'Cornelious', 'Darius', 'Denis', 'Dillard', 'Doctor', 'Elvin', 'Emma', 'Eric', 'Evans', 'Gideon', 'Haywood', 'Hilliard', 'Hosea', 'Lincoln', 'Lonzo', 'Lucious', 'Lum', 'Malachi', 'Newt', 'Noel', 'Orie', 'Palmer', 'Pinkney', 'Shirley', 'Sumner', 'Terry', 'Urban', 'Uriah', 'Valentine', 'Waldo', 'Warner', 'Wong', 'Zeb', 'Abel', 'Alden', 'Archer', 'Avery', 'Carson', 'Cullen', 'Doc', 'Eben', 'Elige', 'Elizabeth', 'Elmore', 'Ernst', 'Finis', 'Freddie', 'Godfrey', 'Guss', 'Hamp', 'Hermann', 'Isadore', 'Isreal', 'Jones', 'June', 'Lacy', 'Lafe', 'Leland', 'Llewellyn', 'Ludwig', 'Manford', 'Maxwell', 'Minnie', 'Obie', 'Octave', 'Orrin', 'Ossie', 'Oswald', 'Park', 'Parley', 'Ramon', 'Rice', 'Stonewall', 'Theo', 'Tillman', 'Addie', 'Aron', 'Ashley', 'Bernhard', 'Bertie', 'Berton', 'Buster', 'Butler', 'Carleton', 'Carrie', 'Clara', 'Clarance', 'Clare', 'Crawford', 'Danial', 'Dayton', 'Dolphus', 'Elder', 'Ephriam', 'Fayette', 'Felipe', 'Fernando', 'Flem', 'Florence', 'Ford', 'Harlan', 'Hayes', 'Henery', 'Hoy', 'Huston', 'Ida', 'Ivory', 'Jonah', 'Justin', 'Lenard', 'Leopold', 'Lionel', 'Manley', 'Marquis', 'Marshal', 'Mart', 'Odie', 'Olen', 'Oral', 'Orley', 'Otha', 'Press', 'Price', 'Quincy', 'Randall', 'Rich', 'Richmond', 'Romeo', 'Russel', 'Rutherford', 'Shade', 'Shelby', 'Solon', 'Thurman', 'Tilden', 'Troy', 'Woodson', 'Worth', 'Aden', 'Alcide', 'Alf', 'Algie', 'Arlie', 'Bart', 'Bedford', 'Benito', 'Billy', 'Bird', 'Birt', 'Bruno', 'Burley', 'Chancy', 'Claus', 'Cliff', 'Clovis', 'Connie', 'Creed', 'Delos', 'Duke', 'Eber', 'Eligah', 'Elliot', 'Elton', 'Emmitt', 'Gene', 'Golden', 'Hal', 'Hardin', 'Harman', 'Hervey', 'Hollis', 'Ivey', 'Jennie', 'Len', 'Lindsay', 'Lonie', 'Lyle', 'Mac', 'Mal', 'Math', 'Miller', 'Orson', 'Osborne', 'Percival', 'Pleas', 'Ples', 'Rafael', 'Raoul', 'Roderick', 'Rose', 'Shelton', 'Sid', 'Theron', 'Tobias', 'Toney', 'Tyler', 'Vance', 'Vivian', 'Walton', 'Watt', 'Weaver', 'Wilton', 'Adolf', 'Albin', 'Albion', 'Allison', 'Alpha', 'Alpheus', 'Anastacio', 'Andre']
girlnames = ['Alethea', 'Carly', 'Aisha', 'Cicely', 'Anitra', 'Bianca', 'Vonetta', 'Latarsha', 'Nyree', 'Alexa', 'Fatima', 'Keshia', 'Daniela', 'Danyelle', 'Mendy', 'Charissa', 'Shantell', 'Marquita', 'Briana', 'Chanel', 'Danyell', 'Sunshine', 'Nia', 'Nikia', 'Jamila', 'Tanika', 'Brande', 'Meagan', 'Jasmin', 'Maranda', 'Lakeshia', 'Kyla', 'Syreeta', 'Luciana', 'Tobi', 'Alanna', 'Mistie', 'Tamica', 'Carisa', 'Cherish', 'Cecily', 'Haley', 'Mandi', 'Daniele', 'Tamisha', 'Tanesha', 'Danyel', 'Gabriella', 'Tiana', 'Mandie', 'Harmony', 'Shameka', 'Spring', 'Destiny', 'Nakisha', 'Tamekia', 'Ayana', 'Rashida', 'Yadira', 'Alesha', 'Kacey', 'Shawanda', 'Shamika', 'Takisha', 'Pepper', 'Kandice', 'Alina', 'Meggan', 'Farrah', 'Tennille', 'Nadia', 'Rhiannon', 'Jillian', 'January', 'Khalilah', 'Janae', 'Jaimee', 'Farah', 'Chana', 'Sommer', 'Shayna', 'Shasta', 'Torrie', 'Ashlee', 'Carina', 'Chaka', 'Trish', 'Rayna', 'Brianna', 'Eboni', 'Kenisha', 'Caitlin', 'Latoria', 'Torie', 'Venessa', 'Shanika', 'Shandra', 'Kizzy', 'Qiana', 'Talia', 'Hayley', 'Shawnte', 'Shante', 'Salena', 'Liana', 'Quiana', 'Kamilah', 'Shalon', 'Latesha', 'Iesha', 'Brittney', 'Danica', 'Jenelle', 'Yasmin', 'Lashunda', 'Malia', 'Adrianna', 'Tarah', 'Tenisha', 'Shawnna', 'Chante', 'Karissa', 'Corie', 'Chrissy', 'Kylie', 'Aja', 'Meghann', 'Crissy', 'Meaghan', 'Shavon', 'Brianne', 'Krissy', 'Shavonne', 'Lacie', 'Shanita', 'Desirae', 'Abbey', 'Lyndsey', 'Shaunna', 'Marlana', 'Ariane', 'Kylee', 'Sierra', 'Leia', 'Natosha', 'Ariana', 'Somer', 'Ashleigh', 'Star', 'Alaina', 'Casie', 'Kindra', 'Precious', 'Kiana', 'Winter', 'Viviana', 'Breanne', 'Siobhan', 'Maren', 'Kylene', 'Breanna', 'Ashanti', 'Asia', 'Lyndsay', 'Sharee', 'Kacy', 'Princess', 'Ayesha', 'Rikki', 'Lynsey', 'Shaneka', 'Linsey', 'Loni', 'Perla', 'Kristyn', 'Anya', 'Mariana', 'Renada', 'Kacie', 'Britney', 'Reyna', 'Chimere', 'Kaci', 'Brynn', 'Laci', 'Tai', 'Ashlie', 'Jessi', 'Tatiana', 'Kati', 'Krystle', 'Tierra', 'Tiara', 'Fallon', 'Evita', 'Kaitlin', 'Martine', 'Kassandra', 'Jesica', 'Alexia', 'Toccara', 'Latoyia', 'Tashina', 'Chaya', 'Joi', 'Daniella', 'Katelyn', 'Kandace', 'Shanell', 'Kourtney', 'Nereida', 'Jazmin', 'Chelsey', 'Kaleena', 'Kala', 'Kassie', 'Jenilee', 'Emilee', 'Cassondra', 'Shaina', 'Shakira', 'Ciara', 'Hailey', 'Kali', 'Shena', 'Falon', 'Tawny', 'Arielle', 'Ashly', 'Chelsie', 'Tenika', 'Sharita', 'Cristen', 'Tabetha', 'Krysta', 'Carley', 'Arianna', 'Mallory', 'Kaitlyn', 'Ciji', 'Ashely', 'Giselle', 'Tess', 'Maegan', 'Echo', 'Dwan', 'Britni', 'Ashli', 'Paola', 'Ashlea', 'Caitlyn', 'Tyesha', 'Maira', 'Brittani', 'Tasia', 'Grisel', 'Kaylee', 'Shenna', 'Teela', 'Savanna', 'Breann', 'Mckenzie', 'Janessa', 'Kasandra', 'Markita', 'Karly', 'Magen', 'Dannielle', 'Cierra', 'Sade', 'Krystina', 'Micaela', 'Ciera', 'Brittni', 'Kayleigh', 'Britany', 'Alyse', 'Deandra', 'Brittny', 'Kaley', 'Alysha', 'Jazmine', 'Shaquita', 'Krysten', 'Brittanie', 'Krystin', 'Magan', 'Katelin', 'Violeta', 'Kasie', 'Jessika', 'Kelsie', 'Mariel', 'Shira', 'Jaqueline', 'Amberly', 'Samatha', 'Eliana', 'Kaleigh', 'Nakita', 'Phylicia', 'Brittaney', 'Katlyn', 'Shardae', 'Jerrica', 'Porsha', 'Britta', 'Sharde', 'Cherrelle', 'Katelynn', 'Mallorie', 'Cherelle', 'Malorie', 'Sable', 'Kaila', 'Ashlyn', 'Shanae', 'Sharday', 'Fabiola', 'Iliana', 'Kyrie', 'Leandra', 'Shatara', 'Kortney', 'Janay', 'Ayla', 'Cayla', 'Yessenia', 'Skye', 'Kelsi', 'Jerica', 'Tiera', 'Jesenia', 'Kaela', 'Karli', 'Porsche', 'Kalyn', 'Chanelle', 'Alessandra', 'Lakendra', 'Lauryn', 'Kaycee', 'Kailey', 'Denisse', 'Jessenia', 'Anjelica', 'Sarai', 'Tianna', 'Kaylin', 'Kaylyn', 'Denisha', 'Stephani', 'Kaylie', 'Danae', 'Shanice', 'Jaleesa', 'Jalisa', 'Whitley', 'Deja', 'Taja', 'Chelsi', 'Genesis', 'Katlin', 'Kimber', 'Brittnee', 'Kierra', 'Alexandrea', 'Anais', 'Allyssa', 'Kiersten', 'Breana', 'Diandra', 'Sarina', 'Lizbeth', 'Kiera', 'Katarina', 'Jalissa', 'Hali', 'Carli', 'Tiarra', 'Grecia', 'Moriah', 'Kaitlynn', 'Brittnie', 'Flor', 'Elizabet', 'Alexandr', 'Britny', 'Katherin', 'Mikayla', 'Audrianna', 'Kirstie', 'Asha', 'Kallie', 'Kelsea', 'Bryanna', 'Audriana', 'Danika', 'Gianna', 'Makayla', 'Martika', 'Mikaela', 'Destinee', 'Brittnay', 'Yajaira', 'Yasmine', 'Shaniqua', 'Shanelle', 'Lizeth', 'Joana', 'Ryann', 'Isamar', 'Latifah', 'Kanisha', 'Rubi', 'Mariela', 'Symone', 'Ivana', 'Heaven', 'Lucero', 'Shelbi', 'Alysa', 'Dulce', 'Brooklyn', 'Nataly', 'Imani', 'Kalie', 'Alannah', 'Fiona', 'Kanesha', 'Laken', 'Haleigh', 'Eryn', 'Elyssa', 'Shelbie', 'Demi', 'Ieshia', 'Makenzie', 'Shanequa', 'Karlee', 'Haylee', 'Cheyanne', 'Estefania', 'Halie', 'Chynna', 'Karlie', 'Stormy', 'Delaney', 'Carlee', 'Kailee', 'Alayna', 'Mckenna', 'Shaquana', 'Tiesha', 'Brielle', 'Marcela', 'Myranda', 'Miriah', 'Alexus', 'Kelcie', 'Emerald', 'Giovanna', 'Bryana', 'China', 'Essence', 'Bria', 'Aracely', 'Aubree', 'Chelsy', 'Miesha', 'Cinthia', 'Brianda', 'Hailee', 'Karley', 'Ashlynn', 'Macey', 'Tatyana', 'Shawnee', 'Brea', 'Joselyn', 'Ivonne', 'Katerina', 'Marlee', 'Breonna', 'Shaniece', 'Kaylynn', 'Kinsey', 'Kenia', 'Destini', 'Kayley', 'Lexus', 'Selene', 'Yaritza', 'Khadijah', 'Kadijah', 'Halle', 'Brionna', 'Destiney', 'Jazmyn', 'Yazmin', 'Itzel', 'Kassidy', 'Coraima', 'Shannen', 'Kailyn', 'Kalene', 'Katlynn', 'Lexi', 'Deyanira', 'Yasmeen', 'Shyanne', 'Viridiana', 'Kaylene', 'Crysta', 'Reina', 'Alondra', 'Kayli', 'Nayeli', 'Jasmyn', 'Aspen', 'Jasmyne', 'Paloma', 'Eleni', 'Hana', 'Aaliyah', 'Aliyah', 'Dalia', 'Zhane', 'Mckayla', 'Clarisa', 'Mikala', 'Dayana', 'Maddison', 'Kianna', 'Kenzie', 'Bailee', 'Sydnee', 'Haylie', 'Nohely', 'Makenna', 'Vanesa', 'Cydney', 'Aleah', 'Shyann', 'Valentina', 'Caitlynn', 'Tatum', 'Adilene', 'Isis', 'Tatianna', 'Baylee', 'Shania', 'Jocelyne', 'Daisha', 'Kaelyn', 'Jayla', 'Dasia', 'Emely', 'Sydni', 'Abbigail', 'Miracle', 'Zoey', 'Unique', 'Iridian', 'Brooklynn', 'Alia', 'Keanna', 'Alivia', 'Daija', 'Sydnie', 'Fernanda', 'Daja', 'Lesly', 'Annika', 'Kyleigh', 'Sienna', 'Ciarra', 'Maci', 'Destany', 'Tamia', 'Moesha', 'Odalys', 'Yamilex', 'Zaria', 'Mireya', 'Alize', 'Xena', 'Dania', 'Katia', 'Maia', 'Amani', 'Shianne', 'Madisen', 'Odalis', 'Kaylah', 'Sarahi', 'Jailene', 'Jazlyn', 'Alyssia', 'Chyna', 'Estefany', 'Ansley', 'Madyson', 'Jaycie', 'Jacey', 'Lexis', 'Daijah', 'Joslyn', 'Dejah', 'Yulissa', 'Anahi', 'Aylin', 'Julisa', 'Salma', 'Madisyn', 'Erykah', 'Gisselle', 'Raegan', 'Tea', 'Estrella', 'Jayda', 'Rylie', 'Makala', 'Taya', 'Kaylan', 'Camila', 'Annalise', 'Jazmyne', 'Keeley', 'Shaylee', 'Savana', 'Madelynn', 'Micayla', 'Maeve', 'Nautica', 'Cali', 'Serenity', 'Yulisa', 'Baylie', 'Samara', 'Mya', 'Ally', 'Myah', 'Reanna', 'Madilyn', 'Felicity', 'Ireland', 'Skyla', 'Willow', 'Jaida', 'Abigayle', 'Jaelyn', 'Rhianna', 'Amira', 'Shae', 'Zoie', 'Caleigh', 'Abril', 'Deasia', 'Kaylen', 'Tayla', 'Alexys', 'Jaycee', 'Jayde', 'Kennedi', 'Amaya', 'Piper', 'Aniya', 'Noelia', 'Kiarra', 'Shaniya', 'Keara', 'Emmalee', 'Aiyana', 'Miya', 'Jalyn', 'Nyasia', 'Aniyah', 'Jaylene', 'Kyara', 'Citlalli', 'Abigale', 'Isabela', 'Tatyanna', 'Journey', 'Ryleigh', 'Aliya', 'Sky', 'Shyla', 'Bryn', 'Abagail', 'Izabella', 'Nya', 'Saige', 'Jakayla', 'Litzy', 'Brisa', 'Amya', 'Jackeline', 'Kaya', 'Jaquelin', 'Hailie', 'Nyah', 'Amara', 'Dariana', 'Yamilet', 'Monserrat', 'Cielo', 'Aryanna', 'Anaya', 'Arely', 'Kaia', 'Maryam', 'Anjali', 'Lilliana', 'Amiya', 'Belen', 'Aliza', 'Keira', 'Janiya', 'Ashtyn', 'Neha', 'Laisha', 'Amina', 'Jailyn', 'Kenna', 'Iyana', 'Maiya', 'Marlen', 'Nevaeh', 'Ainsley', 'Yuliana', 'Beyonce', 'Nayely', 'Johana', 'Nallely', 'Kaiya', 'Meadow', 'Makaila', 'Kya', 'Ximena', 'Jimena', 'Melany', 'Jamya', 'Taina', 'Aubrie', 'Frida', 'Kaliyah', 'Mikaila', 'Taliyah', 'Taniya', 'Citlali', 'Annabella', 'Dafne', 'Hayleigh', 'Yoselin', 'Areli', 'Madalynn', 'Priscila', 'Miah', 'Keila', 'Natalya', 'Jaylynn', 'Rianna', 'Sheyla', 'Aryana', 'Elle', 'Lisbeth', 'Evelin',] 
window.onload = function generateName() {
    let gender = Math.random()
        if (gender == 0) {
            document.write(Male)
            first_name = boynames[Math.floor(Math.random() * 701)]
            document.write(first_name)
        }
        if (gender == 1) {
            document.write(Female)
            first_name = girlnames[Math.floor(Math.random() * 701)]
            document.write(first_name)
        }
    if (gender.toUpperCase == "B") {
        let choice = window.alert("Okay, would you like to write your own name, or should we generate one for you? Type C to choose your own or G to generate", "")
            if (choice.toUpperCase == 'C') {
                let player_name = window.alert("Okay, now type the name you want here.")
            } elif (choice.toUpperCase == "G") {
                let player_name = boynames[Math.floor(Math.random() * 701)]
                print("Invalid command.")
            }
    }
    if (gender.toUpperCase == G) {
        let choice = window.alert("Okay, would you like to write your own name, or should we generate one for you? Type C to choose your own or G to generate", "")
            if choice.toUpperCase == C {
                let name = window.alert("Okay, now type the name you want here.")
            } elif choice.toUpperCase == G {
                let name = girlnames[Math.floor(Math.random() * 701)]
            } else {
                print("Invalid command.")
            }
    }
}

function boy_headshots() {
    var myImages = new Array():
    myImages[0] = "drex/bitmojis/boys/boy1.jpg"
    myImages[1] = "drex/bitmojis/boys/boy2.jpg"
    myImages[2] = "drex/bitmojis/boys/boy3.jpg"
    myImages[3] = "drex/bitmojis/boys/boy4.jpg"

    var randomImage = Math.floor(Math.random() * myImages.length)
    document.write('<img src="'+myImages[randomImage]+'" border ="0">') 
}

window.onload = function dad_headshots() {    
    var boyImages = new Array();
    boyImages[0] = "drex/bitmojis/boys/boy1.jpg";
    boyImages[1] = "drex/bitmojis/boys/boy2.jpg";
    boyImages[2] = "drex/bitmojis/boys/boy3.jpg";
    boyImages[3] = "drex/bitmojis/boys/boy4.jpg";
    var randomBoyImage = Math.floor(Math.random() * boyImages.length);
    $('dad').src = boyImages[randomBoyImage]
}

window.onload = function mom_headshots() {    
    var girlImages = new Array();
    girlImages[0] = "drex/bitmojis/girls/girl1.jpg"
    girlImages[1] = "drex/bitmojis/girls/girl2.jpg"
    girlImages[2] = "drex/bitmojis/girls/girl3.jpg"
    girlImages[3] = "drex/bitmojis/girls/girl4.jpg"
    var randomGirlImage = Math.floor(Math.random() * girlImages.length);
    $('mom').src = girlImages[randomGirlImage]
}

window.onload = function generateFirstName() {
    firstname = girlnames[Math.floor(Math.random() * 701)]
$("firstname").innerHTML = generateFirstName