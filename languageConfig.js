/**
 * TypingDost Universal Phonetic Language Configuration
 * All Indian and International languages operate in Smart Phonetic QWERTY mode.
 * Users type using standard English/Roman QWERTY keyboards with zero legacy script fonts required.
 */

const SUPPORTED_LANGUAGES = {
    'hindi': {
        code: 'hi',
        name: 'Hindi',
        nativeName: 'हिन्दी (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Hindi Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free online Hindi phonetic typing test. Type in English/Roman QWERTY alphabets (Hinglish) to test your typing speed and accuracy. Instant WPM certificate, zero install.',
        seoKeywords: ['hindi phonetic typing test', 'hindi typing in english alphabet', 'hinglish typing test', 'hindi qwerty typing test', 'hindi typing speed test online', 'free hindi typing certificate'],
        examContext: 'SSC CHSL, SSC CGL, RRB NTPC, High Court LDC, Delhi Police & Competitive Exams',
        pageUrl: 'hindi-typing-test/'
    },
    'bengali': {
        code: 'bn',
        name: 'Bengali',
        nativeName: 'বাংলা (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Bengali Phonetic Typing Test Online — Banglish QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Bengali phonetic typing test online. Type in English QWERTY alphabets (Banglish) to test your Bangla typing speed and accuracy. Instant WPM score & free PDF certificate.',
        seoKeywords: ['bengali phonetic typing test', 'banglish typing test', 'bangla typing in english letters', 'bangla qwerty typing test', 'bengali typing test online free', 'wbpsc typing practice'],
        examContext: 'WBPSC, West Bengal Police, Kolkata Courts, WB Secretariat',
        pageUrl: 'bengali-typing-test/'
    },
    'marathi': {
        code: 'mr',
        name: 'Marathi',
        nativeName: 'मराठी (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Marathi Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Marathi phonetic typing test online for MPSC, Talathi & Maharashtra exam preparation. Type fluently in Romanized English QWERTY letters. Instant WPM speed certificate.',
        seoKeywords: ['marathi phonetic typing test', 'marathi typing in english alphabet', 'marathi qwerty typing test', 'mpsc marathi typing practice', 'marathi typing test online free'],
        examContext: 'MPSC Clerk, Talathi Bharti, Bombay High Court, Zilla Parishad',
        pageUrl: 'marathi-typing-test/'
    },
    'tamil': {
        code: 'ta',
        name: 'Tamil',
        nativeName: 'தமிழ் (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Tamil Phonetic Typing Test Online — Tanglish QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Tamil phonetic typing test online. Type in English QWERTY alphabets (Tanglish) to test your Tamil typing speed and accuracy. Free verified PDF certificate.',
        seoKeywords: ['tamil phonetic typing test', 'tanglish typing test', 'tamil typing in english letters', 'tamil qwerty typing test', 'tamil typing speed test online', 'tnpsc typing practice'],
        examContext: 'TNPSC Group 4, Madras High Court, Tamil Nadu Police',
        pageUrl: 'tamil-typing-test/'
    },
    'telugu': {
        code: 'te',
        name: 'Telugu',
        nativeName: 'తెలుగు (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Telugu Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Telugu phonetic typing test online for APPSC, TSPSC & High Court exam prep. Type in English QWERTY alphabets to practice Telugu typing speed and get instant certificate.',
        seoKeywords: ['telugu phonetic typing test', 'telugu typing in english letters', 'telugu qwerty typing test', 'appsc telugu typing', 'tspsc typing test online free'],
        examContext: 'APPSC, TSPSC, Andhra & Telangana High Courts, District Courts',
        pageUrl: 'telugu-typing-test/'
    },
    'gujarati': {
        code: 'gu',
        name: 'Gujarati',
        nativeName: 'ગુજરાતી (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Gujarati Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Gujarati phonetic typing test online for GPSC, GSSSB, Binsachivalay Clerk & High Court. Practice typing in English QWERTY characters. Free verified certificate.',
        seoKeywords: ['gujarati phonetic typing test', 'gujarati typing in english alphabet', 'gujarati qwerty typing test', 'gsssb typing practice', 'gpsc typing test online free'],
        examContext: 'GSSSB CCE, GPSC, Gujarat High Court, Binsachivalay Clerk',
        pageUrl: 'gujarati-typing-test/'
    },
    'kannada': {
        code: 'kn',
        name: 'Kannada',
        nativeName: 'ಕನ್ನಡ (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Kannada Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Kannada phonetic typing test online for KPSC, Karnataka High Court, FDA, SDA. Type in English QWERTY alphabet. Instant WPM speed and accuracy certificate.',
        seoKeywords: ['kannada phonetic typing test', 'kannada typing in english letters', 'kannada qwerty typing test', 'kpsc kannada typing practice', 'kannada typing test online free'],
        examContext: 'KPSC, Karnataka High Court, FDA, SDA, District Courts',
        pageUrl: 'kannada-typing-test/'
    },
    'malayalam': {
        code: 'ml',
        name: 'Malayalam',
        nativeName: 'മലയാളം (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Malayalam Phonetic Typing Test Online — Manglish QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Malayalam phonetic typing test online for Kerala PSC, LDC, Secretariat Assistant. Practice in Manglish English QWERTY letters. Download verified certificate.',
        seoKeywords: ['malayalam phonetic typing test', 'manglish typing test', 'malayalam typing in english alphabet', 'kerala psc typing practice', 'malayalam qwerty typing test'],
        examContext: 'Kerala PSC, LDC, Secretariat Assistant, Kerala High Court',
        pageUrl: 'malayalam-typing-test/'
    },
    'odia': {
        code: 'or',
        name: 'Odia',
        nativeName: 'ଓଡ଼ିଆ (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Odia Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Odia phonetic typing test online for OSSC, OSSSC, Odisha High Court. Practice typing in English QWERTY alphabet with instant WPM score and free certificate.',
        seoKeywords: ['odia phonetic typing test', 'odia typing in english alphabet', 'odia qwerty typing test', 'ossc typing practice', 'osssc odia typing test online free'],
        examContext: 'OSSC, OSSSC Junior Clerk, Odisha High Court, RI, Amin',
        pageUrl: 'odia-typing-test/'
    },
    'punjabi': {
        code: 'pa',
        name: 'Punjabi',
        nativeName: 'ਪੰਜਾਬੀ (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Punjabi Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Punjabi phonetic typing test online for PSSSB, Punjab & Haryana High Court. Type in English QWERTY alphabets to practice Punjabi typing speed. Free verified certificate.',
        seoKeywords: ['punjabi phonetic typing test', 'punjabi typing in english letters', 'punjabi qwerty typing test', 'psssb punjabi typing practice', 'punjabi typing test online free'],
        examContext: 'PSSSB Clerk, Punjab & Haryana High Court, PSPCL, Punjab Police',
        pageUrl: 'punjabi-typing-test/'
    },
    'urdu': {
        code: 'ur',
        name: 'Urdu',
        nativeName: 'اردو (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Urdu Phonetic Typing Test Online — Roman Urdu QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Urdu phonetic typing test online. Type fluently in Roman Urdu English alphabets on a standard QWERTY keyboard. Test your WPM speed and get a free verified certificate.',
        seoKeywords: ['urdu phonetic typing test', 'roman urdu typing test', 'urdu typing in english alphabet', 'urdu qwerty typing test', 'urdu typing speed test online free'],
        examContext: 'State Urdu Academy, High Court Translator, Secretariat & Academic Typing Tests',
        pageUrl: 'urdu-typing-test/'
    },
    'assamese': {
        code: 'as',
        name: 'Assamese',
        nativeName: 'অসমীয়া (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Assamese Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Assamese phonetic typing test online for APSC, Gauhati High Court, Assam Police. Practice in English QWERTY alphabet and download your free verified typing certificate.',
        seoKeywords: ['assamese phonetic typing test', 'assamese typing in english letters', 'assamese qwerty typing test', 'apsc typing practice', 'assamese typing test online free'],
        examContext: 'APSC Junior Administrative Assistant, Gauhati High Court, Assam Secretariat',
        pageUrl: 'assamese-typing-test/'
    },
    'arabic': {
        code: 'ar',
        name: 'Arabic',
        nativeName: 'Arabic (Phonetic)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Arabic Phonetic Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Arabic phonetic typing test online. Type in Arabizi Roman letters on standard QWERTY keyboard. Check your WPM speed and accuracy with instant certificate.',
        seoKeywords: ['arabic phonetic typing test', 'arabizi typing test', 'arabic typing in english letters', 'arabic qwerty typing speed test online'],
        examContext: 'Global Arabic Translation & Data Entry Certification Tests',
        pageUrl: 'english-typing-test/'
    },
    'japanese': {
        code: 'ja',
        name: 'Japanese',
        nativeName: 'Japanese (Romaji)',
        googleFont: 'Space Grotesk',
        fontFallback: 'sans-serif',
        direction: 'ltr',
        requiresComplexLineHeight: false,
        lineHeight: 1.6,
        layouts: ['phonetic'],
        defaultLayout: 'phonetic',
        seoTitle: 'Japanese Romaji Typing Test Online — English QWERTY Typing Speed Test | TypingDost',
        seoDescription: 'Free Japanese Romaji phonetic typing test online. Type in standard English QWERTY characters. Master Japanese typing speed with instant verified PDF certificate.',
        seoKeywords: ['japanese romaji typing test', 'japanese typing in english alphabet', 'romaji typing speed test online free'],
        examContext: 'Global Japanese JLPT & Technical Documentation Typing Tests',
        pageUrl: 'english-typing-test/'
    }
};

const INDIC_PASSAGES = {
    'hindi': [
        "Bharat ek vishal aur vividhtapoorn desh hai. Yahan vibhinn dharmon, bhashaon aur sanskritiyon ke log miljul kar rehte hain. Humari ekta hi humari sabse badi taakat hai.",
        "Samay ka sadupyog karna safalta ki kunji hai. Jo vyakti apne samay ka sahi prabandhan karta hai, vah jeevan mein kisi bhi lakshya ko prapt kar sakta hai.",
        "Technology ne humare jeevan ko bahut aasan bana diya hai. Aaj ke digital yug mein sanchar aur soochanaon ka aadan-pradan kuch hi secondon mein ho jata hai."
    ],
    'bengali': [
        "Bharat ekti bishal ebong boichitramoy desh. Ekhane bibhinno dharmo, bhasha ebong sanskritir manush ekshonge baash kore. Amader ektay amader shobcheye boro shokti.",
        "Shomoyer shodbabyabohar kora shafolyer chabikathi. Je byakti tar shomoyer shothik porichalona kore, shey jeevane jekono lokkhyo orjon korte pare.",
        "Projukti amader jeevanke onek shohoj kore tulechhe. Ajker digital yuge jogajog ebong tothyer aadan-prodan koek second-er moddhyei hoye jaay."
    ],
    'marathi': [
        "Bharat ek vishal aani vividhtapoorna desh aahe. Yethe vividh dharma, bhasha aani sanskritinche lok ekatra rahtaat. Aapli ekta hich aapli sarvaat mothi shakti aahe.",
        "Velecha sadupyog karne hi yashachi gurukilli aahe. Jo vyakti aaplya veleche yogya vyavasthapan karto, to jeevanat kontehi dhyey saadhya karu shakto.",
        "Tantradnyanane aaple jeevan khoop sope kele aahe. Aajchya digital yugaat sampreshan aani mahitichi devanghevan kahi secondatach hote."
    ],
    'tamil': [
        "Indhiya oru parandha mattrum panmugaththanmai konda naadu. Ingu palveru madhangal, mozhigal mattrum kalaachaarangalai serndha makkal inaindhu vaazhgindranar.",
        "Nerathai sariyaaga payanpaduthuvathu vetriyin thiravukolagum. Than nerathai sariyaaga nirvagikkum oruvaraala vaazhkkaiyil endha ilakkaiyum adaiya mudiyum.",
        "Thozhilnutpam namadhu vaazhkkaiyai migavum elidhaakkiyulladhu. Indraiya digital yugathil thagaval thodarbu sila nodigalil nadakkiradhu."
    ],
    'telugu': [
        "Bharatadesam oka visalamaina mariyu vaividhyamaina desam. Ikkada vividha mathalu, bhashalu mariyu samskrutulaku chendina prajalu kalisi jeevistunnaru.",
        "Samayanni sarigga viniyoginchukovadam vijayaniki tala chevi. Ee vyakthaithe tana samayanni sarigga nirvahistado, atadu jeevithamlo ediina lakshyanni sadhinchavachu.",
        "Sanketika vijnanam mana jeevithanni chala sulabham chesindi. Nati digital yugamlo samacharam marpudi konni secondlalo jarugutondi."
    ],
    'gujarati': [
        "Bharat ek vishal ane vividhtapoorn desh chhe. Ahi vividh dharmo, bhashao ane sanskritina loko mali-mili ne rahe chhe. Aapni ekta ja aapni sauthi moti shakti chhe.",
        "Samayno sadupyog karvo e safaltani chavi chhe. Je vyakti potana samaynu sachu aayojan kare chhe, te jeevanma koipan lakshya haansal kari shake chhe.",
        "Technology-e aapna jeevanne ghano saral banavi didho chhe. Aajna digital yugma sandeshavyavahar ane mahitini aple matra ketlik secondoma thai jaay chhe."
    ],
    'kannada': [
        "Bharata ondu vishalavada mathu vaividhyamaya desha. Illi vividha dharmagalu, bhashegalu mathu samskrutigala janaru koodi baaluthiddare.",
        "Samayada sadupyoga madoode yashassina heggadilu. Yaaru thamma samayavannu sariyagi nirvahisuttaro, avaru jeevanadalli yavude guri talapabahudu.",
        "Tantrajnana namma jeevanavannu thumba saralavagiside. Ivathina digital yugadalli samparka mathu mahithi vinimaya kelave secondgalalli aaguttade."
    ],
    'malayalam': [
        "Bharatham oru valiya vividhamaya raajyamaanu. Ivide vividha madhangalum, bhaashakalum, samskaaragalum ulla aalukal chernnu kazhiyukayaanu.",
        "Samayam nannaayi upayogikkunnathaaanu vijayathinte thaakkol. Thante samayam sariyaayi manage cheyyunna aalkku jeevithathil ethoru lakshyavum nedaanaakum.",
        "Technology nammude jeevitham valare eluppamaakki maati. Innathe digital yugathil vivarangal panka vekkunnath kure secondil nadakkunnu."
    ],
    'odia': [
        "Bharat gote bishal ebam bibidhtapoorna desh. Eithi bibhinna dharma, bhasha o sanskrutira loka ekathi basabaasa karanti. Aamara ekataa hi aamara sabuthu bada shakti.",
        "Samayara sadupyog kariba safalatara chabikathi. Jie nija samayara sathik porichalana kare, se jeevanare jekounasi lakshya haasal karipariba.",
        "Prayuktyabidya aama jeevanaku bahut sahaja karideichi. Aajira digital jugare jogajoga ebam suchana aadana-pradana kichi secondre hoijaae."
    ],
    'punjabi': [
        "Bharat ik vishal ate vibhinnta vala desh hai. Ithe vakh-vakh dharman, bhashavan ate sabhyacharan de lok mil-jul ke rehnde han. Sadi ekta hi sadi sab ton vaddi taakat hai.",
        "Samey di sahi varton safalta di kunji hai. Jehda vyakti apne samey da sahi prabandhan karda hai, oh jeevan vich kise vi teche nu prapt kar sakda hai.",
        "Technology ne sadi zindagi nu bahut asaan bana ditta hai. Aaj de digital yug vich sanchar ate jankari da aadan-pradan kujh hi secondan vich ho janda hai."
    ],
    'urdu': [
        "Bharat ek wasee aur mutanawwa mulk hai. Yahan mukhtalif mazahib, zubano aur saqafaton ke log mil jul kar rehte hain. Humari ittehad hi humari sab se badi taaqat hai.",
        "Waqt ka sahi istemal kamyaabi ki kunji hai. Jo shakhs apne waqt ka sahi intezam karta hai, woh zindagi mein kisi bhi maqsad ko haasil kar sakta hai.",
        "Technology ne humari zindagi ko bahut asaan bana diya hai. Aaj ke digital daur mein mawasilat aur maloomat ka tabadla chand secondon mein ho jata hai."
    ],
    'assamese': [
        "Bharat ekon bishal aru boichitrapurna desh. Eeyat bibhinna dharma, bhasha aru sanskritir lokashokole ekelega baash kore. Aamar ektayei aamar aatatyatkoi dangor shakti.",
        "Samayar sot byabahar koratuye hoise safalatar chaabikathi. Ji byaktiey nijor samayar sathik byabasthapana kore, teo jeevanot jikono lokhyat upaneet hobo paare.",
        "Prajuktiye aamar jeevan bohut shohoj kori tulise. Aazir digital jugot jogajog aru tathyor aadan-prodan maatro keisecondmanor bhitorotei hoi jaay."
    ],
    'arabic': [
        "Taallam al-kitabah al-saree-ah ala lawhat al-mafatih maharah asasiah fi asrina al-raqami al-hadeeth.",
        "Al-tadreeb al-mustamirr kulla yawm yuhassin sur-atak wa diqqatak fi al-kitabah bi-thiqah tammah.",
        "Haafidh ala asaabi-ak fi saff al-irtikaz li-tahqeeq aala kafa-ah athna-a ikhtibaaraat al-tiba-ah."
    ],
    'japanese': [
        "Mainichi no renshuu de typing sokudo ga sukoshizutsu hayaku narimasu.",
        "Kihon no home position wo mamoru to seikaku ni utsu koto ga dekimasu.",
        "Akiramezu ni tsuzukeru koto ga joutatsu no hiketsu desu."
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUPPORTED_LANGUAGES, INDIC_PASSAGES };
}
