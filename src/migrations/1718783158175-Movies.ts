import { MigrationInterface, QueryRunner } from 'typeorm'

export class Movies1718783158175 implements MigrationInterface {
  name = 'Movies1718783158175'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movie" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(1000) NOT NULL, "budget" integer, "homepage" character varying(1000), "overview" character varying(1000), "popularity" numeric, "releasedAt" date, "revenue" bigint, "runtime" integer, "status" character varying(50), "tagline" character varying(1000), "voteAverage" numeric, "voteCount" integer, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`
    )

    queryRunner.query(`
        INSERT INTO "movie" VALUES
        (DEFAULT,'Four Rooms',4000000,'','It''s Ted the Bellhop''s first night on the job...and the hotel''s very unusual guests are about to place him in some outrageous predicaments. It seems that this evening''s room service is serving up one unbelievable happening after another.',22.876230,'1995-12-09',4300000,98,'Released','Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who''s in for the wildest New year''s Eve of his life.',6.50,530),
        (DEFAULT,'Star Wars',11000000,'http://www.starwars.com/films/star-wars-episode-iv-a-new-hope','Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',126.393695,'1977-05-25',775398007,121,'Released','A long time ago in a galaxy far, far away...',8.10,6624),
        (DEFAULT,'Finding Nemo',94000000,'http://movies.disney.com/finding-nemo','Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist''s office aquarium. It''s up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.',85.688789,'2003-05-30',940335536,100,'Released','There are 3.7 trillion fish in the ocean, they''re looking for one.',7.60,6122),
        (DEFAULT,'Forrest Gump',55000000,'','A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. ''Forrest Gump'' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.',138.133331,'1994-07-06',677945399,142,'Released','The world will never be the same, once you''ve seen it through the eyes of Forrest Gump.',8.20,7927),
        (DEFAULT,'American Beauty',15000000,'http://www.dreamworks.com/ab/','Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter''s attractive friend.',80.878605,'1999-09-15',356296601,122,'Released','Look closer.',7.90,3313),
        (DEFAULT,'Dancer in the Dark',12800000,'','Selma, a Czech immigrant on the verge of blindness, struggles to make ends meet for herself and her son, who has inherited the same genetic disorder and will suffer the same fate without an expensive operation. When life gets too difficult, Selma learns to cope through her love of musicals, escaping life''s troubles - even if just for a moment - by dreaming up little numbers to the rhythmic beats of her surroundings.',22.022228,'2000-05-17',40031879,140,'Released','You don''t need eyes to see.',7.60,377),
        (DEFAULT,'The Fifth Element',90000000,'','In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.',109.528572,'1997-05-07',263920180,126,'Released','There is no future without it.',7.30,3885),
        (DEFAULT,'Metropolis',92620000,'','In a futuristic city sharply divided between the working class and the city planners, the son of the city''s mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.',32.351527,'1927-01-10',650422,153,'Released','There can be no understanding between the hands and the brain unless the heart acts as mediator.',8.00,657),
        (DEFAULT,'My Life Without Me',0,'http://www.clubcultura.com/clubcine/clubcineastas/isabelcoixet/mividasinmi/index.htm','A Pedro Almodovar production in which a fatally ill mother with only two months to live creates a list of things she wants to do before she dies with out telling her family of her illness.',7.958831,'2003-03-07',9726954,106,'Released','',7.20,77),
        (DEFAULT,'Pirates of the Caribbean: The Curse of the Black Pearl',140000000,'http://disney.go.com/disneyvideos/liveaction/pirates/main_site/main.html','Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor''s daughter is kidnapped, Sparrow decides to help the girl''s love save her. But their seafaring mission is hardly simple.',271.972889,'2003-07-09',655011224,143,'Released','Prepare to be blown out of the water.',7.50,6985),
        (DEFAULT,'Kill Bill: Vol. 1',30000000,'http://www.miramax.com/movie/kill-bill-volume-1/','An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle – but ''The Bride'' lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.',79.754966,'2003-10-10',180949000,111,'Released','Go for the kill.',7.70,4949),
        (DEFAULT,'Jarhead',72000000,'','Jarhead is a film about a US Marine Anthony Swofford’s experience in the Gulf War. After putting up with an arduous boot camp, Swafford and his unit are sent to the Persian Gulf where they are earger to fight but are forced to stay back from the action. Meanwhile Swofford gets news of his girlfriend is cheating on him. Desperately he wants to kill someone and finally put his training to use.',32.227223,'2005-11-04',96889998,125,'Released','Welcome to the suck.',6.60,765),
        (DEFAULT,'Apocalypse Now',31500000,'http://www.apocalypsenow.com','At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, \"does not exist, nor will it ever exist.\" His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',49.973462,'1979-08-15',89460381,153,'Released','This is the end...',8.00,2055),
        (DEFAULT,'Unforgiven',14000000,'','William Munny is a retired, once-ruthless killer turned gentle widower and hog farmer. To help support his two motherless children, he accepts one last bounty-hunter mission to find the men who brutalized a prostitute. Joined by his former partner and a cocky greenhorn, he takes on a corrupt sheriff.',37.380435,'1992-08-07',159157447,131,'Released','Some legends will never be forgotten. Some wrongs can never be forgiven.',7.70,1113),
        (DEFAULT,'The Simpsons Movie',75000000,'http://www.simpsonsmovie.com/','After Homer accidentally pollutes the town''s water supply, Springfield is encased in a gigantic dome by the EPA and the Simpsons are declared fugitives.',46.875375,'2007-07-25',527068851,87,'Released','See our family. And feel better about yours.',6.90,2264),
        (DEFAULT,'Eternal Sunshine of the Spotless Mind',20000000,'http://www.eternalsunshine.com','Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.',56.481487,'2004-03-19',72258126,108,'Released','You can erase someone from your mind. Getting them out of your heart is another story.',7.90,3652),
        (DEFAULT,'Amores perros',2000000,'','Three different people in Mexico City are catapulted into dramatic and unforeseen circumstances in the wake of a terrible car crash: a young punk stumbles into the sinister underground world of dog fighting; an injured supermodel''s designer pooch disappears into the apartment''s floorboards; and an ex-radical turned hit man rescues a gunshot Rotweiler.',23.281616,'2000-06-16',20908467,154,'Released','Love. Betrayal. Death.',7.60,521),
        (DEFAULT,'Pirates of the Caribbean: Dead Man''s Chest',200000000,'http://disney.go.com/disneypictures/pirates/','Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation.',145.847379,'2006-06-20',1065659812,151,'Released','Jack is back!',7.00,5246),
        (DEFAULT,'A History of Violence',32000000,'','An average family is thrust into the spotlight after the father commits a seemingly self-defense murder at his diner.',34.628738,'2005-09-23',60740827,96,'Released','Tom Stall had the perfect life... until he became a hero.',6.90,832),
        (DEFAULT,'2001: A Space Odyssey',10500000,'','Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world''s most advanced super computer.',86.201184,'1968-04-10',68700000,149,'Released','An epic drama of adventure and exploration',7.90,2998),
        (DEFAULT,'8 Mile',41000000,'http://movies.uip.de/8mile/','The setting is Detroit in 1995. The city is divided by 8 Mile, a road that splits the town in half along racial lines. A young white rapper, Jimmy \"B-Rabbit\" Smith Jr. summons strength within himself to cross over these arbitrary boundaries to fulfill his dream of success in hip hop. With his pal Future and the three one third in place, all he has to do is not choke.',32.798571,'2002-11-08',215000000,110,'Released','Every moment is another chance.',6.80,1626),
        (DEFAULT,'Absolute Power',50000000,'','A master thief coincidentally is robbing a house where a murder in which the President of The United States is involved occurs in front of his eyes. He is forced to run yet may hold evidence that could convict the President. A political thriller from and starring Clint Eastwood and based on a novel by David Baldacci.',13.576765,'1997-02-14',50068310,121,'Released','Corrupts Absolutely.',6.40,223),
        (DEFAULT,'Brazil',15000000,'','Low-level bureaucrat Sam Lowry escapes the monotony of his day-to-day life through a recurring daydream of himself as a virtuous hero saving a beautiful damsel. Investigating a case that led to the wrongful arrest and eventual death of an innocent man instead of wanted terrorist Harry Tuttle, he meets the woman from his daydream, and in trying to help her gets caught in a web of mistaken identities, mindless bureaucracy and lies.',41.089863,'1985-02-20',0,132,'Released','It''s only a state of mind.',7.50,861),
        (DEFAULT,'Walk the Line',28000000,'','A chronicle of country music legend Johnny Cash''s life, from his early days on an Arkansas cotton farm to his rise to fame with Sun Records in Memphis, where he recorded alongside Elvis Presley, Jerry Lee Lewis and Carl Perkins.',35.580032,'2005-09-13',186438883,136,'Released','Love is a burning thing.',7.30,718),
        (DEFAULT,'Million Dollar Baby',30000000,'http://www.milliondollarbaby-derfilm.de/','Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn''t prepared for boxer Maggie Fitzgerald to enter his life. But Maggie''s determined to go pro and to convince Dunn and his cohort to help her.',70.456012,'2004-12-15',216763646,132,'Released','Beyond his silence, there is a past. Beyond her dreams, there is a feeling. Beyond hope, there is a memory. Beyond their journey, there is a love.',7.70,2439),
        (DEFAULT,'Billy Elliot',5000000,'','Set against the background of the 1984 Miner''s Strike, Billy Elliot is an 11 year old boy who stumbles out of the boxing ring and onto the ballet floor. He faces many trials and triumphs as he strives to conquer his family''s set ways, inner conflict, and standing on his toes!',20.428237,'2000-05-18',110000000,110,'Released','Inside every one of us is a special talent waiting to come out. The trick is finding it.',7.40,750),
        (DEFAULT,'American History X',20000000,'http://www.historyx.com/','Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard''s narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.',73.567232,'1998-10-30',23875127,119,'Released','Some Legacies Must End.',8.20,3016),
        (DEFAULT,'War of the Worlds',132000000,'','Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop of his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down.',48.572726,'2005-06-28',591739379,116,'Released','They''re already here.',6.20,2322),
        (DEFAULT,'Mars Attacks!',70000000,'http://marsattacks.warnerbros.com/','''We come in peace'' is not what those green men from Mars mean when they invade our planet, armed with irresistible weapons and a cruel sense of humor.  This star studded cast must play victim to the alien’s fun and games in this comedy homage to science fiction films of the ''50s and ''60s.',44.090535,'1996-12-12',101371017,106,'Released','Nice planet. We''ll take it!',6.10,1509),
        (DEFAULT,'Before Sunrise',2500000,'','A dialogue marathon of a film, this fairytale love story of an American boy and French girl. During a day and a night together in Vienna their two hearts collide.',23.672571,'1995-01-27',5535405,105,'Released','Can the greatest romance of your life last only one night?',7.70,959),
        (DEFAULT,'Memento',9000000,'http://www.otnemem.com/','Suffering short-term memory loss after a head injury, Leonard Shelby embarks on a grim quest to find the lowlife who murdered his wife in this gritty, complex thriller that packs more knots than a hangman''s noose. To carry out his plan, Shelby snaps Polaroids of people and places, jotting down contextual notes on the backs of photos to aid in his search and jog his memory. He even tattoos his own body in a desperate bid to remember.',60.715151,'2000-10-11',39723096,113,'Released','Some memories are best forgotten.',8.10,4028),
        (DEFAULT,'Blade Runner',28000000,'http://www.warnerbros.com/blade-runner','In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.',94.056131,'1982-06-25',33139618,117,'Released','Man has made his match... now it''s his problem.',7.90,3509),
        (DEFAULT,'英雄',31000000,'','One man defeated three assassins who sought to murder the most powerful warlord in pre-unified China.',23.607392,'2002-12-19',177394432,99,'Released','One man''s strength will unite an empire.',7.20,635),
        (DEFAULT,'Before Sunset',2700000,'http://www.warnerbros.com/?site=beforesunset#/page=movies&pid=f-57b53b9e/BEFORE_SUNSET&asset=059437/Before_Sunset_-_Trailer_1A&type=video/','Nine years ago two strangers met by chance and spent a night in Vienna that ended before sunrise. They are about to meet for the first time since. Now they have one afternoon to find out if they belong together.',14.799323,'2004-02-10',15992615,80,'Released','What if you had a second chance with the one that got away?',7.60,718),
        (DEFAULT,'Open Water',130000,'','Two divers are left out at sea without a boat. There’s nothing but water for miles, unless they look at what’s underneath them...',15.611857,'2004-08-06',54667954,79,'Released','Scream all you want.',5.40,315),
        (DEFAULT,'Raiders of the Lost Ark',18000000,'http://www.indianajones.com','When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.',68.159596,'1981-06-12',389925971,115,'Released','Indiana Jones - the new hero from the creators of JAWS and STAR WARS.',7.70,3854),
        (DEFAULT,'Indiana Jones and the Temple of Doom',28000000,'http://www.indianajones.com','After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.',66.976776,'1984-05-23',333000000,118,'Released','If adventure has a name... it must be Indiana Jones.',7.10,2781),
        (DEFAULT,'Indiana Jones and the Last Crusade',48000000,'http://www.indianajones.com/crusade','When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father''s footsteps and stop the Nazis from recovering the power of eternal life.',80.972475,'1989-05-24',474171806,127,'Released','The man with the hat is back. And this time, he''s bringing his Dad.',7.60,3152),
        (DEFAULT,'Beverly Hills Cop',15000000,'','Tough-talking Detroit cop Axel Foley heads to the rarified world of Beverly Hills in his beat-up Chevy Nova to investigate a friend''s murder. But soon, he realizes he''s stumbled onto something much more complicated. Bungling rookie detective Billy Rosewood joins the fish-out-of-water Axel and shows him the West Los Angeles ropes.',29.843818,'1984-11-29',316360478,105,'Released','The Heat Is On!',6.80,961),
        (DEFAULT,'Armageddon',140000000,'','When an asteroid threatens to collide with Earth, NASA honcho Dan Truman determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper, who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. who Harry thinks isn''t good enough for his daughter, until the mission proves otherwise.',58.485967,'1998-07-01',553799566,151,'Released','The Earth''s Darkest Day Will Be Man''s Finest Hour',6.40,2482),
        (DEFAULT,'Beverly Hills Cop II',20000000,'','Detroit cop, Axel Foley heads for the land of sunshine and palm trees to find out who shot police Captain Andrew Bogomil. Thanks to a couple of old friends, Axel''s investigation uncovers a series of robberies masterminded by a heartless weapons kingpin – and the chase is on.',25.284360,'1987-05-18',299965036,100,'Released','',6.10,613),
        (DEFAULT,'Gladiator',103000000,'','In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army''s most capable and trusted generals and a key advisor to the emperor. As Marcus'' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences. His battle skills serve him well, and he becomes one of the most famous and admired men to fight in the Colosseum. Determined to avenge himself against the man who took away his freedom and laid waste to his family, Maximus believes that he can use his fame and skill in the ring to avenge the loss of his family and former glory. As the gladiator begins to challenge his rule, Commodus decides to put his own fighting mettle to the test by squaring off with Maximus in a battle to the death.',95.301296,'2000-05-01',457640427,155,'Released','A Hero Will Rise.',7.90,5439),
        (DEFAULT,'Lock, Stock and Two Smoking Barrels',1350000,'http://www.universalstudiosentertainment.com/lock-stock-and-two-smoking-barrels/','A card sharp and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.',16.032594,'1998-03-05',3897569,105,'Released','A Disgrace to Criminals Everywhere.',7.50,1648)
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movie"`)
  }
}