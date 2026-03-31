// Keys only — display labels live in strings.js under categoryLabels
export const CATEGORY_KEYS = [
  'greetings', 'numbers', 'colors', 'family', 'food',
  'phrases', 'time', 'body', 'verbs', 'adjectives',
];

export const SOURCE_LANGUAGES = {
  en: 'English',
  ru: 'Русский',
};

// Card structure:
// { id, cat, hy, translit, translations: { en, ru }, example, examples: { en, ru } }
export const FLASHCARDS = [
  // ── Greetings & Politeness ──────────────────────────────────────────
  { id: 'g01', cat: 'greetings', hy: 'Բարև',             translit: 'Barev',
    translations: { en: 'Hello',                    ru: 'Привет' },
    example: 'Բարև, ինչպե՞ս ես։',
    examples:    { en: 'Hello, how are you?',       ru: 'Привет, как дела?' } },

  { id: 'g02', cat: 'greetings', hy: 'Բարև Ձեզ',         translit: 'Barev Dzez',
    translations: { en: 'Hello (formal)',            ru: 'Здравствуйте' },
    example: 'Բարև Ձեզ, պ՛արոն։',
    examples:    { en: 'Hello, sir (formal).',       ru: 'Здравствуйте, господин.' } },

  { id: 'g03', cat: 'greetings', hy: 'Ողջույն',           translit: 'Voghchuyn',
    translations: { en: 'Greetings / Hi',            ru: 'Приветствие / Привет' },
    example: 'Ողջույն բոլորին։',
    examples:    { en: 'Greetings to everyone.',     ru: 'Привет всем.' } },

  { id: 'g04', cat: 'greetings', hy: 'Ցտեսություն',       translit: "Ts'tesut'yun",
    translations: { en: 'Goodbye',                   ru: 'До свидания' },
    example: 'Ցտեսություն, մինչ վաղը։',
    examples:    { en: 'Goodbye, see you tomorrow.', ru: 'До свидания, до завтра.' } },

  { id: 'g05', cat: 'greetings', hy: 'Շնորհակալություն', translit: "Shnorhakal'ut'yun",
    translations: { en: 'Thank you',                 ru: 'Спасибо' },
    example: 'Շնորհակալություն օգնության համար։',
    examples:    { en: 'Thank you for the help.',    ru: 'Спасибо за помощь.' } },

  { id: 'g06', cat: 'greetings', hy: 'Խնդրեմ',           translit: 'Khndrem',
    translations: { en: "Please / You're welcome",  ru: 'Пожалуйста' },
    example: 'Խնդրեմ, նստե՛ք։',
    examples:    { en: 'Please, sit down.',          ru: 'Пожалуйста, садитесь.' } },

  { id: 'g07', cat: 'greetings', hy: 'Կներեք',           translit: "Knerek'",
    translations: { en: 'Excuse me / Sorry',         ru: 'Извините / Простите' },
    example: 'Կներեք, որտե՞ղ է կայարանը։',
    examples:    { en: 'Excuse me, where is the station?', ru: 'Извините, где станция?' } },

  { id: 'g08', cat: 'greetings', hy: 'Այո',              translit: 'Ayo',
    translations: { en: 'Yes',                       ru: 'Да' },
    example: 'Այո, ճիշտ է։',
    examples:    { en: 'Yes, that is correct.',      ru: 'Да, это верно.' } },

  { id: 'g09', cat: 'greetings', hy: 'Ոչ',              translit: "Voch'",
    translations: { en: 'No',                        ru: 'Нет' },
    example: 'Ոչ, ես չգիտեմ։',
    examples:    { en: 'No, I do not know.',         ru: 'Нет, я не знаю.' } },

  { id: 'g10', cat: 'greetings', hy: 'Ինչպե՞ս ես',      translit: "Inch'pes es",
    translations: { en: 'How are you?',              ru: 'Как дела?' },
    example: 'Ինչպե՞ս ես, ընկե՛ր։',
    examples:    { en: 'How are you, friend?',       ru: 'Как дела, друг?' } },

  { id: 'g11', cat: 'greetings', hy: 'Լավ եմ',          translit: 'Lav em',
    translations: { en: 'I am fine',                 ru: 'Я в порядке' },
    example: 'Շնորհակալություն, լավ եմ։',
    examples:    { en: 'Thank you, I am fine.',      ru: 'Спасибо, я в порядке.' } },

  { id: 'g12', cat: 'greetings', hy: 'Բարի գալուստ',   translit: 'Bari galust',
    translations: { en: 'Welcome',                   ru: 'Добро пожаловать' },
    example: 'Բարի գալուստ Հայաստան։',
    examples:    { en: 'Welcome to Armenia.',        ru: 'Добро пожаловать в Армению.' } },

  { id: 'g13', cat: 'greetings', hy: 'Բարի գիշեր',     translit: 'Bari gisher',
    translations: { en: 'Good night',                ru: 'Спокойной ночи' },
    example: 'Բարի գիշեր, հանգիստ քուն։',
    examples:    { en: 'Good night, sleep well.',    ru: 'Спокойной ночи, приятных снов.' } },

  { id: 'g14', cat: 'greetings', hy: 'Բարի լույս',      translit: 'Bari luys',
    translations: { en: 'Good morning',              ru: 'Доброе утро' },
    example: 'Բարի լույս, ե՛ս եմ։',
    examples:    { en: "Good morning, it's me.",     ru: 'Доброе утро, это я.' } },

  { id: 'g15', cat: 'greetings', hy: 'Ներողություն',    translit: "Neroghut'yun",
    translations: { en: 'Apology / Forgiveness',     ru: 'Извинение / Прощение' },
    example: 'Ներողություն կխնդրեմ։',
    examples:    { en: 'I will ask for forgiveness.', ru: 'Я попрошу прощения.' } },

  // ── Numbers ─────────────────────────────────────────────────────────
  { id: 'n01', cat: 'numbers', hy: 'Զրո',    translit: 'Zero',
    translations: { en: 'Zero',    ru: 'Ноль' },
    example: 'Ջերմաստիճանը զրո է։',
    examples:    { en: 'The temperature is zero.',       ru: 'Температура ноль.' } },

  { id: 'n02', cat: 'numbers', hy: 'Մեկ',    translit: 'Mek',
    translations: { en: 'One',     ru: 'Один' },
    example: 'Ես ունեմ մեկ շուն։',
    examples:    { en: 'I have one dog.',                ru: 'У меня одна собака.' } },

  { id: 'n03', cat: 'numbers', hy: 'Երկու',  translit: 'Yerku',
    translations: { en: 'Two',     ru: 'Два' },
    example: 'Երկու նարինջ, խնդրեմ։',
    examples:    { en: 'Two oranges, please.',           ru: 'Два апельсина, пожалуйста.' } },

  { id: 'n04', cat: 'numbers', hy: 'Երեք',   translit: "Yerek'",
    translations: { en: 'Three',   ru: 'Три' },
    example: 'Երեք օր անց եմ գնում։',
    examples:    { en: 'I am leaving in three days.',    ru: 'Я уезжаю через три дня.' } },

  { id: 'n05', cat: 'numbers', hy: 'Չորս',   translit: "Ch'ors",
    translations: { en: 'Four',    ru: 'Четыре' },
    example: 'Ձմեռն ունի չորս ամիս։',
    examples:    { en: 'Winter has four months.',        ru: 'Зима длится четыре месяца.' } },

  { id: 'n06', cat: 'numbers', hy: 'Հինգ',   translit: 'Hing',
    translations: { en: 'Five',    ru: 'Пять' },
    example: 'Հինգ րոպե կսպասեմ։',
    examples:    { en: 'I will wait five minutes.',      ru: 'Я подожду пять минут.' } },

  { id: 'n07', cat: 'numbers', hy: 'Վեց',    translit: "Vets'",
    translations: { en: 'Six',     ru: 'Шесть' },
    example: 'Վեց ժամ քնեցի։',
    examples:    { en: 'I slept six hours.',             ru: 'Я спал шесть часов.' } },

  { id: 'n08', cat: 'numbers', hy: 'Յոթ',    translit: "Yot'",
    translations: { en: 'Seven',   ru: 'Семь' },
    example: 'Շաբաթն ունի յոթ օր։',
    examples:    { en: 'The week has seven days.',       ru: 'В неделе семь дней.' } },

  { id: 'n09', cat: 'numbers', hy: 'Ութ',    translit: "Ut'",
    translations: { en: 'Eight',   ru: 'Восемь' },
    example: 'Ութ ժամ աշխատեցի։',
    examples:    { en: 'I worked eight hours.',          ru: 'Я работал восемь часов.' } },

  { id: 'n10', cat: 'numbers', hy: 'Ինը',    translit: 'Iny',
    translations: { en: 'Nine',    ru: 'Девять' },
    example: 'Ինը հոգի կա սրճարանում։',
    examples:    { en: 'There are nine people in the café.', ru: 'В кафе девять человек.' } },

  { id: 'n11', cat: 'numbers', hy: 'Տաս',    translit: 'Tas',
    translations: { en: 'Ten',     ru: 'Десять' },
    example: 'Տաս րոպե հետո գամ։',
    examples:    { en: "I'll come in ten minutes.",      ru: 'Приду через десять минут.' } },

  { id: 'n12', cat: 'numbers', hy: 'Քսան',   translit: "K'san",
    translations: { en: 'Twenty',  ru: 'Двадцать' },
    example: 'Ես քսան տարեկան եմ։',
    examples:    { en: 'I am twenty years old.',         ru: 'Мне двадцать лет.' } },

  { id: 'n13', cat: 'numbers', hy: 'Հարյուր', translit: 'Haryur',
    translations: { en: 'Hundred', ru: 'Сто' },
    example: 'Հարյուր դրամ ունեմ։',
    examples:    { en: 'I have one hundred drams.',      ru: 'У меня сто драм.' } },

  { id: 'n14', cat: 'numbers', hy: 'Հազար',  translit: 'Hazar',
    translations: { en: 'Thousand', ru: 'Тысяча' },
    example: 'Մեկ հազար մետր բարձրություն։',
    examples:    { en: 'One thousand meters altitude.',  ru: 'Высота одна тысяча метров.' } },

  { id: 'n15', cat: 'numbers', hy: 'Առաջին', translit: 'Arajin',
    translations: { en: 'First',   ru: 'Первый' },
    example: 'Առաջին հարկ, խնդրեմ։',
    examples:    { en: 'First floor, please.',           ru: 'Первый этаж, пожалуйста.' } },

  // ── Colors ──────────────────────────────────────────────────────────
  { id: 'c01', cat: 'colors', hy: 'Կարմիր',         translit: 'Karmir',
    translations: { en: 'Red',     ru: 'Красный' },
    example: 'Վարդը կարմիր է։',
    examples:    { en: 'The rose is red.',              ru: 'Роза красная.' } },

  { id: 'c02', cat: 'colors', hy: 'Կանաչ',          translit: "Kanach'",
    translations: { en: 'Green',   ru: 'Зелёный' },
    example: 'Ծառերը կանաչ են գարնանը։',
    examples:    { en: 'The trees are green in spring.', ru: 'Деревья зелёные весной.' } },

  { id: 'c03', cat: 'colors', hy: 'Կապույտ',        translit: 'Kapuyt',
    translations: { en: 'Blue',    ru: 'Синий / Голубой' },
    example: 'Երկինքը կապույտ է։',
    examples:    { en: 'The sky is blue.',              ru: 'Небо голубое.' } },

  { id: 'c04', cat: 'colors', hy: 'Դեղին',          translit: 'Deghin',
    translations: { en: 'Yellow',  ru: 'Жёлтый' },
    example: 'Արևը դեղին է։',
    examples:    { en: 'The sun is yellow.',            ru: 'Солнце жёлтое.' } },

  { id: 'c05', cat: 'colors', hy: 'Սպիտակ',         translit: 'Spitak',
    translations: { en: 'White',   ru: 'Белый' },
    example: 'Ձյունը սպիտակ է։',
    examples:    { en: 'The snow is white.',            ru: 'Снег белый.' } },

  { id: 'c06', cat: 'colors', hy: 'Սև',             translit: 'Sev',
    translations: { en: 'Black',   ru: 'Чёрный' },
    example: 'Կատուն սև է։',
    examples:    { en: 'The cat is black.',             ru: 'Кот чёрный.' } },

  { id: 'c07', cat: 'colors', hy: 'Նարնջագույն',    translit: 'Narnjagoyn',
    translations: { en: 'Orange',  ru: 'Оранжевый' },
    example: 'Նարինջը նարնջագույն է։',
    examples:    { en: 'The orange is orange.',         ru: 'Апельсин оранжевый.' } },

  { id: 'c08', cat: 'colors', hy: 'Մանուշակագույն', translit: 'Manushakagoyn',
    translations: { en: 'Purple',  ru: 'Фиолетовый' },
    example: 'Ծաղիկը մանուշակագույն է։',
    examples:    { en: 'The flower is purple.',         ru: 'Цветок фиолетовый.' } },

  { id: 'c09', cat: 'colors', hy: 'Վարդագույն',     translit: 'Vardagoyn',
    translations: { en: 'Pink',    ru: 'Розовый' },
    example: 'Շապիկը վարդագույն է։',
    examples:    { en: 'The shirt is pink.',            ru: 'Рубашка розовая.' } },

  { id: 'c10', cat: 'colors', hy: 'Շագանակագույն',  translit: 'Shaganachagoyn',
    translations: { en: 'Brown',   ru: 'Коричневый' },
    example: 'Արջը շագանակագույն է։',
    examples:    { en: 'The bear is brown.',            ru: 'Медведь коричневый.' } },

  // ── Family ──────────────────────────────────────────────────────────
  { id: 'f01', cat: 'family', hy: 'Մայր',    translit: 'Mayr',
    translations: { en: 'Mother',             ru: 'Мать' },
    example: 'Իմ մայրը բժիշկ է։',
    examples:    { en: 'My mother is a doctor.',        ru: 'Моя мама — врач.' } },

  { id: 'f02', cat: 'family', hy: 'Հայր',    translit: 'Hayr',
    translations: { en: 'Father',             ru: 'Отец' },
    example: 'Հայրս տանն է։',
    examples:    { en: 'My father is at home.',         ru: 'Мой папа дома.' } },

  { id: 'f03', cat: 'family', hy: 'Եղբայր', translit: 'Yeghbayr',
    translations: { en: 'Brother',            ru: 'Брат' },
    example: 'Ես ունեմ երկու եղբայր։',
    examples:    { en: 'I have two brothers.',          ru: 'У меня два брата.' } },

  { id: 'f04', cat: 'family', hy: 'Քույր',   translit: "K'uyr",
    translations: { en: 'Sister',             ru: 'Сестра' },
    example: 'Քույրս Երևանում է ապրում։',
    examples:    { en: 'My sister lives in Yerevan.',   ru: 'Моя сестра живёт в Ереване.' } },

  { id: 'f05', cat: 'family', hy: 'Տատ',     translit: 'Tat',
    translations: { en: 'Grandmother',        ru: 'Бабушка' },
    example: 'Տատս լավ է եփում։',
    examples:    { en: 'My grandmother cooks well.',    ru: 'Моя бабушка хорошо готовит.' } },

  { id: 'f06', cat: 'family', hy: 'Պապ',     translit: 'Pap',
    translations: { en: 'Grandfather',        ru: 'Дедушка' },
    example: 'Պապս 80 տարեկան է։',
    examples:    { en: 'My grandfather is 80 years old.', ru: 'Моему дедушке 80 лет.' } },

  { id: 'f07', cat: 'family', hy: 'Որդի',    translit: 'Vordi',
    translations: { en: 'Son',                ru: 'Сын' },
    example: 'Իմ որդին 5 տարեկան է։',
    examples:    { en: 'My son is 5 years old.',        ru: 'Моему сыну 5 лет.' } },

  { id: 'f08', cat: 'family', hy: 'Դուստր',  translit: 'Dustr',
    translations: { en: 'Daughter',           ru: 'Дочь' },
    example: 'Դուստրս դպրոց է գնում։',
    examples:    { en: 'My daughter goes to school.',   ru: 'Моя дочь ходит в школу.' } },

  { id: 'f09', cat: 'family', hy: 'Ամուսին', translit: 'Amusin',
    translations: { en: 'Husband / Spouse',   ru: 'Муж / Супруг' },
    example: 'Ամուսինս աշխատում է։',
    examples:    { en: 'My husband is working.',        ru: 'Мой муж работает.' } },

  { id: 'f10', cat: 'family', hy: 'Կին',     translit: 'Kin',
    translations: { en: 'Wife / Woman',       ru: 'Жена / Женщина' },
    example: 'Կինս ուրախ է։',
    examples:    { en: 'My wife is happy.',             ru: 'Моя жена счастлива.' } },

  { id: 'f11', cat: 'family', hy: 'Ընկեր',   translit: "Ynk'er",
    translations: { en: 'Friend',             ru: 'Друг' },
    example: 'Նա իմ լավ ընկերն է։',
    examples:    { en: 'He is my good friend.',         ru: 'Он мой хороший друг.' } },

  { id: 'f12', cat: 'family', hy: 'Երեխա',   translit: 'Yerekha',
    translations: { en: 'Child',              ru: 'Ребёнок' },
    example: 'Երեխան խաղում է։',
    examples:    { en: 'The child is playing.',         ru: 'Ребёнок играет.' } },

  // ── Food & Drink ─────────────────────────────────────────────────────
  { id: 'fd01', cat: 'food', hy: 'Հաց',       translit: "Hats'",
    translations: { en: 'Bread',              ru: 'Хлеб' },
    example: 'Ես հաց եմ ուտում։',
    examples:    { en: 'I am eating bread.',            ru: 'Я ем хлеб.' } },

  { id: 'fd02', cat: 'food', hy: 'Ջուր',       translit: 'Jur',
    translations: { en: 'Water',              ru: 'Вода' },
    example: 'Ջուր կուզե՞ք։',
    examples:    { en: 'Would you like water?',         ru: 'Хотите воды?' } },

  { id: 'fd03', cat: 'food', hy: 'Սուրճ',      translit: 'Surj',
    translations: { en: 'Coffee',             ru: 'Кофе' },
    example: 'Հայկական սուրճ, խնդրեմ։',
    examples:    { en: 'Armenian coffee, please.',      ru: 'Армянский кофе, пожалуйста.' } },

  { id: 'fd04', cat: 'food', hy: 'Թեյ',        translit: "T'ey",
    translations: { en: 'Tea',                ru: 'Чай' },
    example: 'Ես թեյ եմ սիրում։',
    examples:    { en: 'I like tea.',                   ru: 'Я люблю чай.' } },

  { id: 'fd05', cat: 'food', hy: 'Միս',        translit: 'Mis',
    translations: { en: 'Meat',               ru: 'Мясо' },
    example: 'Ես շատ միս չեմ ուտում։',
    examples:    { en: 'I do not eat much meat.',       ru: 'Я не ем много мяса.' } },

  { id: 'fd06', cat: 'food', hy: 'Ձուկ',       translit: 'Dzuk',
    translations: { en: 'Fish',               ru: 'Рыба' },
    example: 'Ձուկը թարմ է։',
    examples:    { en: 'The fish is fresh.',            ru: 'Рыба свежая.' } },

  { id: 'fd07', cat: 'food', hy: 'Բանջարեղեն', translit: 'Banjareghen',
    translations: { en: 'Vegetables',         ru: 'Овощи' },
    example: 'Բանջարեղենն օգտակար է։',
    examples:    { en: 'Vegetables are healthy.',       ru: 'Овощи полезны.' } },

  { id: 'fd08', cat: 'food', hy: 'Մրգեր',      translit: 'Mrger',
    translations: { en: 'Fruits',             ru: 'Фрукты' },
    example: 'Ես մրգեր եմ սիրում։',
    examples:    { en: 'I like fruits.',                ru: 'Я люблю фрукты.' } },

  { id: 'fd09', cat: 'food', hy: 'Պանիր',      translit: 'Panir',
    translations: { en: 'Cheese',             ru: 'Сыр' },
    example: 'Հայկական պանիրը համեղ է։',
    examples:    { en: 'Armenian cheese is delicious.', ru: 'Армянский сыр вкусный.' } },

  { id: 'fd10', cat: 'food', hy: 'Կաթ',        translit: "Kat'",
    translations: { en: 'Milk',               ru: 'Молоко' },
    example: 'Ես ամեն օր կաթ եմ խմում։',
    examples:    { en: 'I drink milk every day.',       ru: 'Я пью молоко каждый день.' } },

  { id: 'fd11', cat: 'food', hy: 'Ձու',        translit: 'Dzu',
    translations: { en: 'Egg',                ru: 'Яйцо' },
    example: 'Ձուն ամուր եփված է։',
    examples:    { en: 'The egg is hard-boiled.',       ru: 'Яйцо сварено вкрутую.' } },

  { id: 'fd12', cat: 'food', hy: 'Թթու',       translit: "T't'u",
    translations: { en: 'Pickles / Sour',     ru: 'Маринады / Кислый' },
    example: 'Թթուն շատ թթու է։',
    examples:    { en: 'The pickle is very sour.',      ru: 'Маринад очень кислый.' } },

  { id: 'fd13', cat: 'food', hy: 'Մածուն',     translit: "Mats'un",
    translations: { en: 'Yogurt (Armenian)',   ru: 'Мацун (армянский йогурт)' },
    example: 'Մածունն Հայաստանում ազգային ուտեստ է։',
    examples:    { en: 'Matzoon is a national food in Armenia.', ru: 'Мацун — национальный продукт Армении.' } },

  { id: 'fd14', cat: 'food', hy: 'Խաշ',        translit: 'Khash',
    translations: { en: 'Khash (bone soup)',   ru: 'Хаш (суп из костей)' },
    example: 'Խաշ ենք ուտում ձմռանը։',
    examples:    { en: 'We eat khash in winter.',       ru: 'Мы едим хаш зимой.' } },

  { id: 'fd15', cat: 'food', hy: 'Գինի',       translit: 'Gini',
    translations: { en: 'Wine',               ru: 'Вино' },
    example: 'Հայկական գինին հայտնի է։',
    examples:    { en: 'Armenian wine is famous.',      ru: 'Армянское вино знаменито.' } },

  // ── Daily Phrases ────────────────────────────────────────────────────
  { id: 'p01', cat: 'phrases', hy: 'Ես չեմ հասկանում',        translit: "Yes ch'em haskanum",
    translations: { en: "I don't understand",      ru: 'Я не понимаю' },
    example: 'Կներեք, ես չեմ հասկանում։',
    examples:    { en: "Sorry, I don't understand.", ru: 'Извините, я не понимаю.' } },

  { id: 'p02', cat: 'phrases', hy: 'Կրկնե՛ք',                 translit: "Krknek'",
    translations: { en: 'Please repeat',           ru: 'Повторите, пожалуйста' },
    example: 'Կրկնե՛ք, խնդրեմ։',
    examples:    { en: 'Please repeat.',            ru: 'Повторите, пожалуйста.' } },

  { id: 'p03', cat: 'phrases', hy: 'Դուք խոսու՞մ եք հայերեն', translit: "Duk' khossum ek' hayeren",
    translations: { en: 'Do you speak Armenian?',  ru: 'Вы говорите по-армянски?' },
    example: 'Դուք խոսու՞մ եք հայերեն, թե անգլերեն։',
    examples:    { en: 'Do you speak Armenian or English?', ru: 'Вы говорите по-армянски или по-английски?' } },

  { id: 'p04', cat: 'phrases', hy: 'Ես հայերեն եմ սովորում',  translit: 'Yes hayeren em sovorvum',
    translations: { en: 'I am learning Armenian',  ru: 'Я учу армянский' },
    example: 'Ես հայերեն եմ սովորում դպրոցում։',
    examples:    { en: 'I am learning Armenian at school.', ru: 'Я учу армянский в школе.' } },

  { id: 'p05', cat: 'phrases', hy: 'Ո՞րտեղ',                  translit: "Vort'egh",
    translations: { en: 'Where?',                  ru: 'Где?' },
    example: 'Ո՞րտեղ է հյուրանոցը։',
    examples:    { en: 'Where is the hotel?',       ru: 'Где гостиница?' } },

  { id: 'p06', cat: 'phrases', hy: 'Ե՞րբ',                    translit: 'Yerb',
    translations: { en: 'When?',                   ru: 'Когда?' },
    example: 'Ե՞րբ է ավտոբուսը։',
    examples:    { en: 'When is the bus?',          ru: 'Когда автобус?' } },

  { id: 'p07', cat: 'phrases', hy: 'Ինչպե՞ս',                 translit: "Inch'pes",
    translations: { en: 'How?',                    ru: 'Как?' },
    example: 'Ինչպե՞ս գնամ կայարան։',
    examples:    { en: 'How do I get to the station?', ru: 'Как добраться до станции?' } },

  { id: 'p08', cat: 'phrases', hy: 'Ի՞նչ',                    translit: "Inch'",
    translations: { en: 'What?',                   ru: 'Что?' },
    example: 'Ի՞նչ ես ուզում։',
    examples:    { en: 'What do you want?',         ru: 'Что ты хочешь?' } },

  { id: 'p09', cat: 'phrases', hy: 'Ո՞վ',                     translit: 'Vov',
    translations: { en: 'Who?',                    ru: 'Кто?' },
    example: 'Ո՞վ է նա։',
    examples:    { en: 'Who is he/she?',            ru: 'Кто это?' } },

  { id: 'p10', cat: 'phrases', hy: 'Ի՞նչ արժե',               translit: "Inch' arzhe",
    translations: { en: 'How much does it cost?',  ru: 'Сколько стоит?' },
    example: 'Ի՞նչ արժե սա։',
    examples:    { en: 'How much does this cost?',  ru: 'Сколько это стоит?' } },

  { id: 'p11', cat: 'phrases', hy: 'Ես սիրում եմ',            translit: 'Yes sirum em',
    translations: { en: 'I love / I like',         ru: 'Я люблю' },
    example: 'Ես սիրում եմ Հայաստանը։',
    examples:    { en: 'I love Armenia.',           ru: 'Я люблю Армению.' } },

  { id: 'p12', cat: 'phrases', hy: 'Ես ուզում եմ',            translit: 'Yes uzum em',
    translations: { en: 'I want',                  ru: 'Я хочу' },
    example: 'Ես ուզում եմ ուտել։',
    examples:    { en: 'I want to eat.',            ru: 'Я хочу есть.' } },

  // ── Time & Days ──────────────────────────────────────────────────────
  { id: 't01', cat: 'time', hy: 'Այսօր',      translit: 'Aysor',
    translations: { en: 'Today',     ru: 'Сегодня' },
    example: 'Այսօր եղանակը լավ է։',
    examples:    { en: 'The weather is nice today.',    ru: 'Сегодня хорошая погода.' } },

  { id: 't02', cat: 'time', hy: 'Վաղը',       translit: 'Vaghn',
    translations: { en: 'Tomorrow',  ru: 'Завтра' },
    example: 'Վաղը կգամ։',
    examples:    { en: 'I will come tomorrow.',         ru: 'Я приду завтра.' } },

  { id: 't03', cat: 'time', hy: 'Երեկ',       translit: 'Yerek',
    translations: { en: 'Yesterday', ru: 'Вчера' },
    example: 'Երեկ անձրև եկավ։',
    examples:    { en: 'It rained yesterday.',          ru: 'Вчера шёл дождь.' } },

  { id: 't04', cat: 'time', hy: 'Հիմա',       translit: 'Hima',
    translations: { en: 'Now',       ru: 'Сейчас' },
    example: 'Ես հիմա պատրաստ եմ։',
    examples:    { en: 'I am ready now.',               ru: 'Я готов сейчас.' } },

  { id: 't05', cat: 'time', hy: 'Ժամ',        translit: 'Zham',
    translations: { en: 'Hour / Clock', ru: 'Час / Часы' },
    example: 'Ժամը քանի՞սն է։',
    examples:    { en: 'What time is it?',              ru: 'Который час?' } },

  { id: 't06', cat: 'time', hy: 'Րոպե',       translit: 'Rope',
    translations: { en: 'Minute',    ru: 'Минута' },
    example: 'Հինգ րոպե կսպասեմ։',
    examples:    { en: 'I will wait five minutes.',     ru: 'Я подожду пять минут.' } },

  { id: 't07', cat: 'time', hy: 'Օր',         translit: 'Or',
    translations: { en: 'Day',       ru: 'День' },
    example: 'Ամեն օր ես սովորում եմ։',
    examples:    { en: 'Every day I study.',            ru: 'Каждый день я учусь.' } },

  { id: 't08', cat: 'time', hy: 'Շաբաթ',      translit: "Shabat'",
    translations: { en: 'Week',      ru: 'Неделя' },
    example: 'Մեկ շաբաթ հետո կտեսնվենք։',
    examples:    { en: 'We will meet in a week.',       ru: 'Увидимся через неделю.' } },

  { id: 't09', cat: 'time', hy: 'Ամիս',       translit: 'Amis',
    translations: { en: 'Month',     ru: 'Месяц' },
    example: 'Ես մեկ ամիս Երևանում էի։',
    examples:    { en: 'I was in Yerevan for one month.', ru: 'Я был в Ереване один месяц.' } },

  { id: 't10', cat: 'time', hy: 'Տարի',       translit: 'Tari',
    translations: { en: 'Year',      ru: 'Год' },
    example: 'Անցած տարի լավ էր։',
    examples:    { en: 'Last year was good.',           ru: 'Прошлый год был хорошим.' } },

  { id: 't11', cat: 'time', hy: 'Երկուշաբթի', translit: 'Yerkushabti',
    translations: { en: 'Monday',    ru: 'Понедельник' },
    example: 'Երկուշաբթին նոր սկիզբ է։',
    examples:    { en: 'Monday is a new beginning.',    ru: 'Понедельник — новое начало.' } },

  { id: 't12', cat: 'time', hy: 'Ուրբաթ',     translit: "Urbat'",
    translations: { en: 'Friday',    ru: 'Пятница' },
    example: 'Ուրբաթն իմ սիրած օրն է։',
    examples:    { en: 'Friday is my favorite day.',    ru: 'Пятница — мой любимый день.' } },

  { id: 't13', cat: 'time', hy: 'Կիրակի',     translit: 'Kiraki',
    translations: { en: 'Sunday',    ru: 'Воскресенье' },
    example: 'Կիրակի հանգստի օր է։',
    examples:    { en: 'Sunday is a rest day.',         ru: 'Воскресенье — выходной.' } },

  // ── Body Parts ───────────────────────────────────────────────────────
  { id: 'b01', cat: 'body', hy: 'Գլուխ',  translit: 'Glukh',
    translations: { en: 'Head',    ru: 'Голова' },
    example: 'Գլուխս ցավում է։',
    examples:    { en: 'My head hurts.',               ru: 'У меня болит голова.' } },

  { id: 'b02', cat: 'body', hy: 'Աչք',    translit: "Ach'k'",
    translations: { en: 'Eye',     ru: 'Глаз' },
    example: 'Նա կապույտ աչքեր ունի։',
    examples:    { en: 'She has blue eyes.',            ru: 'У неё голубые глаза.' } },

  { id: 'b03', cat: 'body', hy: 'Ականջ',  translit: 'Akanj',
    translations: { en: 'Ear',     ru: 'Ухо' },
    example: 'Ականջներս ցավում են։',
    examples:    { en: 'My ears hurt.',                 ru: 'У меня болят уши.' } },

  { id: 'b04', cat: 'body', hy: 'Բերան',  translit: 'Beran',
    translations: { en: 'Mouth',   ru: 'Рот' },
    example: 'Բերանդ բաց արա։',
    examples:    { en: 'Open your mouth.',              ru: 'Открой рот.' } },

  { id: 'b05', cat: 'body', hy: 'Ձեռք',   translit: "Dzerrk'",
    translations: { en: 'Hand',    ru: 'Рука' },
    example: 'Ձեռքերդ լվա։',
    examples:    { en: 'Wash your hands.',              ru: 'Вымой руки.' } },

  { id: 'b06', cat: 'body', hy: 'Ոտք',    translit: "Votk'",
    translations: { en: 'Foot / Leg', ru: 'Нога' },
    example: 'Ոտքս ցավում է։',
    examples:    { en: 'My leg hurts.',                 ru: 'У меня болит нога.' } },

  { id: 'b07', cat: 'body', hy: 'Սիրտ',   translit: 'Sirt',
    translations: { en: 'Heart',   ru: 'Сердце' },
    example: 'Սիրտը ուժեղ է բաբախում։',
    examples:    { en: 'The heart is beating strongly.', ru: 'Сердце бьётся сильно.' } },

  { id: 'b08', cat: 'body', hy: 'Մեջք',   translit: "Mejk'",
    translations: { en: 'Back',    ru: 'Спина' },
    example: 'Մեջքս ցավում է։',
    examples:    { en: 'My back hurts.',                ru: 'У меня болит спина.' } },

  { id: 'b09', cat: 'body', hy: 'Քիթ',    translit: "K'it'",
    translations: { en: 'Nose',    ru: 'Нос' },
    example: 'Քիթս հոսում է։',
    examples:    { en: 'My nose is running.',           ru: 'У меня течёт нос.' } },

  { id: 'b10', cat: 'body', hy: 'Մազ',    translit: 'Maz',
    translations: { en: 'Hair',    ru: 'Волосы' },
    example: 'Մազերս կարճ են։',
    examples:    { en: 'My hair is short.',             ru: 'У меня короткие волосы.' } },

  // ── Common Verbs ─────────────────────────────────────────────────────
  { id: 'v01', cat: 'verbs', hy: 'Գնալ',   translit: 'Gnal',
    translations: { en: 'To go',            ru: 'Идти / Ехать' },
    example: 'Ես ուզում եմ գնալ տուն։',
    examples:    { en: 'I want to go home.',            ru: 'Я хочу идти домой.' } },

  { id: 'v02', cat: 'verbs', hy: 'Գալ',    translit: 'Gal',
    translations: { en: 'To come',          ru: 'Приходить' },
    example: 'Արի՛ ինձ մոտ։',
    examples:    { en: 'Come to me.',                   ru: 'Иди ко мне.' } },

  { id: 'v03', cat: 'verbs', hy: 'Ուտել',  translit: 'Utel',
    translations: { en: 'To eat',           ru: 'Есть / Кушать' },
    example: 'Ես ուտել ուզում եմ։',
    examples:    { en: 'I want to eat.',                ru: 'Я хочу есть.' } },

  { id: 'v04', cat: 'verbs', hy: 'Խմել',   translit: 'Khmel',
    translations: { en: 'To drink',         ru: 'Пить' },
    example: 'Ջուր խմի՛ ամեն օր։',
    examples:    { en: 'Drink water every day.',        ru: 'Пей воду каждый день.' } },

  { id: 'v05', cat: 'verbs', hy: 'Խոսել',  translit: 'Khosel',
    translations: { en: 'To speak',         ru: 'Говорить' },
    example: 'Ես հայերեն եմ խոսում։',
    examples:    { en: 'I speak Armenian.',             ru: 'Я говорю по-армянски.' } },

  { id: 'v06', cat: 'verbs', hy: 'Լսել',   translit: 'Lsel',
    translations: { en: 'To listen / hear', ru: 'Слушать / Слышать' },
    example: 'Լսի՛ ինձ։',
    examples:    { en: 'Listen to me.',                 ru: 'Слушай меня.' } },

  { id: 'v07', cat: 'verbs', hy: 'Տեսնել', translit: 'Tesnel',
    translations: { en: 'To see',           ru: 'Видеть' },
    example: 'Ես լեռ եմ տեսնում։',
    examples:    { en: 'I can see the mountain.',       ru: 'Я вижу гору.' } },

  { id: 'v08', cat: 'verbs', hy: 'Կարդալ', translit: 'Kardal',
    translations: { en: 'To read',          ru: 'Читать' },
    example: 'Ես գիրք եմ կարդում։',
    examples:    { en: 'I am reading a book.',          ru: 'Я читаю книгу.' } },

  { id: 'v09', cat: 'verbs', hy: 'Գրել',   translit: 'Grel',
    translations: { en: 'To write',         ru: 'Писать' },
    example: 'Ես նամակ եմ գրում։',
    examples:    { en: 'I am writing a letter.',        ru: 'Я пишу письмо.' } },

  { id: 'v10', cat: 'verbs', hy: 'Սիրել',  translit: 'Sirel',
    translations: { en: 'To love',          ru: 'Любить' },
    example: 'Ես սիրում եմ Հայաստանը։',
    examples:    { en: 'I love Armenia.',               ru: 'Я люблю Армению.' } },

  { id: 'v11', cat: 'verbs', hy: 'Աշխատել', translit: 'Ashkhatel',
    translations: { en: 'To work',          ru: 'Работать' },
    example: 'Ես ամեն օր աշխատում եմ։',
    examples:    { en: 'I work every day.',             ru: 'Я работаю каждый день.' } },

  { id: 'v12', cat: 'verbs', hy: 'Քնել',   translit: "K'nel",
    translations: { en: 'To sleep',         ru: 'Спать' },
    example: 'Ես ուշ եմ քնել ուզում։',
    examples:    { en: 'I want to sleep late.',         ru: 'Я хочу поспать подольше.' } },

  { id: 'v13', cat: 'verbs', hy: 'Բացել',  translit: 'Batsel',
    translations: { en: 'To open',          ru: 'Открывать' },
    example: 'Բա՛ց դուռը։',
    examples:    { en: 'Open the door.',                ru: 'Открой дверь.' } },

  { id: 'v14', cat: 'verbs', hy: 'Փակել',  translit: "P'akel",
    translations: { en: 'To close',         ru: 'Закрывать' },
    example: 'Փա՛կ պատուհանը։',
    examples:    { en: 'Close the window.',             ru: 'Закрой окно.' } },

  // ── Adjectives ───────────────────────────────────────────────────────
  { id: 'a01', cat: 'adjectives', hy: 'Մեծ',      translit: 'Mets',
    translations: { en: 'Big / Great',      ru: 'Большой / Великий' },
    example: 'Երևանը մեծ քաղաք է։',
    examples:    { en: 'Yerevan is a big city.',        ru: 'Ереван — большой город.' } },

  { id: 'a02', cat: 'adjectives', hy: 'Փոքր',     translit: "P'ok'r",
    translations: { en: 'Small',            ru: 'Маленький' },
    example: 'Սա փոքր տուն է։',
    examples:    { en: 'This is a small house.',        ru: 'Это маленький дом.' } },

  { id: 'a03', cat: 'adjectives', hy: 'Լավ',      translit: 'Lav',
    translations: { en: 'Good',             ru: 'Хороший' },
    example: 'Դա լավ գաղափար է։',
    examples:    { en: 'That is a good idea.',          ru: 'Это хорошая идея.' } },

  { id: 'a04', cat: 'adjectives', hy: 'Վատ',      translit: 'Vat',
    translations: { en: 'Bad',              ru: 'Плохой' },
    example: 'Եղանակը վատ է այսօր։',
    examples:    { en: 'The weather is bad today.',     ru: 'Сегодня плохая погода.' } },

  { id: 'a05', cat: 'adjectives', hy: 'Շատ',      translit: 'Shat',
    translations: { en: 'Very / Many',      ru: 'Очень / Много' },
    example: 'Շատ շնորհակալություն։',
    examples:    { en: 'Thank you very much.',          ru: 'Большое спасибо.' } },

  { id: 'a06', cat: 'adjectives', hy: 'Քիչ',      translit: "K'ich'",
    translations: { en: 'A little / Few',   ru: 'Немного / Мало' },
    example: 'Ես քիչ-քիչ հայերեն գիտեմ։',
    examples:    { en: 'I know a little Armenian.',     ru: 'Я знаю немного армянского.' } },

  { id: 'a07', cat: 'adjectives', hy: 'Նոր',      translit: 'Nor',
    translations: { en: 'New',              ru: 'Новый' },
    example: 'Ունեմ նոր հեռախոս։',
    examples:    { en: 'I have a new phone.',           ru: 'У меня новый телефон.' } },

  { id: 'a08', cat: 'adjectives', hy: 'Հին',      translit: 'Hin',
    translations: { en: 'Old',              ru: 'Старый' },
    example: 'Սա հին եկեղեցի է։',
    examples:    { en: 'This is an old church.',        ru: 'Это старая церковь.' } },

  { id: 'a09', cat: 'adjectives', hy: 'Գեղեցիկ', translit: "Geghetsi k'",
    translations: { en: 'Beautiful',        ru: 'Красивый' },
    example: 'Հայաստանը շատ գեղեցիկ է։',
    examples:    { en: 'Armenia is very beautiful.',    ru: 'Армения очень красивая.' } },

  { id: 'a10', cat: 'adjectives', hy: 'Ուժեղ',    translit: 'Uzhegh',
    translations: { en: 'Strong',           ru: 'Сильный' },
    example: 'Նա ուժեղ մարդ է։',
    examples:    { en: 'He is a strong man.',           ru: 'Он сильный человек.' } },

  { id: 'a11', cat: 'adjectives', hy: 'Հեշտ',     translit: 'Hesht',
    translations: { en: 'Easy',             ru: 'Лёгкий' },
    example: 'Հայերենը հեշտ չէ, բայց հնարավոր է։',
    examples:    { en: "Armenian is not easy, but it's possible.", ru: 'Армянский непростой, но можно выучить.' } },

  { id: 'a12', cat: 'adjectives', hy: 'Դժվար',    translit: 'Dzhvar',
    translations: { en: 'Difficult',        ru: 'Трудный / Сложный' },
    example: 'Սա դժվար հարց է։',
    examples:    { en: 'This is a difficult question.', ru: 'Это сложный вопрос.' } },
];

export const STORAGE_KEY_FLASHCARDS = 'armenian_flashcard_progress';
