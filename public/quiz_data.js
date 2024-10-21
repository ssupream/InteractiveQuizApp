const quizData = [
  {
    id: "gk_history",
    name: "History",
    questions: [
      {
        question: "Who was the first President of the United States?",
        answer: "George Washington",
        alternatives: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      },
      {
        question: "In which year did the Titanic sink?",
        answer: "1912",
        alternatives: ["1914", "1905", "1920"],
      },
      {
        question: "Which empire was known as the 'Holy Roman Empire'?",
        answer: "The German Empire",
        alternatives: [
          "The Ottoman Empire",
          "The Roman Empire",
          "The Byzantine Empire",
        ],
      },
      {
        question: "What year did World War II end?",
        answer: "1945",
        alternatives: ["1943", "1947", "1950"],
      },
      {
        question: "Who was the first female Prime Minister of the UK?",
        answer: "Margaret Thatcher",
        alternatives: ["Angela Merkel", "Theresa May", "Golda Meir"],
      },
    ],
  },
  {
    id: "gk_geography",
    name: "Geography",
    questions: [
      {
        question: "What is the capital city of Australia?",
        answer: "Canberra",
        alternatives: ["Sydney", "Melbourne", "Brisbane"],
      },
      {
        question: "Which is the longest river in the world?",
        answer: "The Nile River",
        alternatives: ["Amazon River", "Yangtze River", "Mississippi River"],
      },
      {
        question: "Which continent is the Sahara Desert located in?",
        answer: "Africa",
        alternatives: ["Asia", "South America", "Australia"],
      },
      {
        question: "What is the largest country in the world by land area?",
        answer: "Russia",
        alternatives: ["Canada", "China", "United States"],
      },
      {
        question: "Which ocean is the smallest?",
        answer: "Arctic Ocean",
        alternatives: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean"],
      },
    ],
  },
  {
    id: "gk_science",
    name: "Science",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        answer: "H₂O",
        alternatives: ["O₂H", "H2O2", "H2"],
      },
      {
        question: "Who developed the theory of general relativity?",
        answer: "Albert Einstein",
        alternatives: ["Isaac Newton", "Niels Bohr", "Galileo Galilei"],
      },
      {
        question: "What planet is known as the Red Planet?",
        answer: "Mars",
        alternatives: ["Venus", "Jupiter", "Saturn"],
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        answer: "Carbon Dioxide",
        alternatives: ["Oxygen", "Nitrogen", "Helium"],
      },
      {
        question: "What is the powerhouse of the cell?",
        answer: "Mitochondria",
        alternatives: ["Nucleus", "Ribosome", "Endoplasmic Reticulum"],
      },
    ],
  },
  {
    id: "gk_technology",
    name: "Technology",
    questions: [
      {
        question: "Who is the founder of Microsoft?",
        answer: "Bill Gates",
        alternatives: ["Steve Jobs", "Mark Zuckerberg", "Larry Page"],
      },
      {
        question: "What does 'HTTP' stand for?",
        answer: "Hypertext Transfer Protocol",
        alternatives: [
          "Hyperlink Transfer Protocol",
          "Hypertext Transmission Protocol",
          "High Transfer Text Protocol",
        ],
      },
      {
        question: "In which year was the first iPhone released?",
        answer: "2007",
        alternatives: ["2005", "2006", "2008"],
      },
      {
        question:
          "What technology is used to make telephone calls over the Internet?",
        answer: "VoIP",
        alternatives: ["SMS", "ISDN", "POTS"],
      },
      {
        question: "What is the name of the first electronic computer?",
        answer: "ENIAC",
        alternatives: ["UNIVAC", "IBM 701", "Z3"],
      },
    ],
  },
  {
    id: "gk_arts_lit",
    name: "Arts and Literature",
    questions: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: "William Shakespeare",
        alternatives: ["Charles Dickens", "Jane Austen", "Mark Twain"],
      },
      {
        question: "Which painter is known for 'Starry Night'?",
        answer: "Vincent Van Gogh",
        alternatives: ["Pablo Picasso", "Claude Monet", "Salvador Dali"],
      },
      {
        question: "What is the name of Sherlock Holmes' assistant?",
        answer: "Dr. John Watson",
        alternatives: ["Professor Moriarty", "Lestrade", "Irene Adler"],
      },
      {
        question: "Who is the author of 'Pride and Prejudice'?",
        answer: "Jane Austen",
        alternatives: ["Charlotte Brontë", "Emily Dickinson", "Virginia Woolf"],
      },
      {
        question: "Which artist painted the ceiling of the Sistine Chapel?",
        answer: "Michelangelo",
        alternatives: ["Raphael", "Leonardo da Vinci", "Caravaggio"],
      },
    ],
  },
  {
    id: "gk_sports",
    name: "Sports",
    questions: [
      {
        question: "How many players are on a soccer team on the field?",
        answer: "11",
        alternatives: ["10", "12", "9"],
      },
      {
        question: "Who has won the most Grand Slam titles in tennis?",
        answer: "Serena Williams",
        alternatives: ["Venus Williams", "Steffi Graf", "Martina Navratilova"],
      },
      {
        question: "In what year did Michael Jordan retire for the final time?",
        answer: "2003",
        alternatives: ["2001", "2004", "1998"],
      },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        answer: "Brazil",
        alternatives: ["China", "United States", "Russia"],
      },
      {
        question: "What is the national sport of Japan?",
        answer: "Sumo Wrestling",
        alternatives: ["Baseball", "Soccer", "Judo"],
      },
    ],
  },
  {
    id: "gk_movies_tv",
    name: "Movies and TV",
    questions: [
      {
        question: "Who played Jack Dawson in 'Titanic'?",
        answer: "Leonardo DiCaprio",
        alternatives: ["Brad Pitt", "Johnny Depp", "Tom Hanks"],
      },
      {
        question: "What is the name of the coffee shop in 'Friends'?",
        answer: "Central Perk",
        alternatives: ["Central Café", "Coffee House", "Java Junction"],
      },
      {
        question: "Which movie features a character named 'Forrest Gump'?",
        answer: "Forrest Gump",
        alternatives: ["The Green Mile", "Cast Away", "Saving Private Ryan"],
      },
      {
        question: "Who directed 'Inception'?",
        answer: "Christopher Nolan",
        alternatives: ["Steven Spielberg", "Martin Scorsese", "James Cameron"],
      },
      {
        question: "What animated film features a talking lion named Simba?",
        answer: "The Lion King",
        alternatives: ["Aladdin", "Finding Nemo", "Toy Story"],
      },
    ],
  },
  {
    id: "st_music",
    name: "Music",
    questions: [
      {
        question: "Who is known as the 'King of Pop'?",
        answer: "Michael Jackson",
        alternatives: ["Elvis Presley", "Prince", "Madonna"],
      },
      {
        question: "What is the highest-selling album of all time?",
        answer: "Thriller",
        alternatives: [
          "Back in Black",
          "The Dark Side of the Moon",
          "Hotel California",
        ],
      },
      {
        question: "Which composer wrote the 'Four Seasons'?",
        answer: "Antonio Vivaldi",
        alternatives: [
          "Johann Sebastian Bach",
          "Ludwig van Beethoven",
          "Wolfgang Amadeus Mozart",
        ],
      },
      {
        question: "Which band was Freddie Mercury the lead singer of?",
        answer: "Queen",
        alternatives: ["The Beatles", "The Rolling Stones", "Led Zeppelin"],
      },
      {
        question: "What musical instrument has 88 keys?",
        answer: "Piano",
        alternatives: ["Organ", "Accordion", "Guitar"],
      },
    ],
  },
  {
    id: "st_video_games",
    name: "Video Games",
    questions: [
      {
        question: "What is the best-selling video game of all time?",
        answer: "Minecraft",
        alternatives: ["Tetris", "Grand Theft Auto V", "Wii Sports"],
      },
      {
        question: "Which company created the PlayStation?",
        answer: "Sony",
        alternatives: ["Microsoft", "Nintendo", "Sega"],
      },
      {
        question: "What is the main character's name in 'The Legend of Zelda'?",
        answer: "Link",
        alternatives: ["Zelda", "Ganon", "Ganondorf"],
      },
      {
        question:
          "In which game would you find a character named 'Master Chief'?",
        answer: "Halo",
        alternatives: ["Call of Duty", "Battlefield", "Gears of War"],
      },
      {
        question: "What does 'FPS' stand for in gaming?",
        answer: "First-Person Shooter",
        alternatives: [
          "Frames Per Second",
          "Fast Play Style",
          "Full Play Session",
        ],
      },
    ],
  },
  {
    id: "st_anime",
    name: "Anime",
    questions: [
      {
        question: "What is the name of the main character in 'Naruto'?",
        answer: "Naruto Uzumaki",
        alternatives: ["Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"],
      },
      {
        question: "In 'Attack on Titan', what do the Titans eat?",
        answer: "Humans",
        alternatives: ["Animals", "Plants", "Nothing"],
      },
      {
        question: "What is the term for the Japanese animated film industry?",
        answer: "Anime",
        alternatives: ["Manga", "Hentai", "Kodomo"],
      },
      {
        question: "Which anime features a character named 'Goku'?",
        answer: "Dragon Ball Z",
        alternatives: ["One Piece", "My Hero Academia", "Bleach"],
      },
      {
        question: "What is the name of the school in 'My Hero Academia'?",
        answer: "U.A. High School",
        alternatives: [
          "Shinigami Academy",
          "Aoyama High School",
          "Jujutsu High School",
        ],
      },
    ],
  },
  {
    id: "st_mythology",
    name: "Mythology",
    questions: [
      {
        question: "Who is the king of the Greek gods?",
        answer: "Zeus",
        alternatives: ["Hades", "Poseidon", "Apollo"],
      },
      {
        question: "What is the name of the Norse god of thunder?",
        answer: "Thor",
        alternatives: ["Loki", "Odin", "Freyr"],
      },
      {
        question: "In Roman mythology, who is the goddess of love?",
        answer: "Venus",
        alternatives: ["Diana", "Juno", "Minerva"],
      },
      {
        question: "Who is the Egyptian god of the underworld?",
        answer: "Osiris",
        alternatives: ["Anubis", "Ra", "Horus"],
      },
      {
        question:
          "What creature is known for having the body of a lion and the head of a human?",
        answer: "Sphinx",
        alternatives: ["Griffin", "Minotaur", "Chimera"],
      },
    ],
  },
  {
    id: "st_philosophy",
    name: "Philosophy",
    questions: [
      {
        question: "Who is known as the father of Western philosophy?",
        answer: "Socrates",
        alternatives: ["Plato", "Aristotle", "Descartes"],
      },
      {
        question: "What is the main idea of utilitarianism?",
        answer: "The greatest happiness for the greatest number",
        alternatives: [
          "The pursuit of truth",
          "The virtue of moderation",
          "The importance of duty",
        ],
      },
      {
        question: "Which philosopher wrote 'Critique of Pure Reason'?",
        answer: "Immanuel Kant",
        alternatives: [
          "Georg Wilhelm Friedrich Hegel",
          "David Hume",
          "Friedrich Nietzsche",
        ],
      },
      {
        question: "What does existentialism focus on?",
        answer: "Individual existence and freedom",
        alternatives: [
          "Social structures",
          "Objective reality",
          "Moral absolutism",
        ],
      },
      {
        question:
          "Which philosopher is known for the statement 'I think, therefore I am'?",
        answer: "René Descartes",
        alternatives: ["John Locke", "David Hume", "Friedrich Nietzsche"],
      },
    ],
  },
  {
    id: "st_religion",
    name: "Religion",
    questions: [
      {
        question: "What is the holy book of Islam?",
        answer: "Quran",
        alternatives: ["Hadith", "Bible", "Vedas"],
      },
      {
        question: "In Christianity, who is considered the Son of God?",
        answer: "Jesus Christ",
        alternatives: ["Mohammed", "Moses", "Buddha"],
      },
      {
        question: "What is the main religion practiced in India?",
        answer: "Hinduism",
        alternatives: ["Buddhism", "Islam", "Sikhism"],
      },
      {
        question: "Which festival celebrates the Jewish New Year?",
        answer: "Rosh Hashanah",
        alternatives: ["Yom Kippur", "Passover", "Hanukkah"],
      },
      {
        question: "Who is the founder of Buddhism?",
        answer: "Siddhartha Gautama",
        alternatives: ["Laozi", "Confucius", "Zoroaster"],
      },
      {
        question: "What is the sacred text of the Hindu religion?",
        answer: "Vedas",
        alternatives: ["Talmud", "Quran", "Bible"],
      },
      {
        question: "In which religion is the concept of 'Karma' central?",
        answer: "Hinduism",
        alternatives: ["Judaism", "Christianity", "Islam"],
      },
      {
        question: "What is the central figure in Christianity?",
        answer: "Jesus Christ",
        alternatives: ["Moses", "Peter", "Paul"],
      },
      {
        question: "Which religion is known for the Four Noble Truths?",
        answer: "Buddhism",
        alternatives: ["Hinduism", "Christianity", "Taoism"],
      },
      {
        question: "What is the name of the Muslim place of worship?",
        answer: "Mosque",
        alternatives: ["Synagogue", "Temple", "Church"],
      },
    ],
  },
  {
    id: "st_politics",
    name: "Politics",
    questions: [
      {
        question: "Who was the first female Chancellor of Germany?",
        answer: "Angela Merkel",
        alternatives: [
          "Ursula von der Leyen",
          "Margaret Thatcher",
          "Theresa May",
        ],
      },
      {
        question: "What is the highest court in the United States?",
        answer: "Supreme Court",
        alternatives: ["District Court", "Court of Appeals", "High Court"],
      },
      {
        question: "Who wrote the Declaration of Independence?",
        answer: "Thomas Jefferson",
        alternatives: ["George Washington", "Benjamin Franklin", "John Adams"],
      },
      {
        question: "Which political party is represented by the elephant?",
        answer: "Republican Party",
        alternatives: ["Democratic Party", "Green Party", "Libertarian Party"],
      },
      {
        question: "What is the term for a government run by religious leaders?",
        answer: "Theocracy",
        alternatives: ["Oligarchy", "Monarchy", "Plutocracy"],
      },
    ],
  },
  {
    id: "ft_jokes_riddles",
    name: "Jokes and Riddles",
    questions: [
      {
        question: "Why did the scarecrow win an award?",
        answer: "Because he was outstanding in his field!",
        alternatives: [
          "Because he was good at scaring crows!",
          "Because he was always prepared!",
          "Because he made everyone laugh!",
        ],
      },
      {
        question: "What has keys but can't open locks?",
        answer: "A piano.",
        alternatives: ["A map.", "A computer keyboard.", "A treasure chest."],
      },
      {
        question: "Why don’t scientists trust atoms?",
        answer: "Because they make up everything!",
        alternatives: [
          "Because they are too small!",
          "Because they are always changing!",
          "Because they can explode!",
        ],
      },
      {
        question: "What has to be broken before you can use it?",
        answer: "An egg.",
        alternatives: ["A promise.", "A seal.", "A code."],
      },
      {
        question: "What begins with T, ends with T, and has T in it?",
        answer: "A teapot.",
        alternatives: ["A test.", "A tent.", "A toast."],
      },
      {
        question: "Why did the bicycle fall over?",
        answer: "Because it was two-tired!",
        alternatives: [
          "Because it lost its balance!",
          "Because it was too old!",
          "Because it was going too fast!",
        ],
      },
      {
        question: "What is full of holes but still holds water?",
        answer: "A sponge.",
        alternatives: ["A bucket.", "A net.", "A cheese."],
      },
      {
        question: "Why did the golfer bring two pairs of pants?",
        answer: "In case he got a hole in one!",
        alternatives: [
          "In case it rained!",
          "Because he wanted to look good!",
          "Because he lost one!",
        ],
      },
      {
        question: "What is black when it’s clean and white when it’s dirty?",
        answer: "A chalkboard.",
        alternatives: ["A newspaper.", "A zebra.", "A panda."],
      },
      {
        question: "Why was the math book sad?",
        answer: "Because it had too many problems.",
        alternatives: [
          "Because it was covered in dust!",
          "Because it was missing pages!",
          "Because it was misunderstood!",
        ],
      },
    ],
  },
  {
    id: "ft_pop_culture",
    name: "Pop Culture",
    questions: [
      {
        question: "What is the highest-grossing film of all time?",
        answer: "Avatar",
        alternatives: [
          "Titanic",
          "Avengers: Endgame",
          "Star Wars: The Force Awakens",
        ],
      },
      {
        question: "Which singer is known for the hit song 'Shake It Off'?",
        answer: "Taylor Swift",
        alternatives: ["Katy Perry", "Ariana Grande", "Beyoncé"],
      },
      {
        question:
          "What reality TV show features a group of people living in a house together?",
        answer: "Big Brother",
        alternatives: ["Survivor", "The Real World", "The Bachelor"],
      },
      {
        question: "Who created the animated series 'The Simpsons'?",
        answer: "Matt Groening",
        alternatives: ["Seth MacFarlane", "Trey Parker", "Mike Judge"],
      },
      {
        question:
          "What video game features a battle royale mode called 'Fortnite Battle Royale'?",
        answer: "Fortnite",
        alternatives: ["PUBG", "Call of Duty", "Apex Legends"],
      },
    ],
  },
  {
    id: "ft_trivia",
    name: "Fun and Trivia",
    questions: [
      {
        question: "What is the capital of France?",
        answer: "Paris",
        alternatives: ["Berlin", "Madrid", "Rome"],
      },
      {
        question: "Which animal is known as the 'King of the Jungle'?",
        answer: "Lion",
        alternatives: ["Tiger", "Elephant", "Cheetah"],
      },
      {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter",
        alternatives: ["Mars", "Earth", "Saturn"],
      },
      {
        question: "How many continents are there on Earth?",
        answer: "7",
        alternatives: ["5", "6", "8"],
      },
      {
        question: "What is the main ingredient in guacamole?",
        answer: "Avocado",
        alternatives: ["Tomato", "Pepper", "Onion"],
      },
      {
        question: "What is the most widely spoken language in the world?",
        answer: "Mandarin Chinese",
        alternatives: ["Spanish", "English", "Hindi"],
      },
      {
        question: "In what year did the first man land on the moon?",
        answer: "1969",
        alternatives: ["1959", "1971", "1965"],
      },
      {
        question: "What is the hardest natural substance on Earth?",
        answer: "Diamond",
        alternatives: ["Gold", "Iron", "Emerald"],
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: "Japan",
        alternatives: ["China", "Thailand", "South Korea"],
      },
      {
        question: "What is the chemical symbol for gold?",
        answer: "Au",
        alternatives: ["Ag", "Fe", "Pb"],
      },
    ],
  },
  {
    id: "ft_word_games",
    name: "Games",
    questions: [
      {
        question: "What board game involves buying and trading properties?",
        answer: "Monopoly",
        alternatives: ["Risk", "Clue", "Scrabble"],
      },
      {
        question: "In chess, what piece can only move diagonally?",
        answer: "Bishop",
        alternatives: ["Knight", "Rook", "Queen"],
      },
      {
        question:
          "What is the name of the card game that uses a standard deck of cards and is often played with two to four players?",
        answer: "Uno",
        alternatives: ["Go Fish", "Solitaire", "Rummy"],
      },
      {
        question: "Which game is known as the 'Game of Life'?",
        answer: "The Game of Life",
        alternatives: ["Monopoly", "Life is Strange", "Candy Land"],
      },
      {
        question: "What is the objective of the game 'Tetris'?",
        answer: "Fit falling blocks together",
        alternatives: [
          "Clear the board",
          "Create lines of color",
          "Build the tallest tower",
        ],
      },
      {
        question: "In the game 'Clue', which character is known as the butler?",
        answer: "Wadsworth",
        alternatives: ["Colonel Mustard", "Professor Plum", "Miss Scarlet"],
      },
      {
        question: "What is the main goal in the game 'Jenga'?",
        answer: "Remove blocks without toppling the tower",
        alternatives: [
          "Build the highest tower",
          "Stack blocks as fast as possible",
          "Create a stable base",
        ],
      },
      {
        question:
          "Which game features a world made of blocks and allows players to build and explore?",
        answer: "Minecraft",
        alternatives: ["Terraria", "Roblox", "Fortnite"],
      },
      {
        question: "What type of game is 'Call of Duty'?",
        answer: "First-Person Shooter",
        alternatives: ["Role-Playing Game", "Strategy Game", "Simulation Game"],
      },
      {
        question:
          "In which board game do players try to accumulate wealth by buying properties and charging rent?",
        answer: "Monopoly",
        alternatives: ["The Game of Life", "Settlers of Catan", "Sorry!"],
      },
    ],
  },
  {
    id: "ft_math_puzzles",
    name: "Math Puzzles",
    questions: [
      {
        question: "What is the value of π (pi) to two decimal places?",
        answer: "3.14",
        alternatives: ["3.15", "3.12", "3.13"],
      },
      {
        question: "What is 7 times 8?",
        answer: "56",
        alternatives: ["54", "58", "52"],
      },
      {
        question:
          "If a triangle has angles of 90° and 45°, what is the third angle?",
        answer: "45°",
        alternatives: ["60°", "30°", "50°"],
      },
      {
        question: "What is the square root of 144?",
        answer: "12",
        alternatives: ["10", "14", "16"],
      },
      {
        question: "What is 25% of 200?",
        answer: "50",
        alternatives: ["75", "25", "100"],
      },
    ],
  },
  {
    id: "edu_language",
    name: "Language",
    questions: [
      {
        question: "What is the most spoken language in the world?",
        answer: "Mandarin Chinese",
        alternatives: ["Spanish", "English", "Hindi"],
      },
      {
        question: "Which language is known as the language of love?",
        answer: "French",
        alternatives: ["Italian", "Spanish", "Portuguese"],
      },
      {
        question: "What is the official language of Brazil?",
        answer: "Portuguese",
        alternatives: ["Spanish", "English", "French"],
      },
      {
        question: "What is the word for 'hello' in Japanese?",
        answer: "Konnichiwa",
        alternatives: ["Sayonara", "Arigato", "Ohayō"],
      },
      {
        question: "Which language uses the Cyrillic alphabet?",
        answer: "Russian",
        alternatives: ["Greek", "Arabic", "Hebrew"],
      },
    ],
  },
  {
    id: "edu_coding",
    name: "Coding",
    questions: [
      {
        question: "Which language is primarily used for web development?",
        answer: "JavaScript",
        alternatives: ["Python", "Java", "C#"],
      },
      {
        question: "What does 'HTML' stand for?",
        answer: "Hypertext Markup Language",
        alternatives: [
          "High-Level Text Markup Language",
          "Hyperlink and Text Markup Language",
          "Hypertext Multi-Layer Language",
        ],
      },
      {
        question: "Which language is known for its simplicity and readability?",
        answer: "Python",
        alternatives: ["C++", "Java", "Ruby"],
      },
      {
        question: "What is the main function of CSS in web development?",
        answer: "Styling web pages",
        alternatives: [
          "Creating web pages",
          "Scripting functionality",
          "Database management",
        ],
      },
      {
        question:
          "Which programming paradigm is based on the concept of 'objects'?",
        answer: "Object-Oriented Programming",
        alternatives: [
          "Functional Programming",
          "Procedural Programming",
          "Logic Programming",
        ],
      },
    ],
  },
  {
    id: "edu_financial",
    name: "Financial",
    questions: [
      {
        question: "What does 'GDP' stand for?",
        answer: "Gross Domestic Product",
        alternatives: [
          "General Domestic Profit",
          "Gross Development Product",
          "General Debt Product",
        ],
      },
      {
        question: "What is the term for the total amount of money owed?",
        answer: "Debt",
        alternatives: ["Equity", "Assets", "Liabilities"],
      },
      {
        question:
          "Which financial market involves the buying and selling of stocks?",
        answer: "Stock Market",
        alternatives: [
          "Bond Market",
          "Real Estate Market",
          "Commodities Market",
        ],
      },
      {
        question: "What is an emergency fund?",
        answer: "Savings for unexpected expenses",
        alternatives: [
          "Savings for retirement",
          "Investment in stocks",
          "Money set aside for vacations",
        ],
      },
      {
        question: "What is the purpose of insurance?",
        answer: "To protect against financial loss",
        alternatives: [
          "To grow investments",
          "To pay off debts",
          "To save for retirement",
        ],
      },
    ],
  },
  {
    id: "edu_health",
    name: "Health",
    questions: [
      {
        question: "What is the recommended daily intake of water for adults?",
        answer: "8 cups (2 liters)",
        alternatives: [
          "4 cups (1 liter)",
          "10 cups (2.5 liters)",
          "12 cups (3 liters)",
        ],
      },
      {
        question: "What vitamin is primarily obtained from sunlight?",
        answer: "Vitamin D",
        alternatives: ["Vitamin C", "Vitamin A", "Vitamin E"],
      },
      {
        question: "What is the primary function of the heart?",
        answer: "Pumping blood",
        alternatives: [
          "Filtering blood",
          "Storing energy",
          "Regulating temperature",
        ],
      },
      {
        question:
          "Which nutrient is essential for building and repairing tissues?",
        answer: "Protein",
        alternatives: ["Carbohydrates", "Fats", "Vitamins"],
      },
      {
        question: "What is BMI an acronym for?",
        answer: "Body Mass Index",
        alternatives: [
          "Body Muscle Index",
          "Body Metabolic Rate",
          "Body Measurement Indicator",
        ],
      },
    ],
  },
  {
    id: "nc_astronomy",
    name: "Astronomy",
    questions: [
      {
        question: "What is the closest planet to the Sun?",
        answer: "Mercury",
        alternatives: ["Venus", "Mars", "Earth"],
      },
      {
        question: "What galaxy is Earth located in?",
        answer: "The Milky Way",
        alternatives: ["Andromeda", "Sombrero", "Whirlpool"],
      },
      {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter",
        alternatives: ["Saturn", "Neptune", "Uranus"],
      },
      {
        question: "What force keeps the planets in orbit around the Sun?",
        answer: "Gravity",
        alternatives: ["Magnetism", "Friction", "Inertia"],
      },
      {
        question: "What is a supernova?",
        answer: "A stellar explosion",
        alternatives: ["A black hole", "A neutron star", "A comet"],
      },
    ],
  },
  {
    id: "nc_chemistry",
    name: "Chemistry",
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        answer: "Au",
        alternatives: ["Ag", "Pb", "Fe"],
      },
      {
        question: "What is the pH level of pure water?",
        answer: "7",
        alternatives: ["5", "9", "10"],
      },
      {
        question: "What gas is produced by the process of photosynthesis?",
        answer: "Oxygen",
        alternatives: ["Carbon Dioxide", "Nitrogen", "Hydrogen"],
      },
      {
        question: "What is the primary component of the air we breathe?",
        answer: "Nitrogen",
        alternatives: ["Oxygen", "Carbon Dioxide", "Argon"],
      },
      {
        question: "What type of bond involves the sharing of electron pairs?",
        answer: "Covalent bond",
        alternatives: ["Ionic bond", "Metallic bond", "Hydrogen bond"],
      },
    ],
  },
  {
    id: "nc_biology",
    name: "Biology",
    questions: [
      {
        question: "What is the basic unit of life?",
        answer: "Cell",
        alternatives: ["Tissue", "Organ", "Organism"],
      },
      {
        question: "What process do plants use to make food?",
        answer: "Photosynthesis",
        alternatives: ["Respiration", "Transpiration", "Fermentation"],
      },
      {
        question: "Which organ is responsible for pumping blood?",
        answer: "Heart",
        alternatives: ["Lung", "Liver", "Kidney"],
      },
      {
        question:
          "What is the name of the molecule that carries genetic information?",
        answer: "DNA",
        alternatives: ["RNA", "Proteins", "Carbohydrates"],
      },
      {
        question: "What is the largest organ in the human body?",
        answer: "Skin",
        alternatives: ["Liver", "Heart", "Brain"],
      },
    ],
  },
  {
    id: "nc_psychology",
    name: "Psychology",
    questions: [
      {
        question: "What is the term for a fear of heights?",
        answer: "Acrophobia",
        alternatives: ["Claustrophobia", "Agoraphobia", "Xenophobia"],
      },
      {
        question: "What is the primary focus of cognitive psychology?",
        answer: "Mental processes",
        alternatives: ["Emotions", "Behavior", "Social interactions"],
      },
      {
        question: "Who is known as the father of psychoanalysis?",
        answer: "Sigmund Freud",
        alternatives: ["Carl Jung", "B.F. Skinner", "William James"],
      },
      {
        question:
          "What is the term for the study of human behavior in social contexts?",
        answer: "Social psychology",
        alternatives: [
          "Developmental psychology",
          "Cognitive psychology",
          "Behavioral psychology",
        ],
      },
      {
        question:
          "What is the name of the condition characterized by excessive worry?",
        answer: "Generalized Anxiety Disorder",
        alternatives: ["Panic Disorder", "OCD", "Phobia"],
      },
    ],
  },
  {
    id: "nc_law",
    name: "Law",
    questions: [
      {
        question: "What is the highest law of the land in the United States?",
        answer: "The Constitution",
        alternatives: [
          "The Bill of Rights",
          "The Declaration of Independence",
          "Federal Law",
        ],
      },
      {
        question: "What type of law deals with crimes?",
        answer: "Criminal Law",
        alternatives: ["Civil Law", "Administrative Law", "International Law"],
      },
      {
        question:
          "What is the term for a formal charge or accusation of a serious crime?",
        answer: "Indictment",
        alternatives: ["Subpoena", "Affidavit", "Warrant"],
      },
      {
        question:
          "What is the principle that allows courts to overturn laws that violate the Constitution?",
        answer: "Judicial Review",
        alternatives: [
          "Separation of Powers",
          "Checks and Balances",
          "Federalism",
        ],
      },
      {
        question:
          "What legal term describes a written statement of facts and reasons in support of a legal argument?",
        answer: "Brief",
        alternatives: ["Affidavit", "Motion", "Pleading"],
      },
    ],
  },
  {
    id: "nc_economics",
    name: "Economics",
    questions: [
      {
        question:
          "What is the term for the total market value of all final goods and services produced in a country?",
        answer: "Gross Domestic Product (GDP)",
        alternatives: [
          "Net Income",
          "Gross National Product",
          "Consumer Price Index",
        ],
      },
      {
        question:
          "What is the economic principle that describes the relationship between supply and demand?",
        answer: "Market Equilibrium",
        alternatives: ["Supply Shock", "Demand Shock", "Market Disequilibrium"],
      },
      {
        question:
          "What type of economy is characterized by private ownership of resources?",
        answer: "Capitalism",
        alternatives: ["Socialism", "Communism", "Feudalism"],
      },
      {
        question:
          "What is the term for a sustained increase in the general price level of goods and services?",
        answer: "Inflation",
        alternatives: ["Deflation", "Stagflation", "Hyperinflation"],
      },
      {
        question:
          "What is the term for the economic cycle of expansion and contraction?",
        answer: "Business Cycle",
        alternatives: ["Economic Growth", "Recession", "Depression"],
      },
    ],
  },
  {
    id: "nc_cooking",
    name: "Cooking",
    questions: [
      {
        question: "What is the main ingredient in guacamole?",
        answer: "Avocado",
        alternatives: ["Tomato", "Onion", "Pepper"],
      },
      {
        question: "What cooking method involves submerging food in hot oil?",
        answer: "Frying",
        alternatives: ["Boiling", "Steaming", "Baking"],
      },
      {
        question:
          "What is the term for the process of cooking food slowly in liquid?",
        answer: "Braising",
        alternatives: ["Stewing", "Sautéing", "Roasting"],
      },
      {
        question: "What type of pasta is shaped like small rice grains?",
        answer: "Orzo",
        alternatives: ["Farfalle", "Penne", "Fusilli"],
      },
      {
        question: "What herb is commonly used in Italian cooking?",
        answer: "Basil",
        alternatives: ["Parsley", "Cilantro", "Rosemary"],
      },
    ],
  },
];

export default quizData;
