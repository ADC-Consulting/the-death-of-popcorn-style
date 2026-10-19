/* ============================================
   CHECK-IN ROULETTE — App Logic
============================================ */

// -------- Team (Vashti toegevoegd) --------
const TEAM = [
  { name: 'Alinda',  color: '#58EB81' },
  { name: 'Elianne', color: '#FF9BFC' },
  { name: 'Lisette', color: '#A187FF' },
  { name: 'Harm',    color: '#2BEBCB' },
  { name: 'Laurent', color: '#E5C574' },
  { name: 'Jochem',  color: '#FFF347' },
  { name: 'Timon',   color: '#58EB81' },
  { name: 'Vashti',  color: '#A187FF' },
];

// -------- i18n: UI text --------
const I18N = {
  nl: {
    // Intro
    eyebrow: 'Wekelijkse check-in · v1.0',
    headlineA: 'Wie mag',
    headlineEm: 'eerst',
    headlineB: '?',
    headlineAccent: 'Laat Elmo beslissen.',
    lede: 'Een eerlijke, willekeurige, en vooral onnodig ingewikkelde manier om de volgorde van sprekers te bepalen. Met ondersteuning van een rode, pluizige coach.',
    startBtn: 'Start de roulette',
    // Participants
    pTitle: 'Wie is er vandaag?',
    pSub: 'Tik op iedereen die meedoet aan de check-in.',
    selected: 'geselecteerd',
    back: '← Terug',
    next: 'Volgende',
    // Question
    qTitle: 'De vraag van deze week',
    qSub: 'Iedereen geeft een getal. Antwoord eerlijk. Of niet. Elmo ziet het toch niet.',
    qLabel: 'VRAAG VAN DE WEEK',
    loading: 'Laden...',
    otherQuestion: 'Andere vraag',
    reveal: 'Onthul de volgorde',
    answerPlaceholder: 'getal',
    // Reveal
    rTitle: 'De volgorde van vandaag',
    rSub: 'Tromgeroffel... gesorteerd op laagste naar hoogste waarde.',
    restart: 'Nog een keer',
    newQuestion: 'Nieuwe vraag, zelfde team',
    tied: 'Gelijk → Elmo heeft gegokt',
    // Footer
    footer: 'Gemaakt voor Public & Society · Powered by willekeur & Elmo',
    // Vragenbeheer
    pickLabel: 'Kies een vraag van deze week:',
    weekInfo: (n, weeks) => `Week ${n} van het schema · nog ${weeks} weken nieuwe vragen`,
    lowWarning: (weeks) => `Let op: nog maar ${weeks} weken nieuwe vragen. Voeg er een paar toe via "Vragen beheren".`,
    repeatInfo: (round) => `Ronde ${round}: alle vragen zijn al eens langsgekomen. Voeg nieuwe vragen toe via "Vragen beheren".`,
    manageBtn: 'Vragen beheren',
    manageTitle: 'Vragenbeheer',
    statsLine: (total, weeks) => `${total} vragen in totaal · genoeg voor nog ${weeks} weken`,
    scheduleTitle: 'Komende weken',
    thisWeek: 'deze week',
    bulkTitle: 'Vragen in bulk toevoegen',
    bulkHelp: 'Eén vraag per regel. Engels is optioneel: zet het erachter met een tab (plakken uit Excel), " | " of ";". Je kunt ook een .txt- of .csv-bestand kiezen.',
    bulkPlaceholder: 'Hoeveel planten heb je? | How many plants do you have?\nHoeveel apps staan er op je telefoon?',
    bulkFile: 'Bestand kiezen',
    bulkPreview: (fresh, dup) => `${fresh} nieuwe vragen${dup ? ` · ${dup} bestaan al (worden overgeslagen)` : ''}`,
    bulkBtn: 'Toevoegen',
    bulkDone: (n) => `${n} vragen toegevoegd. Ze komen achteraan in het schema.`,
    bulkNone: 'Geen nieuwe vragen gevonden.',
    exportTitle: 'Delen met het team (GitHub)',
    exportHelp: 'Toegevoegde vragen staan nu alleen in deze browser. Download het bestand en upload het in je GitHub-repo (vervang extra-questions.json). Dan heeft iedereen dezelfde lijst en hetzelfde schema.',
    exportBtn: 'Download extra-questions.json',
    unsaved: (n) => `${n} toegevoegde vragen staan nog niet in GitHub.`,
    close: 'Sluiten',
  },
  en: {
    // Intro
    eyebrow: 'Weekly check-in · v1.0',
    headlineA: 'Who goes',
    headlineEm: 'first',
    headlineB: '?',
    headlineAccent: 'Let Elmo decide.',
    lede: 'A fair, random, and utterly over-engineered way to determine the speaking order. Now with support from a red, fuzzy coach.',
    startBtn: 'Start the roulette',
    // Participants
    pTitle: 'Who\u2019s here today?',
    pSub: 'Tap everyone joining the check-in.',
    selected: 'selected',
    back: '← Back',
    next: 'Next',
    // Question
    qTitle: 'This week\u2019s question',
    qSub: 'Everyone gives a number. Answer honestly. Or don\u2019t. Elmo can\u2019t tell.',
    qLabel: 'QUESTION OF THE WEEK',
    loading: 'Loading...',
    otherQuestion: 'Another question',
    reveal: 'Reveal the order',
    answerPlaceholder: 'number',
    // Reveal
    rTitle: 'Today\u2019s speaking order',
    rSub: 'Drumroll... sorted from lowest to highest value.',
    restart: 'Do it again',
    newQuestion: 'New question, same team',
    tied: 'Tied → Elmo rolled the dice',
    // Footer
    footer: 'Made for Public & Society · Powered by randomness & Elmo',
    // Question management
    pickLabel: 'Pick one of this week’s questions:',
    weekInfo: (n, weeks) => `Week ${n} of the schedule · ${weeks} weeks of new questions left`,
    lowWarning: (weeks) => `Heads up: only ${weeks} weeks of new questions left. Add some via "Manage questions".`,
    repeatInfo: (round) => `Round ${round}: every question has come up before. Add new ones via "Manage questions".`,
    manageBtn: 'Manage questions',
    manageTitle: 'Question manager',
    statsLine: (total, weeks) => `${total} questions in total · enough for ${weeks} more weeks`,
    scheduleTitle: 'Coming weeks',
    thisWeek: 'this week',
    bulkTitle: 'Add questions in bulk',
    bulkHelp: 'One question per line. English is optional: add it after a tab (paste from Excel), " | " or ";". You can also pick a .txt or .csv file.',
    bulkPlaceholder: 'Hoeveel planten heb je? | How many plants do you have?\nHoeveel apps staan er op je telefoon?',
    bulkFile: 'Choose file',
    bulkPreview: (fresh, dup) => `${fresh} new questions${dup ? ` · ${dup} already exist (skipped)` : ''}`,
    bulkBtn: 'Add',
    bulkDone: (n) => `${n} questions added. They go to the end of the schedule.`,
    bulkNone: 'No new questions found.',
    exportTitle: 'Share with the team (GitHub)',
    exportHelp: 'Added questions currently live only in this browser. Download the file and upload it to your GitHub repo (replace extra-questions.json). Then everyone has the same list and schedule.',
    exportBtn: 'Download extra-questions.json',
    unsaved: (n) => `${n} added questions are not in GitHub yet.`,
    close: 'Close',
  }
};

// -------- Questions (with translations) --------
const QUESTIONS = [
  { nl: "Hoeveel paraplu's heb je thuis?", en: "How many umbrellas do you have at home?" },
  { nl: "Hoeveel mokken staan er in je keukenkast?", en: "How many mugs are in your kitchen cupboard?" },
  { nl: "Hoeveel WhatsApp-groepen heb je gedempt?", en: "How many WhatsApp groups have you muted?" },
  { nl: "Hoeveel paar sneakers heb je?", en: "How many pairs of sneakers do you own?" },
  { nl: "Hoeveel jassen hangen er aan je kapstok?", en: "How many coats are on your coat rack?" },
  { nl: "Hoe vaak heb je deze week 'even snel' gezegd? (gok maar)", en: "How often did you say 'just quickly' this week? (just guess)" },
  { nl: "Hoeveel post-its liggen of plakken er nu op je bureau?", en: "How many post-its are on your desk right now?" },
  { nl: "Hoeveel wachtwoorden denk je te hebben? (gok maar)", en: "How many passwords do you think you have? (just guess)" },
  { nl: "Hoeveel kaarsen staan er in je huis?", en: "How many candles are in your home?" },
  { nl: "Hoeveel minuten duurt je langste meeting deze week?", en: "How many minutes is your longest meeting this week?" },
  { nl: "Hoeveel half gelezen boeken liggen er bij jou thuis?", en: "How many half-read books are lying around your home?" },
  { nl: "Hoeveel potjes staan er in je kruidenrek?", en: "How many jars are in your spice rack?" },
  { nl: "Hoe vaak zei je deze week 'je staat op mute'?", en: "How often did you say 'you're on mute' this week?" },
  { nl: "Hoeveel klantenkaarten heb je (fysiek of in een app)?", en: "How many loyalty cards do you have (physical or in an app)?" },
  { nl: "Hoeveel kilometer heb je deze week gefietst?", en: "How many kilometres have you cycled this week?" },
  { nl: "Hoeveel ongelezen WhatsApp-berichten heb je nu?", en: "How many unread WhatsApp messages do you have right now?" },
  { nl: "Hoeveel bordspellen heb je thuis?", en: "How many board games do you have at home?" },
  { nl: "Hoeveel taken staan er nu op je to-do-lijst?", en: "How many tasks are on your to-do list right now?" },
  { nl: "Hoeveel minuten vóór een meeting ben je gemiddeld aanwezig? (te laat = negatief)", en: "How many minutes early are you for meetings on average? (late = negative)" },
  { nl: "Hoeveel stopcontacten zitten er in de ruimte waar je nu bent?", en: "How many power sockets are in the room you're in right now?" },
  { nl: "Hoeveel afstandsbedieningen heb je thuis?", en: "How many remote controls do you have at home?" },
  { nl: "Hoeveel graden is het nu buiten volgens je weer-app?", en: "What's the temperature outside right now according to your weather app?" },
  { nl: "Hoeveel pennen liggen er binnen handbereik?", en: "How many pens are within arm's reach?" },
  { nl: "Hoeveel series kijk je op dit moment tegelijk?", en: "How many series are you watching at the same time right now?" },
  { nl: "Hoeveel sleutels zitten er aan je sleutelbos?", en: "How many keys are on your keyring?" },
  { nl: "Hoeveel kussens liggen er op je bank?", en: "How many cushions are on your sofa?" },
  { nl: "Hoeveel kabels en opladers liggen er in je la? (gok maar)", en: "How many cables and chargers are in your drawer? (just guess)" },
  { nl: "Hoeveel procent batterij heeft je telefoon nu?", en: "What percentage is your phone battery at right now?" },
  { nl: "Hoeveel bestanden staan er op je bureaublad?", en: "How many files are on your desktop?" },
  { nl: "Hoeveel ongelezen notificaties heb je op je telefoon?", en: "How many unread notifications are on your phone?" },
  { nl: "Hoeveel games staan er op je telefoon?", en: "How many games are on your phone?" },
  { nl: "Met hoeveel mensen heb je vandaag al gepraat (ook online)?", en: "How many people have you talked to today (online counts)?" },
  { nl: "Hoe vaak heb je vandaag je telefoon ontgrendeld? (gok maar)", en: "How many times have you unlocked your phone today? (just guess)" },
  { nl: "Hoeveel verdiepingen heeft je huis?", en: "How many floors does your home have?" },
  { nl: "Hoeveel ramen heeft je woonkamer?", en: "How many windows does your living room have?" },
  { nl: "Hoeveel lampen branden er nu om je heen?", en: "How many lights are on around you right now?" },
  { nl: "Hoeveel sokken zonder partner liggen er in je la? (gok maar)", en: "How many unmatched socks are in your drawer? (just guess)" },
  { nl: "Hoeveel soorten thee heb je in huis?", en: "How many kinds of tea do you have at home?" },
  { nl: "Hoeveel flessen saus staan er in je koelkast?", en: "How many bottles of sauce are in your fridge?" },
  { nl: "Hoeveel eieren liggen er in je koelkast?", en: "How many eggs are in your fridge?" },
  { nl: "Hoeveel ingelijste foto's en posters hangen er in je huis?", en: "How many framed photos and posters hang in your home?" },
  { nl: "Hoeveel tassen hangen of staan er bij je voordeur?", en: "How many bags are hanging or standing by your front door?" },
  { nl: "Hoeveel petten en mutsen heb je?", en: "How many caps and beanies do you own?" },
  { nl: "Hoeveel horloges heb je?", en: "How many watches do you own?" },
  { nl: "Hoeveel tandenborstels zijn er in je huis?", en: "How many toothbrushes are in your home?" },
  { nl: "Hoeveel handdoeken hangen er in je badkamer?", en: "How many towels are hanging in your bathroom?" },
  { nl: "Hoeveel spiegels zijn er in je huis?", en: "How many mirrors are in your home?" },
  { nl: "Hoeveel kookboeken heb je?", en: "How many cookbooks do you own?" },
  { nl: "Hoeveel vorken liggen er in je bestekla? (gok maar)", en: "How many forks are in your cutlery drawer? (just guess)" },
  { nl: "Hoeveel deuren heeft je huis (binnen en buiten)?", en: "How many doors does your home have (inside and out)?" },
  { nl: "Hoeveel fietsen staan er bij jouw huis?", en: "How many bikes are at your home?" },
  { nl: "Hoeveel buren ken je bij naam?", en: "How many neighbours do you know by name?" },
  { nl: "Hoeveel minuten heb je vandaag al gebeld of gevideobeld?", en: "How many minutes have you spent on calls today?" },
  { nl: "Hoeveel Teams-chats heb je vandaag geopend? (gok maar)", en: "How many Teams chats have you opened today? (just guess)" },
  { nl: "Hoeveel spreadsheets heb je deze week geopend?", en: "How many spreadsheets have you opened this week?" },
  { nl: "Hoeveel mappen staan er in je mailbox?", en: "How many folders are in your mailbox?" },
  { nl: "Hoeveel contacten staan er bij je favorieten op je telefoon?", en: "How many favourite contacts are on your phone?" },
  { nl: "Hoeveel afspraken staan er volgende week in je agenda?", en: "How many appointments are in your calendar next week?" },
  { nl: "Hoe vaak heb je deze week 'goed punt' gezegd? (gok maar)", en: "How often did you say 'good point' this week? (just guess)" },
  { nl: "Hoeveel minuten heb je vandaag naar muziek geluisterd?", en: "How many minutes have you listened to music today?" },
  { nl: "Hoeveel playlists heb je zelf gemaakt?", en: "How many playlists have you made yourself?" },
  { nl: "Hoeveel nummers staan er in je meest gedraaide playlist?", en: "How many songs are in your most-played playlist?" },
  { nl: "Hoeveel films heb je deze maand gekeken?", en: "How many films have you watched this month?" },
  { nl: "Hoeveel afleveringen van een serie heb je deze week gekeken?", en: "How many episodes of a series did you watch this week?" },
  { nl: "Hoeveel stukjes had de grootste puzzel die je ooit hebt gemaakt?", en: "How many pieces did the biggest jigsaw you ever finished have?" },
  { nl: "In hoeveel talen kun je 'dank je wel' zeggen?", en: "In how many languages can you say 'thank you'?" },
  { nl: "Hoeveel muziekinstrumenten heb je ooit geprobeerd te bespelen?", en: "How many musical instruments have you ever tried to play?" },
  { nl: "Op hoeveel scholen heb je in totaal gezeten?", en: "How many schools have you attended in total?" },
  { nl: "Hoeveel bijbaantjes heb je ooit gehad?", en: "How many side jobs have you ever had?" },
  { nl: "Hoe vaak heb je deze maand de trein genomen?", en: "How many times have you taken the train this month?" },
  { nl: "Hoe vaak heb je dit jaar gevlogen?", en: "How many times have you flown this year?" },
  { nl: "Hoeveel ijsjes heb je afgelopen zomer gegeten? (gok maar)", en: "How many ice creams did you eat last summer? (just guess)" },
  { nl: "Hoeveel stuks fruit heb je deze week gegeten?", en: "How many pieces of fruit have you eaten this week?" },
  { nl: "Hoeveel glazen water heb je vandaag gedronken?", en: "How many glasses of water have you had today?" },
  { nl: "Hoeveel minuten heb je gisteren gewandeld?", en: "How many minutes did you walk yesterday?" },
  { nl: "Hoe vaak heb je deze maand pizza gegeten?", en: "How many times have you eaten pizza this month?" },
  { nl: "Hoeveel soorten kaas liggen er in je koelkast?", en: "How many kinds of cheese are in your fridge?" },
  { nl: "Hoeveel repen chocola of zakken snoep liggen er in huis? (gok maar)", en: "How many chocolate bars or bags of sweets are in your home? (just guess)" },
  { nl: "Hoeveel cadeaus heb je dit jaar al gegeven?", en: "How many presents have you given so far this year?" },
  { nl: "Hoeveel kaarten heb je dit jaar per post verstuurd?", en: "How many cards have you sent by post this year?" },
  { nl: "Hoe vaak heb je deze week 'sorry' gezegd? (gok maar)", en: "How often did you say 'sorry' this week? (just guess)" },
  { nl: "Hoeveel minuten duurde je laatste douche?", en: "How many minutes did your last shower take?" },
  { nl: "Hoe laat ging je gisteren naar bed? (24-uurs, bv. 2330)", en: "What time did you go to bed last night? (24-hour, e.g. 2330)" },
  { nl: "Hoeveel stappen is het naar de dichtstbijzijnde koffieautomaat? (gok maar)", en: "How many steps to the nearest coffee machine? (just guess)" },
  { nl: "Hoeveel mensen zitten er nu binnen vijf meter van je?", en: "How many people are within five metres of you right now?" },
  { nl: "Hoeveel stoelen staan er rond je eettafel?", en: "How many chairs are around your dining table?" },
  { nl: "Hoeveel boeken staan er in je boekenkast? (gok maar)", en: "How many books are on your bookshelf? (just guess)" },
  { nl: "Hoeveel kledinghangers hangen er in je kast? (gok maar)", en: "How many clothes hangers are in your wardrobe? (just guess)" },
  { nl: "Hoeveel stickers zitten er op je laptop?", en: "How many stickers are on your laptop?" },
  { nl: "Hoeveel iconen staan er in je taakbalk?", en: "How many icons are in your taskbar?" },
  { nl: "Hoeveel extensies heb je in je browser?", en: "How many extensions are in your browser?" },
  { nl: "Hoeveel bladwijzers heb je in je browser? (gok maar)", en: "How many bookmarks are in your browser? (just guess)" },
  { nl: "Hoeveel abonnementen betaal je maandelijks (alle soorten)?", en: "How many subscriptions do you pay for monthly (any kind)?" },
  { nl: "Hoeveel munten zitten er nu in je portemonnee of broekzak?", en: "How many coins are in your wallet or pocket right now?" },
  { nl: "Hoeveel pasjes zitten er in je portemonnee?", en: "How many cards are in your wallet?" },
  { nl: "Hoe vaak heb je vandaag 'goedemorgen' gezegd?", en: "How many times have you said 'good morning' today?" },
  { nl: "Hoeveel cijfers van pi ken je uit je hoofd?", en: "How many digits of pi do you know by heart?" },
  { nl: "Hoeveel verjaardagen ken je uit je hoofd?", en: "How many birthdays do you know by heart?" },
  { nl: "Hoe vaak heb je deze week om een meme gelachen?", en: "How many times did you laugh at a meme this week?" },
  { nl: "Hoeveel paar schoenen staan er nu bij je voordeur?", en: "How many pairs of shoes are by your front door right now?" },
];

// -------- Elmo quips (with translations) --------
const ELMO_INTROS = {
  nl: [
    "Hoi! Elmo is er weer. Elmo gaat vandaag beslissen wie mag praten. Dat is vast heel spannend.",
    "Welkom terug. Elmo had eigenlijk andere plannen maar vooruit.",
    "Oh, alweer een check-in. Wat leuk. Zegt Elmo. Zonder sarcasme. Echt niet.",
    "Elmo is blij jullie te zien! Nou ja. Blij. Elmo is er in ieder geval.",
    "Hé team! Klaar om de volgorde aan Elmo over te laten? Prima, want Elmo doet het toch al.",
    "Goedemorgen. Of middag. Elmo heeft geen klok. Elmo heeft wel meningen.",
    "Elmo heeft deze week niks anders gedaan dan op deze check-in wachten. Echt waar. Ongeveer.",
    "Daar zijn jullie weer. Elmo had koffie gezet, maar Elmo drinkt geen koffie.",
    "Agenda vol, mailbox vol, maar voor Elmo is er altijd tijd. Toch?"
  ],
  en: [
    "Hi! Elmo is back. Elmo will decide who talks today. Very thrilling, no doubt.",
    "Welcome back. Elmo had other plans but fine.",
    "Oh, another check-in. How lovely. Says Elmo. Without sarcasm. Really.",
    "Elmo is happy to see you! Well. Happy. Elmo is at least here.",
    "Hey team! Ready to let Elmo pick the order? Great, because Elmo is doing it anyway.",
    "Good morning. Or afternoon. Elmo has no clock. Elmo does have opinions.",
    "Elmo did nothing this week but wait for this check-in. Really. Roughly.",
    "There you are again. Elmo made coffee, but Elmo doesn't drink coffee.",
    "Full calendar, full inbox, but there's always time for Elmo. Right?"
  ]
};

const ELMO_PARTICIPANTS = {
  nl: [
    "Wauw, selecteren. Heel geavanceerd. Elmo is onder de indruk.",
    "Tik tik tik. Iedereen die er is moet je aantikken. Niet te moeilijk hè?",
    "Elmo hoopt dat je niemand vergeet. Dat zou best awkward zijn.",
    "Denk eraan: alleen wie er écht is. Geen spookcollega's.",
    "Elmo vindt het schattig hoe serieus jullie dit nemen.",
    "Camera uit telt ook als aanwezig. Elmo is ruimdenkend.",
    "Wie er niet is, mag ook niet als laatste. Oneerlijk, vindt Elmo.",
    "Elmo telt mee. Eén, twee, veel. Goed genoeg."
  ],
  en: [
    "Wow, tapping. Very advanced. Elmo is impressed.",
    "Tap tap tap. Everyone present gets a tap. Not too hard right?",
    "Elmo hopes you don't forget anyone. That would be awkward.",
    "Remember: only who's actually here. No ghost colleagues.",
    "Elmo thinks it's cute how seriously you take this.",
    "Camera off still counts as present. Elmo is open-minded.",
    "Whoever's absent doesn't get to go last either. Unfair, says Elmo.",
    "Elmo is counting along. One, two, lots. Good enough."
  ]
};

const ELMO_QUESTIONS = {
  nl: [
    "Getallen. Leuk. Elmo kan tellen tot tien. Soms.",
    "Gewoon invullen. Niemand checkt het. Behalve Elmo. Maar Elmo vergeet het meteen.",
    "Eerlijk invullen hè. Of niet. Elmo ziet het toch niet.",
    "Kom op, zo moeilijk is het niet. Een getal. Eentje maar.",
    "Elmo wacht. Elmo heeft alle tijd. Elmo heeft letterlijk niets anders te doen.",
    "Gokken mag. Elmo gokt ook altijd. Kijk waar Elmo nu is.",
    "Negatieve getallen mogen ook. Elmo is niet zo moeilijk.",
    "Wie het langst nadenkt, wint niks. Even voor de duidelijkheid."
  ],
  en: [
    "Numbers. Fun. Elmo can count to ten. Sometimes.",
    "Just type it in. Nobody's checking. Except Elmo. But Elmo forgets immediately.",
    "Answer honestly, okay? Or don't. Elmo can't see anyway.",
    "Come on, it's not that hard. One number. Just one.",
    "Elmo waits. Elmo has all the time. Elmo has literally nothing else to do.",
    "Guessing is allowed. Elmo always guesses. Look where Elmo is now.",
    "Negative numbers are fine too. Elmo isn't fussy.",
    "Thinking the longest wins you nothing. Just so you know."
  ]
};

const ELMO_REVEAL = {
  nl: [
    "Klaar! Elmo gaat nu even liggen.",
    "Tada. Wie eerst mag is eerst. Wie laatst is is laatst. Logisch.",
    "De willekeur heeft gesproken. Oftewel: Elmo.",
    "En nu praten! Elmo luistert. Misschien.",
    "Veel succes met de check-in. Elmo duimt voor jullie. Zonder duimen.",
    "Niet mee eens? Klachten kunnen worden ingediend bij Elmo. Elmo leest ze niet.",
    "Nummer één: geen druk hoor. Iedereen kijkt alleen naar jou.",
    "Wie laatst is, heeft de meeste tijd om iets slims te bedenken. Graag gedaan."
  ],
  en: [
    "Done! Elmo is going to lie down now.",
    "Ta-da. Who's first is first. Who's last is last. Logical.",
    "Randomness has spoken. Aka: Elmo.",
    "Now talk! Elmo is listening. Maybe.",
    "Good luck with the check-in. Elmo's rooting for you. Without thumbs.",
    "Disagree? Complaints can be filed with Elmo. Elmo won't read them.",
    "Number one: no pressure. Everyone is just looking at you.",
    "Whoever's last has the most time to think of something clever. You're welcome."
  ]
};

const ELMO_SHUFFLE = {
  nl: [
    "Andere vraag? Prima. Elmo vindt alles best.",
    "Oh we kiezen weer. Typisch.",
    "Nieuwe vraag aangevraagd. Elmo bladert even.",
    "Was die vorige te moeilijk? Elmo oordeelt niet. Hardop.",
    "Nog eentje dan. Elmo heeft er genoeg.",
    "Kieskeurig team. Elmo noteert het."
  ],
  en: [
    "Another question? Fine. Elmo doesn't care.",
    "Oh we're re-picking. Typical.",
    "New question requested. Elmo flips through.",
    "Was the last one too hard? Elmo isn't judging. Out loud.",
    "One more then. Elmo has plenty.",
    "Picky team. Elmo is taking notes."
  ]
};

// -------- State --------
let selectedParticipants = [];
let currentQuestion = null; // {id, nl, en}
let candidateQuestions = []; // de vragen van deze week
let currentLang = 'nl';

// -------- Vragenschema: instellingen --------
// Elke week krijgt vaste vragen, berekend uit de datum. Daardoor ziet
// iedereen, op elk device, dezelfde vragen, zonder dat er iets wordt opgeslagen.
// Een vraag komt pas terug als de hele lijst één keer rond is geweest.
const SCHEDULE_START = '2026-10-19'; // maandag van week 1. Niet meer aanpassen na livegang.
const SCHEDULE_SEED = 20261019;      // bepaalt de (vaste) volgorde. Niet meer aanpassen.
const CANDIDATE_COUNT = 3;           // aantal vragen per week om uit te kiezen
const LOW_WEEKS = 8;                 // waarschuwing als er minder weken nieuwe vragen over zijn
const EXTRA_FILE = 'extra-questions.json'; // toegevoegde vragen in de GitHub-repo
const LS_EXTRA = 'checkin_extra_questions';

let extraFromFile = [];  // uit extra-questions.json (gedeeld)
let extraLocal = [];     // toegevoegd in deze browser, nog niet in GitHub

// -------- Elements --------
const $ = (id) => document.getElementById(id);

// -------- Init --------
document.addEventListener('DOMContentLoaded', async () => {
  // Restore language from localStorage
  const saved = safeGet('checkin_lang');
  if (saved === 'en' || saved === 'nl') currentLang = saved;
  applyLang();

  renderParticipants();
  injectQuestionStyles();
  injectManageButton();
  await loadQuestionState();
  pickNewQuestion();
  refreshElmoTexts();
});

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* privé-venster e.d. */ }
}
function tr(key, ...args) {
  const v = I18N[currentLang][key];
  return typeof v === 'function' ? v(...args) : v;
}

// -------- Language --------
function setLang(lang) {
  if (lang !== 'nl' && lang !== 'en') return;
  currentLang = lang;
  safeSet('checkin_lang', lang);
  applyLang();
  // Update dynamic bits
  refreshQuestionDisplay();
  refreshManageButton();
  if (isManageOpen()) renderManagePanel();
  refreshAnswersPlaceholders();
  refreshElmoTexts();
  refreshSelectionCount();
  // Update <html lang>
  document.documentElement.lang = lang;
}

function applyLang() {
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update lang-btn active state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang;
}

// -------- Navigation --------
function goTo(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(screenId).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToQuestion() {
  if (selectedParticipants.length < 2) return;
  renderAnswers();
  goTo('screen-question');
}

// -------- Participants --------
function renderParticipants() {
  const grid = $('participantsGrid');
  grid.innerHTML = '';
  TEAM.forEach((person, idx) => {
    const card = document.createElement('div');
    card.className = 'participant-card';
    card.style.setProperty('--card-color', person.color);
    card.dataset.name = person.name;
    card.innerHTML = `
      <div class="participant-check">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div class="participant-avatar">${person.name[0]}</div>
      <div class="participant-name">${person.name}</div>
    `;
    card.style.animationDelay = (idx * 60) + 'ms';
    card.addEventListener('click', () => toggleParticipant(person, card));
    grid.appendChild(card);
  });
}

function toggleParticipant(person, card) {
  const idx = selectedParticipants.findIndex(p => p.name === person.name);
  if (idx === -1) {
    selectedParticipants.push(person);
    card.classList.add('selected');
  } else {
    selectedParticipants.splice(idx, 1);
    card.classList.remove('selected');
  }
  refreshSelectionCount();
}

function refreshSelectionCount() {
  const count = selectedParticipants.length;
  const label = I18N[currentLang].selected;
  $('selectionCount').innerHTML = `${count} <span data-i18n="selected">${label}</span>`;
  $('toQuestionBtn').disabled = count < 2;
}

// -------- Questions --------
// Een vraag wordt herkend aan de Nederlandse tekst.
function questionId(q) {
  return String(q.nl).trim().toLowerCase().replace(/\s+/g, ' ');
}

// Vaste volgorde: de standaardvragen in een vaste, "willekeurige" volgorde,
// daarna de toegevoegde vragen in de volgorde waarin ze zijn toegevoegd.
// Belangrijk: verwijder of herschrijf geen vragen na livegang, want dan
// verschuift het schema. Toevoegen kan altijd (komt achteraan).
function seededShuffle(arr, seed) {
  let s = seed >>> 0;
  const rand = () => {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let _orderCache = null;
function questionOrder() {
  if (_orderCache) return _orderCache;
  const seen = new Set();
  const list = [];
  const add = (q) => {
    if (!q || !q.nl || !String(q.nl).trim()) return;
    const id = questionId(q);
    if (seen.has(id)) return;
    seen.add(id);
    list.push({ id, nl: String(q.nl).trim(), en: String(q.en || '').trim() || String(q.nl).trim() });
  };
  seededShuffle(QUESTIONS, SCHEDULE_SEED).forEach(add);
  extraFromFile.forEach(add);
  extraLocal.forEach(add);
  _orderCache = list;
  return list;
}
function invalidateOrder() { _orderCache = null; }

// Weeknummer in het schema (0 = eerste week), op basis van maandag als weekstart.
function scheduleWeek(date = new Date()) {
  const [y, m, d] = SCHEDULE_START.split('-').map(Number);
  const start = new Date(y, m - 1, d);
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffDays = Math.round((day - start) / 86400000);
  return Math.max(0, Math.floor(diffDays / 7));
}

function weekQuestions(week) {
  const order = questionOrder();
  const n = order.length;
  if (!n) return [];
  const count = Math.min(CANDIDATE_COUNT, n);
  const offset = week * CANDIDATE_COUNT;
  const result = [];
  for (let i = 0; i < count; i++) result.push(order[(offset + i) % n]);
  return result;
}

function scheduleInfo(week = scheduleWeek()) {
  const n = questionOrder().length;
  const offset = week * CANDIDATE_COUNT;
  const round = Math.floor(offset / n) + 1;
  // Hoeveel volle weken met nog nooit gebruikte vragen er na deze week nog over zijn
  const weeksLeft = round === 1 ? Math.max(0, Math.floor((n - offset - CANDIDATE_COUNT) / CANDIDATE_COUNT)) : 0;
  return { week, round, weeksLeft, total: n };
}

function weekMonday(week) {
  const [y, m, d] = SCHEDULE_START.split('-').map(Number);
  return new Date(y, m - 1, d + week * 7);
}

// --- Toegevoegde vragen laden/bewaren ---
async function loadQuestionState() {
  try {
    const res = await fetch(EXTRA_FILE + '?t=' + Date.now(), { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      extraFromFile = Array.isArray(data) ? data : (data.questions || []);
    }
  } catch (e) { /* bestand bestaat nog niet of app draait lokaal: geen probleem */ }

  try { extraLocal = JSON.parse(safeGet(LS_EXTRA) || '[]'); } catch (e) { extraLocal = []; }
  // Wat inmiddels in het GitHub-bestand staat, hoeft niet meer lokaal bewaard te worden
  const inFile = new Set(extraFromFile.filter(q => q && q.nl).map(questionId));
  extraLocal = extraLocal.filter(q => q && q.nl && !inFile.has(questionId(q)));
  safeSet(LS_EXTRA, JSON.stringify(extraLocal));
  invalidateOrder();
  refreshManageButton();
}

function addQuestions(list) {
  const existing = new Set(questionOrder().map(q => q.id));
  const fresh = [];
  list.forEach(q => {
    const id = questionId(q);
    if (existing.has(id)) return;
    existing.add(id);
    fresh.push({ nl: q.nl, en: q.en || '' });
  });
  if (!fresh.length) return 0;
  extraLocal = extraLocal.concat(fresh);
  safeSet(LS_EXTRA, JSON.stringify(extraLocal));
  invalidateOrder();
  refreshManageButton();
  renderCandidatePicker();
  return fresh.length;
}

function exportExtraQuestions() {
  const all = [...extraFromFile, ...extraLocal].filter(q => q && q.nl)
    .map(q => ({ nl: String(q.nl).trim(), en: String(q.en || '').trim() }));
  const data = {
    _info: 'Check-in Roulette: toegevoegde vragen. Upload dit bestand naar de root van de GitHub-repo. Alleen aanvullen, niet herschikken of verwijderen (anders verschuift het weekschema).',
    questions: all,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = EXTRA_FILE;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// --- Bulk-invoer verwerken ---
// Ondersteunt: plakken uit Excel (tab), "NL | EN", "NL;EN", .txt, .csv, .json
function parseBulk(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      const data = JSON.parse(trimmed);
      const arr = Array.isArray(data) ? data : (data.questions || []);
      return arr.map(q => typeof q === 'string' ? { nl: q, en: '' } : { nl: q.nl || '', en: q.en || '' })
        .filter(q => q.nl.trim());
    } catch (e) { /* geen geldige JSON: als tekst behandelen */ }
  }
  // Splitst een regel op een scheidingsteken, maar niet binnen "aanhalingstekens" (CSV)
  const splitQuoted = (line, sep) => {
    const out = [];
    let cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
        else inQ = !inQ;
      } else if (c === sep && !inQ) { out.push(cur); cur = ''; }
      else cur += c;
    }
    out.push(cur);
    return out;
  };
  return trimmed.split(/\r?\n/).map(line => {
    let parts;
    if (line.includes('\t')) parts = splitQuoted(line, '\t');
    else if (line.includes(' | ')) parts = line.split(' | ');
    else parts = splitQuoted(line, ';');
    const clean = (s) => (s || '').trim();
    return { nl: clean(parts[0]), en: clean(parts[1]) };
  })
  .filter(q => q.nl && !/^(nl|vraag|question|nederlands)$/i.test(q.nl)); // kopregel overslaan
}

function bulkPreview(text) {
  const parsed = parseBulk(text);
  const existing = new Set(questionOrder().map(q => q.id));
  const seen = new Set();
  let fresh = 0, dup = 0;
  parsed.forEach(q => {
    const id = questionId(q);
    if (existing.has(id) || seen.has(id)) dup++;
    else { fresh++; seen.add(id); }
  });
  return { parsed, fresh, dup };
}

// --- Vragen van deze week tonen en kiezen ---
function pickNewQuestion() {
  candidateQuestions = weekQuestions(scheduleWeek());
  if (!currentQuestion || !candidateQuestions.some(q => q.id === currentQuestion.id)) {
    currentQuestion = candidateQuestions[0] || null;
  }
  refreshQuestionDisplay();
}

function nextCandidate() {
  if (!candidateQuestions.length) return;
  const idx = candidateQuestions.findIndex(q => q.id === (currentQuestion && currentQuestion.id));
  currentQuestion = candidateQuestions[(idx + 1) % candidateQuestions.length];
  refreshQuestionDisplay();
}

function selectCandidate(idx) {
  if (!candidateQuestions[idx]) return;
  currentQuestion = candidateQuestions[idx];
  refreshQuestionDisplay();
}

function refreshQuestionDisplay() {
  if (!currentQuestion) return;
  const textEl = $('questionText');
  if (textEl) textEl.textContent = currentQuestion[currentLang];
  renderCandidatePicker();
}

function renderCandidatePicker() {
  const textEl = $('questionText');
  if (!textEl) return;
  let picker = $('questionPicker');
  if (!picker) {
    picker = document.createElement('div');
    picker.id = 'questionPicker';
    picker.className = 'q-picker';
    textEl.insertAdjacentElement('afterend', picker);
  }

  const info = scheduleInfo();
  const chips = candidateQuestions.map((q, i) => `
    <button type="button" class="q-chip${currentQuestion && q.id === currentQuestion.id ? ' active' : ''}" data-idx="${i}">
      ${escapeHtml(q[currentLang])}
    </button>`).join('');

  let status;
  if (info.round > 1) status = `<div class="q-remaining low">${tr('repeatInfo', info.round)}</div>`;
  else if (info.weeksLeft < LOW_WEEKS) status = `<div class="q-remaining low">${tr('lowWarning', info.weeksLeft)}</div>`;
  else status = `<div class="q-remaining">${tr('weekInfo', info.week + 1, info.weeksLeft)}</div>`;

  picker.innerHTML = `
    <div class="q-picker-label">${tr('pickLabel')}</div>
    <div class="q-chips">${chips}</div>
    ${status}`;

  picker.querySelectorAll('.q-chip').forEach(btn => {
    btn.addEventListener('click', () => selectCandidate(Number(btn.dataset.idx)));
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// --- Vragenbeheer-paneel ---
function injectManageButton() {
  if ($('manageQuestionsBtn')) return;
  const btn = document.createElement('button');
  btn.id = 'manageQuestionsBtn';
  btn.type = 'button';
  btn.className = 'q-manage-btn';
  btn.addEventListener('click', openManagePanel);
  document.body.appendChild(btn);
  refreshManageButton();
}

function refreshManageButton() {
  const btn = $('manageQuestionsBtn');
  if (!btn) return;
  const info = scheduleInfo();
  btn.textContent = tr('manageBtn');
  btn.classList.toggle('attention', info.round > 1 || info.weeksLeft < LOW_WEEKS || extraLocal.length > 0);
}

function isManageOpen() {
  return !!$('manageOverlay');
}

function openManagePanel() {
  if (isManageOpen()) return;
  const overlay = document.createElement('div');
  overlay.id = 'manageOverlay';
  overlay.className = 'q-overlay';
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeManagePanel(); });
  document.body.appendChild(overlay);
  renderManagePanel();
}

function closeManagePanel() {
  const o = $('manageOverlay');
  if (o) o.remove();
}

function renderManagePanel(message = '') {
  const overlay = $('manageOverlay');
  if (!overlay) return;
  const info = scheduleInfo();
  const fmt = (d) => d.toLocaleDateString(currentLang === 'nl' ? 'nl-NL' : 'en-GB', { day: 'numeric', month: 'short' });
  const upcoming = [0, 1, 2, 3].map(k => {
    const w = info.week + k;
    const qs = weekQuestions(w).map(q => `<li>${escapeHtml(q[currentLang])}</li>`).join('');
    return `<div class="q-week"><div class="q-week-date">${fmt(weekMonday(w))}${k === 0 ? ` · ${tr('thisWeek')}` : ''}</div><ul>${qs}</ul></div>`;
  }).join('');

  overlay.innerHTML = `
    <div class="q-panel" role="dialog" aria-modal="true">
      <div class="q-panel-head">
        <h2>${tr('manageTitle')}</h2>
        <button type="button" class="q-close" aria-label="${tr('close')}">×</button>
      </div>
      <p class="q-stats">${tr('statsLine', info.total, info.weeksLeft)}</p>
      ${info.round > 1 ? `<p class="q-warn">${tr('repeatInfo', info.round)}</p>`
        : info.weeksLeft < LOW_WEEKS ? `<p class="q-warn">${tr('lowWarning', info.weeksLeft)}</p>` : ''}

      <h3>${tr('bulkTitle')}</h3>
      <p class="q-help">${tr('bulkHelp')}</p>
      <textarea class="q-bulk" rows="6" placeholder="${escapeHtml(tr('bulkPlaceholder'))}"></textarea>
      <div class="q-row">
        <label class="q-file">${tr('bulkFile')}<input type="file" accept=".txt,.csv,.tsv,.json,text/plain,text/csv,application/json" hidden /></label>
        <button type="button" class="q-bulk-add" disabled>${tr('bulkBtn')}</button>
        <span class="q-bulk-msg">${escapeHtml(message)}</span>
      </div>

      <h3>${tr('exportTitle')}</h3>
      ${extraLocal.length ? `<p class="q-warn">${tr('unsaved', extraLocal.length)}</p>` : ''}
      <p class="q-help">${tr('exportHelp')}</p>
      <button type="button" class="q-export">${tr('exportBtn')}</button>

      <h3>${tr('scheduleTitle')}</h3>
      ${upcoming}
    </div>`;

  const textarea = overlay.querySelector('.q-bulk');
  const addBtn = overlay.querySelector('.q-bulk-add');
  const msg = overlay.querySelector('.q-bulk-msg');
  const updatePreview = () => {
    const p = bulkPreview(textarea.value);
    addBtn.disabled = p.fresh === 0;
    msg.textContent = textarea.value.trim() ? tr('bulkPreview', p.fresh, p.dup) : '';
  };
  textarea.addEventListener('input', updatePreview);
  overlay.querySelector('.q-file input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    textarea.value = await file.text();
    updatePreview();
  });
  addBtn.addEventListener('click', () => {
    const added = addQuestions(parseBulk(textarea.value));
    renderManagePanel(added ? tr('bulkDone', added) : tr('bulkNone'));
  });
  overlay.querySelector('.q-close').addEventListener('click', closeManagePanel);
  overlay.querySelector('.q-export').addEventListener('click', exportExtraQuestions);
}

function injectQuestionStyles() {
  if ($('questionManagerStyles')) return;
  const style = document.createElement('style');
  style.id = 'questionManagerStyles';
  style.textContent = `
    .q-picker { margin-top: 16px; text-align: left; }
    .q-picker-label { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; opacity: .7; margin-bottom: 8px; }
    .q-chips { display: flex; flex-direction: column; gap: 8px; }
    .q-chip { font: inherit; font-size: 14px; text-align: left; padding: 10px 14px; border-radius: 12px;
      border: 2px solid rgba(127,127,127,.35); background: transparent; color: inherit; cursor: pointer; }
    .q-chip:hover { border-color: rgba(127,127,127,.7); }
    .q-chip.active { border-color: #58EB81; background: rgba(88,235,129,.15); font-weight: 600; }
    .q-remaining { margin-top: 10px; font-size: 13px; opacity: .75; }
    .q-remaining.low { opacity: 1; color: #c0392b; font-weight: 600; }
    .q-manage-btn { position: fixed; left: 16px; bottom: 16px; z-index: 900; font: inherit; font-size: 13px;
      padding: 8px 12px; border-radius: 999px; border: 1px solid rgba(127,127,127,.4); background: #fff; color: #222;
      cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,.12); }
    .q-manage-btn.attention::after { content: ''; display: inline-block; width: 8px; height: 8px; margin-left: 6px;
      border-radius: 50%; background: #e74c3c; vertical-align: middle; }
    .q-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,.45); display: flex;
      align-items: center; justify-content: center; padding: 16px; }
    .q-panel { background: #fff; color: #222; border-radius: 16px; max-width: 600px; width: 100%; max-height: 90vh;
      overflow: auto; padding: 20px 22px; font-size: 14px; }
    .q-panel h2 { margin: 0; font-size: 20px; }
    .q-panel h3 { margin: 20px 0 8px; font-size: 15px; }
    .q-panel-head { display: flex; justify-content: space-between; align-items: center; }
    .q-close { font-size: 24px; background: none; border: none; cursor: pointer; color: inherit; }
    .q-stats { opacity: .75; margin: 6px 0 0; }
    .q-warn { color: #c0392b; font-weight: 600; margin: 6px 0; }
    .q-help { margin: 0 0 8px; opacity: .8; }
    .q-bulk { width: 100%; box-sizing: border-box; font: inherit; font-size: 13px; padding: 8px 10px;
      border-radius: 8px; border: 1px solid #ccc; resize: vertical; }
    .q-row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 8px; }
    .q-file, .q-bulk-add, .q-export { font: inherit; font-size: 13px; padding: 8px 14px; border-radius: 8px; cursor: pointer; }
    .q-file { border: 1px solid #ccc; background: #f5f5f5; }
    .q-bulk-add, .q-export { border: none; background: #222; color: #fff; }
    .q-bulk-add:disabled { opacity: .4; cursor: default; }
    .q-bulk-msg { font-size: 13px; opacity: .8; }
    .q-week { margin-bottom: 10px; }
    .q-week-date { font-size: 12px; font-weight: 600; opacity: .6; text-transform: uppercase; letter-spacing: .05em; }
    .q-week ul { margin: 4px 0 0; padding-left: 18px; }
  `;
  document.head.appendChild(style);
}

function shuffleQuestion() {
  const textEl = $('questionText');
  textEl.style.opacity = '0';
  textEl.style.transform = 'scale(0.95)';
  textEl.style.transition = 'all 0.2s ease';
  setTimeout(() => {
    nextCandidate();
    textEl.style.opacity = '1';
    textEl.style.transform = 'scale(1)';
    $('elmoFloatingBubbleQ').textContent = pickRandom(ELMO_SHUFFLE[currentLang]);
    showElmoBubble('q', 2500);
  }, 200);
}
// -------- Answers --------
function renderAnswers() {
  const list = $('answersList');
  list.innerHTML = '';
  const placeholder = I18N[currentLang].answerPlaceholder;
  selectedParticipants.forEach((p) => {
    const row = document.createElement('div');
    row.className = 'answer-row';
    row.innerHTML = `
      <div class="answer-avatar" style="background:${p.color}">${p.name[0]}</div>
      <div class="answer-name">${p.name}</div>
      <input type="number" class="answer-input" data-name="${p.name}"
             placeholder="${placeholder}" inputmode="decimal" step="any" />
    `;
    list.appendChild(row);
  });
  list.querySelectorAll('.answer-input').forEach(input => {
    input.addEventListener('input', validateAnswers);
  });
  validateAnswers();
}

function refreshAnswersPlaceholders() {
  const placeholder = I18N[currentLang].answerPlaceholder;
  document.querySelectorAll('.answer-input').forEach(i => i.placeholder = placeholder);
}

function validateAnswers() {
  const inputs = document.querySelectorAll('.answer-input');
  const allFilled = Array.from(inputs).every(i => i.value.trim() !== '' && !isNaN(parseFloat(i.value)));
  $('revealBtn').disabled = !allFilled;
}

// -------- Reveal --------
function reveal() {
  const inputs = document.querySelectorAll('.answer-input');
  const entries = Array.from(inputs).map(i => ({
    name: i.dataset.name,
    color: TEAM.find(t => t.name === i.dataset.name).color,
    value: parseFloat(i.value)
  }));

  const byValue = {};
  entries.forEach(e => {
    if (!byValue[e.value]) byValue[e.value] = [];
    byValue[e.value].push(e);
  });

  const sortedValues = Object.keys(byValue).map(Number).sort((a, b) => a - b);

  const ordered = [];
  sortedValues.forEach(v => {
    const group = shuffle(byValue[v]);
    const isTied = group.length > 1;
    group.forEach(e => ordered.push({ ...e, tied: isTied }));
  });

  renderRanking(ordered);
  $('revealQuestion').textContent = currentQuestion[currentLang];
  $('elmoFloatingBubbleR').textContent = pickRandom(ELMO_REVEAL[currentLang]);
  goTo('screen-reveal');
  setTimeout(() => showElmoBubble('r', 3500), 800);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderRanking(ordered) {
  const ol = $('ranking');
  ol.innerHTML = '';
  const tiedLabel = I18N[currentLang].tied;
  ordered.forEach((e, idx) => {
    const li = document.createElement('li');
    li.className = 'rank-item' + (idx === 0 ? ' first' : '');
    li.style.animationDelay = (idx * 120) + 'ms';
    const position = idx + 1;
    const ordinalIcon = idx === 0 ? '🎤' : '';
    li.innerHTML = `
      <div class="rank-number">${position}</div>
      <div>
        <div class="rank-name">${e.name} ${ordinalIcon}</div>
        ${e.tied ? `<span class="rank-tied">${tiedLabel}</span>` : ''}
      </div>
      <div class="rank-value">${formatValue(e.value)}</div>
    `;
    ol.appendChild(li);
  });
}

function formatValue(v) {
  if (Number.isInteger(v)) return v.toString();
  return v.toFixed(2).replace(/\.?0+$/, '');
}

// -------- Restart --------
function restart() {
  selectedParticipants = [];
  document.querySelectorAll('.participant-card.selected').forEach(c => c.classList.remove('selected'));
  refreshSelectionCount();
  pickNewQuestion();
  refreshElmoTexts();
  goTo('screen-intro');
}

function newQuestion() {
  nextCandidate();
  renderAnswers();
  goTo('screen-question');
}

// -------- Elmo bubbles --------
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function refreshElmoTexts() {
  if ($('elmoText')) $('elmoText').textContent = pickRandom(ELMO_INTROS[currentLang]);
  if ($('elmoFloatingBubbleP')) $('elmoFloatingBubbleP').textContent = pickRandom(ELMO_PARTICIPANTS[currentLang]);
  if ($('elmoFloatingBubbleQ')) $('elmoFloatingBubbleQ').textContent = pickRandom(ELMO_QUESTIONS[currentLang]);
  if ($('elmoFloatingBubbleR')) $('elmoFloatingBubbleR').textContent = pickRandom(ELMO_REVEAL[currentLang]);
}

const bubbleTimers = {};
function toggleElmoBubble(key) {
  const id = 'elmoFloatingBubble' + key.toUpperCase();
  const bubble = $(id);
  if (!bubble) return;
  if (bubble.classList.contains('show')) {
    bubble.classList.remove('show');
  } else {
    showElmoBubble(key, 3500);
  }
}

function showElmoBubble(key, duration = 3000) {
  const id = 'elmoFloatingBubble' + key.toUpperCase();
  const bubble = $(id);
  if (!bubble) return;
  bubble.classList.add('show');
  if (bubbleTimers[key]) clearTimeout(bubbleTimers[key]);
  bubbleTimers[key] = setTimeout(() => {
    bubble.classList.remove('show');
  }, duration);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeManagePanel();
});

document.addEventListener('click', (e) => {
  const card = e.target.closest('.participant-card');
  if (card && Math.random() < 0.25) showElmoBubble('p', 2500);
});
