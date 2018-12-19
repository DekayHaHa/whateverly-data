const games = [
  {
    "game": "Don't Be A Loser",
    "description": "Don't Be a Loser is a fun party game where you don't have to win but you just don't want to be the BIG LOSER! This game is easy to play and designed with social situations in mind, allowing players to freely leave and come back without interrupting the game!",
    "min_age": 13,
    "min_players": 4,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [6, 11, 13],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "All Over The Board",
    "youtube": "ZYvvhOzYx_4",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/DBAL-main-photo-box_350x.jpg?v=1512623523"
  },
  {
    "game": "Candy Land",
    "description": "Candy Land is the classic, simple children's board game full of magic and sweets! Travel along the rainbow path past the peppermint stick forest, gingerbread plum tree, and the gumdrop mountain to be the first to reach the candy castle!",
    "min_age": 3,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "30",
    "genre_ID": [6, 4, 16],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "Hasbro ",
    "youtube": "ZimfGniNXGo",
    "img": "https:////cdn.shopify.com/s/files/1/1911/5793/products/13697925_350x.jpg?v=1512062059"
  },
  {
    "game": "Sorry!",
    "description": "Everyone wants to get their four pawns from Start to Home, but Sorry! it may be too crowded! Will you hit a slide and shoot ahead, or will you get bumped back to the start? It's a fun game of sweet revenge that is sure to bring laughter to all!",
    "min_age": 6,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "30",
    "genre_ID": [6, 5, 2, 16],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Hasbro ",
    "youtube": "v1uKXGyXJy0",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/81lATGZlz9L._SL1500_350x.jpg?v=1506020034"
  },
  {
    "game": "Don't Be A Loser Adult Expansion",
    "description": "Are you and your friends a little unusual? Do you get a kick out of things normal people would be weirded out by? This Don't Be a Loser expansion pack is not for the fainthearted! Recommended age: 21+",
    "min_age": 21,
    "min_players": 4,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [6, 4, 13, 3],
    "expansion_pack": true ,
    "challenge_level": "average",
    "publisher": "All Over The Board",
    "youtube": "ZYvvhOzYx_4&t=341s",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/Dont-be-a-loser-game-expansion-pack_350x.jpg?v=1505674431"
  },
  {
    "game": "Ticket to Ride",
    "description": "Ticket to Ride is a cross-country train adventure in which players build railway routes to connect their destination cities. Easy to learn yet intensely strategic, this award-winning game is fun for all ages and perfect for any group or situation.",
    "min_age": 8,
    "min_players": 2,
    "max_players": 5,
    "number_of_minutes": "45",
    "genre_ID": [6, 8],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Days of Wonder",
    "youtube": "qHmf1bau9xQ",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/9780975277324_p0_v3_s550x406_1024x1024.jpg?v=1507825048"
  },
  {
    "game": "Betrayal at House on the Hill",
    "description": "Betrayal at House on the Hill is a (mostly) cooperative strategy game where players build their own haunted house room by room using tile cards. One of the players may turn out to be a secret traitor, however, so stop them before it's too late!\n",
    "min_age": 12,
    "min_players": 3,
    "max_players": 6,
    "number_of_minutes": "60",
    "genre_ID": [6, 8, 10],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Avalon Hill ",
    "youtube": "MINNKyE4fjs",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/03006574-077e-4af0-bd5f-3c8b6d4638a6_1.3f7f1463b7898c36819ddfa69928aa62_1024x1024.jpg?v=1506020730"
  },
  {
    "game": "Dr. Eureka",
    "description": "Help Dr. Eureka complete experiments without dropping materials in Dr. Eureka Speed Logic Game! This dexterity-based brainteaser can be played with friends or by yourself",
    "min_age": 8,
    "min_players": 1,
    "max_players": 4,
    "number_of_minutes": "15",
    "genre_ID": [6, 2, 1],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Blue Orange Games",
    "youtube": "XxjqsuHX484",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/dr._eureka_350x.jpg?v=1507925411"
  },
  {
    "game": "Jenga",
    "description": "Who hasn't heard of Jenga? Start with a full sturdy tower of wood blocks and take turns pulling out the blocks without toppling the tower. This game comes packaged in a convenient tube-shape container so you can stack it, pack it, and take it anywhere you go!",
    "min_age": 5,
    "min_players": 1,
    "max_players": 8,
    "number_of_minutes": "20",
    "genre_ID": [6, 5, 2, 16],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Hasbro ",
    "youtube": "RtGYWqx_MYI",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/HGA2120lg_1024x1024.jpg?v=1505774365"
  },
  {
    "game": "Tsuro of the Seas",
    "description": "Set sail in Tsuro of the Seas, but don't sail too far! In this tile-building game, players want their ship to stay on the board as long as possible. Daijuki tiles, sea creature tiles, will constantly move throughout the board, so avoid them as best you can!",
    "min_age": 8,
    "min_players": 2,
    "max_players": 8,
    "number_of_minutes": "30",
    "genre_ID": [6, 8, 14],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Calliope Games",
    "youtube": "3RmC6M-wIxA",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/tsuro-of-the-seas-game_1024x1024.jpg?v=1507925245"
  },
  {
    "game": "Forbidden Desert",
    "description": "This cooperative board game will test your skill for survival in your mission to find four missing pieces of a flying machine in order to escape the desert. Coordinate with your teammates to find every available resource crucial for your survival.",
    "min_age": 10,
    "min_players": 2,
    "max_players": 5,
    "number_of_minutes": "45",
    "genre_ID": [6, 8, 1],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Gamewright",
    "youtube": "eCh1WoNShEY",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/ForbiddenDesert_Cover_large_7b1c22d1-c280-4d07-86f6-be0fa99e1342_1024x1024.jpg?v=1505674437"
  },
  {
    "game": "Terraforming Mars",
    "description": "In Terraforming Mars you lead one of many government corporations that work together to terraform Mars in the 2400s. Get awarded for advancing human infrastructure throughout the solar systems and attaining other achievements in this strategy game!",
    "min_age": 12,
    "min_players": 1,
    "max_players": 5,
    "number_of_minutes": "120",
    "genre_ID": [6, 12, 1],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Stronghold Games",
    "youtube": "TiswoYwwjnI",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/91YyutBl3zL._SL1500_1024x1024.jpg?v=1505879653"
  },
  {
    "game": "Kingdomino",
    "description": "Game of the Year 2017 winner! Be the first to complete a 5x5 grid by connecting dominoes with matching terrain type to your existing kingdom. Make sure to secure tiles with crowns which help multiply the worth of your kingdom at the end of the game.",
    "min_age": 8,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "15",
    "genre_ID": [6, 1, 14],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Blue Orange Games",
    "youtube": "nLiXmaV0bIs",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/kingdomino_clipped_rev_1_1024x1024.png?v=1510510231"
  },
  {
    "game": "Scooby Doo: Fright at the Fun Park Game",
    "description": "Help the Scooby-Doo and the Mystery Inc. gang save the fun park from the spooky ghoul! Whoever finds out where the ghoul is hiding first wins. Includes Mini Maps and Wipe-off Markers. For children of ages 4+\n",
    "min_age": 4,
    "min_players": 2,
    "max_players": 8,
    "number_of_minutes": "30",
    "genre_ID": [6, 5, 2, 15],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Buffalo Games",
    "youtube": "21J0ZQ1GLc0",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/scoobydoo_350x.jpg?v=1505778261"
  },
  {
    "game": "Super Mario Level Up",
    "description": "Collect bonuses and level up in Super Mario Level Up! This quick strategy game includes a 3D board where players try to score the most points based on their lineup card and ending positions of each Mario character. For 3-6 players, ages 8+",
    "min_age": 8,
    "min_players": 3,
    "max_players": 6,
    "number_of_minutes": "20",
    "genre_ID": [6, 5, 2],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "USAopoly",
    "youtube": "dzd67RRO_x8",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/52103585_350x.jpg?v=1506019913"
  },
  {
    "game": "Laser Khet 2.0",
    "description": "Laser Khet 2.0 is an upgraded version of the previously released Khet. This version has built-in lasers to special Sphinx pieces that are in the corner which can now rotate. Bounce the beam from mirrored piece to mirrored piece and hit your opponent's Pharaoh.",
    "min_age": 9,
    "min_players": 2,
    "max_players": 2,
    "number_of_minutes": "20",
    "genre_ID": [6, 14, 1],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Innovention Toys",
    "youtube": "_j1pJj2UVic",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/laser-khet-2-game_1024x1024.jpg?v=1505674447"
  },
  {
    "game": "Quadropolis",
    "description": "Each player builds their own metropolis in Quadropolis (first announced as City Mania), but they're competing with one another for the shops, parks, public services and other structures to be placed in them.",
    "min_age": 8,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "30-60",
    "genre_ID": [6, 1, 14, 2],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Days of Wonder",
    "youtube": "HwKLP7_qT78",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/71udbbplBKL._SL1054_350x.jpg?v=1511123167"
  },
  {
    "game": "Small World",
    "description": "In Small World, fantasy characters of different races inhabit territories that are being disputed over. The world is too small for them all! Players race to expand their empires by conquering adjacent lands and by knowing when to ride a new one to victory.",
    "min_age": 8,
    "min_players": 2,
    "max_players": 5,
    "number_of_minutes": "60",
    "genre_ID": [6, 8, 13, 14],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Days of Wonder",
    "youtube": "ibzqvd3b1Yg",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/smallword_clipped_rev_1_350x.png?v=1510511202"
  },
  {
    "game": "Time Stories",
    "description": "Alternate realities have appeared and time has become malleable! In T.I.M.E. Stories, players are agents traveling through time to repair the temporal faults that danger reality. If you fail a mission, you'll repeat it with prior experience and knowledge!",
    "min_age": 12,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "90-240",
    "genre_ID": [6, 8, 1],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Asmodee",
    "youtube": "M3gVCTcIang",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/41tfz29dgeL._SL500_AC_SS350_350x.jpg?v=1507734788"
  },
  {
    "game": "Twister",
    "description": "Find out if you're REALLY flexible! This classic game is sure to bring loads of fun and laughs as you and your friends try to touch different colors on the mat with different parts of your bodies. Your fate is determined by a spinner! Great for parties!",
    "min_age": 6,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "10",
    "genre_ID": [6, 5, 2, 13, 16],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "Hasbro ",
    "youtube": "9-ThwqP00mI",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/HG98831lg_500x.jpg?v=1506010693"
  },
  {
    "game": "Monopoly: Ghostbusters",
    "description": "Save the world from paranormal activity by subduing the vapors, entities, and slimers in Monopoly: Ghostbusters! This custom edition of Monopoly is great for 2-6 players.",
    "min_age": 8,
    "min_players": 2,
    "max_players": 6,
    "number_of_minutes": "60-90",
    "genre_ID": [6, 5, 2, 11, 15, 16],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "USAopoly",
    "youtube": "qTylbl8-TII",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/ghostbusters_mn_16_3dbt_web_0_350x.jpg?v=1506287026"
  },
  {
    "game": "Dr. Microbe",
    "description": "Help Dr. Microbe complete her research with your tweezers, a petri dish, and the colorful microbes. Using logic, race your fellow scientists to figure out which microbes are missing from the incomplete challenge card and snatch them up fast! find the answer usin...",
    "min_age": 8,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "15",
    "genre_ID": [6, 5, 2],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "Blue Orange Games",
    "youtube": "DwgVNezSMzk",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/microbe_clipped_rev_1_350x.png?v=1510514115"
  },
  {
    "game": "Imhotep: Builder of Egypt",
    "description": "Take on the role of Egyptian architect transporting stone blocks to the most valuable positions in construction sites and thwart your opponents' efforts to do the same. This Game of the Year nominee will help you and your family make lots of memories!",
    "min_age": 10,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "40",
    "genre_ID": [6, 14, 1, 8],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Kosmos Games",
    "youtube": "wrhfb4e5-60",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/41fIVFZqecL_1024x1024.jpg?v=1506449189"
  },
  {
    "game": "Animal Act",
    "description": "Animal Act is a game that encourages kids to flex their creative muscles in new ways of expressing themselves. Roll the die and choose your path- sing, act, mime, or guess your way to greatness in this fun-filled game!\n",
    "min_age": 4,
    "min_players": 2,
    "max_players": 12,
    "number_of_minutes": "15",
    "genre_ID": [6, 5, 2],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "Buffalo Games",
    "youtube": "F17NjpauTXY",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/animalact1_500x_clipped_rev_1_350x.png?v=1510267495"
  },
  {
    "game": "Wits and Wagers",
    "description": "You don't have to know everything to be good at this trivia-like game! Everyone writes down a guess to a fun question like \"in inches, how tall is the Oscar statuette?\" then players bet on the closest guess to the right answer. It's all in the Wits and Wagers!\n",
    "min_age": 10,
    "min_players": 3,
    "max_players": 7,
    "number_of_minutes": "25",
    "genre_ID": [6, 5, 2, 3],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "North Star Games",
    "youtube": "x9M_vEaj3qM",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/wits-and-wagers-game_500x.jpg?v=1505674546"
  },
  {
    "game": "The Castles of Burgundy",
    "description": "In The Castles of Burgundy, you and up to three friends are noble aristocrats controlling your own princedoms. This strategy game is played over five phases where you can take certain actions during your turn based on the die you roll.\n",
    "min_age": 12,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "30-90",
    "genre_ID": [6, 1, 14],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Ravensburger",
    "youtube": "D0CGjB5QTeU",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/castles-of-burgundy-game_500x.jpg?v=1505674531"
  },
  {
    "game": "Chronology",
    "description": "Think you know your historical events? Put your knowledge to the test in Chronology! Players are read a historical event and have to decide where the event falls on their timeline \"board.\" If you get it right, you keep the card. First to keep 10 cards wins!",
    "min_age": 12,
    "min_players": 2,
    "max_players": 8,
    "number_of_minutes": "30",
    "genre_ID": [7, 9],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Buffalo Games",
    "youtube": "gWqehwKd-M8",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/chronology_clipped_rev_2_1024x1024.jpeg?v=1510513522"
  },
  {
    "game": "Likewise!",
    "description": "Likewise is a an exciting party game where players try to match answers from combinations of description and subject cards. If you like playing word games with friends, this would be a great game for you!",
    "min_age": 12,
    "min_players": 3,
    "max_players": 6,
    "number_of_minutes": "35",
    "genre_ID": [7, 13, 3],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "Buffalo Games",
    "youtube": "hB9pmt3_pRc",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/likwise_clipped_rev_1_500x.jpeg?v=1510513686"
  },
  {
    "game": "Monopoly Deal",
    "description": "Monopoly Deal is the handy version of the classic board game Monopoly! Pick up cards when it's your turn, play Action cards to charge players rent, and be the first to collect three full property sets of different colors!",
    "min_age": 8,
    "min_players": 2,
    "max_players": 5,
    "number_of_minutes": "15",
    "genre_ID": [7, 5, 2, 11],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Hasbro ",
    "youtube": "znrBkuoMSJ0",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/HSB0965lg_1024x1024.jpg?v=1505774367"
  },
  {
    "game": "Uno",
    "description": "Uno is one of those classic, easy to learn, on-the-go type card games. Simply go in a circle and try to get rid of all the cards in your hand by matching numbers, colors, or playing special cards that otherwise fit the conditions!",
    "min_age": 6,
    "min_players": 2,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [7, 5, 2, 16],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Mattel",
    "youtube": "_CvaIyRE1Tw",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/uno-card-game-1_1024x1024.jpg?v=1505674544"
  },
  {
    "game": "Phase 10",
    "description": "From the makers of UNO! This rummy-type card game has players compete to be the first player to complete 10 varied Phases-- an example being 2 sets of 3. The twist is that each Phase to be completed is specific for each hand dealt. For 2-6 players ages 7+",
    "min_age": 7,
    "min_players": 2,
    "max_players": 6,
    "number_of_minutes": "15",
    "genre_ID": [7, 5, 2],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Mattel",
    "youtube": "5JpVNNJxVs0",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/phase10_350x.jpg?v=1505767109"
  },
  {
    "game": "Gloom",
    "description": "Gloom is a card game with an unusual premise where the goal is to score the lowest points by having your characters suffer the greatest tragedies possible before dying. Sabotage your opponents by cheering their characters on. Lowest total score wins!",
    "min_age": 13,
    "min_players": 2,
    "max_players": 5,
    "number_of_minutes": "60",
    "genre_ID": [7, 10, 13],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Atlas Games",
    "youtube": "yoDs6vwfkjo",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/gloom_box_500x_clipped_rev_1_1024x1024.png?v=1510509842"
  },
  {
    "game": "Munchkin Loot Letter",
    "description": "Steal the treasure and backstab your friends - without all the sill card playing stuff. Well, without some of it. Okay without all but 16 cards of it, at least. Based on the hit game, Love Letter, Munchkin Loot Letter is a game of risk, deduction and luck for 2-...",
    "min_age": 10,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "15",
    "genre_ID": [7, 5, 2, 8, 13],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Alderac Entertainment Group",
    "youtube": "aIyI7RA8LwA",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/ll-munchkin-box-title_350x.png?v=1510696485"
  },
  {
    "game": "Colt Express",
    "description": "Welcome aboard the Colt Express! Play as a ruthless bandit set on looting as much goods and shooting as many bullets as you can at your former companions on the 3D steam train. Just don't be knocked off track before the train pulls into the station!",
    "min_age": 10,
    "min_players": 2,
    "max_players": 6,
    "number_of_minutes": "30-40",
    "genre_ID": [7, 1, 11, 3],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Asmodee",
    "youtube": "inKMSbky6Ik",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/colt01_mock_350x.png?v=1507739470"
  },
  {
    "game": "Urban Dictionary Game",
    "description": "This adult party game is based on the popular website of crowd sourced definitions of slang words, Urban Dictionary. Try to impress the judge each round by playing Urban Dictionary word cards in response to hashtags, phrases, and pictures. First to five wins!",
    "min_age": 18,
    "min_players": 3,
    "max_players": 8,
    "number_of_minutes": "30",
    "genre_ID": [7, 4, 9],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Buffalo Games",
    "youtube": "ouBsmnZdyWo",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/81OkxCqGYyL._SY355_500x.jpg?v=1505674538"
  },
  {
    "game": "Coup",
    "description": "The Resistance has brought the government to the brink of collapse, so you decide to take advantage of the discord to start a Coup. This card game requires you to bluff and deduce which actions your opponents will take against you!",
    "min_age": 9,
    "min_players": 2,
    "max_players": 6,
    "number_of_minutes": "15",
    "genre_ID": [7, 1, 3],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Indie Boards And Cards",
    "youtube": "9YySzHXa1mo",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/coup-game_1024x1024.jpg?v=1505674420"
  },
  {
    "game": "Apples to Apples",
    "description": "Apples to Apples is THE easy to learn, laugh out loud party game! An adjective card is played by the Judge and each player chooses the noun card in their hand that they think relates the most. Players who win the round becomes the Judge for the next round.",
    "min_age": 12,
    "min_players": 4,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [7, 5, 2, 13],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "Mattel",
    "youtube": "lt1fRUDOKkM",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/Apples-to-Apples-game_350x.jpg?v=1505674398"
  },
  {
    "game": "13 Minutes: The Cuban Missile Crisis",
    "description": "13 Minutes: The Cuban Missile Crisis is a card game where you play as either Kennedy or Khrushchev to exit the Cuban Missile Crisis as the ultimate superpower. Play strategy cards that will influence battlegrounds, and avoid triggering a global nuclear war!",
    "min_age": 10,
    "min_players": 2,
    "max_players": 2,
    "number_of_minutes": "13",
    "genre_ID": [7, 14, 1],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Ultra Pro Entertainment",
    "youtube": "MW4pJvZ0Zkg",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/13-minutes-the-cuban-missile-crisis_1024x1024.jpg?v=1509475788"
  },
  {
    "game": "#Alternative Facts",
    "description": "What's more fun than making up click-baiting headlines? Getting the credit for it! Grab your friends, work together (or not), and prove your genius wordsmithing by making up some Alternative Facts!",
    "min_age": 14,
    "min_players": 2,
    "max_players": 6,
    "number_of_minutes": "15-30",
    "genre_ID": [7, 9, 3, 13],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "Ultra Pro Entertainment",
    "youtube": "A6HG1F-xeo4",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/81FE7vlftJL._SL1500_1024x1024.jpg?v=1509129441"
  },
  {
    "game": "Happy Salmon",
    "description": "Happy Salmon is the ultimate fast and silly card game filled with FIN-tastic fun! Shout out actions shown on your top card to find a match, then celebrate by performing the action and quickly discarding a card. The first to get rid of all of their cards wins!",
    "min_age": 6,
    "min_players": 3,
    "max_players": 6,
    "number_of_minutes": "2",
    "genre_ID": [7, 13, 2, 5],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "North Star Games",
    "youtube": "aeT2qssQii8",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/pic2913980_1024x1024.png?v=1508170496"
  },
  {
    "game": "Clubs Card Game",
    "description": "Clubs is a card game in which players try to win as many club cards as possible. The catch? The last player to go out for the round does not get any points! Similar to Hearts and Spades, this on-the-go card game is perfect to bring along on any trip!",
    "min_age": 8,
    "min_players": 2,
    "max_players": 6,
    "number_of_minutes": "30",
    "genre_ID": [7, 5, 2],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "BoardGames.Com",
    "youtube": "XeBihJz3pzg",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/71eiZ6QvHBL._SL1200_500x.jpg?v=1508170983"
  },
  {
    "game": "The Voting Game",
    "description": "Draw a card and vote anonymously for the player you believe was described by the question, then tally up the votes and reveal the result! The Voting Game is a fun party game which will leave players surprised and laughing!",
    "min_age": 17,
    "min_players": 5,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [7, 13, 3],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "The Voting Game",
    "youtube": "sWujxgSV93w",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/votinggame_clipped_rev_2_500x.png?v=1510512212"
  },
  {
    "game": "Codenames Pictures",
    "description": "Codenames Pictures takes the original party game a step further! Two rival spymasters know the secret identities of their agents and give coded messages to help their team to find them. Guess the pictures of your team's color while avoiding the assassin!",
    "min_age": 14,
    "min_players": 2,
    "max_players": 8,
    "number_of_minutes": "15-30",
    "genre_ID": [7, 2, 1],
    "expansion_pack": true ,
    "challenge_level": "average",
    "publisher": "Czech Games",
    "youtube": "XM5QjwnTQHg",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/d7ec3487-1b2f-470c-9382-36f8c9f89382._SR285_285_350x.jpg?v=1508173178"
  },
  {
    "game": "Codenames Duet",
    "description": "Codenames Duet keeps the basic elements of Codenames — give one-word clues to try to get someone to identify your agents among those on the table — but now you're working together as a team to find all of your agents.",
    "min_age": 11,
    "min_players": 2,
    "max_players": 4,
    "number_of_minutes": "15-30",
    "genre_ID": [7, 2, 1],
    "expansion_pack": true ,
    "challenge_level": "average",
    "publisher": "Czech Games",
    "youtube": "Q--J0ZDv3tY",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/codenames_duet_350x.png?v=1544341251"
  },
  {
    "game": "Clank! A Deck Building Adventure",
    "description": "Burgle your way to adventure in the deck-building board game Clank! Sneak into an angry dragon's mountain lair to steal precious artifacts. Delve deeper to find more valuable loot. Acquire cards for your deck and watch your thievish abilities grow.",
    "min_age": 12,
    "min_players": 1,
    "max_players": 4,
    "number_of_minutes": "30-60",
    "genre_ID": [7, 8, 14, 1],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Renegade Game Studios",
    "youtube": "fmTlVx9DVLU",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/61ndijnUVdL._SL500_AC_SS350_350x.jpg?v=1511122105"
  },
  {
    "game": "Cat Tower",
    "description": "Love Jenga? Or cats? How about playing with BOTH?! Cat Tower is a cute and easy tower-building game with a twist! Purrfect for kids of all ages! (including grown-ups who act like kids!)",
    "min_age": 6,
    "min_players": 2,
    "max_players": 6,
    "number_of_minutes": "15-20",
    "genre_ID": [7, 5, 2, 13],
    "expansion_pack": false ,
    "challenge_level": "simple",
    "publisher": "IDW Games",
    "youtube": "LTm0aykRoiU",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/61egvNiQAKL._SL1073_350x.jpg?v=1509129429"
  },
  {
    "game": "Drunk Quest",
    "description": "Drunk Quest is a fantasy-based competitive drinking card game. Players seek to level up by defeating monsters and collecting treasure, but be careful-- other players can mess with each other's attempts!",
    "min_age": 21,
    "min_players": 3,
    "max_players": 6,
    "number_of_minutes": "20",
    "genre_ID": [7, 4, 3],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Ninja Division",
    "youtube": "pInXjNR2XHQ",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/917LyBHiv5L._SL1500_1024x1024.jpg?v=1508177632"
  },
  {
    "game": "Queen's Cup",
    "description": "Queen's Cup is a twist on the classic drinking game King's Cup. With the addition of unique rules and superpowers, this game is sure to add another level to your drinking game!",
    "min_age": 21,
    "min_players": 3,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [7, 4, 3],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Buffalo Beer Mug Co.",
    "youtube": "LItVjRrea1U",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/queenscup_64cb8104-6914-4f9e-ad7a-1c8b37f48ca8_350x.jpg?v=1518818237"
  },
  {
    "game": "Hot Seat",
    "description": "Put your friends on the Hot Seat in this fun adult party game! Each round, write an answer to the question pretending to be the player in the Hot Seat and get points for guessing the Hot Seat player's response correctly.",
    "min_age": 17,
    "min_players": 4,
    "max_players": 10,
    "number_of_minutes": "20-90",
    "genre_ID": [7, 4, 3],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "Buffalo Games",
    "youtube": "5y9J6I9CeZc",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/hotseat_clipped_rev_1_500x.jpeg?v=1510516877"
  },
  {
    "game": "Star Realms: Cosmic Gambit",
    "description": "The expansion to the deck building game, Star Realms. Cosmic Gambit introduces 13 new Gambit cards which are given to players face down at the start of the game. The Gambit cards are only revealed when played.",
    "min_age": 12,
    "min_players": 1,
    "max_players": 6,
    "number_of_minutes": "20",
    "genre_ID": [7, 12, 1],
    "expansion_pack": true ,
    "challenge_level": "average",
    "publisher": "White Wizard Games",
    "youtube": "pnpiyBxgDqk",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/star-realms-cosmic-gambit-expansion-game_350x.jpg?v=1505674521"
  },
  {
    "game": "Star Realms: Colony Wars",
    "description": "Star Realms: Colony Wars is an expansion for Star Realms with the same set of gameplay and win conditions (reduce your opponents Authority to zero). It can be played as a stand-alone 2-player game or a 4-player game if added to the original game.",
    "min_age": 12,
    "min_players": 2,
    "max_players": 2,
    "number_of_minutes": "20",
    "genre_ID": [7, 12, 1],
    "expansion_pack": true ,
    "challenge_level": "average",
    "publisher": "White Wizard Games",
    "youtube": "i90oGzamutc",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/star-realms-colony-wars_500x_clipped_rev_2_350x.jpeg?v=1510517169"
  },
  {
    "game": "The Settlers of Catan",
    "description": "How fast can you match? That's the key to BLINK. Shape, count, or color - any way you can match it, do it fast to get rid of your cards. You need a sharp eye and a fast hand to win this lightning-fast game! Play all your cards to win Rapid-fire matching action Great travel game, too Includes 60 symbol cards and instructions for regular and quick play.",
    "min_age": 10,
    "min_players": 3,
    "max_players": 4,
    "number_of_minutes": "90",
    "genre_ID": [6, 8, 1],
    "expansion_pack": false ,
    "challenge_level": "complex",
    "publisher": "Mayfair Games",
    "youtube": "Kw4tIC_cJiE",
    "img": "https://i.ebayimg.com/00/s/NTAwWDQ4MA==/z/7r0AAOSwSypY-L5l/$_35.JPG"
  }
];

 let genres = [
 {
   "genre": "Strategy",
   "genreID": 1,
   "description": "Games that encourage you to develop plans and put them into action."
 },
 {
   "genre": "Family",
   "genreID": 2,
   "description": "Games that will bring the entire family to the table."
 },
 {
   "genre": "Party",
   "genreID": 3,
   "description": "Games that make hosting fun and easy."
 },
 {
   "genre": "Adult Only",
   "genreID": 4,
   "description": "Games that are best kept to the 18+ crowd."
 },
 {
   "genre": "Childrens",
   "genreID": 5,
   "description": "Games for kids that are fun and educational."
 },
 {
   "genre": "Board",
   "genreID": 6,
   "description": "Board games for any gathering."
 },
 {
   "genre": "Card",
   "genreID": 7,
   "description": "All you'll need are your friends and these cards."
 },
 {
   "genre": "Adventure",
   "genreID": 8,
   "description": "Explore the world and mystical places."
 },
 {
   "genre": "Trivia",
   "genreID": 9,
   "description": "Test your knowledge of events or unimportant facts."
 },
 {
   "genre": "Horror",
   "genreID": 10,
   "description": "Games with a spooky side..."
 },
 {
   "genre": "Money and Gambling",
   "genreID": 11,
   "description": "Games that based in trading, currency or gambling."
 },
 {
   "genre": "Science Fiction",
   "genreID": 12,
   "description": "Games themed by actual and imagined science and technology."
 },
 {
   "genre": "Silly",
   "genreID": 13,
   "description": "Games that will keep you and your friends laughing all night."
 },
 {
   "genre": "Fantasy",
   "genreID": 14,
   "description": "Embark on an epic gaming quest."
 },
 {
   "genre": "Pop Culture",
   "genreID": 15,
   "description": "Games based on popular media."
 },
 {
   "genre": "Classic",
   "genreID": 16,
   "description": "Games you remember from your childhood. "
 }
];

 module.exports = {
  games,
  genres
}