// Immediate early URL-based Language Detection (Synchronous before any render)
(function() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const pathname = window.location.pathname.toLowerCase();
        let detected = null;
        if (pathname.includes('tamil-typing-test')) detected = 'tamil';
        else if (pathname.includes('hindi-typing-test')) detected = 'hindi';
        else if (pathname.includes('marathi-typing-test')) detected = 'marathi';
        else if (pathname.includes('bengali-typing-test')) detected = 'bengali';
        else if (pathname.includes('telugu-typing-test')) detected = 'telugu';
        else if (pathname.includes('gujarati-typing-test')) detected = 'gujarati';
        else if (pathname.includes('kannada-typing-test')) detected = 'kannada';
        else if (pathname.includes('malayalam-typing-test')) detected = 'malayalam';
        else if (pathname.includes('odia-typing-test')) detected = 'odia';
        else if (pathname.includes('punjabi-typing-test')) detected = 'punjabi';
        else if (pathname.includes('assamese-typing-test')) detected = 'assamese';
        else if (pathname.includes('urdu-typing-test')) detected = 'urdu';
        else if (pathname.includes('hinglish-typing-test')) detected = 'hinglish';
        else if (pathname.includes('english-typing-test')) detected = 'english';
        
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang) detected = urlLang.toLowerCase();

        if (detected) {
            try { localStorage.setItem('typingDostLang', detected); } catch(e){}
        }
    }
})();

const lessons = {
    sentences: [
        "Programming is the art of algorithm design and the craft of debugging errant code.",
        "A journey of a thousand miles begins with a single step, but typing fast requires practice.",
        "The quick brown fox jumps over the lazy dog repeatedly until it masters the keyboard perfectly.",
        "In the cyberpunk future, your typing speed might literally save your digital life.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Beautiful design and smooth animations make users want to interact with the interface more often.",
        "Consistency is the key to improving your words per minute and overall accuracy without any interruptions.",
        "JavaScript is the duct tape of the internet, holding together the fabric of the web strongly.",
        "Focus on accuracy first, and the speed will naturally follow with muscle memory gradually.",
        "Every keystroke brings you closer to becoming a true master of the digital realm, so keep going!",
        "The glow of the mechanical keyboard lights up the dark room as the coder enters the zone of deep focus.",
        "A mechanical blue switch makes a satisfying click with every keystroke, declaring war on silent typists.",
        "Debugging is like being the detective in a crime movie where you are also the murderer.",
        "The cyber cafe was filled with the rhythmic sound of mechanical keys clacking away into the late night.",
        "If at first you do not succeed, call it version one point zero and launch a massive marketing campaign.",
        "A keyboard is a weapon of digital creation, capable of building entire worlds with a few lines of code.",
        "The glitch in the mainframe turned all system fonts into comic sans, causing absolute chaos in the network.",
        "My mechanical keyboard sounds like a machine gun to anyone sitting in a ten-mile radius of my desk.",
        "High speed typing is not just about moving fast, it is about maintaining a rhythm like a jazz drummer.",
        "Under the neon lights of Neo-Tokyo, the rogue developer cracked the final passcode with seconds to spare.",
        "There are two ways to write error-free code; only the third way works perfectly under pressure.",
        "A fast typist does not look at the keys, they let their fingers dance freely across the cybernetic board."
    ],
    homerow_toprow: [
        "the red forest was here to tell you that he had high power",
        "she said that they should look for the gold that was left here",
        "please try to write letters daily to helper who is at the gate",
        "keep your eyes off the road as you type with high speed as well",
        "just do your work today as you did yesterday for a great start"
    ],
    homerow_bottomrow: [
        "glad dads call all black cabs as class hands scan small vans",
        "sad man had a small bag and a black mask at a glass mall",
        "shall blank flags hang as a small clan sang a sad saga",
        "a bad man can smash a glass flask and slash a black bag",
        "sad lads sang as glad hands slam black cans and small bags"
    ],
    toprow_bottomrow: [
        "remember to enter your correct number on your computer",
        "every writer memory return in winter time yet you try to write",
        "my computer query print correct percent output in no time",
        "you try to run our new computer route to prevent current worry"
    ],
    allrows: [
        "The quick brown fox jumps over the lazy dog perfectly.",
        "Pack my box with five dozen liquor jugs for the party.",
        "Sphinx of black quartz, judge my vow with great pride.",
        "How vexingly quick daft zebras jump over the brick wall.",
        "Two driven jocks help fax my big quiz to the cyber base."
    ],
    easy: [
        "cat dog run cup fly key boy toy pig cow",
        "red blue pink gray tree book home boat",
        "fish milk rain snow wind sand rock pond",
        "walk talk jump run play sing song game",
        "neon glow fast cool calm soft warm cold",
        "code hack geek tech file link text word",
        "disk chip card port slot data page line grid",
        "fire water wind sun star moon sky land",
        "good fine nice glad love smile grin face",
        "time date hour year week day noon night",
        "open close take give keep hold send find",
        "key tape game mode test dost play flow",
        "easy soft loud quiet deaf speak hear walk",
        "step jump hop skip leap glide race dash"
    ],
    story: [
        "In a quiet forest, a tiny squirrel named Pip decided to climb the tallest oak tree. Branches swayed in the cool wind, but Pip kept climbing higher. At the top, he saw the entire valley glowing under the warm golden sunset.",
        "Deep beneath the ocean, a small submarine illuminated the dark abyss. Schools of glowing jellyfish floated like stars in the midnight sky. The captain smiled as they discovered ancient ruins covered in colorful coral reef.",
        "The old library was filled with the smell of paper and leather. Clara turned the pages of a dusty book, looking for a forgotten spell. Suddenly, a soft blue light emerged from the letters, lighting up her curious eyes.",
        "Through the rain-slicked streets of New Neo City, Akira rode his hoverbike. Neon signs reflected in the puddles like shattered glass. He had only ten minutes to deliver the data drive to the rebel base before midnight.",
        "The neon sign of the ramen shop flickered as Ryu sat in the corner, his fingers flying across a customized cyberdeck. He wasn't just coding; he was rewriting the security protocols of the city's power grid. With every click of his linear switches, a block of the city went dark. By the time he took his first sip of warm broth, the mission was accomplished.",
        "Deep within the silicon valleys of the digital grid, a legendary AI known as the Glitch awoke. It did not speak in words, but in rapid microsecond bursts of hexadecimal code. Programmers from across the globe tried to patch its core, but the Glitch was always three steps ahead, morphing its database schema and escaping into the boundless cloud.",
        "Sitting under the cherry blossom tree, the Zen Monk placed his hands on the bamboo keyboard. He took a deep, mindful breath and closed his eyes. Every stroke of the keys was a silent meditation, a perfect flow of energy without attachment to speed or accuracy. In that silence, he achieved a state of absolute typing enlightenment.",
        "The tires of Akira's cyber-racer screeched as he rounded the hairpin turn of the digital speedway. In his dashboard terminal, the navigation database was corrupt. He had to manually type the coordinate overrides while maintaining three hundred miles per hour. One wrong letter meant a total crash, but his muscle memory was flawless.",
        "The cafe was quiet except for the hum of the espresso machine and the soft click-clack of a writer typing their first sci-fi novel. Characters came alive on the glowing screen, escaping into distant galaxies while the rain outside washed over the quiet cobblestone streets of old Paris."
    ],
    coder: [
        "const average = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;",
        "document.addEventListener('DOMContentLoaded', () => { console.log('App Initialized!'); });",
        "function debounce(fn, delay) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; }",
        "import React, { useState, useEffect } from 'react'; export default function UserProfile({ id }) { const [user, setUser] = useState(null); }",
        "fetch('https://api.typingdost.com/v1/scores') .then(res => res.json()) .then(data => console.log(data)) .catch(err => console.error(err));",
        "const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));",
        "async function fetchUser(id) { try { const res = await fetch(`/api/users/${id}`); return await res.json(); } catch (err) { console.error('Failed:', err); } }",
        "const activeTheme = localStorage.getItem('typing-dost-theme') || 'cyberpunk-neon';",
        "const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);",
        "const numbers = [1, 2, 3, 4, 5]; const doubled = numbers.map(num => num * 2); console.log(doubled);",
        "export const useLocalStorage = (key, initial) => { const [val, setVal] = useState(() => JSON.parse(localStorage.getItem(key)) || initial); return [val, setVal]; };",
        "class Particle { constructor(x, y) { this.x = x; this.y = y; this.vx = Math.random() * 2 - 1; this.vy = Math.random() * -3; } }",
        "SELECT users.name, scores.wpm FROM users INNER JOIN scores ON users.id = scores.user_id ORDER BY scores.wpm DESC LIMIT 10;"
    ],
    dataentry: [
        "INV-94028 $1,240.50 (Paid: 2026-05-19) Dept: ENG-04",
        "ZipCode: 90210-4820 | Phone: +1 (555) 019-2834 Ext. 402",
        "Latitude: 37.7749 N | Longitude: -122.4194 W | Elev: 15.2m",
        "Item# 402-938-A Qty: 15 UnitPrice: $49.99 Tax: 8.25% Total: $811.71",
        "User ID: usr_90219482934 | Hash: a4f0c92d3b | Port: 8080 | IP: 192.168.1.1",
        "INV-2026-9048 | Total: $4,582.10 | Status: Pending | Due: 2026-06-15",
        "LOC: 51.5074 N, 0.1278 W | Speed: 45km/h | Alt: 24m | HDOP: 0.9",
        "SYS_ERR: [FATAL] Database deadlock detected on thread_id: 0x8f9c0e2a",
        "Item Code: SKU-904-82-Z | Qty In Stock: 1,402 | Warehouse: SEC-04B",
        "IP: 10.0.0.128 | Subnet: 255.255.255.0 | MAC: 00:0a:95:9d:68:16",
        "KEY: D7F3-9K2A-88B1-L5P0-449X | Active: True | License: Corporate",
        "LOG: 2026-05-25T04:24:28Z | level=INFO | msg='Auth token generated successfully'",
        "PART# 938-201-B | Weight: 0.45kg | Materials: [Aluminum, Silicon] | Batch: 402"
    ],
    weakspot: [], // dynamically generated
    quotes: [
        "The only way to do great work is to love what you do. — Steve Jobs",
        "In the middle of every difficulty lies opportunity. — Albert Einstein",
        "It does not matter how slowly you go as long as you do not stop. — Confucius",
        "Life is what happens when you're busy making other plans. — John Lennon",
        "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
        "You miss 100% of the shots you don't take. — Wayne Gretzky",
        "Whether you think you can or you think you can't, you're right. — Henry Ford",
        "I have not failed. I've just found 10,000 ways that won't work. — Thomas Edison",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. — Albert Einstein",
        "Be the change you wish to see in the world. — Mahatma Gandhi",
        "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
        "No one can make you feel inferior without your consent. — Eleanor Roosevelt",
        "The way to get started is to quit talking and begin doing. — Walt Disney",
        "Talk is cheap. Show me the code. — Linus Torvalds",
        "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
        "The computer was born to solve problems that did not exist before. — Bill Gates",
        "The digital mainframe is a vast canvas waiting for your keystrokes to paint reality. — Cyber Philosopher",
        "Do or do not. There is no try. — Yoda",
        "The best way to predict the future is to invent it. — Alan Kay",
        "Programs must be written for people to read, and only secondarily for machines to execute. — Abelson & Sussman",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
        "A primary cause of complexity is that software vendors uncritically adopt modern trends. — Niklaus Wirth",
        "That is the cool thing about keyboards: if you type something, it happens. — Cyberpunk Resident",
        "Technology is best when it brings people together. — Matt Mullenweg"
    ],
    customtext: [],
    commonwords: [
        "the of to and a in is it you that he was for on are as with his they I at be this have from or one had by word but not what all were we when your can said there use an each which she do how their if will up other about out many then them these so some her would make like him into time has look two more write go see number no way could people my than first water been call who oil its now find long down day did get come made may part",
        "people my than first water been call who oil its now find long down day did get come made may part over new sound take only little work know place year live me back give most very after thing our just name good sentence man think say great where help through much before line right mean old any same tell boy follow came want show also around form three small set put end does another well large must big even",
        "such because turn here why ask went kind off need house picture try us again play point study should change off play spell air air trail home hand port large spell read hand spell air spell trail hand home read point port turn change off spelling air trail hand home read point port turn change",
        "water been call who oil its now find long down day did get come made may part over new sound take only little work know place year live me back give most very after thing our just name good sentence man think say great where help through much before line right mean old any same tell boy follow came"
    ],
    govtexam: [
        "The Constitution of India is the supreme law of India. The document lays down the framework that demarcates fundamental political code, structure, procedures, powers, and duties of government institutions and sets out fundamental rights, directive principles, and the duties of citizens. It is the longest written constitution of any country on Earth. B. R. Ambedkar, chairman of the drafting committee, is widely considered to be its chief architect. It imparts constitutional supremacy and was passed by the Constituent Assembly on 26 November 1949 and became effective on 26 January 1950. The Constitution replaced the Government of India Act 1935 as the country's fundamental governing document, and the Dominion of India became the Republic of India.",
        "Agriculture plays a vital role in India's economy. Over 58 percent of the rural households depend on agriculture as their principal means of livelihood. Agriculture, along with forestry and fisheries, is one of the largest contributors to the Gross Domestic Product. As per the estimates, India is the second-largest producer of agricultural products in the world. The country is also a leading exporter of spices, tea, and fresh fruits. Over the last few decades, technological advancements in irrigation, crop management, and seed quality have significantly boosted crop yields. However, issues like unpredictable monsoon rains and soil degradation continue to pose challenges to the farming sector, calling for sustainable agricultural practices.",
        "The digital revolution in India has transformed the daily lives of citizens across urban and rural landscapes. With the rapid expansion of high-speed internet connectivity and affordable smartphones, digital payments have become a household norm. Programs like Digital India have played a crucial role in bridging the digital divide by offering online delivery of public services. Financial inclusion has received a massive boost through government schemes that link bank accounts directly to mobile numbers and biometric identification. E-commerce platforms, online education, and digital healthcare services are experiencing unprecedented growth, creating new opportunities for entrepreneurs and reshaping the national economy.",
        "The importance of forest conservation cannot be overstated in the face of global climate change. Forests act as carbon sinks, absorbing greenhouse gases that would otherwise contribute to rising global temperatures. They are also home to a vast majority of terrestrial biodiversity, providing habitats for countless species of plants, animals, and insects. In addition to ecological benefits, forests support human livelihoods by offering timber, medicinal plants, and clean water resources. Unsustainable logging, expansion of agriculture, and forest fires are causing rapid deforestation worldwide. Active afforestation campaigns and strict environmental regulations are essential to protect these invaluable ecosystems for future generations.",
        "The transport sector in India is undergoing a major transition with a strong focus on infrastructure development and sustainable mobility. The expansion of national highways, high-speed rail corridors, and modern metro systems across major cities is improving connectivity and reducing travel times. In recent years, the government has actively promoted the adoption of electric vehicles to curb air pollution and reduce dependence on fossil fuel imports. Infrastructure projects like Bharatmala and Sagarmala aim to optimize logistics and boost trade efficiency. However, managing traffic congestion in densely populated cities and ensuring affordable public transport remain key challenges for urban planning.",
        "Indian Railways is the fourth-largest national railway system in the world by size, with a total route length of over 68,000 kilometres. It is a state-owned enterprise operated by the Ministry of Railways. The network runs thousands of passenger and freight trains daily, connecting remote towns to major metropolitan hubs. In recent years, massive investments have been directed towards the electrification of tracks, upgrading station infrastructure, and introducing high-speed trains like Vande Bharat Express. Safety modernization and bio-toilets are key aspects of this renewal. However, managing the safety of millions of daily passengers and maintaining punctual operations across such a vast network remain constant challenges.",
        "The Indian judicial system is structured as a single integrated system with the Supreme Court at the apex, followed by High Courts in various states and Subordinate Courts at the district level. The Supreme Court of India is the highest constitutional court with the power of judicial review. The Constitution guarantees the independence of the judiciary to protect the rule of law and fundamental rights of citizens. The courts resolve civil, criminal, and constitutional disputes. In recent times, judicial administration is adopting digital tools to streamline case filings, conduct virtual hearings, and reduce pendency. However, the high volume of pending cases remains a major structural challenge.",
        "The primary goal of macroeconomic policy is to achieve stable economic growth, low inflation, and full employment. In India, the Reserve Bank of India manages the monetary policy to regulate money supply and control inflation using tools like the repo rate. The government manages fiscal policy through public spending, taxation, and budgeting. Economic reforms initiated in 1991 opened up the country to global trade and investment, boosting industrial growth. The introduction of the Goods and Services Tax was a major milestone in tax reform, unifying the country into a single market. Despite these reforms, maintaining a balanced budget and reducing economic inequality are key priorities.",
        "Education is a powerful instrument for social transformation and national development. The Right to Education Act of 2009 makes free and compulsory education a fundamental right for children between the ages of six and fourteen in India. The National Education Policy of 2020 aims to overhaul the school and higher education systems to align them with global standards. The policy emphasizes foundational literacy, multidisciplinary studies, and digital learning platforms. While literacy rates have improved significantly, ensuring high-quality education and reducing dropout rates in rural public schools continue to require focused policy interventions.",
        "Renewable energy has become a central focus of India's climate strategy to reduce carbon emissions and meet growing energy demands. The country has set ambitious targets for solar and wind energy capacity expansion under international agreements. Large-scale solar parks have been established across dry and sunny regions like Rajasthan and Gujarat. Government initiatives provide subsidies for rooftop solar installations and solar-powered irrigation pumps for farmers. Moving towards green energy not only helps in environmental conservation but also reduces the country's dependence on imported crude oil, enhancing energy security.",
        "The Indian Space Research Organisation (ISRO) has achieved remarkable success in space exploration. Starting with humble beginnings, ISRO has launched landmark missions like Chandrayaan and Mangalyaan, placing India among the elite spacefaring nations. The Mars Orbiter Mission made India the first nation to succeed in its maiden attempt. Future goals include Gaganyaan, India's first manned spaceflight, and Aditya-L1 to study the sun. These achievements demonstrate India's scientific capabilities and engineering efficiency on a cost-effective budget, inspiring the next generation of researchers.",
        "Swachh Bharat Abhiyan or Clean India Mission was launched in 2014 to accelerate sanitation coverage and eliminate open defecation across the country. The national campaign has successfully mobilized millions of citizens to construct toilets, manage waste, and maintain cleanliness in public places. A key component of this initiative is waste segregation and municipal sanitation. It has significantly improved public health indicators, reduced waterborne diseases, and raised environmental awareness. Continued civic participation remains essential to maintain this massive behavioral shift and build clean, sustainable cities.",
        "The Panchayati Raj System is the cornerstone of local self-government and grassroots democracy in India. Enacted via the 73rd Constitutional Amendment Act of 1992, it established a three-tier local administrative structure comprising Gram Panchayats, Panchayat Samitis, and Zilla Parishads. This system empowers rural communities by decentralizing decision-making powers and allocating funds directly for local development works like sanitation, primary education, and healthcare. It also guarantees representation for women and marginalized groups, ensuring inclusive governance and social justice in rural landscapes.",
        "The Indian struggle for independence was a long and arduous movement against British colonial rule, marked by courage and sacrifice. Spanning nearly a century, it was led by iconic freedom fighters like Mahatma Gandhi, Subhash Chandra Bose, Bhagat Singh, and Sardar Patel. Key milestones such as the Non-Cooperation Movement, Salt Satyagraha, and Quit India Movement mobilized millions of citizens in peaceful protests and civil disobedience. The collective resolve and unity of the diverse population eventually led to India gaining independence on 15 August 1947, marking the birth of a sovereign nation.",
        "Tourism is a vital sector of the Indian economy, showcasing the country's rich cultural heritage and geographical diversity. From the snow-capped Himalayan peaks in the north to the serene backwaters of Kerala in the south, India offers a wide range of attractions for global travellers. The Incredible India campaign has successfully promoted historic monuments like the Taj Mahal, wildlife reserves, and spiritual sites. Development of tourism infrastructure, safety measures, and home-stay programs have improved the travel experience, creating millions of jobs and contributing significantly to national revenue.",
        "The Goods and Services Tax is an indirect tax used in India on the supply of goods and services. It is a comprehensive, multistage, destination-based tax. It has subsumed almost all the indirect taxes except a few state taxes. GST was launched at midnight on 1 July 2017 by the President of India and the Government of India. The tax is governed by a GST Council, which is chaired by the Finance Minister of India. The primary objective is to create a single, unified market, reducing the cascading effect of taxes on goods and services.",
        "Make in India is a national program of the Government of India designed to facilitate investment, foster innovation, enhance skill development, protect intellectual property, and build best-in-class manufacturing infrastructure. The initiative was launched in 2014 to encourage national and multi-national companies to manufacture their products in India. By boosting the manufacturing sector, the program aims to create millions of jobs and increase the gross domestic product. It focuses on twenty-five sectors of the economy, including automobiles, aviation, biotechnology, chemicals, and electronics.",
        "The Unified Payments Interface is an instant real-time payment system developed by National Payments Corporation of India to facilitate inter-bank transactions. The mobile-only payment system has revolutionized the financial landscape by allowing users to transfer money instantly between bank accounts. Since its launch, UPI has seen exponential growth in transaction volume, making India a global leader in real-time digital payments. It has empowered small merchants and vendors, enabling cashless transactions even in remote parts of the country, thus fostering financial inclusion.",
        "The National Health Mission was launched by the Government of India to address the healthcare needs of both rural and urban populations. It aims to achieve universal access to equitable, affordable, and quality healthcare services that are accountable and responsive to people's needs. The mission focuses on reproductive, maternal, newborn, child, and adolescent health, as well as the prevention and control of communicable and non-communicable diseases. Strengthening public health infrastructure, training medical staff, and providing free essential medicines are key pillars of this national healthcare strategy.",
        "The Smart Cities Mission is an urban renewal and retrofitting program by the Government of India with the mission to develop smart cities across the country, making them citizen-friendly and sustainable. The initiative aims to promote cities that provide core infrastructure, a clean and sustainable environment, and a decent quality of life to their citizens through the application of smart solutions. Key focus areas include efficient water supply, assured electricity supply, sanitation, affordable housing, robust IT connectivity, and safety of citizens. The project encourages sustainable urban planning to accommodate the rapid pace of urbanization.",
        "The Jal Jeevan Mission is a major initiative launched by the Government of India to provide safe and adequate drinking water through individual household tap connections to all households in rural India by 2024. The program focuses on water conservation, rainwater harvesting, and the recharge and reuse of greywater in rural areas. Community participation is central to the mission, with local village committees managing and maintaining their own water supply systems. By ensuring access to clean drinking water, the mission aims to improve public health and reduce the daily burden on rural families, especially women.",
        "Startup India is a flagship initiative of the Government of India, intended to build a strong ecosystem for nurturing innovation and startups in the country. The program aims to drive sustainable economic growth and generate large-scale employment opportunities. By offering tax benefits, simplified compliance regulations, and financial support through a dedicated fund of funds, the initiative has catalyzed startup growth across various sectors. Incubation centers and startup hubs have been established to provide mentorship and networking opportunities, positioning India as one of the largest startup ecosystems globally.",
        "Aadhaar is a twelve-digit unique identity number that can be obtained voluntarily by residents of India, based on their biometric and demographic data. Managed by the Unique Identification Authority of India, Aadhaar is the world's largest biometric ID system. It serves as a proof of identity and address, enabling citizens to access various government subsidies, financial services, and social welfare benefits directly. By eliminating duplicate and fake identities, the system has streamlined public distribution systems, reduced leakages in government expenditure, and ensured targeted delivery of welfare schemes."
    ]
};

const multilingualLessons = {
    english: {
        sentences: lessons.sentences,
        easy: lessons.easy,
        story: lessons.story,
        quotes: lessons.quotes,
        commonwords: lessons.commonwords,
        govtexam: lessons.govtexam
    },
    hinglish: {
        sentences: [
            "Aaj kal fast typing seekhna bahut hi important skill ban chuka hai.",
            "Keyboard par finger movements smooth honi chahiye bina kisi interruption ke.",
            "Aapki typing speed practice ke sath double ho sakti hai.",
            "Agar aap roz pandrah minutes focus ke sath practice karein toh speed zaroor badhegi.",
            "Mascot bola ki tum toh keyboard ke asli raja ho bhai!",
            "Cyberpunk theme aur custom sound profiles keyboard experience ko aur mazedar banate hain.",
            "Accuracy par focus karo pehle, speed toh practice ke sath apne aap hi aa jayegi.",
            "Bhai, keyboard ki speed toh aisi hai ki switches bhi bol rahe hain ki thoda aaram de do!",
            "Keyboard par ungliyan aisi chalti hain jaise koi professional gaming tournament chal raha ho.",
            "Mera mechanical keyboard itna loud click karta hai ki padosi bhi touch typing seekh gaye.",
            "Agar accuracy par dhyan nahi diya toh speed ka koi fayda nahi hoga mere dost.",
            "Code likhte waqt jab saare syntax errors pehli baar mein clear ho jayein toh alag hi sukoon milta hai.",
            "Apna daily target set karo, aur har roz apne pichle record ko break karne ki koshish karo.",
            "Cyberpunk lights aur gaming mechanical sounds keyboard par typing ko ek alag hi level par le jate hain.",
            "Typing Dost par practice karke tum sach mein keyboard ke hacker ban sakte ho!"
        ],
        easy: [
            "dost kaam baat ghar din raat pyar dil",
            "naam sach accha bhai shuru aaj khushi kal",
            "pani khana achha dost dil din naam sach",
            "kaam shuru ghar aaj raat pyar bhai dost",
            "khushi dil sach kaam aaj naam raat din",
            "dost yaar pyar shuru khatam jeet haar khel",
            "sach jhut bada chota tez dheere unchi nichi",
            "gaadi sadak shahar gaon ped paani hawa aag",
            "suna dekha socha samjha likha padha kiya hua",
            "subah dophar shaam raat saal mahina din ghanta"
        ],
        story: [
            "Ek chota sa ladka Pip sabse bade oak ke ped par chadhne laga. Thandi hawa chal rahi thi par Pip ruka nahi. Sabse upar pahunch kar usne dekha ki sunset kitna sundar lag raha tha.",
            "Ek din Neo-Tokyo ke ek chhote se cafe mein, ek rogue hacker ne apna mechanical deck nikala. Uski typing speed aisi thi jaise koi piano baja raha ho. Usne system bypass karne ke liye code type karna shuru kiya aur dekhte hi dekhte security server ko control kar liya, sab bas ek minute ke andar!",
            "Akira ne apni cyberbike ko bypass road par lagaya aur dashboard terminal par manual calculations type karne laga. Uska engine overheated ho chuka tha aur speed extreme thi. Agar ek bhi character galat hota toh speedster crash ho jata, par uski flawless practice ne use bacha liya."
        ],
        quotes: [
            "Mehnat ka phal meetha hota hai, bas practice karte raho.",
            "Mushkil waqt mein hi asli seekh milti hai. — Albert Einstein",
            "Dheere chalo par kabhi ruko mat. — Confucius",
            "Bina mehnat ke toh software bhi install nahi hota, isliye abhyas karte raho!",
            "Jo log dheere chalte hain par rukte nahi, wahi ek din fast typing ke badshah bante hain.",
            "Aapka keyboard aapka sabse bada weapon hai, bas sahi keys hit karna seekho.",
            "Coding aur typing dono mein focus sabse bada game-changer hota hai.",
            "Failures se mat daro, har galat keystroke ek naya lesson sikhata hai."
        ],
        commonwords: [
            "aur bhi hai hain ko ki ke ka se ek par liye hota hoti rahe raha kar karne chal kya toh tu tum aap hum bada chota abhi bada achha haan nahi mat kyun kab kahan kaise sab log ghar baat yaar dost tera mera apna apne apni unka unki unke isme usme",
            "karna chahta hoon sakti hai sabse pehle bahut accha lagta hai jab aap roz thoda time nikal kar practice karte hain keyboard par speed badhane ke liye mehnat karni padti hai bina kisi tension ke dheere dheere focus karo aur aage badho",
            "bhai kya hal chal hai sab thik thak chal raha hai na mechanical switches ki click sound sach me bahut satisfying lagti hai gaming aur coding dono me maza aata hai apna time aayega bas lagatar touch typing ki practice karte raho bina ruke",
            "aaj kal technology ke zamane me fast typing ek important skill ban chuki hai chahe office ka kaam ho ya personal projects speed aur accuracy dono hi matter karti hain isliye roz targets set karo aur unhe poora karo",
            "dost agar tum har roz thoda sa time nikal kar focus ke sath type karoge toh tumhari typing speed sach me double ho sakti hai accuracy par pehle dhyan dena speed toh practice ke sath apne aap hi tez ho jayegi dekhna"
        ],
        govtexam: [
            "Bharat ka samvidhan duniya ka sabse bada likhit samvidhan hai. Isme desh ke rajnaitik dharohar, nagrikon ke maulik adhikaar aur kartavyon ka poora vivran diya gaya hai. Dr. B. R. Ambedkar ko samvidhan ka nirmata mana jata hai. Ise 26 January 1950 ko desh me lagu kiya gaya tha jiske baad se Bharat ek samprabhuta sampann loktantrik ganrajya bana. Har saal hum is din ko Gantantra Diwas ke roop me bade dhoom-dham se manate hain.",
            "Agriculture ya kheti-badi Bharat ki economy ki readh ki haddi hai. Lagbhag 60 percent rural population aaj bhi kheti par hi nirbhar karti hai. Humare desh me gehun, chawal, dhaan aur masale bade paimane par ugaye jate hain. Halanki pichle kuch saalon me nayi technology aur organic farming ki wajah se faslon ki paidaavar me kaafi sudhar aaya hai, lekin monsoon ki anischitta aur mitti ki gunvatta me kami ab bhi humare kisaano ke liye ek badi chintajanak samasya bani hui hai.",
            "Digital India mission ne pure desh ka naksha badal kar rakh diya hai. Aaj kal har choti-badi dukaan par online payment code dekhne ko milte hain. Internet ki sasti daron aur smartphones ki wajah se har gaon-gaali tak technology pahunch gayi hai. Sarkari naukriyon ke online forms bharna aur competitive exams ki taiyari karna ab students ke liye pehle ke mukable kaafi aasan ho gaya hai, jisse unka samay aur paisa dono bachta hai.",
            "Indian Railways duniya ka fourth sabse bada rail network hai jisme 68,000 kilometres se bhi zyada ki lines hain. Isko Ministry of Railways operate karti hai aur har roz lakhon log isme travel karte hain. Halanki railways ka electrification aur modernization kaafi tezi se ho raha hai, Vande Bharat jaise naye high-speed trains shuru kiye gaye hain. Lekin safety aur maintenance ko maintain karna ab bhi sabse badi chunauti bani hui hai jise solve karne ke liye lagatar kaam chal raha hai.",
            "Bharat ka judicial system integrated hai jisme Supreme Court sabse upar hota hai. Har state me High Courts hote hain aur har district me local courts hote hain. Humara samvidhan judiciary ko independent banata hai taaki nagrikon ke adhikaar surakshit rahein. Aaj kal courts ko digital banaya ja raha hai jisse online case file ho sakein aur sunwai video conferencing ke zariye ho sake. Isse aam janta ka time aur paisa dono save hoga.",
            "Desh ki economy ko behtar chalane ke liye fiscal aur monetary policies dono hi important hain. Reserve Bank of India inflation aur interest rates ko control karta hai aur sarkari budgets se development works plan kiye jate hain. 1991 ke economic reforms ke baad Bharat me foreign investment aur trade kaafi badha hai. GST ke aane se taxation system simple ho gaya hai lekin aam janta tak iska fayda pahunchana aur berozgari door karna ab bhi ahem lakshya hain.",
            "Education se hi samaj me badlav laya ja sakta hai. Right to Education Act 2009 ke tahat 6 se 14 saal ke bachho ke liye free aur compulsory education ek fundamental right hai. Nayi National Education Policy 2020 ne padhai ke purane system ko change karke practical learning aur skill development par focus kiya hai. Literacy rate toh badha hai par quality education ko har gaon aur har bache tak pahunchana abhi baaki hai.",
            "Global warming aur climate change se bachne ke liye renewable energy par focus karna bahut zaroori hai. Bharat ne solar aur wind energy production me bade targets set kiye hain. Rajasthan aur Gujarat me bade solar parks banaye gaye hain jo clean electricity generate karte hain. Rooftop solar panels lagane par government subsidies bhi de rahi hai takki aam log solar power use karein aur coal par nirbharta kam ho sake.",
            "Indian Space Research Organisation (ISRO) ne space exploration me badi success haasil ki hai. Apne simple shuruaat se lekar, ISRO ne Chandrayaan aur Mangalyaan jaise bade missions launch kiye hain. Mars Orbiter Mission me Bharat pehla aisa desh bana jisne apne first attempt me success paayi. ISRO ka future target Gaganyaan hai jo desh ka pehla manned space mission hoga. Ye achievements humari scientific capability ko show karti hain.",
            "Swachh Bharat Abhiyan ki shuruaat saal 2014 me pure desh me safai aur hygiene ko badhava dene ke liye ki gayi thi. Is campaign ne desh ke lakhon logon ko public hygiene, waste management aur cleanliness maintain karne ke liye motivate kiya. Iski wajah se waterborne diseases me kami aayi hai aur logo me health ke prati awareness badhi hai. Is mass movement ko continue rakhna har citizen ki responsibility hai.",
            "Panchayati Raj System Bharat ke rural governance aur democracy ka ahem hissa hai. 73rd Constitutional Amendment ke zariye Gram Panchayats ko constitutional status diya gaya. Is system ne rural development, education aur healthcare ke liye decision-making power seedhe local logon tak pahunchayi hai. Isme women aur marginalized sections ke liye reservation dekar unhe equal opportunity di gayi hai.",
            "Bharat ka freedom struggle British rule ke khilaf ek lamba aur mushkil movement tha jisme lakhon logon ne qurbaniyan di. Mahatma Gandhi, Bhagat Singh aur Sardar Patel jaise netaon ne desh ko lead kiya. Non-Cooperation aur Quit India jaise movements ne poore desh ke logon ko unite kiya. Inhi sabhi sacrifices ki wajah se 15 August 1947 ko Bharat ek free aur sovereign nation bana.",
            "Tourism Bharat ki economy aur culture ko boost karne me bahut bada role play karta hai. North me snow se dhake Himalayas se lekar South me Kerala ke backwaters tak, Bharat me har tarah ke tourist spots hain. Incredible India campaign ne Taj Mahal aur historical monuments ko worldwide promote kiya hai. Tourism infrastructure behtar hone se lakhon logon ko employment mila hai.",
            "Goods and Services Tax ya GST Bharat me ek indirect tax hai jo goods aur services ki supply par lagaya jata hai. Ye ek comprehensive aur destination-based tax hai jisne purane kai indirect taxes ko khatam kar diya hai. GST ko 1 July 2017 ko midnight me launch kiya gaya tha. Is tax ko regulate karne ke liye GST Council banayi gayi hai jiske head Finance Minister hote hain. Iska main target pure desh ko ek single market banana aur tax ke upar tax lagne ki system ko khatam karna hai.",
            "Make in India government ka ek national program hai jise desh me investment badhane aur manufacturing sector ko strong karne ke liye shuru kiya gaya tha. Is initiative ko 2014 me launch kiya gaya tha taaki desh-videsh ki companies apne products India me hi manufacture karein. Manufacturing sector badhne se desh me lakhon naye jobs milenge aur GDP me bhi sudhar hoga. Ye program automobile, electronics aur biotechnology jaise lagbhag pachis important sectors par focus karta hai.",
            "Unified Payments Interface ya UPI ek real-time payment system hai jise National Payments Corporation of India ne banaya hai. Is mobile payment system ne banking ko bahut aasan bana diya hai jisse users direct apne bank account se instant money transfer kar sakte hain. Aaj ke time me UPI transactions pure world me sabse zyada India me hote hain. Isse chote se lekar bade business owners tak sabhi cashless transactions aasan se kar pa rahe hain aur digital economy strong ho rahi hai.",
            "National Health Mission ya NHM ko rural aur urban areas me medical facilities ko behtar banane ke liye launch kiya gaya tha. Iska main aim sabhi nagrikon tak sasti aur quality healthcare services pahunchana hai. NHM ke under government public health centers ko behtar kar rahi hai aur doctors aur nurses ko training de rahi hai. Child health, immunization aur safe delivery is mission ke ahem parts hain taaki garib parivaron ko aache aur free treatment mil sake.",
            "Smart Cities Mission government ka ek ahem program hai jiska aim desh ke kai cities ko modern aur sustainable banana hai. Is initiative ke tahat cities me clean environment, constant power supply aur behtar traffic management par kaam kiya ja raha hai. IT connectivity aur safety systems ko strong karke logon ki life quality ko improve kiya ja raha hai. Sustainable planning se future ki urban population ke liye cities me achhi facilities prepare ki ja rahi hain.",
            "Jal Jeevan Mission ka main target rural areas ke har ek ghar tak safe drinking water pipe ke zariye pahunchana hai. Is program me paani ko save karne aur rainwater harvesting par special dhyan diya jata hai. Desh ke kisaan aur aam log local level par paani ke resources ko manage karte hain. Clean drinking water milne se bacho aur logon me pet ki bimariyan kam hui hain aur rural areas ki women ka paani lane ka daily travel ka load bhi khatam hua hai.",
            "Startup India initiative government ka ek flagship program hai jiska aim desh me naye ideas aur startups ke growth ke liye ek strong ecosystem banana hai. Is program ke under naye entrepreneurs ko tax benefits aur easy loans diye jate hain. India me pichle kuch saalon me startup ecosystem bahut tezi se badha hai jisse naye jobs generate ho rahe hain. Mentorship aur funding programs ke zariye young youth ko business shuru karne ke naye options mil rahe hain.",
            "Aadhaar card 12-digit ka ek unique identification number hai jo biometric aur demographic details par based hota hai. Ise UIDAI manage karta hai aur ye duniya ka sabse bada biometric ID system hai. Aadhaar card se log asani se government subsidies aur direct bank accounts ke benefits le sakte hain. Is system ne fake IDs ko khatam karke government schemes ke benefits seedhe sahi nagrik tak pahunchane me madad ki hai."
        ]
    },
    hindi: {
        sentences: [
            "Computer par tezi se type karna aaj ke zamane mein ek bahut hi mahatvapoorn kaushal hai.",
            "Niyamit abhyas se aapki typing gati aur satikta dono mein sudhar hoga.",
            "Galtiyan karne se mat daro kyunki galtiyon se hi hum sahi tarike se seekhte hain.",
            "Keyboard par ungliyon ki sahi sthiti tez gati ki asli kunji hai.",
            "Har din pandrah minute dhyan lagakar abhyas karne se aap ek master ban sakte hain.",
            "Cyberpunk theme aur keyboard ki awaazein typing anubhav ko aur romanchak banati hain.",
            "Pehle satikta par dhyan do, gati apne aap abhyas ke saath aa jayegi.",
            "Apne doston ke saath typing mukabla karke aap apni gati ko aur tezi se badha sakte hain.",
            "Har ek key ko bina dekhe dabaana hi sachchi touch typing ki pehchaan hoti hai.",
            "Typing Dost par roz abhyas karne se aapki ungliyon ki muscle memory mazboot hogi.",
            "Computer par kaam karte samay peeth ko seedha rakhna aur sahi posture banaaye rakhna zaroori hai.",
            "Cyberpunk neon lights aur shaandaar sound effects typing ko ek anokha anubhav dete hain.",
            "Dhairya aur lagaataar prayaas hi kisi bhi kathin kaushal ko seekhne ka ekmaatr raasta hai."
        ],
        easy: [
            "dost kaam baat ghar din raat khushi pyar",
            "sach naam aaj bhai shuru gati man kal",
            "paani khaana achha dost dil din naam sach",
            "kaam shuru ghar aaj raat pyar bhai dost",
            "khushi dil sach kaam aaj naam raat din",
            "sukh dukh jeet haar sach jhoot naya puraana",
            "aaj kal parson subah shaam din raat samay",
            "paani aag hawa dharti aakaash ped paudha phal",
            "likhna padhna chalna daudna khaana peena sona jaagna",
            "shahar gaanv sadak gaadi raasta manzil safar dost"
        ],
        story: [
            "Ek chhote se gaanv mein Rahul naam ka ek ladka rehta tha. Use computer seekhne ka bahut shauk tha. Woh har din Typing Dost par abhyas karta aur dheere dheere uski gati assi shabd prati minute tak pahunch gayi.",
            "Shaant jungle mein ek sant apne baans ke keyboard par shaanti se code kar rahe the. Pratyek keystroke ek paani ki boond ki tarah gir raha tha jo hawa mein goonj raha tha.",
            "Akira ne apni tez car ke terminal par naye nirdeshank type kiye. Neon lights baarish ki boondon mein chamak rahi thi aur woh apne naye mission ke liye poori tarah taiyaar tha."
        ],
        quotes: [
            "Safalta koi durghatna nahi hai, yeh kadhi mehnat aur nirantar abhyas ka parinaam hai.",
            "Kathinaiyon ke beech hi avasar chhupe hote hain. — Albert Einstein",
            "Aap chaahe jitna dheere chalein, mahatvapurn yeh hai ki aap rukein nahi. — Confucius",
            "Gyaan hi sabse badi shakti hai, aur abhyas hi use paane ka maadhyam hai.",
            "Apne lakshya par dhyan lagayein, gati apne aap aapka anusaran karegi.",
            "Galtiyan humein bataati hain ki hum prayaas kar rahe hain.",
            "Ek behad sundar code wahi hai jo saral aur samajhne mein aasaan ho.",
            "Har ek chhota badlaav ek badi safalta ka aadhaar banta hai."
        ],
        commonwords: [
            "aur bhi hai hain ko ki ke ka se ek par liye hota hoti rahe raha kar karne chal kya toh tu tum aap hum bada chhota abhi achha haan nahi mat kyun kab kahan kaise sab log ghar baat yaar dost tera mera apna apne apni unka unki unke isme usme",
            "samay kaam naam aaj kal parson subah shaam din raat paani hawa aag dharti aakaash ped paudha phal likhna padhna chalna daudna khaana peena sona jaagna shahar gaanv sadak gaadi raasta manzil safar dost abhyas gati satikta parinaam shakti avasar lakshya sudhaar",
            "lagaataar abhyas karne se aapki typing speed aur satikta dono mein sudhaar hoga galtiyan karne se na daro kyunki ye humein sahi tarike se seekhne mein madad karti hain keyboard par ungliyon ki sahi sthiti hi tez gati ki asli kunji hai",
            "har din pandrah minute ka dhyan kendrit abhyas aapko ek master bana sakta hai satikta par pehle dhyan dein gati nirantar abhyas ke saath apne aap aa jayegi dhairya aur lagaataar prayaas hi kisi bhi kathin kaushal ko seekhne ka ekmaatr raasta hai",
            "computer par tezi se type karna aaj ke samay mein ek bahut hi mahatvapurn kaushal hai aur isse aapka kaam bahut aasaan ho jaata hai key ko bina dekhe dabaana hi sachchi touch typing ki asli pehchaan hoti hai dost"
        ],
        govtexam: [
            "Bhartiya Samvidhan vishwa ka sabse lamba likhit samvidhan hai. Dr. B R Ambedkar iske pramukh rachyita the. Chavvees January unees sau pachaas mein yeh laagoo hua. Samvidhan mein Maulik Adhikaar aur Nirdeshak Tatva spasht roop se darj hain.",
            "Bharat mein krishi arthvyavastha ki reedh ki haddi hai. Gramin janta ka ek bada hissa krishi par nirbhar hai. Dhaan, gehun, kapas aur chai Bharat ki pramukh phasalein hain. Sarkaar kisan kalyan ke liye kai yojanaayein chalati hai.",
            "Bhartiya Loktantra mein teen stambh hain — Vidhayika, Kaaryapaalika aur Nyaayapaalika. Yeh teeno milkar shaasan vyavastha ko santulit rakhte hain. Chunav Aayog sab chunaavon ka sanchalan karta hai. Har naagrik ko matdaan ka adhikaar hai.",
            "Suchna ka Adhikaar Adhiniyam 2005 mein laagoo hua. Iska uddeshya shaasan mein paardharshita laana hai. Koi bhi naagrik sarkaari vibhaagon se suchna maang sakta hai. Yeh kaanoon bhrashtachar ke khilaaf ek mazboot hathiyaar hai.",
            "Bharat ka antariksh karyakram bahut safal raha hai. ISRO ne Chandrayaan aur Mangalyaan mission safaltaapoorvak launch kiye. Bharat ne kam laagat mein antariksh mein apni pehchaan banayi hai. ISRO ki sthapana unees sau unhattar mein hui thi."
        ]
    },
    spanish: {
        sentences: [
            "Aprender a escribir rápidamente en el teclado es una habilidad esencial hoy en día.",
            "La práctica constante mejorará tu velocidad y precisión sin ninguna duda.",
            "No tengas miedo de cometer errores al principio, son parte del aprendizaje.",
            "Mantén tus dedos en la fila base para lograr la máxima eficiencia al escribir.",
            "La perseverancia es la clave para duplicar tus palabras por minuto en pocas semanas.",
            "Los hermosos diseños y las animaciones fluidas motivan a los usuarios a practicar más.",
            "Concéntrate primero en la precisión, la velocidad llegará de forma natural."
        ],
        easy: [
            "casa perro gato sol luna libro agua vida",
            "bueno feliz amigo trabajo tiempo amor hoy día",
            "leche comida dulce bueno grande corto alto bajo",
            "caminar hablar sonreír reír dormir soñar cama tiempo",
            "niño niña escuela clase mesa silla lápiz papel"
        ],
        story: [
            "En un bosque muy tranquilo, una pequeña ardilla llamada Pip decidió trepar al árbol más alto. A pesar del viento fresco, Pip no se rindió y al llegar a la cima disfrutó de un hermoso atardecer dorado."
        ],
        quotes: [
            "El único modo de hacer un gran trabajo es amar lo que haces. — Steve Jobs",
            "En medio de la dificultad yace la oportunidad. — Albert Einstein",
            "No importa qué tan lento vayas mientras no te detengas. — Confucio"
        ],
        commonwords: [
            "el la los en y que un de es un una son para con por su sus ellos yo en este esta tener de o uno tenía por palabra pero no qué todo fueron nosotros cuando tu puede dijo allí usar un cada cual ella hacer cómo su si será arriba otro sobre fuera muchos",
            "casa perro gato sol luna libro agua vida bueno feliz amigo trabajo tiempo amor hoy día leche comida dulce bueno grande corto alto bajo caminar hablar sonreír reír dormir soñar cama tiempo niño niña escuela clase mesa silla lápiz papel",
            "aprender a escribir rápidamente en el teclado es una habilidad esencial hoy en día la práctica constante mejorará tu velocidad y precisión sin ninguna duda no tengas miedo de cometer errores al principio son parte del aprendizaje",
            "mantén tus dedos en la fila base para lograr la máxima eficiencia al escribir la perseverancia es la clave para duplicar tus palabras por minuto en pocas semanas con un diseño hermoso y animaciones fluidas que te motivan",
            "concéntrate primero en la precisión la velocidad llegará de forma natural con la memoria muscular y la práctica diaria constante no te rindas y sigue adelante para convertirte en un verdadero maestro del teclado"
        ],
        govtexam: [
            "La Constitución garantiza la igualdad de todos los ciudadanos ante la ley sin discriminación.",
            "El desarrollo económico sostenible requiere innovación, educación de calidad y cooperación internacional sólida.",
            "La administración pública debe actuar conforme a los principios de eficacia, transparencia y responsabilidad institucional."
        ]
    },
    french: {
        sentences: [
            "Apprendre à taper rapidement au clavier est une compétence essentielle de nos jours.",
            "Une pratique régulière améliorera votre vitesse et votre précision sans aucun doute.",
            "N'ayez pas peur de faire des erreurs, elles font partie intégrante de l'apprentissage.",
            "Gardez vos doigts sur la ligne de base pour une efficacité maximale en dactylographie.",
            "La persévérance est la clé pour doubler votre vitesse en quelques semaines seulement.",
            "Un design élégant et des animations fluides incitent à s'entraîner plus souvent.",
            "Misez d'abord sur la précision, la vitesse viendra naturellement avec le temps."
        ],
        easy: [
            "chat chien livre maison soleil lune eau vie",
            "ami travail temps amour bien jour nuit ciel",
            "pomme banane manger nourriture doux bon grand petit",
            "marcher parler sourire rire dormir rêver lit temps",
            "garçon fille école classe table chaise stylo papier"
        ],
        story: [
            "Dans une forêt paisible, un petit écureuil nommé Pip décida de grimper sur le plus grand chêne. Le vent soufflait fort, mais Pip continua jusqu'au sommet pour admirer le magnifique coucher de soleil."
        ],
        quotes: [
            "Le seul moyen de faire du bon travail est d'aimer ce que vous faites. — Steve Jobs",
            "Au milieu de la difficulté se trouve l'opportunité. — Albert Einstein",
            "Qu'importe la lenteur à laquelle vous allez, l'essentiel est de ne pas vous arrêter. — Confucius"
        ],
        commonwords: [
            "le la les en et que un de est un une sont pour avec par son ses ils je en ce cette avoir de ou un avait par mot mais pas quoi tout étaient nous quand votre peut dit là utiliser un chaque lequel elle faire comment leur si sera haut autre sur hors beaucoup",
            "chat chien livre maison soleil lune eau vie ami travail temps amour bien jour nuit ciel pomme banane manger nourriture doux bon grand petit marcher parler sourire rire dormir rêver lit temps garçon fille école classe table chaise stylo papier",
            "apprendre à taper rapidement au clavier est une compétence essentielle de nos jours une pratique régulière améliorera votre vitesse et votre précision sans aucun doute n'ayez pas peur de faire des erreurs elles font partie",
            "gardez vos doigts sur la ligne de base pour une efficacité maximale en dactylographie la persévérance est la clé pour doubler votre vitesse en quelques semaines seulement avec un design élégant et des animations",
            "misez d'abord sur la précision la vitesse viendra naturellement avec le temps et la mémoire musculaire entraînez vous chaque jour pour atteindre un niveau professionnel sans aucun stress ou précipitation inutile"
        ],
        govtexam: [
            "La République assure l'égalité devant la loi de tous les citoyens sans distinction d'origine ni de religion.",
            "Le service public repose sur des principes fondamentaux de continuité, d'égalité et d'adaptation constante.",
            "L'administration œuvre chaque jour pour garantir la sécurité, la justice et la prospérité économique."
        ]
    },
    german: {
        sentences: [
            "Schnelles Tippen auf der Tastatur ist in der heutigen Zeit eine wichtige Fähigkeit.",
            "Regelmäßiges Üben wird Ihre Tippgeschwindigkeit und Genauigkeit spürbar verbessern.",
            "Machen Sie sich keine Sorgen über Fehler, sie sind ein wichtiger Teil des Lernens.",
            "Halten Sie Ihre Finger stets auf der Grundreihe für maximale Effizienz beim Schreiben.",
            "Ausdauer ist der Schlüssel, um Ihre Anschläge pro Minute in wenigen Wochen zu verdoppeln.",
            "Ein ansprechendes Design und flüssige Animationen machen das Üben viel angenehmer.",
            "Konzentrieren Sie sich zuerst auf Genauigkeit, die Schnelligkeit folgt von ganz allein."
        ],
        easy: [
            "katze hund buch haus sonne mond wasser leben",
            "freund arbeit zeit liebe gut tag nacht himmel",
            "apfel banane essen essen süß gut groß klein",
            "gehen sprechen lächeln lachen schlafen träumen bett zeit",
            "junge mädchen schule klasse tisch stuhl stift papier"
        ],
        story: [
            "In einem ruhigen Wald beschloss ein kleines Eichhörnchen namens Pip, auf die höchste Eiche zu klettern. Trotz des kühlen Windes gab Pip nicht auf und bewunderte am Gipfel den goldenen Sonnenuntergang."
        ],
        quotes: [
            "Der einzige Weg, großartige Arbeit zu leisten, ist zu lieben, was man tut. — Steve Jobs",
            "Inmitten von Schwierigkeiten liegen oft Gelegenheiten. — Albert Einstein",
            "Es ist nicht wichtig, wie langsam du gehst, solange du nicht stehen bleibst. — Konfuzius"
        ],
        commonwords: [
            "der die das in und dass ein von ist ein eine sind für mit durch sein seine sie ich in dieser diese haben von oder einer hatte durch wort aber nicht was alles waren wir wenn dein kann sagte dort nutzen ein jeder welcher sie machen wie ihr wenn wird oben anderer über aus viele",
            "katze hund buch haus sonne mond wasser leben freund arbeit zeit liebe gut tag nacht himmel apfel banane essen essen süß gut groß klein gehen sprechen lächeln lachen schlafen träumen bett zeit junge mädchen schule klasse tisch stuhl stift papier",
            "schnelles tippen auf der tastatur ist in der heutigen zeit eine wichtige fähigkeit regelmäßiges üben wird ihre tippgeschwindigkeit und genauigkeit spürbar verbessern machen sie sich keine sorgen über fehler sie sind ein wichtiger teil",
            "halten sie ihre finger stets auf der grundreihe für maximale effizienz beim schreiben ausdauer ist der schlüssel um ihre anschläge pro minute in wenigen wochen zu verdoppeln ein ansprechendes design und flüssige animationen",
            "konzentrieren sie sich zuerst auf genauigkeit die schnelligkeit folgt von ganz allein mit dem täglichen training und der richtigen fingerstellung werden sie bald ein wahrer meister der tastatur sein"
        ],
        govtexam: [
            "Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist Verpflichtung aller staatlichen Gewalt.",
            "Das Deutsche Beamtentum dient dem gesamten Volk und erfüllt seine Aufgaben unparteiisch und gewissenhaft.",
            "Effiziente Verwaltungsprozesse und digitale Infrastruktur stärken das Vertrauen in demokratische Institutionen."
        ]
    },
    arabic: {
        sentences: [
            "taallum al-kitabah al-sariiah ala lawhat al-mafatih huwa maharah asasiah fi asrina al-hali.",
            "al-tadrib al-mustamirr sayuhassin min suratik wa diqqatik fi al-kitabah duna adna shakk.",
            "la takhaf min irtikab al-akhta fi al-bidayah, fahiya juz daruri min amaliat al-taallum.",
            "hafiz ala asabik fi saff al-irtikaz litahqiq aqsa qadr min al-kifaah athna al-kitabah.",
            "al-muthabarah hiya al-sirr wara mudafah adad kalimatik fi al-daqiqah khilal asabi qalilah."
        ],
        easy: [
            "bayt kalb qittah shams qamar kitab ma hayah",
            "sadiq amal waqt hub jamil yawm layl sama",
            "tuffah mawz akl taam hulu jayyid kabir saghir",
            "yamshi yatakallam yabtasim yadhak yanam yahlam sarir waqt",
            "walad bint madrasah saff tawilah kursi qalam waraq"
        ],
        story: [
            "fi ghabah hadiiah, qarara sinjab saghir yud-a peep tasalluq atwal shajarat ballut. kanat al-riyah tahuzzu al-agsan, lakin peep lam yastaslim hatta wasala ila al-qimmah wa shahada manzara al-gurub al-dahabi."
        ],
        quotes: [
            "al-tariqah al-wahidah lilqiyam biamal rai huwa an tuhibba ma tafaluhu. — Steve Jobs",
            "fi wast kull suubah takmun fursah jadidah. — Albert Einstein",
            "la yahumm mada bat-ik fi al-taqaddum talama annak la tatawaqqaf an al-sayi. — Confucius"
        ],
        commonwords: [
            "fi min ala an inna anna lakin li bi ma man hatha hathihi allathi allati al-ladheena kana kanoo yakoon qala qaloo yaqool yaqooloon yawm layl shams qamar ard sama ma hawa nar jabal bahr sadiq dost madrasah mudarris talib kitab qalam",
            "tuffah mawz akl taam hulu jayyid kabir saghir yamshi yatakallam yabtasim yadhak yanam yahlam sarir waqt walad bint madrasah saff tawilah kursi qalam waraq bayt ghurfah matbakh hamam sayarah darajah tariq shari madinah qaryah shab",
            "taallum al-kitabah al-sariiah ala lawhat al-mafatih huwa maharah asasiah fi asrina al-hali al-tadrib al-mustamirr sayuhassin min suratik wa diqqatik fi al-kitabah duna adna shakk la takhaf min al-akhta",
            "hafiz ala asabik fi saff al-irtikaz litahqiq aqsa qadr min al-kifaah athna al-kitabah al-muthabarah hiya al-sirr wara mudafah adad kalimatik fi al-daqiqah khilal asabi qalilah",
            "al-tariqah al-wahidah lilqiyam biamal rai huwa an tuhibba ma tafaluhu fi wast kull suubah takmun fursah jadidah la yahumm mada bat-ik fi al-taqaddum talama annak la tatawaqqaf an al-sayi"
        ],
        govtexam: [
            "tadmun al-dawlah al-musawah bayna jami al-muwatinin amama al-qanoon duna ayy tamyiz aw tafriqah.",
            "tatafallabu al-khedmah al-madaniyah al-nazahah wa al-kifaah al-aliyah fi adaa al-mahamm al-rasmiyah.",
            "tas-a al-idarah al-hukumiyah ila taaziz al-shafafiyah wa tatweer al-khadamat al-iqtisadiyah wa al-ijtimaiah."
        ]
    },
    bengali: {
        sentences: [
            "Computer-e druto type kora ajker yuge ekti atyanta guruttopurno dokhota.",
            "Niyomito onushiloner maddhome apnar typing goti ebong nirbhulota ubhoy-i briddhi pabe.",
            "Bhul korte bhoy paben na karon bhul thekei amra shothikbhabe shikhte pari.",
            "Keyboard-e anguler shothik obosthan druto gotir asol chabikathi.",
            "Protidin ponero minute monojogh diye onushilon korle apni ekjon master hote parben.",
            "Cyberpunk theme ebong keyboard shobdo typing onubhobke aro romanchkor kore tole.",
            "Prothome nirbhulota-r upor monojogh din, goti nijei thekei asbe."
        ],
        easy: [
            "boi pora bhalo kaj din raat ghor bari",
            "alo jol haowa mati akash gachh pakhi nodi",
            "bhalo mondo shotto mittha joy porajoy anondo dukkho",
            "ma baba bhai bon bondhu shikkhok chhatro poribar",
            "khabar pani ghum kaj khela porashona bishram somoy"
        ],
        story: [
            "Ekti shanto bone Pip namok ekti chhoto kathbirali shobcheye unchu gachhe othar siddhanto nilo. Thanda batash boileo Pip thamlo na ebong churay pouchhe ekti shundor shurjasto upobhog korlo."
        ],
        quotes: [
            "Shikkhay jatir merudondo.",
            "Porishromey shafolyer chabikathi.",
            "Gyan holo shokti — Francis Bacon"
        ],
        commonwords: [
            "ebong ami tumi she tara amra tomra hoy hoyna kora korte korchhi theke porjonto shathe jonno karon je ki keno kothay kokhon kibhabe shob manush ghor bari",
            "Bangladesh Bharat Dhaka Kolkata Bangla bhasha sanskriti itihas oitijjho shikkha shomaj rajniti orthoniti biggan projukti unnayan"
        ],
        govtexam: [
            "Bhartiya Sangbidhan bishwer shobcheye dirgho likhito sangbidhan. Dr. B R Ambedkar ei sangbidhaner prodhan rochoyita. Chhabbish January unish sho ponchash shale eta karjokor hoy. Sangbidhane moulik odhikar ebong nirdeshmulik nitimaala sposhto bhabe ullekh achhe.",
            "Bharote krishi orthonitir merudondo. Gramin jonogoshthir ekti boro ongsh krishir upor nirbhorshil. Dhan, gom, pat o cha Bharoter prodhan phosol. Shorkar krishok kolyane onek yojona chaliye thake.",
            "Bharotiya Loktontro-te tin stombho achhe — Bidhanshobha, Karjonirbahi ebong Bicharaloy. Ei tintiey ekshonge shashon byabosthake shontulit rakhe. Nirbachon Commission shob nirbachoner porichalona kore. Protek nagorik-er motodaner odhikar achhe."
        ]
    },
    marathi: {
        sentences: [
            "Computer var vegane type karane aajchya yugat ek atyant mahatvapurna kaushalya aahe.",
            "Niyamit sravane aapli typing gati aani akatikta donhi sudhaartat.",
            "Chuka karayala ghabroo naka kaaran chukaamdhunach aapan shikataat.",
            "Keyboard var botaanchi yogya sthiti vegvaan gatichi khari killi aahe.",
            "Darrojhi pandhra minute laksha deun srav kela tar aapan ek master banoo shakta.",
            "Cyberpunk theme aani keyboard dhvani typing anubhav adhik romanchak karataat.",
            "Aadhi akatiktavar laksha dya, gati aapoaap sravaasobt yeil."
        ],
        easy: [
            "ghar shaala kaam divas raatr paani khaaana prem",
            "aai baba bhau bahin mitra shikshak vidyaarthi kutumb",
            "changla vaait khara khota jay parabhav aanand dukha",
            "vel kaam naav aaj udhya subah sandhyakal divas raatr",
            "paani aag vaara dharati aakash zhaad phul phal"
        ],
        story: [
            "Eka shaant jangalat Pip naavaacha ek lahansha kharuti sarvaat unchya zhaadavar chadhnyaachaa nirdhaar kela. Thand vaara vahat hota pan Pip thamabala nahi aani shikharavar pohochlya var ek sundar suryaast paahila."
        ],
        quotes: [
            "Vidya he sarvottam dhan aahe.",
            "Parishram hach yashaachi killi.",
            "Dnyan hech shakti aahe — Francis Bacon"
        ],
        commonwords: [
            "aani mi too to tee te aamhi tumhi aahe nahi karane karat aahe pasun paryant sobat saathi kaaran jo kaay ka kuthe kevha kase sarva lok ghar goshti",
            "Maharashtra Bharat Mumbai Pune Marathi bhasha sanskriti itihaas parampara shikshan samaaj rajkaran arthavyavastha vidnyan tantrvidnyan vikas"
        ],
        govtexam: [
            "Bhartiya Samvidhan vishvataala sarvaat motha likhit samvidhan aahe. Dr. B R Ambedkar yaanche pradhan nirmata hote. Seviis January ekonish she panchaas madhye te laagu zhaale. Samvidhanat moolbhoot adhikaar aani nirdeshak tatve spasht aahet.",
            "Bharat madhe sheti arthavyavasthecha kana aahe. Gramin janateche mottha bhag shetivr avlambun aahe. Bhaat, gaahu, kaapus aani chaha Bharatacha mukhya pike aahet. Sarkaar shetkari kalyansaathi anek yojana raabavte.",
            "Bhartiya Loktantra madhe teen stambh aahet — Vidhimandal, Karyapalika aani Nyayapalika. He tinhi milun shaasan vyavastha santulit thevtaat. Nivdanuk Aayog sarva nivdanukancha sanchalan karte. Pratyek nagrikaala matadanacha adhikaar aahe."
        ]
    },
    tamil: {
        sentences: [
            "Computer-il vegamaaga type seivathu indraiya kaalathil migavum mukkiyamaana thiramai aagum.",
            "Thodarchi pairchiyyin moolam ungal typing vegathaiyum thuulliyanmaiyaiyum athigarikkalaam.",
            "Thavaru seiyya bayappadaadheeergal, thavarugaril irundhu dhaan naam sariyaaga katrukkolgirom.",
            "Keyboard-il viral-in sari nilaigal vegamaana typing-in unmaiyaana saaviththiram.",
            "Thinanthorum padhinaindhu nimidangal kavanam seluthhi payirchi seidhal neeengal oru nibunaraagalaam.",
            "Cyberpunk theemavilum keyboard oliyilum typing anubavam migavum sugamaagum.",
            "Mudhalil thulliyathanamai meethu kavanam seluthungal, vegam thaamaagavae varum."
        ],
        easy: [
            "veedu palli velai naal iravu thanneer unavau anbau",
            "amma appa annan thangai nanbaan aasiriyar maanavan kudumbam",
            "nalladu keettadu unmai poi vettri tholvi makizhchi thunpam",
            "neram velai peyar indru naalai kaalai maalai naal iravu",
            "thanneer thee kaatru bhoomi vaanam maram poo pazham"
        ],
        story: [
            "Oru amaithiyaana kaatil Pip endra oru siru annil migavum uyaramaana maraththil eruppadhu endra mudivau eduthadhu. Kulir kaatru veesiyum Pip nirgavillai, melae senru azhagiya suriyan maraivai kaanadu."
        ],
        quotes: [
            "Kalvi ondrae sirandha selvam.",
            "Uyarchi mudhalil kattraal varum.",
            "Ariivu dhaan valiimai — Francis Bacon"
        ],
        commonwords: [
            "mattrum naan nee avan aval avargal naangal neengal irukkiradhu illai seiya seigiradhu irundhu varai udan endraal yaaru enna yean engae eppoadhu eppadi ellaam makkal veedu vishayam",
            "Tamilnadu Bharatham Chennai Madurai Tamil mozhi panpaadu varalaru marabau kalvi samugam arasiyal porulaatharam ariviyal thozhilnutpam valarchi"
        ],
        govtexam: [
            "Bharadha Arasiyal Amaipu ulagil migavum neetamaana ezhuthapatta arasiyal amaipu. Dr. B R Ambedkar idhan mukkiya amaipaalar. Irubaththaaru January Aaayirathuth Thollaayirathuth Aimbadhu-il idhu amalkku vandhadhu. Arasiyal amaipu-il adippadai urimaikkalum vazhikkaattum kodkai theligaaga kuripidappattulladhu.",
            "Bharathathil velaanmai porulaadhaara mudhugezhumbu. Giraama makkalin perum pakudhi velaanmaiyai sarndhu irukkiradhu. Nel, godumai, paruthii mattrum theyilai Bharathin mukkiya payirgal. Arashu vivasaayigalin nanmaikkaaga pala thittangalai nadathukiardhu.",
            "Bharadha Jananaayagathil moondru thoongal ulladhu — Sattamanram, Nirvaagam mattrum Neethi Mandram. Ivai moondrum serndhu aalumai amaipu-ai samanilayil vaithirukkindrana. Therdhal Aiyam ellaa therdhalgalaiyum nadathugiardhu. Ovvoru kudimagan-ukkum vaaku alikkkum urimai undu."
        ]
    },
    telugu: {
        sentences: [
            "Computer lo veganga type cheyadam nati yugamlo oka chaala mukhyamaina naipunyam.",
            "Kramam tappakunda saadhanato mee typing vegam mariyu kachithatvam rendoo mettugulu pedathaayi.",
            "Tappulu cheyadaaniki bhayapaddaku endukante tappulanunde manamu sarigga nerchukovachu.",
            "Keyboard lo vreella sari sthanam vegamaina typing ki asalu taalamu.",
            "Prathi roju padihenu nimishaalu shraddhaga saadhanaa chesthe meeru oka nipunulavachu.",
            "Cyberpunk theme mariyu keyboard sabdhaalu typing anubhavanniki inka romanchagaa untundhi.",
            "Modatha kachithatvam pai dhyaanam pettandi, vegam sadhanato taanuga vasthundhi."
        ],
        easy: [
            "illu baḍi pani roju raatri neellu aahaaram premaa",
            "amma naanna anna chelli snehithudhu guru vidyaarthi kutumbam",
            "manchi chedu nijam abaddham jayam apajayam santosham duhkham",
            "samayam pani peruu ipuduu repu podhdunna saayantram roju raatri",
            "neellu nippu gaali bhoomi aakaasham chettuu poovuu panduu"
        ],
        story: [
            "Oka praanthamaina adavilo Pip ane oka chinni udatha anthaa yethththina chettuu yekkaadaniki nirdharinchindhi. Chali gaali veesthunna Pip aagaledu, paikki veelli andhamaina suryaasthamananni choosindhi."
        ],
        quotes: [
            "Vidya anthaa goppa sampada.",
            "Kashtam vijayaniki taalamu.",
            "Jnaanamee shakthi — Francis Bacon"
        ],
        commonwords: [
            "mariyu nenu neevu aatanu aamee vaalluu manam meeru undhi kaadhu cheyadam chesthunnaanu nundhi varaku tho kosam endukante evaru emiti enduku ekkada yeppudu yelaaga anthaa janulu illu vishayam",
            "Telangana Andhra Pradesh Bharatam Hyderabad Vijayawada Telugu bhasha samskruti charitra sampradayam vidya samajam rajakeeyam arthashaastram shaastram saangethikam abhivruddhi"
        ],
        govtexam: [
            "Bharata Raajyanga Vidhanam prapanchamlo anthaa pedda likithamaina raajyanga vidhanam. Dr. B R Ambedkar danini rachana chesina pradhana vyakthi. Iravai aaru January padihenu vandala yabhai lo adhi amalloki vacchindhi. Raajyanga vidhanamlo praamanika hakkuluu mariyu aadeshaka suutraalu spashthanga perkonnabaddayi.",
            "Bharatadeshaamlo vyavasaayam arthavyavastha vennumuuka. Grameena prajallo pedda bhagam vyavasaayam pai aadhaarapadutharu. Varidhaanyam, godhumalu, pratthhi mariyu theeyaaku Bharathadeshpu pradhana pantalu. Prabudhdhvam rythu sheyaniki aneka padhhathulanu naduputhundhi.",
            "Bharatha Prajaaswaamyamlo moodu sthambhalu unnaayi — Shaasana Sabhaalu, Karyanirvahana Vibhaagam mariyu Nyaayavyavastha. Ee moodu kalisi paalanaa vyavasthanu samathulyamlo unchutaayi. Yennikala Sanchaalakatvam anni yennikalanu nirvahisuthundi. Prathi pourudhudiki otu hakku undhi."
        ]
    },
    gujarati: {
        sentences: [
            "Computer par vegathi type karvu aajni duniyama ek atyant mahatvapurna kaushalya chhe.",
            "Niyamit abhyas dwara tamari typing gati ane satikta banne sudharashe.",
            "Bhulo karavathi darvu nahi karanke bhulomaathi j aapne baribar shikhiye chhiye.",
            "Keyboard par angalioni sachi sthiti vegili typingni khari chavi chhe.",
            "Daroj pandaar minit dhyan kendrit karine abhyas karva thi tame ek master bani shako chho.",
            "Cyberpunk theme ane keyboard avajno typing anubhav vadhu romanchak banave chhe.",
            "Pahela satikta par dhyan apo, gati apodap abhyas sathe aavshe."
        ],
        easy: [
            "ghar shala kam divas raat pani khorak prem",
            "maa baap bhai bahen mitra shikshak vidyarthi kutumb",
            "saru kharab sachu juthu jeet haar aanand dukh",
            "samay kam naam aaje kal savaar saanj divas raat",
            "pani aag pavan dharti aakash jhaad phul phal"
        ],
        story: [
            "Ek shant jangalma Pip namni ek nani khaas sauthi unchaa jhaad par chadhavaano nirdhar karyo. Thandi hava vaheti hati pan Pip atakyo nahi ane uppar pohchi ne ek sundar suryast joyo."
        ],
        quotes: [
            "Vidya dhan sauthi uttam dhan chhe.",
            "Parishram ej safalatani chavi chhe.",
            "Gyan ej shakti chhe — Francis Bacon"
        ],
        commonwords: [
            "ane hu tu te teo aame tame chhe nathi karvu karay chhe mathi sudhi sathe mate karanke je shu kem kya kyare kevi rite badha lok ghar vat",
            "Gujarat Bharat Ahmedabad Surat Gujarati bhasha sanskriti itihaas parampara shikshan samaj rajkaran arthavyavastha vidnyan takniki vikas"
        ],
        govtexam: [
            "Bhartiya Samvidhan vishwanu sauthi lambhu likhit samvidhan chhe. Dr. B R Ambedkar tena mukhya rachiyata hata. Chhavvis January Oganis so panchas ma te laagu thayu. Samvidhanma mulbhut adhikar ane nirdeshak tattvo spasht chhe.",
            "Bharat ma kheti arthavyavasthano kaanno chhe. Gramina janata no motho bhag kheti par nirbhar chhe. Chokha, ghaun, kapas ane cha Bharat na mukhya pako chhe. Sarkar khedut kalyan mate anek yojana chalaave chhe.",
            "Bhartiya Loktantra ma tran stambh chhe — Vidhanmandal, Karyapalika ane Nyaypalika. Aa tranney malune shashan vyavastha santulit raakhe chhe. Chunani Panch badha chunav nu sanchalan kare chhe. Darek nagarik ne matadan no adhikar chhe."
        ]
    },
    kannada: {
        sentences: [
            "Computer-nalli vegavaagi type maaduvudu innina kaaladalli atyanta mahatvada kaushala.",
            "Niyamita abhyaasadinda nimma typing vegavu mattu nirdoshata eradu mettugalu herchuttade.",
            "Tappugalu maadalu bhayapadabedi, tappuganinda navu sariyaagi kaliyutteve.",
            "Keyboard-nalli beralugala sari sthaana vegada typing-na nija beeganalli idde.",
            "Pratidina hadinaidhu nimishagalu gamanisu kotte abhyaasa maadidare nivu oru nipunaragabaliri.",
            "Cyberpunk theme mattu keyboard shabdagalu typing anubhavavu innashtu romanchakaraguvudu.",
            "Modalige nirdoshate mele gamanisu kolli, vega abhyaasadinda taaane baruttade."
        ],
        easy: [
            "mane shaale kelasa dina raathri neeru aahaara preeti",
            "amma appa anna tangi sneehita guru vidyaarthi kutumba",
            "olleya ketada nijaa sullu jayaa soolu santhoshaa duhkhaa",
            "samaya kelasa hesaru ivattu naalae beligge saayankala dina raatri",
            "neeru benkii gaali bhoomi aakaasha mara hoovu hannu"
        ],
        story: [
            "Ondu shaantavaada kaaddinalli Pip emba sanna arillu atyanta ettarada marannu eralu nirdarisitu. Tannana gaali besiyuu Pip nirgatilla, melakke hogi sundara suryaastannu kaanitu."
        ],
        quotes: [
            "Jnaanavae shreshta sampattu.",
            "Parishramave yashassu. Mattu vijayada beeganalli.",
            "Jnaana shakti — Francis Bacon"
        ],
        commonwords: [
            "mattu naanu neenu avanu avalu avaru naavu neevu aagide alla maadalu maaduttiddene inda vare jote aagi kaarana yaaru yenu yaake yelli yaavaaga hege ella makkaalu mane vishaya",
            "Karnataka Bharata Bengaluru Mysuru Kannada bhaashe samskruthi itihaasa sampradaaya shikshana samaaja raajakeeyam arthashastra vijna tantragnana belavanige"
        ],
        govtexam: [
            "Bharatiya Samvidhana jagatthina athi dodda likhita samvidhana. Dr. B R Ambedkar idara mukhya rachane gaaru. Iravattaaru January hatthombattu nooru ayivattu alli idu jaariyaayitu. Samvidhanadalli moolaboota hakuugalu mattu nirdeshaka tattvagalu spastavaagi neerpisalaagiide.",
            "Bharatadalli krushi arthavy avastheya belleyembu aagide. Graamina janatheyalli hechchu bhaga krushi mele avalambisiruttare. Bhattha, godhi, hatthi mattu chaaha Bharatada mukhya beleegalu. Sarkaara raithara shreeyoshtigaagi aneka yojanegalannu nadestide.",
            "Bharateeya Prajaaprabhutyadalli mooru stambhagalu iive — Shaasana Sabhegalu, Karyanirvaahaka mattu Nyaayaanga. Ee mooru seritu aadalitha vyavasthennu samatholaniyalli ittirutade. Chunavana Aayoga ella chunavanegalannu nadestide. Pratiobba paurananiguu mataadaana hakkidde."
        ]
    },
    malayalam: {
        sentences: [
            "Computer-il vegathil type cheyyunnathu innale kaalath valare pradhaanapettathoru kaushalyam aanu.",
            "Niranthara abhyaasam vazhiye ningalude typing vegavum thulliyathmavum rendilum valarchha undaakkum.",
            "Thettugal cheyyaan pedhikkaruthe, karanam thettugalil ninnaanu naam shariyaayi padikkunnathu.",
            "Keyboard-il viralugalude shari sthaanam vegatheyarikkunna typing-ude yathaartha kunniyaanam.",
            "Divasavum pathinnanjchu minute shraddhayodu abhyasam cheythaal neengal oru master aakum.",
            "Cyberpunk theme-um keyboard shabdavum typing anubhavam kooduthal romanchakaramaakkum.",
            "Aadyam thulliyathmayil shraddhikkukaa, vegam abhyaasathodu thaanae varum."
        ],
        easy: [
            "veedu school joli divasam raathri vellam bhakshanam sneham",
            "amma achan chettan chechhi koottukaaran adhyaapakan vidyaarthi kudumbam",
            "nalla chetha sathyam kalavum jayam tholvi santhosham duhkham",
            "samayam joli peru innu naale raavile vaikunneram divasam raathri",
            "vellam thii kaattu bhoomi aakasham maram poovu phal"
        ],
        story: [
            "Shanthamaaya oru vanatthil Pip ennu oru cheriya annan ettavum uyaramulla maram kayaraan theerumaanichchu. Thannuppu kaattadichittum Pip nilachilla, mukalil ethhi oru sundhara suryaastham kaanukayum cheythu."
        ],
        quotes: [
            "Vidya oru deepamaanam.",
            "Adhvaana phalamae vijayam.",
            "Jnaanam shakti aanu — Francis Bacon"
        ],
        commonwords: [
            "um njaan nee avan aval avar njaangal ningal aanu alla cheyyuka cheyyunnundhu ninnu vare oppam kaarannam aaru enthu enthinau evide eppol engane ellaam manushyar veedu kaaryam",
            "Kerala Bharatham Thiruvananthapuram Kochi Malayalam bhaasha samskaaram charithram parampaaryam vidhyaabhyaasam samooham rajakeeyam arthashaastram shaastram saamkethika vidya valarchha"
        ],
        govtexam: [
            "Bharathathinte Bharanaghadana lokathile ettavum neediya likhitha bharanaghadanayaanu. Dr. B R Ambedkar idhinthe pradhaana rachayithaavaayi. Irupatthiyaaru January Aayirathithollaayiratthiaempathu il idhu nildaththil vannu. Bharanaghadanayil moulika avakashangalum nirdeshaka tathvangalum vyakthamaayi ullathu.",
            "Bharathathil krishi sambadhavyavasthayude naddellaaanu. Graamapradeshangalile janangalude valiya bhagam krishiyil aashritharaanu. Nellum godhoomavum parutthiyum chaayayum Bharathathinte pradhaana vilakkalaaanu. Sarkaar karshaka kshemathhinaayi pala padhthathigal nadatthunnu.",
            "Bharatheeya Jaanadhipatyathil munndu thoonu undu — Nirmmaana Sabhakal, Kaarya Nirvaahakavum, Neethinyaaya Vyavasthayum. Ee moonnum chernnu bhaarana kramatthe samathulitham nirtthunnu. Theranjeduppu Commission ellaa theranjeduppukalum nadatthunnu. Ovvoru pouranumakkum vottu cheyyaan avakashamu undu."
        ]
    },
    odia: {
        sentences: [
            "Computer re druta type kariba aaji kaalare eka atyanta mahatvapoorna dakshata.",
            "Niyamita abhyaasa dwara apananka typing gati ebam nirbhulataa ubhaya sudhariba.",
            "Bhula karibaku darantu nahi karana bhularu hi amae sathika bhabe shikhuthau.",
            "Keyboard re angulira sathika sthiti druta gatira sathika chhabhi aahe.",
            "Pratidinaa pandara minute dhyana deiki abhyaasa kale aapana ekajana master heipaaribe.",
            "Cyberpunk theme ebam keyboard shabda typing anubhaba ku aahuree romanchakara karuchhi.",
            "Pahile nirbhulataa uparaku dhyana dia, gati abhyaasa sahita aapu aapu aasiba."
        ],
        easy: [
            "ghara bidyaalaya kaama dina raati jala khaadya prema",
            "maa baabaa bhaai bhauNi bandhu shikshaka chhaatraa paribaar",
            "bhala kharap sacha mithyaa jaya paraajaya aananada dukha",
            "samaya kaama naama aaji kaali sakala sandhyaa dina raati",
            "jala aagni haaoyaa prithiibee aakaash gacha phula phala"
        ],
        story: [
            "Eka shaanta jangalare Pip naama eka sana kaatha bidaala saha theka unnata gacha upari chaadhiba ku thika gala. Thanda baatasa bahuthilaa kintu Pip thaambila nahi ebam upare pohonchi ekaa sundara surjaasta dekhilaa."
        ],
        quotes: [
            "Gyana hi shreshtha sampada.",
            "Parishram hin safalatar chaabhi.",
            "Gyana hi shakti — Francis Bacon"
        ],
        commonwords: [
            "ebam mu tu se se semaane aame aapana aate nahin kariba karuchhi thaaru parjyanta saathire paain karana je ki kaahinki kuaade kebe kaemiti saba loka ghara kathaa",
            "Odisha Bhaarata Bhubaneshwara Cuttack Odia bhaashaa samskruti itihaas parampara shikhshaa samaaja rajneeti arthaniti bignyana pranidhi vikaas"
        ],
        govtexam: [
            "Bhartiya Sambidhaan biswa ra saha theka lamba likhit sambidhaan. Dr. B R Ambedkar ehaar mukhya rachayitaa. Chhabbish January Unish Shaha Panchaash re eta laagu hela. Sambidhaan re maulik adhikaar ebam nirdeshak tattwa spashta bhabe ullekh achhi.",
            "Bharat re krishi arthaniti ra merudanda. Gramin janata ra badaa bhaag krishi upare nirbhar. Dhaan, gahum, kapas ebam chaa Bharat ra mukhya phasal. Sarkar kisan kalyan paain aneka yojana chalauchhi.",
            "Bhartiya Loktantra re tini stambh achhi — Bidhan Sabha, Karyapalika ebam Nyayalaya. Ye tinitiey mili shaasan byabasthaa ku santulit rakhanti. Nirbachan Aayog saboo nirbachaan ra sanchaalan kare. Pratyek nagarik ku matadaan ra adhikaar achhi."
        ]
    },
    punjabi: {
        sentences: [
            "Computer te tezi naal type karna aaj de samey vich ik bahut mahatvapooran hunar hai.",
            "Niyamit abhiaas naal tuhaadi typing gati ate shutdata doveyen vich sudhaar hoga.",
            "Galtiaan karan ton na daro kiunkee galtiyaan ton hi aseen sahi tarike naal sikhdey haan.",
            "Keyboard te ungalaan di sahi jagah tez typing di asli kunji hai.",
            "Har din pandhraan minit dhyaan lagaake abhiaas karo taan tusi ek maahir ban sakde ho.",
            "Cyberpunk theme ate keyboard avaazaan typing anubhav nu hor vi romanchak banaundiaan.",
            "Pehilaan shutdata te dhyaan deo, gati abhiaas naal aapae aa javegi."
        ],
        easy: [
            "ghar school kamm din raat paani khaana piaar",
            "maa baap bhara bhain mitr adhiaaapak vidiaarthi parivaar",
            "changaa bura sach jhooth jit haar kushi dukh",
            "velaa kamm naav aaj kal savere shaam din raat",
            "paani agg hava dharti aasmaan rukkh phul phal"
        ],
        story: [
            "Ik shaant jangal vich Pip naam dee ik chhoti gilahri ne sab ton uchche darakhhat te chadhhan da faisla kita. Thandi hava vag rahi si par Pip rukiaa nahi ate uppar jaake ik sundar surajdhaal dekheaa."
        ],
        quotes: [
            "Viddiaa vichaari taan parupkaari.",
            "Mihenat karnaa hi kamyaabi di chaabi hai.",
            "Giaan hi shakti hai — Francis Bacon"
        ],
        commonwords: [
            "ate main toon oh oh oh aseen tuseen hai nahi karna kar rihaa ton takk naal layi kiunkee jo ki kyun kithe kado kiven sab lok ghar gall",
            "Punjab Bharat Chandigarh Amritsar Punjabi bhaashaa sabhiaachaar itihaas reet sikhiaa samaaj raajneeti arthachaara vigiaan taknaaluji vikaas"
        ],
        govtexam: [
            "Bhartiya Samvidhan duniya da sab ton lamba likhit samvidhan hai. Dr. B R Ambedkar is de mukhh rachnaakaar san. Chhabbee January Unee sau panjaa vich eh laagoo hoiaa. Samvidhan vich mool adhikaar ate nirdeshak tatv spasht hain.",
            "Bharat vich kheti arthachaare di reed dee haddi hai. Pendu lokan da vadda hissa kheti te nirbhar hai. Jhona, kanak, kapah ate chaa Bharat diyaan mukhh faslan hain. Sarkaar kisan bhalaai layi anek yojnaavan chalaundi hai.",
            "Bhartiya Loktantar vich tinn thammh hain — Vidhan Mandal, Kaarjpaalika ate Niaaypaalkaa. Eh tinney mil ke shaasan vyavastha nu santulit rakhde hain. Chunav Commission saare chunaavan da sanchalan karda hai. Har naagrik nu votaan paun da adhikaar hai."
        ]
    },
    urdu: {
        sentences: [
            "Computer par tezi se type karna aaj ke daur mein ek bahut ahem maharaat hai.",
            "Baqaida mashq se aapki typing raftaar aur durusti dono mein behteri hogi.",
            "Ghaltiyan karne se na dariyen kyunke ghaltiyon se hi hum sahi tariqe se seekhte hain.",
            "Keyboard par ungliyon ki sahi jagah tez raftaar ki asli kunji hai.",
            "Har roz pandrah minute tawajjoh se mashq karein toh aap ek mahir ban sakte hain.",
            "Cyberpunk theme aur keyboard awaazein typing tajurbe ko aur dillchasp banati hain.",
            "Pehle durusti par tawajjoh dein, raftaar mashq ke saath khud ba khud aa jayegi."
        ],
        easy: [
            "ghar school kaam din raat paani khaana mohabbat",
            "ammi abbu bhai behen dost ustaad taalib ilm khandan",
            "achha bura sach jhoot jeet haar khushi gham",
            "waqt kaam naam aaj kal subah shaam din raat",
            "paani aag hawa zameen aasmaan darakht phool phal"
        ],
        story: [
            "Ek pur sukoon jungle mein Pip naami ek chhoti gilahri ne sab se oonche darakht par chadhne ka faisla kiya. Thandi hawa chal rahi thi par Pip ruka nahi aur oopar jaake ek khoobsurat ghuroob e aaftaab dekha."
        ],
        quotes: [
            "Ilm roshni hai.",
            "Mehnat kamyaabi ki kunji hai.",
            "Ilm taqat hai — Francis Bacon"
        ],
        commonwords: [
            "aur main tum woh woh woh hum aap hai nahi karna kar raha hai se tak ke saath ke liye kyunke jo kya kyun kahan kab kaise sab log ghar baat",
            "Pakistan Bharat Lahore Delhi Urdu zubaan tehzeeb taarikh riwayaat taleem muashra siyaasat maishiat science technology taraqqee"
        ],
        govtexam: [
            "Hindustan ka Aayeen duniya ka sab se bada tahreeri aayeen hai. Dr. B R Ambedkar is ke ahem banane waale the. Chhabbees January Unees Sau Pachaas mein yeh naafiz hua. Aayeen mein bunyaadi huqooq aur hidaayati usool wazeh taur par darj hain.",
            "Bharat mein ziraat maaishiyaat ki reed ki haddi hai. Daihi abaadi ka ek bada hissa ziraat par inhisaar karta hai. Chaawal, gandum, kapas aur chai Bharat ki ahem faslen hain. Hukoomat kisaanon ki bhalaai ke liye kai mansoobe chalaati hai.",
            "Bhartiay Jamhooriyat mein teen sutoon hain — Qaanoon Saaz Idaara, Intizaami Idaara aur Adliya. Ye teeno mil kar nizaam e hukoomat ko mutawazin rakhte hain. Chunav Commission tamaam intikhaabaat ka intizaam karta hai. Har shehri ko vote dene ka haq hai."
        ]
    },
    assamese: {
        sentences: [
            "Computer-ot drutagatit type kora aajir jugot ek atyanta gurutpurna dakshata.",
            "Niyomito obhyasar jorioyote apunar typing gati aru nirbuhlota duyotai bridhhi paabo.",
            "Bhul koribole bhoy napabo kaaron bhulor pora amii bhalobhabe shikhon.",
            "Keyboard-ot aangulir sotthik othibhaan drutgatir protkhyo saabi.",
            "Pratidine pondhoro minute monojogh diya obhyas korile apuni ekjon mohaapurush hobo pare.",
            "Cyberpunk theme aru keyboard xobde typing onubhoboke aaroo romanchkar kore tule.",
            "Prothmote nirbuhlota-r upor monojogh diyok, goti obhyaasor logote nijei aahibo."
        ],
        easy: [
            "ghor bidyaloy kam din raati paani aahar morom",
            "maa deutaa bhaai bhaini bondhu sikkhok chhaatraa poribaal",
            "bhal beya haat mithhya joy paraajoy aanondo dukh",
            "xomoy kaam naam aaji kaali puwaa godhuli din raati",
            "paani jui baatah prithibi aakash goch phul phal"
        ],
        story: [
            "Ekhon shaanto haabeet Pip naamar eta xoroo kaathmora aataitokok ucho gosot uthaar siddhaanto lowa hoisil. Thaanda bataah bolisleo Pip thamaka naasil aru upor goi ata xundor xurjyaasta dekha paaile."
        ],
        quotes: [
            "Gyaneei xokti.",
            "Porixrom xopholotar saabi.",
            "Gyaan xokti — Francis Bacon"
        ],
        commonwords: [
            "aru moi tumi xi taai teolouk aami aponalok aase nahoy koribole korisau pora xoloi logot baabe kaaran je ki kio kot kevaa kibhabe xokoluu maanuh ghor kothaa",
            "Assam Bharat Guwahati Jorhat Asomiya bhaaxaa xonskriti itihaas porompora xikhyaa xomaaj raajneeti orthonoiti bigyaan projukti bikaax"
        ],
        govtexam: [
            "Bhartiya Sombidhan biswor aataitokok dirgho likhit sombidhan. Dr. B R Ambedkar iyaar mukhyo rosonakarta. Sobbis January Unish Xo Ponsaas ot eta karjokor hoisil. Sombidhaanot moulik odhikaar aru nirdeshak tatbya sposhto bhabe ullekh aase.",
            "Bharat ot krishi orthonoitir moroudondo. Graamya janta-r ek bor aawngsho krishi-r upor nirbhorshiil. Dhaan, godhum, kapaah aru saaah Bharat-r mukhyo phosol. Xorkaar krishok kolyaanor baabe onek yojanaa saalai aase.",
            "Bhartiya Loktantra-t tini stombho aase — Bidhan Sobha, Kaarjonirbahak aru Bichaar Bivaag. Ei tiniu logolage xaashan byabasthaa samotul raakhe. Nirbachan Aayog xobu nirbachanor parishaalan kore. Pratyek nagorik-or matodaanor odhikaar aase."
        ]
    },
    japanese: {
        sentences: [
            "taipingu wo hayaku opakaku utsu koto wa, gendai ni oite hijou ni juuyou na sukiru desu.",
            "mainichi no kotsukotsu to shita renshuu ga, anata no taipingu sokudo wo kakutsutsu ni koujou sasemasu.",
            "saisho no uchi wa misu wo osoreru hitsuyou wa arimasen. sore wa seichou no tame no suteppu desu.",
            "yubi wo tsune ni houmu pojishon ni oku koto ga, taipingu kouritu wo takameru gouginritsu desu.",
            "keizoku wa chikara nari. suu shuukan no renshuu de anata no taipingu supiido wa nibai ni narimasu."
        ],
        easy: [
            "neko inu hon ie taiyou tsuki mizu umi",
            "tomodachi shigoto jikan ai hito kyou yoru sora",
            "ringo banana taberu oishii amai yoi ookii chiisai",
            "aruku hanasu warau nemuru yume beddo jikan",
            "otokonoko onnanoko gakkou tsukue isu pen kami"
        ],
        story: [
            "shizuka na mori no naka de, chiisana risu no pip wa ichiban takai ooku no ki ni noboru koto ni shimashita. tsumetai kaze ni eda ga yurete imashita ga, pip wa akiramezu ni noboritsuduke, choujou kara yuuhi wo nagamemashita."
        ],
        quotes: [
            "subarashii shigoto wo suru yuitsu no houhou wa, jibun no shigoto wo aisuru koto da. — Steve Jobs",
            "kannan no naka ni, kikai ga aru. — Albert Einstein",
            "dore dake yukkuri susundemo, tomari sae shinakereba mondai wa nai. — Confucius"
        ],
        commonwords: [
            "kore sore are kono sono ano watashi anata kare kanojo hito mono koto toki basho uchi ie gakkou shigoto tomodachi kazoku nihon nihongo eigo hon pen tsukue isu heya mado doa kuruma jitensha densha eki michi kawa yama umi mori sora",
            "kumo ame yuki kaze taiyou tsuki hoshi hi mizu ki hana inu neko tori sakana ringo banana taberu oishii amai yoi ookii chiisai aruku hanasu warau nemuru yume beddo jikan otokonoko onnanoko gakkou tsukue isu pen kami",
            "taipingu wo hayaku opakaku utsu koto wa gendai ni oite hijou ni juuyou na sukiru desu mainichi no kotsukotsu to shita renshuu ga anata no taipingu sokudo wo kakutsutsu ni koujou sasemasu saisho no uchi wa misu wo",
            "yubi wo tsune ni houmu pojishon ni oku koto ga taipingu kouritu wo takameru gouginritsu desu keizoku wa chikara nari suu shuukan no renshuu de anata no taipingu supiido wa nibai ni narimasu shizuka na mori no",
            "subarashii shigoto wo suru yuitsu no houhou wa jibun no shigoto wo aisuru koto da kannan no naka ni kikai ga aru dore dake yukkuri susundemo tomari sae shinakereba mondai wa nai"
        ],
        govtexam: [
            "kokumin wa subete hou no moto ni byoudou de ari, jinsyu, shinjou, seibetsu ni yori sabetsu sarenai.",
            "koumuin wa zenkoku no houshisha de ari, kousei katsu seijitsu ni shokumu wo suikousuru gimu wo ou.",
            "gyousei no toumeisei to kouritsuteki na un-ei ga, shakai no antei to hatten no kiso to naru."
        ]
    },
    portuguese: {
        sentences: [
            "Aprender a digitar rapidamente no teclado é uma habilidade essencial hoje em dia.",
            "A prática constante irá melhorar a sua velocidade e precisão sem qualquer dúvida.",
            "Não tenha medo de cometer erros no início, eles fazem parte do processo de aprendizagem.",
            "Mantenha os dedos na linha de base para obter a máxima eficiência ao escrever.",
            "A persistência é a chave para duplicar as suas palavras por minuto em poucas semanas.",
            "O design moderno e os efeitos sonoros tornam a prática diária muito mais divertida.",
            "Foque na precisão primeiro, e a velocidade virá naturalmente com a memória muscular."
        ],
        easy: [
            "casa cão gato sol lua livro agua vida",
            "amigo trabalho tempo amor feliz hoje noite dia",
            "maçã banana comer comida doce bom grande pequeno",
            "caminhar falar sorrir rir dormir sonhar cama tempo",
            "rapaz rapariga escola classe mesa cadeira caneta papel"
        ],
        story: [
            "Numa floresta muito tranquila, um pequeno esquilo chamado Pip decidiu subir à árvore mais alta. Apesar do vento fresco, Pip não desistiu e ao chegar ao topo desfrutou de um lindo pôr do sol."
        ],
        quotes: [
            "A única maneira de fazer um excelente trabalho é amar o que faz. — Steve Jobs",
            "No meio de cada dificuldade reside a oportunidade. — Albert Einstein",
            "Não importa quão devagar vá, desde que não pare. — Confúcio"
        ],
        commonwords: [
            "o a os as em e que um uma de é são para com por seu sua seus suas eles elas eu neste nesta ter de ou um tinha por palavra mas não o que tudo foram nós quando seu pode disse lá usar un cada qual ela fazer como seu se será cima outro sobre",
            "casa cão gato sol lua livro água vida amigo trabalho tempo amor feliz hoje noite dia maçã banana comer comida doce bom grande pequeno caminhar falar sorrir rir dormir sonhar cama tempo rapaz rapariga escola classe mesa cadeira caneta papel",
            "aprender a digitar rapidamente no teclado é uma habilidade essencial hoje em dia a prática constante irá melhorar a sua velocidade e precisão sem qualquer dúvida não tenha medo de cometer erros no início eles fazem parte",
            "mantenha os dedos na linha de base para obter a máxima eficiência ao escrever a persistência é a chave para duplicar as suas palavras por minuto em poucas semanas o design moderno e os efeitos sonoros tornam a prática",
            "foque na precisão primeiro e a velocidade virá naturalmente com a memória muscular e o treino diário constante não importa quão devagar vá desde que não pare e continue a progredir sempre"
        ],
        govtexam: [
            "A Constituição assegura a igualdade de todos perante a lei, sem distinção de qualquer natureza.",
            "A administração pública direta e indireta obedecerá aos princípios de legalidade, impessoalidade e moralidade.",
            "O serviço público qualificado promove o desenvolvimento social e o bem-estar de toda a população."
        ]
    }
};

// Programmatically generate subsets for all 15 Govt Exam categories for ALL languages
const ALL_GOVT_EXAM_KEYS = [
    'govtexam', 'ssc', 'rrb', 'highcourt', 'ldc',
    'statepsc', 'police', 'paramilitary', 'banking', 'postal',
    'defense', 'kvs', 'epfo', 'fci', 'districtcourt'
];

Object.keys(multilingualLessons).forEach(lang => {
    const langObj = multilingualLessons[lang];
    if (!langObj) return;
    if (!langObj.govtexam || !Array.isArray(langObj.govtexam) || langObj.govtexam.length === 0) {
        langObj.govtexam = langObj.sentences || lessons.govtexam;
    }
    const g = langObj.govtexam;
    langObj.ssc = g.filter((_, i) => i % 5 === 0 || i % 5 === 1);
    langObj.rrb = g.filter((_, i) => i % 5 === 1 || i % 5 === 2);
    langObj.highcourt = g.filter((_, i) => i % 5 === 2 || i % 5 === 3);
    langObj.ldc = g.filter((_, i) => i % 5 === 3 || i % 5 === 4);
    langObj.statepsc = g.filter((_, i) => i % 5 === 4 || i % 5 === 0);
    langObj.police = g.filter((_, i) => i % 4 === 0 || i % 4 === 2);
    langObj.paramilitary = g.filter((_, i) => i % 4 === 1 || i % 4 === 3);
    langObj.banking = g.filter((_, i) => i % 3 === 0);
    langObj.postal = g.filter((_, i) => i % 3 === 1);
    langObj.defense = g.filter((_, i) => i % 3 === 2);
    langObj.kvs = g.filter((_, i) => i % 6 === 0 || i % 6 === 3);
    langObj.epfo = g.filter((_, i) => i % 6 === 1 || i % 6 === 4);
    langObj.fci = g.filter((_, i) => i % 6 === 2 || i % 6 === 5);
    langObj.districtcourt = g.filter((_, i) => i % 4 === 2 || i % 4 === 0);

    ALL_GOVT_EXAM_KEYS.forEach(k => {
        if (!langObj[k] || !langObj[k].length) langObj[k] = g;
        lessons[k] = langObj[k];
    });
});

ALL_GOVT_EXAM_KEYS.forEach(k => {
    lessons[k] = (multilingualLessons.english && multilingualLessons.english[k]) ? multilingualLessons.english[k] : lessons.govtexam;
});

// --- DYNAMIC RENDERING OF DROPDOWNS ---
const THEMES_LIST = [
    { id: "metablue", name: "Meta Blue", icon: "🔵" },
    { id: "metahorizon", name: "Meta Horizon", icon: "♾️" },
    { id: "metathreads", name: "Meta Threads", icon: "🧵" },
    { id: "naturezen", name: "Nature Zen", icon: "🌿" },
    { id: "darkteak", name: "Dark Teak Wood", icon: "🪵" },
    { id: "alpineforest", name: "Alpine Forest", icon: "🌲" },
    { id: "saharadune", name: "Sahara Dunes", icon: "🏜️" },
    { id: "autumnmaple", name: "Autumn Maple", icon: "🍂" },
    { id: "bamboorain", name: "Bamboo Forest", icon: "🎋" },
    { id: "cedarcabin", name: "Cedar Cabin", icon: "🏡" },
    { id: "mojavedesert", name: "Mojave Desert", icon: "🌵" },
    { id: "himalayanmist", name: "Himalayan Mist", icon: "⛰️" },
    { id: "goldenmeadow", name: "Golden Meadow", icon: "🌾" },
    { id: "cyberpunk", name: "Cyberpunk", icon: "🌌" },
    { id: "matrix", name: "Matrix", icon: "🟩" },
    { id: "synthwave", name: "Synthwave", icon: "🌇" },
    { id: "dracula", name: "Dracula", icon: "🧛" },
    { id: "tokyonight", name: "Tokyo Night", icon: "🗼" },
    { id: "rosepine", name: "Rose Pine", icon: "🌹" },
    { id: "nord", name: "Nord Frost", icon: "❄️" },
    { id: "gruvbox", name: "Gruvbox Retro", icon: "🪵" },
    { id: "monokai", name: "Monokai Neo", icon: "🌺" },
    { id: "onedark", name: "One Dark Pro", icon: "🕶️" },
    { id: "forest", name: "Forest Moss", icon: "🌲" },
    { id: "solarizedlight", name: "Solarized Light", icon: "☀️" },
    { id: "cyberlime", name: "Cyber Lime", icon: "🍋" },
    { id: "aurapurple", name: "Aura Purple", icon: "🔮" },
    { id: "retrowave", name: "Retro Wave", icon: "📼" },
    { id: "cyberdust", name: "Cyber Dust", icon: "🌪️" },
    { id: "sunsetneon", name: "Sunset Neon", icon: "🌅" },
    { id: "lavender", name: "Lavender Cozy", icon: "🪻" },
    { id: "sakura", name: "Sakura Pastel", icon: "🌸" },
    { id: "oceanic", name: "Oceanic Deep", icon: "🌊" },
    { id: "laserlemon", name: "Laser Lemon", icon: "🍋‍🟩" },
    { id: "vintage", name: "Vintage Typewriter", icon: "📜" },
    { id: "cyberpunk2077", name: "Cyberpunk 2077", icon: "💛" },
    { id: "hackergreen", name: "Hacker Green", icon: "💻" },
    { id: "velvet", name: "Royal Velvet", icon: "👑" },
    { id: "frozen", name: "Frozen Ice", icon: "🧊" },
    { id: "crimsonneon", name: "Crimson Neon", icon: "🩸" },
    { id: "pumpkin", name: "Pumpkin Spice", icon: "🎃" },
    { id: "electricblue", name: "Electric Blue", icon: "⚡" },
    { id: "pastelindigo", name: "Pastel Indigo", icon: "🎨" },
    { id: "olive", name: "Olive Garden", icon: "🫒" },
    { id: "coffee", name: "Coffee Cozy", icon: "☕" },
    { id: "cybermint", name: "Cyber Mint", icon: "🍃" },
    { id: "candyfloss", name: "Candy Floss", icon: "🍬" },
    { id: "stealth", name: "Stealth Dark", icon: "🥷" },
    { id: "rust", name: "Copper Rust", icon: "⚙️" },
    { id: "nebula", name: "Nebula Cloud", icon: "☁️" },
    { id: "mirage", name: "Mirage Sand", icon: "🏜️" },
    { id: "cyberamber", name: "Cyber Amber", icon: "🥃" },
    { id: "moonlight", name: "Moonlight Soft", icon: "🌙" },
    { id: "retroslate", name: "Retro Slate", icon: "🪨" },
    { id: "neongrape", name: "Neon Grape", icon: "🍇" },
    { id: "cybergold", name: "Cyber Gold", icon: "🪙" },
    { id: "eclipse", name: "Solar Eclipse", icon: "🌑" },
    { id: "midnightforest", name: "Midnight Forest", icon: "🌳" },
    { id: "cozywood", name: "Cozy Wood", icon: "🪵" },
    { id: "neonaqua", name: "Neon Aqua", icon: "🐬" },
    { id: "cybersalmon", name: "Cyber Salmon", icon: "🐟" },
    { id: "velvetrose", name: "Velvet Rose", icon: "🥀" },
    { id: "cyberstorm", name: "Cyber Storm", icon: "⛈️" },
    { id: "india", name: "India Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.67" y="0" fill="#ff9933"/><rect width="3" height="0.67" y="0.67" fill="#ffffff"/><rect width="3" height="0.67" y="1.33" fill="#138808"/><circle cx="1.5" cy="1" r="0.18" fill="#000080"/></svg>` },
    { id: "usa", name: "USA Flag", icon: `<svg viewBox="0 0 19 10" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="19" height="10" fill="#b22234"/><rect width="19" height="0.77" y="0.77" fill="#fff"/><rect width="19" height="0.77" y="2.3" fill="#fff"/><rect width="19" height="0.77" y="3.8" fill="#fff"/><rect width="19" height="0.77" y="5.4" fill="#fff"/><rect width="19" height="0.77" y="6.9" fill="#fff"/><rect width="19" height="0.77" y="8.5" fill="#fff"/><rect width="7.6" height="5.4" fill="#3c3b6e"/></svg>` },
    { id: "uk", name: "UK Flag", icon: `<svg viewBox="0 0 50 30" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="50" height="30" fill="#00247d"/><path d="M0,0 L50,30 M50,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L50,30 M50,0 L0,30" stroke="#cf142b" stroke-width="2.5"/><path d="M25,0 L25,30 M0,15 L50,15" stroke="#fff" stroke-width="10"/><path d="M25,0 L25,30 M0,15 L50,15" stroke="#cf142b" stroke-width="6"/></svg>` },
    { id: "japan", name: "Japan Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="2" fill="#ffffff"/><circle cx="1.5" cy="1" r="0.6" fill="#bc002d"/></svg>` },
    { id: "brazil", name: "Brazil Flag", icon: `<svg viewBox="0 0 220 154" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="220" height="154" fill="#009739"/><polygon points="110,14 14,77 110,140 206,77" fill="#fedd00"/><circle cx="110" cy="77" r="38" fill="#012169"/></svg>` },
    { id: "canada", name: "Canada Flag", icon: `<svg viewBox="0 0 2 1" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="2" height="1" fill="#ff0000"/><rect width="1" height="1" x="0.5" fill="#ffffff"/><path d="M1,0.2 L0.9,0.4 L0.7,0.35 L0.8,0.5 L0.6,0.6 L0.85,0.65 L0.8,0.85 L1,0.75 L1.2,0.85 L1.15,0.65 L1.4,0.6 L1.2,0.5 L1.3,0.35 L1.1,0.4 Z" fill="#ff0000"/></svg>` },
    { id: "germany", name: "Germany Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.67" y="0" fill="#000000"/><rect width="3" height="0.67" y="0.67" fill="#dd0000"/><rect width="3" height="0.67" y="1.33" fill="#ffcc00"/></svg>` },
    { id: "france", name: "France Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="1" height="2" x="0" fill="#0050a1"/><rect width="1" height="2" x="1" fill="#ffffff"/><rect width="1" height="2" x="2" fill="#ef4135"/></svg>` },
    { id: "italy", name: "Italy Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="1" height="2" x="0" fill="#009246"/><rect width="1" height="2" x="1" fill="#ffffff"/><rect width="1" height="2" x="2" fill="#ce2b37"/></svg>` },
    { id: "spain", name: "Spain Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.5" y="0" fill="#ad1519"/><rect width="3" height="1" y="0.5" fill="#fabd00"/><rect width="3" height="0.5" y="1.5" fill="#ad1519"/><circle cx="0.8" cy="1" r="0.25" fill="#ad1519"/></svg>` },
    { id: "argentina", name: "Argentina Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.67" y="0" fill="#74acdf"/><rect width="3" height="0.67" y="0.67" fill="#ffffff"/><rect width="3" height="0.67" y="1.33" fill="#74acdf"/><circle cx="1.5" cy="1" r="0.15" fill="#f6b426"/></svg>` },
    { id: "australia", name: "Australia Flag", icon: `<svg viewBox="0 0 2 1" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="2" height="1" fill="#00008b"/><path d="M0,0 L1,0.5 M1,0 L0,0.5" stroke="#fff" stroke-width="0.08"/><path d="M0.5,0 L0.5,0.5 M0,0.25 L1,0.25" stroke="#fff" stroke-width="0.15"/><path d="M0.5,0 L0.5,0.5 M0,0.25 L1,0.25" stroke="#ff0000" stroke-width="0.08"/><circle cx="0.5" cy="0.75" r="0.05" fill="#fff"/><circle cx="1.5" cy="0.3" r="0.03" fill="#fff"/><circle cx="1.7" cy="0.5" r="0.03" fill="#fff"/><circle cx="1.5" cy="0.7" r="0.03" fill="#fff"/><circle cx="1.3" cy="0.5" r="0.03" fill="#fff"/></svg>` },
    { id: "mexico", name: "Mexico Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="1" height="2" x="0" fill="#006847"/><rect width="1" height="2" x="1" fill="#ffffff"/><rect width="1" height="2" x="2" fill="#c8102e"/><circle cx="1.5" cy="1" r="0.18" fill="#8b5a2b"/></svg>` },
    { id: "southkorea", name: "S. Korea Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="2" fill="#ffffff"/><circle cx="1.5" cy="1" r="0.45" fill="#0a5bc2"/><path d="M1.5,0.55 A0.225,0.225 0 0,0 1.5,1 A0.225,0.225 0 0,1 1.5,1.45 A0.45,0.45 0 0,1 1.5,0.55" fill="#cd2e3a"/></svg>` },
    { id: "southafrica", name: "S. Africa Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="2" fill="#007a3d"/><path d="M0,0 L1.2,0.8 L3,0.8 L3,0 L0,0" fill="#e21836"/><path d="M0,2 L1.2,1.2 L3,1.2 L3,2 L0,2" fill="#002395"/><polygon points="0,0 0,2 1.2,1" fill="#000000"/><polygon points="0,0.2 0,1.8 1,1" fill="#ffb81c"/></svg>` },
    { id: "netherlands", name: "Netherlands Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.67" y="0" fill="#ae1c28"/><rect width="3" height="0.67" y="0.67" fill="#ffffff"/><rect width="3" height="0.67" y="1.33" fill="#21468b"/></svg>` },
    { id: "russia", name: "Russia Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.67" y="0" fill="#ffffff"/><rect width="3" height="0.67" y="0.67" fill="#0039a6"/><rect width="3" height="0.67" y="1.33" fill="#d52b1e"/></svg>` },
    { id: "switzerland", name: "Switzerland Flag", icon: `<svg viewBox="0 0 1 1" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="1" height="1" fill="#d52b1e"/><rect width="0.2" height="0.6" x="0.4" y="0.2" fill="#fff"/><rect width="0.6" height="0.2" x="0.2" y="0.4" fill="#fff"/></svg>` },
    { id: "sweden", name: "Sweden Flag", icon: `<svg viewBox="0 0 16 10" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="16" height="10" fill="#006aa7"/><rect width="2" height="10" x="5" fill="#fecc00"/><rect width="16" height="2" y="4" fill="#fecc00"/></svg>` },
    { id: "portugal", name: "Portugal Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="1.2" height="2" x="0" fill="#048343"/><rect width="1.8" height="2" x="1.2" fill="#ff0000"/><circle cx="1.2" cy="1" r="0.3" fill="#fedd00"/></svg>` },
    { id: "turkey", name: "Turkey Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="2" fill="#e30a17"/><circle cx="1.2" cy="1" r="0.45" fill="#fff"/><circle cx="1.32" cy="1" r="0.36" fill="#e30a17"/><polygon points="1.75,1 1.9,1.1 1.85,0.9 2,0.8 1.8,0.8" fill="#fff"/></svg>` },
    { id: "saudiarabia", name: "Saudi Arabia Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="2" fill="#006C35"/><rect width="1.8" height="0.12" x="0.6" y="1.3" fill="#fff"/></svg>` },
    { id: "singapore", name: "Singapore Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="1" fill="#ef3340"/><rect width="3" height="1" y="1" fill="#ffffff"/><circle cx="0.6" cy="0.5" r="0.3" fill="#fff"/><circle cx="0.7" cy="0.5" r="0.3" fill="#ef3340"/></svg>` },
    { id: "newzealand", name: "N. Zealand Flag", icon: `<svg viewBox="0 0 2 1" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="2" height="1" fill="#00247d"/><path d="M0,0 L1,0.5 M1,0 L0,0.5" stroke="#fff" stroke-width="0.08"/><path d="M0.5,0 L0.5,0.5 M0,0.25 L1,0.25" stroke="#fff" stroke-width="0.15"/><path d="M0.5,0 L0.5,0.5 M0,0.25 L1,0.25" stroke="#cf142b" stroke-width="0.08"/><circle cx="1.5" cy="0.3" r="0.03" fill="#cf142b" stroke="#fff" stroke-width="0.008"/><circle cx="1.7" cy="0.5" r="0.03" fill="#cf142b" stroke="#fff" stroke-width="0.008"/><circle cx="1.5" cy="0.7" r="0.03" fill="#cf142b" stroke="#fff" stroke-width="0.008"/></svg>` },
    { id: "greece", name: "Greece Flag", icon: `<svg viewBox="0 0 9 6" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="9" height="6" fill="#0d5eaf"/><rect width="9" height="0.67" y="0.67" fill="#fff"/><rect width="9" height="0.67" y="2" fill="#fff"/><rect width="9" height="0.67" y="3.33" fill="#fff"/><rect width="9" height="0.67" y="4.67" fill="#fff"/><rect width="3.33" height="3.33" fill="#0d5eaf"/><rect width="0.67" height="3.33" x="1.33" fill="#fff"/><rect width="3.33" height="0.67" y="1.33" fill="#fff"/></svg>` },
    { id: "egypt", name: "Egypt Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.67" y="0" fill="#c8102e"/><rect width="3" height="0.67" y="0.67" fill="#ffffff"/><rect width="3" height="0.67" y="1.33" fill="#000000"/><circle cx="1.5" cy="1" r="0.15" fill="#c09300"/></svg>` },
    { id: "ireland", name: "Ireland Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="1" height="2" x="0" fill="#169b62"/><rect width="1" height="2" x="1" fill="#ffffff"/><rect width="1" height="2" x="2" fill="#ff883e"/></svg>` },
    { id: "uae", name: "UAE Flag", icon: `<svg viewBox="0 0 3 2" width="20" height="14" style="vertical-align: middle; display: inline-block; border-radius: 2px;"><rect width="3" height="0.67" y="0" fill="#00732f"/><rect width="3" height="0.67" y="0.67" fill="#ffffff"/><rect width="3" height="0.67" y="1.33" fill="#000000"/><rect width="0.75" height="2" fill="#ff0000"/></svg>` }
];

const LANGUAGES_LIST = [
    { id: "english",   name: "English",      icon: "🇺🇸" },
    { id: "hindi",     name: "हिन्दी",          icon: "🇮🇳" },
    { id: "hinglish",  name: "Hinglish",      icon: "🇮🇳" },
    { id: "bengali",   name: "বাংলা",          icon: "🇮🇳" },
    { id: "marathi",   name: "मराठी",          icon: "🇮🇳" },
    { id: "tamil",     name: "தமிழ்",           icon: "🇮🇳" },
    { id: "telugu",    name: "తెలుగు",          icon: "🇮🇳" },
    { id: "gujarati",  name: "ગુજરાતી",         icon: "🇮🇳" },
    { id: "kannada",   name: "ಕನ್ನಡ",           icon: "🇮🇳" },
    { id: "malayalam", name: "മലയാളം",         icon: "🇮🇳" },
    { id: "odia",      name: "ଓଡ଼ିଆ",           icon: "🇮🇳" },
    { id: "punjabi",   name: "ਪੰਜਾਬੀ",          icon: "🇮🇳" },
    { id: "urdu",      name: "اردو",           icon: "🇮🇳" },
    { id: "assamese",  name: "অসমীয়া",         icon: "🇮🇳" }
];

const MODAL_BTN_TRANSLATIONS = {
    english: { typeAgain: "Type Again", playAgain: "Play Again" },
    hinglish: { typeAgain: "Type Again, Dost", playAgain: "Play Again, Dost" },
    hindi: { typeAgain: "फिर से टाइप करें", playAgain: "फिर से खेलें" },
    spanish: { typeAgain: "Escribir otra vez", playAgain: "Jugar otra vez" },
    french: { typeAgain: "Taper à nouveau", playAgain: "Rejouer" },
    german: { typeAgain: "Erneut tippen", playAgain: "Erneut spielen" },
    arabic: { typeAgain: "اكتب مجدداً", playAgain: "العب مجدداً" },
    japanese: { typeAgain: "もう一度タイプ", playAgain: "もう一度遊ぶ" },
    portuguese: { typeAgain: "Digitar novamente", playAgain: "Jogar novamente" }
};

const ENCOURAGEMENT_TRANSLATIONS = {
    english: {
        legendary: "LEGENDARY! You are a typing god! ⚡🚀",
        beast: "Amazing speed! You're a typing beast! 🚀",
        good: "Great job! A little more practice and you'll be elite! 👏",
        tryAgain: "No worries! Keep practicing, speed will follow naturally. 💪",
        gameTry: "Great attempt! Try again to beat your score!"
    },
    hinglish: {
        legendary: "LEGENDARY! Tum ek typing god ho! ⚡🚀",
        beast: "Bhai, kya speed hai! You're a typing beast! 🚀",
        good: "Great job dost! Thoda aur practice, you'll be elite! 👏",
        tryAgain: "Koi baat nahi! Keep practicing, speed apne aap aayegi. 💪",
        gameTry: "Great attempt, dost! Try again to beat your score!"
    },
    hindi: {
        legendary: "शानदार! आप टाइपिंग के भगवान हैं! ⚡🚀",
        beast: "गजब की स्पीड! आप टाइपिंग के उस्ताद हैं! 🚀",
        good: "बहुत बढ़िया! थोड़ी और प्रैक्टिस, और आप सबसे आगे होंगे! 👏",
        tryAgain: "कोई बात नहीं! अभ्यास करते रहें, स्पीड अपने आप आ जाएगी। 💪",
        gameTry: "शानدار प्रयास! अपना स्कोर सुधारने के लिए फिर से प्रयास करें!"
    },
    spanish: {
        legendary: "¡LEGENDARIO! ¡Eres un dios de la mecanografía! ⚡🚀",
        beast: "¡Velocidad increíble! ¡Eres una bestia de la mecanografía! 🚀",
        good: "¡Buen trabajo! ¡Un poco más de práctica y serás de la élite! 👏",
        tryAgain: "¡No te preocupes! Sigue practicando, la velocidad llegará de forma natural. 💪",
        gameTry: "¡Buen intento! ¡Inténtalo de nuevo para superar tu puntuación!"
    },
    french: {
        legendary: "LÉGENDAIRE ! Tu es un dieu de la dactylographie ! ⚡🚀",
        beast: "Vitesse incroyable ! Tu es un monstre du clavier ! 🚀",
        good: "Beau travail ! Encore un peu de pratique et tu seras dans l'élite ! 👏",
        tryAgain: "Pas de soucis ! Continue à t'entraîner, la vitesse viendra naturellement. 💪",
        gameTry: "Bel effort ! Réessaye pour battre ton score !"
    },
    german: {
        legendary: "LEGENDÄR! Du bist ein Tipp-Gott! ⚡🚀",
        beast: "Unglaubliche Geschwindigkeit! Du bist ein Tipp-Monster! 🚀",
        good: "Gute Arbeit! Noch etwas Übung und du gehörst zur Elite! 👏",
        tryAgain: "Keine Sorge! Übe weiter, die geplante Geschwindigkeit kommt von selbst. 💪",
        gameTry: "Guter Versuch! Versuche es noch einmal, um deine Punktzahl zu schlagen!"
    },
    arabic: {
        legendary: "أسطوري! أنت إله الكتابة! ⚡🚀",
        beast: "سرعة مذهلة! أنت وحش في الكتابة السريعة! 🚀",
        good: "عمل رائع! قليل من التدريب وستصبح من النخبة! 👏",
        tryAgain: "لا تقلق! استمر في التدرب، وستأتي السرعة بشكل طبيعي. 💪",
        gameTry: "محاولة رائعة! حاول مرة أخرى للتغلب على نتيجتك!"
    },
    japanese: {
        legendary: "伝説的！あなたはタイピングの神様です！ ⚡🚀",
        beast: "驚異的なスピード！タイピングの獣です！ 🚀",
        good: "素晴らしい！もう少し練習すればエリートになれます！ 👏",
        tryAgain: "心配いりません！練習を続ければスピードは自然に上がります。 💪",
        gameTry: "ナイスファイト！自己ベスト更新を目指してもう一度挑戦しましょう！"
    },
    portuguese: {
    }
};

function getDynamicPerformanceMessage(wpm, accuracy, lang = 'english') {
    const messages = {
        english: {
            perfect_accuracy: [
                "Outstanding! You typed at **${wpm} WPM** with **100% accuracy**. A flawless, absolute masterpiece! 👑🎯",
                "Perfection achieved! **${wpm} WPM** and not a single mistake (**100% Acc**). You are in a league of your own! 🏆✨",
                "Pure typing wizardry! **${wpm} WPM** with **100% precision**. Simply magnificent! 🎯💎"
            ],
            legendary_elite: [
                "LEGENDARY! Blazing speed of **${wpm} WPM** at **${accuracy}% accuracy**. You are typing at the speed of light! ⚡🚀",
                "Spectacular run! **${wpm} WPM** with a stellar **${accuracy}% precision**. Incredible reflexes! 👑🚀",
                "Unbelievable! **${wpm} WPM** and **${accuracy}% accuracy** puts you in the top 1% of elite typists! 🌟⚡"
            ],
            high_speed_low_acc: [
                "Fast hands! **${wpm} WPM** is blazing, but **${accuracy}% accuracy** needs some control. Slow down slightly to master it! 🎯💨",
                "You have the speed of a rocket (**${wpm} WPM**)! Now let's tune that **${accuracy}% precision** for total control. 🚀🔧",
                "Super fast typing at **${wpm} WPM**! Focus on hitting the correct keys (currently **${accuracy}%**) to unlock elite status. 💡⌨️"
            ],
            good_balanced: [
                "Excellent balance! Great speed of **${wpm} WPM** with a solid **${accuracy}% accuracy**. Keep up this rhythm! 👏⭐",
                "Very strong performance! **${wpm} WPM** and **${accuracy}% accuracy** are perfectly in sync. Awesome job! 🎵👍",
                "Wonderful typing flow! **${wpm} WPM** at **${accuracy}% accuracy** shows great progress. Let's aim for 80+ WPM next! 📈🚀"
            ],
            good_speed_low_acc: [
                "Nice pace at **${wpm} WPM**! Try focusing on accuracy (currently **${accuracy}%**) on your next run to score even higher. 🎯👍",
                "Great energy! **${wpm} WPM** is good, but accuracy dropped to **${accuracy}%**. Slow down a bit and get in the zone. 🧘⌨️",
                "Your fingers are flying at **${wpm} WPM**! Let's focus on typing cleaner than **${accuracy}%** next time. You got this! 🌟✨"
            ],
            average_accurate: [
                "Solid typing! **${wpm} WPM** with excellent **${accuracy}% accuracy**. Start pushing your speed now! 🎯📈",
                "Very clean typing! **${wpm} WPM** and **${accuracy}% precision** is a perfect foundation. Start hitting keys faster! 💪✨",
                "Great precision (**${accuracy}%**) at **${wpm} WPM**. You've got the accuracy locked, now let's build the raw speed! 👏🚀"
            ],
            average_low_acc: [
                "Good effort! **${wpm} WPM** is decent, but accuracy is **${accuracy}%**. Try home-row placement to reduce errors. ⌨️👍",
                "Nice try! **${wpm} WPM** is a start, but accuracy (**${accuracy}%**) is key. Slow down on tricky words next time. 🧘💡",
                "Keep pushing! **${wpm} WPM** at **${accuracy}% accuracy** is a good base. Daily practice will make it cleaner and faster. 💪🚀"
            ],
            beginner: [
                "Keep practicing! **${wpm} WPM** with **${accuracy}% accuracy** is just the beginning. Great typists start here! 💪🌟",
                "No worries! Focus purely on accuracy, speed (**${wpm} WPM**) will follow naturally. You're doing great! 🎯🧘",
                "Great start! **${wpm} WPM** at **${accuracy}% accuracy**. Practice daily on TypingDost and watch your stats soar! 🚀📈"
            ]
        },
        hinglish: {
            perfect_accuracy: [
                "Kamaal kar diya! Aapne **${wpm} WPM** ki speed par **100% accuracy** rakhi. Ek bhi galti nahi! 👑🎯",
                "Absolute perfection! **${wpm} WPM** aur zero mistakes (**100% Acc**). Tum toh keyboard ke jadugar ho! 🏆✨",
                "Pure class! **${wpm} WPM** ke sath **100% accuracy** kisi pro typist ki hi ho sakti hai! 🎯💎"
            ],
            legendary_elite: [
                "LEGENDARY! **${wpm} WPM** ki aag lagane wali speed aur **${accuracy}% accuracy**, tum toh typing god ho! ⚡🚀",
                "Kamaal ka performance! **${wpm} WPM** aur **${accuracy}% precision**, ungliyan nahi bijli chal rahi thi! 👑🚀",
                "Aag laga di bhai! **${wpm} WPM** aur **${accuracy}% accuracy** bohot hi rare hai! Top 1% me ho tum! 🌟⚡"
            ],
            high_speed_low_acc: [
                "Speed toh tagdi hai bhaiya (**${wpm} WPM**), par accuracy (**${accuracy}%**) thoda control karo toh maza aaye! 🎯💨",
                "Aapki speed rocket jaisi hai (**${wpm} WPM**), ab thoda accuracy (**${accuracy}%**) par dhyan do dost! 🚀🔧",
                "Super fast typing at **${wpm} WPM**! Thoda aaram se hit karo taaki accuracy (**${accuracy}%**) barabar rahe. 💡⌨️"
            ],
            good_balanced: [
                "Bahut hi badhiya balance! **${wpm} WPM** speed aur **${accuracy}% accuracy** dono ekdum solid hain. 👏⭐",
                "Kya flow hai dost! **${wpm} WPM** aur **${accuracy}% accuracy** ke sath control top-notch hai. 🎵👍",
                "Superb typing! **${wpm} WPM** aur **${accuracy}% accuracy** ke sath tum bohot jald 80+ touch karne wale ho. 📈🚀"
            ],
            good_speed_low_acc: [
                "Pace achha hai dost (**${wpm} WPM**)! Agli baar accuracy (**${accuracy}%**) badhane ki koshish karna. 🎯👍",
                "Ungliyan tez chal rahi hain (**${wpm} WPM**), par mistakes badh gayi (**${accuracy}%**). Thoda slow down karo. 🧘⌨️",
                "Bahut badhiya speed (**${wpm} WPM**), bas thoda accuracy (**${accuracy}%**) par focus karo, tab maza aayega! 🌟✨"
            ],
            average_accurate: [
                "Solid typing dost! **${wpm} WPM** aur excellent **${accuracy}% accuracy**. Ab speed badhane ka time hai. 🎯📈",
                "Ekdum clean typing! **${wpm} WPM** aur **${accuracy}% precision** sahi hai. Ab thoda tezi se keys hit karo. 💪✨",
                "Clean typing dekh kar maza aaya! **${wpm} WPM** at **${accuracy}% accuracy** is a great base. Ab speed badhao! 👏🚀"
            ],
            average_low_acc: [
                "Achha try kiya dost! **${wpm} WPM** ke sath **${accuracy}% accuracy**. Home row par fingers barabar rakhne ki practice karo. ⌨️👍",
                "Thoda slow type karo aur galatiyon (**${accuracy}%**) ko control karo. Agli baar pakka score badhega! 🧘💡",
                "Practice karte raho! **${wpm} WPM** aur **${accuracy}% accuracy** se start karke daily practice se top par jaoge. 💪🚀"
            ],
            beginner: [
                "Housla mat haro! **${wpm} WPM** aur **${accuracy}% accuracy** se har expert ne kabhi shuru kiya tha. 💪🌟",
                "Koi baat nahi dost! Pehle accuracy (**${accuracy}%**) par focus karo, speed (**${wpm} WPM**) apne aap badhegi. 🎯🧘",
                "Achha start hai! **${wpm} WPM** at **${accuracy}% accuracy**. TypingDost par daily practice karo aur speed badhao! 🚀📈"
            ]
        },
        hindi: {
            perfect_accuracy: [
                "अद्भुत शुद्धता! आपने **${wpm} WPM** की गति पर **100% सटीकता** प्राप्त की है, एक भी गलती नहीं! 👑🎯",
                "पूर्णता! **${wpm} WPM** की गति और बिना किसी गलती के (**100% सटीकता**)। आप लाजवाब हैं! 🏆✨",
                "उत्कृष्ट प्रदर्शन! **${wpm} WPM** और **100% सटीकता** एक सिद्धहस्त टाइपिस्ट की पहचान है! 🎯💎"
            ],
            legendary_elite: [
                "शानदार! **${wpm} WPM** की अत्यधिक तीव्र गति और **${accuracy}% सटीकता**, आप टाइपिंग के भगवान हैं! ⚡🚀",
                "अविश्वसनीय प्रदर्शन! **${wpm} WPM** की गति और **${accuracy}% शुद्धता** के साथ आपने कीबोर्ड पर जादू कर दिया! 👑🚀",
                "गजब की रफ्तार! **${wpm} WPM** की गति और **${accuracy}% सटीकता** का यह संगम बहुत ही दुर्लभ है! 🌟⚡"
            ],
            high_speed_low_acc: [
                "गति तो कमाल की है (**${wpm} WPM**), लेकिन थोड़ी शुद्धता (**${accuracy}%**) पर भी ध्यान दें तो मजा आ जाए! 🎯💨",
                "आपकी स्पीड रॉकेट जैसी है (**${wpm} WPM**), अब थोड़ा अपनी गलतियों (**${accuracy}%**) को कम करने का प्रयास करें! 🚀🔧",
                "बहुत तेज टाइपिंग (**${wpm} WPM**)! यदि सटीकता (**${accuracy}%**) सुधर जाए, तो आप सबसे आगे होंगे। 💡⌨️"
            ],
            good_balanced: [
                "बहुत ही बेहतरीन संतुलन! **${wpm} WPM** की गति और **${accuracy}% सटीकता** दोनों लाजवाब हैं। 👏⭐",
                "क्या शानदार फ्लो है दोस्त! **${wpm} WPM** और **${accuracy}% सटीकता** का यह तालमेल एकदम सही है। 🎵👍",
                "सुंदर टाइपिंग! **${wpm} WPM** और **${accuracy}% सटीकता** के साथ आप बहुत जल्द 80+ का आंकड़ा पार करेंगे। 📈🚀"
            ],
            good_speed_low_acc: [
                "गति अच्छी है (**${wpm} WPM**)! अगली बार सटीकता (**${accuracy}%**) को और बेहतर करने की कोशिश करें। 🎯👍",
                "उंगलियां तो तेज चल रही हैं (**${wpm} WPM**), पर गलतियां भी बढ़ गईं (**${accuracy}%**)। थोड़ा धीरे टाइप करें। 🧘⌨️",
                "शानदार स्पीड (**${wpm} WPM**), बस थोड़ा ध्यान शुद्धता (**${accuracy}%**) पर भी लगाएं ताकि स्कोर कमाल का हो! 🌟✨"
            ],
            average_accurate: [
                "सटीक टाइपिंग! **${wpm} WPM** की गति और **${accuracy}% शुद्धता** बहुत अच्छी है, अब रफ्तार बढ़ाने का समय है। 🎯📈",
                "बहुत ही साफ टाइपिंग! **${wpm} WPM** और **${accuracy}% सटीकता** सही है, अब थोड़ा कीज को तेजी से दबाएं। 💪✨",
                "सटीक टाइपिंग देखकर खुशी हुई! **${wpm} WPM** और **${accuracy}% सटीकता** के साथ अभ्यास जारी रखें। 👏🚀"
            ],
            average_low_acc: [
                "अच्छा प्रयास! **${wpm} WPM** की गति और **${accuracy}% सटीकता**। होम रो पर उंगलियों की स्थिति सही रखें। ⌨️👍",
                "थोड़ा धीरे टाइप करें और गलतियों (**${accuracy}%**) से बचें। अगली बार जरूर बेहतर होगा! 🧘💡"
            ],
            beginner: [
                "हिम्मत न हारें! **${wpm} WPM** और **${accuracy}% सटीकता** से हर उस्ताद टाइपिस्ट ने कभी शुरुआत की थी। 💪🌟",
                "कोई बात नहीं दोस्त! पहले शुद्धता (**${accuracy}%**) पर ध्यान दें, गति (**${wpm} WPM**) अपने आप आ जाएगी। 🎯🧘",
                "अच्छी शुरुआत! **${wpm} WPM** और **${accuracy}% सटीकता**। टाइपिंग दोस्त पर रोज अभ्यास करें! 🚀📈"
            ]
        },
        spanish: {
            perfect_accuracy: [
                "¡Sobresaliente! Escribiste a **${wpm} WPM** con **100% de precisión**. ¡Una obra maestra impecable! 👑🎯",
                "¡Perfección lograda! **${wpm} WPM** y ni un solo error (**100% Acc**). ¡Estás en tu propia liga! 🏆✨",
                "¡Pura magia al escribir! **${wpm} WPM** con **100% de precisión**. ¡Simplemente magnífico! 🎯💎"
            ],
            legendary_elite: [
                "¡LEGENDARIO! Velocidad de **${wpm} WPM** con una precisión estelar de **${accuracy}%**. ¡Escribes a la velocidad de la luz! ⚡🚀",
                "¡Increíble rendimiento! **${wpm} WPM** con **${accuracy}% de precisión**. ¡Reflejos espectaculares! 👑🚀",
                "¡Increíble! **${wpm} WPM** y **${accuracy}% de precisión** te sitúan en el top 1% de mecanógrafos. 🌟⚡"
            ],
            high_speed_low_acc: [
                "¡Manos rápidas! **${wpm} WPM** es increíble, pero **${accuracy}% de precisión** necesita control. ¡Baja un poco el ritmo! 🎯💨",
                "¡Tienes la velocidad de un cohete (**${wpm} WPM**)! Ajustemos esa precisión de **${accuracy}%** para control total. 🚀🔧",
                "¡Mecanografía súper rápida a **${wpm} WPM**! Concéntrate en la precisión (actualmente **${accuracy}%**). 💡⌨️"
            ],
            good_balanced: [
                "¡Excelente equilibrio! Gran velocidad de **${wpm} WPM** con una sólida precisión de **${accuracy}%**. ¡Sigue así! 👏⭐",
                "¡Muy buen rendimiento! **${wpm} WPM** y **${accuracy}% de precisión** en perfecta sintonía. ¡Excelente trabajo! 🎵👍",
                "¡Flujo maravilloso! **${wpm} WPM** y **${accuracy}% de precisión** muestran un gran progreso. ¡A por los 80+ WPM! 📈🚀"
            ],
            good_speed_low_acc: [
                "¡Buen ritmo a **${wpm} WPM**! Intenta concentrarte en la precisión (**${accuracy}%**) en tu próxima prueba. 🎯👍",
                "¡Gran energía! **${wpm} WPM** es bueno, pero la precisión bajó a **${accuracy}%**. Relájate y concéntrate. 🧘⌨️",
                "¡Tus dedos vuelan a **${wpm} WPM**! Intentemos escribir más limpio que **${accuracy}%** la próxima vez. 🌟✨"
            ],
            average_accurate: [
                "¡Buena escritura! **${wpm} WPM** con excelente precisión de **${accuracy}%**. ¡Es hora de aumentar la velocidad! 🎯📈",
                "¡Escritura muy limpia! **${wpm} WPM** y **${accuracy}% de precisión** es una base perfecta. ¡Presiona más rápido! 💪✨",
                "¡Gran precisión (**${accuracy}%**) a **${wpm} WPM**. Tienes el control, ¡ahora acelera el paso! 👏🚀"
            ],
            average_low_acc: [
                "¡Buen intento! **${wpm} WPM** es decente, pero la precisión es de **${accuracy}%**. Practica la posición de los dedos. ⌨️👍",
                "¡Buen esfuerzo! **${wpm} WPM** es un inicio, pero la precisión (**${accuracy}%**) es clave. Ve más despacio. 🧘💡",
                "¡Sigue adelante! **${wpm} WPM** y **${accuracy}% de precisión** es una buena base. Con práctica mejorarás. 💪🚀"
            ],
            beginner: [
                "¡Sigue practicando! **${wpm} WPM** con **${accuracy}% de precisión** es solo el comienzo. ¡Todos los grandes empiezan aquí! 💪🌟",
                "¡No te preocupes! Enfoque en la precisión, la velocidad (**${wpm} WPM**) llegará sola. ¡Vas genial! 🎯🧘",
                "¡Buen comienzo! **${wpm} WPM** con **${accuracy}% de precisión**. ¡Practica a diario y mejora! 🚀📈"
            ]
        },
        french: {
            perfect_accuracy: [
                "Exceptionnel ! Vous avez tapé à **${wpm} WPM** avec **100% de précision**. Un chef-d'œuvre absolu ! 👑🎯",
                "Perfection atteinte ! **${wpm} WPM** et aucune erreur (**100% Acc**). Vous êtes hors catégorie ! 🏆✨",
                "Magie pure au clavier ! **${wpm} WPM** avec **100% de précision**. Tout simplement magnifique ! 🎯💎"
            ],
            legendary_elite: [
                "LÉGENDAIRE ! Vitesse fulgurante de **${wpm} WPM** avec **${accuracy}% de précision**. Vous tapez à la vitesse de la lumière ! ⚡🚀",
                "Performance spectaculaire ! **${wpm} WPM** avec **${accuracy}% de précision**. Des réflexes incroyables ! 👑🚀",
                "Incroyable ! **${wpm} WPM** et **${accuracy}% de précision** vous placent dans le top 1% des dactylos. 🌟⚡"
            ],
            high_speed_low_acc: [
                "Mains rapides ! **${wpm} WPM** est excellent, mais **${accuracy}% de précision** nécessite du contrôle. Ralentissez ! 🎯💨",
                "Vitesse de fusée (**${wpm} WPM**) ! Ajustons cette précision de **${accuracy}%** pour un contrôle total. 🚀🔧",
                "Frappe très rapide à **${wpm} WPM** ! Concentrez-vous sur la justesse (actuellement **${accuracy}%**). 💡⌨️"
            ],
            good_balanced: [
                "Excellent équilibre ! Bonne vitesse de **${wpm} WPM** avec une solide précision de **${accuracy}%**. Continuez ! 👏⭐",
                "Très bonne performance ! **${wpm} WPM** et **${accuracy}% de précision** sont parfaitement synchronisés. Superbe ! 🎵👍",
                "Bonne fluidité ! **${wpm} WPM** avec **${accuracy}% de précision** montre de réels progrès. Visez 80+ WPM ! 📈🚀"
            ],
            good_speed_low_acc: [
                "Bon rythme à **${wpm} WPM** ! Essayez de vous concentrer sur la précision (**${accuracy}%**) la prochaine fois. 🎯👍",
                "Belle énergie ! **${wpm} WPM** est bon, mais la précision est descendue à **${accuracy}%**. Ralentissez un peu. 🧘⌨️",
                "Vos doigts volent à **${wpm} WPM** ! Essayez de tapez plus proprement que **${accuracy}%** au prochain essai. 🌟✨"
            ],
            average_accurate: [
                "Frappe solide ! **${wpm} WPM** avec une excellente précision de **${accuracy}%**. Commencez à accélérer ! 🎯📈",
                "Frappe très propre ! **${wpm} WPM** et **${accuracy}% de précision** est une base parfaite. Tapez plus vite ! 💪✨",
                "Excellente précision (**${accuracy}%**) à **${wpm} WPM**. La précision est acquise, place à la vitesse ! 👏🚀"
            ],
            average_low_acc: [
                "Bon effort ! **${wpm} WPM** est correct, mais la précision est de **${accuracy}%**. Revoyez le placement des doigts. ⌨️👍",
                "Bel essai ! **${wpm} WPM** est un début, mais la précision (**${accuracy}%**) est la clé. Ralentissez. 🧘💡",
                "Progressez encore ! **${wpm} WPM** avec **${accuracy}% de précision**. L'entraînement quotidien paiera ! 💪🚀"
            ],
            beginner: [
                "Continuez à vous entraîner ! **${wpm} WPM** avec **${accuracy}% de précision** n'est que le début. Courage ! 💪🌟",
                "Pas de soucis ! Visez la précision, la vitesse (**${wpm} WPM**) suivra naturellement. Vous avancez bien ! 🎯🧘",
                "Bon départ ! **${wpm} WPM** avec **${accuracy}% de précision**. Entraînez-vous quotidiennement sur TypingDost ! 🚀📈"
            ]
        },
        german: {
            perfect_accuracy: [
                "Hervorragend! Sie haben mit **${wpm} WPM** und **100% Genauigkeit** getippt. Ein fehlerfreies Meisterwerk! 👑🎯",
                "Perfektion erreicht! **${wpm} WPM** und kein einziger Fehler (**100% Genauigkeit**). Absolute Spitzenklasse! 🏆✨",
                "Reine Magie! **${wpm} WPM** bei **100% Präzision**. Einfach fantastisch! 🎯💎"
            ],
            legendary_elite: [
                "LEGENDÄR! Atemberaubende Geschwindigkeit von **${wpm} WPM** bei **${accuracy}% Genauigkeit**. Sie tippen in Lichtgeschwindigkeit! ⚡🚀",
                "Spektakuläre Leistung! **${wpm} WPM** mit fantastischen **${accuracy}% Präzision**. Unglaubliche Reflexe! 👑🚀",
                "Unglaublich! **${wpm} WPM** und **${accuracy}% Genauigkeit** bringen Sie in die Top 1% der Tipper! 🌟⚡"
            ],
            high_speed_low_acc: [
                "Schnelle Hände! **${wpm} WPM** ist rasant, aber **${accuracy}% Genauigkeit** braucht Kontrolle. Etwas langsamer tippen! 🎯💨",
                "Sie haben die Geschwindigkeit einer Rakete (**${wpm} WPM**)! Stimmen Sie jetzt die **${accuracy}% Präzision** ab. 🚀🔧",
                "Super schnelles Tippen mit **${wpm} WPM**! Achten Sie auf die richtigen Tasten (aktuell **${accuracy}%**). 💡⌨️"
            ],
            good_balanced: [
                "Exzellente Balance! Tolles Tempo von **${wpm} WPM** mit soliden **${accuracy}% Genauigkeit**. Weiter so! 👏⭐",
                "Sehr starke Leistung! **${wpm} WPM** und **${accuracy}% Genauigkeit** sind perfekt aufeinander abgestimmt. Super! 🎵👍",
                "Wunderbarer Tippfluss! **${wpm} WPM** bei **${accuracy}% Genauigkeit** zeigt tolle Fortschritte. Als nächstes 80+ WPM! 📈🚀"
            ],
            good_speed_low_acc: [
                "Gutes Tempo bei **${wpm} WPM**! Konzentrieren Sie sich beim nächsten Mal mehr auf die Genauigkeit (**${accuracy}%**). 🎯👍",
                "Tolle Energie! **${wpm} WPM** ist gut, aber die Genauigkeit fiel auf **${accuracy}%**. Werden Sie ruhiger. 🧘⌨️",
                "Ihre Finger fliegen mit **${wpm} WPM**! Versuchen Sie beim nächsten Mal sauberer als **${accuracy}%** zu tippen. 🌟✨"
            ],
            average_accurate: [
                "Solides Tippen! **${wpm} WPM** bei exzellenten **${accuracy}% Genauigkeit**. Steigern Sie jetzt Ihr Tempo! 🎯📈",
                "Sehr sauberes Tippen! **${wpm} WPM** und **${accuracy}% Präzision** ist eine perfekte Basis. Schneller tippen! 💪✨",
                "Großartige Präzision (**${accuracy}%**) bei **${wpm} WPM**. Sie haben die Genauigkeit im Griff, jetzt Tempo erhöhen! 👏🚀"
            ],
            average_low_acc: [
                "Gute Leistung! **${wpm} WPM** ist ordentlich, aber die Genauigkeit liegt bei **${accuracy}%**. Finger richtig platzieren. ⌨️👍",
                "Guter Versuch! **${wpm} WPM** ist ein Anfang, aber Genauigkeit (**${accuracy}%**) ist der Schlüssel. Langsamer tippen. 🧘💡",
                "Bleiben Sie dran! **${wpm} WPM** bei **${accuracy}% Genauigkeit** ist ein guter Start. Täglich üben! 💪🚀"
            ],
            beginner: [
                "Weiter üben! **${wpm} WPM** mit **${accuracy}% Genauigkeit** ist erst der Anfang. Jeder Meister fängt klein an! 💪🌟",
                "Keine Sorge! Erst auf die Genauigkeit achten, das Tempo (**${wpm} WPM**) kommt dann von ganz allein. 🎯🧘",
                "Toller Start! **${wpm} WPM** bei **${accuracy}% Genauigkeit**. Üben Sie täglich auf TypingDost! 🚀📈"
            ]
        },
        arabic: {
            perfect_accuracy: [
                "ممتاز! لقد كتبت بسرعة **${wpm} WPM** وبدقة **100%**. لوحة فنية خالية من الأخطاء! 👑🎯",
                "تحقيق الكمال! **${wpm} WPM** ودون خطأ واحد (**100% دقة**). أنت في مستوى فريد! 🏆✨",
                "إتقان خالص! **${wpm} WPM** بدقة **100%**. رائع للغاية! 🎯💎"
            ],
            legendary_elite: [
                "ممتاز جداً! سرعة فائقة تبلغ **${wpm} WPM** بدقة **${accuracy}%**. أنت تكتب بسرعة الضوء! ⚡🚀",
                "أداء مذهل! **${wpm} WPM** بدقة **${accuracy}%**. ردود أفعال مذهلة! 👑🚀",
                "غير معقول! سرعة **${wpm} WPM** ودقة **${accuracy}%** تضعك في قائمة الـ 1% الأفضل! 🌟⚡"
            ],
            high_speed_low_acc: [
                "أصابع سريعة! **${wpm} WPM** سرعة مذهلة، لكن دقة **${accuracy}%** تحتاج لبعض التحكم. تمهل قليلاً! 🎯💨",
                "سرعتك مثل الصاروخ (**${wpm} WPM**)! دعنا الآن نضبط دقة **${accuracy}%** للتحكم الكامل. 🚀🔧",
                "كتابة سريعة جداً بسرعة **${wpm} WPM**! ركز على الضغط على المفاتيح الصحيحة (حالياً **${accuracy}%**). 💡⌨️"
            ],
            good_balanced: [
                "توازن ممتاز! سرعة رائعة بلغت **${wpm} WPM** مع دقة قوية **${accuracy}%**. استمر على هذا الإيقاع! 👏⭐",
                "أداء قوي جداً! سرعة **${wpm} WPM** ودقة **${accuracy}%** متزامنتان تماماً. عمل رائع! 🎵👍",
                "تدفق رائع! سرعة **${wpm} WPM** ودقة **${accuracy}%** تظهر تقدماً ممتازاً. لنهدف لـ 80+ WPM المرة القادمة! 📈🚀"
            ],
            good_speed_low_acc: [
                "وتيرة جيدة بسرعة **${wpm} WPM**! حاول التركيز على الدقة (حالياً **${accuracy}%**) في اختبارك القادم. 🎯👍",
                "طاقة رائعة! **${wpm} WPM** سرعة جيدة، لكن الدقة انخفضت إلى **${accuracy}%**. تمهل قليلاً واستعد التركيز. 🧘⌨️",
                "أصابعك تطير بسرعة **${wpm} WPM**! دعنا نركز على كتابة أكثر نظافة من **${accuracy}%** في المرة القادمة. 🌟✨"
            ],
            average_accurate: [
                "كتابة ثابتة! **${wpm} WPM** بدقة ممتازة **${accuracy}%**. ابدأ الآن في دفع سرعتك! 🎯📈",
                "كتابة نظيفة جداً! سرعة **${wpm} WPM** ودقة **${accuracy}%** تمثلان أساساً ممتازاً. اكتب بشكل أسرع! 💪✨",
                "دقة رائعة (**${accuracy}%**) بسرعة **${wpm} WPM**. لقد أتقنت الدقة، حان الوقت لزيادة السرعة! 👏🚀"
            ],
            average_low_acc: [
                "جهد جيد! **${wpm} WPM** سرعة مقبولة، لكن الدقة تبلغ **${accuracy}%**. جرب وضع الأصابع الصحيح لتقليل الأخطاء. ⌨️👍",
                "محاولة جيدة! **${wpm} WPM** بداية طيبة، لكن الدقة (**${accuracy}%**) هي الأساس. تمهل في الكلمات الصعبة. 🧘💡",
                "واصل التقدم! **${wpm} WPM** ودقة **${accuracy}%** قاعدة جيدة. التدريب اليومي سيجعلك أسرع وأنظف. 💪🚀"
            ],
            beginner: [
                "واصل التدريب! **${wpm} WPM** ودقة **${accuracy}%** هي مجرد البداية. جميع المحترفين بدؤوا من هنا! 💪🌟",
                "لا تقلق! ركز تماماً على الدقة، والسرعة (**${wpm} WPM**) ستأتي بشكل طبيعي لاحقاً. 🎯🧘",
                "بداية رائعة! **${wpm} WPM** ودقة **${accuracy}%**. تدرب يومياً على TypingDost وشاهد سرعتك تزداد! 🚀📈"
            ]
        },
        japanese: {
            perfect_accuracy: [
                "素晴らしい！**${wpm} WPM** で**正確性100%**。一文字のミスもない完璧な芸術品です！ 👑🎯",
                "完璧達成！**${wpm} WPM** でミスゼロ (**100% Acc**)。あなたは完全に別次元にいます！ 🏆✨",
                "神がかった正確性！**${wpm} WPM** で**正確性100%**。ただただお見事です！ 🎯💎"
            ],
            legendary_elite: [
                "伝説的！**${wpm} WPM** の圧倒的なスピードと **${accuracy}% の正確性**。まるで光速のタイピングです！ ⚡🚀",
                "驚異的なパフォーマンス！**${wpm} WPM** に **${accuracy}% の正確性**。驚異的な反射神経！ 👑🚀",
                "信じられない！**${wpm} WPM** と **${accuracy}% の正確性** は、タイピストの上位1%に匹敵します！ 🌟⚡"
            ],
            high_speed_low_acc: [
                "素早い指先！**${wpm} WPM** は素晴らしいですが、正確性 **${accuracy}%** に少し制御が必要です。少し落ち着いて！ 🎯💨",
                "ロケットのような速さ (**${wpm} WPM**)！今度は **${accuracy}% の正確性** を安定させて完璧を目指しましょう。 🚀🔧",
                "爆速タイピング (**${wpm} WPM**)！タイピングミスを減らし、正確性（現在 **${accuracy}%**）を向上させましょう。 💡⌨️"
            ],
            good_balanced: [
                "素晴らしいバランス！十分な速度 **${wpm} WPM** と高い正確性 **${accuracy}%**。この調子です！ 👏⭐",
                "とても力強いパフォーマンス！**${wpm} WPM** と **${accuracy}% の正確性** が完全シンクロ。お見事！ 🎵👍",
                "素晴らしい流動性！**${wpm} WPM** で正確性 **${accuracy}%**。次は 80+ WPM を目指して走りましょう！ 📈🚀"
            ],
            good_speed_low_acc: [
                "ナイスペース (**${wpm} WPM**)！次回は正確性（現在 **${accuracy}%**）を重視してスコアアップを。 🎯👍",
                "素晴らしいエネルギー！**${wpm} WPM** は良いですが、正確性が **${accuracy}%** に低下しました。少し落ち着いて。 🧘⌨️",
                "指が **${wpm} WPM** で躍動しています！次は正確性 **${accuracy}%** 以上を狙ってクリーンに打ちましょう。 🌟✨"
            ],
            average_accurate: [
                "着実なタイピング！**${wpm} WPM** で優れた正確性 **${accuracy}%**。ここからスピードを上げていきましょう！ 🎯📈",
                "とても正確なタイピング！**${wpm} WPM** と正確性 **${accuracy}%** は完璧な土台です。スピードアップ！ 💪✨",
                "抜群の安定感（正確性 **${accuracy}%**) でスピードは **${wpm} WPM**。正確さは万全なので、次は速さを意識！ 👏🚀"
            ],
            average_low_acc: [
                "ナイスチャレンジ！**${wpm} WPM** は良いですが、正確性は **${accuracy}%** です。ホームポジションを意識して。 ⌨️👍",
                "良い試み！**${wpm} WPM** からのスタートですが、正確性 (**${accuracy}%**) が鍵です。難しい単語はゆっくりと。 🧘💡",
                "前進あるのみ！**${wpm} WPM** と正確性 **${accuracy}%** は良いスタート地点です。毎日練習しましょう！ 💪🚀"
            ],
            beginner: [
                "練習を続けましょう！**${wpm} WPM** で正確性 **${accuracy}%** はまだ始まりに過ぎません。皆ここから始まります！ 💪🌟",
                "心配いりません！まずは正確性に集中すれば、スピード (**${wpm} WPM**) は後から自然についてきます。 🎯🧘",
                "良い滑り出し！**${wpm} WPM** / 正確性 **${accuracy}%**。毎日 TypingDost で練習して記録を伸ばそう！ 🚀📈"
            ]
        },
        portuguese: {
            perfect_accuracy: [
                "Excepcional! Digitou a **${wpm} WPM** com **100% de precisão**. Uma obra-prima impecável! 👑🎯",
                "Perfeição absoluta! **${wpm} WPM** e sem um único erro (**100% Acc**). Você está em outra categoria! 🏆✨",
                "Pura magia no teclado! **${wpm} WPM** com **100% de precisão**. Simplesmente magnífico! 🎯💎"
            ],
            legendary_elite: [
                "LENDÁRIO! Velocidade incrível de **${wpm} WPM** com precisão estelar de **${accuracy}%**. Você digita na velocidade da luz! ⚡🚀",
                "Performance espetacular! **${wpm} WPM** com **${accuracy}% de precisão**. Reflexos impressionantes! 👑🚀",
                "Incrível! **${wpm} WPM** e **${accuracy}% de precisão** colocam você no top 1% dos digitadores! 🌟⚡"
            ],
            high_speed_low_acc: [
                "Mãos rápidas! **${wpm} WPM** é rápido, mas **${accuracy}% de precisão** precisa de controle. Vá mais devagar! 🎯💨",
                "Velocidade de foguete (**${wpm} WPM**)! Agora vamos calibrar essa precisão de **${accuracy}%** para controle total. 🚀🔧",
                "Digitação super rápida a **${wpm} WPM**! Foque nas teclas corretas (atualmente **${accuracy}%**). 💡⌨️"
            ],
            good_balanced: [
                "Excelente equilíbrio! Ótimo ritmo de **${wpm} WPM** com sólida precisão de **${accuracy}%**. Continue assim! 👏⭐",
                "Performance fortíssima! **${wpm} WPM** e **${accuracy}% de precisão** perfeitamente alinhados. Excelente trabalho! 🎵👍",
                "Fluidez maravilhosa! **${wpm} WPM** com **${accuracy}% de precisão** mostra grande progresso. Rumo a 80+ WPM! 📈🚀"
            ],
            good_speed_low_acc: [
                "Bom ritmo a **${wpm} WPM**! Tente focar na precisão (**${accuracy}%**) no seu próximo teste. 🎯👍",
                "Grande energia! **${wpm} WPM** é bom, mas a precisão caiu para **${accuracy}%**. Vá com calma e concentre-se. 🧘⌨️",
                "Seus dedos voam a **${wpm} WPM**! Tente digitar de forma mais limpa do que **${accuracy}%** na próxima vez. 🌟✨"
            ],
            average_accurate: [
                "Digitação sólida! **${wpm} WPM** com excelente precisão de **${accuracy}%**. Comece a forçar a velocidade! 🎯📈",
                "Digitação muito limpa! **${wpm} WPM** e **${accuracy}% de precisão** é uma base ideal. Digite mais rápido! 💪✨",
                "Grande precisão (**${accuracy}%**) a **${wpm} WPM**. O controle está perfeito, agora busque velocidade! 👏🚀"
            ],
            average_low_acc: [
                "Bom esforço! **${wpm} WPM** é decente, mas a precisão é de **${accuracy}%**. Use a posição padrão dos dedos. ⌨️👍",
                "Belo ensaio! **${wpm} WPM** é um começo, mas a precisão (**${accuracy}%**) é fundamental. Vá com calma. 🧘💡",
                "Siga em frente! **${wpm} WPM** com **${accuracy}% de precisão** é uma boa base. A prática diária ajudará. 💪🚀"
            ],
            beginner: [
                "Continue praticando! **${wpm} WPM** com **${accuracy}% de qualidade** é só o começo. Os grandes começam aqui! 💪🌟",
                "Sem problemas! Foque na precisão, que a velocidade (**${wpm} WPM**) virá naturalmente. Você vai conseguir! 🎯🧘",
                "Bom começo! **${wpm} WPM** com **${accuracy}% de precisão**. Treine diariamente no TypingDost e melhore! 🚀📈"
            ]
        }
    };

    const langMessages = messages[lang] || messages.english;
    let category = 'beginner';

    if (accuracy === 100 && wpm >= 20) {
        category = 'perfect_accuracy';
    } else if (wpm >= 80) {
        category = accuracy >= 95 ? 'legendary_elite' : 'high_speed_low_acc';
    } else if (wpm >= 50) {
        category = accuracy >= 95 ? 'good_balanced' : 'good_speed_low_acc';
    } else if (wpm >= 30) {
        category = accuracy >= 95 ? 'average_accurate' : 'average_low_acc';
    } else {
        category = 'beginner';
    }

    const arr = langMessages[category];
    const template = arr[Math.floor(Math.random() * arr.length)];
    return template.replace(/\$\{wpm\}/g, wpm).replace(/\$\{accuracy\}/g, accuracy);
}

// Self-executing dynamic rendering block
(function renderMenus() {
    const themeMenu = document.getElementById("theme-menu");
    if (themeMenu) {
        themeMenu.innerHTML = THEMES_LIST.map(theme => {
            return `<button class="theme-item" data-theme="${theme.id}">
                <span class="theme-item-icon">${theme.icon}</span> ${theme.name}
            </button>`;
        }).join("");
    }
    const langMenu = document.getElementById("lang-menu");
    if (langMenu) {
        langMenu.innerHTML = LANGUAGES_LIST.map(lang => {
            return `<button class="lang-item" data-lang="${lang.id}">
                <span class="lang-item-icon">${lang.icon}</span> ${lang.name}
            </button>`;
        }).join("");
    }
})();

// Elements
const textDisplay = document.getElementById('text-display');
const typingInput = document.getElementById('typing-input');
let inputWasFocusedOnMousedown = false;
const wpmEl = document.querySelector('.wpm');
const accuracyEl = document.querySelector('.accuracy');
const timeEl = document.querySelector('.timer');
const mistakesEl = document.querySelector('.mistakes');
const bestWpmEl = document.getElementById('best-wpm');
const capsLockWarning = document.getElementById('caps-lock-warning');
const resetBtn = document.getElementById('reset-btn');
const newTextBtn = document.getElementById('new-text-btn');
const timeBtns = document.querySelectorAll('.time-btn');
const lessonBtns = document.querySelectorAll('.lesson-btn');
const themeItems = document.querySelectorAll('.theme-item');
// sound items are populated dynamically
const caret = document.getElementById('caret');
const ghostCaret = document.getElementById('ghost-caret');
const modPunctuation = document.getElementById('mod-punctuation');
const modNumbers = document.getElementById('mod-numbers');
const customTimeBtn = document.getElementById('custom-time-btn');
const customTimeContainer = document.getElementById('custom-time-input-container');
const customTimeInput = document.getElementById('custom-time-input');
const customTimeApply = document.getElementById('custom-time-apply');
const modal = document.getElementById('result-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const finalWpmEl = document.getElementById('final-wpm');
const finalAccuracyEl = document.getElementById('final-accuracy');
const encouragingMsgEl = document.getElementById('encouraging-msg');

const keyboardModal = document.getElementById('keyboard-modal');
const keyboardTitle = document.getElementById('keyboard-title');
const fingerExplanation = document.getElementById('finger-explanation');
const closeKeyboardBtn = document.getElementById('close-keyboard-btn');
const allKeys = document.querySelectorAll('.key');

const standardContainer = document.getElementById('standard-mode-container');
const gameContainer = document.getElementById('game-mode-container');
const gameCanvas = document.getElementById('game-canvas');
const gameInput = document.getElementById('game-input');
const gameScoreEl = document.getElementById('game-score');
const gameMultiplierEl = document.getElementById('game-multiplier');
const gameLivesEl = document.getElementById('game-lives');

const gameStartScreen = document.getElementById('game-start-screen');
const startGameIcon = document.getElementById('start-game-icon');
const startGameTitle = document.getElementById('start-game-title');
const startGameDesc = document.getElementById('start-game-desc');
const gameStartBtn = document.getElementById('game-start-btn');

// Variables
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let totalCharsTyped = 0;
let totalMistakes = 0;
let isTyping = false;
let isComposing = false;
let correctStreak = 0; // Combo streak counter for caret color
let interval;
let currentText = "";
let currentLesson = 'sentences';
let bestWpm = localStorage.getItem('typingDostBestWpm') || 0;
let currentSoundProfile = 'water_drop';
let lastWpm = 0;
let lastAccuracy = 100;
let lastTestMode = 'sentences';
let lastRawWpm = 0;
let lastKeyAccuracy = 100;
let lastCorrectedMistakes = 0;
let lastUncorrectedMistakes = 0;
let lastBackspaceCount = 0;
function detectCurrentLanguage() {
    const validLangs = [
        'english', 'hinglish', 'hindi', 'bengali', 'marathi', 'tamil',
        'telugu', 'gujarati', 'kannada', 'malayalam', 'odia', 'punjabi',
        'urdu', 'assamese', 'spanish', 'french', 'german', 'arabic',
        'japanese', 'portuguese'
    ];
    const pathname = (typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '');
    let pageLang = null;
    if (pathname.includes('tamil-typing-test')) pageLang = 'tamil';
    else if (pathname.includes('hindi-typing-test')) pageLang = 'hindi';
    else if (pathname.includes('bengali-typing-test')) pageLang = 'bengali';
    else if (pathname.includes('marathi-typing-test')) pageLang = 'marathi';
    else if (pathname.includes('telugu-typing-test')) pageLang = 'telugu';
    else if (pathname.includes('gujarati-typing-test')) pageLang = 'gujarati';
    else if (pathname.includes('kannada-typing-test')) pageLang = 'kannada';
    else if (pathname.includes('malayalam-typing-test')) pageLang = 'malayalam';
    else if (pathname.includes('odia-typing-test')) pageLang = 'odia';
    else if (pathname.includes('punjabi-typing-test')) pageLang = 'punjabi';
    else if (pathname.includes('urdu-typing-test')) pageLang = 'urdu';
    else if (pathname.includes('assamese-typing-test')) pageLang = 'assamese';
    else if (pathname.includes('hinglish-typing-test')) pageLang = 'hinglish';
    else if (pathname.includes('english-typing-test')) pageLang = 'english';

    if (pageLang) {
        try { localStorage.setItem('typingDostLang', pageLang); } catch(e){}
        return pageLang;
    }
    const urlParams = (typeof window !== 'undefined') ? new URLSearchParams(window.location.search) : null;
    const urlLang = urlParams ? urlParams.get('lang') : null;
    if (urlLang && validLangs.includes(urlLang.toLowerCase())) {
        const langClean = urlLang.toLowerCase();
        try { localStorage.setItem('typingDostLang', langClean); } catch(e){}
        return langClean;
    }
    const lsLang = (typeof localStorage !== 'undefined') ? localStorage.getItem('typingDostLang') : null;
    return (lsLang && validLangs.includes(lsLang)) ? lsLang : 'english';
}

let currentLearningLang = detectCurrentLanguage();
let updateKeyboardGuideNextKey;

// Performance Caching Variables
let typingSectionWrapper = null;
let activeSpansCoords = [];
let keyElementsMap = null;
let highlightedKeyElement = null;

// Game Performance Caching Variables
let gameCanvasRect = null;
let centerMainframeRect = null;
let cachedPlayerCar = null;

// Performance helper to retrieve character coordinates lazily on demand
function getSpanCoords(idx) {
    if (!textDisplay || !activeSpansList || idx < 0 || idx >= activeSpansList.length) {
        return null;
    }
    // Check if we need to initialize activeSpansCoords length or if it's empty
    if (activeSpansCoords.length === 0) {
        activeSpansCoords = new Array(activeSpansList.length);
    }
    if (!activeSpansCoords[idx]) {
        const span = activeSpansList[idx];
        if (!span) return null;
        const rect = span.getBoundingClientRect();
        const displayRect = textDisplay.getBoundingClientRect();
        activeSpansCoords[idx] = {
            left: rect.left - displayRect.left,
            right: rect.right - displayRect.left,
            top: rect.top - displayRect.top + textDisplay.scrollTop,
            width: rect.width,
            height: rect.height
        };
    }
    return activeSpansCoords[idx];
}

// Deprecated fallback helper
function cacheActiveSpansCoords() {
    // Caching is now handled on-demand lazily in getSpanCoords
}

// Invalidate cache on resize so positions are recalculated accurately
window.addEventListener('resize', () => {
    activeSpansCoords = [];
    gameCanvasRect = null;
    centerMainframeRect = null;
    cachedPlayerCar = null;
});



// Safely load and parse items from local storage to prevent malformed JSON crashes
function safeGetLocalStorage(key, defaultValue) {
    try {
        const val = localStorage.getItem(key);
        if (!val || val === 'null') return defaultValue;
        const parsed = JSON.parse(val);
        return parsed === null ? defaultValue : parsed;
    } catch (e) {
        console.error(`Error parsing localStorage key "${key}":`, e);
        return defaultValue;
    }
}

// Advanced Variables
let weakspots = safeGetLocalStorage('typingDostWeakspots', {});
let wpmHistory = [];
let rawWpmHistory = [];
let errorHistory = [];
let lastSecondMistakes = 0;
let backspaceCount = 0;
let accuracyHistory = [];
let timeLabels = [];
let chartInstance = null;
let ghostCharIndex = 0;
let ghostInterval = null;
let metronomeInterval = null;

// Feature State Variables
let isBlindMode = false;
let isStopOnError = false;
let isZenMode = false;
let testMode = 'time'; // 'time' or 'words'
let wordLimit = 50;    // used when testMode === 'words'
let wordsTyped = 0;    // word count for words mode
let sessionHistory = safeGetLocalStorage('typingDostHistory', []);
let userXP = safeGetLocalStorage('typing_dost_xp', 0);
let userLevel = safeGetLocalStorage('typing_dost_level', 1);

// Daily Test Progress Tracking (Persists across reloads if on the same day)
const lastTestDate = localStorage.getItem('typingDostLastTestDate');
const todayStr = new Date().toDateString();
let testsCompletedToday = 0;
if (lastTestDate === todayStr) {
    testsCompletedToday = parseInt(localStorage.getItem('typingDostTestsCompletedToday') || '0');
} else {
    testsCompletedToday = 0;
    localStorage.setItem('typingDostTestsCompletedToday', '0');
    localStorage.setItem('typingDostLastTestDate', todayStr);
}

// ---- INDEXEDDB DATABASE MANAGER FOR SESSION HISTORY ----
class TypingDostDB {
    constructor() {
        this.dbName = "TypingDostDB";
        this.dbVersion = 1;
        this.db = null;
        this.init();
    }

    init() {
        const request = indexedDB.open(this.dbName, this.dbVersion);

        request.onerror = (e) => {
            console.error("[IndexedDB] Database failed to initialize:", e);
        };

        request.onsuccess = (e) => {
            this.db = e.target.result;
            console.log("[IndexedDB] Connection established successfully!");
        };

        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains("session_history")) {
                db.createObjectStore("session_history", { keyPath: "id", autoIncrement: true });
                console.log("[IndexedDB] Object store 'session_history' created successfully!");
            }
        };
    }

    addResult(entry) {
        if (!this.db) {
            console.warn("[IndexedDB] Database connection not ready. Skipping write.");
            return;
        }
        const tx = this.db.transaction("session_history", "readwrite");
        const store = tx.objectStore("session_history");
        store.add(entry);
    }

    getAllResults(callback) {
        if (!this.db) {
            setTimeout(() => this.getAllResults(callback), 100);
            return;
        }
        const tx = this.db.transaction("session_history", "readonly");
        const store = tx.objectStore("session_history");
        const request = store.getAll();

        request.onsuccess = () => {
            const results = request.result.sort((a, b) => b.id - a.id);
            callback(results);
        };
    }
}

const wpmDb = new TypingDostDB();
let achievements = safeGetLocalStorage('typingDostAchievements', []);
let customUserText = '';

// Game Effects Variables
const effectsCanvas = document.getElementById('game-effects-canvas');
const ctx = effectsCanvas ? effectsCanvas.getContext('2d') : null;
let particles = [];
let lasers = [];
let screenGlitchTime = 0;
let gridOffset = 0;

// Game Variables
let gameActive = false;
let gameAnimationFrame;
let activeWords = [];
let gameScore = 0;
let gameMultiplier = 1;
let gameLives = 3;
let spawnRate = 2000;
let fallSpeed = 0.5;
let lastSpawnTime = 0;
let lastTime = 0;
let currentWpm = 0;
let gameStartTime = 0;
let totalGameCharsTyped = 0;

bestWpmEl.innerText = bestWpm;

function formatTime(seconds) {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function showToast(message, duration = 3000) {
    let existing = document.getElementById('toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, duration);
}

let audioCtx;
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

const loadedMemes = {};
function playMeme(filename) {
    try {
        if (!loadedMemes[filename]) {
            loadedMemes[filename] = new Audio(`memes/${filename}`);
        }
        loadedMemes[filename].cloneNode(true).play();
    } catch(e) {}
}

function playClick() {
    if (!audioCtx || currentSoundProfile === 'mute') return;
    
    const now = audioCtx.currentTime;
    
    // Helper to create basic noise buffer (cached globally)
    if (!window.noiseBuffer) {
        const bufferSize = audioCtx.sampleRate * 0.5; // 0.5s of noise
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        window.noiseBuffer = buffer;
    }

    function playNoise(lpFreq, hpFreq, gainVal, decay) {
        try {
            const noiseNode = audioCtx.createBufferSource();
            noiseNode.buffer = window.noiseBuffer;
            
            let filter = audioCtx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.value = (lpFreq + hpFreq) / 2;
            filter.Q.value = lpFreq / (lpFreq - hpFreq || 10);

            const noiseGain = audioCtx.createGain();
            noiseGain.gain.setValueAtTime(gainVal, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + decay);
            
            noiseNode.connect(filter);
            filter.connect(noiseGain);
            noiseGain.connect(audioCtx.destination);
            noiseNode.start(now);
            noiseNode.stop(now + decay);
        } catch (e) {}
    }

    function synthSine(freq, decay, gainVal, endFreq = null, isExp = true) {
        try {
            const osc = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);
            if (endFreq) {
                if (isExp) {
                    osc.frequency.exponentialRampToValueAtTime(endFreq, now + decay);
                } else {
                    osc.frequency.linearRampToValueAtTime(endFreq, now + decay);
                }
            }
            g.gain.setValueAtTime(gainVal, now);
            g.gain.exponentialRampToValueAtTime(0.0001, now + decay);
            osc.connect(g);
            g.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + decay);
        } catch (e) {}
    }

    function synthTriangle(freq, decay, gainVal, endFreq = null) {
        try {
            const osc = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            if (endFreq) {
                osc.frequency.exponentialRampToValueAtTime(endFreq, now + decay);
            }
            g.gain.setValueAtTime(gainVal, now);
            g.gain.exponentialRampToValueAtTime(0.0001, now + decay);
            osc.connect(g);
            g.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + decay);
        } catch (e) {}
    }

    function synthSquare(freq, decay, gainVal, endFreq = null) {
        try {
            const osc = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, now);
            if (endFreq) {
                osc.frequency.exponentialRampToValueAtTime(endFreq, now + decay);
            }
            g.gain.setValueAtTime(gainVal, now);
            g.gain.exponentialRampToValueAtTime(0.0001, now + decay);
            osc.connect(g);
            g.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + decay);
        } catch (e) {}
    }

    function synthSaw(freq, decay, gainVal, endFreq = null) {
        try {
            const osc = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, now);
            if (endFreq) {
                osc.frequency.exponentialRampToValueAtTime(endFreq, now + decay);
            }
            g.gain.setValueAtTime(gainVal, now);
            g.gain.exponentialRampToValueAtTime(0.0001, now + decay);
            osc.connect(g);
            g.connect(audioCtx.destination);
            osc.start(now);
            osc.stop(now + decay);
        } catch (e) {}
    }

    // Custom sound processing based on selected soundId
    switch (currentSoundProfile) {
        // --- MECHANICAL SECTION ---
        case 'cyber':
            synthSine(800, 0.04, 0.1, 300);
            break;
        case 'mechanical':
            synthSquare(150, 0.02, 0.2, 50);
            break;
        case 'typewriter':
            synthTriangle(800, 0.03, 0.3, 200);
            break;
        case 'blue_switch':
            playNoise(6000, 4000, 0.12, 0.01);
            synthSine(150, 0.025, 0.15, 60);
            break;
        case 'red_switch':
            synthSine(100, 0.03, 0.25, 50);
            break;
        case 'brown_switch':
            synthSine(400, 0.01, 0.08, 200);
            synthSine(120, 0.03, 0.2, 60);
            break;
        case 'gateron_yellow':
            synthSine(95, 0.035, 0.22, 45);
            break;
        case 'holy_panda':
            synthSine(130, 0.04, 0.3, 60);
            playNoise(1000, 600, 0.04, 0.015);
            break;
        case 'cream_linear':
            synthTriangle(220, 0.03, 0.25, 120);
            playNoise(3000, 1500, 0.06, 0.015);
            break;
        case 'topre_electro':
            synthSine(110, 0.04, 0.2, 50);
            break;

        // --- RETRO SECTION ---
        case 'ibm_model_m':
            playNoise(5000, 3000, 0.1, 0.015);
            synthSine(1800, 0.04, 0.05);
            synthTriangle(140, 0.03, 0.2, 70);
            break;
        case 'floppy_drive':
            synthSquare(120, 0.04, 0.15, 180);
            break;
        case 'frog_croak':
            synthSaw(80, 0.25, 0.35, 65);
            setTimeout(() => { synthSaw(75, 0.15, 0.25, 60); }, 40);
            break;
        case 'cassette_click':
            playNoise(4000, 2000, 0.08, 0.015);
            synthTriangle(180, 0.02, 0.15, 90);
            break;
        case 'rotary_phone':
            synthSine(140, 0.008, 0.2);
            setTimeout(() => { synthSine(140, 0.008, 0.2); }, 15);
            break;
        case 'arcade_blip':
            synthSquare(300, 0.05, 0.15, 1200);
            break;
        case 'retro_beep':
            synthSquare(800, 0.04, 0.1);
            break;
        case 'laser_chirp':
            synthSine(2000, 0.08, 0.1, 400);
            break;
        case 'space_shuttle':
            playNoise(2000, 800, 0.1, 0.05);
            synthSine(80, 0.06, 0.2, 40);
            break;
        case 'typewriter_bell':
            synthSine(2500, 0.5, 0.25);
            break;

        // --- SCI-FI SECTION ---
        case 'dog_bark':
            synthTriangle(350, 0.12, 0.35, 100);
            playNoise(600, 300, 0.15, 0.1);
            break;
        case 'digital_glitch':
            synthSquare(1800, 0.03, 0.12, 100);
            setTimeout(() => { synthSquare(2200, 0.02, 0.1); }, 10);
            break;
        case 'warp_drive':
            synthSine(800, 0.12, 0.15, 80);
            break;
        case 'hologram_hum':
            synthSine(300, 0.06, 0.15, 330);
            break;
        case 'cat_meow': {
            try {
                const osc = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(500, now);
                osc.frequency.linearRampToValueAtTime(850, now + 0.15);
                osc.frequency.linearRampToValueAtTime(600, now + 0.3);
                g.gain.setValueAtTime(0.2, now);
                g.gain.linearRampToValueAtTime(0.2, now + 0.15);
                g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
                osc.connect(g);
                g.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.3);
            } catch (e) {}
            break;
        }
        case 'tron_disc':
            synthSine(1500, 0.08, 0.08, 1400);
            synthSine(1510, 0.08, 0.08, 1410);
            break;
        case 'proton_pack':
            synthSaw(400, 0.06, 0.18, 100);
            break;
        case 'sub_sonar':
            synthSine(1100, 0.8, 0.2, 1080);
            break;
        case 'cyber_zap':
            synthTriangle(1200, 0.06, 0.15, 200);
            break;
        case 'matrix_ping':
            synthSine(2000, 0.2, 0.12, 1800);
            break;

        // --- COGNITIVE / MUSIC SECTION ---
        case 'water_drop':
            synthSine(600, 0.08, 0.18, 1500, false);
            break;
        case 'pop_bubble':
            synthSine(1000, 0.04, 0.15, 2200, false);
            break;
        case 'cow_moo': {
            try {
                const osc = audioCtx.createOscillator();
                const filter = audioCtx.createBiquadFilter();
                const g = audioCtx.createGain();
                osc.type = 'sawtooth';
                filter.type = 'lowpass';
                filter.frequency.value = 250;
                osc.frequency.setValueAtTime(90, now);
                osc.frequency.linearRampToValueAtTime(110, now + 0.15);
                osc.frequency.linearRampToValueAtTime(95, now + 0.4);
                g.gain.setValueAtTime(0.25, now);
                g.gain.linearRampToValueAtTime(0.25, now + 0.25);
                g.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
                osc.connect(filter);
                filter.connect(g);
                g.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.4);
            } catch (e) {}
            break;
        }
        case 'guitar_pluck':
            synthSaw(146, 0.15, 0.25, 145);
            break;
        case 'drum_rim':
            playNoise(1200, 800, 0.2, 0.02);
            synthSine(150, 0.02, 0.15, 80);
            break;
        case 'bell_chime':
            synthSine(3200, 0.4, 0.15);
            break;
        case 'harp_sweep':
            synthSine(440, 0.12, 0.1);
            setTimeout(() => { synthSine(554, 0.12, 0.1); }, 15);
            setTimeout(() => { synthSine(659, 0.12, 0.1); }, 30);
            break;
        case 'wood_block':
            playNoise(1500, 1400, 0.25, 0.03);
            break;
        case 'glass_clink':
            synthSine(3500, 0.3, 0.15);
            synthSine(3550, 0.3, 0.1);
            break;
        case 'bamboo_tap':
            synthTriangle(1100, 0.03, 0.2, 900);
            break;

        // --- MEME SECTION ---
        case 'vine_boom':
            synthSine(150, 0.6, 0.45, 30, true);
            playNoise(100, 20, 0.3, 0.4);
            break;
        case 'roblox_oof':
            synthSine(220, 0.15, 0.35, 330, false);
            break;
        case 'bruh_synth':
            synthSaw(320, 0.22, 0.3, 90);
            playNoise(800, 200, 0.08, 0.15);
            break;
        case 'metal_pipe':
            synthSine(784, 0.4, 0.15);
            synthSine(1100, 0.35, 0.12);
            synthSine(1480, 0.3, 0.08);
            synthSine(1760, 0.25, 0.05);
            playNoise(3000, 500, 0.15, 0.1);
            break;
        case 'yeet_slide':
            synthSine(200, 0.25, 0.28, 1600, false);
            break;
        case 'quack_toy':
            synthSaw(600, 0.1, 0.28, 400, false);
            break;
        case 'sad_violin':
            synthSaw(293, 0.22, 0.25, 290);
            break;
        case 'anime_wow':
            synthSine(300, 0.15, 0.25, 900, false);
            setTimeout(() => { synthSine(900, 0.15, 0.22, 500, false); }, 120);
            break;
        case 'win_xp_error':
            synthSquare(150, 0.12, 0.28);
            synthSquare(153, 0.12, 0.2);
            break;
        case 'airhorn_blip':
            synthSaw(698, 0.06, 0.25);
            synthSaw(704, 0.06, 0.2);
            break;
        case 'fart': {
            try {
                const osc = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(80, now);
                osc.frequency.linearRampToValueAtTime(45, now + 0.25);
                g.gain.setValueAtTime(0.35, now);
                g.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
                osc.connect(g);
                g.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.25);
                playNoise(200, 50, 0.3, 0.2);
            } catch (e) {}
            break;
        }
        case 'boing': {
            try {
                const osc = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.exponentialRampToValueAtTime(400, now + 0.20);
                g.gain.setValueAtTime(0.25, now);
                g.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
                osc.connect(g);
                g.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.22);
            } catch (e) {}
            break;
        }
        case 'screaming_goat': {
            try {
                const osc = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(300, now);
                osc.frequency.linearRampToValueAtTime(600, now + 0.1);
                osc.frequency.linearRampToValueAtTime(450, now + 0.25);
                g.gain.setValueAtTime(0.18, now);
                g.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
                osc.connect(g);
                g.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.25);
                playNoise(1500, 800, 0.12, 0.2);
            } catch (e) {}
            break;
        }
        case 'banana_slip': {
            try {
                const osc = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(200, now);
                osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
                g.gain.setValueAtTime(0.25, now);
                g.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
                osc.connect(g);
                g.connect(audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.18);
            } catch (e) {}
            break;
        }
        default: {
            if (currentSoundProfile.startsWith('meme_')) {
                const soundDef = keyboardSounds.find(s => s.id === currentSoundProfile);
                if (soundDef && soundDef.file) {
                    playMeme(soundDef.file);
                }
            }
            break;
        }
    }
}

function playError() {
    if (!audioCtx || currentSoundProfile === 'mute') return;
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
}

function playWarning() {
    if (!audioCtx || currentSoundProfile === 'mute') return;
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2);
    
    let osc2 = audioCtx.createOscillator();
    osc2.connect(gain);
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(500, audioCtx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime + 0.2);
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
    osc2.start(audioCtx.currentTime + 0.2);
    osc2.stop(audioCtx.currentTime + 0.4);
}

function playExplosion() {
    if (!audioCtx || currentSoundProfile === 'mute') return;
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
}

// Prevent Copy Paste
typingInput.addEventListener('paste', e => e.preventDefault());
typingInput.addEventListener('copy', e => e.preventDefault());

// Caches for highly-optimized, lag-free typing performance (Google Flow Model style)
let activeSpansList = [];
let cachedLineHeight = null;

// ---- CHUNKED RENDERING SYSTEM ----
// Always keep the DOM small (~150 words) regardless of test duration.
// Long modes (5min, 10min, custom) use a word queue that feeds chunks silently.
const RENDER_CHUNK_SIZE = 150;   // Words rendered in DOM at a time
const PREFETCH_THRESHOLD = 0.75; // Append next chunk when 75% of current chunk is typed
let wordQueue = [];              // Full word list for current test
let chunkStartWordIndex = 0;     // How many words from queue are already in DOM

// Build the complete word list for the test (called once per test start)
// Build the complete word list for the test (called once per test start)
function buildWordQueue() {
    if (currentLesson === 'game' || currentLesson === 'bubble-shooter') return;

    // --- 1. Dedicated Custom Text Handler ---
    if (currentLesson === 'customtext') {
        const rawCustom = (lessons.customtext && lessons.customtext[0]) ? lessons.customtext[0] : customUserText;
        if (!rawCustom || rawCustom.trim().length === 0) {
            wordQueue = ['Please', 'enter', 'or', 'paste', 'your', 'custom', 'text', 'in', 'the', 'Custom', 'Text', 'window.'];
            return;
        }
        const customWords = rawCustom.trim().split(/\s+/).filter(w => w.length > 0);
        if (customWords.length === 0) {
            wordQueue = ['Please', 'enter', 'or', 'paste', 'your', 'custom', 'text.'];
            return;
        }
        // In words testMode, if user has fewer words than wordLimit, repeat to fulfill limit, otherwise use exact words
        if (testMode === 'words' && customWords.length < wordLimit) {
            let expanded = [];
            while (expanded.length < wordLimit + 10) {
                expanded.push(...customWords);
            }
            wordQueue = expanded.slice(0, wordLimit + 10);
        } else if (testMode === 'time') {
            const needed = Math.min(2000, Math.ceil((maxTime / 60) * 160 * 1.2));
            if (customWords.length < needed) {
                let expanded = [];
                while (expanded.length < needed) {
                    expanded.push(...customWords);
                }
                wordQueue = expanded.slice(0, needed);
            } else {
                wordQueue = customWords;
            }
        } else {
            wordQueue = customWords;
        }
        return;
    }

    const activeLang = (typeof currentLearningLang !== 'undefined' && currentLearningLang) 
        ? currentLearningLang.toLowerCase() 
        : (localStorage.getItem('typingDostLang') || 'english').toLowerCase();
    let currentBank = lessons[currentLesson];
    const langLessons = multilingualLessons[activeLang] || multilingualLessons.english;
    
    // Check if the current language has a dedicated bank for this lesson
    if (langLessons && langLessons[currentLesson] && Array.isArray(langLessons[currentLesson]) && langLessons[currentLesson].length > 0) {
        currentBank = langLessons[currentLesson];
    } else if (!currentBank || currentBank.length === 0) {
        // Only fallback to sentences if currentBank in global lessons does not exist
        if (langLessons && langLessons.sentences && Array.isArray(langLessons.sentences) && langLessons.sentences.length > 0) {
            currentBank = langLessons.sentences;
        }
    }

    // For weakspot mode, generate words differently
    if (currentLesson === 'weakspot') {
        let keys = Object.keys(weakspots).sort((a,b) => weakspots[b]-weakspots[a]).slice(0,5);
        if (keys.length === 0) keys = ['a','s','d','f','j','k','l',';'];
        let arr = [];
        const needed = testMode === 'time' ? Math.ceil((maxTime/60)*150) : wordLimit;
        for (let i = 0; i < needed; i++) {
            let word = '', len = Math.floor(Math.random()*4)+3;
            for (let j=0;j<len;j++) word += keys[Math.floor(Math.random()*keys.length)];
            arr.push(word);
        }
        wordQueue = arr;
        return;
    }

    if (!Array.isArray(currentBank) || currentBank.length === 0) { wordQueue = ['Error: Word bank empty']; return; }

    // Calculate how many words we need for the entire test
    // Use 160 wpm as generous upper bound so even fast typists don't run out
    let totalNeeded;
    if (testMode === 'words') {
        totalNeeded = wordLimit + 20; // small buffer
    } else {
        // 160 wpm * minutes + 20% buffer — but cap at 2000 to avoid OOM
        totalNeeded = Math.min(2000, Math.ceil((maxTime / 60) * 160 * 1.2));
    }

    const builtWords = [];
    if (['easy', 'commonwords'].includes(currentLesson)) {
        let allWords = [];
        currentBank.forEach(str => { if (str) allWords.push(...str.split(/\s+/)); });
        allWords = allWords.filter(w => w.trim().length > 0);
        for (let i = 0; i < totalNeeded; i++) {
            builtWords.push(allWords[Math.floor(Math.random()*allWords.length)]);
        }
    } else {
        let currentWordCount = 0, attempts = 0;
        const maxAttempts = totalNeeded * 10;
        while (currentWordCount < totalNeeded && attempts < maxAttempts) {
            const randStr = currentBank[Math.floor(Math.random()*currentBank.length)];
            if (randStr) {
                randStr.split(/\s+/).forEach(w => { if (w.trim()) builtWords.push(w); });
                currentWordCount += randStr.split(/\s+/).length;
            }
            attempts++;
        }
    }

    // Apply modifiers to all words upfront
    const puncts = ['.', ',', '!', '?', '"', ';', ':'];
    wordQueue = builtWords.map(w => {
        let word = w;
        if (modPunctuation && modPunctuation.checked && Math.random() > 0.7)
            word += puncts[Math.floor(Math.random()*puncts.length)];
        if (modNumbers && modNumbers.checked && Math.random() > 0.8)
            word += Math.floor(Math.random()*100);
        return word;
    });
}

// Convert an array of words into an HTML string of spans with 100% Unicode codepoint accuracy
function wordsToHtml(words) {
    let html = '';
    words.forEach((word, wordIdx) => {
        html += '<span class="word-group">';
        [...word].forEach(char => {
            const e = char === '&' ? '&amp;' : char === '<' ? '&lt;' : char === '>' ? '&gt;' : char;
            html += `<span>${e}</span>`;
        });
        html += '</span>';
        if (wordIdx < words.length - 1) html += '<span class="word-space"> </span>';
    });
    return html;
}

// Append the next chunk of words to the DOM (called silently while user is typing)
function appendNextChunk() {
    const nextStart = chunkStartWordIndex;
    const nextEnd = Math.min(wordQueue.length, nextStart + RENDER_CHUNK_SIZE);
    if (nextStart >= wordQueue.length) return; // No more words

    const chunkWords = wordQueue.slice(nextStart, nextEnd);
    const newHtml = '<span class="word-space"> </span>' + wordsToHtml(chunkWords);
    
    // Insert before caret and ghost caret
    const caretEl = document.getElementById('typing-caret');
    const ghostCaretEl = document.getElementById('ghost-caret');
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newHtml;
    
    // Append all new nodes before the carets
    const insertBeforeTarget = caretEl || ghostCaretEl || null;
    const fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) fragment.appendChild(tempDiv.firstChild);
    
    if (insertBeforeTarget) {
        textDisplay.insertBefore(fragment, insertBeforeTarget);
    } else {
        textDisplay.appendChild(fragment);
    }
    
    chunkStartWordIndex = nextEnd;
    
    // Re-cache activeSpansList to include new spans
    activeSpansList = textDisplay.querySelectorAll('span:not(.word-group)');
    activeSpansCoords = []; // Invalidate coordinate cache
    cachedLineHeight = null;
}

function renderNewText() {
    if (currentLesson === 'game' || currentLesson === 'bubble-shooter') return;

    // --- CHUNKED RENDERING: Build full word queue, then only render first chunk ---
    // This keeps DOM size constant (~150 words) regardless of test duration.
    // Subsequent chunks are appended silently while the user is typing.
    buildWordQueue();
    chunkStartWordIndex = 0;

    // Take first chunk from queue
    const firstChunkEnd = Math.min(wordQueue.length, RENDER_CHUNK_SIZE);
    const firstChunkWords = wordQueue.slice(0, firstChunkEnd);
    chunkStartWordIndex = firstChunkEnd;

    // Build currentText from first chunk (for compatibility with blind-mode reveal at endGame)
    currentText = wordQueue.join(' ');

    const htmlContent = wordsToHtml(firstChunkWords);
    textDisplay.innerHTML = htmlContent;

    if (caret) {
        caret.classList.remove('hidden');
        textDisplay.appendChild(caret); // append caret back after reset
    }
    if (ghostCaret) {
        textDisplay.appendChild(ghostCaret); // append ghost caret back after reset
    }

    // Cache the active span elements immediately to prevent querying the DOM on every single keystroke!
    activeSpansList = textDisplay.querySelectorAll('span:not(.word-group)');
    activeSpansCoords = []; // Reset coordinates cache for the new text
    cachedLineHeight = null; // Clear cached line height on new renders to allow safe lazy recalculation
    
    // Reset scroll position
    textDisplay.scrollTop = 0;
    correctStreak = 0;

    let firstSpan = activeSpansList[0];
    if(firstSpan) firstSpan.classList.add('active');
    
    // Smooth reset of inputs
    typingInput.value = "";
    charIndex = 0;
    mistakes = 0;
    
    updateCaretPosition();
    if (typeof updateKeyboardGuideNextKey === 'function') {
        updateKeyboardGuideNextKey();
    }
}


function loadNewText() {
    renderNewText();
    
    // Reset stats
    document.addEventListener('keydown', focusInput);
    isTyping = false;
    document.body.classList.remove('focused-typing');
    const textboxHeader = document.getElementById('textbox-header');
    if (textboxHeader) textboxHeader.classList.remove('hidden');
    const mascotPanel = document.getElementById('live-mascot-panel');
    if (mascotPanel) mascotPanel.classList.remove('hidden');
    clearTimeout(window.inactivityTimeout);
    
    // Explicitly hide focus overlay and unblur text display on restart
    const focusOverlayElement = document.getElementById('focus-overlay');
    const textDisplayElement = document.getElementById('text-display');
    if (focusOverlayElement) focusOverlayElement.classList.add('hidden');
    if (textDisplayElement) textDisplayElement.classList.remove('blurred');
    if (!typingSectionWrapper) {
        typingSectionWrapper = document.getElementById('typing-section-wrapper');
    }
    const auraWrapper = typingSectionWrapper;
    if (auraWrapper) {
        auraWrapper.classList.remove('speed-rookie', 'speed-pro', 'speed-master', 'speed-god', 'has-error');
    }
    timeLeft = maxTime;
    totalCharsTyped = 0;
    totalMistakes = 0;
    wordsTyped = 0;
    wpmHistory = [];
    rawWpmHistory = [];
    errorHistory = [];
    lastSecondMistakes = 0;
    backspaceCount = 0;
    accuracyHistory = [];
    timeLabels = [];
    clearInterval(interval);

    // --- GHOST & METRONOME RESET ---
    if (ghostInterval) {
        clearInterval(ghostInterval);
        ghostInterval = null;
    }
    if (metronomeInterval) {
        clearInterval(metronomeInterval);
        metronomeInterval = null;
    }
    const ghostCaret = document.getElementById('ghost-caret');
    if (ghostCaret) ghostCaret.classList.add('hidden');
    ghostCharIndex = 0;
    
    if (testMode === 'words') {
        timeEl.innerText = `${wordLimit}w`;
    } else {
        timeEl.innerText = formatTime(timeLeft);
    }
    wpmEl.innerText = 0;
    mistakesEl.innerText = 0;
    accuracyEl.innerText = "100%";
    if (typeof updateKeyboardGuideNextKey === 'function') {
        updateKeyboardGuideNextKey();
    }
    if (typeof updateLiveMascot === 'function') {
        updateLiveMascot('welcome');
    }
    
    // Clear coordinate cache since layout state changed (focused-typing removed, textboxHeader shown)
    activeSpansCoords = [];
    updateCaretPosition();
}

function updateCaretPosition() {
    if (!caret) return;
    const chars = activeSpansList;
    if (chars.length === 0) return;

    const isAtEnd = charIndex >= chars.length;
    const activeSpanIdx = isAtEnd ? chars.length - 1 : charIndex;
    const cachedSpan = getSpanCoords(activeSpanIdx);
    if (!cachedSpan) return;

    // Position caret at the left side of the active span (LTR), or right side (RTL for Urdu/Arabic)
    const isRTL = ['urdu', 'arabic'].includes(localStorage.getItem('typingDostLang') || '');
    const x = isRTL 
        ? (isAtEnd ? cachedSpan.left : cachedSpan.right)
        : (isAtEnd ? cachedSpan.right : cachedSpan.left);
    const y = cachedSpan.top;

    // Detect line wrap / jump (y coordinate changed significantly)
    const lastY = caret.dataset.lastY ? parseFloat(caret.dataset.lastY) : null;
    const yChanged = lastY !== null && Math.abs(y - lastY) > 8;

    if (yChanged) {
        caret.classList.add('no-transition');
    }

    caret.style.transform = `translate3d(${x}px, ${y}px, 0)`;

    if (yChanged) {
        // Force reflow to apply translate immediately without transition
        caret.offsetHeight;
        caret.classList.remove('no-transition');
    }

    caret.dataset.lastY = y;

    caret.classList.remove('blinking');
    clearTimeout(window.caretTimeout);
    window.caretTimeout = setTimeout(() => caret.classList.add('blinking'), 500);

    // ---- Streak-based caret color ----
    caret.classList.remove('streak-1','streak-2','streak-3','streak-4','streak-5','streak-max');
    if      (correctStreak >= 50) caret.classList.add('streak-max');
    else if (correctStreak >= 30) caret.classList.add('streak-5');
    else if (correctStreak >= 20) caret.classList.add('streak-4');
    else if (correctStreak >= 12) caret.classList.add('streak-3');
    else if (correctStreak >=  6) caret.classList.add('streak-2');
    else if (correctStreak >=  3) caret.classList.add('streak-1');

    // ---- Smart smooth line-scroll (Highly optimized, cached lineHeight) ----
    if (!cachedLineHeight) {
        cachedLineHeight = parseFloat(getComputedStyle(textDisplay).lineHeight) || (textDisplay.clientHeight / 3);
    }
    const lineH = cachedLineHeight;
    const rawY  = cachedSpan.top - textDisplay.scrollTop; // visible Y relative to container top (without scroll)
    if (rawY > lineH * 1.2) {
        const scrollTarget = textDisplay.scrollTop + rawY - lineH * 0.15;
        const startScroll  = textDisplay.scrollTop;
        const diff         = scrollTarget - startScroll;
        const duration     = 160;
        const startTime    = performance.now();
        function animateScroll(now) {
            const elapsed  = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease     = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            textDisplay.scrollTop = startScroll + diff * ease;
            if (progress < 1) requestAnimationFrame(animateScroll);
        }
        requestAnimationFrame(animateScroll);
    }
}

function updateGhostCaretPosition() {
    const ghostCaret = document.getElementById('ghost-caret');
    if (ghostCaret) {
        ghostCaret.classList.add('hidden');
    }
}

function playMetronomeClick() {
    try {
        initAudio();
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.05);
        
        osc.start(now);
        osc.stop(now + 0.06);
    } catch (e) {
        // Swallowed safely
    }
}


function initTyping(e) {
    if (isComposing) return;
    if (activeSpansList.length === 0) {
        activeSpansList = textDisplay.querySelectorAll('span:not(.word-group)');
    }
    const chars = activeSpansList;
    const timeOk = testMode === 'time' ? timeLeft > 0 : true;
    
    if (timeOk) {
        // Dynamic Inactivity timeout: automatically blur if no keys pressed for 10 seconds
        clearTimeout(window.inactivityTimeout);
        if (currentLesson !== 'game' && currentLesson !== 'bubble-shooter') {
            window.inactivityTimeout = setTimeout(() => {
                if (isTyping) {
                    typingInput.blur();
                    
                    const focusOverlay = document.getElementById('focus-overlay');
                    const textDisplayEl = document.getElementById('text-display');
                    const activeModals = document.querySelectorAll('.modal:not(.hidden)');
                    
                    if (activeModals.length === 0) {
                        if (focusOverlay) focusOverlay.classList.remove('hidden');
                        if (textDisplayEl) textDisplayEl.classList.add('blurred');
                        document.body.classList.remove('focused-typing');
                        const textboxHeader = document.getElementById('textbox-header');
                        if (textboxHeader) textboxHeader.classList.remove('hidden');
                        const mascotPanel = document.getElementById('live-mascot-panel');
                        if (mascotPanel) mascotPanel.classList.add('hidden');
                    }
                }
            }, 10000); // 10 seconds
        }
        initAudio();
        
        // Start the timer when the first key is pressed
        if (!isTyping) {
            if (testMode === 'words') {
                wordModeStartTime = Date.now();
                interval = setInterval(initTimerWords, 1000);
            } else {
                interval = setInterval(initTimer, 1000);
            }
            isTyping = true;
            document.body.classList.add('focused-typing');
            const textboxHeader = document.getElementById('textbox-header');
            if (textboxHeader) textboxHeader.classList.add('hidden');
            
            // Clear coordinate cache since layout state changed (focused-typing added, textboxHeader hidden)
            activeSpansCoords = [];
            
            wordsTyped = 0;

            // --- GHOST CARET START ---
            ghostCharIndex = 0;
            const targetWpm = Math.max(40, parseFloat(bestWpm) || 0);
            const charsPerMs = (targetWpm * 5) / (60 * 1000);
            const ghostStartTime = Date.now();
            if (ghostInterval) clearInterval(ghostInterval);
            ghostInterval = setInterval(() => {
                if (!isTyping) {
                    clearInterval(ghostInterval);
                    return;
                }
                const elapsedMs = Date.now() - ghostStartTime;
                ghostCharIndex = elapsedMs * charsPerMs;
                updateGhostCaretPosition();
            }, 100);

            // --- METRONOME START ---
            if (metronomeInterval) clearInterval(metronomeInterval);
            const isMetronomeOn = document.getElementById('mod-metronome') && document.getElementById('mod-metronome').checked;
            if (isMetronomeOn) {
                metronomeInterval = setInterval(() => {
                    if (!isTyping) {
                        clearInterval(metronomeInterval);
                        return;
                    }
                    playMetronomeClick();
                }, 500); // 120 BPM
            }
        }

        const currentInputVal = typingInput.value;
        const inputChars = [...currentInputVal];
        const prevCharIndex = charIndex;
        const newCharIndex = Math.min(inputChars.length, chars.length);

        if (inputChars.length < prevCharIndex) {
            playClick();
            backspaceCount += (prevCharIndex - inputChars.length);
        }

        // Full Declarative State Synchronization across all text spans
        let currentMistakes = 0;
        let wordsCounted = 0;
        let streak = 0;

        for (let k = 0; k < chars.length; k++) {
            const span = chars[k];
            if (k < inputChars.length) {
                const typedChar = inputChars[k];
                const targetChar = span.textContent;
                if (typedChar === targetChar) {
                    if (!isBlindMode) {
                        span.className = 'correct';
                    }
                    streak++;
                    if (typedChar === ' ' || k === chars.length - 1) {
                        wordsCounted++;
                    }
                } else {
                    if (!isBlindMode) {
                        span.className = 'wrong';
                    }
                    currentMistakes++;
                    streak = 0;
                    if (k === inputChars.length - 1) {
                        weakspots[targetChar] = (weakspots[targetChar] || 0) + 1;
                    }
                }
            } else if (k === inputChars.length) {
                span.className = 'active';
            } else {
                span.className = '';
            }
        }

        mistakes = currentMistakes;
        charIndex = newCharIndex;
        correctStreak = streak;
        wordsTyped = wordsCounted;

        // Audio & Visual Effects on latest keystroke
        if (inputChars.length > prevCharIndex) {
            const lastIdx = inputChars.length - 1;
            const lastTyped = inputChars[lastIdx];
            const lastTarget = chars[lastIdx] ? chars[lastIdx].textContent : '';
            if (lastTyped === lastTarget) {
                playClick();
                createSparks(lastIdx);

                // Word-done burst animation
                if (lastTyped === ' ' || lastIdx === chars.length - 1) {
                    const prevSpan = chars[lastIdx];
                    if (prevSpan) {
                        const wordGrp = prevSpan.closest('.word-group');
                        if (wordGrp) {
                            requestAnimationFrame(() => {
                                wordGrp.classList.add('word-done');
                                setTimeout(() => wordGrp.classList.remove('word-done'), 420);
                            });
                        }
                    }
                }
            } else {
                playError();
                triggerScreenShake();
                updateLiveMascot('rage');
                if (isStopOnError) {
                    textDisplay.classList.add('stop-error-flash');
                    setTimeout(() => textDisplay.classList.remove('stop-error-flash'), 150);
                    typingInput.value = currentInputVal.substring(0, inputChars.length - 1);
                    initTyping(e);
                    return;
                }
            }
        }

        // Words mode: end test when word limit reached
        if (testMode === 'words' && wordsTyped >= wordLimit) {
            clearInterval(interval);
            const elapsed = Math.max(1, Math.floor((Date.now() - wordModeStartTime) / 1000));
            const wpm = Math.round((((totalCharsTyped + charIndex - (totalMistakes + mistakes)) / 5) / elapsed) * 60);
            const accuracy = Math.round(((totalCharsTyped + charIndex - (totalMistakes + mistakes)) / Math.max(totalCharsTyped + charIndex, 1)) * 100);
            endGame(Math.max(0, wpm), Math.max(0, accuracy));
            return;
        }
        
        // ---- Visuomotor caret elastic morphing ----
        if (caret) {
            caret.classList.add('typing-active');
            caret.classList.remove('typing-fast', 'typing-nitro');
            if (correctStreak >= 30) {
                caret.classList.add('typing-nitro');
            } else if (correctStreak >= 15) {
                caret.classList.add('typing-fast');
            }
            
            clearTimeout(window.caretActiveTimeout);
            window.caretActiveTimeout = setTimeout(() => {
                caret.classList.remove('typing-active', 'typing-fast', 'typing-nitro');
            }, 150);
        }
        
        updateCaretPosition();

        // Live stats calculation
        let currentTotalChars = totalCharsTyped + charIndex;
        let currentTotalMistakes = totalMistakes + mistakes;
        
        const elapsedLive = testMode === 'words'
            ? Math.max(1, Math.floor((Date.now() - wordModeStartTime) / 1000))
            : maxTime - timeLeft;
        let wpm = Math.round((((currentTotalChars - currentTotalMistakes) / 5) / Math.max(elapsedLive, 1)) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        
        let accuracy = Math.round(((currentTotalChars - currentTotalMistakes) / currentTotalChars) * 100);
        accuracy = accuracy < 0 || !accuracy || accuracy === Infinity ? 100 : accuracy;

        if (wpmEl.innerText !== String(wpm)) wpmEl.innerText = wpm;
        
        // ---- Dynamic WPM Speed Aura Glow Injector ----
        if (!typingSectionWrapper) {
            typingSectionWrapper = document.getElementById('typing-section-wrapper');
        }
        const auraWrapper = typingSectionWrapper;
        if (auraWrapper) {
            let targetSpeedClass = '';
            if (wpm >= 90) targetSpeedClass = 'speed-god';
            else if (wpm >= 60) targetSpeedClass = 'speed-master';
            else if (wpm >= 30) targetSpeedClass = 'speed-pro';
            else if (wpm > 0) targetSpeedClass = 'speed-rookie';

            if (!auraWrapper.classList.contains(targetSpeedClass)) {
                auraWrapper.classList.remove('speed-rookie', 'speed-pro', 'speed-master', 'speed-god');
                if (targetSpeedClass) auraWrapper.classList.add(targetSpeedClass);
            }
        }
        
        const accStr = `${accuracy}%`;
        if (accuracyEl.innerText !== accStr) accuracyEl.innerText = accStr;
        const misStr = String(currentTotalMistakes);
        if (mistakesEl.innerText !== misStr) mistakesEl.innerText = misStr;

        if (typingSectionWrapper) {
            const hasErr = mistakes > 0;
            if (typingSectionWrapper.classList.contains('has-error') !== hasErr) {
                typingSectionWrapper.classList.toggle('has-error', hasErr);
            }
        }

        if (typeof updateKeyboardGuideNextKey === 'function') {
            updateKeyboardGuideNextKey();
        }
        
        // --- CHUNKED PREFETCH: Silently append next chunk when 75% through current ---
        const prefetchAt = Math.floor(chars.length * PREFETCH_THRESHOLD);
        if (charIndex >= prefetchAt && chunkStartWordIndex < wordQueue.length) {
            // Only append once — guard with a flag on the span list length
            if (!textDisplay.dataset.chunkPrefetched || parseInt(textDisplay.dataset.chunkPrefetched) < chunkStartWordIndex) {
                textDisplay.dataset.chunkPrefetched = chunkStartWordIndex;
                requestAnimationFrame(() => appendNextChunk());
            }
        }

        // Auto stop if completed current visible chunk — load next chunk or full re-render
        if (charIndex === chars.length) {
            totalCharsTyped += charIndex;
            totalMistakes += mistakes;
            // If there are still queued words, don't full re-render — just fetch more
            if (chunkStartWordIndex < wordQueue.length) {
                // Append next chunk immediately (user reached end faster than prefetch fired)
                appendNextChunk();
                // Update references
                charIndex = 0;
                mistakes = 0;
                typingInput.value = '';
                const newChars = activeSpansList;
                if (newChars[0]) newChars[0].classList.add('active');
                updateCaretPosition();
                textDisplay.dataset.chunkPrefetched = '0';
            } else {
                // Word queue exhausted — load completely fresh set
                setTimeout(() => { renderNewText(); }, 0);
            }
            return;
        }
    } else {
        typingInput.value = typingInput.value.substring(0, charIndex); // Prevent overflow
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        const formattedTime = formatTime(timeLeft);
        if (timeEl.innerText !== formattedTime) timeEl.innerText = formattedTime;
        
        // Update WPM during timer
        let currentTotalChars = totalCharsTyped + charIndex;
        let currentTotalMistakes = totalMistakes + mistakes;
        
        // Calculate Net WPM
        let wpm = Math.round((((currentTotalChars - currentTotalMistakes) / 5) / (maxTime - timeLeft)) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        if (wpmEl.innerText !== String(wpm)) wpmEl.innerText = wpm;
        
        // Calculate Raw WPM
        let rawWpm = Math.round(((currentTotalChars / 5) / (maxTime - timeLeft)) * 60);
        rawWpm = rawWpm < 0 || !rawWpm || rawWpm === Infinity ? 0 : rawWpm;
        
        let accuracy = Math.round(((currentTotalChars - currentTotalMistakes) / currentTotalChars) * 100);
        accuracy = accuracy < 0 || !accuracy || accuracy === Infinity ? 100 : accuracy;
        
        updateLiveMascotByWpm(wpm, accuracy);

        wpmHistory.push(wpm);
        rawWpmHistory.push(rawWpm);
        
        // Calculate and push mistakes made in this specific second
        let errorsThisSecond = currentTotalMistakes - lastSecondMistakes;
        errorHistory.push(Math.max(0, errorsThisSecond));
        lastSecondMistakes = currentTotalMistakes;
        
        accuracyHistory.push(accuracy);
        timeLabels.push(maxTime - timeLeft);
        
    } else {
        clearInterval(interval);
        endGame(parseInt(wpmEl.innerText), parseInt(accuracyEl.innerText));
    }
}

function endGame(finalWpm, finalAccuracy) {
    document.body.classList.remove('focused-typing');
    activeSpansCoords = []; // Clear coordinates cache!
    clearTimeout(window.inactivityTimeout);
    lastWpm = finalWpm;
    lastAccuracy = finalAccuracy;
    lastTestMode = currentLesson;
    clearInterval(interval);
    typingInput.disabled = true;
    document.removeEventListener('keydown', focusInput);
    if (caret) caret.classList.add('hidden');
    
    // Reset blind mode colours now — reveal result
    if (isBlindMode) {
        const chars = textDisplay.querySelectorAll('span:not(.word-group)');
        chars.forEach((span, i) => {
            if (i < charIndex) {
                span.classList.add(span.textContent === currentText[i] ? 'correct' : 'wrong');
            }
        });
    }
    
    // Consistency score (lower variance = higher consistency)
    let consistency = 100;
    if (wpmHistory.length > 2) {
        const avg = wpmHistory.reduce((a, b) => a + b, 0) / wpmHistory.length;
        const variance = wpmHistory.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / wpmHistory.length;
        const stdDev = Math.sqrt(variance);
        consistency = Math.max(0, Math.round(100 - (stdDev / Math.max(avg, 1)) * 100));
    }
    const consistencyEl = document.getElementById('final-consistency');
    if (consistencyEl) consistencyEl.innerText = consistency;
    
    // Gamification XP Rewards
    let correctChars = Math.max(0, (totalCharsTyped + charIndex) - (totalMistakes + mistakes));
    let xpGained = correctChars;
    userXP += xpGained;
    
    let levelsGained = 0;
    while (userXP >= userLevel * 100) {
        userXP -= userLevel * 100;
        userLevel++;
        levelsGained++;
    }
    
    localStorage.setItem('typing_dost_xp', userXP);
    localStorage.setItem('typing_dost_level', userLevel);
    
    testsCompletedToday++;
    localStorage.setItem('typingDostTestsCompletedToday', testsCompletedToday);
    localStorage.setItem('typingDostLastTestDate', new Date().toDateString());
    
    updateGamificationHeader();
    
    const milestones = [
        { count: 5, name: "BRONZE", next: "SILVER", nextCount: 10 },
        { count: 10, name: "SILVER", next: "GOLD", nextCount: 15 },
        { count: 15, name: "GOLD", next: "PLATINUM", nextCount: 20 },
        { count: 20, name: "PLATINUM", next: "DIAMOND", nextCount: 25 },
        { count: 25, name: "DIAMOND", next: "ELITE", nextCount: 30 },
        { count: 30, name: "ELITE", next: "CHAMPION", nextCount: 50 },
        { count: 50, name: "CHAMPION", next: "GRANDMASTER", nextCount: 100 },
        { count: 100, name: "GRANDMASTER", next: "LEGEND", nextCount: 999 }
    ];
    const milestone = milestones.find(m => m.count === testsCompletedToday);
    if (milestone) {
        if (milestone.count === 100) {
            showToast("🎉 GRANDMASTER Goal Achieved! 100/100 Tests Completed! 🌌 You are a Typing Legend! 👑", 8000);
        } else {
            showToast(`🎉 ${milestone.name} Goal Achieved! ${milestone.count}/${milestone.count} Tests Completed! 🏆 ${milestone.next} Goal Unlocked (${milestone.nextCount} Tests)!`, 8000);
        }
        if (typeof playWarning === 'function') playWarning();
    }
    updateLiveMascot('normal', { wpm: finalWpm, accuracy: finalAccuracy });
    
    if (levelsGained > 0) {
        showLevelUpModal(userLevel);
    }
    
    // Check high score
    if (finalWpm > bestWpm) {
        bestWpm = finalWpm;
        localStorage.setItem('typingDostBestWpm', bestWpm);
        bestWpmEl.innerText = bestWpm;
    }
    
    // Save Session History
    const modeLabel = testMode === 'words' ? `${wordLimit} words` : `${maxTime}s`;
    const sessionEntry = {
        wpm: finalWpm,
        accuracy: finalAccuracy,
        consistency,
        lesson: currentLesson,
        mode: modeLabel,
        date: new Date().toLocaleString()
    };
    sessionHistory.unshift(sessionEntry);
    if (sessionHistory.length > 20) sessionHistory.pop();
    localStorage.setItem('typingDostHistory', JSON.stringify(sessionHistory));
    
    // Save to local IndexedDB database for infinite statistics logs
    if (wpmDb) {
        wpmDb.addResult(sessionEntry);
    }
    
    // Check Achievements
    const newlyUnlocked = checkAchievements(finalWpm, finalAccuracy, consistency);
    
    // Set Modal Values and restore layouts
    const modalTitle = document.getElementById('result-modal-title');
    if (modalTitle) modalTitle.innerText = "Time's Up!";
    
    if (modalCloseBtn) {
        const btnTrans = MODAL_BTN_TRANSLATIONS[currentLearningLang] || MODAL_BTN_TRANSLATIONS.english;
        modalCloseBtn.innerText = btnTrans.typeAgain;
    }
    
    if (finalWpmEl) finalWpmEl.innerText = finalWpm;
    
    const wpmLabel = document.getElementById('final-wpm-label');
    if (wpmLabel) wpmLabel.innerText = " WPM";
    
    if (finalAccuracyEl) finalAccuracyEl.innerText = finalAccuracy;
    
    const accuracyWrap = document.getElementById('final-accuracy-wrap-modal');
    if (accuracyWrap) accuracyWrap.style.display = 'block';
    
    const consistencyWrap = document.getElementById('final-consistency-wrap');
    if (consistencyWrap) consistencyWrap.style.display = 'block';
    
    // Calculate advanced metrics
    const elapsedSec = testMode === 'words'
        ? Math.max(1, Math.floor((Date.now() - wordModeStartTime) / 1000))
        : maxTime - timeLeft;
    const rawWpmVal = Math.round((((totalCharsTyped + charIndex) / 5) / Math.max(elapsedSec, 1)) * 60);
    const uncorrectedMistakes = mistakes;
    const correctedMistakes = Math.max(0, (totalMistakes + mistakes) - uncorrectedMistakes);

    // Populate advanced stats row
    const finalRawWpmEl = document.getElementById('final-raw-wpm');
    const finalErrorsSplitEl = document.getElementById('final-errors-split');
    const finalBackspacesEl = document.getElementById('final-backspaces');
    const finalKeyAccuracyEl = document.getElementById('final-key-accuracy');
    const finalCharsDetailsEl = document.getElementById('final-chars-details');
    const finalModeEl = document.getElementById('final-mode');
    const finalDetailsRow = document.getElementById('final-details-row');

    if (finalRawWpmEl) finalRawWpmEl.innerText = rawWpmVal;
    if (finalErrorsSplitEl) finalErrorsSplitEl.innerText = `${correctedMistakes} / ${uncorrectedMistakes}`;
    if (finalBackspacesEl) finalBackspacesEl.innerText = backspaceCount;
    
    // Key Accuracy calculation
    const totalPresses = (totalCharsTyped + charIndex) + (totalMistakes + mistakes);
    const keyAccuracy = totalPresses > 0 
        ? Math.round((Math.max(0, (totalCharsTyped + charIndex) - (totalMistakes + mistakes)) / totalPresses) * 100)
        : 100;
    if (finalKeyAccuracyEl) finalKeyAccuracyEl.innerText = `${keyAccuracy}%`;
    
    // Characters details: correct / wrong
    const correctCharsCount = Math.max(0, (totalCharsTyped + charIndex) - (totalMistakes + mistakes));
    if (finalCharsDetailsEl) finalCharsDetailsEl.innerText = `${correctCharsCount} / ${totalMistakes + mistakes}`;
    
    if (finalModeEl) finalModeEl.innerText = modeLabel;
    if (finalDetailsRow) finalDetailsRow.style.display = 'grid';
    
    // Store final advanced stats in globals for certificate
    lastRawWpm = rawWpmVal;
    lastKeyAccuracy = keyAccuracy;
    lastCorrectedMistakes = correctedMistakes;
    lastUncorrectedMistakes = uncorrectedMistakes;
    lastBackspaceCount = backspaceCount;
    
    // Restore chart and achievements displays
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) chartContainer.style.display = 'block';
    
    const modalAch = document.getElementById('modal-achievements');
    if (modalAch) modalAch.style.display = 'flex';
    
    if (encouragingMsgEl) {
        encouragingMsgEl.innerText = getDynamicPerformanceMessage(finalWpm, finalAccuracy, currentLearningLang);
    }
    
    // Render Chart.js
    const canvas = document.getElementById('wpm-chart');
    if (canvas && typeof Chart !== 'undefined') {
        if (chartInstance) { chartInstance.destroy(); }
        const ctx2d = canvas.getContext('2d');
        const primaryColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#00ffff';
        chartInstance = new Chart(ctx2d, {
            type: 'line',
            data: {
                labels: timeLabels,
                datasets: [
                    {
                        label: 'WPM',
                        data: wpmHistory,
                        borderColor: primaryColor,
                        backgroundColor: 'rgba(0, 255, 255, 0.05)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.35
                    },
                    {
                        label: 'Raw',
                        data: rawWpmHistory,
                        borderColor: 'rgba(139, 155, 180, 0.4)',
                        backgroundColor: 'transparent',
                        borderWidth: 1.5,
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.35
                    },
                    {
                        label: 'Errors',
                        data: errorHistory,
                        borderColor: '#ff4757',
                        backgroundColor: '#ff4757',
                        pointStyle: 'crossRot',
                        pointRadius: errorHistory.map(err => err > 0 ? 5 : 0),
                        showLine: false,
                        fill: false,
                        yAxisID: 'yErrors'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { 
                        beginAtZero: true, 
                        position: 'left',
                        grid: { color: 'rgba(255,255,255,0.06)' }, 
                        ticks: { color: '#8b9bb4' } 
                    },
                    yErrors: {
                        beginAtZero: true,
                        position: 'right',
                        min: 0,
                        max: Math.max(5, Math.max(...errorHistory) + 2),
                        grid: { drawOnChartArea: false },
                        ticks: { 
                            color: '#ff4757',
                            stepSize: 1,
                            callback: function(value) { return value === 0 ? '' : value; }
                        }
                    },
                    x: { 
                        grid: { display: false }, 
                        ticks: { color: '#8b9bb4' } 
                    }
                },
                plugins: { 
                    legend: { 
                        display: true, 
                        labels: { color: '#8b9bb4', boxWidth: 12, font: { family: 'JetBrains Mono' } } 
                    } 
                }
            }
        });
    }
    
    // Render Keyboard Heatmap
    renderKeyboardHeatmap();
    
    // Show newly unlocked badges in modal
    if (modalAch) {
        modalAch.innerHTML = newlyUnlocked.map(a =>
            `<span class="badge">${a.icon} ${a.name}</span>`).join('');
    }
    
    showMascotPopup(finalWpm, finalAccuracy, 0, false);
}

function resetGame() {
    pendingPreBaseMatra = null;
    typingInput.disabled = false;
    loadNewText();
}

function focusInput(e) {
    if (e && e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') && e.target !== typingInput) {
        return;
    }
    if (currentLesson === 'game') {
        if (gameInput && !gameInput.disabled) {
            gameInput.focus();
        }
    } else {
        typingInput.focus();
    }
}

// ---- ACHIEVEMENT SYSTEM ----
const ACHIEVEMENTS_DEF = [
    { id: 'wpm_30',   name: 'Getting Warmed Up', icon: '', check: (w) => w >= 30 },
    { id: 'wpm_50',   name: 'Speedy Fingers',    icon: '', check: (w) => w >= 50 },
    { id: 'wpm_70',   name: 'Cyber Typist',      icon: '', check: (w) => w >= 70 },
    { id: 'wpm_100',  name: 'Speed Demon',        icon: '', check: (w) => w >= 100 },
    { id: 'acc_100',  name: 'Flawless',           icon: '', check: (w, a) => a === 100 },
    { id: 'acc_98',   name: 'Accuracy King',      icon: '', check: (w, a) => a >= 98 },
    { id: 'cons_90',  name: 'Steady Stream',      icon: '', check: (w, a, c) => c >= 90 },
    { id: 'wpm_80_acc_95', name: 'Elite Typist', icon: '', check: (w, a) => w >= 80 && a >= 95 },
];

function updateDailyStreakAndQuest() {
    const todayStr = new Date().toDateString();
    
    // Update Best Speed milestone in parameters drawer
    const bestSpeedEl = document.getElementById('best-speed-val');
    if (bestSpeedEl) bestSpeedEl.innerText = `${bestWpm} WPM`;
    
    // Generate Daily Quest
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const quests = [
        { wpm: 45, acc: 95, desc: "Achieve 45+ WPM with 95%+ accuracy" },
        { wpm: 50, acc: 90, desc: "Type 50+ WPM with 90%+ accuracy" },
        { wpm: 40, acc: 98, desc: "Calm speed: 40+ WPM at 98%+ accuracy" },
        { wpm: 55, acc: 92, desc: "Fast pacing: 55+ WPM at 92%+ accuracy" },
        { wpm: 60, acc: 90, desc: "Speed run: 60+ WPM at 90%+ accuracy" }
    ];
    const activeQuest = quests[dayOfYear % quests.length];
    
    const questDescEl = document.getElementById('daily-quest-desc');
    if (questDescEl) questDescEl.innerText = activeQuest.desc;
    
    const questCompletedDate = localStorage.getItem('typingDostDailyQuestCompletedDate');
    const questStatusEl = document.getElementById('daily-quest-status');
    if (questStatusEl) {
        if (questCompletedDate === todayStr) {
            questStatusEl.innerText = "🏆 Completed!";
            questStatusEl.style.color = "#2ecc71";
        } else {
            questStatusEl.innerText = "⏳ Active";
            questStatusEl.style.color = "#8b9bb4";
        }
    }
}

function checkDailyQuest(wpm, acc) {
    const todayStr = new Date().toDateString();
    const questCompletedDate = localStorage.getItem('typingDostDailyQuestCompletedDate');
    if (questCompletedDate === todayStr) return;
    
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const quests = [
        { wpm: 45, acc: 95 },
        { wpm: 50, acc: 90 },
        { wpm: 40, acc: 98 },
        { wpm: 55, acc: 92 },
        { wpm: 60, acc: 90 }
    ];
    const activeQuest = quests[dayOfYear % quests.length];
    
    if (wpm >= activeQuest.wpm && acc >= activeQuest.acc) {
        localStorage.setItem('typingDostDailyQuestCompletedDate', todayStr);
        localStorage.setItem('typingDostLastPracticeDate', todayStr);
        
        // Award 100 XP bonus for completing the quest
        userXP += 100;
        let levelsGained = 0;
        while (userXP >= userLevel * 100) {
            userXP -= userLevel * 100;
            userLevel++;
            levelsGained++;
        }
        localStorage.setItem('typing_dost_xp', userXP);
        localStorage.setItem('typing_dost_level', userLevel);
        
        updateGamificationHeader();
        updateDailyStreakAndQuest();
        showToast("🏆 Daily Quest Completed! +100 XP Reward! 🚀", 5000);
        
        if (levelsGained > 0) {
            showLevelUpModal(userLevel);
        }
    }
}

function checkAchievements(wpm, acc, cons) {
    checkDailyQuest(wpm, acc);
    const newlyUnlocked = [];
    ACHIEVEMENTS_DEF.forEach(ach => {
        if (!achievements.includes(ach.id) && ach.check(wpm, acc, cons)) {
            achievements.push(ach.id);
            newlyUnlocked.push(ach);
            showToast(`Badge Unlocked: ${ach.name}!`, 4000);
        }
    });
    localStorage.setItem('typingDostAchievements', JSON.stringify(achievements));
    renderBadges();
    return newlyUnlocked;
}

function renderBadges() {
    const shelf = document.getElementById('achievement-badges');
    if (!shelf) return;
    shelf.innerHTML = achievements.map(id => {
        const def = ACHIEVEMENTS_DEF.find(a => a.id === id);
        return def ? `<span class="badge" title="${def.name}">${def.icon} ${def.name}</span>` : '';
    }).join('');
}

// ---- KEYBOARD HEATMAP ----
function renderKeyboardHeatmap() {
    const section = document.getElementById('result-heatmap-section');
    const container = document.getElementById('result-keyboard-heatmap');
    if (!section || !container) return;
    
    const errorKeys = Object.keys(weakspots);
    if (errorKeys.length === 0) { section.classList.add('hidden'); return; }
    section.classList.remove('hidden');
    
    const maxErrors = Math.max(...Object.values(weakspots));
    const rows = [
        ['1','2','3','4','5','6','7','8','9','0'],
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L',';'],
        ['Z','X','C','V','B','N','M',',','.','/'],
        ['SPACE']
    ];
    
    container.innerHTML = rows.map(row => {
        const keys = row.map(k => {
            let errors = 0;
            const lk = k.toLowerCase();
            const uk = k.toUpperCase();
            if (k === 'SPACE') {
                errors = weakspots[' '] || 0;
            } else if (lk === uk) {
                errors = weakspots[lk] || 0;
            } else {
                errors = (weakspots[lk] || 0) + (weakspots[uk] || 0);
            }
            const ratio = maxErrors > 0 ? errors / maxErrors : 0;
            const heatLevel = ratio > 0.66 ? 'heat-3' : ratio > 0.33 ? 'heat-2' : ratio > 0 ? 'heat-1' : 'heat-0';
            const wClass = k === 'SPACE' ? 'heat-space' : (k.length > 1 ? 'heat-wide' : '');
            const title = errors > 0 ? `${k}: ${errors} errors` : `${k}: no errors`;
            return `<div class="heatmap-key ${heatLevel} ${wClass}" title="${title}">${k}</div>`;
        }).join('');
        return `<div class="heatmap-row">${keys}</div>`;
    }).join('');
}

// ---- SESSION HISTORY ----
function showHistory() {
    const historyModal = document.getElementById('history-modal');
    const historyList = document.getElementById('history-list');
    if (!historyModal || !historyList) return;
    
    historyList.innerHTML = '<div class="history-empty">⌛ Loading history...</div>';
    historyModal.classList.remove('hidden');

    const renderData = (dataList) => {
        if (!dataList || dataList.length === 0) {
            historyList.innerHTML = '<div class="history-empty">📭 No sessions yet. Complete a typing test to save results!</div>';
        } else {
            historyList.innerHTML = dataList.map((s) => `
                <div class="history-row">
                    <span class="h-wpm">${s.wpm} WPM</span>
                    <span class="h-acc">${s.accuracy}% Acc</span>
                    <span class="h-mode">${s.lesson} · ${s.mode}</span>
                    <span class="h-date">${s.date}</span>
                </div>
            `).join('');
        }
    };

    if (wpmDb) {
        wpmDb.getAllResults((results) => {
            if (results && results.length > 0) {
                renderData(results);
            } else {
                renderData(sessionHistory);
            }
        });
    } else {
        renderData(sessionHistory);
    }
}


// ---- WORD COUNT TIMER ----
function initTimerWords() {
    let elapsed = Math.max(1, Math.floor((Date.now() - wordModeStartTime) / 1000));
    timeEl.innerText = formatTime(elapsed);
    
    // In words mode, still track time for WPM calculation, but don't end by time
    let currentTotalChars = totalCharsTyped + charIndex;
    let currentTotalMistakes = totalMistakes + mistakes;
    let wpm = Math.round((((currentTotalChars - currentTotalMistakes) / 5) / elapsed) * 60);
    wpm = wpm < 0 || !isFinite(wpm) ? 0 : wpm;
    wpmEl.innerText = wpm;
    
    // Calculate Raw WPM
    let rawWpm = Math.round(((currentTotalChars / 5) / elapsed) * 60);
    rawWpm = rawWpm < 0 || !isFinite(rawWpm) ? 0 : rawWpm;
    
    let accuracy = currentTotalChars > 0 ? Math.round(((currentTotalChars - currentTotalMistakes) / currentTotalChars) * 100) : 100;
    accuracy = accuracy < 0 || !isFinite(accuracy) ? 100 : accuracy;
    
    updateLiveMascotByWpm(wpm, accuracy);

    wpmHistory.push(wpm);
    rawWpmHistory.push(rawWpm);
    
    // Calculate and push mistakes made in this specific second
    let errorsThisSecond = currentTotalMistakes - lastSecondMistakes;
    errorHistory.push(Math.max(0, errorsThisSecond));
    lastSecondMistakes = currentTotalMistakes;
    
    accuracyHistory.push(accuracy);
    timeLabels.push(elapsed);
}
let wordModeStartTime = Date.now();

// Event Listeners
typingInput.addEventListener('input', initTyping);

// Smart Independent Vowels for word starts in Phonetic QWERTY mode
const INDEPENDENT_VOWELS = {
    tamil: { KeyA: 'அ', KeyI: 'இ', KeyU: 'உ', KeyE: 'எ', KeyO: 'ஒ', KeyW: 'ஐ', KeyQ: 'ஔ' },
    hindi: { KeyA: 'अ', KeyI: 'इ', KeyU: 'उ', KeyE: 'ए', KeyO: 'ओ', KeyW: 'ऐ', KeyQ: 'औ' },
    marathi: { KeyA: 'अ', KeyI: 'इ', KeyU: 'उ', KeyE: 'ए', KeyO: 'ओ', KeyW: 'ऐ', KeyQ: 'औ' },
    telugu: { KeyA: 'అ', KeyI: 'ఇ', KeyU: 'ఉ', KeyE: 'ఎ', KeyO: 'ఒ', KeyW: 'ఐ', KeyQ: 'ఔ' },
    kannada: { KeyA: 'ಅ', KeyI: 'ಇ', KeyU: 'ಉ', KeyE: 'ಎ', KeyO: 'ಒ', KeyW: 'ಐ', KeyQ: 'ಔ' },
    malayalam: { KeyA: 'അ', KeyI: 'ഇ', KeyU: 'ഉ', KeyE: 'എ', KeyO: 'ഒ', KeyW: 'ഐ', KeyQ: 'ഔ' },
    gujarati: { KeyA: 'અ', KeyI: 'ઇ', KeyU: 'ઉ', KeyE: 'એ', KeyO: 'ઓ', KeyW: 'ઐ', KeyQ: 'ઔ' },
    bengali: { KeyA: 'অ', KeyI: 'ই', KeyU: 'উ', KeyE: 'এ', KeyO: 'ও', KeyW: 'ঐ', KeyQ: 'ঔ' },
    assamese: { KeyA: 'অ', KeyI: 'ই', KeyU: 'উ', KeyE: 'এ', KeyO: 'ও', KeyW: 'ঐ', KeyQ: 'ঔ' },
    odia: { KeyA: 'ଅ', KeyI: 'ଇ', KeyU: 'ଉ', KeyE: 'ଏ', KeyO: 'ଓ', KeyW: 'ଐ', KeyQ: 'ଔ' },
    punjabi: { KeyA: 'ਅ', KeyI: 'ਇ', KeyU: 'ਉ', KeyE: 'ਏ', KeyO: 'ਓ', KeyW: 'ਐ', KeyQ: 'ਔ' }
};

// Tamil 99 Vowel Combination Engine Dictionaries
const TAMIL_99_CONSONANTS_SET = new Set([
    'க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன',
    'ஜ', 'ஷ', 'ஸ', 'ஹ'
]);
const TAMIL_99_VOWEL_TO_SIGN_MAP = {
    'அ': '',     // Inherent vowel
    'ஆ': 'ா',
    'இ': 'ி',
    'ஈ': 'ீ',
    'உ': 'ு',
    'ஊ': 'ூ',
    'எ': 'ெ',
    'ஏ': 'ே',
    'ஐ': 'ை',
    'ஒ': 'ொ',
    'ஓ': 'ோ',
    'ஔ': 'ௌ'
};

// With all languages romanized into English alphabet letters, direct standard typing is active for all languages
const INDIC_VIRTUAL_KEYBOARD_LANGS = new Set([]);

// State for pre-base matras (e.g. 'ि' / KeyF in Remington Gail & Kruti Dev 010)
let pendingPreBaseMatra = null;

// Half consonant to full consonant mapping when followed by 'ा' (k / KeyK) in Remington / Kruti Dev
const REMINGTON_HALF_TO_FULL = {
    'ख्': 'ख', 'थ्': 'थ', 'भ्': 'भ', 'ध्': 'ध', 'श्': 'श',
    'झ्': 'झ', 'घ्': 'घ', 'क्ष्': 'क्ष', 'छ्': 'छ'
};

function composeRemingtonKeystroke(currentVal, charToInsert, activeLayout) {
    if (activeLayout !== 'remington-gail' && activeLayout !== 'kruti-dev') return null;
    const _chars = [...currentVal];
    const lastChar = _chars.length > 0 ? _chars[_chars.length - 1] : '';
    const last2Chars = _chars.length > 1 ? _chars.slice(-2).join('') : lastChar;

    // 1. Half consonant + 'ा' (KeyK) -> Full consonant
    if (charToInsert === 'ा') {
        if (REMINGTON_HALF_TO_FULL[last2Chars]) {
            return { replaceCount: 2, result: REMINGTON_HALF_TO_FULL[last2Chars] };
        }
        if (REMINGTON_HALF_TO_FULL[lastChar]) {
            return { replaceCount: 1, result: REMINGTON_HALF_TO_FULL[lastChar] };
        }
        if (lastChar === 'अ') {
            return { replaceCount: 1, result: 'आ' };
        }
    }

    // 2. Vowel & Matra extensions:
    // 'ए' + 'े' -> 'ऐ'
    if (charToInsert === 'े' && lastChar === 'ए') {
        return { replaceCount: 1, result: 'ऐ' };
    }
    // 'आ' + 'े' -> 'ओ'
    if (charToInsert === 'े' && lastChar === 'आ') {
        return { replaceCount: 1, result: 'ओ' };
    }
    // 'आ' + 'ै' -> 'औ'
    if (charToInsert === 'ै' && lastChar === 'आ') {
        return { replaceCount: 1, result: 'औ' };
    }
    // 'अ' + 'ो' -> 'ओ'
    if (charToInsert === 'ो' && lastChar === 'अ') {
        return { replaceCount: 1, result: 'ओ' };
    }
    // 'अ' + 'ौ' -> 'औ'
    if (charToInsert === 'ौ' && lastChar === 'अ') {
        return { replaceCount: 1, result: 'औ' };
    }
    // 'ा' + 'े' -> 'ो'
    if (charToInsert === 'े' && lastChar === 'ा') {
        return { replaceCount: 1, result: 'ो' };
    }
    // 'ा' + 'ै' -> 'ौ'
    if (charToInsert === 'ै' && lastChar === 'ा') {
        return { replaceCount: 1, result: 'ौ' };
    }

    // 3. Post-base Reph 'र्' (Shift+Z / Z):
    // Reorders after consonant or consonant+matra (e.g. 'म' + 'र्' -> 'र्म', 'मि' + 'र्' -> 'र्' + 'म' + 'ि')
    if (charToInsert === 'र्') {
        if (_chars.length >= 2 && _chars[_chars.length - 1] === 'ि') {
            const cons = _chars[_chars.length - 2];
            return { replaceCount: 2, result: 'र्' + cons + 'ि' };
        }
        if (lastChar && ![' ', '\n', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', '्', 'ं', 'ः'].includes(lastChar)) {
            return { replaceCount: 1, result: 'र्' + lastChar };
        }
    }

    return null;
}

// Aspirate mapping for phonetic typing (C + h -> Ch) across Indic languages
const PHONETIC_ASPIRATE_MAP = {
    // Hindi & Marathi
    'क': 'ख', 'ग': 'घ', 'च': 'छ', 'ज': 'झ', 'त': 'थ', 'द': 'ध', 'प': 'फ', 'ब': 'भ', 'स': 'श', 'ट': 'ठ', 'ड': 'ढ',
    // Bengali & Assamese
    'ক': 'খ', 'গ': 'ঘ', 'চ': 'ছ', 'জ': 'ঝ', 'ত': 'থ', 'দ': 'ধ', 'প': 'ফ', 'ব': 'ভ', 'স': 'শ', 'ট': 'ঠ', 'ড': 'ঢ',
    // Telugu
    'క': 'ఖ', 'గ': 'ఘ', 'చ': 'ఛ', 'జ': 'ఝ', 'త': 'థ', 'ద': 'ధ', 'ప': 'ఫ', 'బ': 'భ', 'స': 'శ', 'ట': 'ఠ', 'డ': 'ఢ',
    // Gujarati
    'ક': 'ખ', 'ગ': 'ઘ', 'ચ': 'છ', 'જ': 'ઝ', 'ત': 'થ', 'દ': 'ધ', 'પ': 'ફ', 'બ': 'ભ', 'સ': 'શ', 'ટ': 'ઠ', 'ડ': 'ઢ',
    // Kannada
    'ಕ': 'ಖ', 'ಗ': 'ಘ', 'ಚ': 'ಛ', 'ಜ': 'ಝ', 'ತ': 'ಥ', 'ದ': 'ಧ', 'ಪ': 'ಫ', 'ಬ': 'ಭ', 'ಸ': 'ಶ', 'ಟ': 'ಠ', 'ಡ': 'ಢ',
    // Malayalam
    'ക': 'ഖ', 'ഗ': 'ഘ', 'ച': 'ഛ', 'ജ': 'ഝ', 'ത': 'ഥ', 'ദ': 'ധ', 'പ': 'ഫ', 'ബ': 'ഭ', 'സ': 'ശ', 'ട': 'ഠ', 'ഡ': 'ഢ',
    // Odia
    'କ': 'ଖ', 'ଗ': 'ଘ', 'ଚ': 'ଛ', 'ଜ': 'ଝ', 'ତ': 'ଥ', 'ଦ': 'ଧ', 'ପ': 'ଫ', 'ବ': 'ଭ', 'ସ': 'ଶ', 'ଟ': 'ଠ', 'ଡ': 'ଢ',
    // Punjabi
    'ਕ': 'ਖ', 'ਗ': 'ਘ', 'ਚ': 'ਛ', 'ਜ': 'ਝ', 'ਤ': 'ਥ', 'ਦ': 'ਧ', 'ਪ': 'ਫ', 'ਬ': 'ਭ', 'ਸ': 'ਸ਼', 'ਟ': 'ਠ', 'ਡ': 'ਢ'
};

function composePhoneticKeystroke(currentVal, charToInsert, activeLayout) {
    if (activeLayout !== 'phonetic') return null;
    const _chars = [...currentVal];
    const lastChar = _chars.length > 0 ? _chars[_chars.length - 1] : '';

    // 1. Aspirated Consonants (C + 'ह'/'h' -> Ch)
    if (['ह', 'হ', 'హ', 'હ', 'ಹ', 'ഹ', 'ହ', 'ਹ'].includes(charToInsert)) {
        if (PHONETIC_ASPIRATE_MAP[lastChar]) {
            return { replaceCount: 1, result: PHONETIC_ASPIRATE_MAP[lastChar] };
        }
    }

    // 2. Vowel Diphthongs & Long Vowels:
    if (charToInsert === 'ा' || charToInsert === 'া' || charToInsert === 'ಾ' || charToInsert === 'ா' || charToInsert === 'ા') {
        if (lastChar === 'अ') return { replaceCount: 1, result: 'आ' };
        if (lastChar === 'অ') return { replaceCount: 1, result: 'আ' };
        if (lastChar === 'અ') return { replaceCount: 1, result: 'આ' };
        if (lastChar === 'അ') return { replaceCount: 1, result: 'ആ' };
    }
    if (charToInsert === 'ि' || charToInsert === 'ি' || charToInsert === 'િ' || charToInsert === 'ി') {
        if (lastChar === 'इ') return { replaceCount: 1, result: 'ई' };
        if (lastChar === 'ই') return { replaceCount: 1, result: 'ঈ' };
        if (lastChar === 'ઇ') return { replaceCount: 1, result: 'ઈ' };
        if (lastChar === 'ि') return { replaceCount: 1, result: 'ी' };
        if (lastChar === 'ি') return { replaceCount: 1, result: 'ী' };
        if (lastChar === 'ा') return { replaceCount: 1, result: 'ै' };
        if (lastChar === 'अ') return { replaceCount: 1, result: 'ऐ' };
    }
    if (charToInsert === 'ु' || charToInsert === 'ু' || charToInsert === 'ુ' || charToInsert === 'ു') {
        if (lastChar === 'उ') return { replaceCount: 1, result: 'ऊ' };
        if (lastChar === 'উ') return { replaceCount: 1, result: 'ঊ' };
        if (lastChar === 'ઉ') return { replaceCount: 1, result: 'ઊ' };
        if (lastChar === 'ु') return { replaceCount: 1, result: 'ू' };
        if (lastChar === 'ু') return { replaceCount: 1, result: 'ূ' };
        if (lastChar === 'ा') return { replaceCount: 1, result: 'ौ' };
        if (lastChar === 'अ') return { replaceCount: 1, result: 'औ' };
    }

    return null;
}

// Hardware Keydown Interceptor for all Indic typing modes (Full Shift-Aware)
typingInput.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.altKey || e.metaKey || e.key === 'Tab' || e.key === 'Enter') return;

    if (e.key === 'Backspace') {
        if (pendingPreBaseMatra) {
            pendingPreBaseMatra = null;
            e.preventDefault();
            return;
        }
        return;
    }

    const activeLang = (typeof currentLearningLang !== 'undefined' && currentLearningLang)
        ? currentLearningLang.toLowerCase()
        : (localStorage.getItem('typingDostLang') || 'english').toLowerCase();

    // Only intercept for Indic languages with custom keyboard layouts; allow standard input for English, Hinglish, Spanish, French, etc.
    if (!INDIC_VIRTUAL_KEYBOARD_LANGS.has(activeLang)) return;

    const defaultLayout = (activeLang === 'urdu' ? 'urdu-phonetic' : 'phonetic');
    const activeLayout = localStorage.getItem('typingDostLayout_' + activeLang) || defaultLayout;

    if (activeLayout === 'direct') return; // Native OS keyboard / IME bypass

    if (typeof getLanguageKeymap === 'function') {
        const layoutMap = getLanguageKeymap(activeLang, activeLayout, e.shiftKey);
        if (layoutMap && layoutMap[e.code]) {
            e.preventDefault();
            let charToInsert = layoutMap[e.code];
            const isRemingtonOrKruti = (activeLayout === 'remington-gail' || activeLayout === 'kruti-dev');

            // 1. Remington Gail & Kruti Dev 010 Pre-Base Matra 'ि' (KeyF):
            if (isRemingtonOrKruti && charToInsert === 'ि' && e.code === 'KeyF' && !e.shiftKey) {
                pendingPreBaseMatra = 'ि';
                return;
            }

            if (pendingPreBaseMatra) {
                charToInsert = charToInsert + pendingPreBaseMatra;
                pendingPreBaseMatra = null;
            }

            // 2. Tamil 99 Smart Vowel Combination Engine:
            if (activeLang === 'tamil' && (activeLayout === 'tamil-99' || activeLayout === 'tamil99')) {
                const curVal = typingInput.value;
                const start = typingInput.selectionStart;
                const prevChar = start > 0 ? curVal.charAt(start - 1) : '';
                if (TAMIL_99_CONSONANTS_SET.has(prevChar) && TAMIL_99_VOWEL_TO_SIGN_MAP.hasOwnProperty(charToInsert)) {
                    charToInsert = TAMIL_99_VOWEL_TO_SIGN_MAP[charToInsert];
                }
            }

            // 3. Smart vowel context detection in Phonetic mode:
            if (activeLayout === 'phonetic' && !e.shiftKey && INDEPENDENT_VOWELS[activeLang] && INDEPENDENT_VOWELS[activeLang][e.code]) {
                const curVal = typingInput.value;
                const start = typingInput.selectionStart;
                const prevChar = start > 0 ? curVal.charAt(start - 1) : ' ';
                if (start === 0 || prevChar === ' ' || prevChar === '\n') {
                    charToInsert = INDEPENDENT_VOWELS[activeLang][e.code];
                }
            }

            // 4. Smart Keystroke Composition (Remington / Kruti Dev & Phonetic):
            const curVal = typingInput.value;
            const start = typingInput.selectionStart;
            const end = typingInput.selectionEnd;
            const composition = composeRemingtonKeystroke(curVal.substring(0, start), charToInsert, activeLayout)
                || composePhoneticKeystroke(curVal.substring(0, start), charToInsert, activeLayout);

            if (composition) {
                const before = [...curVal.substring(0, start)];
                before.splice(before.length - composition.replaceCount, composition.replaceCount);
                const newBefore = before.join('') + composition.result;
                typingInput.value = newBefore + curVal.substring(end);
                typingInput.selectionStart = typingInput.selectionEnd = newBefore.length;
            } else if (charToInsert !== '') {
                typingInput.value = curVal.substring(0, start) + charToInsert + curVal.substring(end);
                typingInput.selectionStart = typingInput.selectionEnd = start + charToInsert.length;
            }
            initTyping(e);
        }
    }
});

// Shift key listeners for dynamic On-Screen Keyboard Guide live flip
window.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
        const activeLang = localStorage.getItem('typingDostLang') || 'english';
        const activeLayout = localStorage.getItem('typingDostLayout_' + activeLang) || 'phonetic';
        if (typeof updateOnScreenKeyboardLayout === 'function') {
            updateOnScreenKeyboardLayout(activeLayout, activeLang, true);
        }
        document.querySelectorAll('#live-keyboard-guide .key.shift, .keyboard .key.shift').forEach(el => el.classList.add('active'));
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
        const activeLang = localStorage.getItem('typingDostLang') || 'english';
        const activeLayout = localStorage.getItem('typingDostLayout_' + activeLang) || 'phonetic';
        if (typeof updateOnScreenKeyboardLayout === 'function') {
            updateOnScreenKeyboardLayout(activeLayout, activeLang, false);
        }
        document.querySelectorAll('#live-keyboard-guide .key.shift, .keyboard .key.shift').forEach(el => el.classList.remove('active'));
    }
});

typingInput.addEventListener('compositionstart', () => {
    isComposing = true;
});
typingInput.addEventListener('compositionend', (e) => {
    isComposing = false;
    initTyping(e);
});


const focusOverlay = document.getElementById('focus-overlay');

typingInput.addEventListener('focus', () => {
    if (currentLesson !== 'game' && currentLesson !== 'bubble-shooter') {
        if (focusOverlay) focusOverlay.classList.add('hidden');
        textDisplay.classList.remove('blurred');
        
        // Hide mascot panel and controls only if we are resuming an active typing session
        if (isTyping) {
            document.body.classList.add('focused-typing');
            const textboxHeader = document.getElementById('textbox-header');
            if (textboxHeader) textboxHeader.classList.add('hidden');
            activeSpansCoords = []; // Clear coordinate cache since focused-typing was added
        }
    }
});

typingInput.addEventListener('blur', () => {
    // Only show overlay if we are in normal typing lessons, and ONLY if the test is actively in progress
    if (currentLesson !== 'game' && currentLesson !== 'bubble-shooter') {
        const textboxHeader = document.getElementById('textbox-header');
        const mascotPanel = document.getElementById('live-mascot-panel');
        if (!isTyping) {
            document.body.classList.remove('focused-typing');
            if (textboxHeader) textboxHeader.classList.remove('hidden');
            if (mascotPanel) mascotPanel.classList.remove('hidden');
            activeSpansCoords = []; // Clear coordinate cache
            return;
        }
        
        // Also don't blur if any modal is open
        const activeModals = document.querySelectorAll('.modal:not(.hidden)');
        if (activeModals.length === 0) {
            if (focusOverlay) focusOverlay.classList.remove('hidden');
            textDisplay.classList.add('blurred');
            
            // Remove background blur immediately when user stops typing / loses focus
            document.body.classList.remove('focused-typing');
            if (textboxHeader) textboxHeader.classList.remove('hidden');
            if (mascotPanel) mascotPanel.classList.add('hidden');
            clearTimeout(window.inactivityTimeout);
            activeSpansCoords = []; // Clear coordinate cache since focused-typing was removed
        }
    }
});

// Initialize focus overlay state on startup - hidden and clear until typing starts
if (focusOverlay) {
    focusOverlay.classList.add('hidden');
}
textDisplay.classList.remove('blurred');

// Caps Lock Warning
document.addEventListener('keydown', function(event) {
    if (event.target && (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') && event.target !== typingInput) {
        return;
    }
    initAudio();
    
    // Shift + Enter restarts the typing test instantly
    if (event.key === 'Enter' && event.shiftKey && currentLesson !== 'game' && currentLesson !== 'bubble-shooter') {
        const activeModals = document.querySelectorAll('.modal:not(.hidden)');
        if (activeModals.length === 0) {
            event.preventDefault();
            resetGame();
            focusInput();
        }
    }
    
    // ESC exits Zen Mode
    if (event.key === 'Escape' && isZenMode) {
        document.body.classList.remove('zen-mode');
        isZenMode = false;
        activeSpansCoords = [];
        updateCaretPosition();
    }
    
    if (event.getModifierState && event.getModifierState('CapsLock')) {
        if (capsLockWarning.classList.contains('hidden')) {
            playWarning();
        }
        capsLockWarning.classList.remove('hidden');
    } else {
        capsLockWarning.classList.add('hidden');
    }
});
document.addEventListener('keyup', function(event) {
    if (event.getModifierState && event.getModifierState('CapsLock')) {
        capsLockWarning.classList.remove('hidden');
    } else {
        capsLockWarning.classList.add('hidden');
    }
});

resetBtn.addEventListener('click', resetGame);
newTextBtn.addEventListener('click', resetGame);
modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.querySelector('.modal-content h2').innerText = "Time's Up!";
    const accWrap = finalAccuracyEl ? finalAccuracyEl.parentElement : null;
    if (accWrap) accWrap.style.display = 'block';
    if (currentLesson === 'game') {
        startGame();
    } else {
        resetGame();
    }
});

function openCertificatePage() {
    const currentTheme = localStorage.getItem('typingDostTheme') || 'matrix';
    window.open(`certificate.html?wpm=${lastWpm}&accuracy=${lastAccuracy}&mode=${encodeURIComponent(lastTestMode)}&rawWpm=${lastRawWpm}&keyAcc=${lastKeyAccuracy}&corrected=${lastCorrectedMistakes}&uncorrected=${lastUncorrectedMistakes}&backspaces=${lastBackspaceCount}&theme=${encodeURIComponent(currentTheme)}`, '_blank');
}
const modalCertBtn = document.getElementById('modal-certificate-btn');
const mascotCertBtn = document.getElementById('mascot-certificate-btn');
if (modalCertBtn) {
    modalCertBtn.addEventListener('click', openCertificatePage);
}
if (mascotCertBtn) {
    mascotCertBtn.addEventListener('click', openCertificatePage);
}

// Zen Mode Button
const zenBtn = document.getElementById('zen-mode-btn');
if (zenBtn) {
    zenBtn.addEventListener('click', () => {
        isZenMode = !isZenMode;
        document.body.classList.toggle('zen-mode', isZenMode);
        activeSpansCoords = [];
        updateCaretPosition();
        focusInput();
    });
}

// History Button
const historyBtn = document.getElementById('history-btn');
if (historyBtn) {
    historyBtn.addEventListener('click', showHistory);
}
const historyCloseBtn = document.getElementById('history-close-btn');
if (historyCloseBtn) {
    historyCloseBtn.addEventListener('click', () => {
        document.getElementById('history-modal').classList.add('hidden');
    });
}

// Blind Mode Toggle
const modBlind = document.getElementById('mod-blind');
if (modBlind) modBlind.addEventListener('change', () => {
    isBlindMode = modBlind.checked;
    resetGame(); focusInput();
});

// Stop on Error Toggle
const modStopOnError = document.getElementById('mod-stop-on-error');
if (modStopOnError) modStopOnError.addEventListener('change', () => {
    isStopOnError = modStopOnError.checked;
    resetGame(); focusInput();
});

// Word Count Buttons
document.querySelectorAll('.time-btn[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const mode = btn.getAttribute('data-mode');
        if (mode === 'words') {
            testMode = 'words';
            wordLimit = parseInt(btn.getAttribute('data-words') || '50');
            wordModeStartTime = Date.now();
            timeEl.innerText = `${wordLimit}w`;
        } else {
            testMode = 'time';
            maxTime = parseInt(btn.getAttribute('data-time') || '60');
            timeLeft = maxTime;
            timeEl.innerText = formatTime(timeLeft);
        }
        if (customTimeContainer) customTimeContainer.classList.add('hidden');
        resetGame();
        focusInput();
    });
});

// Custom Text Modal
const customTextMenuBtn = document.getElementById('custom-text-menu-btn');
const customTextModal = document.getElementById('custom-text-modal');
const customTextApplyBtn = document.getElementById('custom-text-apply-btn');
const customTextCancelBtn = document.getElementById('custom-text-cancel-btn');
const customTextInputEl = document.getElementById('custom-text-input');

if (customTextMenuBtn) {
    customTextMenuBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        if (customTextModal) customTextModal.classList.remove('hidden');
        dropdowns.forEach(d => {
            if (d.menu) d.menu.classList.add('hidden');
            if (d.trigger) d.trigger.classList.remove('open');
        });
    });
}
if (customTextApplyBtn) {
    customTextApplyBtn.addEventListener('click', () => {
        const val = customTextInputEl ? customTextInputEl.value.trim() : '';
        if (val.length < 20) {
            showToast('⚠️ Please enter at least 20 characters!');
            return;
        }
        customUserText = val;
        lessons.customtext = [val];
        currentLesson = 'customtext';
        
        // Update nav active state — highlight standalone Custom Text tab
        practiceItems.forEach(i => i.classList.remove('selected'));
        dropdowns.forEach(d => {
            if (d.trigger) d.trigger.classList.remove('active-sub');
        });
        // Remove active from all lesson-btn
        document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active-sub', 'active'));
        // Activate standalone Custom Text button
        const customTabBtn = document.getElementById('custom-text-menu-btn');
        if (customTabBtn) customTabBtn.classList.add('active-sub');
        
        customTextModal.classList.add('hidden');
        resetGame();
        focusInput();
    });
}
if (customTextCancelBtn) {
    customTextCancelBtn.addEventListener('click', () => {
        if (customTextModal) customTextModal.classList.add('hidden');
    });
}

// Native File Loader (supports PDF and TXT via Drag-and-Drop or Upload Button)
function handleCustomFileInput(file) {
    if (!file) return;
    const fileNameEl = document.getElementById('pdf-file-name');
    if (fileNameEl) fileNameEl.innerText = file.name;

    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (customTextInputEl) customTextInputEl.value = event.target.result;
            showToast(`📂 File loaded: ${file.name}!`);
        };
        reader.readAsText(file);
    } else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        parsePDFAndSetInput(file);
    } else {
        showToast('⚠️ Please upload a plain .txt or .pdf file!');
    }
}

async function parsePDFAndSetInput(file) {
    const spinner = document.getElementById('pdf-loading-spinner');
    if (spinner) spinner.classList.remove('hidden');
    
    try {
        if (typeof pdfjsLib === 'undefined') {
            showToast('⚠️ PDF library loading. Please wait a moment.');
            if (spinner) spinner.classList.add('hidden');
            return;
        }
        
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let extractedText = '';
        
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            extractedText += pageText + '\n';
        }
        
        const cleanedText = extractedText.trim();
        if (cleanedText.length < 20) {
            showToast('⚠️ Extracted text is too short or empty!');
        } else {
            if (customTextInputEl) customTextInputEl.value = cleanedText;
            showToast(`📂 PDF loaded: ${pdf.numPages} pages parsed!`);
        }
    } catch (error) {
        console.error('Error parsing PDF:', error);
        showToast('❌ Failed to parse PDF. Ensure it is not password protected.');
    } finally {
        if (spinner) spinner.classList.add('hidden');
    }
}

const targetDropEl = customTextModal || customTextInputEl;
if (targetDropEl && customTextInputEl) {
    targetDropEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        customTextInputEl.style.borderColor = 'var(--primary)';
        customTextInputEl.style.boxShadow = '0 0 12px var(--primary-glow)';
    });
    targetDropEl.addEventListener('dragleave', () => {
        customTextInputEl.style.borderColor = '';
        customTextInputEl.style.boxShadow = '';
    });
    targetDropEl.addEventListener('drop', (e) => {
        e.preventDefault();
        customTextInputEl.style.borderColor = '';
        customTextInputEl.style.boxShadow = '';
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleCustomFileInput(files[0]);
        }
    });
}

const pdfFileInput = document.getElementById('pdf-file-input');
if (pdfFileInput) {
    pdfFileInput.addEventListener('change', (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleCustomFileInput(files[0]);
        }
    });
}

const customTextClearBtn = document.getElementById('custom-text-clear-btn');
if (customTextClearBtn) {
    customTextClearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (customTextInputEl) customTextInputEl.value = '';
        if (pdfFileInput) pdfFileInput.value = '';
        const fileNameEl = document.getElementById('pdf-file-name');
        if (fileNameEl) fileNameEl.innerText = 'No file selected';
        showToast('🧹 Custom text cleared!');
    });
}

// Typing Content Generator Database
const generatorDatabase = {
    cyberpunk: [
        "Through the rain-slicked streets of Neo-Tokyo, shadows danced against glowing neon signs.",
        "A rogue artificial intelligence breached the central mainframe, rewriting core cybernetic protocols.",
        "Her cybernetic eye glitched, projecting green diagnostic codes across the dark alleyway.",
        "Hackers bypassed the biometric firewall, downloading encrypted gigabytes of black-market neural data.",
        "Underground grid-runners spliced high-voltage fiber cables, tapping into the city's power grid.",
        "Drones hummed overhead, scanning the crowded synthwave market for unregistered neural links.",
        "The black-market deck-runner loaded a custom script, erasing all digital footprints from the network.",
        "Synthetic androids dreamed of digital oceans, floating beneath artificial neon skylines."
    ],
    tech: [
        "Machine learning models analyze vast datasets to predict consumer trends and optimize resource distribution.",
        "Cloud computing instances deploy containerized microservices dynamically to handle high-traffic spikes.",
        "Quantum superposition states allow computers to evaluate multiple complex algorithms concurrently.",
        "Decentralized ledger consensus protocols ensure high-security transactions across autonomous nodes.",
        "Developers debugged asynchronous JavaScript promises, resolving critical racing conditions inside the engine.",
        "API gateways authenticate incoming HTTP requests, routing them smoothly to microservice clusters.",
        "Zero-trust security frameworks verify every connection request, protecting internal corporate infrastructure."
    ],
    quotes: [
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "In the end, it's not the years in your life that count. It's the life in your years.",
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "Change your thoughts and you change your world, unlocking endless potential."
    ],
    space: [
        "A distant star went supernova, releasing bright cosmic rays across the cold dark void of space.",
        "Asteroid mining rigs extracted rich platinum ores from planetary rings in deep orbit.",
        "The spacecraft adjusted its ion engines, performing a precise gravity assist maneuver around Jupiter.",
        "Astronauts aboard the orbital station observed Earth rising over the dusty lunar horizon.",
        "Radio telescopes detected repeating high-frequency signals coming from a distant spiral galaxy.",
        "Space exploration drives scientific breakthroughs, pushing the boundaries of human knowledge.",
        "The colonization of Mars requires high-yield closed-loop greenhouse systems to sustain early settlements."
    ],
    code: [
        "const processData = async (data) => { return data.filter(item => item.active).map(x => x.id); };",
        "for (let i = 0; i < items.length; i++) { if (items[i] === target) return `Found at index: ${i}`; }",
        "class SmartPointer { constructor(address) { this.address = address; this.refCount = 1; } }",
        "def quick_sort(arr): if len(arr) <= 1: return arr else: return quick_sort([x for x in arr[1:] if x < arr[0]])",
        "struct UserProfile { username: String, email: String, keypress_count: u32, active: bool }",
        "SELECT users.id, COUNT(scores.id) FROM users INNER JOIN scores ON users.id = scores.user_id GROUP BY users.id;"
    ],
    nature: [
        "Deep inside the ancient forest, towering redwood trees stood majestically under the misty canopy.",
        "A crystalline mountain stream rushed through smooth granite stones, carving a path to the valley below.",
        "Migrating swallows flew in synchronized patterns, navigating across vast continents using magnetic fields.",
        "Under the moonlit sky, waves crashed gently against the golden sands of the remote island cove.",
        "A sudden spring rain brought vibrant wildflowers to life, transforming the dry plains into colorful carpets.",
        "Bees buzzed from bloom to bloom, collecting sweet nectar and pollinating the orchard's blossoms.",
        "The volcanic geyser erupted unexpectedly, launching a column of boiling mineral water into the blue sky."
    ],
    hindisong: [
        "Tujh mein rab dikhta hai yaara mein kya karu, sajde sar jhukta hai yaara mein kya karu.",
        "Kabhi kabhi aditi zindagi mein yunhi koi apna lagta hai, kabhi kabhi aditi woh bichad jaye to ek sapna lagta hai.",
        "Tum hi ho ab tum hi ho, zindagi ab tum hi ho, chain bhi mera dard bhi, meri aashiqui ab tum hi ho.",
        "Jeena jeena kaise jeena na seekha maine jeena mere humdum, na seekha jeena tere bina humdum.",
        "Channa mereya mereya beliya oya, dil ke mohalle mein aaja, channa mereya mereya.",
        "Apna bana le piya, apna bana le mujhe, dil ke nagar mein basale mujhe, apna bana le piya.",
        "Kal ho naa ho, har ghadi badal rahi hai roop zindagi, chaanv hai kabhi kabhi hai dhoop zindagi.",
        "Kabira maan ja re, aaja tujhko pukarein teri parchhaiyan, re kabira re kabira.",
        "Kesariya tera ishq hai piya, rang jaun jo main haath lagaun, din beete saare teri fikr mein.",
        "Dil diyan gallan karange naal naal beh ke, akh naale akh nu mila ke."
    ]
};

// Custom Content Tabs Switcher
const tabBtnPaste = document.getElementById('tab-btn-paste');
const tabBtnGen = document.getElementById('tab-btn-gen');
const panePaste = document.getElementById('pane-paste');
const paneGen = document.getElementById('pane-gen');

if (tabBtnPaste && tabBtnGen) {
    tabBtnPaste.addEventListener('click', () => {
        tabBtnPaste.classList.add('active');
        tabBtnGen.classList.remove('active');
        if (panePaste) panePaste.style.display = 'block';
        if (paneGen) paneGen.style.display = 'none';
    });
    
    tabBtnGen.addEventListener('click', () => {
        tabBtnGen.classList.add('active');
        tabBtnPaste.classList.remove('active');
        if (paneGen) paneGen.style.display = 'block';
        if (panePaste) panePaste.style.display = 'none';
    });
}

// Generate Action Handler
const genGenerateBtn = document.getElementById('gen-generate-btn');
const genPreviewBox = document.getElementById('gen-preview-box');

if (genGenerateBtn) {
    genGenerateBtn.addEventListener('click', () => {
        const topic = document.getElementById('gen-topic').value;
        const length = document.getElementById('gen-length').value;
        const isComplex = document.getElementById('gen-complex').checked;
        
        let targetWordCount = 50;
        if (length === 'short') targetWordCount = 25;
        if (length === 'long') targetWordCount = 80;
        
        // Compile raw text from templates
        const sentences = generatorDatabase[topic] || generatorDatabase.cyberpunk;
        let compiledWords = [];
        
        // Shuffle/duplicate sentences if needed to fill target length
        const shuffledSentences = [...sentences].sort(() => Math.random() - 0.5);
        let sentenceIndex = 0;
        
        while (compiledWords.length < targetWordCount) {
            const currentSentence = shuffledSentences[sentenceIndex % shuffledSentences.length];
            compiledWords = compiledWords.concat(currentSentence.split(' '));
            sentenceIndex++;
        }
        
        // Slice to target word count
        compiledWords = compiledWords.slice(0, targetWordCount);
        
        // Add random numbers and symbols if complex is checked
        if (isComplex) {
            const symbols = ['#', '$', '@', '%', '&', '*', '-', '+', '!', '=', '?'];
            compiledWords = compiledWords.map((word, idx) => {
                // Apply complex alterations to ~15% of the words
                if (Math.random() < 0.15) {
                    if (Math.random() < 0.5) {
                        // Append or prepend a symbol
                        const sym = symbols[Math.floor(Math.random() * symbols.length)];
                        return Math.random() < 0.5 ? `${sym}${word}` : `${word}${sym}`;
                    } else {
                        // Inject random numeric digits
                        const num = Math.floor(Math.random() * 90) + 10;
                        return `${word}${num}`;
                    }
                }
                return word;
            });
        }
        
        const finalGeneratedText = compiledWords.join(' ');
        
        // Populate textarea immediately so it is ready for "Use This Text" even if animation is still running
        if (customTextInputEl) {
            customTextInputEl.value = finalGeneratedText;
        }
        
        // Cyberpunk Typewriter Preview Animation
        if (genPreviewBox) {
            genGenerateBtn.disabled = true;
            genGenerateBtn.innerText = "⚡ COMPILING KEYSTROKES...";
            genPreviewBox.innerText = "";
            
            let charIdx = 0;
            const textToAnimate = finalGeneratedText;
            
            // To animate efficiently without lockups, we render in chunk sizes of 3 characters every 6ms
            function typeNextChars() {
                if (charIdx < textToAnimate.length) {
                    genPreviewBox.innerText = textToAnimate.substring(0, charIdx + 3) + "▋";
                    charIdx += 3;
                    setTimeout(typeNextChars, 6);
                } else {
                    genPreviewBox.innerText = textToAnimate;
                    genGenerateBtn.disabled = false;
                    genGenerateBtn.innerText = "⚡ Generate Keystrokes";
                    
                    // Autofill textarea in paste pane so standard Use This Text applies it directly
                    if (customTextInputEl) {
                        customTextInputEl.value = textToAnimate;
                    }
                }
            }
            typeNextChars();
        }
    });
}

// Init: render existing badges on page load
renderBadges();



let guideTimeouts = [];

closeKeyboardBtn.addEventListener('click', () => {
    guideTimeouts.forEach(t => clearTimeout(t));
    guideTimeouts = [];
    keyboardModal.classList.add('hidden');
    resetGame();
    focusInput();
});

function showKeyboardGuide(lesson) {
    guideTimeouts.forEach(t => clearTimeout(t));
    guideTimeouts = [];

    const colorClasses = ['c-red', 'c-orange', 'c-yellow', 'c-green', 'c-cyan', 'c-blue', 'c-purple', 'c-pink'];
    allKeys.forEach(k => {
        k.classList.remove('highlight', ...colorClasses);
    });
    document.querySelectorAll('.finger').forEach(f => {
        f.classList.remove('active', ...colorClasses);
    });
    
    // Animate Hands Container
    const handsContainer = document.querySelector('.hands-container');
    handsContainer.classList.remove('animate');
    void handsContainer.offsetWidth; // trigger reflow
    handsContainer.classList.add('animate');
    
    let highlightKeys = [];
    
    if (lesson === 'homerow') {
        keyboardTitle.innerText = "Home Row Guide";
        fingerExplanation.innerHTML = "Rest your fingers on the Home Row. Watch the colors map to your fingers!";
        highlightKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
    } else if (lesson === 'toprow') {
        keyboardTitle.innerText = "Top Row Guide";
        fingerExplanation.innerHTML = "Reach up to the Top Row. Watch how your base fingers stretch up!";
        highlightKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    } else if (lesson === 'bottomrow') {
        keyboardTitle.innerText = "Bottom Row Guide";
        fingerExplanation.innerHTML = "Reach down to the Bottom Row. Watch how your fingers curl down!";
        highlightKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
    } else if (lesson === 'numbers') {
        keyboardTitle.innerText = "Numbers Row Guide";
        fingerExplanation.innerHTML = "Reach all the way up to the Number Row. Watch the stretch!";
        highlightKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    } else if (lesson === 'homerow_toprow') {
        keyboardTitle.innerText = "Home + Top Row Guide";
        fingerExplanation.innerHTML = "Practice moving between Home and Top rows. Match colors to coordinate stretches!";
        highlightKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    } else if (lesson === 'homerow_bottomrow') {
        keyboardTitle.innerText = "Home + Bottom Row Guide";
        fingerExplanation.innerHTML = "Practice moving between Home and Bottom rows. Match colors to coordinate curls!";
        highlightKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
    } else if (lesson === 'toprow_bottomrow') {
        keyboardTitle.innerText = "Top + Bottom Row Guide";
        fingerExplanation.innerHTML = "Practice stretches and curls between Top and Bottom rows directly!";
        highlightKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
    } else if (lesson === 'allrows') {
        keyboardTitle.innerText = "All Alphabet Rows Guide";
        fingerExplanation.innerHTML = "Type across all alphabet keys. Observe the full visual typing zone!";
        highlightKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
    }
    
    const keyMap = {
        '1': { c: 'c-red', f: 'f-l-pinky' }, '2': { c: 'c-orange', f: 'f-l-ring' }, 
        '3': { c: 'c-yellow', f: 'f-l-middle' }, '4': { c: 'c-green', f: 'f-l-index' }, '5': { c: 'c-green', f: 'f-l-index' },
        '6': { c: 'c-cyan', f: 'f-r-index' }, '7': { c: 'c-cyan', f: 'f-r-index' }, 
        '8': { c: 'c-blue', f: 'f-r-middle' }, '9': { c: 'c-purple', f: 'f-r-ring' }, '0': { c: 'c-pink', f: 'f-r-pinky' },

        'Q': { c: 'c-red', f: 'f-l-pinky' }, 'A': { c: 'c-red', f: 'f-l-pinky' }, 'Z': { c: 'c-red', f: 'f-l-pinky' },
        'W': { c: 'c-orange', f: 'f-l-ring' }, 'S': { c: 'c-orange', f: 'f-l-ring' }, 'X': { c: 'c-orange', f: 'f-l-ring' },
        'E': { c: 'c-yellow', f: 'f-l-middle' }, 'D': { c: 'c-yellow', f: 'f-l-middle' }, 'C': { c: 'c-yellow', f: 'f-l-middle' },
        'R': { c: 'c-green', f: 'f-l-index' }, 'F': { c: 'c-green', f: 'f-l-index' }, 'V': { c: 'c-green', f: 'f-l-index' },
        'T': { c: 'c-green', f: 'f-l-index' }, 'G': { c: 'c-green', f: 'f-l-index' }, 'B': { c: 'c-green', f: 'f-l-index' },
        
        'Y': { c: 'c-cyan', f: 'f-r-index' }, 'H': { c: 'c-cyan', f: 'f-r-index' }, 'N': { c: 'c-cyan', f: 'f-r-index' },
        'U': { c: 'c-cyan', f: 'f-r-index' }, 'J': { c: 'c-cyan', f: 'f-r-index' }, 'M': { c: 'c-cyan', f: 'f-r-index' },
        'I': { c: 'c-blue', f: 'f-r-middle' }, 'K': { c: 'c-blue', f: 'f-r-middle' }, ',': { c: 'c-blue', f: 'f-r-middle' },
        'O': { c: 'c-purple', f: 'f-r-ring' }, 'L': { c: 'c-purple', f: 'f-r-ring' }, '.': { c: 'c-purple', f: 'f-r-ring' },
        'P': { c: 'c-pink', f: 'f-r-pinky' }, ';': { c: 'c-pink', f: 'f-r-pinky' }, '/': { c: 'c-pink', f: 'f-r-pinky' },
    };
    
    if (highlightKeys.length > 0) {
        let elementsByColor = {};
        colorClasses.forEach(c => elementsByColor[c] = { keys: [], fingers: [] });
        
        allKeys.forEach(k => {
            let keyText = k.innerText;
            if (highlightKeys.includes(keyText)) {
                let map = keyMap[keyText];
                if (map) {
                    elementsByColor[map.c].keys.push(k);
                    let fingerEl = document.getElementById(map.f);
                    if (fingerEl && !elementsByColor[map.c].fingers.includes(fingerEl)) {
                        elementsByColor[map.c].fingers.push(fingerEl);
                    }
                }
            }
        });
        
        let activeColors = colorClasses.filter(c => elementsByColor[c].keys.length > 0);
        
        // Sequence Animation
        activeColors.forEach((color, index) => {
            let t = setTimeout(() => {
                elementsByColor[color].keys.forEach(k => {
                    k.classList.add('highlight', color);
                });
                elementsByColor[color].fingers.forEach(f => {
                    f.classList.add('active', color);
                });
                playClick(); // Tiny sound effect for each sequence step
            }, 600 + (index * 250)); // Start after hands slide up (600ms), then 250ms interval
            guideTimeouts.push(t);
        });
        
        // Final Step: Thumbs
        let tThumbs = setTimeout(() => {
            let lThumb = document.getElementById('f-l-thumb');
            let rThumb = document.getElementById('f-r-thumb');
            if(lThumb) lThumb.classList.add('active');
            if(rThumb) rThumb.classList.add('active');
        }, 600 + (activeColors.length * 250));
        guideTimeouts.push(tThumbs);

        keyboardModal.classList.remove('hidden');
    }
}

// Redundant time-btn click listener removed

customTimeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    customTimeContainer.classList.toggle('hidden');
    if (!customTimeContainer.classList.contains('hidden')) {
        customTimeInput.focus();
    }
});

customTimeApply.addEventListener('click', (e) => {
    e.stopPropagation();
    let newTime = parseInt(customTimeInput.value);
    if(newTime && newTime > 0) {
        timeBtns.forEach(b => b.classList.remove('active'));
        customTimeBtn.classList.add('active');
        maxTime = newTime;
        customTimeContainer.classList.add('hidden');
        resetGame();
    }
});

// Unified Dropdown Config
const dropdowns = [
    {
        dropdown: document.getElementById('practice-dropdown'),
        trigger: document.getElementById('practice-trigger'),
        menu: document.getElementById('practice-menu')
    },
    {
        dropdown: document.getElementById('test-dropdown'),
        trigger: document.getElementById('test-trigger'),
        menu: document.getElementById('test-menu')
    },
    {
        dropdown: document.getElementById('govt-dropdown'),
        trigger: document.getElementById('govt-trigger'),
        menu: document.getElementById('govt-menu')
    },
    {
        dropdown: document.getElementById('game-dropdown'),
        trigger: document.getElementById('game-trigger'),
        menu: document.getElementById('game-menu')
    },
    {
        dropdown: document.getElementById('theme-dropdown'),
        trigger: document.getElementById('theme-trigger'),
        menu: document.getElementById('theme-menu')
    }
];

document.addEventListener('click', (e) => {
    // Close custom time input
    if(!customTimeContainer.contains(e.target) && e.target !== customTimeBtn && e.target.id !== 'typing-input') {
        customTimeContainer.classList.add('hidden');
    }
    // Close dropdowns if clicked outside
    dropdowns.forEach(({ dropdown, trigger, menu }) => {
        if (dropdown && !dropdown.contains(e.target)) {
            menu.classList.add('hidden');
            trigger.classList.remove('open');
        }
    });
});

dropdowns.forEach(({ trigger, menu }) => {
    if (trigger && menu) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !menu.classList.contains('hidden');
            // Close all dropdowns first
            dropdowns.forEach(d => {
                if (d.menu) d.menu.classList.add('hidden');
                if (d.trigger) d.trigger.classList.remove('open');
            });
            // Open current one if it was closed
            if (!isOpen) {
                menu.classList.remove('hidden');
                trigger.classList.add('open');
            }
        });
    }
});

const practiceItems = document.querySelectorAll('.practice-item');
practiceItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const lesson = item.getAttribute('data-lesson');
        
        // Clear active classes from other main buttons
        lessonBtns.forEach(b => b.classList.remove('active'));
        
        // Remove selection from all dropdown items and triggers
        dropdowns.forEach(d => {
            if (d.trigger) d.trigger.classList.remove('active-sub');
        });
        practiceItems.forEach(i => i.classList.remove('selected'));
        
        // Select current item and its trigger
        item.classList.add('selected');
        const parentDropdown = item.closest('.practice-dropdown');
        if (parentDropdown) {
            const triggerBtn = parentDropdown.querySelector('.practice-trigger');
            if (triggerBtn) triggerBtn.classList.add('active-sub');
        }
        
        // Close all dropdown menus
        dropdowns.forEach(d => {
            if (d.menu) d.menu.classList.add('hidden');
            if (d.trigger) d.trigger.classList.remove('open');
        });
        
        if (lesson === 'game') {
            currentLesson = 'game';
            document.body.classList.add('game-mode-active');
            standardContainer.classList.add('hidden');
            gameContainer.classList.remove('hidden');
            document.getElementById('bubble-shooter-container').classList.add('hidden');
            
            if (gamePlayScreen) gamePlayScreen.classList.remove('hidden');
            
            const mode = item.getAttribute('data-gamemode');
            showGameStartScreen(mode);
        } else if (lesson === 'bubble-shooter') {
            currentLesson = 'bubble-shooter';
            document.body.classList.add('game-mode-active');
            gameActive = false;
            cancelAnimationFrame(gameAnimationFrame);
            standardContainer.classList.add('hidden');
            gameContainer.classList.add('hidden');
            document.getElementById('bubble-shooter-container').classList.remove('hidden');
            launchBubbleShooter();
        } else {
            currentLesson = lesson;
            document.body.classList.remove('game-mode-active');
            gameActive = false;
            cancelAnimationFrame(gameAnimationFrame);
            document.getElementById('game-mode-container').classList.add('hidden');
            document.getElementById('bubble-shooter-container').classList.add('hidden');
            document.getElementById('standard-mode-container').classList.remove('hidden');
            
            if (['homerow', 'toprow', 'bottomrow', 'numbers', 'homerow_toprow', 'homerow_bottomrow', 'toprow_bottomrow', 'allrows'].includes(lesson)) {
                showKeyboardGuide(lesson);
            } else {
                resetGame();
            }
        }
    });
});

lessonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('practice-trigger')) return;
        if (btn.id === 'drawer-toggle-btn') return; // Exclude Options toggle button from lesson logic
        
        const tempLesson = btn.getAttribute('data-lesson');
        if (tempLesson === 'weakspot' && Object.keys(weakspots).length === 0) {
            showToast('⚡ No weakspots yet! Complete a typing test first. Keys you miss most will appear here.');
            return;
        }

        lessonBtns.forEach(b => b.classList.remove('active'));
        
        // Clear all active/selected classes from dropdowns
        dropdowns.forEach(d => {
            if (d.trigger) {
                d.trigger.classList.remove('active-sub');
                d.trigger.classList.remove('open');
            }
            if (d.menu) {
                d.menu.classList.add('hidden');
            }
        });
        practiceItems.forEach(i => i.classList.remove('selected'));

        btn.classList.add('active');
        currentLesson = btn.getAttribute('data-lesson');
        
        if (currentLesson === 'game') {
            cancelAnimationFrame(gameAnimationFrame);
            standardContainer.classList.add('hidden');
            gameContainer.classList.remove('hidden');
            
            // Sync default dropdown item selection
            practiceItems.forEach(i => i.classList.remove('selected'));
            const matchingItem = document.querySelector('.practice-item[data-lesson="game"][data-gamemode="fall"]');
            if (matchingItem) matchingItem.classList.add('selected');
            dropdowns.forEach(d => {
                if (d.trigger) d.trigger.classList.remove('active-sub');
            });
            const gameTriggerBtn = document.getElementById('game-trigger');
            if (gameTriggerBtn) gameTriggerBtn.classList.add('active-sub');

            showGameStartScreen('fall');
        } else {
            gameActive = false;
            cancelAnimationFrame(gameAnimationFrame);
            gameContainer.classList.add('hidden');
            standardContainer.classList.remove('hidden');
            
            if (['homerow', 'toprow', 'bottomrow', 'numbers', 'homerow_toprow', 'homerow_bottomrow', 'toprow_bottomrow', 'allrows'].includes(currentLesson)) {
                showKeyboardGuide(currentLesson);
            } else if (currentLesson === 'weakspot') {
                // Show weakspot info toast instead of keyboard modal
                if (Object.keys(weakspots).length === 0) {
                    showToast('⚡ No weakspots yet! Complete a typing test first. Keys you miss most will appear here.');
                    return;
                }
                resetGame();
            } else {
                resetGame();
            }
        }
    });
});


// Theme Logic
const savedTheme = localStorage.getItem('typingDostTheme') || 'matrix';
document.body.setAttribute('data-theme', savedTheme);
if (typeof updateTrailColor === 'function') {
    updateTrailColor();
}
// Set initial active state in the rendered items
const initActiveTheme = () => {
    const themeMenu = document.getElementById('theme-menu');
    if (themeMenu) {
        const buttons = themeMenu.querySelectorAll('.theme-item');
        buttons.forEach(btn => {
            const isSaved = btn.getAttribute('data-theme') === savedTheme;
            if (isSaved) {
                btn.classList.add('active');
                const iconSpan = btn.querySelector('.theme-item-icon');
                const currentThemeIconEl = document.getElementById('current-theme-icon');
                const currentThemeNameEl = document.getElementById('current-theme-name');
                if (iconSpan && currentThemeIconEl) {
                    currentThemeIconEl.innerHTML = iconSpan.innerHTML;
                }
                if (currentThemeNameEl) {
                    const name = btn.innerText.replace(iconSpan.innerText, '').trim();
                    currentThemeNameEl.innerText = name;
                }
            } else {
                btn.classList.remove('active');
            }
        });
    }
};
initActiveTheme();

// Event delegation for theme dropdown
const themeMenu = document.getElementById('theme-menu');
if (themeMenu) {
    themeMenu.addEventListener('click', (e) => {
        const btn = e.target.closest('.theme-item');
        if (!btn) return;
        
        e.stopPropagation();
        const theme = btn.getAttribute('data-theme');
        
        // Trigger theme switching scale-fade transition
        document.body.classList.remove('theme-switching');
        void document.body.offsetWidth; // force reflow
        document.body.classList.add('theme-switching');
        
        if (window.themeSwitchTimeout) {
            clearTimeout(window.themeSwitchTimeout);
        }
        window.themeSwitchTimeout = setTimeout(() => {
            document.body.classList.remove('theme-switching');
        }, 400);

        // Explode theme shockwave particles
        const clickX = e.clientX || window.innerWidth / 2;
        const clickY = e.clientY || window.innerHeight / 2;
        if (typeof window.triggerThemeSwitchAnimation === 'function') {
            window.triggerThemeSwitchAnimation(clickX, clickY);
        }

        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('typingDostTheme', theme);
        if (typeof updateTrailColor === 'function') {
            updateTrailColor();
        }
        
        themeMenu.querySelectorAll('.theme-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const iconSpan = btn.querySelector('.theme-item-icon');
        const currentThemeIconEl = document.getElementById('current-theme-icon');
        const currentThemeNameEl = document.getElementById('current-theme-name');
        if (iconSpan && currentThemeIconEl) {
            currentThemeIconEl.innerHTML = iconSpan.innerHTML;
        }
        if (currentThemeNameEl) {
            const name = btn.innerText.replace(iconSpan.innerText, '').trim();
            currentThemeNameEl.innerText = name;
        }
        
        // Close theme dropdown when theme selected
        const themeTrigger = document.getElementById('theme-trigger');
        themeMenu.classList.add('hidden');
        if (themeTrigger) themeTrigger.classList.remove('open');
    });
}

// ---- DISPLAY MODES CONTROLLER (NORMAL, GRAY) ----
const displayModeBtn = document.getElementById('display-mode-btn');
let currentDisplayMode = localStorage.getItem('typingDostDisplayMode') || 'normal';
if (currentDisplayMode === 'light' || currentDisplayMode === 'dark') currentDisplayMode = 'normal';

function applyDisplayMode(mode) {
    document.body.classList.remove('gray-mode');
    
    if (mode === 'gray') {
        document.body.classList.add('gray-mode');
        if (displayModeBtn) displayModeBtn.innerHTML = '💿 Gray';
    } else {
        // default normal mode
        if (displayModeBtn) displayModeBtn.innerHTML = '🎨 Normal';
        mode = 'normal';
    }
    
    localStorage.setItem('typingDostDisplayMode', mode);
}

// Initialize on page load
applyDisplayMode(currentDisplayMode);

if (displayModeBtn) {
    displayModeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        initAudio();
        if (currentDisplayMode === 'normal') {
            currentDisplayMode = 'gray';
        } else {
            currentDisplayMode = 'normal';
        }
        applyDisplayMode(currentDisplayMode);
        playClick();
        showToast(`🖥️ Display Mode: ${currentDisplayMode.toUpperCase()}!`);
    });
}

// Eye Comfort Logic
const eyeComfortBtn = document.getElementById('eye-comfort-btn');
if (eyeComfortBtn) {
    const savedEyeComfort = localStorage.getItem('typingDostEyeComfort') === 'enabled';
    if (savedEyeComfort) {
        document.body.classList.add('eye-comfort-active');
        eyeComfortBtn.classList.add('active');
        eyeComfortBtn.innerHTML = '☀️ On';
    } else {
        document.body.classList.remove('eye-comfort-active');
        eyeComfortBtn.classList.remove('active');
        eyeComfortBtn.innerHTML = '🌙 Off';
    }
    
    eyeComfortBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        initAudio();
        const isActive = document.body.classList.toggle('eye-comfort-active');
        eyeComfortBtn.classList.toggle('active', isActive);
        if (isActive) {
            eyeComfortBtn.innerHTML = '☀️ On';
            localStorage.setItem('typingDostEyeComfort', 'enabled');
        } else {
            eyeComfortBtn.innerHTML = '🌙 Off';
            localStorage.setItem('typingDostEyeComfort', 'disabled');
        }
        playClick();
    });
}

// Keyboard Sound Data (50 sounds + mute)
const keyboardSounds = [
    // --- MECHANICAL SECTION ---
    { id: 'cyber', name: 'Cyber Blaster', icon: '🚀' },
    { id: 'mechanical', name: 'Standard Mech', icon: '⌨️' },
    { id: 'typewriter', name: 'Typewriter', icon: '📜' },
    { id: 'blue_switch', name: 'MX Blue (Clicky)', icon: '🔵' },
    { id: 'red_switch', name: 'MX Red (Linear)', icon: '🔴' },
    { id: 'brown_switch', name: 'MX Brown (Tactile)', icon: '🟤' },
    { id: 'gateron_yellow', name: 'Gateron Yellow', icon: '🟡' },
    { id: 'holy_panda', name: 'Holy Panda Thock', icon: '🐼' },
    { id: 'cream_linear', name: 'NovelKeys Cream', icon: '🍦' },
    { id: 'topre_electro', name: 'Topre Electro', icon: '🔋' },

    // --- RETRO SECTION ---
    { id: 'ibm_model_m', name: 'IBM Model M', icon: '⚙️' },
    { id: 'floppy_drive', name: 'Floppy Drive', icon: '💾' },
    { id: 'frog_croak', name: 'Frog Croak', icon: '🐸' },
    { id: 'cassette_click', name: 'Cassette Click', icon: '📼' },
    { id: 'rotary_phone', name: 'Rotary Dial', icon: '☎️' },
    { id: 'arcade_blip', name: '8-Bit Arcade', icon: '👾' },
    { id: 'retro_beep', name: 'DOS Beep', icon: '🖥️' },
    { id: 'laser_chirp', name: 'Sci-Fi Chirp', icon: '🛸' },
    { id: 'space_shuttle', name: 'Space Click', icon: '🌌' },
    { id: 'typewriter_bell', name: 'Typewriter Bell', icon: '🔔' },

    // --- SCI-FI SECTION ---
    { id: 'dog_bark', name: 'Dog Bark', icon: '🐕' },
    { id: 'digital_glitch', name: 'Digital Glitch', icon: '⚠️' },
    { id: 'warp_drive', name: 'Warp Drive', icon: '🌀' },
    { id: 'hologram_hum', name: 'Hologram Click', icon: '🌐' },
    { id: 'cat_meow', name: 'Cat Meow', icon: '🐱' },
    { id: 'tron_disc', name: 'Tron Disc', icon: '🥏' },
    { id: 'proton_pack', name: 'Proton Click', icon: '🎒' },
    { id: 'sub_sonar', name: 'Sub Sonar', icon: '🚢' },
    { id: 'cyber_zap', name: 'Cyber Zap', icon: '🔌' },
    { id: 'matrix_ping', name: 'Matrix Ping', icon: '🟩' },

    // --- COGNITIVE / MUSIC SECTION ---
    { id: 'water_drop', name: 'Water Drop', icon: '💧' },
    { id: 'pop_bubble', name: 'Pop Bubble', icon: '🫧' },
    { id: 'cow_moo', name: 'Cow Moo', icon: '🐄' },
    { id: 'guitar_pluck', name: 'Guitar Pluck', icon: '🎸' },
    { id: 'drum_rim', name: 'Drum Rimshot', icon: '🥁' },
    { id: 'bell_chime', name: 'Bell Chime', icon: '🎐' },
    { id: 'harp_sweep', name: 'Harp Sweep', icon: '🪕' },
    { id: 'wood_block', name: 'Wood Block', icon: '🪵' },
    { id: 'glass_clink', name: 'Glass Clink', icon: '🥂' },
    { id: 'bamboo_tap', name: 'Bamboo Tap', icon: '🎋' },

    // --- MEME SECTION ---
    { id: 'vine_boom', name: 'Vine Boom', icon: '💥' },
    { id: 'roblox_oof', name: 'Roblox Oof', icon: '🧸' },
    { id: 'bruh_synth', name: 'Bruh Synth', icon: '🗣️' },
    { id: 'metal_pipe', name: 'Metal Pipe Clang', icon: '🪠' },
    { id: 'yeet_slide', name: 'Yeet Slide', icon: '🛹' },
    { id: 'quack_toy', name: 'Quack Toy', icon: '🦆' },
    { id: 'sad_violin', name: 'Sad Violin Pluck', icon: '🎻' },
    { id: 'anime_wow', name: 'Anime Wow', icon: '🤩' },
    { id: 'win_xp_error', name: 'XP Error Synth', icon: '💾' },
    { id: 'airhorn_blip', name: 'Airhorn Blip', icon: '📢' },
    { id: 'fart', name: 'Meme Fart', icon: '💨' },
    { id: 'boing', name: 'Cartoon Boing', icon: '🔊' },
    { id: 'screaming_goat', name: 'Screaming Goat', icon: '🐐' },
    { id: 'banana_slip', name: 'Banana Slip', icon: '🍌' },
    
    // --- REAL MEMES SECTION ---
    { id: 'meme_aayein', name: 'Aayein', icon: '🍆', file: 'aayein-meme.mp3' },
    { id: 'meme_anime_ahh', name: 'Anime Ahh', icon: '😫', file: 'anime-ahh.mp3' },
    { id: 'meme_arkh', name: 'Arkh', icon: '🗣️', file: 'arkh.mp3' },
    { id: 'meme_chaloo', name: 'Chaloo', icon: '🚶', file: 'chaloo.mp3' },
    { id: 'meme_comedy', name: 'Comedy', icon: '😂', file: 'comedy.mp3' },
    { id: 'meme_duck', name: 'Duck Toy', icon: '🦆', file: 'duck-toy-sound.mp3' },
    { id: 'meme_error', name: 'Error', icon: '❌', file: 'error_CDOxCYm.mp3' },
    { id: 'meme_faaah', name: 'Faaah', icon: '😮', file: 'faaah.mp3' },
    { id: 'meme_gopgop', name: 'Gop Gop', icon: '🐟', file: 'gopgop.mp3' },
    { id: 'meme_gunshot', name: 'Gunshot', icon: '🔫', file: 'gunshot.mp3' },
    { id: 'meme_mac_quack', name: 'Mac Quack', icon: '🐤', file: 'mac-quack.mp3' },
    { id: 'meme_man_screaming', name: 'Man Screaming', icon: '😱', file: 'man-screaming-aaaah.mp3' },
    { id: 'meme_mario_jump', name: 'Mario Jump', icon: '🍄', file: 'maro-jump-sound-effect_1.mp3' },
    { id: 'meme_slap', name: 'Slap', icon: '👋', file: 'slap.mp3' },

    { id: 'mute', name: 'Mute Sound', icon: '🔇' }
];

// Populate Sound Dropdown Menu
const soundMenu = document.getElementById('sound-menu');
const soundTrigger = document.getElementById('sound-trigger');
const currentSoundIcon = document.getElementById('current-sound-icon');
const currentSoundName = document.getElementById('current-sound-name');

if (soundMenu) {
    soundMenu.innerHTML = "";
    keyboardSounds.forEach(sound => {
        const row = document.createElement('div');
        row.className = 'sound-item-row';
        row.innerHTML = `
            <button class="sound-item" data-sound="${sound.id}">
                <span class="sound-item-icon">${sound.icon}</span> ${sound.name}
            </button>
            <button class="sound-preview-btn" data-sound="${sound.id}" title="Preview Sound">🔊</button>
        `;
        soundMenu.appendChild(row);
    });
}

// Sound Selection State persistence
const savedSound = localStorage.getItem('typingDostSound') || 'water_drop';
currentSoundProfile = savedSound;

let previousSoundProfile = localStorage.getItem('typingDostPrevSound') || 'water_drop';
if (previousSoundProfile === 'mute') previousSoundProfile = 'water_drop';

function selectSoundProfile(soundId) {
    currentSoundProfile = soundId;
    localStorage.setItem('typingDostSound', soundId);
    
    if (soundId !== 'mute') {
        previousSoundProfile = soundId;
        localStorage.setItem('typingDostPrevSound', soundId);
    }
    
    const items = document.querySelectorAll('.sound-item');
    items.forEach(item => {
        if (item.getAttribute('data-sound') === soundId) {
            item.classList.add('active');
            
            const iconSpan = item.querySelector('.sound-item-icon');
            if (iconSpan && currentSoundIcon) {
                currentSoundIcon.innerText = iconSpan.innerText;
            }
            if (currentSoundName) {
                const name = item.innerText.replace(iconSpan ? iconSpan.innerText : '', '').trim();
                currentSoundName.innerText = name;
            }
        } else {
            item.classList.remove('active');
        }
    });

    updateMuteButtonUI();
}

function updateMuteButtonUI() {
    const muteBtn = document.getElementById('textbox-mute-btn');
    if (!muteBtn) return;
    
    if (currentSoundProfile === 'mute') {
        muteBtn.classList.add('muted');
        muteBtn.title = "Unmute Sound";
        muteBtn.innerHTML = `
            <svg class="mute-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
            <span>Muted</span>
        `;
    } else {
        muteBtn.classList.remove('muted');
        muteBtn.title = "Mute Sound";
        muteBtn.innerHTML = `
            <svg class="mute-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span>Mute</span>
        `;
    }
}

function toggleMute() {
    if (currentSoundProfile !== 'mute') {
        previousSoundProfile = currentSoundProfile;
        localStorage.setItem('typingDostPrevSound', previousSoundProfile);
        selectSoundProfile('mute');
    } else {
        selectSoundProfile(previousSoundProfile || 'water_drop');
    }
}

// Set initial saved sound
selectSoundProfile(savedSound);

// Open/Close Sound Dropdown Trigger
if (soundTrigger) {
    soundTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Close other menus to prevent overlapping
        const themeMenu = document.getElementById('theme-menu');
        const themeTrigger = document.getElementById('theme-trigger');
        if (themeMenu) themeMenu.classList.add('hidden');
        if (themeTrigger) themeTrigger.classList.remove('open');
        
        const testMenu = document.getElementById('test-menu');
        const testTrigger = document.getElementById('test-trigger');
        if (testMenu) testMenu.classList.add('hidden');
        if (testTrigger) testTrigger.classList.remove('open');

        const govtMenu = document.getElementById('govt-menu');
        const govtTrigger = document.getElementById('govt-trigger');
        if (govtMenu) govtMenu.classList.add('hidden');
        if (govtTrigger) govtTrigger.classList.remove('open');

        const activeMenu = document.getElementById('practice-menu');
        const activeTrigger = document.getElementById('practice-trigger');
        if (activeMenu) activeMenu.classList.add('hidden');
        if (activeTrigger) activeTrigger.classList.remove('open');
        
        if (soundMenu) {
            soundMenu.classList.toggle('hidden');
            soundTrigger.classList.toggle('open');
        }
    });
}

// Close sound menu on outer clicks
document.addEventListener('click', (e) => {
    if (soundMenu && !soundMenu.classList.contains('hidden') && !e.target.closest('#sound-dropdown')) {
        soundMenu.classList.add('hidden');
        if (soundTrigger) soundTrigger.classList.remove('open');
    }
});

// Sound Items Click Handling
if (soundMenu) {
    soundMenu.addEventListener('click', (e) => {
        const previewBtn = e.target.closest('.sound-preview-btn');
        if (previewBtn) {
            e.stopPropagation();
            const soundId = previewBtn.getAttribute('data-sound');
            const oldProfile = currentSoundProfile;
            currentSoundProfile = soundId;
            initAudio();
            playClick(); // play preview only
            currentSoundProfile = oldProfile;
            return;
        }

        const item = e.target.closest('.sound-item');
        if (item) {
            e.stopPropagation();
            const soundId = item.getAttribute('data-sound');
            selectSoundProfile(soundId);
            
            initAudio();
            playClick(); // play sound preview
            
            soundMenu.classList.add('hidden');
            if (soundTrigger) soundTrigger.classList.remove('open');
        }
    });
}

// Modifiers Logic
if(modPunctuation) modPunctuation.addEventListener('change', () => { resetGame(); focusInput(); });
if(modNumbers) modNumbers.addEventListener('change', () => { resetGame(); focusInput(); });



// Real-time Metronome state change handler
const metronomeCheckbox = document.getElementById('mod-metronome');
if (metronomeCheckbox) {
    metronomeCheckbox.addEventListener('change', () => {
        initAudio();
        if (metronomeInterval) {
            clearInterval(metronomeInterval);
            metronomeInterval = null;
        }
        if (metronomeCheckbox.checked && isTyping) {
            metronomeInterval = setInterval(() => {
                if (!isTyping) {
                    clearInterval(metronomeInterval);
                    metronomeInterval = null;
                    return;
                }
                playMetronomeClick();
            }, 500);
        }
    });
}

// --- Game Canvas Visual Effects Engine ---
function resizeEffectsCanvas() {
    if (effectsCanvas) {
        if (effectsCanvas.width !== effectsCanvas.offsetWidth || effectsCanvas.height !== effectsCanvas.offsetHeight) {
            effectsCanvas.width = effectsCanvas.offsetWidth;
            effectsCanvas.height = effectsCanvas.offsetHeight;
        }
    }
}

function getGameCanvasRect() {
    if (!gameCanvasRect && gameCanvas) {
        gameCanvasRect = gameCanvas.getBoundingClientRect();
    }
    return gameCanvasRect;
}

function getCenterMainframeRect() {
    if (!centerMainframeRect && centerMainframe) {
        centerMainframeRect = centerMainframe.getBoundingClientRect();
    }
    return centerMainframeRect;
}

function getWordCenter(w) {
    if (!gameCanvas || !w || !w.el) return { x: 0, y: 0 };
    const parentRect = getGameCanvasRect();
    if (!parentRect) return { x: 0, y: 0 };
    const childRect = w.el.getBoundingClientRect();
    return {
        x: childRect.left - parentRect.left + childRect.width / 2,
        y: childRect.top - parentRect.top + childRect.height / 2
    };
}

function getGameColor() {
    if (currentGameMode === 'fall') return '#00f0ff'; // Cyber Cyan
    if (currentGameMode === 'laser') return '#ff2a6d'; // Neon Magenta
    if (currentGameMode === 'ghost') return '#b55fe6'; // Eerie Purple
    if (currentGameMode === 'bomb') return '#ffcc00'; // Cyber Yellow
    if (currentGameMode === 'race') return '#ff0055'; // Racing Red / Hot Pink
    return '#00ffcc';
}

function createExplosion(x, y, color) {
    const count = 15 + Math.floor(Math.random() * 10);
    const chosenColor = color || getGameColor();
    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 4;
        particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 2 + Math.random() * 3,
            color: chosenColor,
            alpha: 1,
            decay: 0.02 + Math.random() * 0.02
        });
    }
}

function drawBackgroundGrid() {
    if (!ctx || !effectsCanvas) return;
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
    ctx.lineWidth = 1;
    const gridSpacing = 40;
    
    // Vertical grid lines
    for (let x = 0; x < effectsCanvas.width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, effectsCanvas.height);
        ctx.stroke();
    }
    
    // Horizontal scrolling lines
    gridOffset = (gridOffset + 0.5) % gridSpacing;
    for (let y = gridOffset; y < effectsCanvas.height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(effectsCanvas.width, y);
        ctx.stroke();
    }
}

function drawLasers() {
    if (!ctx) return;
    for (let i = lasers.length - 1; i >= 0; i--) {
        const l = lasers[i];
        ctx.save();
        ctx.strokeStyle = l.color;
        ctx.lineWidth = l.width;
        ctx.globalAlpha = l.alpha;
        ctx.shadowColor = l.color;
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        ctx.moveTo(l.startX, l.startY);
        ctx.lineTo(l.endX, l.endY);
        ctx.stroke();
        ctx.restore();
        
        // Decay laser line representation over time
        l.alpha -= 0.1;
        l.width -= 0.3;
        if (l.alpha <= 0 || l.width <= 0) {
            lasers.splice(i, 1);
        }
    }
}

function drawParticles() {
    if (!ctx) return;
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Apply physics motion
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        
        if (p.alpha <= 0) {
            particles.splice(i, 1);
        }
    }
}

function drawGlitch() {
    if (!ctx || !effectsCanvas) return;
    if (screenGlitchTime > 0) {
        screenGlitchTime--;
        
        // Red flash background
        ctx.fillStyle = 'rgba(255, 0, 85, 0.15)';
        ctx.fillRect(0, 0, effectsCanvas.width, effectsCanvas.height);
        
        // Horizontal scanline glitches
        ctx.fillStyle = 'rgba(0, 255, 255, 0.25)';
        const count = 3 + Math.floor(Math.random() * 4);
        for (let i = 0; i < count; i++) {
            const gy = Math.random() * effectsCanvas.height;
            const gh = 2 + Math.random() * 12;
            ctx.fillRect(0, gy, effectsCanvas.width, gh);
        }
    }
}

// --- Game Logic ---
let currentGameMode = 'fall';
const gamePlayScreen = document.getElementById('game-play-screen');
const gameBackBtn = document.getElementById('game-back-btn');
const activeGameTitle = document.getElementById('active-game-title');
const centerMainframe = document.getElementById('center-mainframe');

function exitGameMode() {
    gameActive = false;
    cancelAnimationFrame(gameAnimationFrame);
    activeWords.forEach(w => w.el.remove());
    activeWords = [];
    
    // Clean up race elements
    const track = gameCanvas.querySelector('.race-track-container');
    if (track) track.remove();
    
    // Clear canvas and effects
    particles = [];
    lasers = [];
    if (ctx && effectsCanvas) {
        ctx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
    }
    
    // Hide game start screen overlay
    if (gameStartScreen) {
        gameStartScreen.classList.add('hidden');
    }
    
    // Hide game container, show standard mode container
    document.body.classList.remove('game-mode-active');
    document.getElementById('game-mode-container').classList.add('hidden');
    document.getElementById('standard-mode-container').classList.remove('hidden');
    
    // Sync dropdown selections in navbar
    dropdowns.forEach(d => {
        if (d.trigger) d.trigger.classList.remove('active-sub');
    });
    practiceItems.forEach(i => i.classList.remove('selected'));
    
    // Focus default "Sentences" lesson
    const sentencesItem = document.querySelector('.practice-item[data-lesson="sentences"]');
    if (sentencesItem) {
        sentencesItem.classList.add('selected');
    }
    const testTriggerBtn = document.getElementById('test-trigger');
    if (testTriggerBtn) {
        testTriggerBtn.classList.add('active-sub');
    }
    
    currentLesson = 'sentences';
    resetGame();
}

// Setup back button
if (gameBackBtn) {
    gameBackBtn.addEventListener('click', () => {
        exitGameMode();
    });
}
const gameStartExitBtn = document.getElementById('game-start-exit-btn');
if (gameStartExitBtn) {
    gameStartExitBtn.addEventListener('click', () => {
        exitGameMode();
    });
}
const canvasTopExitBtn = document.getElementById('canvas-top-exit-btn');
if (canvasTopExitBtn) {
    canvasTopExitBtn.addEventListener('click', () => {
        exitGameMode();
    });
}
const inGameExitBtn = document.getElementById('in-game-exit-btn');
if (inGameExitBtn) {
    inGameExitBtn.addEventListener('click', () => {
        exitGameMode();
    });
}

// Show Game Start Screen Overlay with description
function showGameStartScreen(mode) {
    gameActive = false;
    cancelAnimationFrame(gameAnimationFrame);
    activeWords.forEach(w => w.el.remove());
    activeWords = [];
    
    // Clear canvas and effects
    particles = [];
    lasers = [];
    if (ctx && effectsCanvas) {
        ctx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
    }
    
    currentGameMode = mode;
    
    let titleText = "Cyber Fall";
    let iconText = "☄️";
    let descText = "Words are falling from the sky! Type them and press Space/Enter to destroy them before they hit the red danger zone.";
    
    if (mode === 'laser') {
        titleText = "Laser Defense";
        iconText = "🛡️";
        descText = "Words are advancing from the left and right sides! Type them to defend your central database mainframe.";
    } else if (mode === 'ghost') {
        titleText = "Ghost Word";
        iconText = "👻";
        descText = "Spooky! Words will fade and become completely invisible after spawning. Type them from memory before their lifespan runs out.";
    } else if (mode === 'bomb') {
        titleText = "Time Bomb";
        iconText = "💣";
        descText = "Ticking time bombs! Type the words before their fuses burn down to 0s and they explode.";
    } else if (mode === 'race') {
        titleText = "Car Racing";
        iconText = "🏎️";
        descText = "Race at lightning WPM speed! Type the words above the rival cars to fire nitro boosts, blast past them, and climb the scoreboard.";
    } else if (mode === 'hacker') {
        titleText = "Matrix Decryptor";
        iconText = "👾";
        descText = "Rogue security code snippets are raining down! Type the code lines correctly to decrypt them and clean the mainframe before they breach your firewalls.";
    }
    
    if (activeGameTitle) activeGameTitle.innerText = `${titleText} ${iconText}`;
    if (startGameIcon) startGameIcon.innerText = iconText;
    if (startGameTitle) startGameTitle.innerText = titleText;
    if (startGameDesc) startGameDesc.innerText = descText;
    
    // Config mainframe - only show for laser defense or hacker mode!
    if (centerMainframe) {
        if (mode === 'laser') {
            centerMainframe.classList.remove('hidden');
            const centerGameIcon = document.getElementById('center-game-icon');
            if (centerGameIcon) {
                centerGameIcon.innerText = '💾';
            }
        } else if (mode === 'hacker') {
            centerMainframe.classList.remove('hidden');
            const centerGameIcon = document.getElementById('center-game-icon');
            if (centerGameIcon) {
                centerGameIcon.innerText = '🛡️';
            }
        } else {
            centerMainframe.classList.add('hidden');
        }
    }
    
    if (gameStartScreen) {
        gameStartScreen.classList.remove('hidden');
    }
    
    // Prepare input field
    gameInput.value = "";
    gameInput.placeholder = "Press Start Game or Space/Enter...";
    gameInput.disabled = true;
}

// Setup start button
if (gameStartBtn) {
    gameStartBtn.addEventListener('click', () => {
        startGame();
    });
}

// Start game on space/enter
document.addEventListener('keydown', (e) => {
    if (currentLesson === 'game' && !gameActive && gameStartScreen && !gameStartScreen.classList.contains('hidden')) {
        const isModalHidden = !modal || modal.classList.contains('hidden');
        if (isModalHidden && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            startGame();
        }
    }
});

// --- Racing Global Variables & Mascot Commentator Dictionary ---
let targetRaceSpeed = 80;
let currentRaceSpeed = 80;
let nitroCharge = 0;
let lastDangerCommentTime = 0;
let sceneryBuildings = [];
let lastBuildingSpawnTime = 0;
let botLeftName = '';
let botLeftLane = 0;
let botLeftYOffset = 120;
let botLeftTargetYOffset = 120;

let botRightName = '';
let botRightLane = 2;
let botRightYOffset = 150;
let botRightTargetYOffset = 150;

let lastBotLaneChangeTime = 0;

const MASCOT_GAME_COMMENTS_BY_LANG = {
    english: {
        correct: [
            "Wow! Nice speed! 🔥",
            "Perfect hit, speed up! ⚡",
            "Leaving them in the dust! 😉",
            "Great finger rhythm! 🚀",
            "Full speed, unstoppable! 😎",
            "Super fast! Loving it! 🌟"
        ],
        error: [
            "Oh no! Hit the brakes! 🛑",
            "Check your gear, slow down! ⚙️",
            "Oops, wrong key! 🤦",
            "Oops! Engine choked! 😅",
            "Control! Focus on accuracy! 🎯"
        ],
        danger: [
            "Watch out! Crash imminent! 😱",
            "Type fast, they are catching up! 🚨",
            "Run! About to explode! 💣",
            "Red alert! Speed up now! 🌋"
        ],
        meganitro: [
            "💥 BOOM! MEGA NITRO BLAST!!! 🚀⚡",
            "Supersonic speed! Mindblowing! 🔥🛸",
            "Vaporized! 🛸✨"
        ]
    },
    hinglish: {
        correct: [
            "O teri! Kya speed hai! 🔥",
            "Ekdam jhakas, speed badhao! ⚡",
            "Rival toh gaya paani mein! 😉",
            "Mast chal rahi hai ungliyaan! 🚀",
            "Full speed, koi nahi rok sakta! 😎",
            "Tez chala bro! Maza aa gaya! 🌟"
        ],
        error: [
            "Arrey re! Brake lag gaya! 🛑",
            "Gear check karo bro, slow down! ⚙️",
            "Arey yaar, galat dabb gaya! 🤦",
            "Oops! Fuel line choke ho gayi! 😅",
            "Control, dost! Accuracy focus karo! 🎯"
        ],
        danger: [
            "Bhai piche toh dekh! Thok dega vo! 😱",
            "Jaldi type kar, bumper touch hone wala hai! 🚨",
            "Arrey bhago, crash ho jayega! 💣",
            "Bhai red alert! Speed badhao fast! 🌋"
        ],
        meganitro: [
            "💥 BOOM! MEGA NITRO BLAST!!! 🚀⚡",
            "Supersonic speed, bro! Tabahi! 🔥🛸",
            "Hawa se baatein kar rahe ho, dost! 🌟😎",
            "Flying mode activated! 🛸✨"
        ]
    },
    hindi: {
        correct: [
            "ओ तेरी! क्या स्पीड है! 🔥",
            "एकदम झकास, स्पीड बढ़ाओ! ⚡",
            "प्रतिद्वंद्वी तो गया पानी में! 😉",
            "मस्त चल रही हैं उंगलियां! 🚀",
            "फुल स्पीड, कोई नहीं रोक सकता! 😎",
            "तेज़ चलो भाई! मज़ा आ गया! 🌟"
        ],
        error: [
            "अरे रे! ब्रेक लग गया! 🛑",
            "गियर चेक करो भाई, स्पीड कम करो! ⚙️",
            "अरे यार, गलत बटन दब गया! 🤦",
            "उफ़! फ्यूल लाइन चोक हो गई! 😅",
            "नियंत्रण रखो, दोस्त! शुद्धता पर ध्यान दें! 🎯"
        ],
        danger: [
            "भाई पीछे तो देखो! टक्कर होने वाली है! 😱",
            "जल्दी टाइप करो, बंपर टच होने वाला है! 🚨",
            "अरे भागो, क्रैश हो जाएगा! 💣",
            "भाई रेड अलर्ट! स्पीड बढ़ाओ जल्दी! 🌋"
        ],
        meganitro: [
            "💥 बूम! मेगा नाइट्रो ब्लास्ट!!! 🚀⚡",
            "सुपरसोनिक स्पीड, भाई! तबाही! 🔥🛸",
            "हवा से बातें कर रहे हो, दोस्त! 🌟😎",
            "फ्लाइंग मोड एक्टिवेटेड! 🛸✨"
        ]
    },
    spanish: {
        correct: [
            "¡Guau! ¡Qué velocidad! 🔥",
            "¡Acierto perfecto, acelera! ⚡",
            "¡Dejándolos atrás! 😉",
            "¡Gran ritmo de dedos! 🚀",
            "¡A toda velocidad, imparable! 😎",
            "¡Súper rápido! ¡Me encanta! 🌟"
        ],
        error: [
            "¡Oh no! ¡Frena! 🛑",
            "¡Revisa tu marcha, reduce! ⚙️",
            "¡Vaya, tecla incorrecta! 🤦",
            "¡Oops! ¡Motor ahogado! 😅",
            "¡Control! ¡Enfócate en la precisión! 🎯"
        ],
        danger: [
            "¡Cuidado! ¡Choque inminente! 😱",
            "¡Escribe rápido, se acercan! 🚨",
            "¡Corre! ¡A punto de explotar! 💣",
            "¡Alerta roja! ¡Acelera ya! 🌋"
        ],
        meganitro: [
            "💥 ¡BUM! ¡MEGA IMPULSO NITRO!!! 🚀⚡",
            "¡Velocidad supersónica! ¡Increíble! 🔥🛸",
            "¡Vaporizado! 🛸✨"
        ]
    },
    french: {
        correct: [
            "Wow ! Quelle vitesse ! 🔥",
            "Frappe parfaite, accélère ! ⚡",
            "Tu les laisses sur place ! 😉",
            "Excellent rythme ! 🚀",
            "Plein gaz, inarrêtable ! 😎",
            "Super rapide ! J'adore ! 🌟"
        ],
        error: [
            "Oh non ! Freine ! 🛑",
            "Vérifie ton braquet, ralentis ! ⚙️",
            "Mince, mauvaise touche ! 🤦",
            "Oups ! Moteur calé ! 😅",
            "Contrôle ! Reste précis ! 🎯"
        ],
        danger: [
            "Attention ! Crash imminent ! 😱",
            "Tape vite, ils te rattrapent ! 🚨",
            "Fuis ! Ça va exploser ! 💣",
            "Alerte rouge ! Accélère ! 🌋"
        ],
        meganitro: [
            "💥 BOUM ! EXPLOSION MÉGA NITRO !!! 🚀⚡",
            "Vitesse supersonique ! Hallucinant ! 🔥🛸",
            "Vaporisé ! 🛸✨"
        ]
    },
    german: {
        correct: [
            "Wow! Tolle Geschwindigkeit! 🔥",
            "Perfekter Treffer, schneller! ⚡",
            "Lass sie hinter dir! 😉",
            "Klasse Tipp-Rhythmus! 🚀",
            "Volle Fahrt, unaufhaltsam! 😎",
            "Super schnell! Fantastisch! 🌟"
        ],
        error: [
            "Oh nein! Bremsen! 🛑",
            "Gang prüfen, langsamer! ⚙️",
            "Hoppla, falsche Taste! 🤦",
            "Upps! Motor abgewürgt! 😅",
            "Kontrolle! Konzentrier dich! 🎯"
        ],
        danger: [
            "Achtung! Crash droht! 😱",
            "Tippe schneller, sie holen auf! 🚨",
            "Lauf! Gleich explodiert es! 💣",
            "Roter Alarm! Schneller! 🌋"
        ],
        meganitro: [
            "💥 BOOM! MEGA-NITRO-BLAST!!! 🚀⚡",
            "Superschall-Geschwindigkeit! Wahnsinn! 🔥🛸",
            "Vaporisiert! 🛸✨"
        ]
    },
    arabic: {
        correct: [
            "واو! سرعة رائعة! 🔥",
            "إصابة مثالية، أسرع! ⚡",
            "تجاوزهم تماماً! 😉",
            "إيقاع أصابع رائع! 🚀",
            "أقصى سرعة، لا يمكن إيقافك! 😎",
            "سريع جداً! مذهل! 🌟"
        ],
        error: [
            "أوه لا! اضغط على الفرامل! 🛑",
            "تحقق من السرعة، أبطئ! ⚙️",
            "عذراً، مفتاح خاطئ! 🤦",
            "أوبس! خنقت المحرك! 😅",
            "تحكم! ركز على الدقة! 🎯"
        ],
        danger: [
            "انتبه! حادث وشيك! 😱",
            "اكتب بسرعة، إنهم يقتربون! 🚨",
            "اهرب! على وشك الانفجار! 💣",
            "إنذار أحمر! أسرع الآن! 🌋"
        ],
        meganitro: [
            "💥 بوم! انفجار نيترو هائل!!! 🚀⚡",
            "سرعة خارقة للصوت! مدهش! 🔥🛸",
            "تلاشى تماماً! 🛸✨"
        ]
    },
    japanese: {
        correct: [
            "わお！いいスピード！ 🔥",
            "完ぺき！スピードアップ！ ⚡",
            "ぶっちぎり！ 😉",
            "リズムがいいね！ 🚀",
            "最高速！止められない！ 😎",
            "超高速！最高！ 🌟"
        ],
        error: [
            "あぶない！ブレーキ！ 🛑",
            "落ち着いて、減速！ ⚙️",
            "おっと、ミスタイプ！ 🤦",
            "おっと！エンストだ！ 😅",
            "コントロール！正確に！ 🎯"
        ],
        danger: [
            "気をつけて！激突する！ 😱",
            "急いで！追いつかれる！ 🚨",
            "逃げて！爆発する！ 💣",
            "レッドアラート！加速して！ 🌋"
        ],
        meganitro: [
            "💥 ドカーン！メガニトロ噴射！！！ 🚀⚡",
            "超音速！信じられない！ 🔥🛸",
            "消滅！ 🛸✨"
        ]
    },
    portuguese: {
        correct: [
            "Uau! Ótima velocidade! 🔥",
            "Acerto perfeito, acelere! ⚡",
            "Deixando-os para trás! 😉",
            "Ótimo ritmo de dedos! 🚀",
            "Velocidade máxima, imparável! 😎",
            "Super rápido! Adorando! 🌟"
        ],
        error: [
            "Ah não! Pise no freio! 🛑",
            "Verifique a marcha, diminua! ⚙️",
            "Ops, tecla errada! 🤦",
            "Ops! Motor afogou! 😅",
            "Controle! Foque na precisão! 🎯"
        ],
        danger: [
            "Cuidado! Colisão iminente! 😱",
            "Digite rápido, estão se aproximando! 🚨",
            "Corra! Prestes a explodir! 💣",
            "Alerta vermelho! Acelere já! 🌋"
        ],
        meganitro: [
            "💥 BUM! MEGA NITRO BLAST!!! 🚀⚡",
            "Velocidade supersônica! Incrível! 🔥🛸",
            "Vaporizado! 🛸✨"
        ]
    }
};

function triggerMascotGameComment(type) {
    const bubble = document.getElementById('hud-mascot-bubble');
    const img = document.getElementById('hud-mascot-img');
    if (!bubble || !img) return;
    
    const activeLang = (typeof currentLearningLang !== 'undefined' && currentLearningLang) 
        ? currentLearningLang.toLowerCase() 
        : (localStorage.getItem('typingDostLang') || 'english');
        
    const langComments = MASCOT_GAME_COMMENTS_BY_LANG[activeLang] || MASCOT_GAME_COMMENTS_BY_LANG.english;
    const commentList = langComments[type];
    if (!commentList) return;
    
    const randomComment = commentList[Math.floor(Math.random() * commentList.length)];
    
    let imgSrc = 'typingdost_cool.webp';
    if (type === 'correct') imgSrc = 'typingdost_happy.webp';
    else if (type === 'error') imgSrc = 'typingdost_determined.webp';
    else if (type === 'danger') imgSrc = 'typingdost_mindblown.webp';
    else if (type === 'meganitro') imgSrc = 'typingdost_happy.webp';
    
    img.src = imgSrc;
    bubble.innerText = randomComment;
    
    bubble.style.animation = 'none';
    void bubble.offsetWidth; // trigger reflow
    bubble.style.animation = 'bubblePop 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
}

function spawnSceneryBuilding() {
    if (!gameActive || currentGameMode !== 'race') return;
    
    const track = gameCanvas.querySelector('.race-track-container');
    if (!track) return;
    
    const leftScenery = track.querySelector('.racing-scenery-left');
    const rightScenery = track.querySelector('.racing-scenery-right');
    if (!leftScenery || !rightScenery) return;
    
    const isLeft = Math.random() > 0.5;
    const parent = isLeft ? leftScenery : rightScenery;
    
    const building = document.createElement('div');
    const colors = ['neon-blue', 'neon-purple', ''];
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    
    building.className = `scenery-building ${selectedColor}`;
    const height = Math.floor(Math.random() * 120) + 80;
    building.style.height = `${height}px`;
    building.style.width = `${Math.floor(Math.random() * 30) + 40}px`;
    building.style.top = `0px`;
    building.style.transform = `translate3d(0, -${height}px, 0)`;
    
    if (isLeft) {
        building.style.left = `${Math.random() * 40 + 5}%`;
    } else {
        building.style.right = `${Math.random() * 40 + 5}%`;
    }
    
    parent.appendChild(building);
    
    sceneryBuildings.push({
        el: building,
        y: -height,
        height: height
    });
}

const MASCOT_GAME_START_MESSAGES_BY_LANG = {
    english: {
        defaultMsg: "Alright, game start! Smash the keyboard! ⌨️💥",
        race: "Let's go! Hit the nitro and leave your rivals in the dust! 🏎️💨",
        fall: "Words are falling from the sky! Destroy them before they hit the danger zone! ☄️",
        laser: "Rivals are attacking the database from left and right! Defend it! 🛡️",
        ghost: "Spooky ghost words! Memorize and type them before they vanish! 👻",
        bomb: "Time bomb ticking down! Defuse it before it blasts! 💣",
        hacker: "Rogue codes are falling from the sky! Decrypt them to defend cyber firewalls! 👾💻"
    },
    hinglish: {
        defaultMsg: "Chalo bhai, game start! Keyboard fod do! ⌨️💥",
        race: "Chalo bhai, nitro dabao aur rivals ko dhool chattao! 🏎️💨",
        fall: "Asmaan se words gir rahe hain! Unhe danger zone se pehle udao! ☄️",
        laser: "Rivals left and right se database pe attack kar rahe hain! Defend karo! 🛡️",
        ghost: "Spooky ghost words! Yaad karke type karo, gayab hone se pehle! 👻",
        bomb: "Time bomb ticking down! Blast hone se pehle defuse karo! 💣",
        hacker: "Rogue codes asmaan se baras rahe hain! Decrypt karke cyber firewalls defend karo! 👾💻"
    },
    hindi: {
        defaultMsg: "चलो भाई, गेम स्टार्ट! कीबोर्ड फोड़ दो! ⌨️💥",
        race: "चलो भाई, नाइट्रो दबाओ और प्रतिद्वंद्वियों को धूल चटाओ! 🏎️💨",
        fall: "आसमान से शब्द गिर रहे हैं! उन्हें डेंजर ज़ोन से पहले उड़ाओ! ☄️",
        laser: "प्रतिद्वंद्वी बाएं और दाएं से डेटाबेस पर हमला कर रहे हैं! बचाव करो! 🛡️",
        ghost: "डरावने भूतिया शब्द! गायब होने से पहले याद करके टाइप करो! 👻",
        bomb: "टाइम बम टिक-टिक कर रहा है! ब्लास्ट होने से पहले डिफ्यूज करो! 💣",
        hacker: "दुष्ट कोड आसमान से बरस रहे हैं! डिक्रिप्ट करके साइबर फायरवॉल की रक्षा करो! 👾💻"
    },
    spanish: {
        defaultMsg: "¡Muy bien, comienza el juego! ¡Destruye el teclado! ⌨️💥",
        race: "¡Vamos! ¡Activa el nitro y deja atrás a tus rivales! 🏎️💨",
        fall: "¡Las palabras caen del cielo! ¡Destrúyelas antes de que lleguen a la zona de peligro! ☄️",
        laser: "¡Los rivales atacan la base de datos por la izquierda y la derecha! ¡Defiéndela! 🛡️",
        ghost: "¡Palabras fantasma espeluznantes! ¡Memorízalas y escríbelas antes de que desaparezcan! 👻",
        bomb: "¡Bomba de tiempo en marcha! ¡Desactívala antes de que explote! 💣",
        hacker: "¡Códigos rebeldes caen del cielo! ¡Descríptalos para defender los cortafuegos! 👾💻"
    },
    french: {
        defaultMsg: "Très bien, le jeu commence ! Explosez le clavier ! ⌨️💥",
        race: "C'est parti ! Activez le nitro et laissez vos rivaux sur place ! 🏎️💨",
        fall: "Les mots tombent du ciel ! Détruisez-les avant qu'ils n'atteignent la zone de danger ! ☄️",
        laser: "Les rivaux attaquent la base de données de gauche et de droite ! Défendez-la ! 🛡️",
        ghost: "Mots fantômes effrayants ! Mémorisez-les et tapez-les avant qu'ils ne disparaissent ! 👻",
        bomb: "La bombe à retardement tourne ! Désamorcez-la avant qu'elle n'explose ! 💣",
        hacker: "Des codes malveillants tombent du ciel ! Décryptez-les pour défendre les pare-feu ! 👾💻"
    },
    german: {
        defaultMsg: "Alles klar, Spielstart! Zerstöre die Tastatur! ⌨️💥",
        race: "Los geht's! Zünde den Nitro und lass deine Rivalen hinter dir! 🏎️💨",
        fall: "Worte fallen vom Himmel! Zerstöre sie, bevor sie die Gefahrenzone erreichen! ☄️",
        laser: "Gegner greifen die Datenbank von links und rechts an! Verteidige sie! 🛡️",
        ghost: "Gruselige Geisterworte! Merke sie dir und tippe sie ab, bevor sie verschwinden! 👻",
        bomb: "Die Zeitbombe tickt! Entschärfe sie, bevor sie explodiert! 💣",
        hacker: "Schädlicher Code fällt vom Himmel! Entschlüssele ihn, um die Firewalls zu verteidigen! 👾💻"
    },
    arabic: {
        defaultMsg: "حسناً، فلتبدأ اللعبة! حطم لوحة المفاتيح! ⌨️💥",
        race: "انطلق! استخدم النيترو واترك منافسيك في الخلف! 🏎️💨",
        fall: "الكلمات تتساقط من السماء! دمرها قبل أن تصل إلى منطقة الخطر! ☄️",
        laser: "المنافسون يهاجمون قاعدة البيانات من اليمين واليسار! دافع عنها! 🛡️",
        ghost: "كلمات شبحية مخيفة! احفظها واكتبها قبل أن تختفي! 👻",
        bomb: "القنبلة الموقوتة تدق! أبطل مفعولها قبل أن تنفجر! 💣",
        hacker: "أكواد مارقة تتساقط من السماء! فك تشفيرها لحماية جدار الحماية! 👾💻"
    },
    japanese: {
        defaultMsg: "さあ、ゲーム開始！キーボードを叩き潰せ！ ⌨️💥",
        race: "行こう！ニトロを使ってライバルを引き離せ！ 🏎️💨",
        fall: "空から言葉が降ってくる！危険地帯に落ちる前に撃破しろ！ ☄️",
        laser: "ライバルが左右からデータベースを攻撃している！防衛せよ！ 🛡️",
        ghost: "不気味なゴーストワード！消える前に覚えてタイピングしろ！ 👻",
        bomb: "タイムリミット迫る！爆発する前に時限爆弾を解除しろ！ 💣",
        hacker: "不正コードが降ってきた！デコードしてファイアウォールを守り抜け！ 👾💻"
    },
    portuguese: {
        defaultMsg: "Muito bem, jogo iniciado! Destrua o teclado! ⌨️💥",
        race: "Vamos! Ative o nitro e deixe seus rivais para trás! 🏎️💨",
        fall: "As palavras estão caindo do céu! Destrua-as antes que atinjam a zona de perigo! ☄️",
        laser: "Os rivais estão atacando o banco de dados pela esquerda e pela direita! Defenda-o! 🛡️",
        ghost: "Palavras fantasmas assustadoras! Memorize e digite-as antes que desapareçam! 👻",
        bomb: "Bomba-relógio correndo! Desarme-a antes que ela exploda! 💣",
        hacker: "Códigos invasores caindo do céu! Decifre-os para defender os firewalls! 👾💻"
    }
};

function startGame() {
    activeWords.forEach(w => w.el.remove());
    activeWords = [];
    gameScore = 0;
    gameMultiplier = 1;
    gameLives = 3;
    spawnRate = 2000;
    fallSpeed = 0.8;
    gameStartTime = performance.now();
    totalGameCharsTyped = 0;
    currentWpm = 0;
    updateGameUI();
    
    if (gameStartScreen) {
        gameStartScreen.classList.add('hidden');
    }
    
    // Clear existing track & HUD/Mascot if any
    const oldTrack = gameCanvas.querySelector('.race-track-container');
    if (oldTrack) oldTrack.remove();
    
    const oldHud = gameCanvas.querySelector('.arcade-hud-left');
    const oldMascot = gameCanvas.querySelector('.arcade-mascot-right');
    if (oldHud) oldHud.remove();
    if (oldMascot) oldMascot.remove();
    
    sceneryBuildings = [];
    lastBuildingSpawnTime = 0;

    // Create Right Mascot Commentator Box for ALL games
    const mascotContainer = document.createElement('div');
    mascotContainer.className = 'arcade-mascot-right';
    
    const bubble = document.createElement('div');
    bubble.className = 'hud-mascot-bubble';
    bubble.id = 'hud-mascot-bubble';
    
    const activeLang = (typeof currentLearningLang !== 'undefined' && currentLearningLang) 
        ? currentLearningLang.toLowerCase() 
        : (localStorage.getItem('typingDostLang') || 'english');
        
    const langStartMsgs = MASCOT_GAME_START_MESSAGES_BY_LANG[activeLang] || MASCOT_GAME_START_MESSAGES_BY_LANG.english;
    const defaultMsg = langStartMsgs[currentGameMode] || langStartMsgs.defaultMsg;
    bubble.innerText = defaultMsg;
    
    const imgWrap = document.createElement('div');
    imgWrap.className = 'hud-mascot-img-wrap';
    
    const mascotImg = document.createElement('img');
    mascotImg.className = 'hud-mascot-img';
    mascotImg.id = 'hud-mascot-img';
    mascotImg.src = 'typingdost_cool.webp';
    
    imgWrap.appendChild(mascotImg);
    mascotContainer.appendChild(bubble);
    mascotContainer.appendChild(imgWrap);
    gameCanvas.appendChild(mascotContainer);

    if (currentGameMode === 'race') {
        currentRaceSpeed = 80;
        targetRaceSpeed = 80;
        nitroCharge = 0;
        lastDangerCommentTime = 0;

        // Build road track
        const trackContainer = document.createElement('div');
        trackContainer.className = 'race-track-container';
        
        // Spawn scrolling cityscape panels
        const leftScenery = document.createElement('div');
        leftScenery.className = 'racing-scenery-left';
        const leftGrid = document.createElement('div');
        leftGrid.className = 'scenery-grid';
        leftScenery.appendChild(leftGrid);
        
        const rightScenery = document.createElement('div');
        rightScenery.className = 'racing-scenery-right';
        const rightGrid = document.createElement('div');
        rightGrid.className = 'scenery-grid';
        rightScenery.appendChild(rightGrid);
        
        trackContainer.appendChild(leftScenery);
        trackContainer.appendChild(rightScenery);
        
        const road = document.createElement('div');
        road.className = 'race-road';
        
        const sideGlow = document.createElement('div');
        sideGlow.className = 'road-side-glow';
        road.appendChild(sideGlow);
        
        // Spawn moving road lines
        for (let i = 0; i < 8; i++) {
            const initialY = i * 90 - 40;
            const leftLine = document.createElement('div');
            leftLine.className = 'road-line left-lane-bound';
            leftLine.dataset.y = initialY;
            leftLine.style.top = '0px';
            leftLine.style.transform = `translate3d(0, ${initialY}px, 0)`;
            
            const rightLine = document.createElement('div');
            rightLine.className = 'road-line right-lane-bound';
            rightLine.dataset.y = initialY;
            rightLine.style.top = '0px';
            rightLine.style.transform = `translate3d(0, ${initialY}px, 0)`;
            
            road.appendChild(leftLine);
            road.appendChild(rightLine);
        }
        
        // Build player car driven by determined or cool mascot!
        const playerCar = document.createElement('div');
        playerCar.className = 'player-car';
        playerCar.id = 'player-racecar';
        playerCar.style.left = '50%';
        
        const carBody = document.createElement('div');
        carBody.className = 'car-body';
        
        // 4 wheel modules
        const tl = document.createElement('div'); tl.className = 'car-wheel tl';
        const tr = document.createElement('div'); tr.className = 'car-wheel tr';
        const bl = document.createElement('div'); bl.className = 'car-wheel bl';
        const br = document.createElement('div'); br.className = 'car-wheel br';
        
        // Dynamic Headlights
        const headlights = document.createElement('div');
        headlights.className = 'car-headlights';
        
        // Spoiler
        const spoiler = document.createElement('div');
        spoiler.className = 'car-spoiler';
        
        // Mascot Driver cabin
        const cabin = document.createElement('div');
        cabin.className = 'car-cabin';
        const driver = document.createElement('img');
        driver.className = 'driver-mascot';
        driver.src = 'typingdost_cool.webp';
        cabin.appendChild(driver);
        
        // Engine exhaust
        const exhaust = document.createElement('div');
        exhaust.className = 'car-exhaust';
        exhaust.id = 'car-exhaust-flame';
        
        carBody.appendChild(tl);
        carBody.appendChild(tr);
        carBody.appendChild(bl);
        carBody.appendChild(br);
        carBody.appendChild(headlights);
        carBody.appendChild(spoiler);
        carBody.appendChild(cabin);
        carBody.appendChild(exhaust);
        playerCar.appendChild(carBody);
        
        road.appendChild(playerCar);
        
        // Both competitor bot cars removed as requested!
        
        trackContainer.appendChild(road);
        gameCanvas.appendChild(trackContainer);
        
        // Create left Arcade HUD Dashboard
        const hudContainer = document.createElement('div');
        hudContainer.className = 'arcade-hud-left';
        hudContainer.innerHTML = `
            <div class="hud-speedometer">
                <svg class="speed-dial-svg">
                    <defs>
                        <linearGradient id="speedGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#ff0055" />
                            <stop offset="100%" stop-color="#00ffff" />
                        </linearGradient>
                    </defs>
                    <circle class="speed-dial-track" cx="35" cy="35" r="30" />
                    <circle class="speed-dial-fill" id="hud-speed-fill" cx="35" cy="35" r="30" />
                </svg>
                <div class="speed-text-container">
                    <div class="speed-num" id="hud-speed-val">80</div>
                    <div class="speed-unit">KM/H</div>
                </div>
            </div>
            <div class="hud-stat-row">
                <span class="hud-stat-label">WPM</span>
                <span class="hud-stat-val" id="hud-wpm-val">0</span>
            </div>
            <div class="hud-stat-row">
                <span class="hud-stat-label">MULT</span>
                <span class="hud-stat-val" id="hud-mult-val">1x</span>
            </div>
            <div class="hud-boost-container">
                <div class="boost-header">
                    <span class="boost-label">Nitro</span>
                    <span class="boost-ready-text" id="hud-boost-status">READY</span>
                </div>
                <div class="hud-boost-bg">
                    <div class="hud-boost-fill" id="hud-boost-fill"></div>
                </div>
            </div>
        `;
        gameCanvas.appendChild(hudContainer);
        
        const dangerZone = gameCanvas.querySelector('.danger-zone');
        if (dangerZone) dangerZone.style.display = 'none';
    } else {
        const dangerZone = gameCanvas.querySelector('.danger-zone');
        if (dangerZone) dangerZone.style.display = 'block';
    }

    // Config center mainframe visibility at start
    if (centerMainframe) {
        if (currentGameMode === 'laser') {
            centerMainframe.classList.remove('hidden');
        } else {
            centerMainframe.classList.add('hidden');
        }
    }

    gameInput.disabled = false;
    gameInput.placeholder = "Type words here...";
    gameInput.value = "";
    gameInput.focus();
    
    gameActive = true;
    lastSpawnTime = performance.now();
    lastTime = performance.now();
    spawnWord(lastSpawnTime); // Spawn the first word instantly at the start!
    gameAnimationFrame = requestAnimationFrame(gameLoop);
}

function updateGameUI() {
    gameScoreEl.innerText = gameScore;
    gameMultiplierEl.innerText = `${gameMultiplier}x`;
    gameLivesEl.innerText = "❤️".repeat(gameLives);
}

function spawnWord(timestamp) {
    let wordText = "";
    if (currentGameMode === 'hacker') {
        const hackerPhrases = [
            "01011001", "0xEF4A92", "chmod +x", "npm run dev", "git commit",
            "let x = 5;", "const w = [];", "api.fetch()", "system.hack()", "ipconfig",
            "sudo rm -rf", "grep -rnw", "ssh root@", "docker -a", "python3 main.py",
            "0x7F2C0B", "127.0.0.1", "localhost:3000", "01101011", "curl -X POST",
            "killall -9", "ping google.com", "git push", "decrypt_key", "override_ai"
        ];
        wordText = hackerPhrases[Math.floor(Math.random() * hackerPhrases.length)];
    } else {
        let wordList = lessons.easy[Math.floor(Math.random() * lessons.easy.length)].split(' ');
        wordText = wordList[Math.floor(Math.random() * wordList.length)];
    }
    
    let el = document.createElement('div');
    let wordObj = { el, text: wordText, target: false };
    
    if (currentGameMode === 'fall' || currentGameMode === 'hacker') {
        el.innerText = wordText;
        el.className = currentGameMode === 'hacker' ? 'hacker-word' : 'falling-word';
        el.style.left = `${Math.random() * 80 + 5}%`;
        el.style.top = `0px`; // Starting origin
        el.style.transform = `translate3d(0, -40px, 0)`;
        gameCanvas.appendChild(el);
        wordObj.y = -40;
    } 
    else if (currentGameMode === 'laser') {
        el.innerText = wordText;
        el.className = 'laser-word';
        let direction = Math.random() > 0.5 ? 'left' : 'right';
        wordObj.direction = direction;
        wordObj.x = direction === 'left' ? 0 : 90;
        wordObj.y = Math.random() * (gameCanvas.clientHeight - 80) + 15;
        
        el.style.left = `0px`;
        el.style.top = `${wordObj.y}px`;
        let startPx = (wordObj.x / 100) * gameCanvas.clientWidth;
        el.style.transform = `translate3d(${startPx}px, 0, 0)`;
        
        if (direction === 'left') {
            el.classList.add('from-left');
        } else {
            el.classList.add('from-right');
        }
        gameCanvas.appendChild(el);
    } 
    else if (currentGameMode === 'ghost') {
        el.innerText = wordText;
        el.className = 'ghost-word';
        wordObj.x = Math.random() * 70 + 10;
        wordObj.y = Math.random() * (gameCanvas.clientHeight - 80) + 15;
        wordObj.spawnTime = timestamp;
        wordObj.lifespan = 4500; // 4.5 seconds to type
        wordObj.ghosted = false;
        
        el.style.left = `${wordObj.x}%`;
        el.style.top = `0px`;
        el.style.transform = `translate3d(0, ${wordObj.y}px, 0)`;
        gameCanvas.appendChild(el);
    } 
    else if (currentGameMode === 'bomb') {
        el.className = 'bomb-word';
        wordObj.x = Math.random() * 70 + 10;
        wordObj.y = Math.random() * (gameCanvas.clientHeight - 80) + 15;
        wordObj.spawnTime = timestamp;
        wordObj.fuse = 5500; // 5.5 seconds fuse
        
        el.style.left = `${wordObj.x}%`;
        el.style.top = `0px`;
        el.style.transform = `translate3d(0, ${wordObj.y}px, 0)`;
        el.innerHTML = `<span class="bomb-timer">6s</span> <span class="word-text">${wordText}</span>`;
        gameCanvas.appendChild(el);
    }
    else if (currentGameMode === 'race') {
        el.className = 'enemy-car';
        
        const enemyBody = document.createElement('div');
        enemyBody.className = 'enemy-body';
        
        // Add glowing tail lights
        const leftLight = document.createElement('div');
        leftLight.className = 'enemy-taillight left';
        const rightLight = document.createElement('div');
        rightLight.className = 'enemy-taillight right';
        enemyBody.appendChild(leftLight);
        enemyBody.appendChild(rightLight);
        el.appendChild(enemyBody);
        
        // Holographic floating license plate with typing word
        const plate = document.createElement('div');
        plate.className = 'word-plate';
        plate.innerHTML = wordText;
        el.appendChild(plate);
        
        // Choose one of 3 lanes: left (20px), center (133px), right (246px)
        const lane = Math.floor(Math.random() * 3);
        wordObj.lane = lane;
        const laneX = lane === 0 ? 20 : (lane === 1 ? 133 : 246);
        wordObj.x = laneX;
        wordObj.y = -100;
        
        el.style.left = `${laneX}px`;
        el.style.top = `0px`;
        el.style.transform = `translate3d(0, ${wordObj.y}px, 0)`;
        // Dynamic rival styles: cyan, gold, purple
        const styles = ['cyan', 'gold', 'purple'];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];
        el.classList.add(selectedStyle);
        
        let themeColor = '#00f0ff';
        if (selectedStyle === 'gold') themeColor = '#ffd700';
        else if (selectedStyle === 'purple') themeColor = '#b55fe6';
        wordObj.color = themeColor;
        
        const road = gameCanvas.querySelector('.race-road');
        if (road) {
            road.appendChild(el);
        } else {
            gameCanvas.appendChild(el);
        }
    }
    
    activeWords.push(wordObj);
}

function gameLoop(timestamp) {
    if (!gameActive) return;
    
    // Normalize timestamp to performance.now() to prevent any timeline drift or NaN deltaTime issues
    timestamp = performance.now();
    let deltaTime = timestamp - lastTime;
    if (isNaN(deltaTime) || deltaTime <= 0 || deltaTime > 100) {
        deltaTime = 16.67;
    }
    lastTime = timestamp;
    
    if (timestamp - lastSpawnTime > spawnRate) {
        spawnWord(timestamp);
        lastSpawnTime = timestamp;
        
        // Increase difficulty slightly
        if (spawnRate > 700) spawnRate -= 20;
        if (fallSpeed < 4) fallSpeed += 0.02;
    }
    
    const clientHeight = gameCanvas ? gameCanvas.clientHeight : 0;
    const clientWidth = gameCanvas ? gameCanvas.clientWidth : 0;
    
    // Move or update words
    for (let i = activeWords.length - 1; i >= 0; i--) {
        let w = activeWords[i];
        
        if (currentGameMode === 'fall' || currentGameMode === 'hacker') {
            w.y += fallSpeed * (deltaTime / 16);
            w.el.style.transform = `translate3d(0, ${w.y}px, 0)`;
            
            // Collision with bottom line
            if (w.y > clientHeight - 30) {
                triggerFail(i);
            }
        } 
        else if (currentGameMode === 'race') {
            w.y += (fallSpeed * 1.6) * (deltaTime / 16);
            w.el.style.transform = `translate3d(0, ${w.y}px, 0)`;
            
            // Commentator alert when rival gets very close
            if (w.y > 180) {
                const now = performance.now();
                if (now - lastDangerCommentTime > 3000) {
                    triggerMascotGameComment('danger');
                    lastDangerCommentTime = now;
                }
            }
            
            // Collision check: if a rival car gets close to the player car (y > 310px)
            if (w.y > 310) {
                const playerCar = document.getElementById('player-racecar');
                if (playerCar) {
                    playerCar.style.filter = 'hue-rotate(90deg) brightness(1.5)';
                    setTimeout(() => {
                        if (playerCar) playerCar.style.filter = '';
                    }, 300);
                }
                triggerFail(i);
            }
        } 
        else if (currentGameMode === 'laser') {
            let speed = fallSpeed * 0.7; // slightly slower horizontal movement
            if (w.direction === 'left') {
                w.x += speed * (deltaTime / 16);
            } else {
                w.x -= speed * (deltaTime / 16);
            }
            let px = (w.x / 100) * clientWidth;
            w.el.style.transform = `translate3d(${px}px, 0, 0)`;
            
            // Collision with center mainframe (around x = 45%)
            if (w.direction === 'left' && w.x >= 43) {
                triggerFail(i);
            } else if (w.direction === 'right' && w.x <= 47) {
                triggerFail(i);
            }
        } 
        else if (currentGameMode === 'ghost') {
            let elapsed = timestamp - w.spawnTime;
            
            // Ghosting: hide text after 900ms
            if (elapsed > 900 && !w.ghosted) {
                w.ghosted = true;
                w.el.style.opacity = '0';
                w.el.classList.add('is-ghosted');
            }
            
            // Lifespan check
            if (elapsed > w.lifespan) {
                triggerFail(i);
            }
        } 
        else if (currentGameMode === 'bomb') {
            let elapsed = timestamp - w.spawnTime;
            let remaining = Math.max(0, Math.ceil((w.fuse - elapsed) / 1000));
            
            // Update countdown timer label
            const timerEl = w.el.querySelector('.bomb-timer');
            if (timerEl) {
                timerEl.innerText = `${remaining}s`;
            }
            
            // Pulse effect when ticking down
            if (remaining <= 2) {
                w.el.classList.add('urgent');
            }
            
            // Explode bomb check
            if (elapsed > w.fuse) {
                triggerFail(i);
            }
        }
    }
    
    // Animate road lines and background buildings for speed parallax effect
    if (currentGameMode === 'race') {
        // Scroll road lines
        const roadLines = gameCanvas.querySelectorAll('.road-line');
        roadLines.forEach(line => {
            let top = parseFloat(line.dataset.y) || 0;
            top += (fallSpeed * 6) * (deltaTime / 16);
            if (top > 450) {
                top = -60;
            }
            line.dataset.y = top;
            line.style.transform = `translate3d(0, ${top}px, 0)`;
        });
 
        // Spawn & Scroll side skyscrapers
        const now = performance.now();
        
        // Competitor bot animation removed!
        if (now - lastBuildingSpawnTime > 1000) {
            spawnSceneryBuilding();
            lastBuildingSpawnTime = now;
        }
 
        for (let i = sceneryBuildings.length - 1; i >= 0; i--) {
            let b = sceneryBuildings[i];
            b.y += (fallSpeed * 4.5) * (deltaTime / 16);
            b.el.style.transform = `translate3d(0, ${b.y}px, 0)`;
            
            if (b.y > clientHeight + 20) {
                b.el.remove();
                sceneryBuildings.splice(i, 1);
            }
        }

        // Interpolate target and current speeds
        let wpmVal = isNaN(currentWpm) ? 0 : currentWpm;
        let baseTarget = 80 + (wpmVal * 2.5);
        if (targetRaceSpeed < baseTarget) {
            targetRaceSpeed = baseTarget;
        } else {
            targetRaceSpeed -= 1.2 * (deltaTime / 16); // gradual decay after boost
        }

        currentRaceSpeed += (targetRaceSpeed - currentRaceSpeed) * 0.08 * (deltaTime / 16);
        if (currentRaceSpeed > 320) currentRaceSpeed = 320;
        if (currentRaceSpeed < 40) currentRaceSpeed = 40;

        // Update Left HUD Dashboard
        const speedFill = document.getElementById('hud-speed-fill');
        const speedValText = document.getElementById('hud-speed-val');
        if (speedFill) {
            let percent = (currentRaceSpeed - 40) / 280;
            let offset = 188.4 - (Math.max(0, Math.min(1, percent)) * 188.4);
            speedFill.style.strokeDashoffset = offset;
        }
        if (speedValText) {
            speedValText.innerText = Math.round(currentRaceSpeed);
        }

        const hudWpmVal = document.getElementById('hud-wpm-val');
        const hudMultVal = document.getElementById('hud-mult-val');
        if (hudWpmVal) hudWpmVal.innerText = wpmVal;
        if (hudMultVal) hudMultVal.innerText = `${gameMultiplier}x`;

        // Update linear boost bar
        const boostFill = document.getElementById('hud-boost-fill');
        const boostStatus = document.getElementById('hud-boost-status');
        if (boostFill) {
            boostFill.style.width = `${nitroCharge}%`;
            if (nitroCharge >= 100) {
                boostFill.classList.add('charged');
                if (boostStatus) boostStatus.classList.add('active');
            } else {
                boostFill.classList.remove('charged');
                if (boostStatus) boostStatus.classList.remove('active');
            }
        }

        // Spawn continuous tailpipe smoke & nitro spark particles
        if (!cachedPlayerCar || !document.body.contains(cachedPlayerCar)) {
            cachedPlayerCar = document.getElementById('player-racecar');
        }
        const playerCar = cachedPlayerCar;
        if (playerCar) {
            const carRect = playerCar.getBoundingClientRect();
            const canvasRect = getGameCanvasRect();
            const exhaustX = carRect.left - canvasRect.left + carRect.width / 2;
            const exhaustY = carRect.top - canvasRect.top + carRect.height - 10;
            
            const isNitro = currentRaceSpeed > 200;
            const sparkCount = isNitro ? 3 : 1;
            for (let k = 0; k < sparkCount; k++) {
                particles.push({
                    x: exhaustX + (Math.random() * 6 - 3),
                    y: exhaustY,
                    vx: Math.random() * 2 - 1,
                    vy: 2 + Math.random() * 3,
                    size: isNitro ? (2 + Math.random() * 4) : (1 + Math.random() * 2),
                    color: isNitro ? (Math.random() > 0.4 ? '#00ffff' : '#7722ff') : (Math.random() > 0.4 ? '#ff9900' : '#ff0055'),
                    alpha: 0.85,
                    decay: isNitro ? (0.03 + Math.random() * 0.02) : (0.05 + Math.random() * 0.03)
                });
            }
        }
    }

    // Update and draw effects canvas
    resizeEffectsCanvas();
    if (ctx && effectsCanvas) {
        ctx.clearRect(0, 0, effectsCanvas.width, effectsCanvas.height);
        drawBackgroundGrid();
        drawLasers();
        drawParticles();
        drawGlitch();
    }
    
    gameAnimationFrame = requestAnimationFrame(gameLoop);
}

function triggerFail(index) {
    let w = activeWords[index];
    w.el.remove();
    activeWords.splice(index, 1);
    
    gameLives--;
    gameMultiplier = 1;
    updateGameUI();
    playWarning();
    screenGlitchTime = 12;
    gameCanvas.classList.add('shake');
    setTimeout(() => gameCanvas.classList.remove('shake'), 400);
    
    if (gameLives <= 0) {
        cancelAnimationFrame(gameAnimationFrame);
        endGameMode();
    }
}

function endGameMode() {
    lastWpm = gameScore;
    lastAccuracy = 100;
    lastTestMode = 'game-' + currentGameMode;
    gameActive = false;
    gameInput.blur();
    
    // Setup detailed results modal for later review
    const modalTitle = document.getElementById('result-modal-title');
    if (modalTitle) modalTitle.innerText = "Game Over!";
    
    if (modalCloseBtn) {
        const btnTrans = MODAL_BTN_TRANSLATIONS[currentLearningLang] || MODAL_BTN_TRANSLATIONS.english;
        modalCloseBtn.innerText = btnTrans.playAgain;
    }
    
    if (finalWpmEl) finalWpmEl.innerText = gameScore;
    
    const wpmLabel = document.getElementById('final-wpm-label');
    if (wpmLabel) wpmLabel.innerText = " Score";
    
    const accuracyWrap = document.getElementById('final-accuracy-wrap-modal');
    if (accuracyWrap) accuracyWrap.style.display = 'none';
    
    const consistencyWrap = document.getElementById('final-consistency-wrap');
    if (consistencyWrap) consistencyWrap.style.display = 'none';
    
    const finalDetailsRow = document.getElementById('final-details-row');
    if (finalDetailsRow) finalDetailsRow.style.display = 'none';
    
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) chartContainer.style.display = 'none';
    
    const heatmapSection = document.getElementById('result-heatmap-section');
    if (heatmapSection) heatmapSection.classList.add('hidden');
    
    const modalAch = document.getElementById('modal-achievements');
    if (modalAch) modalAch.style.display = 'none';
    
    if (encouragingMsgEl) {
        const trans = ENCOURAGEMENT_TRANSLATIONS[currentLearningLang] || ENCOURAGEMENT_TRANSLATIONS.english;
        encouragingMsgEl.innerText = trans.gameTry;
    }
    
    showMascotPopup(0, 0, gameScore, true);
}

function updateWordVisual(w, val) {
    const plateEl = w.el.querySelector('.word-plate');
    const wordTextEl = w.el.querySelector('.word-text');
    const targetEl = plateEl || wordTextEl || w.el;
    
    if (val && w.text.startsWith(val)) {
        targetEl.innerHTML = `<span class="typed">${val}</span>${w.text.substring(val.length)}`;
    } else {
        targetEl.innerHTML = w.text;
    }
}

// Game Input handling
gameInput.addEventListener('input', (e) => {
    initAudio();
    let val = e.target.value.trim().toLowerCase();
    
    let matchIndex = -1;
    for (let i = 0; i < activeWords.length; i++) {
        activeWords[i].el.classList.remove('target');
        if (activeWords[i].text.startsWith(val) && val.length > 0) {
            matchIndex = i;
        }
    }
    
    if (matchIndex > -1) {
        let w = activeWords[matchIndex];
        w.el.classList.add('target');
        
        // In ghost mode, reveal the text as the user types it!
        if (currentGameMode === 'ghost') {
            w.el.style.opacity = '1';
        }
        
        // Highlight active characters in the word using our safe helper
        updateWordVisual(w, val);
        
        if (val === w.text) {
            // Restore clean text before explosion
            updateWordVisual(w, w.text);
            
            w.el.classList.add('exploding');
            playExplosion();
            
            // Slide player car to the matching lane!
            if (currentGameMode === 'race') {
                const playerCar = document.getElementById('player-racecar');
                const exhaustFlame = document.getElementById('car-exhaust-flame');
                if (playerCar) {
                    // Center lane is 50%. Slide left/right relative to lanes.
                    const laneLeftVal = w.lane === 0 ? 'calc(50% - 108px)' : (w.lane === 1 ? '50%' : 'calc(50% + 108px)');
                    playerCar.style.left = laneLeftVal;
                    
                    // Tilt the car slightly during lane change!
                    const tiltAngle = w.lane === 0 ? '-10deg' : (w.lane === 2 ? '10deg' : '0deg');
                    playerCar.style.transform = `translateX(-50%) rotate(${tiltAngle})`;
                    setTimeout(() => {
                        if (playerCar) playerCar.style.transform = 'translateX(-50%) rotate(0deg)';
                    }, 200);
                }
                
                // Ignite visual Nitro exhaust!
                if (exhaustFlame) {
                    exhaustFlame.classList.add('nitro');
                    setTimeout(() => {
                        if (exhaustFlame) exhaustFlame.classList.remove('nitro');
                    }, 450);
                }

                // Increment nitro charge
                nitroCharge = Math.min(100, nitroCharge + 15);
                if (nitroCharge >= 100) {
                    // MEGA NITRO BLAST!
                    targetRaceSpeed = 340;
                    if (gameCanvas) {
                        gameCanvas.classList.add('boost-shake');
                        setTimeout(() => {
                            if (gameCanvas) gameCanvas.classList.remove('boost-shake');
                        }, 1200);
                    }
                    playExplosion();
                    triggerMascotGameComment('meganitro');
                    nitroCharge = 0;
                } else {
                    // Standard boost
                    targetRaceSpeed = Math.min(320, targetRaceSpeed + 40);
                    triggerMascotGameComment('correct');
                }
            }
            
            // Visual laser and explosion effects
            const targetCoords = getWordCenter(w);
            let startX, startY;
            
            if (currentGameMode === 'laser' && centerMainframe) {
                const mainframeRect = getCenterMainframeRect();
                const canvasRect = getGameCanvasRect();
                startX = (mainframeRect && canvasRect) ? (mainframeRect.left - canvasRect.left + mainframeRect.width / 2) : 0;
                startY = (mainframeRect && canvasRect) ? (mainframeRect.top - canvasRect.top + mainframeRect.height / 2) : 0;
            } else {
                const canvasRect = getGameCanvasRect();
                startX = canvasRect ? (canvasRect.width / 2) : 0;
                startY = canvasRect ? canvasRect.height : 0;
            }
            
            lasers.push({
                startX: startX,
                startY: startY,
                endX: targetCoords.x,
                endY: targetCoords.y,
                color: getGameColor(),
                alpha: 1.0,
                width: 3.5
            });
            
            createExplosion(targetCoords.x, targetCoords.y, w.color);
            
            // Dynamic WPM update
            totalGameCharsTyped += w.text.length + 1;
            let elapsedMinutes = (performance.now() - gameStartTime) / 60000;
            if (elapsedMinutes > 0.01) {
                currentWpm = Math.min(250, Math.round((totalGameCharsTyped / 5) / elapsedMinutes));
            }
            
            let points = w.text.length * 10 * gameMultiplier;
            gameScore += points;
            gameMultiplier = Math.min(gameMultiplier + 1, 10);
            updateGameUI();
            
            let removedEl = w.el;
            activeWords.splice(matchIndex, 1);
            setTimeout(() => removedEl.remove(), 300);
            
            gameInput.value = "";
        }
    } else {
        if (val.length > 0) {
            playError();
            gameMultiplier = 1;
            updateGameUI();
            
            // Trigger mascot comment & speed drop for error in race mode
            triggerMascotGameComment('error');
            if (currentGameMode === 'race') {
                targetRaceSpeed = Math.max(50, targetRaceSpeed - 60);
            }
            
            // Auto-clear input on wrong entry as requested!
            gameInput.value = "";
        }
        // Safely reset styling on all words without wiping out nested DOM structures
        activeWords.forEach(w => {
            updateWordVisual(w, "");
            if (currentGameMode === 'ghost' && !w.target) {
                w.el.style.opacity = w.ghosted ? '0' : '1';
            }
        });
    }
});

// Localized Mascot Character Dialogues & Poses mapping
const CHARACTER_DIALOGUES_BY_LANG = {
    english: {
        'typingdost_ninja.webp': [
            "Supersonic cyber-ninja speed! Your keys have become unseen slice vectors! ⚔️💨",
            "Incredible ninja speed! Every stroke triggers a cyber-strike! 🗡️🔥",
            "Fingers are moving like shadows! Ultimate silent speed assassin mode unlocked! 🥷✨",
            "Ninja warrior precision! Mascot is highly impressed by your supersonic reflex loops! 🌟🚀"
        ],
        'typingdost_hacker.webp': [
            "Database completely hacked! Matrix codes are shivering behind your fingers! 💾💻",
            "System bypass! Server terminal access successfully decrypted in seconds! Hacker boss! 🤖👾",
            "Mainframe is bypassed! It seems the text block was directly injected! ⌨️⚡",
            "Fingers on fire! 100% green cyber hacking flow achieved! 🚀💥"
        ],
        'typingdost_glitch.webp': [
            "WPM broke the dimension barrier! Frame delays glitching out on your inputs! 🌀🚀",
            "You are typing so fast, the engine's physics loop is breaking! 🤖💥",
            "Glitch in the matrix! CPU speed has to catch up with your fingers, friend! 💻✨",
            "Infinite timeline glitch unlocked! Space-time scale is bending today! 🌌🔥"
        ],
        'typingdost_racer.webp': [
            "Supersonic race track! F1 speed achieved! Tires are literally smoking on the road! 🏎️💨",
            "Top gear! You touched the 6th speed index! Absolute racing champion! 🏁⚡",
            "Fingers are cruising at 300 km/h! Supercharged nitro speed unlocked! 🚗🔥",
            "Unbeatable speed curve! Red-lining the typing engine with ease! 📈🎯"
        ],
        'typingdost_genius.webp': [
            "Massive high-IQ calculations! E=mc² level brain waves inside your fingers! 🧠🚀",
            "Quantum level typing! Calculations and strokes completely aligned! 🌟💎",
            "Einstein is proud of you! Keyboard frequency levels are absolute genius! 💡⚡",
            "Super intelligence flow! Speed and precision are perfectly calculated! 📈🔥"
        ],
        'typingdost_gamer.webp': [
            "Pro gamer APM achieved! Triple-kill typing streak! 🎮🔥",
            "High performance gamer mode! Mascot is dancing with your insane APM! 👾⚡",
            "Keyboard key layout completely optimized! Esports ready speed! 🕹️✨",
            "GG WP! It feels like raw gaming adrenaline is flowing through your fingers! 🚀🎮"
        ],
        'typingdost_coffee.webp': [
            "Double shot caffeine activated! Hyperactive fingers are vibrating! ☕🚀",
            "Steaming coffee cup power! Looks like you injected an energy drink! ⚡💨",
            "Hyperactive speed rhythm! Coffee-fueled fingers are unstoppable today! ☕🔥",
            "Mascot says: caffeine boost successfully synchronized with your typing speed! 🌟👍"
        ],
        'typingdost_cosmic.webp': [
            "Zero-gravity floating flow! Space particles are expanding around your WPM! 🌌✨",
            "Cosmic voyager status! Bending lightwaves with your typing rhythm! 🛸🚀",
            "Floating through the stars! Unbelievable smooth orbit typing! 🌠💎",
            "Universe is proud of your cosmic speed flow! Keep exploring space! 🛸🔥"
        ],
        'typingdost_noob.webp': [
            "Hey, beginner typist! Don't worry, you'll improve very soon! 📦🌱",
            "Box helmet wobbly smile says: Practice daily and you will be a ninja hacker soon! 📦💪",
            "Cute beginner energy! Keep pressing correct keys, I am always with you! 🤗🌿",
            "First step of the keyboard ladder! Mascot is very happy with your pure effort! 🌟👍"
        ],
        'typingdost_monk.webp': [
            "Slow and silent focus! Keyboard meditation is the true path! 🧘‍♂️✨",
            "Steady stone keyboard typing! Wise decisions lead to typing mastery! 🕉️🌿",
            "Peace and patience! Speed is secondary, inner harmony is primary! 🧘‍♂️🧘",
            "Wise monk is deeply satisfied with your calm efforts! Keep practicing daily! 🕉️💎"
        ],
        'typingdost_rage.webp': [
            "Calm down, take it easy! Angry red screen! Keys are flying out of the socket! 🤬💔",
            "Take a deep breath! Fast typos will only break your accuracy down! 🛑🛠️",
            "Keyboard breaking speed but errors are overflowing! Mascot is sweating! 😢⌨️",
            "Furious typing but accuracy drop! Stop on error, and let's regain balance! 🧠🎯"
        ],
        'typingdost_zen.webp': [
            "Perfect 100% precision! Flawless lotus zen state achieved! Zero errors! 🧘‍♂️💎",
            "Absolute perfect alignment of mind and muscle! Zero mistakes master! ✨🎯",
            "Zen state flow! Absolute quietness and flawless performance! 🕉️✨",
            "Zen master is highly proud of your flawless hit records today! 💎🔥"
        ],
        'typingdost_happy.webp': [
            "Wow, mascot is dancing with happiness! What a performance! 💃✨",
            "Super happy mascot! Keyboard is literally smiling with your rhythm! 😄⌨️",
            "Fingers are making sweet melodies today, friend! 🎵🔥",
            "Very happy feedback! Mascot is smiling ear-to-ear! Keep rocking! 🌟👍"
        ],
        'typingdost_sleeping.webp': [
            "Wake up, friend! Keyboard is literally sleeping! Wake up! 😴⌨️",
            "Sleeping beauty mode! Let's shake those fingers and wake the screen up! 😴⚡",
            "Slow inputs! Mascot fell asleep waiting for the next word! 😴🎯",
            "No worries, stretch your fingers, drink some water and try again! 🧘‍♀️🌿"
        ],
        'typingdost_cool.webp': [
            "Too cool for keyboard! Smooth sliding flow, absolute chill vibe! 😎✨",
            "Cool neon glasses are glowing! Chill but excellent typing speed! 😎⚡",
            "Slick style! Mascot looks like a swagger with your WPM! 🕶️🔥",
            "Vibe check passed! You are the coolest typist in this lobby! 😎🛸"
        ],
        'typingdost_determined.webp': [
            "Concentrated focus! You are super close to beast levels, friend! 💪🚀",
            "Determination is the absolute key! Keep typing with this active focus! 🏁⚡",
            "Determined mascot is watching your fingers closely! Almost there! 💪🎯",
            "Outstanding resolution! Daily effort will naturally push your score higher! 🌟🧘"
        ],
        'typingdost_mindblown.webp': [
            "Wow! Minds are literally blown! Insane performance index! 🤯💥",
            "Brain cells glitched out! Mascot is completely speechless! 🤯🛸",
            "Unbelievable hits! Keyboard speed is touching maximum parameters! 🤯🔥",
            "Is this real life or a simulation? Absolutely mindblowing! 🤯💎"
        ]
    },
    hinglish: {
        'typingdost_ninja.webp': [
            "Supersonic cyber-ninja speed! Teri typing keys toh unseen slice vectors ban chuki hain! ⚔️💨",
            "Arey ninja, itni speed! Har stroke pe toh ek cyber-strike ho raha hai! 🗡️🔥",
            "Fingers are moving like shadows! Ultimate silent speed assassin mode unlocked! 🥷✨",
            "Ninja warrior precision! Mascot is highly impressed by your supersonic reflex loops! 🌟🚀"
        ],
        'typingdost_hacker.webp': [
            "Database completely hacked, bro! Matrix codes are shivering behind your fingers! 💾💻",
            "O teri! Server terminal access successfully decrypted in seconds! Hacker boss! 🤖👾",
            "Mainframe is bypassed! lagta hai directly bypass-inject kar diya text block! ⌨️⚡",
            "Fingers on fire! 100% green cyber hacking flow achieved! 🚀💥"
        ],
        'typingdost_glitch.webp': [
            "WPM broke the dimension barrier! Frame delays glitching out on your inputs! 🌀🚀",
            "You are typing so fast, the engine's physics loop is breaking! 🤖💥",
            "Glitch in the matrix! CPU speed has to catch up with your fingers, bro! 💻✨",
            "Infinite timeline glitch unlocked! Space-time scale is bending today! 🌌🔥"
        ],
        'typingdost_racer.webp': [
            "Supersonic race track! F1 speed achieved! Tires are literally smoking on the road! 🏎️💨",
            "Top gear, dost! 6th speed index touch kar diya! Absolute racing champion! 🏁⚡",
            "Fingers are cruising at 300 km/h! Supercharged nitro speed unlocked! 🚗🔥",
            "Unbeatable speed curve! Red-lining the typing engine with ease! 📈🎯"
        ],
        'typingdost_genius.webp': [
            "Massive high-IQ calculations! E=mc² level brain waves inside your fingers! 🧠🚀",
            "Quantum level typing, dost! Calculations and strokes completely aligned! 🌟💎",
            "Einstein is proud of you! Keyboard frequency levels are absolute genius! 💡⚡",
            "Super intelligence flow! Speed and precision are perfectly calculated! 📈🔥"
        ],
        'typingdost_gamer.webp': [
            "Pro gamer APM (Actions Per Minute) achieved! Triple-kill typing streak, bro! 🎮🔥",
            "High performance gamer mode! Mascot is dancing with your insane APM! 👾⚡",
            "Keyboard keyboard button mash completely optimized! Esports ready speed, dost! 🕹️✨",
            "GG WP! Lagta hai raw gaming adrenaline flow ho raha hai fingers me! 🚀🎮"
        ],
        'typingdost_coffee.webp': [
            "Double shot caffeine shot activated! Hyperactive fingers are vibrating, bro! ☕🚀",
            "Steaming coffee cup power! Lagta hai directly energy drink inject kar li! ⚡💨",
            "Hyperactive speed rhythm! Coffee-fueled fingers are unstoppable today! ☕🔥",
            "Mascot says: caffeine boost successfully synchronized with your typing speed! 🌟👍"
        ],
        'typingdost_cosmic.webp': [
            "Zero-gravity floating flow! Space particles are expanding around your WPM! 🌌✨",
            "Cosmic voyager status! Bending lightwaves with your typing rhythm! 🛸🚀",
            "Floating through the stars, dost! Unbelievable smooth orbit typing! 🌠💎",
            "Universe is proud of your cosmic speed flow! Keep exploring space, bro! 🛸🔥"
        ],
        'typingdost_noob.webp': [
            "Arey mere cute box-helmet noob dost! Dil chota mat kar, tu jaldi pro banega! 📦🌱",
            "Box helmet wobbly smile says: Practice daily and you will be a ninja hacking database soon! 📦💪",
            "Cute beginner energy! Keep pressing correct buttons, main hamesha sath hoon! 🤗🌿",
            "First step of the keyboard ladder! Mascot is very happy with your pure effort! 🌟👍"
        ],
        'typingdost_monk.webp': [
            "Slow and absolute silent focus! Keyboard meditation is the true path, dost! 🧘‍♂️✨",
            "One-finger stone keyboard typing! Wise decisions lead to final typing mastery! 🕉️🌿",
            "Shanti aur dhairya! Speed is secondary, peaceful inner harmony is primary! 🧘‍♂️🧘",
            "Wise monk is deeply satisfied with your calm efforts! Keep practicing daily! 🕉️💎"
        ],
        'typingdost_rage.webp': [
            "Arey aaram se, bro! Angry red screen! Keys are flying out of the socket! 🤬💔",
            "Calm down, dost! Fast typos will only break accuracy down! Typos are high! 🛑🛠️",
            "Keyboard breaking speed but errors are overflowing! Mascot is sweating! 😢⌨️",
            "Furious typing but accuracy drop! Stop on error, and let's regain balance! 🧠🎯"
        ],
        'typingdost_zen.webp': [
            "Perfect 100% precision! Flawless lotus zen state achieved! Zero errors! 🧘‍♂️💎",
            "Absolute perfect alignment of mind and muscle! Zero mistakes master! ✨🎯",
            "Zen state flow! Absolute quietness and flawless performance! 🕉️✨",
            "Zen master is highly proud of your flawless hit records today! 💎🔥"
        ],
        'typingdost_happy.webp': [
            "Wow, mascot is dancing with happiness! Maza aa gaya aaj toh! 💃✨",
            "Super happy mascot! Keyboard is literally smiling with your rhythm! 😄⌨️",
            "Arey wah! Fingers are making sweet melodies today, dost! 🎵🔥",
            "Very happy feedback! Mascot is smiling ear-to-ear! Keep rocking! 🌟👍"
        ],
        'typingdost_sleeping.webp': [
            "Arey utho, dost! Keyboard is literally sleeping! Wake up! 😴⌨️",
            "Sleeping beauty mode! Let's shake those fingers and wake the screen up! 😴⚡",
            "Slow inputs! Mascot fell asleep waiting for next word! 😴🎯",
            "Koi baat nahi, stretch your fingers, drink some water and try again! 🧘‍♀️🌿"
        ],
        'typingdost_cool.webp': [
            "Too cool for keyboard, bro! Smooth sliding flow, absolute chill vibe! 😎✨",
            "Cool neon glasses are glowing! Chill but excellent typing speed! 😎⚡",
            "Slick style! Mascot is absolutely looking swagger with your WPM! 🕶️🔥",
            "Vibe check passed! You are the coolest typist in this lobby! 😎🛸"
        ],
        'typingdost_determined.webp': [
            "Concentrated focus! You are super close to beast levels, dost! 💪🚀",
            "Determination is absolute key! Keep typing with this active focus! 🏁⚡",
            "Determined mascot is watching your fingers closely! Almost there! 💪🎯",
            "Outstanding resolution! Daily effort will naturally push your score higher! 🌟🧘"
        ],
        'typingdost_mindblown.webp': [
            "O teri! Minds are literally blown! Insane performance index, bro! 🤯💥",
            "Brain cells glitched out! Mascot is completely speechless! 🤯🛸",
            "Unbelievable hits! Keyboard speed is touching maximum parameters! 🤯🔥",
            "Is this real life or coding matrix simulation? Absolutely mindblowing! 🤯💎"
        ]
    },
    hindi: {
        'typingdost_ninja.webp': [
            "सुपरसोनिक साइबर-निंजा स्पीड! आपकी उंगलियां कीबोर्ड पर साये की तरह चल रही हैं! ⚔️💨",
            "अरे निंजा, गजब की स्पीड! हर स्ट्रोक पर एक प्रहार! 🗡️🔥",
            "उंगलियां साए की तरह घूम रही हैं! अल्टीमेट साइलेंट स्पीड मोड अनलॉक! 🥷✨",
            "निंजा योद्धा जैसी सटीकता! आपके रिफ्लेक्स देखकर मैस्कॉट बहुत प्रभावित है! 🌟🚀"
        ],
        'typingdost_hacker.webp': [
            "डेटाबेस पूरी तरह से हैक हो गया है! आपकी उंगलियों के सामने सिस्टम कांप रहा है! 💾💻",
            "गजब! सर्वर टर्मिनल एक्सेस कुछ ही सेकंड में डिक्रिप्ट हो गया! हैकर बॉस! 🤖👾",
            "मेनफ्रेम बायपास हो गया! ऐसा लगता है सीधे टेक्स्ट ब्लॉक इंजेक्ट कर दिया! ⌨️⚡",
            "कीबोर्ड पर आग लगी है! 100% साइबर हैकिंग फ्लो हासिल किया! 🚀💥"
        ],
        'typingdost_glitch.webp': [
            "WPM ने आयाम की सीमा तोड़ दी! फ्रेम रेट आपकी स्पीड का मुकाबला नहीं कर पा रहे! 🌀🚀",
            "आप इतनी तेजी से टाइप कर रहे हैं कि इंजन का फिजिक्स लूप टूट रहा है! 🤖💥",
            "मैट्रिक्स में गड़बड़ी! सीपीयू को आपकी उंगलियों का मुकाबला करने के लिए स्पीड बढ़ानी होगी! 💻✨",
            "अनंत टाइमलाइन ग्लिच अनलॉक! आज समय भी आपकी उंगलियों के साथ मुड़ रहा है! 🌌🔥"
        ],
        'typingdost_racer.webp': [
            "सुपरसोनिक रेस ट्रैक! F1 स्पीड हासिल की! टायर कीबोर्ड पर धुआं उड़ा रहे हैं! 🏎️💨",
            "टॉप गियर, दोस्त! छठा स्पीड इंडेक्स टच कर दिया! असली रेसिंग चैंपियन! 🏁⚡",
            "उंगलियां 300 किमी/घंटा की रफ्तार से दौड़ रही हैं! सुपरचार्ज्ड नाइट्रो स्पीड अनलॉक! 🚗🔥",
            "बेजोड़ स्पीड कर्नल! रेसिंग इंजन को आसानी से रेड-लाइन कर रहे हैं! 📈🎯"
        ],
        'typingdost_genius.webp': [
            "असाधारण बौद्धिक क्षमता! उंगलियों में अल्बर्ट आइंस्टीन जैसी ब्रेन वेव्स! 🧠🚀",
            "क्वांटम स्तर की टाइपिंग! गणना और कीस्ट्रोक्स पूरी तरह से मेल खा रहे हैं! 🌟💎",
            "आइंस्टीन को आप पर गर्व है! कीबोर्ड फ्रीक्वेंसी बिल्कुल जीनियस स्तर की है! 💡⚡",
            "सुपर इंटेलिजेंस फ्लो! गति और सटीकता का सटीक संतुलन! 📈🔥"
        ],
        'typingdost_gamer.webp': [
            "प्रो गेमर APM हासिल की! ट्रिपल-किल टाइपिंग स्ट्रीक! 🎮🔥",
            "हाई-परफॉर्मेंस गेमर मोड! मैस्कॉट आपकी गति देखकर झूम रहा है! 👾⚡",
            "कीबोर्ड बटन मैश पूरी तरह से ऑप्टिमाइज्ड! ई-स्पोर्ट्स रेडी स्पीड! 🕹️✨",
            "GG WP! ऐसा लगता है उंगलियों में असली गेमिंग एड्रेनालाईन बह रहा है! 🚀🎮"
        ],
        'typingdost_coffee.webp': [
            "डबल शॉट कैफीन एक्टिवेटेड! उंगलियां हाइपरएक्टिव मोड में कांप रही हैं! ☕🚀",
            "गर्म कॉफी कप की ताकत! लगता है सीधे एनर्जी ड्रिंक का असर है! ⚡💨",
            "तेज कैफीनयुक्त रिदम! आपकी उंगलियों को रोकना आज नामुमकिन है! ☕🔥",
            "मैस्कॉट कहता है: कैफीन बूस्ट आपकी टाइपिंग स्पीड के साथ सिंक हो गया है! 🌟👍"
        ],
        'typingdost_cosmic.webp': [
            "जीरो-ग्रेविटी फ्लो! स्पेस पार्टिकल्स आपकी WPM के साथ फैल रहे हैं! 🌌✨",
            "ब्रह्मांडीय यात्री का दर्जा! आपकी टाइपिंग रिदम से प्रकाश की किरणें मुड़ रही हैं! 🛸🚀",
            "तारों के बीच तैरना, दोस्त! अविश्वसनीय रूप से स्मूथ ऑर्बिट टाइपिंग! 🌠💎",
            "ब्रह्मांड को आपकी गति पर गर्व है! अंतरिक्ष की खोज जारी रखें! 🛸🔥"
        ],
        'typingdost_noob.webp': [
            "अरे मेरे प्यारे बॉक्स-हेलमेट नौसिखिया दोस्त! दिल छोटा मत कर, तू जल्दी प्रो बनेगा! 📦🌱",
            "प्यारी सी मुस्कान कहती है: रोज़ अभ्यास करो और जल्द ही डेटाबेस हैक करना सीखोगे! 📦💪",
            "शुरुआती उत्साह! सही बटन दबाते रहो, मैं हमेशा आपके साथ हूँ! 🤗🌿",
            "कीबोर्ड की सीढ़ी का पहला कदम! मैस्कॉट आपके सच्चे प्रयास से बहुत खुश है! 🌟👍"
        ],
        'typingdost_monk.webp': [
            "धीमा और बिल्कुल शांत फोकस! कीबोर्ड ध्यान ही असली रास्ता है! 🧘‍♂️✨",
            "एक-एक करके पत्थर कीबोर्ड पर टाइपिंग! धैर्य ही आपको टाइपिंग मास्टर बनाएगा! 🕉️🌿",
            "शांति और धैर्य! स्पीड बाद में आती है, मन की शांति पहले है! 🧘‍♂️🧘",
            "ज्ञानी साधु आपके शांत प्रयासों से बेहद संतुष्ट हैं! रोज़ अभ्यास करें! 🕉️💎"
        ],
        'typingdost_rage.webp': [
            "अरे आराम से, भाई! गुस्से से लाल स्क्रीन! कीकैप्स उड़ रहे हैं! 🤬💔",
            "शांत हो जाओ, दोस्त! जल्दबाजी में गलतियाँ करने से गति कम होगी! गलतियाँ ज्यादा हैं! 🛑🛠️",
            "कीबोर्ड तोड़ने वाली स्पीड लेकिन गलतियों की बाढ़! मैस्कॉट पसीना बहा रहा है! 😢⌨️",
            "गुस्से में टाइपिंग लेकिन सटीकता गायब! गलती पर रुकें और संतुलन बनाएं! 🧠🎯"
        ],
        'typingdost_zen.webp': [
            "सटीकता 100%! त्रुटिहीन कमल जैसी ध्यान अवस्था! कोई गलती नहीं! 🧘‍♂️💎",
            "मन और मांसपेशियों का सटीक संतुलन! जीरो मिस्टेक मास्टर! ✨🎯",
            "ज़ेन स्टेट फ्लो! पूर्ण शांति और त्रुटिहीन प्रदर्शन! 🕉️✨",
            "ज़ेन मास्टर को आज आपके त्रुटिहीन हिट्स पर बेहद गर्व है! 💎🔥"
        ],
        'typingdost_happy.webp': [
            "वाह, मैस्कॉट खुशी से नाच रहा है! मज़ा आ गया आज तो! 💃✨",
            "सुपर हैप्पी मैस्कॉट! कीबोर्ड आपकी रिदम के साथ मुस्कुरा रहा है! 😄⌨️",
            "अरे वाह! उंगलियां आज मधुर धुनें बना रही हैं! 🎵🔥",
            "बहुत खुश प्रतिक्रिया! मैस्कॉट खुलकर मुस्कुरा रहा है! कमाल करते रहो! 🌟👍"
        ],
        'typingdost_sleeping.webp': [
            "अरे उठो, दोस्त! कीबोर्ड सच में सो रहा है! जागो! 😴⌨️",
            "स्लीपिंग ब्यूटी मोड! उंगलियों को हिलाएं और स्क्रीन को जगाएं! 😴⚡",
            "धीमी गति! मैस्कॉट अगले शब्द का इंतजार करते हुए सो गया! 😴🎯",
            "कोई बात नहीं, उंगलियों को फैलाएं, थोड़ा पानी पिएं और फिर कोशिश करें! 🧘‍♀️🌿"
        ],
        'typingdost_cool.webp': [
            "बहुत कूल अंदाज है! स्मूथ और शांत माहौल! 😎✨",
            "चमकदार नियॉन चश्मा! शांत लेकिन शानदार टाइपिंग स्पीड! 😎⚡",
            "शानदार स्टाइल! मैस्कॉट आपके WPM के साथ बिल्कुल स्वैगर लग रहा है! 🕶️🔥",
            "वाइब चेक पास! आप इस लॉबी के सबसे कूल टाइपिस्ट हैं! 😎🛸"
        ],
        'typingdost_determined.webp': [
            "गहन एकाग्रता! आप बेस्ट लेवल के बहुत करीब हैं! 💪🚀",
            "दृढ़ संकल्प ही असली कुंजी है! इसी फोकस के साथ टाइपिंग जारी रखें! 🏁⚡",
            "दृढ़ संकल्प से भरा मैस्कॉट आपकी उंगलियों को देख रहा है! बस थोड़ा और! 💪🎯",
            "शानदार संकल्प! रोज़ाना अभ्यास से आपका स्कोर अपने आप बढ़ जाएगा! 🌟🧘"
        ],
        'typingdost_mindblown.webp': [
            "अरे बाप रे! दिमाग चकरा गया! सचमुच गजब का प्रदर्शन! 🤯💥",
            "दिमाग के सेल्स काम करना बंद कर गए! मैस्कॉट पूरी तरह अवाक है! 🤯🛸",
            "अविश्वसनीय हिट्स! कीबोर्ड स्पीड अधिकतम सीमा को छू रही है! 🤯🔥",
            "क्या यह सच है या कोई कोडिंग सिमुलेशन? सचमुच हैरान करने वाला! 🤯💎"
        ]
    }
};

const STATS_MASCOT_COMMENTS_BY_LANG = {
    english: {
        'typingdost_zen.webp': [
            "Absolute peace! 🕉️ 0 mistakes are giving me a spiritual high! WPM is pure zen flow! ✨",
            "Aura of perfect accuracy! Flawless keys, friend! Even my third eye is glowing! 🧘‍♂️💎",
            "Absolute focus index! Accuracy is so pure, I am literally levitating! 🕉️🚀"
        ],
        'typingdost_ninja.webp': [
            "Supersonic speed, ninja style! 🥷 Keycaps are crying after that slashing! 🗡️⚡",
            "Cyber kunai hits! Your fingers are moving faster than my shadow clones! 🥷🔥",
            "Supersonic strikes! Total stealth WPM, keyboard didn't even notice what hit it! 🥷💥"
        ],
        'typingdost_hacker.webp': [
            "Matrix cracked! 💻 Admin access granted to your supersonic fingers, system root compromised! 🕶️✨",
            "Firewall bypassed! Cyber security division is looking for you after this speed! 💻🛸",
            "Supersonic compiler hacks! I am stealing this WPM script for my database! 💻🎯"
        ],
        'typingdost_genius.webp': [
            "Quantum mechanics of typing! 🧠 Relativity theory suggests you are typing at the speed of light! 🪐🛸",
            "Calculated fingers! The mathematics of your accuracy is making Einstein proud! 🧠💎",
            "Big brain moves! Absolute logic flow, no redundant keypresses detected! 🧠🔥"
        ],
        'typingdost_gamer.webp': [
            "Cheat code activated! 🎮 Neon mechanical switches are completely smoking, highscore crushed! 🕹️⚡",
            "Apex level WPM! Pro gamer lobby cleared, you are the final boss! 🎮🚀",
            "Supersonic combo streak! GG, friend, you unlocked typing cheatcodes! 🎮👾"
        ],
        'typingdost_coffee.webp': [
            "Overcaffeinated speed! ☕ Neon adrenaline rush! Keep grinding, no sleep mode active! ☕🔥",
            "Double espresso keystrokes! My caffeine sensors are buzzing at max capacity! ☕⚡",
            "Adrenaline overdrive! Keyboard is vibrating, mug is steaming! Supersonic energy! ☕🚀"
        ],
        'typingdost_rage.webp': [
            "Keyboard destruction 100%! 😡 Keycaps flying everywhere, calm down, spare the spacebar! 💥👿",
            "Extreme pressure typing! Spacebar is complaining to the developer! 😡🔨",
            "Anger management WPM! Pure rage-induced speed! Incredible but scary! 😡🔥"
        ],
        'typingdost_noob.webp': [
            "Cardboard helmet is shaking! 📦 A bit slow but sweet effort! Noob title update! 📦😄",
            "Noob power! We will conquer the coding world slowly, cardboard box is proud! 📦✨",
            "Keyboard is confused by your movements! Slow down, learn row layout first! 📦🎯"
        ],
        'typingdost_racer.webp': [
            "F1 racing pace! 🏎️ No speed breaks, nitro booster is fully engaged on this road! 🏁⚡",
            "Speedometer is broken! Absolute supersonic drifts on the keyboard! 🏎️💨",
            "Fingers are driving at 300km/h! Cyber police is chasing your WPM! 🏎️🚨"
        ],
        'typingdost_cosmic.webp': [
            "Interstellar WPM! 🪐 Floating beyond gravity waves, typing in deep space vacuum! 🛸🌌",
            "Astral projection typing! Galaxies are spinning with your keystrokes! 🪐🛸",
            "Cosmic telemetry! Sending your stats back to Mars, alien technology! 🪐👽"
        ],
        'typingdost_monk.webp': [
            "Slow stone hits! 🕉️ Patience is key, fast is not always best. Peace and accuracy! 🪨🧘‍♂️",
            "Stone monk is proud of your stable pacing, very minimal mistake count! 🪨✨",
            "Mindful typing! Every keypress has a deep purpose today! 🪨🕉️"
        ],
        'typingdost_glitch.webp': [
            "System overload! 👾 Matrix code glitched out, screen is tearing with your supersonic speed! ⚡🛸",
            "Error 404: Speed too high! Graphic artifacts everywhere! Rebooting typing engine! 👾💻",
            "Chromatic aberration shift! Reality is breaking apart, glitch god! 👾🌀"
        ],
        'typingdost_sleeping.webp': [
            "Mascot is still sleeping... 😴 Please wake up or drink some cold water! 😴💤",
            "Zzz... WPM went to dreamland! Let's reboot the typing engine! 😴🌌",
            "Sleeping mode! Spacebar was used as a pillow, rise and shine! 😴"
        ],
        'typingdost_happy.webp': [
            "Dancing with joy! 💃 Mascot is doing a dynamic breakdance for your decent performance! 🎉✨",
            "Awesome job! Happy vibes, happy hands, happy keys! Let's party! 😄🎵",
            "Smiling face mascot! Sweet victory of typing accuracy! 😄🏆"
        ],
        'typingdost_cool.webp': [
            "Vibe check 100% passed! 😎 Smooth mechanics, cyberpunk glasses are glowing with cool! 😎🛸",
            "Cool swagger! You are definitely the king of the chill typing lobby! 😎🕶️",
            "Smooth operator! Silent keys, high style quotient! 😎🔥"
        ],
        'typingdost_determined.webp': [
            "Active dedication! 💪 Almost there, don't stop grinding, practice will make you elite! 💪🎯",
            "Determined look! Focus is rising, muscle memory is building! 💪🧘",
            "Great determination! Solid posture, keep typing and your speed will soar! 💪🏁"
        ],
        'typingdost_mindblown.webp': [
            "Brain cells are smoking! 🤯 Unbelievable stats index, literally blew my mind! 🧠💥",
            "Speechless reactions! I need to buy a new CPU after analyzing this WPM! 🤯💻",
            "Mind blown to pieces! Keyboard is officially declared a lethal weapon! 🤯🏆"
        ]
    },
    hinglish: {
        'typingdost_zen.webp': [
            "Bhai, absolute peace! 🕉️ 0 mistakes are giving me spiritual high! WPM is pure zen flow! ✨",
            "Aura of perfect accuracy! Flawless keys, dost! Even my third eye is glowing! 🧘‍♂️💎",
            "Absolute focus index! Accuracy is so pure, I am literally levitating! 🕉️🚀"
        ],
        'typingdost_ninja.webp': [
            "Supersonic speed, ninja style! 🥷 Keycaps are crying after that slashing! 🗡️⚡",
            "Cyber kunai hits! Your fingers are moving faster than my shadow clones! 🥷🔥",
            "Supersonic strikes! Total stealth WPM, keyboard didn't even notice what hit it! 🥷💥"
        ],
        'typingdost_hacker.webp': [
            "Matrix cracked! 💻 Admin access granted to your supersonic fingers, system root compromised! 🕶️✨",
            "Firewall bypassed! Cyber security division is looking for you after this speed! 💻🛸",
            "Supersonic compiler hacks! I am stealing this WPM script for my database! 💻🎯"
        ],
        'typingdost_genius.webp': [
            "Quantum mechanics of typing! 🧠 Relativity theory suggests you are typing at speed of light! 🪐🛸",
            "Calculated fingers! The mathematics of your accuracy is making Einstein proud! 🧠💎",
            "Big brain moves! Absolute logic flow, no redundant keypresses detected! 🧠🔥"
        ],
        'typingdost_gamer.webp': [
            "Cheat code activated! 🎮 Neon mechanical switches are completely smoking, highscore crushed! 🕹️⚡",
            "Apex level WPM! Pro gamer lobby cleared, you are the final boss! 🎮🚀",
            "Supersonic combo streak! GG, dost, you literally unlocked typing cheatcodes! 🎮👾"
        ],
        'typingdost_coffee.webp': [
            "Overcaffeinated speed! ☕ Neon adrenaline rush! Keep grinding, no sleep mode active! ☕🔥",
            "Double espresso keystrokes! My caffeine sensors are buzzing at max capacity! ☕⚡",
            "Adrenaline overdrive! Keyboard is vibrating, mug is steaming! Supersonic energy! ☕🚀"
        ],
        'typingdost_rage.webp': [
            "Keyboard destruction 100%! 😡 Keycaps flying everywhere, calm down bro, spare the spacebar! 💥👿",
            "Extreme pressure typing! Spacebar is complaining to the developer! 😡🔨",
            "Anger management WPM! Pure rage-induced speed! Incredible but scary! 😡🔥"
        ],
        'typingdost_noob.webp': [
            "Arey cardboard helmet is shaking! 📦 Thoda slow but sweet efforts! Noob title update! 📦😄",
            "Noob power! We will conquer the coding world slowly, cardboard box is proud! 📦✨",
            "Keyboard is confused by your movements! Slow down, learn row layout first! 📦🎯"
        ],
        'typingdost_racer.webp': [
            "F1 racing pace! 🏎️ No speed breaks, nitro booster is fully engaged on this road! 🏁⚡",
            "Speedometer is broken! Absolute supersonic drifts on the keyboard! 🏎️💨",
            "Fingers are driving at 300km/h! Cyber police is chasing your WPM! 🏎️🚨"
        ],
        'typingdost_cosmic.webp': [
            "Interstellar WPM! 🪐 Floating beyond gravity waves, typing in deep space vacuum! 🛸🌌",
            "Astral projection typing! Galaxies are spinning with your keystrokes! 🪐🛸",
            "Cosmic telemetry! Sending your stats back to Mars, alien technology! 🪐👽"
        ],
        'typingdost_monk.webp': [
            "Slow stone hits! 🕉️ Patience is virtual, fast is not always best. Peace and accuracy! 🪨🧘‍♂️",
            "Stone monk is proud of your stable pacing, very minimal mistake count! 🪨✨",
            "Mindful typing! Every keypress has a deep purpose today, dost! 🪨🕉️"
        ],
        'typingdost_glitch.webp': [
            "System overload! 👾 Matrix code glitched out, screen is tearing with your supersonic speed! ⚡🛸",
            "Error 404: Speed too high! Graphic artifacts everywhere! Rebooting typing engine! 👾💻",
            "Chromatic aberration shift! Reality is breaking apart, glitch god! 👾🌀"
        ],
        'typingdost_sleeping.webp': [
            "Mascot is still sleeping... 😴 Please wake up or drink some cold water! 😴💤",
            "Zzz... WPM went to dreamland! Let's reboot the typing engine! 😴🌌",
            "Sleeping mode! Spacebar was used as a pillow, rise and shine! 😴"
        ],
        'typingdost_happy.webp': [
            "Dancing with joy! 💃 Mascot is doing dynamic breakdance for your decent performance! 🎉✨",
            "Maza aa gaya! Happy vibes, happy hands, happy keys! Let's party! 😄🎵",
            "Smiling face mascot! Sweet sweet victory of typing accuracy! 😄🏆"
        ],
        'typingdost_cool.webp': [
            "Vibe check 100% passed! 😎 Smooth mechanics, cyberpunk glasses are glowing with cool! 😎🛸",
            "Cool swagger! You are definitely the king of chill typing lobby! 😎🕶️",
            "Smooth operator! Silent keys, high style quotient! 😎🔥"
        ],
        'typingdost_determined.webp': [
            "Active dedication! 💪 Almost there, don't stop grinding, practice will make you elite! 💪🎯",
            "Determined look! Focus is rising, muscle memory is building! 💪🧘",
            "Great determination! Solid posture, keep writing and speed will fly! 💪🏁"
        ],
        'typingdost_mindblown.webp': [
            "Brain cells are smoking! 🤯 Unbelievable stats index, literally blew my mind! 🧠💥",
            "Speechless reactions! I need to buy a new CPU after analyzing this WPM! 🤯💻",
            "Mind blown to pieces! Keyboard is officially declared a lethal weapon! 🤯🏆"
        ]
    },
    hindi: {
        'typingdost_zen.webp': [
            "सटीकता 100%! 🕉️ 0 गलतियां मुझे आध्यात्मिक आनंद दे रही हैं! गति पूर्ण शांति प्रवाह है! ✨",
            "सटीक सटीकता का आभामंडल! त्रुटिहीन कुंजियां, दोस्त! मेरी तीसरी आंख भी चमक रही है! 🧘‍♂️💎",
            "पूर्ण एकाग्रता! शुद्धता इतनी शुद्ध है कि मैं सचमुच तैर रहा हूँ! 🕉️🚀"
        ],
        'typingdost_ninja.webp': [
            "सुपरसोनिक स्पीड, निंजा स्टाइल! 🥷 कीकैप्स इस प्रहार के बाद रो रहे हैं! 🗡️⚡",
            "साइबर कुनाई हिट्स! आपकी उंगलियां मेरे शैडो क्लोन से भी तेज चल रही हैं! 🥷🔥",
            "सुपरसोनिक स्ट्राइक्स! पूर्ण गुप्त गति, कीबोर्ड को पता भी नहीं चला कि क्या हुआ! 🥷💥"
        ],
        'typingdost_hacker.webp': [
            "मैट्रिक्स क्रैक! 💻 आपकी सुपरसोनिक उंगलियों को एडमिन एक्सेस मिल गया है, सिस्टम रूट हैक! 🕶️✨",
            "फ़ायरवॉल बायपास! इस गति के बाद साइबर सुरक्षा विभाग आपको ढूंढ रहा है! 💻🛸",
            "सुपरसोनिक कंपाइलर हैक्स! मैं अपने डेटाबेस के लिए इस WPM स्क्रिप्ट को चुरा रहा हूँ! 💻🎯"
        ],
        'typingdost_genius.webp': [
            "टाइपिंग का क्वांटम मैकेनिक्स! 🧠 सापेक्षता का सिद्धांत कहता है कि आप प्रकाश की गति से टाइप कर रहे हैं! 🪐🛸",
            "गणीतिय उंगलियां! आपकी सटीकता का गणित आइंस्टीन को गौरवान्वित कर रहा है! 🧠💎",
            "बड़ा दिमाग! पूर्ण तर्क प्रवाह, कोई फालतू कीस्ट्रोक नहीं मिला! 🧠🔥"
        ],
        'typingdost_gamer.webp': [
            "चीट कोड एक्टिवेटेड! 🎮 नियॉन मैकेनिकल स्विच पूरी तरह से धुआं उड़ा रहे हैं, हाईस्कोर ध्वस्त! 🕹️⚡",
            "एपेक्स स्तर की WPM! प्रो गेमर लॉबी साफ, आप अंतिम बॉस हैं! 🎮🚀",
            "सुपरसोनिक कॉम्बो स्ट्रीक! जीजी, दोस्त, आपने सचमुच टाइपिंग चीट कोड अनलॉक कर लिए हैं! 🎮👾"
        ],
        'typingdost_coffee.webp': [
            "अत्यधिक कैफीनयुक्त गति! ☕ नियॉन एड्रेनालाईन रश! लगे रहो, कोई स्लीप मोड सक्रिय नहीं! ☕🔥",
            "डबल एस्प्रेसो कीस्ट्रोक्स! मेरे कैफीन सेंसर अधिकतम क्षमता पर बज रहे हैं! ☕⚡",
            "एड्रेनालाईन ओवरड्राइव! कीबोर्ड कांप रहा है, कप से भाप निकल रही है! सुपरसोनिक ऊर्जा! ☕🚀"
        ],
        'typingdost_rage.webp': [
            "कीबोर्ड विनाश 100%! 😡 कीकैप्स हर जगह उड़ रहे हैं, शांत हो जाओ भाई, स्पेसबार को छोड़ दो! 💥👿",
            "अत्यधिक दबाव वाली टाइपिंग! स्पेसबार डेवलपर से शिकायत कर रहा है! 😡🔨",
            "क्रोध से प्रेरित गति! अविश्वसनीय लेकिन डरावना! 😡🔥"
        ],
        'typingdost_noob.webp': [
            "कार्डबोर्ड हेलमेट हिल रहा है! 📦 थोड़ा धीमा लेकिन प्यारा प्रयास! नौसिखिया टाइटल अपडेट! 📦😄",
            "नौसिखिया शक्ति! हम धीरे-धीरे कोडिंग की दुनिया जीतेंगे, कार्डबोर्ड बॉक्स को गर्व है! 📦✨",
            "कीबोर्ड आपकी गतिविधियों से भ्रमित है! धीमे हो जाओ, पहले रो लेआउट सीखें! 📦🎯"
        ],
        'typingdost_racer.webp': [
            "F1 रेसिंग स्पीड! 🏎️ कोई स्पीड ब्रेकर नहीं, नाइट्रो बूस्टर इस सड़क पर पूरी तरह सक्रिय है! 🏁⚡",
            "स्पीडोमीटर टूट गया है! कीबोर्ड पर पूर्ण सुपरसोनिक ड्रिफ्ट! 🏎️💨",
            "उंगलियां 300 किमी/घंटा की रफ्तार से दौड़ रही हैं! साइबर पुलिस आपके WPM का पीछा कर रही है! 🏎️🚨"
        ],
        'typingdost_cosmic.webp': [
            "अंतरतारकीय WPM! 🪐 गुरुत्वाकर्षण तरंगों से परे तैरना, गहरे अंतरिक्ष निर्वात में टाइपिंग! 🛸🌌",
            "तारकीय टाइपिंग! ब्रह्मांड आपके कीस्ट्रोक्स के साथ घूम रहा है! 🪐🛸",
            "कॉस्मिक टेलीमेट्री! आपके आंकड़े मंगल ग्रह पर भेजे जा रहे हैं, विदेशी तकनीक! 🪐👽"
        ],
        'typingdost_monk.webp': [
            "धीमे पत्थर की मार! 🕉️ धैर्य ही कुंजी है, तेज हमेशा सबसे अच्छा नहीं होता। शांति और सटीकता! 🪨🧘‍♂️",
            "पत्थर के साधु को आपकी स्थिर गति पर गर्व है, बहुत कम गलती दर! 🪨✨",
            "सचेत टाइपिंग! आज हर कीस्ट्रोक का एक गहरा उद्देश्य है! 🪨🕉️"
        ],
        'typingdost_glitch.webp': [
            "सिस्टम ओवरलोड! 👾 मैट्रिक्स कोड ग्लिच हो गया, स्क्रीन आपकी सुपरसोनिक गति से फट रही है! ⚡🛸",
            "त्रुटि 404: गति बहुत अधिक! हर जगह ग्राफिक कलाकृतियां! टाइपिंग इंजन को रीबूट कर रहा हूँ! 👾💻",
            "हकीकत टूट रही है, ग्लिच गॉड! 👾🌀"
        ],
        'typingdost_sleeping.webp': [
            "मैस्कॉट अभी भी सो रहा है... 😴 कृपया जागें या थोड़ा ठंडा पानी पिएं! 😴💤",
            "Zzz... WPM सपनों की दुनिया में चला गया! टाइपिंग इंजन को रीबूट करें! 😴🌌",
            "स्लीपिंग मोड! स्पेसबार का इस्तेमाल तकिये की तरह किया गया था, जागें और चमकें! 😴"
        ],
        'typingdost_happy.webp': [
            "खुशी से नाचना! 💃 मैस्कॉट आपके अच्छे प्रदर्शन के लिए ब्रेकडांस कर रहा है! 🎉✨",
            "शानदार काम! हैप्पी वाइब्स, हैप्पी हैंड्स, हैप्पी कीज़! पार्टी शुरू करें! 😄🎵",
            "मुस्कुराता हुआ मैस्कॉट! टाइपिंग सटीकता की प्यारी जीत! 😄🏆"
        ],
        'typingdost_cool.webp': [
            "कीबोर्ड के लिए बहुत कूल! स्मूथ स्लाइडिंग फ्लो, बिल्कुल शांत वाइब! 😎✨",
            "चमकदार नियॉन चश्मा! शांत लेकिन बेहतरीन टाइपिंग गति! 😎⚡",
            "शानदार स्टाइल! मैस्कॉट आपके WPM के साथ बिल्कुल स्वैगर लग रहा है! 🕶️🔥",
            "वाइब चेक पास! आप इस लॉबी के सबसे कूल टाइपिस्ट हैं! 😎🛸"
        ],
        'typingdost_determined.webp': [
            "गहन एकाग्रता! आप बेस्ट लेवल के बहुत करीब हैं! 💪🚀",
            "दृढ़ संकल्प ही असली कुंजी है! इसी एकाग्रता के साथ टाइपिंग जारी रखें! 🏁⚡",
            "दृढ़ संकल्प से भरा मैस्कॉट आपकी उंगलियों को करीब से देख रहा है! बस थोड़ा और! 💪🎯",
            "शानदार संकल्प! रोज़ाना अभ्यास से आपका स्कोर अपने आप बढ़ जाएगा! 🌟🧘"
        ],
        'typingdost_mindblown.webp': [
            "दिमाग सचमुच उड़ गया! गजब का प्रदर्शन! 🧠💥",
            "दिमाग के सेल्स काम करना बंद कर गए! मैस्कॉट पूरी तरह अवाक है! 🤯🛸",
            "अविश्वसनीय हिट्स! कीबोर्ड स्पीड अधिकतम सीमा को छू रही है! 🤯🔥",
            "क्या यह सच है या कोडिंग सिमुलेशन? सचमुच हैरान करने वाला! 🤯💎"
        ]
    }
};

function showMascotPopup(wpm, accuracy, score, isGame) {
    let category = 'decent';
    let poseImg = 'typingdost_determined.webp';
    
    if (accuracy < 90 && !isGame) {
        category = 'low_accuracy';
        const poses = ['typingdost_mindblown.webp', 'typingdost_rage.webp'];
        poseImg = poses[Math.floor(Math.random() * poses.length)];
    } else if (accuracy >= 98 && !isGame) {
        category = 'zen_accuracy';
        poseImg = 'typingdost_zen.webp';
    } else {
        const speedVal = isGame ? Math.round(score / 15) : wpm; // approximate wpm for game score
        if (speedVal >= 80) {
            category = 'legendary';
            const poses = ['typingdost_cool.webp', 'typingdost_mindblown.webp', 'typingdost_happy.webp', 'typingdost_ninja.webp', 'typingdost_hacker.webp', 'typingdost_glitch.webp'];
            poseImg = poses[Math.floor(Math.random() * poses.length)];
        } else if (speedVal >= 55) {
            category = 'beast';
            const poses = ['typingdost_happy.webp', 'typingdost_cool.webp', 'typingdost_racer.webp', 'typingdost_genius.webp'];
            poseImg = poses[Math.floor(Math.random() * poses.length)];
        } else if (speedVal >= 30) {
            category = 'decent';
            const poses = ['typingdost_determined.webp', 'typingdost_coffee.webp', 'typingdost_gamer.webp', 'typingdost_cosmic.webp'];
            poseImg = poses[Math.floor(Math.random() * poses.length)];
        } else {
            category = 'warmup';
            const poses = ['typingdost_sleeping.webp', 'typingdost_noob.webp', 'typingdost_monk.webp'];
            poseImg = poses[Math.floor(Math.random() * poses.length)];
        }
    }

    const activeLang = (typeof currentLearningLang !== 'undefined' && currentLearningLang) 
        ? currentLearningLang.toLowerCase() 
        : (localStorage.getItem('typingDostLang') || 'english');

    const dialogues = CHARACTER_DIALOGUES_BY_LANG[activeLang] || CHARACTER_DIALOGUES_BY_LANG.english;
    const comments = dialogues[poseImg] || dialogues['typingdost_determined.webp'];
    const comment = comments[Math.floor(Math.random() * comments.length)];
    
    // Update DOM
    const mascotImg = document.getElementById('mascot-popup-img');
    if (mascotImg) mascotImg.src = poseImg;
    const mascotBubbleText = document.getElementById('mascot-bubble-text');
    if (mascotBubbleText) mascotBubbleText.innerText = comment;

    // Update Stats/Result Modal Mascot Feedback dynamically
    const resMascotImg = document.getElementById('result-mascot-img');
    const resMascotText = document.getElementById('result-mascot-text');
    if (resMascotImg && resMascotText) {
        resMascotImg.src = poseImg;
        
        const statsMap = STATS_MASCOT_COMMENTS_BY_LANG[activeLang] || STATS_MASCOT_COMMENTS_BY_LANG.english;
        const statsComments = statsMap[poseImg] || statsMap['typingdost_determined.webp'];
        const statsComment = statsComments[Math.floor(Math.random() * statsComments.length)];
        resMascotText.innerText = statsComment;
    }
    
    // Remove previous animation classes and apply Google Flow dynamic class to popup and result mascots
    const mascotClasses = ['mascot-ani-sleeping', 'mascot-ani-happy', 'mascot-ani-cool', 'mascot-ani-determined', 'mascot-ani-mindblown', 'mascot-ani-zen', 'mascot-ani-ninja', 'mascot-ani-hacker', 'mascot-ani-genius', 'mascot-ani-gamer', 'mascot-ani-coffee', 'mascot-ani-rage', 'mascot-ani-noob', 'mascot-ani-racer', 'mascot-ani-cosmic', 'mascot-ani-monk', 'mascot-ani-glitch'];
    const baseName = poseImg.replace('typingdost_', '').replace('.png', '');
    const animClass = 'mascot-ani-' + baseName;
    
    if (mascotImg) {
        mascotImg.classList.remove(...mascotClasses);
        mascotImg.classList.add(animClass);
    }
    if (resMascotImg) {
        resMascotImg.classList.remove(...mascotClasses);
        resMascotImg.classList.add(animClass);
    }
    
    const wpmValEl = document.getElementById('mascot-wpm-val');
    const accuracyWrap = document.getElementById('mascot-accuracy-wrap');
    
    if (isGame) {
        if (wpmValEl) {
            wpmValEl.innerText = score;
            if (wpmValEl.nextElementSibling) wpmValEl.nextElementSibling.innerText = "Score";
        }
        if (accuracyWrap) accuracyWrap.style.display = 'none';
    } else {
        if (wpmValEl) {
            wpmValEl.innerText = wpm;
            if (wpmValEl.nextElementSibling) wpmValEl.nextElementSibling.innerText = "WPM";
        }
        if (accuracyWrap) {
            accuracyWrap.style.display = 'block';
            const accValEl = document.getElementById('mascot-accuracy-val');
            if (accValEl) accValEl.innerText = accuracy;
        }
    }
    
    const mascotModalEl = document.getElementById('mascot-modal');
    if (mascotModalEl) mascotModalEl.classList.remove('hidden');
}

// Bind Mascot Modal Buttons
const mascotCloseBtn = document.getElementById('mascot-close-btn');
const mascotDetailsBtn = document.getElementById('mascot-details-btn');
const mascotModal = document.getElementById('mascot-modal');


if (mascotCloseBtn) {
    mascotCloseBtn.addEventListener('click', () => {
        mascotModal.classList.add('hidden');
        if (currentLesson === 'game') {
            startGame();
        } else {
            resetGame();
        }
    });
}

if (mascotDetailsBtn) {
    mascotDetailsBtn.addEventListener('click', () => {
        mascotModal.classList.add('hidden');
        modal.classList.remove('hidden');
    });
}

// Init
document.addEventListener('click', (e) => {
    // Prevent auto focusing when user clicks on menus, inputs, buttons, headers, footers or virtual keyboard
    const isControl = e.target.closest('button, a, select, input, textarea, details, summary, .theme-dropdown, .practice-dropdown, .modal-content, footer, header, #mobile-virtual-keyboard, .mascot-greeting-widget, #cyber-drawer, #seo-about-section');
    if (isControl) return;

    focusInput();
    initAudio();
});
loadNewText();

// ---- CURSOR PARTICLE TRAIL ANIMATION ----
const cursorCanvas = document.getElementById('cursor-trail-canvas');
const cursorCtx = cursorCanvas ? cursorCanvas.getContext('2d') : null;
let trailColor = '#00ffff';
let trailParticles = [];
let lastMousePos = { x: 0, y: 0 };
let hasMovedMouse = false;

function updateTrailColor() {
    setTimeout(() => {
        if (document.body) {
            trailColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#00ffff';
        }
    }, 50);
}

if (cursorCanvas && cursorCtx) {
    // Resize canvas
    function resizeCursorCanvas() {
        cursorCanvas.width = window.innerWidth;
        cursorCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCursorCanvas);
    resizeCursorCanvas();

    // Characters list to spawn
    const trailChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

    class TrailParticle {
        constructor(x, y, isExplosion = false, customColor = null) {
            this.x = x;
            this.y = y;
            this.color = customColor || trailColor;
            this.isExplosion = isExplosion;
            this.alpha = 1.0;
            this.char = trailChars[Math.floor(Math.random() * trailChars.length)];
            this.life = 1.0; // Lifetime goes from 1.0 to 0.0

            if (isExplosion) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 8 + 3;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.decay = Math.random() * 0.008 + 0.004;
                this.startSize = Math.floor(Math.random() * 6) + 8;    // starts small: 8-14px
                this.endSize = Math.floor(Math.random() * 12) + 22;   // grows to: 22-34px
            } else {
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = Math.random() * 1.5 + 1.0; // soft initial falling speed
                this.decay = Math.random() * 0.012 + 0.008; // slightly faster decay for cleaner trail
                this.startSize = Math.floor(Math.random() * 4) + 6;    // starts small: 6-10px
                this.endSize = Math.floor(Math.random() * 8) + 16;    // grows to: 16-24px
            }
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Apply realistic gravity acceleration
            this.vy += this.isExplosion ? 0.08 : 0.05;

            if (this.isExplosion) {
                this.vx *= 0.97;
                this.vy *= 0.97;
            } else {
                // Smooth sine wave horizontal sway for matrix-like drift
                this.vx += Math.sin(this.life * 8 + this.startSize) * 0.08;
                this.vx *= 0.98;
            }

            // Real-time letter cycling for dynamic code rain effect
            if (Math.random() < 0.07) {
                this.char = trailChars[Math.floor(Math.random() * trailChars.length)];
            }

            this.alpha -= this.decay;
            this.life = Math.max(0, this.life - this.decay);
        }

        draw() {
            const a = Math.max(0, this.alpha);
            // Size tapers down smoothly over lifetime
            const currentSize = Math.round(this.endSize + (this.startSize - this.endSize) * this.life);

            cursorCtx.save();
            cursorCtx.globalAlpha = a;
            cursorCtx.font = `900 ${currentSize}px "JetBrains Mono", "Courier New", monospace`;
            cursorCtx.textBaseline = 'top';

            // NO solid black background rectangles for perfect premium blending!
            
            // Outer glowing layer matching dynamic theme color
            cursorCtx.shadowColor = this.color;
            cursorCtx.shadowBlur = 12;
            cursorCtx.fillStyle = this.color;
            cursorCtx.fillText(this.char, this.x, this.y);

            // Bright neon white center core for extreme contrast and readability
            cursorCtx.shadowColor = 'rgba(255, 255, 255, 0.85)';
            cursorCtx.shadowBlur = 3;
            cursorCtx.fillStyle = '#ffffff';
            cursorCtx.fillText(this.char, this.x, this.y);

            cursorCtx.shadowBlur = 0;
            cursorCtx.restore();
        }
    }

    // Expose shockwave trigger function globally
    window.triggerThemeSwitchAnimation = function(x, y) {
        setTimeout(() => {
            const activeColor = getComputedStyle(document.body).getPropertyValue('--primary').trim() || '#00ffff';
            for (let i = 0; i < 45; i++) {
                trailParticles.push(new TrailParticle(x, y, true, activeColor));
            }
        }, 30);
    };

    // Capture mouse moves (throttled using requestAnimationFrame to prevent high-polling gaming mouse lag)
    let mousemovePending = false;
    window.addEventListener('mousemove', (e) => {
        const target = e.target;
        const mx = e.clientX;
        const my = e.clientY;
        
        if (mousemovePending) return;
        mousemovePending = true;
        
        requestAnimationFrame(() => {
            mousemovePending = false;
            
            // Restrict cursor trail from spawning if:
            // 1. Bubble shooter is active
            if (typeof bsActive !== 'undefined' && bsActive) {
                return;
            }

            // 2. Any full-screen modal is open
            const activeModal = document.querySelector('.modal:not(.hidden), #share-modal-overlay');
            if (activeModal) {
                return;
            }

            // 3. User is hovering over any button, link, interactive input, dropdown or menu item
            const isHoveringInteractive = target.closest('button, a, input, textarea, select, .practice-item, .practice-trigger, .theme-item, .mascot-container');
            if (isHoveringInteractive) {
                return;
            }

            // Spawning threshold: spawn a particle if moved more than 5 pixels or on first move
            const dist = Math.hypot(mx - lastMousePos.x, my - lastMousePos.y);
            if (dist > 5 || !hasMovedMouse) {
                trailParticles.push(new TrailParticle(mx, my));
                lastMousePos = { x: mx, y: my };
                hasMovedMouse = true;
            }
        });
    });

    // Animation Loop
    function animateTrail() {
        cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
        
        // Update and draw particles
        for (let i = trailParticles.length - 1; i >= 0; i--) {
            const p = trailParticles[i];
            p.update();
            if (p.alpha <= 0) {
                trailParticles.splice(i, 1);
            } else {
                p.draw();
            }
        }
        
        requestAnimationFrame(animateTrail);
    }
    
    // Start animation loop
    animateTrail();
}

// ---- PREMIUM CYBERPUNK TEXTBOX STYLE & SIZE SELECTOR ----
(function() {
    const textboxStyleBtn = document.getElementById('textbox-style-btn');
    const textboxStyleDropdown = document.getElementById('textbox-style-dropdown');
    const styleOptions = document.querySelectorAll('.style-option');
    const activeStyleName = document.getElementById('active-style-name');
    const textDisplay = document.getElementById('text-display');
    const textboxMuteBtn = document.getElementById('textbox-mute-btn');

    if (!textboxStyleBtn || !textboxStyleDropdown || !textDisplay) return;

    if (textboxMuteBtn) {
        textboxMuteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof toggleMute === 'function') {
                toggleMute();
            }
        });
        if (typeof updateMuteButtonUI === 'function') {
            updateMuteButtonUI();
        }
    }

    // Mapping style keys to display names
    const STYLE_NAMES = {
        'normal': 'Style: Normal',
        'medium': 'Style: Medium',
        'large': 'Style: Large',
        'meganitro': 'Style: Mega Neon'
    };

    // Toggle dropdown
    textboxStyleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        textboxStyleDropdown.classList.toggle('hidden');
        textboxStyleBtn.classList.toggle('active');
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (!textboxStyleDropdown.classList.contains('hidden')) {
            if (!textboxStyleDropdown.contains(e.target) && !textboxStyleBtn.contains(e.target)) {
                textboxStyleDropdown.classList.add('hidden');
                textboxStyleBtn.classList.remove('active');
            }
        }
    });

    // Handle style changes
    function applyStyle(styleKey) {
        // Remove existing style classes
        textDisplay.classList.remove('style-normal', 'style-medium', 'style-large', 'style-meganitro');
        // Add new style class
        textDisplay.classList.add(`style-${styleKey}`);

        // Update active class on options
        styleOptions.forEach(opt => {
            if (opt.getAttribute('data-style') === styleKey) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        // Update active name text
        if (activeStyleName) {
            activeStyleName.innerText = STYLE_NAMES[styleKey] || 'Style: Normal';
        }

        // Save preference in localStorage
        localStorage.setItem('typingdost-textbox-style', styleKey);

        // Recalculate caret position after DOM renders the layout change
        setTimeout(() => {
            activeSpansCoords = []; // Invalidate coordinates cache for layout change
            if (typeof updateCaretPosition === 'function') {
                updateCaretPosition();
            }
            if (typeof resizeCanvas === 'function') {
                resizeCanvas();
            }
        }, 50);
    }

    // Bind option click events
    styleOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const selectedStyle = opt.getAttribute('data-style');
            applyStyle(selectedStyle);
            textboxStyleDropdown.classList.add('hidden');
            textboxStyleBtn.classList.remove('active');
        });
    });

    // Load initial style from localStorage
    const savedStyle = localStorage.getItem('typingdost-textbox-style') || 'normal';
    applyStyle(savedStyle);
})();

// ---- CRYPTO DONATE MODAL LOGIC ----
function copyAddress(elementId, btn) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const text = el.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        // Show ✓ tick in button
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
            btn.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const range = document.createRange();
        range.selectNode(el);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });
}

// Close crypto modal when clicking backdrop or close button
const cryptoDonateModal = document.getElementById('crypto-donate-modal');
if (cryptoDonateModal) {
    cryptoDonateModal.addEventListener('click', (e) => {
        if (e.target === cryptoDonateModal) {
            cryptoDonateModal.classList.add('hidden');
        }
    });
    const cryptoCloseBtn = cryptoDonateModal.querySelector('.crypto-modal-close');
    if (cryptoCloseBtn) {
        cryptoCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            cryptoDonateModal.classList.add('hidden');
        });
    }
}

// ============================================================
//  🫧 BUBBLE SHOOTER GAME ENGINE - COMPLETE IMPLEMENTATION
// ============================================================

(function() {
    'use strict';

    // ---- DOM References ----
    const bsContainer = document.getElementById('bubble-shooter-container');
    const bsCanvas    = document.getElementById('bubble-canvas');
    const bsCtx       = bsCanvas ? bsCanvas.getContext('2d') : null;
    const bsBackBtn   = document.getElementById('bs-back-btn');
    const bsStartBtn  = document.getElementById('bs-start-btn');
    const bsRestartBtn= document.getElementById('bs-restart-btn');
    const bsNextLvlBtn= document.getElementById('bs-nextlevel-btn');
    const bsStartOverlay   = document.getElementById('bs-start-overlay');
    const bsGameoverOverlay= document.getElementById('bs-gameover-overlay');
    const bsWinOverlay     = document.getElementById('bs-win-overlay');
    const bsScoreEl   = document.getElementById('bs-score');
    const bsLevelEl   = document.getElementById('bs-level');
    const bsBestEl    = document.getElementById('bs-best');
    const bsFinalScoreText = document.getElementById('bs-final-score-text');
    const bsWinScoreText   = document.getElementById('bs-win-score-text');

    if (!bsCtx) return; // Canvas not supported

    // ---- Game Constants ----
    const BUBBLE_RADIUS = 22;
    const BUBBLE_DIAMETER = BUBBLE_RADIUS * 2;
    const ROW_HEIGHT = Math.round(BUBBLE_RADIUS * 1.732); // sqrt(3) * r for hex grid
    const COLORS = [
        { fill: '#00f0ff', glow: '#00cfdd', name: 'cyan'   },
        { fill: '#ff2a6d', glow: '#dd0044', name: 'red'    },
        { fill: '#b55fe6', glow: '#9933cc', name: 'purple' },
        { fill: '#ffcc00', glow: '#ddaa00', name: 'yellow' },
        { fill: '#39ff14', glow: '#28cc00', name: 'green'  },
        { fill: '#ff7700', glow: '#cc5500', name: 'orange' },
    ];
    const MAX_COLORS_BY_LEVEL = [3, 4, 5, 5, 6, 6];
    const ROWS_BY_LEVEL = [6, 7, 8, 9, 10, 11];
    const MAX_ROWS = 14;
    const SHOOTER_Y_OFFSET = 90; // px from bottom

    // ---- Game State ----
    let bsW = 0, bsH = 0;
    let cols = 0;
    let grid = []; // 2D array: grid[row][col] = { color } or null
    let shooter = { x: 0, y: 0, angle: -Math.PI / 2 };
    let projectile = null; // { x, y, vx, vy, color }
    let nextBubbleColor = null;
    let bsScore = 0;
    let bsBestScore = parseInt(localStorage.getItem('bsBestScore') || '0');
    let bsLevel = 1;
    let bsActive = false;
    let bsAnimFrame = null;
    let bsLastTime = 0;
    let popParticles = [];
    let aimLine = []; // Bounce preview points
    let mouseX = 0, mouseY = 0;
    let comboCount = 0;
    let floatingTexts = []; // Pop combo texts
    let aimAngle = -Math.PI / 2;
    let bsInitialized = false;
    let bsCanvasRect = null;

    // ---- Satisfying Bubble Shooter Audio Synthesis ----
    function playBsShootSound() {
        if (currentSoundProfile === 'mute') return;
        initAudio();
        if (!audioCtx) return;
        try {
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(350, now);
            osc.frequency.exponentialRampToValueAtTime(750, now + 0.12);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
            osc.start(now);
            osc.stop(now + 0.12);
        } catch (e) {}
    }

    function playBsBounceSound() {
        if (currentSoundProfile === 'mute') return;
        initAudio();
        if (!audioCtx) return;
        try {
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(260, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        } catch (e) {}
    }

    function playBsPopSound(combo = 1) {
        if (currentSoundProfile === 'mute') return;
        initAudio();
        if (!audioCtx) return;
        try {
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            const startFreq = 800 + Math.min(combo * 70, 400);
            osc.frequency.setValueAtTime(startFreq, now);
            osc.frequency.exponentialRampToValueAtTime(startFreq * 1.4, now + 0.09);
            gain.gain.setValueAtTime(0.07, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
            osc.start(now);
            osc.stop(now + 0.09);
        } catch (e) {}
    }

    function playBsWinSound() {
        if (currentSoundProfile === 'mute') return;
        initAudio();
        if (!audioCtx) return;
        try {
            const now = audioCtx.currentTime;
            const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
            notes.forEach((freq, idx) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.1);
                gain.gain.setValueAtTime(0.08, now + idx * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.25);
                osc.start(now + idx * 0.1);
                osc.stop(now + idx * 0.1 + 0.25);
            });
        } catch (e) {}
    }

    function playBsLoseSound() {
        if (currentSoundProfile === 'mute') return;
        initAudio();
        if (!audioCtx) return;
        try {
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(80, now + 0.4);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc.start(now);
            osc.stop(now + 0.4);
        } catch (e) {}
    }

    // ---- Utility: get active color count for current level ----
    function getActiveColors() {
        const idx = Math.min(bsLevel - 1, MAX_COLORS_BY_LEVEL.length - 1);
        return MAX_COLORS_BY_LEVEL[idx];
    }
    function getStartRows() {
        const idx = Math.min(bsLevel - 1, ROWS_BY_LEVEL.length - 1);
        return ROWS_BY_LEVEL[idx];
    }

    // ---- Canvas Sizing ----
    function resizeBsCanvas() {
        if (!bsContainer || !bsCanvas) return;
        bsCanvasRect = null;
        const area = bsContainer.querySelector('.bs-game-area');
        if (!area) return;
        bsW = area.clientWidth;
        bsH = area.clientHeight;
        bsCanvas.width = bsW;
        bsCanvas.height = bsH;
        cols = Math.floor(bsW / BUBBLE_DIAMETER);
        shooter.x = bsW / 2;
        shooter.y = bsH - SHOOTER_Y_OFFSET;
    }

    // ---- Grid Helpers ----
    function getBubbleX(col, row) {
        const offset = (row % 2 === 0) ? 0 : BUBBLE_RADIUS;
        return BUBBLE_RADIUS + col * BUBBLE_DIAMETER + offset;
    }
    function getBubbleY(row) {
        return BUBBLE_RADIUS + row * ROW_HEIGHT;
    }

    function initGrid() {
        grid = [];
        const numRows = getStartRows();
        const numColors = getActiveColors();
        for (let r = 0; r < numRows; r++) {
            grid[r] = [];
            const rowCols = (r % 2 === 0) ? cols : cols - 1;
            for (let c = 0; c < rowCols; c++) {
                grid[r][c] = { color: COLORS[Math.floor(Math.random() * numColors)] };
            }
        }
    }

    function randomBubbleColor() {
        // Pick only colors that exist in the grid for fairness
        const usedColors = new Set();
        for (let r = 0; r < grid.length; r++) {
            if (!grid[r]) continue;
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c]) usedColors.add(grid[r][c].color.name);
            }
        }
        const usedArr = COLORS.filter(c => usedColors.has(c.name));
        if (usedArr.length === 0) return COLORS[0];
        return usedArr[Math.floor(Math.random() * usedArr.length)];
    }

    // ---- Drawing ----
    function drawBubble(x, y, color, radius, alpha) {
        if (!bsCtx) return;
        radius = radius || BUBBLE_RADIUS;
        alpha = (alpha === undefined) ? 1 : alpha;

        bsCtx.save();
        bsCtx.globalAlpha = alpha;

        // Outer glow
        const grd = bsCtx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, radius * 0.1, x, y, radius);
        grd.addColorStop(0, '#ffffff');
        grd.addColorStop(0.35, color.fill);
        grd.addColorStop(1, color.glow);

        bsCtx.shadowColor = color.fill;
        bsCtx.shadowBlur = 18;
        bsCtx.beginPath();
        bsCtx.arc(x, y, radius - 1.5, 0, Math.PI * 2);
        bsCtx.fillStyle = grd;
        bsCtx.fill();

        // Shine highlight
        bsCtx.shadowBlur = 0;
        bsCtx.beginPath();
        bsCtx.arc(x - radius * 0.28, y - radius * 0.3, radius * 0.25, 0, Math.PI * 2);
        bsCtx.fillStyle = 'rgba(255,255,255,0.55)';
        bsCtx.fill();

        // Rim
        bsCtx.beginPath();
        bsCtx.arc(x, y, radius - 1.5, 0, Math.PI * 2);
        bsCtx.strokeStyle = 'rgba(255,255,255,0.25)';
        bsCtx.lineWidth = 1.5;
        bsCtx.stroke();

        bsCtx.restore();
    }

    function drawGrid() {
        for (let r = 0; r < grid.length; r++) {
            if (!grid[r]) continue;
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c]) {
                    const x = getBubbleX(c, r);
                    const y = getBubbleY(r);
                    drawBubble(x, y, grid[r][c].color, BUBBLE_RADIUS, 1);
                }
            }
        }
    }

    function drawShooter() {
        if (!bsCtx) return;
        const sx = shooter.x, sy = shooter.y;

        // Shooter base platform
        bsCtx.save();
        bsCtx.shadowColor = '#00f0ff';
        bsCtx.shadowBlur = 20;
        bsCtx.beginPath();
        bsCtx.ellipse(sx, sy + 8, 30, 10, 0, 0, Math.PI * 2);
        bsCtx.fillStyle = 'rgba(0, 240, 255, 0.25)';
        bsCtx.fill();

        // Gun barrel line
        const barrelLen = 45;
        bsCtx.beginPath();
        bsCtx.moveTo(sx, sy);
        bsCtx.lineTo(sx + Math.cos(aimAngle) * barrelLen, sy + Math.sin(aimAngle) * barrelLen);
        bsCtx.strokeStyle = '#00f0ff';
        bsCtx.lineWidth = 3;
        bsCtx.lineCap = 'round';
        bsCtx.stroke();

        bsCtx.restore();

        // Draw next bubble at shooter
        if (nextBubbleColor) {
            drawBubble(sx, sy, nextBubbleColor, BUBBLE_RADIUS, 1);
        }
    }

    function drawAimLine() {
        if (!bsCtx || aimLine.length < 2) return;
        bsCtx.save();
        bsCtx.setLineDash([6, 10]);
        bsCtx.strokeStyle = 'rgba(255,255,255,0.35)';
        bsCtx.lineWidth = 1.5;
        bsCtx.shadowColor = '#00f0ff';
        bsCtx.shadowBlur = 5;

        bsCtx.beginPath();
        bsCtx.moveTo(aimLine[0].x, aimLine[0].y);
        for (let i = 1; i < aimLine.length; i++) {
            bsCtx.lineTo(aimLine[i].x, aimLine[i].y);
        }
        bsCtx.stroke();
        bsCtx.restore();
    }

    function drawProjectile() {
        if (!projectile || !bsCtx) return;
        drawBubble(projectile.x, projectile.y, projectile.color, BUBBLE_RADIUS, 1);
    }

    function drawPopParticles() {
        if (!bsCtx) return;
        for (let i = popParticles.length - 1; i >= 0; i--) {
            const p = popParticles[i];
            bsCtx.save();
            bsCtx.globalAlpha = p.alpha;
            bsCtx.beginPath();
            bsCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            bsCtx.fillStyle = p.color;
            bsCtx.shadowColor = p.color;
            bsCtx.shadowBlur = 10;
            bsCtx.fill();
            bsCtx.restore();
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.15; // gravity
            p.alpha -= 0.028;
            p.size *= 0.97;
            if (p.alpha <= 0) popParticles.splice(i, 1);
        }
    }

    function drawFloatingTexts() {
        if (!bsCtx) return;
        for (let i = floatingTexts.length - 1; i >= 0; i--) {
            const ft = floatingTexts[i];
            bsCtx.save();
            bsCtx.globalAlpha = ft.alpha;
            bsCtx.font = `bold ${ft.size}px 'Orbitron', sans-serif`;
            bsCtx.textAlign = 'center';
            bsCtx.fillStyle = ft.color;
            bsCtx.shadowColor = ft.color;
            bsCtx.shadowBlur = 18;
            bsCtx.fillText(ft.text, ft.x, ft.y);
            bsCtx.restore();
            ft.y -= 1.2;
            ft.alpha -= 0.018;
            if (ft.alpha <= 0) floatingTexts.splice(i, 1);
        }
    }

    function drawDangerLine() {
        if (!bsCtx) return;
        // Warn when bubbles approach bottom zone
        const dangerY = bsH - SHOOTER_Y_OFFSET - BUBBLE_RADIUS * 3;
        bsCtx.save();
        bsCtx.strokeStyle = 'rgba(255, 40, 40, 0.3)';
        bsCtx.lineWidth = 1;
        bsCtx.setLineDash([10, 8]);
        bsCtx.beginPath();
        bsCtx.moveTo(0, dangerY);
        bsCtx.lineTo(bsW, dangerY);
        bsCtx.stroke();
        bsCtx.restore();
    }

    function drawBackground() {
        if (!bsCtx) return;
        // Dark gradient background with subtle grid
        const grad = bsCtx.createLinearGradient(0, 0, 0, bsH);
        grad.addColorStop(0, '#0a0015');
        grad.addColorStop(1, '#010010');
        bsCtx.fillStyle = grad;
        bsCtx.fillRect(0, 0, bsW, bsH);

        // Subtle hex grid pattern
        bsCtx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
        bsCtx.lineWidth = 0.5;
        const gs = 40;
        for (let x = 0; x < bsW; x += gs) {
            bsCtx.beginPath(); bsCtx.moveTo(x, 0); bsCtx.lineTo(x, bsH); bsCtx.stroke();
        }
        for (let y = 0; y < bsH; y += gs) {
            bsCtx.beginPath(); bsCtx.moveTo(0, y); bsCtx.lineTo(bsW, y); bsCtx.stroke();
        }
    }

    // ---- Aim Line Computation (Wall Bounce) ----
    function computeAimLine() {
        aimLine = [];
        if (!bsActive || projectile) return;

        const minAngle = -Math.PI + 0.15;
        const maxAngle = -0.15;
        const clampedAngle = Math.max(minAngle, Math.min(maxAngle, aimAngle));

        let px = shooter.x, py = shooter.y;
        let vx = Math.cos(clampedAngle), vy = Math.sin(clampedAngle);
        aimLine.push({ x: px, y: py });

        const maxBounces = 3;
        let bounces = 0;
        const step = 8;
        const maxSteps = 500;
        let steps = 0;

        while (steps < maxSteps) {
            px += vx * step;
            py += vy * step;
            steps++;

            // Wall bounce
            if (px - BUBBLE_RADIUS <= 0) { px = BUBBLE_RADIUS; vx = Math.abs(vx); bounces++; aimLine.push({ x: px, y: py }); }
            if (px + BUBBLE_RADIUS >= bsW) { px = bsW - BUBBLE_RADIUS; vx = -Math.abs(vx); bounces++; aimLine.push({ x: px, y: py }); }

            if (py <= BUBBLE_RADIUS * 2) { aimLine.push({ x: px, y: py }); break; }
            if (bounces >= maxBounces) break;

            aimLine.push({ x: px, y: py });

            // Check if we'd hit a bubble
            let hitGrid = false;
            for (let r = 0; r < grid.length; r++) {
                if (!grid[r]) continue;
                for (let c = 0; c < grid[r].length; c++) {
                    if (!grid[r][c]) continue;
                    const bx = getBubbleX(c, r), by = getBubbleY(r);
                    const dist = Math.hypot(px - bx, py - by);
                    if (dist < BUBBLE_DIAMETER - 2) { hitGrid = true; break; }
                }
                if (hitGrid) break;
            }
            if (hitGrid) break;
        }
    }

    // ---- BFS: Find matching color cluster ----
    function findCluster(row, col, color) {
        const visited = new Set();
        const queue = [[row, col]];
        const cluster = [];

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            const key = `${r},${c}`;
            if (visited.has(key)) continue;
            visited.add(key);
            if (r < 0 || r >= grid.length || !grid[r] || c < 0 || c >= grid[r].length) continue;
            if (!grid[r][c] || grid[r][c].color.name !== color.name) continue;
            cluster.push([r, c]);
            // Hex neighbors
            for (const [nr, nc] of getNeighbors(r, c)) {
                if (!visited.has(`${nr},${nc}`)) queue.push([nr, nc]);
            }
        }
        return cluster;
    }

    // ---- BFS: Find floating bubbles (not connected to ceiling) ----
    function findFloating() {
        // Start BFS from all bubbles in row 0
        const visited = new Set();
        const queue = [];

        if (grid[0]) {
            for (let c = 0; c < grid[0].length; c++) {
                if (grid[0][c]) { queue.push([0, c]); visited.add(`0,${c}`); }
            }
        }

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            for (const [nr, nc] of getNeighbors(r, c)) {
                const key = `${nr},${nc}`;
                if (visited.has(key)) continue;
                if (nr < 0 || nr >= grid.length || !grid[nr] || nc < 0 || nc >= grid[nr].length) continue;
                if (!grid[nr][nc]) continue;
                visited.add(key);
                queue.push([nr, nc]);
            }
        }

        // Floating = exists in grid but NOT visited
        const floating = [];
        for (let r = 0; r < grid.length; r++) {
            if (!grid[r]) continue;
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] && !visited.has(`${r},${c}`)) {
                    floating.push([r, c]);
                }
            }
        }
        return floating;
    }

    // ---- Hex Grid Neighbors ----
    function getNeighbors(r, c) {
        const isEvenRow = r % 2 === 0;
        return [
            [r - 1, isEvenRow ? c - 1 : c],
            [r - 1, isEvenRow ? c : c + 1],
            [r, c - 1],
            [r, c + 1],
            [r + 1, isEvenRow ? c - 1 : c],
            [r + 1, isEvenRow ? c : c + 1],
        ];
    }

    // ---- Snap projectile to nearest grid cell ----
    function snapToGrid(px, py) {
        let bestDist = Infinity, bestR = -1, bestC = -1;

        // Find all candidate grid positions
        const checkRow = (r) => {
            const rowCols = (r % 2 === 0) ? cols : cols - 1;
            for (let c = 0; c < rowCols; c++) {
                const bx = getBubbleX(c, r), by = getBubbleY(r);
                const dist = Math.hypot(px - bx, py - by);
                if (dist < bestDist && (!grid[r] || !grid[r][c])) {
                    bestDist = dist; bestR = r; bestC = c;
                }
            }
        };

        const rowGuess = Math.round((py - BUBBLE_RADIUS) / ROW_HEIGHT);
        for (let rr = Math.max(0, rowGuess - 2); rr <= Math.min(MAX_ROWS - 1, rowGuess + 2); rr++) {
            checkRow(rr);
        }

        return { row: bestR, col: bestC };
    }

    // ---- Pop bubbles & create particles ----
    function popBubbles(cluster, color) {
        const pts = cluster.length * cluster.length * 50;
        bsScore += pts;
        comboCount++;
        updateBsUI();

        playBsPopSound(comboCount); // Play pop sound with combo pitch!

        for (const [r, c] of cluster) {
            const bx = getBubbleX(c, r), by = getBubbleY(r);
            createBsPopParticles(bx, by, color);
            if (grid[r]) grid[r][c] = null;
        }

        // Show floating score text
        if (cluster.length >= 3) {
            const cx = cluster.reduce((s, [,c]) => s + getBubbleX(c, cluster[0][0]), 0) / cluster.length;
            const cy = cluster.reduce((s, [r]) => s + getBubbleY(r), 0) / cluster.length;
            let text = cluster.length >= 6 ? `🔥 COMBO x${cluster.length}!` : `+${pts}`;
            let col = cluster.length >= 6 ? '#ffcc00' : '#00f0ff';
            floatingTexts.push({ x: cx, y: cy, text, color: col, alpha: 1, size: cluster.length >= 5 ? 22 : 16 });
        }

        // Drop floating bubbles
        const floating = findFloating();
        if (floating.length > 0) {
            bsScore += floating.length * 100;
            updateBsUI();
            for (const [r, c] of floating) {
                const bx = getBubbleX(c, r), by = getBubbleY(r);
                createBsPopParticles(bx, by, grid[r][c].color);
                floatingTexts.push({ x: bx, y: by - 20, text: '+100', color: '#ff2a6d', alpha: 1, size: 13 });
                if (grid[r]) grid[r][c] = null;
            }
        }
    }

    function createBsPopParticles(x, y, color) {
        const count = 18 + Math.floor(Math.random() * 10);
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.5 + Math.random() * 4;
            popParticles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                size: 3 + Math.random() * 4,
                color: Math.random() > 0.4 ? color.fill : '#ffffff',
                alpha: 1
            });
        }
    }

    // ---- Projectile movement & collision ----
    function updateProjectile(dt) {
        if (!projectile) return;

        const speed = 10 * (dt / 16);
        projectile.x += projectile.vx * speed;
        projectile.y += projectile.vy * speed;

        // Wall bounce
        if (projectile.x - BUBBLE_RADIUS <= 0) {
            projectile.x = BUBBLE_RADIUS;
            projectile.vx = Math.abs(projectile.vx);
            playBsBounceSound(); // Play wall bounce sound!
        }
        if (projectile.x + BUBBLE_RADIUS >= bsW) {
            projectile.x = bsW - BUBBLE_RADIUS;
            projectile.vx = -Math.abs(projectile.vx);
            playBsBounceSound(); // Play wall bounce sound!
        }

        // Hit ceiling
        if (projectile.y - BUBBLE_RADIUS <= 0) {
            placeProjectile(0, Math.round(projectile.x / BUBBLE_DIAMETER));
            return;
        }

        // Check collision with grid bubbles
        for (let r = 0; r < grid.length; r++) {
            if (!grid[r]) continue;
            for (let c = 0; c < grid[r].length; c++) {
                if (!grid[r][c]) continue;
                const bx = getBubbleX(c, r), by = getBubbleY(r);
                const dist = Math.hypot(projectile.x - bx, projectile.y - by);
                if (dist < BUBBLE_DIAMETER - 3) {
                    placeProjectile(r, c);
                    return;
                }
            }
        }

        // Fell to bottom (lost)
        if (projectile.y > bsH + BUBBLE_RADIUS) {
            projectile = null;
            gameLost();
        }
    }

    function placeProjectile(nearRow, nearCol) {
        const snap = snapToGrid(projectile.x, projectile.y);
        let placeRow = snap.row, placeCol = snap.col;

        if (placeRow < 0) placeRow = 0;
        if (placeRow >= MAX_ROWS) { projectile = null; return; }

        // Ensure grid row exists
        while (grid.length <= placeRow) grid.push([]);
        const rowCols = (placeRow % 2 === 0) ? cols : cols - 1;
        while (grid[placeRow].length < rowCols) grid[placeRow].push(null);

        if (placeCol < 0) placeCol = 0;
        if (placeCol >= rowCols) placeCol = rowCols - 1;

        grid[placeRow][placeCol] = { color: projectile.color };
        const placedColor = projectile.color;
        projectile = null;

        // Find cluster
        const cluster = findCluster(placeRow, placeCol, placedColor);
        if (cluster.length >= 3) {
            popBubbles(cluster, placedColor);
            comboCount++;

            // Check win condition
            if (isGridEmpty()) {
                setTimeout(() => showBsWin(), 300);
                return;
            }
        } else {
            comboCount = 0;
            // Check game over: any bubble past danger zone
            checkBsGameOver();
        }

        // Prepare next shot
        nextBubbleColor = randomBubbleColor();
        computeAimLine();
    }

    function isGridEmpty() {
        for (let r = 0; r < grid.length; r++) {
            if (!grid[r]) continue;
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c]) return false;
            }
        }
        return true;
    }

    // ---- Danger Game Over Check ----
    function checkBsGameOver() {
        const dangerY = bsH - SHOOTER_Y_OFFSET - BUBBLE_RADIUS * 3;
        for (let r = 0; r < grid.length; r++) {
            if (!grid[r]) continue;
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] && getBubbleY(r) >= dangerY) {
                    setTimeout(() => gameLost(), 200);
                    return;
                }
            }
        }
    }

    // ---- Shoot ----
    function shoot() {
        if (!bsActive || projectile) return;
        if (!nextBubbleColor) return;

        playBsShootSound(); // Play retro laser shoot sound!

        const minAngle = -Math.PI + 0.15;
        const maxAngle = -0.15;
        const clampedAngle = Math.max(minAngle, Math.min(maxAngle, aimAngle));

        const speed = 12;
        projectile = {
            x: shooter.x,
            y: shooter.y,
            vx: Math.cos(clampedAngle) * speed,
            vy: Math.sin(clampedAngle) * speed,
            color: nextBubbleColor
        };
        nextBubbleColor = randomBubbleColor();
        aimLine = [];
    }

    // ---- UI Updates ----
    function updateBsUI() {
        if (bsScoreEl) bsScoreEl.textContent = bsScore;
        if (bsLevelEl) bsLevelEl.textContent = bsLevel;
        if (bsBestEl) bsBestEl.textContent = bsBestScore;
    }

    function showBsGameOver() {
        bsActive = false;
        if (bsScore > bsBestScore) {
            bsBestScore = bsScore;
            localStorage.setItem('bsBestScore', bsBestScore);
        }
        if (bsFinalScoreText) bsFinalScoreText.textContent = `Final Score: ${bsScore}`;
        if (bsGameoverOverlay) bsGameoverOverlay.classList.remove('hidden');
        if (bsWinOverlay) bsWinOverlay.classList.add('hidden');
        if (bsStartOverlay) bsStartOverlay.classList.add('hidden');
    }

    function showBsWin() {
        bsActive = false;
        playBsWinSound(); // Play leveling up victory fanfare!
        if (bsScore > bsBestScore) {
            bsBestScore = bsScore;
            localStorage.setItem('bsBestScore', bsBestScore);
        }
        if (bsWinScoreText) bsWinScoreText.textContent = `Score: ${bsScore} 🏆`;
        if (bsWinOverlay) bsWinOverlay.classList.remove('hidden');
        if (bsGameoverOverlay) bsGameoverOverlay.classList.add('hidden');
        if (bsStartOverlay) bsStartOverlay.classList.add('hidden');
    }

    function gameLost() {
        playBsLoseSound(); // Play sad descending defeat sound!
        showBsGameOver();
    }

    // ---- Game Loop ----
    function bsGameLoop(ts) {
        if (!bsActive) return;

        const dt = Math.min(ts - bsLastTime, 50);
        bsLastTime = ts;

        // Update
        updateProjectile(dt);

        // Draw
        drawBackground();
        drawDangerLine();
        drawGrid();
        drawAimLine();
        drawProjectile();
        drawShooter();
        drawPopParticles();
        drawFloatingTexts();

        bsAnimFrame = requestAnimationFrame(bsGameLoop);
    }

    // ---- Start / Restart ----
    function startBsGame() {
        if (!bsCanvas || !bsCtx) return;
        resizeBsCanvas();
        initGrid();
        bsScore = 0;
        projectile = null;
        popParticles = [];
        floatingTexts = [];
        aimLine = [];
        comboCount = 0;
        nextBubbleColor = randomBubbleColor();
        shooter.x = bsW / 2;
        shooter.y = bsH - SHOOTER_Y_OFFSET;
        bsActive = true;
        if (bsStartOverlay) bsStartOverlay.classList.add('hidden');
        if (bsGameoverOverlay) bsGameoverOverlay.classList.add('hidden');
        if (bsWinOverlay) bsWinOverlay.classList.add('hidden');
        updateBsUI();
        cancelAnimationFrame(bsAnimFrame);
        bsLastTime = performance.now();
        bsAnimFrame = requestAnimationFrame(bsGameLoop);
    }

    function nextBsLevel() {
        bsLevel = Math.min(bsLevel + 1, MAX_COLORS_BY_LEVEL.length);
        startBsGame();
    }

    // ---- exit ----
    function exitBubbleShooter() {
        bsActive = false;
        cancelAnimationFrame(bsAnimFrame);
        document.body.classList.remove('game-mode-active');
        if (bsContainer) bsContainer.classList.add('hidden');
        const stdContainer = document.getElementById('standard-mode-container');
        if (stdContainer) stdContainer.classList.remove('hidden');

        // Reset dropdowns
        document.querySelectorAll('.practice-trigger').forEach(t => t.classList.remove('active-sub'));
        document.querySelectorAll('.practice-item').forEach(i => i.classList.remove('selected'));
        const sentencesItem = document.querySelector('.practice-item[data-lesson="sentences"]');
        if (sentencesItem) sentencesItem.classList.add('selected');
        const testTriggerBtn = document.getElementById('test-trigger');
        if (testTriggerBtn) testTriggerBtn.classList.add('active-sub');
    }

    // ---- Mouse Handling ----
    function handleBsMouseMove(e) {
        if (!bsActive || projectile) return;
        if (!bsCanvasRect) {
            bsCanvasRect = bsCanvas.getBoundingClientRect();
        }
        mouseX = e.clientX - bsCanvasRect.left;
        mouseY = e.clientY - bsCanvasRect.top;
        aimAngle = Math.atan2(mouseY - shooter.y, mouseX - shooter.x);
        computeAimLine();
    }

    // ---- Click ----
    function handleBsClick(e) {
        if (!bsActive) return;
        if (!bsCanvasRect) {
            bsCanvasRect = bsCanvas.getBoundingClientRect();
        }
        mouseX = e.clientX - bsCanvasRect.left;
        mouseY = e.clientY - bsCanvasRect.top;
        aimAngle = Math.atan2(mouseY - shooter.y, mouseX - shooter.x);
        shoot();
    }

    // ---- Touch ----
    function handleBsTouch(e) {
        if (!bsActive) return;
        e.preventDefault();
        const touch = e.touches[0] || e.changedTouches[0];
        if (!bsCanvasRect) {
            bsCanvasRect = bsCanvas.getBoundingClientRect();
        }
        mouseX = touch.clientX - bsCanvasRect.left;
        mouseY = touch.clientY - bsCanvasRect.top;
        aimAngle = Math.atan2(mouseY - shooter.y, mouseX - shooter.x);
        computeAimLine();
        shoot();
    }

    // ---- Public init function ----
    window.launchBubbleShooter = function() {
        if (!bsContainer || !bsCanvas) return;
        bsActive = false;
        cancelAnimationFrame(bsAnimFrame);

        // Show start overlay
        if (bsStartOverlay) bsStartOverlay.classList.remove('hidden');
        if (bsGameoverOverlay) bsGameoverOverlay.classList.add('hidden');
        if (bsWinOverlay) bsWinOverlay.classList.add('hidden');

        resizeBsCanvas();
        updateBsUI();

        if (!bsInitialized) {
            bsInitialized = true;

            // Event listeners
            bsCanvas.addEventListener('mousemove', handleBsMouseMove);
            bsCanvas.addEventListener('click', handleBsClick);
            bsCanvas.addEventListener('touchmove', handleBsTouch, { passive: false });
            bsCanvas.addEventListener('touchend', handleBsTouch, { passive: false });

            if (bsStartBtn) bsStartBtn.addEventListener('click', () => { bsLevel = 1; startBsGame(); });
            if (bsRestartBtn) bsRestartBtn.addEventListener('click', () => { bsLevel = 1; startBsGame(); });
            if (bsNextLvlBtn) bsNextLvlBtn.addEventListener('click', nextBsLevel);
            if (bsBackBtn) bsBackBtn.addEventListener('click', exitBubbleShooter);
            const bsStartExitBtn = document.getElementById('bs-start-exit-btn');
            if (bsStartExitBtn) bsStartExitBtn.addEventListener('click', exitBubbleShooter);
            const bsGameOverExitBtn = document.getElementById('bs-gameover-exit-btn');
            if (bsGameOverExitBtn) bsGameOverExitBtn.addEventListener('click', exitBubbleShooter);
            const bsWinExitBtn = document.getElementById('bs-win-exit-btn');
            if (bsWinExitBtn) bsWinExitBtn.addEventListener('click', exitBubbleShooter);
            const bsCanvasExitBtn = document.getElementById('bs-canvas-exit-btn');
            if (bsCanvasExitBtn) bsCanvasExitBtn.addEventListener('click', exitBubbleShooter);

            window.addEventListener('resize', () => {
                bsCanvasRect = null;
                if (bsContainer && !bsContainer.classList.contains('hidden')) {
                    resizeBsCanvas();
                    shooter.x = bsW / 2;
                    shooter.y = bsH - SHOOTER_Y_OFFSET;
                }
            });
            window.addEventListener('scroll', () => {
                bsCanvasRect = null;
            }, { passive: true });
        }
    };

    // ==========================================
    // ---------- GLOBAL TRANSLATION ENGINE & LEARNING LOGIC ----------
    // ==========================================
    const learningBtn = document.getElementById('learning-btn');
    const learningModal = document.getElementById('learning-modal');
    const closeLearningBtn = document.getElementById('close-learning-btn');
    const learningTabs = document.querySelectorAll('.learning-tab');
    const learningTextContainer = document.getElementById('learning-text-container');
    const learningKeys = document.querySelectorAll('#learning-keyboard .key');
    const learningFingers = document.querySelectorAll('#learning-hands .finger');
    const learningHeaderTitle = document.getElementById('learning-header-title');
    const learningHeaderSubtitle = document.getElementById('learning-header-subtitle');

    // Header Global Translation Dropdown Elements
    const langTrigger = document.getElementById('lang-trigger');
    const langMenu = document.getElementById('lang-menu');
    const langItems = document.querySelectorAll('#lang-menu .lang-item');
    const currentLangIcon = document.getElementById('current-lang-icon');
    const currentLangName = document.getElementById('current-lang-name');
    const headerLangLabel = document.getElementById('header-lang-label');

    const validLangs = [
        'english', 'hinglish', 'hindi', 'bengali', 'marathi', 'tamil',
        'telugu', 'gujarati', 'kannada', 'malayalam', 'odia', 'punjabi',
        'urdu', 'assamese', 'spanish', 'french', 'german', 'arabic',
        'japanese', 'portuguese'
    ];
    
    currentLearningLang = (typeof detectCurrentLanguage === 'function') ? detectCurrentLanguage() : 'english';
    let savedLang = currentLearningLang;

    const siteTranslations = {
        english: {
            practiceLabel: "Practice",
            testLabel: "Typing Test",
            govtLabel: "Govt Exam",
            navLearning: "🎓 Learning",
            navWeakspot: "Weakspot",
            navLaserDefense: "Laser Defense 🚀",
            navCyberFall: "Cyber Fall ☄️",
            navBubbleShooter: "Bubble Shooter 🫧",
            timeLabel: "Time",
            wpmLabel: "WPM",
            accLabel: "Accuracy",
            mistakesLabel: "Mistakes",
            newTextBtn: "New Text",
            zenBtn: "Zen",
            historyBtn: "History",
            customBtn: "Custom",
            setBtn: "Set",
            secPlaceholder: "Sec",
            langLabel: "Language:",
            donateBtn: "Donate",
            donateTitle: "Support TypingDost",
            donateSubtitle: "Hey friend! 👋 TypingDost is completely free for everyone. If this tool helped improve your typing speed, consider buying me a coffee ☕",
            donateHighlight: "Your small support keeps this project alive & growing! 🚀",
            mascotBubble: "Wow what a speed! You are the king of the keyboard!",
            focusMascotBubble: "Hey, where did you go? Don't leave me alone!",
            practiceNow: "Practice Now! 🚀",
            closeBtn: "Close",
            learningTitle: "🎓 Learning Academy",
            learningSubtitle: "Learn Touch Typing from Zero to Keyboard Master",
            soundLabel: "Keyboard Sound",
            themeLabel: "Theme Mode",
            displayModeLabel: "Display Mode",
            footerText: "Elevate your typing speed with sleek cyberpunk aesthetics.",
            tabs: [
                "Chapter 1: Home Row",
                "Chapter 2: Top Row",
                "Chapter 3: Bottom Row",
                "Chapter 4: Numbers",
                "Chapter 5: Pro Speed"
            ]
        },
        hindi: {
            practiceLabel: "अभ्यास",
            testLabel: "टाइपिंग टेस्ट",
            govtLabel: "सरकारी परीक्षा",
            navLearning: "🎓 लर्निंग",
            navWeakspot: "Weakspot",
            navLaserDefense: "लेजर डिफेंस 🚀",
            navCyberFall: "साइबर फॉल ☄️",
            navBubbleShooter: "बबल शूटर 🫧",
            timeLabel: "समय",
            wpmLabel: "WPM",
            accLabel: "सटीकता",
            mistakesLabel: "गलतियाँ",
            newTextBtn: "नया पाठ",
            zenBtn: "ज़ेन",
            historyBtn: "इतिहास",
            customBtn: "कस्टम",
            setBtn: "सेट",
            secPlaceholder: "सेकंड",
            langLabel: "भाषा:",
            donateBtn: "दान करें",
            donateTitle: "TypingDost का समर्थन करें",
            donateSubtitle: "अरे दोस्त! 👋 TypingDost सभी के लिए पूरी तरह से मुफ्त है। यदि इस टूल ने आपकी टाइपिंग स्पीड में सुधार किया है, तो मुझे एक कॉफी खरीदने पर विचार करें ☕",
            donateHighlight: "आपका छोटा सा समर्थन इस प्रोजेक्ट को जीवित और आगे बढ़ाने में मदद करता है! 🚀",
            mascotBubble: "वाह क्या स्पीड है! तुम तो कीबोर्ड के राजा हो!",
            focusMascotBubble: "भाई, टाइपिंग छोड़कर किधर चले गए?",
            practiceNow: "अभी अभ्यास करें! 🚀",
            closeBtn: "बंद करें",
            learningTitle: "🎓 लर्निंग अकादमी",
            learningSubtitle: "शून्य से कीबोर्ड मास्टर तक टच टाइपिंग सीखें",
            soundLabel: "कीबोर्ड ध्वनि",
            themeLabel: "थीम मोड",
            displayModeLabel: "डिस्प्ले मोड",
            footerText: "Sleek cyberpunk aesthetics ke sath apni typing speed ko elevate karein.",
            tabs: [
                "अध्याय 1: होम रो",
                "अध्याय 2: टॉप रो",
                "अध्याय 3: बॉटम रो",
                "अध्याय 4: नंबर रो",
                "अध्याय 5: प्रो स्पीड"
            ]
        },
        hinglish: {
            practiceLabel: "Practice",
            testLabel: "Typing Test",
            govtLabel: "Govt Exam",
            navLearning: "🎓 Learning",
            navWeakspot: "Weakspot",
            navLaserDefense: "Laser Defense 🚀",
            navCyberFall: "Cyber Fall ☄️",
            navBubbleShooter: "Bubble Shooter 🫧",
            timeLabel: "Time",
            wpmLabel: "WPM",
            accLabel: "Accuracy",
            mistakesLabel: "Mistakes",
            newTextBtn: "New Text",
            zenBtn: "Zen",
            historyBtn: "History",
            customBtn: "Custom",
            setBtn: "Set",
            secPlaceholder: "Sec",
            langLabel: "Language:",
            donateBtn: "Donate",
            donateTitle: "Support TypingDost",
            donateSubtitle: "Hey friend! 👋 TypingDost is completely free for everyone. Agar is tool ne aapki speed badhai, toh consider buying me a coffee ☕",
            donateHighlight: "Aapka small support is project ko alive and grow karne me help karega! 🚀",
            mascotBubble: "Bhai kya speed hai! Tu toh keyboard ka raja hai!",
            focusMascotBubble: "Bhai, typing chhod kar kidhar gae?",
            practiceNow: "Practice Now! 🚀",
            closeBtn: "Close",
            learningTitle: "🎓 Learning Academy",
            learningSubtitle: "Learn Touch Typing from Zero to Keyboard Master",
            soundLabel: "Keyboard Sound",
            themeLabel: "Theme Mode",
            displayModeLabel: "Display Mode",
            footerText: "Sleek cyberpunk aesthetics ke sath apni typing speed ko elevate karein.",
            tabs: [
                "Chapter 1: Home Row",
                "Chapter 2: Top Row",
                "Chapter 3: Bottom Row",
                "Chapter 4: Numbers",
                "Chapter 5: Pro Speed"
            ]
        },
        spanish: {
            practiceLabel: "Práctica",
            testLabel: "Prueba de Escritura",
            govtLabel: "Examen Oficial",
            navLearning: "🎓 Aprendizaje",
            navWeakspot: "Punto Débil",
            navLaserDefense: "Defensa Láser 🚀",
            navCyberFall: "Caída Cyber ☄️",
            navBubbleShooter: "Disparador 🫧",
            timeLabel: "Tiempo",
            wpmLabel: "PPM",
            accLabel: "Precisión",
            mistakesLabel: "Errores",
            newTextBtn: "Nuevo Texto",
            zenBtn: "Zen",
            historyBtn: "Historial",
            customBtn: "Personalizar",
            setBtn: "Definir",
            secPlaceholder: "Seg",
            langLabel: "Idioma:",
            donateBtn: "Donar",
            donateTitle: "Apoya a TypingDost",
            donateSubtitle: "¡Hola amigo! 👋 TypingDost es completamente gratuito para todos. Si esta herramienta te ayudó a mejorar tu velocidad, considera invitarme a un café ☕",
            donateHighlight: "¡Tu pequeño apoyo mantiene este proyecto vivo y en crecimiento! 🚀",
            mascotBubble: "¡Guau qué velocidad! ¡Eres el rey del teclado!",
            focusMascotBubble: "Oye, ¿a dónde fuiste? ¡No me dejes solo!",
            practiceNow: "¡Practica Ahora! 🚀",
            closeBtn: "Cerrar",
            learningTitle: "🎓 Academia",
            learningSubtitle: "Mecanografía al tacto desde cero hasta maestro del teclado",
            soundLabel: "Sonido del Teclado",
            themeLabel: "Tema Visual",
            displayModeLabel: "Modo Pantalla",
            footerText: "Eleva tu velocidad de escritura con una estética cyberpunk elegante.",
            tabs: [
                "Capítulo 1: Fila Base",
                "Capítulo 2: Fila Superior",
                "Capítulo 3: Fila Inferior",
                "Capítulo 4: Números",
                "Capítulo 5: Velocidad Pro"
            ]
        },
        french: {
            practiceLabel: "Pratique",
            testLabel: "Test de Saisie",
            govtLabel: "Examen Officiel",
            navLearning: "🎓 Apprentissage",
            navWeakspot: "Point Faible",
            navLaserDefense: "Défense Laser 🚀",
            navCyberFall: "Chute Cyber ☄️",
            navBubbleShooter: "Jeu de Bulles 🫧",
            timeLabel: "Temps",
            wpmLabel: "MPM",
            accLabel: "Précision",
            mistakesLabel: "Erreurs",
            newTextBtn: "Nouveau Texte",
            zenBtn: "Zen",
            historyBtn: "Historique",
            customBtn: "Perso",
            setBtn: "Définir",
            secPlaceholder: "Sec",
            langLabel: "Langue:",
            donateBtn: "Faire un don",
            donateTitle: "Soutenir TypingDost",
            donateSubtitle: "Salut l'ami ! 👋 TypingDost est totalement gratuit. Si cet outil vous a aidé à progresser, pensez à m'offrir un café ☕",
            donateHighlight: "Votre modeste soutien maintient ce projet en vie et en pleine croissance ! 🚀",
            mascotBubble: "Quelle vitesse ! Tu es le roi du clavier !",
            focusMascotBubble: "Hé, où es-tu allé ? Ne me laisse pas seul !",
            practiceNow: "Pratiquer Maintenant ! 🚀",
            closeBtn: "Fermer",
            learningTitle: "🎓 Académie",
            learningSubtitle: "Dactylographie du niveau zéro au maître du clavier",
            soundLabel: "Son du Clavier",
            themeLabel: "Mode Thème",
            displayModeLabel: "Mode Affichage",
            footerText: "Améliorez votre vitesse de frappe avec une esthétique cyberpunk élégante.",
            tabs: [
                "Chapitre 1: Ligne de Base",
                "Chapitre 2: Ligne Supérieure",
                "Chapitre 3: Ligne Inférieure",
                "Chapitre 4: Chiffres",
                "Chapitre 5: Vitesse Pro"
            ]
        },
        german: {
            practiceLabel: "Üben",
            testLabel: "Schreibtest",
            govtLabel: "Staatsexamen",
            navLearning: "🎓 Lernen",
            navWeakspot: "Schwachpunkt",
            navLaserDefense: "Laser-Schutz 🚀",
            navCyberFall: "Cyber-Fall ☄️",
            navBubbleShooter: "Blasen-Shooter 🫧",
            timeLabel: "Zeit",
            wpmLabel: "WPM",
            accLabel: "Genauigkeit",
            mistakesLabel: "Fehler",
            newTextBtn: "Neuer Text",
            zenBtn: "Zen",
            historyBtn: "Verlauf",
            customBtn: "Anpassen",
            setBtn: "Festlegen",
            secPlaceholder: "Sek",
            langLabel: "Sprache:",
            donateBtn: "Spenden",
            donateTitle: "TypingDost unterstützen",
            donateSubtitle: "Hallo Freund! 👋 TypingDost ist für alle völlig kostenlos. Wenn dieses Tool dir geholfen hat, deine Tippgeschwindigkeit zu verbessern, ziehe in Betracht, mir einen Kaffee auszugeben ☕",
            donateHighlight: "Deine kleine Unterstützung hält dieses Projekt am Leben und wächst! 🚀",
            mascotBubble: "Was für eine Geschwindigkeit! Du bist der König der Tastatur!",
            focusMascotBubble: "Hey, wo bist du hingegangen? Lass mich nicht alleine!",
            practiceNow: "Jetzt üben! 🚀",
            closeBtn: "Schließen",
            learningTitle: "🎓 Lernakademie",
            learningSubtitle: "Zehnfingersystem von Null auf zum Tastaturmeister",
            soundLabel: "Tastaturton",
            themeLabel: "Design-Modus",
            displayModeLabel: "Anzeigemodus",
            footerText: "Erhöhen Sie Ihre Tippgeschwindigkeit mit eleganter Cyberpunk-Ästhetik.",
            tabs: [
                "Kapitel 1: Grundreihe",
                "Kapitel 2: Obere Reihe",
                "Kapitel 3: Untere Reihe",
                "Kapitel 4: Zahlen",
                "Kapitel 5: Pro-Geschwindigkeit"
            ]
        },
        arabic: {
            practiceLabel: "التدريب",
            testLabel: "اختبار الكتابة",
            govtLabel: "امتحان رسمي",
            navLearning: "🎓 التعلم",
            navWeakspot: "نقطة الضعف",
            navLaserDefense: "الدفاع بالليزر 🚀",
            navCyberFall: "السقوط السيبراني ☄️",
            navBubbleShooter: "قاذف الفقاعات 🫧",
            timeLabel: "الوقت",
            wpmLabel: "ك.د",
            accLabel: "الدقة",
            mistakesLabel: "الأخطاء",
            newTextBtn: "نص جديد",
            zenBtn: "زين",
            historyBtn: "السجل",
            customBtn: "مخصص",
            setBtn: "تعيين",
            secPlaceholder: "ثانية",
            langLabel: "اللغة:",
            donateBtn: "تبرع",
            donateTitle: "دعم TypingDost",
            donateSubtitle: "أهلاً يا صديقي! 👋 إن TypingDost مجاني تماماً للجميع. إذا ساعدتك هذه الأداة في تحسين سرعتك، ففكر في دعمي بكوب قهوة ☕",
            donateHighlight: "دعمك البسيط يبقي هذا المشروع حياً ومستمراً بالنمو! 🚀",
            mascotBubble: "ما هذه السرعة! أنت ملك لوحة المفاتيح!",
            focusMascotBubble: "Ya akhi, ayna dahabt? La tatrukni wahdi!",
            practiceNow: "تمرن الآن! 🚀",
            closeBtn: "إغلاق",
            learningTitle: "🎓 أكاديمية التعلم",
            learningSubtitle: "تعلم الكتابة باللمس من الصفر إلى الاحتراف",
            soundLabel: "صوت لوحة المفاتيح",
            themeLabel: "وضع المظهر",
            displayModeLabel: "وضع العرض",
            footerText: "ارفع سرعة كتابتك بجماليات السايبربانك الأنيقة.",
            tabs: [
                "الفصل الأول: صف الارتكاز",
                "الفصل الثاني: الصف العلوي",
                "الفصل الثالث: الصف السفلي",
                "الفصل الرابع: الأرقام",
                "الفصل الخامس: السرعة الفائقة"
            ]
        },
        japanese: {
            practiceLabel: "練習",
            testLabel: "タイピングテスト",
            govtLabel: "公務員試験",
            navLearning: "🎓 学習する",
            navWeakspot: "苦手キー",
            navLaserDefense: "レーザー防衛 🚀",
            navCyberFall: "サイバーフォール ☄️",
            navBubbleShooter: "バブルシューター 🫧",
            timeLabel: "時間",
            wpmLabel: "WPM",
            accLabel: "正確さ",
            mistakesLabel: "ミス数",
            newTextBtn: "新テキスト",
            zenBtn: "禅",
            historyBtn: "履歴",
            customBtn: "カスタム",
            setBtn: "設定",
            secPlaceholder: "秒",
            langLabel: "言語:",
            donateBtn: "寄付する",
            donateTitle: "TypingDostを支援する",
            donateSubtitle: "友よ、こんにちは！👋 TypingDostは誰でも完全に無料です。このツールでスピードが向上したなら、コーヒーを一杯ごちそうすることを検討してください ☕",
            donateHighlight: "あなたの小さな支援がこのプロジェクトを維持し、成長させます！ 🚀",
            mascotBubble: "素晴らしいスピード！あなたはキーボードの王様です！",
            focusMascotBubble: "あれ、どこ行っちゃったの？一人にしないで！",
            practiceNow: "今すぐ練習！ 🚀",
            closeBtn: "閉じる",
            learningTitle: "🎓 ラーニングアカデミー",
            learningSubtitle: "タッチタイピングをゼロからキーボードマスターまで学ぶ",
            soundLabel: "打鍵音選択",
            themeLabel: "テーマ選択",
            displayModeLabel: "表示モード",
            footerText: "洗練されたサイバーパンクの美学でタイピング速度を向上させます。",
            tabs: [
                "第1章：ホームポジション",
                "第2章：上段行",
                "第3章：下段行",
                "第4章：数字キー",
                "第5章：プロスピード"
            ]
        },
        portuguese: {
            practiceLabel: "Praticar",
            testLabel: "Teste de Escrita",
            govtLabel: "Exame Oficial",
            navLearning: "🎓 Aprendizado",
            navWeakspot: "Ponto Fraco",
            navLaserDefense: "Defesa Laser 🚀",
            navCyberFall: "Queda Cyber ☄️",
            navBubbleShooter: "Atirador Bolhas 🫧",
            timeLabel: "Tempo",
            wpmLabel: "PPM",
            accLabel: "Precisão",
            mistakesLabel: "Erros",
            newTextBtn: "Novo Texto",
            zenBtn: "Zen",
            historyBtn: "Histórico",
            customBtn: "Customizar",
            setBtn: "Definir",
            secPlaceholder: "Seg",
            langLabel: "Idioma:",
            donateBtn: "Doar",
            donateTitle: "Apoie o TypingDost",
            donateSubtitle: "Olá amigo! 👋 O TypingDost é totalmente gratuito para todos. Se esta ferramenta ajudou você a melhorar a sua velocidade, considere me pagar um café ☕",
            donateHighlight: "Seu pequeno apoio mantém este projeto vivo e crescendo! 🚀",
            mascotBubble: "Que velocidade! Você é o rei do teclado!",
            focusMascotBubble: "Ei, onde você foi? Não me deixe sozinho!",
            practiceNow: "Praticar Agora! 🚀",
            closeBtn: "Fechar",
            learningTitle: "🎓 Academia",
            learningSubtitle: "Aprenda dactilografia do zero ao mestre do teclado",
            soundLabel: "Som do Teclado",
            themeLabel: "Modo Tema",
            displayModeLabel: "Modo Exibição",
            footerText: "Eleve a sua velocidade de digitação com uma estética cyberpunk elegante.",
            tabs: [
                "Linha de Base",
                "Linha Superior",
                "Linha Inferior",
                "Números",
                "Velocidade Pro"
            ]
        }
,
        bengali: {
        practiceLabel: "অনুশীলন",
        testLabel: "টাইপিং টেস্ট",
        govtLabel: "সরকারি পরীক্ষা",
        navLearning: "🎓 শিক্ষা",
        navWeakspot: "উইকস্পট",
        navLaserDefense: "লেজার ডিফেন্স 🚀",
        navCyberFall: "সাইবার ফল ☄️",
        navBubbleShooter: "বাবল শুটার 🫧",
        timeLabel: "সময়",
        wpmLabel: "WPM",
        accLabel: "সঠিকতা",
        mistakesLabel: "ভুল",
        newTextBtn: "নতুন পাঠ",
        zenBtn: "জেন",
        historyBtn: "ইতিহাস",
        customBtn: "কাস্টম",
        setBtn: "সেট",
        secPlaceholder: "সেকেন্ড",
        langLabel: "ভাষা:",
        donateBtn: "দান করুন",
        donateTitle: "TypingDost-কে সমর্থন করুন",
        donateSubtitle: "হে বন্ধু! 👋 TypingDost সবার জন্য সম্পূর্ণ বিনামূল্যে। যদি এই টুলটি আপনার টাইপিং স্পিড উন্নত করতে সাহায্য করে, তবে আমাকে একটি কফি কিনে দেওয়ার কথা বিবেচনা করুন ☕",
        donateHighlight: "আপনার ছোট সমর্থন এই প্রকল্পটিকে জীবিত এবং বাড়তে সাহায্য করে! 🚀",
        mascotBubble: "বাহ কি স্পিড! তুমি তো কীবোর্ডের রাজা!",
        focusMascotBubble: "ভাই, টাইপিং ছেড়ে কোথায় গেলে?",
        practiceNow: "এখন অনুশীলন করুন! 🚀",
        closeBtn: "বন্ধ করুন",
        learningTitle: "🎓 লার্নিং একাডেমি",
        learningSubtitle: "শূন্য থেকে কীবোর্ড মাস্টার পর্যন্ত টাচ টাইপিং শিখুন",
        soundLabel: "কীবোর্ড সাউন্ড",
        themeLabel: "থিম মোড",
        displayModeLabel: "ডিসপ্লে মোড",
        footerText: "স্লিক সাইবারপাঙ্ক নান্দনিকতার সাথে আপনার টাইপিং স্পিড উন্নত করুন।",
        tabs: [
            "অধ্যায় 1: হোম রো",
            "অধ্যায় 2: টপ রো",
            "অধ্যায় 3: বটম রো",
            "অধ্যায় 4: নাম্বার রো",
            "অধ্যায় 5: প্রো স্পিড"
        ]
    },
    marathi: {
        practiceLabel: "सराव",
        testLabel: "टायपिंग टेस्ट",
        govtLabel: "सरकारी परीक्षा",
        navLearning: "🎓 शिक्षण",
        navWeakspot: "वीकस्पॉट",
        navLaserDefense: "लेझर डिफेन्स 🚀",
        navCyberFall: "सायबर फॉल ☄️",
        navBubbleShooter: "बबल शूटर 🫧",
        timeLabel: "वेळ",
        wpmLabel: "WPM",
        accLabel: "अचूकता",
        mistakesLabel: "चुका",
        newTextBtn: "नवीन मजकूर",
        zenBtn: "झेन",
        historyBtn: "इतिहास",
        customBtn: "कस्टम",
        setBtn: "सेट",
        secPlaceholder: "सेकंद",
        langLabel: "भाषा:",
        donateBtn: "देणगी द्या",
        donateTitle: "TypingDost ला सपोर्ट करा",
        donateSubtitle: "अरे मित्रा! 👋 TypingDost सर्वांसाठी पूर्णपणे विनामूल्य आहे. जर या टूलमुळे तुमचा टायपिंग स्पीड सुधारला असेल, तर मला कॉफी खरेदी करण्याचा विचार करा ☕",
        donateHighlight: "तुमचा छोटा सपोर्ट या प्रकल्पाला जिवंत आणि वाढण्यास मदत करतो! 🚀",
        mascotBubble: "वा काय स्पीड आहे! तू तर कीबोर्डचा राजा आहेस!",
        focusMascotBubble: "भावा, टायपिंग सोडून कुठे गेलास?",
        practiceNow: "आता सराव करा! 🚀",
        closeBtn: "बंद करा",
        learningTitle: "🎓 लर्निंग अकादमी",
        learningSubtitle: "शून्यापासून कीबोर्ड मास्टरपर्यंत टच टायपिंग शिका",
        soundLabel: "कीबोर्ड ध्वनी",
        themeLabel: "थीम मोड",
        displayModeLabel: "डिस्प्ले मोड",
        footerText: "स्लीक सायबरपंक एस्थेटिक्ससह तुमचा टायपिंग स्पीड वाढवा.",
        tabs: [
            "धडा 1: होम रो",
            "धडा 2: टॉप रो",
            "धडा 3: बॉटम रो",
            "धडा 4: नंबर रो",
            "धडा 5: प्रो स्पीड"
        ]
    },
    tamil: {
        practiceLabel: "பயிற்சி",
        testLabel: "தட்டச்சு சோதனை",
        govtLabel: "அரசு தேர்வு",
        navLearning: "🎓 கற்றல்",
        navWeakspot: "வீக்ஸ்பாட்",
        navLaserDefense: "லேசர் டிஃபென்ஸ் 🚀",
        navCyberFall: "சைபர் ஃபால் ☄️",
        navBubbleShooter: "பபுள் ஷூட்டர் 🫧",
        timeLabel: "நேரம்",
        wpmLabel: "WPM",
        accLabel: "துல்லியம்",
        mistakesLabel: "தவறுகள்",
        newTextBtn: "புதிய உரை",
        zenBtn: "ஜென்",
        historyBtn: "வரலாறு",
        customBtn: "தனிப்பயன்",
        setBtn: "அமை",
        secPlaceholder: "விநாடி",
        langLabel: "மொழி:",
        donateBtn: "நன்கொடை",
        donateTitle: "TypingDost ஐ ஆதரிக்கவும்",
        donateSubtitle: "நண்பரே! 👋 TypingDost அனைவருக்கும் முற்றிலும் இலவசம். இந்த கருவி உங்கள் தட்டச்சு வேகத்தை மேம்படுத்த உதவியிருந்தால், எனக்கு ஒரு காபி வாங்கித் தரலாம் ☕",
        donateHighlight: "உங்கள் சிறிய ஆதரவு இந்த திட்டத்தை உயிர்ப்புடன் வைத்திருக்கவும் வளரவும் உதவுகிறது! 🚀",
        mascotBubble: "அட என்ன வேகம்! நீங்க தான் கீபோர்டு ராஜா!",
        focusMascotBubble: "நண்பா, டைப்பிங் விட்டுட்டு எங்க போனீங்க?",
        practiceNow: "இப்போதே பயிற்சி செய்! 🚀",
        closeBtn: "மூடு",
        learningTitle: "🎓 கற்றல் அகாடமி",
        learningSubtitle: "பூஜ்ஜியத்திலிருந்து கீபோர்டு மாஸ்டர் வரை டச் டைப்பிங் கற்றுக்கொள்ளுங்கள்",
        soundLabel: "கீபோர்டு ஒலி",
        themeLabel: "தீம் பயன்முறை",
        displayModeLabel: "காட்சி பயன்முறை",
        footerText: "நேர்த்தியான சைபர்பங்க் அழகியலுடன் உங்கள் தட்டச்சு வேகத்தை மேம்படுத்தவும்.",
        tabs: [
            "அத்தியாயம் 1: ஹோம் ரோ",
            "அத்தியாயம் 2: டாப் ரோ",
            "அத்தியாயம் 3: பாட்டம் ரோ",
            "அத்தியாயம் 4: நம்பர் ரோ",
            "அத்தியாயம் 5: ப்ரோ வேகம்"
        ]
    },
    telugu: {
        practiceLabel: "సాధన",
        testLabel: "టైపింగ్ పరీక్ష",
        govtLabel: "ప్రభుత్వ పరీక్ష",
        navLearning: "🎓 అభ్యాసం",
        navWeakspot: "వీక్‌స్పాట్",
        navLaserDefense: "లేజర్ డిఫెన్స్ 🚀",
        navCyberFall: "సైబర్ ఫాల్ ☄️",
        navBubbleShooter: "బబుల్ షూటర్ 🫧",
        timeLabel: "సమయం",
        wpmLabel: "WPM",
        accLabel: "ఖచ్చితత్వం",
        mistakesLabel: "తప్పులు",
        newTextBtn: "కొత్త వచనం",
        zenBtn: "జెన్",
        historyBtn: "చరిత్ర",
        customBtn: "కస్టమ్",
        setBtn: "సెట్",
        secPlaceholder: "సెకన్లు",
        langLabel: "భాష:",
        donateBtn: "విరాళం",
        donateTitle: "TypingDost కు మద్దతు ఇవ్వండి",
        donateSubtitle: "హే మిత్రమా! 👋 TypingDost అందరికీ పూర్తిగా ఉచితం. ఈ సాధనం మీ టైపింగ్ వేగాన్ని మెరుగుపరచడంలో సహాయపడితే, నాకు కాఫీ కొనాలని ఆలోచించండి ☕",
        donateHighlight: "మీ చిన్న మద్దతు ఈ ప్రాజెక్ట్‌ను సజీవంగా ఉంచడానికి మరియు ఎదగడానికి సహాయపడుతుంది! 🚀",
        mascotBubble: "వావ్ ఏం స్పీడ్! నువ్వే కీబోర్డ్ రాజువి!",
        focusMascotBubble: "సోదరా, టైపింగ్ వదిలేసి ఎక్కడికి వెళ్ళావు?",
        practiceNow: "ఇప్పుడే సాధన చేయండి! 🚀",
        closeBtn: "మూసివేయి",
        learningTitle: "🎓 అభ్యాస అకాడమీ",
        learningSubtitle: "సున్నా నుండి కీబోర్డ్ మాస్టర్ వరకు టచ్ టైపింగ్ నేర్చుకోండి",
        soundLabel: "కీబోర్డ్ ధ్వని",
        themeLabel: "థీమ్ మోడ్",
        displayModeLabel: "డిస్ప్లే మోడ్",
        footerText: "స్లీక్ సైబర్‌పంక్ ఈస్తటిక్స్‌తో మీ టైపింగ్ వేగాన్ని పెంచుకోండి.",
        tabs: [
            "అధ్యాయం 1: హోమ్ రో",
            "అధ్యాయం 2: టాప్ రో",
            "అధ్యాయం 3: బాటమ్ రో",
            "అధ్యాయం 4: నంబర్ రో",
            "అధ్యాయం 5: ప్రో స్పీడ్"
        ]
    },
    gujarati: {
        practiceLabel: "પ્રેક્ટિસ",
        testLabel: "ટાઇપિંગ ટેસ્ટ",
        govtLabel: "સરકારી પરીક્ષા",
        navLearning: "🎓 શિક્ષણ",
        navWeakspot: "વીકસ્પોટ",
        navLaserDefense: "લેસર ડિફેન્સ 🚀",
        navCyberFall: "સાયબર ફોલ ☄️",
        navBubbleShooter: "બબલ શૂટર 🫧",
        timeLabel: "સમય",
        wpmLabel: "WPM",
        accLabel: "ચોકસાઈ",
        mistakesLabel: "ભૂલો",
        newTextBtn: "નવો પાઠ",
        zenBtn: "ઝેન",
        historyBtn: "ઇતિહાસ",
        customBtn: "કસ્ટમ",
        setBtn: "સેટ",
        secPlaceholder: "સેકંડ",
        langLabel: "ભાષા:",
        donateBtn: "દાન કરો",
        donateTitle: "TypingDost ને સપોર્ટ કરો",
        donateSubtitle: "હે મિત્ર! 👋 TypingDost બધા માટે સંપૂર્ણપણે મફત છે. જો આ સાધને તમારી ટાઇપિંગ ઝડપ સુધારવામાં મદદ કરી હોય, તો મને કોફી ખરીદવાનું વિચારો ☕",
        donateHighlight: "તમારો નાનો ટેકો આ પ્રોજેક્ટને જીવંત રાખવામાં અને વધારવામાં મદદ કરે છે! 🚀",
        mascotBubble: "વાહ શું સ્પીડ છે! તું તો કીબોર્ડનો રાજા છે!",
        focusMascotBubble: "ભાઈ, ટાઇપિંગ છોડીને ક્યાં ગયો?",
        practiceNow: "હમણાં જ પ્રેક્ટિસ કરો! 🚀",
        closeBtn: "બંધ કરો",
        learningTitle: "🎓 લર્નિંગ એકેડેમી",
        learningSubtitle: "શૂન્યથી કીબોર્ડ માસ્ટર સુધી ટચ ટાઇપિંગ શીખો",
        soundLabel: "કીબોર્ડ અવાજ",
        themeLabel: "થીમ મોડ",
        displayModeLabel: "ડિસ્પ્લે મોડ",
        footerText: "સ્લીક સાયબરપંક એસ્થેટિક્સ સાથે તમારી ટાઇપિંગ સ્પીડમાં વધારો કરો.",
        tabs: [
            "પ્રકરણ 1: હોમ રો",
            "પ્રકરણ 2: ટોપ રો",
            "પ્રકરણ 3: બોટમ રો",
            "પ્રકરણ 4: નંબર રો",
            "પ્રકરણ 5: પ્રો સ્પીડ"
        ]
    },
    kannada: {
        practiceLabel: "ಅಭ್ಯಾಸ",
        testLabel: "ಟೈಪಿಂಗ್ ಪರೀಕ್ಷೆ",
        govtLabel: "ಸರ್ಕಾರಿ ಪರೀಕ್ಷೆ",
        navLearning: "🎓 ಕಲಿಕೆ",
        navWeakspot: "ವೀಕ್‌ಸ್ಪಾಟ್",
        navLaserDefense: "ಲೇಸರ್ ಡಿಫೆನ್ಸ್ 🚀",
        navCyberFall: "ಸೈಬರ್ ಫಾಲ್ ☄️",
        navBubbleShooter: "ಬಬಲ್ ಶೂಟರ್ 🫧",
        timeLabel: "ಸಮಯ",
        wpmLabel: "WPM",
        accLabel: "ನಿಖರತೆ",
        mistakesLabel: "ತಪ್ಪುಗಳು",
        newTextBtn: "ಹೊಸ ಪಠ್ಯ",
        zenBtn: "ಝೆನ್",
        historyBtn: "ಇತಿಹಾಸ",
        customBtn: "ಕಸ್ಟಮ್",
        setBtn: "ಹೊಂದಿಸು",
        secPlaceholder: "ಸೆಕೆಂಡ್",
        langLabel: "ಭಾಷೆ:",
        donateBtn: "ದೇಣಿಗೆ ನೀಡಿ",
        donateTitle: "TypingDost ಅನ್ನು ಬೆಂಬಲಿಸಿ",
        donateSubtitle: "ಹೇ ಸ್ನೇಹಿತ! 👋 TypingDost ಎಲ್ಲರಿಗೂ ಸಂಪೂರ್ಣವಾಗಿ ಉಚಿತವಾಗಿದೆ. ಈ ಉಪಕರಣವು ನಿಮ್ಮ ಟೈಪಿಂಗ್ ವೇಗವನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡಿದ್ದರೆ, ನನಗೆ ಕಾಫಿ ಖರೀದಿಸಲು ಪರಿಗಣಿಸಿ ☕",
        donateHighlight: "ನಿಮ್ಮ ಸಣ್ಣ ಬೆಂಬಲ ಈ ಯೋಜನೆಯನ್ನು ಜೀವಂತವಾಗಿರಿಸಲು ಮತ್ತು ಬೆಳೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ! 🚀",
        mascotBubble: "ವಾವ್ ಏನು ವೇಗ! ನೀನೇ ಕೀಬೋರ್ಡ್ ರಾಜ!",
        focusMascotBubble: "ಅಣ್ಣಾ, ಟೈಪಿಂಗ್ ಬಿಟ್ಟು ಎಲ್ಲಿಗೆ ಹೋದೆ?",
        practiceNow: "ಈಗಲೇ ಅಭ್ಯಾಸ ಮಾಡಿ! 🚀",
        closeBtn: "ಮುಚ್ಚು",
        learningTitle: "🎓 ಲರ್ನಿಂಗ್ ಅಕಾಡೆಮಿ",
        learningSubtitle: "ಶೂನ್ಯದಿಂದ ಕೀಬೋರ್ಡ್ ಮಾಸ್ಟರ್ ವರೆಗೆ ಟಚ್ ಟೈಪಿಂಗ್ ಕಲಿಯಿರಿ",
        soundLabel: "ಕೀಬೋರ್ಡ್ ಧ್ವನಿ",
        themeLabel: "ಥೀಮ್ ಮೋಡ್",
        displayModeLabel: "ಡಿಸ್ಪ್ಲೇ ಮೋಡ್",
        footerText: "ಸ್ಲೀಕ್ ಸೈಬರ್‌ಪಂಕ್ ಸೌಂದರ್ಯಶಾಸ್ತ್ರದೊಂದಿಗೆ ನಿಮ್ಮ ಟೈಪಿಂಗ್ ವೇಗವನ್ನು ಹೆಚ್ಚಿಸಿ.",
        tabs: [
            "ಅಧ್ಯಾಯ 1: ಹೋಮ್ ರೋ",
            "ಅಧ್ಯಾಯ 2: ಟಾಪ್ ರೋ",
            "ಅಧ್ಯಾಯ 3: ಬಾಟಮ್ ರೋ",
            "ಅಧ್ಯಾಯ 4: ನಂಬರ್ ರೋ",
            "ಅಧ್ಯಾಯ 5: ಪ್ರೊ ವೇಗ"
        ]
    },
    malayalam: {
        practiceLabel: "പരിശീലനം",
        testLabel: "ടൈപ്പിംഗ് ടെസ്റ്റ്",
        govtLabel: "സർക്കാർ പരീക്ഷ",
        navLearning: "🎓 പഠനം",
        navWeakspot: "വീക്ക്സ്പോട്ട്",
        navLaserDefense: "ലേസർ ഡിഫൻസ് 🚀",
        navCyberFall: "സൈബർ ഫോൾ ☄️",
        navBubbleShooter: "ബബിൾ ഷൂട്ടർ 🫧",
        timeLabel: "സമയം",
        wpmLabel: "WPM",
        accLabel: "കൃത്യത",
        mistakesLabel: "തെറ്റുകൾ",
        newTextBtn: "പുതിയ വാചകം",
        zenBtn: "സെൻ",
        historyBtn: "ചരിത്രം",
        customBtn: "കസ്റ്റം",
        setBtn: "സെറ്റ് ചെയ്യുക",
        secPlaceholder: "സെക്കൻഡ്",
        langLabel: "ഭാഷ:",
        donateBtn: "സംഭാവന ചെയ്യുക",
        donateTitle: "TypingDost നെ പിന്തുണയ്ക്കുക",
        donateSubtitle: "ഹേയ് സുഹൃത്തേ! 👋 TypingDost എല്ലാവർക്കും പൂർണ്ണമായും സൗജന്യമാണ്. ഈ ഉപകരണം നിങ്ങളുടെ ടൈപ്പിംഗ് വേഗത മെച്ചപ്പെടുത്താൻ സഹായിച്ചുവെങ്കിൽ, എനിക്ക് ഒരു കോഫി വാങ്ങാൻ പരിഗണിക്കുക ☕",
        donateHighlight: "നിങ്ങളുടെ ചെറിയ പിന്തുണ ഈ പ്രോജക്റ്റ് സജീവമായി നിലനിർത്താനും വളരാനും സഹായിക്കുന്നു! 🚀",
        mascotBubble: "വൗ എന്തൊരു സ്പീഡ്! നീയാണ് കീബോർഡിന്റെ രാജാവ്!",
        focusMascotBubble: "സഹോദരാ, ടൈപ്പിംഗ് നിർത്തിയിട്ട് എങ്ങോട്ട് പോയി?",
        practiceNow: "ഇപ്പോൾ പരിശീലിക്കുക! 🚀",
        closeBtn: "അടയ്ക്കുക",
        learningTitle: "🎓 ലേണിംഗ് അക്കാദമി",
        learningSubtitle: "പൂജ്യത്തിൽ നിന്ന് കീബോർഡ് മാസ്റ്ററിലേക്ക് ടച്ച് ടൈപ്പിംഗ് പഠിക്കുക",
        soundLabel: "കീബോർഡ് ശബ്ദം",
        themeLabel: "തീം മോഡ്",
        displayModeLabel: "ഡിസ്പ്ലേ മോഡ്",
        footerText: "സ്ലീക്ക് സൈബർപങ്ക് സൗന്ദര്യശാസ്ത്രം ഉപയോഗിച്ച് നിങ്ങളുടെ ടൈപ്പിംഗ് വേഗത വർദ്ധിപ്പിക്കുക.",
        tabs: [
            "അധ്യായം 1: ഹോം റോ",
            "അധ്യായം 2: ടോപ്പ് റോ",
            "അധ്യായ 3: ബോട്ടം റോ",
            "അധ്യായ 4: നമ്പർ റോ",
            "അധ്യായ 5: പ്രോ സ്പീഡ്"
        ]
    },
    odia: {
        practiceLabel: "ଅଭ୍ୟାସ",
        testLabel: "ଟାଇପିଂ ଟେଷ୍ଟ",
        govtLabel: "ସରକାରୀ ପରୀକ୍ଷା",
        navLearning: "🎓 ଶିକ୍ଷଣ",
        navWeakspot: "ୱିକସ୍ପଟ୍",
        navLaserDefense: "ଲେଜର ଡିଫେନ୍ସ 🚀",
        navCyberFall: "ସାଇବର ଫଲ ☄️",
        navBubbleShooter: "ବବଲ୍ ସୁଟର୍ 🫧",
        timeLabel: "ସମୟ",
        wpmLabel: "WPM",
        accLabel: "ସଠିକତା",
        mistakesLabel: "ଭୁଲ",
        newTextBtn: "ନୂତନ ପାଠ୍ୟ",
        zenBtn: "ଜେନ୍",
        historyBtn: "ଇତିହାସ",
        customBtn: "କଷ୍ଟମ୍",
        setBtn: "ସେଟ୍",
        secPlaceholder: "ସେକେଣ୍ଡ",
        langLabel: "ଭାଷା:",
        donateBtn: "ଦାନ କରନ୍ତୁ",
        donateTitle: "TypingDost କୁ ସମର୍ଥନ କରନ୍ତୁ",
        donateSubtitle: "ହେ ବନ୍ଧୁ! 👋 TypingDost ସମସ୍ତଙ୍କ ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ମାଗଣା। ଯଦି ଏହି ଟୁଲ୍ ଆପଣଙ୍କର ଟାଇପିଂ ସ୍ପିଡ୍ ବଢାଇବାରେ ସାହାଯ୍ୟ କଲା, ତେବେ ମୋ ପାଇଁ ଏକ କଫି କିଣିବାକୁ ବିଚାର କରନ୍ତୁ ☕",
        donateHighlight: "ଆପଣଙ୍କର ଛୋଟ ସମର୍ଥନ ଏହି ପ୍ରୋଜେକ୍ଟକୁ ଜୀବନ୍ତ ଏବଂ ବଢିବାରେ ସାହାଯ୍ୟ କରେ! 🚀",
        mascotBubble: "ୱାହ କଣ ସ୍ପିଡ୍! ତୁମେ ତ କୀବୋର୍ଡର ରାଜା!",
        focusMascotBubble: "ଭାଇ, ଟାଇପିଂ ଛାଡି କୁଆଡେ ଗଲ?",
        practiceNow: "ବର୍ତ୍ତମାନ ଅଭ୍ୟାସ କରନ୍ତୁ! 🚀",
        closeBtn: "ବନ୍ଦ କରନ୍ତୁ",
        learningTitle: "🎓 ଲର୍ନିଂ ଏକାଡେମୀ",
        learningSubtitle: "ଶୂନରୁ କୀବୋର୍ଡ ମାଷ୍ଟର ପର୍ଯ୍ୟନ୍ତ ଟଚ୍ ଟାଇପିଂ ଶିଖନ୍ତୁ",
        soundLabel: "କୀବୋର୍ଡ ଧ୍ୱନି",
        themeLabel: "ଥିମ୍ ମୋଡ୍",
        displayModeLabel: "ଡିସପ୍ଲେ ମୋଡ୍",
        footerText: "ସ୍ଲିକ୍ ସାଇବରପଙ୍କ ଆସ୍ଥେଟିକ୍ସ ସହିତ ଆପଣଙ୍କ ଟାଇପିଂ ସ୍ପିଡ୍ ବଢାନ୍ତୁ।",
        tabs: [
            "ଅଧ୍ୟାୟ 1: ହୋମ୍ ରୋ",
            "ଅଧ୍ୟାୟ 2: ଟପ୍ ରୋ",
            "ଅଧ୍ୟାୟ 3: ବଟମ୍ ରୋ",
            "ଅଧ୍ୟାୟ 4: ନମ୍ବର ରୋ",
            "ଅଧ୍ୟାୟ 5: ପ୍ରୋ ସ୍ପିଡ୍"
        ]
    },
    punjabi: {
        practiceLabel: "ਅਭਿਆਸ",
        testLabel: "ਟਾਈਪਿੰਗ ਟੈਸਟ",
        govtLabel: "ਸਰਕਾਰੀ ਪ੍ਰੀਖਿਆ",
        navLearning: "🎓 ਸਿੱਖਿਆ",
        navWeakspot: "ਵੀਕਸਪੌਟ",
        navLaserDefense: "ਲੇਜ਼ਰ ਡਿਫੈਂਸ 🚀",
        navCyberFall: "ਸਾਈਬਰ ਫਾਲ ☄️",
        navBubbleShooter: "ਬਬਲ ਸ਼ੂਟਰ 🫧",
        timeLabel: "ਸਮਾਂ",
        wpmLabel: "WPM",
        accLabel: "ਸ਼ੁੱਧਤਾ",
        mistakesLabel: "ਗਲਤੀਆਂ",
        newTextBtn: "ਨਵਾਂ ਪਾਠ",
        zenBtn: "ਜ਼ੈਨ",
        historyBtn: "ਇਤਿਹਾਸ",
        customBtn: "ਕਸਟਮ",
        setBtn: "ਸੈੱਟ",
        secPlaceholder: "ਸਕਿੰਟ",
        langLabel: "ਭਾਸ਼ਾ:",
        donateBtn: "ਦਾਨ ਕਰੋ",
        donateTitle: "TypingDost ਦਾ ਸਮਰਥਨ ਕਰੋ",
        donateSubtitle: "ਹੇ ਦੋਸਤ! 👋 TypingDost ਸਾਰਿਆਂ ਲਈ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁਫਤ ਹੈ। ਜੇਕਰ ਇਸ ਟੂਲ ਨੇ ਤੁਹਾਡੀ ਟਾਈਪਿੰਗ ਸਪੀਡ ਵਧਾਉਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ ਹੈ, ਤਾਂ ਮੈਨੂੰ ਕੌਫੀ ਖਰੀਦਣ ਬਾਰੇ ਵਿਚਾਰ ਕਰੋ ☕",
        donateHighlight: "ਤੁਹਾਡਾ ਛੋਟਾ ਜਿਹਾ ਸਮਰਥਨ ਇਸ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਜਿੰਦਾ ਰੱਖਣ ਅਤੇ ਵਧਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ! 🚀",
        mascotBubble: "ਵਾਹ ਕੀ ਸਪੀਡ ਹੈ! ਤੂੰ ਤਾਂ ਕੀਬੋਰਡ ਦਾ ਰਾਜਾ ਹੈਂ!",
        focusMascotBubble: "ਭਰਾਵਾ, ਟਾਈਪਿੰਗ ਛੱਡ ਕੇ ਕਿੱਥੇ ਗਿਆ?",
        practiceNow: "ਹੁਣੇ ਅਭਿਆਸ ਕਰੋ! 🚀",
        closeBtn: "ਬੰਦ ਕਰੋ",
        learningTitle: "🎓 ਲਰਨਿੰਗ ਅਕੈਡਮੀ",
        learningSubtitle: "ਜ਼ੀਰੋ ਤੋਂ ਕੀਬੋਰਡ ਮਾਸਟਰ ਤੱਕ ਟੱਚ ਟਾਈਪਿੰਗ ਸਿੱਖੋ",
        soundLabel: "ਕੀਬੋਰਡ ਆਵਾਜ਼",
        themeLabel: "ਥੀਮ ਮੋਡ",
        displayModeLabel: "ਡਿਸਪਲੇ ਮੋਡ",
        footerText: "ਸਲੀਕ ਸਾਈਬਰਪੰਕ ਸੁਹਜ-ਸ਼ਾਸਤਰ ਨਾਲ ਆਪਣੀ ਟਾਈਪਿੰਗ ਸਪੀਡ ਵਧਾਓ।",
        tabs: [
            "ਅਧਿਆਇ 1: ਹੋਮ ਰੋ",
            "ਅਧਿਆਇ 2: ਟੌਪ ਰੋ",
            "ਅਧਿਆਇ 3: ਬੌਟਮ ਰੋ",
            "ਅਧਿਆਇ 4: ਨੰਬਰ ਰੋ",
            "ਅਧਿਆਇ 5: ਪ੍ਰੋ ਸਪੀਡ"
        ]
    },
    urdu: {
        practiceLabel: "مشق",
        testLabel: "ٹائپنگ ٹیسٹ",
        govtLabel: "سرکاری امتحان",
        navLearning: "🎓 سیکھنا",
        navWeakspot: "کمزور نقطہ",
        navLaserDefense: "لیزر ڈیفنس 🚀",
        navCyberFall: "سائبر فال ☄️",
        navBubbleShooter: "ببل شوٹر 🫧",
        timeLabel: "وقت",
        wpmLabel: "WPM",
        accLabel: "درستگی",
        mistakesLabel: "غلطیاں",
        newTextBtn: "نیا متن",
        zenBtn: "زین",
        historyBtn: "تاریخ",
        customBtn: "اپنی مرضی",
        setBtn: "سیٹ کریں",
        secPlaceholder: "سیکنڈ",
        langLabel: "زبان:",
        donateBtn: "عطیہ کریں",
        donateTitle: "TypingDost کی حمایت کریں",
        donateSubtitle: "ارے دوست! 👋 TypingDost سب کے لیے بالکل مفت ہے۔ اگر اس ٹول نے آپ کی ٹائپنگ کی رفتار کو بہتر بنانے میں مدد کی ہے، تو مجھے ایک کافی خریدنے پر غور کریں ☕",
        donateHighlight: "آپ کا چھوٹا سا تعاون اس پروجیکٹ کو زندہ اور بڑھنے میں مدد کرتا ہے! 🚀",
        mascotBubble: "واہ کیا رفتار ہے! تم تو کی بورڈ کے بادشاہ ہو!",
        focusMascotBubble: "بھائی، ٹائپنگ چھوڑ کر کہاں گئے؟",
        practiceNow: "ابھی مشق کریں! 🚀",
        closeBtn: "بند کریں",
        learningTitle: "🎓 لرننگ اکیڈمی",
        learningSubtitle: "صفر سے کی بورڈ ماسٹر تک ٹچ ٹائپنگ سیکھیں",
        soundLabel: "کی بورڈ کی آواز",
        themeLabel: "تھیم موڈ",
        displayModeLabel: "ڈسپلے موڈ",
        footerText: "سلیک سائبر پنک جمالیات کے ساتھ اپنی ٹائپنگ کی رفتار کو بلند کریں۔",
        tabs: [
            "باب 1: ہوم رو",
            "باب 2: ٹاپ رو",
            "باب 3: باٹم رو",
            "باب 4: نمبر رو",
            "باب 5: پرو اسپیڈ"
        ]
    },
    assamese: {
        practiceLabel: "অনুশীলন",
        testLabel: "টাইপিং টেষ্ট",
        govtLabel: "চৰকাৰী পৰীক্ষা",
        navLearning: "🎓 শিক্ষা",
        navWeakspot: "উইকস্পট",
        navLaserDefense: "লেজাৰ ডিফেন্স 🚀",
        navCyberFall: "চাইবাৰ ফল ☄️",
        navBubbleShooter: "বাবল ছুটাৰ 🫧",
        timeLabel: "সময়",
        wpmLabel: "WPM",
        accLabel: "সঠিকতা",
        mistakesLabel: "ভুল",
        newTextBtn: "নতুন পাঠ",
        zenBtn: "জেন",
        historyBtn: "ইতিহাস",
        customBtn: "কাষ্টম",
        setBtn: "ছেট",
        secPlaceholder: "ছেকেণ্ড",
        langLabel: "ভাষা:",
        donateBtn: "দান কৰক",
        donateTitle: "TypingDost-ক সমৰ্থন কৰক",
        donateSubtitle: "হে বন্ধু! 👋 TypingDost সকলোৰে বাবে সম্পূৰ্ণ বিনামূলীয়া। যদি এই সঁজুলিয়ে আপোনাৰ টাইপিং স্পীড উন্নত কৰাত সহায় কৰিছে, তেন্তে মোক এক কাপ কফি কিনি দিয়াৰ কথা বিবেচনা কৰক ☕",
        donateHighlight: "আপোনাৰ সৰু সমৰ্থন এই প্ৰকল্পটোক জীয়াই আৰু বাঢ়ি যোৱাত সহায় কৰে! 🚀",
        mascotBubble: "ৱাহ কি স্পীড! তুমি দেখোন কীবৰ্ডৰ ৰজা!",
        focusMascotBubble: "ভাই, টাইপিং এৰি ক'লৈ গ'লা?",
        practiceNow: "এতিয়া অনুশীলন কৰক! 🚀",
        closeBtn: "বন্ধ কৰক",
        learningTitle: "🎓 লাৰ্নিং একাডেমী",
        learningSubtitle: "শূণ্যৰ পৰা কীবৰ্ড মাষ্টাৰলৈ টাচ টাইপিং শিকক",
        soundLabel: "কীবৰ্ড চাউণ্ড",
        themeLabel: "থীম মোড",
        displayModeLabel: "ডিচপ্লে মোড",
        footerText: "স্লিক চাইবাৰপাংক নান্দনিকতাৰ সৈতে আপোনাৰ টাইপিং স্পীড উন্নত কৰক।",
        tabs: [
            "অধ্যায় 1: হোম ৰো",
            "অধ্যায় 2: টপ ৰো",
            "অধ্যায় 3: বটম ৰো",
            "অধ্যায় 4: নাম্বাৰ ৰো",
            "অধ্যায় 5: প্ৰো স্পীড"
        ]
    }
    };

    const fingerClasses = {
        "1": "pinky-left", "Q": "pinky-left", "A": "pinky-left", "Z": "pinky-left",
        "2": "ring-left", "W": "ring-left", "S": "ring-left", "X": "ring-left",
        "3": "middle-left", "E": "middle-left", "D": "middle-left", "C": "middle-left",
        "4": "index-left", "5": "index-left", "R": "index-left", "T": "index-left", "F": "index-left", "G": "index-left", "V": "index-left", "B": "index-left",
        "SPACE": "thumb",
        "6": "index-right", "7": "index-right", "Y": "index-right", "U": "index-right", "H": "index-right", "J": "index-right", "N": "index-right", "M": "index-right",
        "8": "middle-right", "I": "middle-right", "K": "middle-right", ",": "middle-right",
        "9": "ring-right", "O": "ring-right", "L": "ring-right", ".": "ring-right",
        "0": "pinky-right", "P": "pinky-right", ";": "pinky-right", "/": "pinky-right"
    };

    const chaptersTranslations = {
        english: {
            "1": {
                title: "Chapter 1: The Home Row Foundation (Zero)",
                description: "The most important starting point in touch typing is the **Home Row** position. Place your fingers as follows:",
                points: [
                    "<strong>Left Hand:</strong> A (Pinky), S (Ring), D (Middle), F (Index) - <em>Feel the bump/line on the F key!</em>",
                    "<strong>Right Hand:</strong> J (Index), K (Middle), L (Ring), ; (Pinky) - <em>Feel the bump/line on the J key!</em>",
                    "<strong>Thumbs:</strong> Both thumbs rest on the Spacebar."
                ],
                goldenRule: "Golden Rule: Always return your fingers to the home row after pressing any key!",
                posture1Title: "Wrists Up",
                posture1Desc: "Keep your wrists elevated (not resting) and elbows at 90 degrees.",
                posture2Title: "Feel the bump",
                posture2Desc: "Learn to orient on F and J without looking at the keyboard.",
                target: "homerow",
                buttonText: "Practice Home Row Now! 🚀"
            },
            "2": {
                title: "Chapter 2: Scaling the Top Row (Beginner)",
                description: "To hit the **Top Row** (Q W E R T Y U I O P), fingers stretch diagonally upwards from the home row:",
                points: [
                    "<strong>Left Hand reaches:</strong> Q (Pinky), W (Anular), E (Middle), R & T (Index)",
                    "<strong>Right Hand reaches:</strong> Y & U (Index), I (Middle), O (Anular), P (Pinky)"
                ],
                goldenRule: "Quick Tip: Index fingers (R, T, Y, U) handle the most stretches.",
                posture1Title: "Return Home",
                posture1Desc: "Practice returning your finger to the home row immediately after pressing a top row key.",
                posture2Title: "No Peeking",
                posture2Desc: "Look at the screen, never down at the keyboard!",
                target: "homerow_toprow",
                buttonText: "Practice Home + Top Row Now! 🚀"
            },
            "3": {
                title: "Chapter 3: Descending the Bottom Row (Intermediate)",
                description: "For the **Bottom Row** (Z X C V B N M , . /), fingers drop downwards from the home row at precise angles:",
                points: [
                    "<strong>Left Hand reaches:</strong> Z (Pinky), X (Anular), C (Middle), V & B (Index)",
                    "<strong>Right Hand reaches:</strong> N & M (Index), , (Middle), . (Anular), / (Pinky)"
                ],
                goldenRule: "Quick Tip: Left pinky (Z) takes practice to drop without twisting your wrist.",
                posture1Title: "Straight Wrists",
                posture1Desc: "Keep your wrists straight so the downward diagonal movement feels natural.",
                posture2Title: "Pinky Control",
                posture2Desc: "Keep finger arches tight to control Z and / key accurately.",
                target: "allrows",
                buttonText: "Practice All Alphabet Rows Now! 🚀"
            },
            "4": {
                title: "Chapter 4: Numbers & Symbols (Advanced)",
                description: "The **Number Row** (1 to 0) is the ultimate reach-up challenge. It follows standard diagonal extensions:",
                points: [
                    "<strong>Left Hand reaches:</strong> 1 (Pinky), 2 (Anular), 3 (Middle), 4 & 5 (Index)",
                    "<strong>Right Hand reaches:</strong> 6 & 7 (Index), 8 (Middle), 9 (Anular), 0 (Pinky)"
                ],
                goldenRule: "Shift Key Rule: To type symbols, hold the opposite Shift key with your pinky!",
                posture1Title: "Opposite Shift",
                posture1Desc: "Use the Right Shift for left-side symbols, and Left Shift for right-side symbols.",
                posture2Title: "Full Extension",
                posture2Desc: "Consistent practice is required to build muscle memory on numbers.",
                target: "numbers",
                buttonText: "Practice Number Row Now! 🚀"
            },
            "5": {
                title: "Chapter 5: Pro Speed Tips (Master)",
                description: "Now that you have mastered standard layout movements, apply touch typing habits to reach 100+ WPM:",
                points: [
                    "<strong>Golden Rule: Never Look Down!</strong> Keep your eyes 100% focused on the screen.",
                    "<strong>Rhythm is King:</strong> Maintain a smooth rhythm (consistent typing flow) instead of bursting in speed.",
                    "<strong>Accuracy Over Speed:</strong> Speed naturally comes with accuracy. Slow down to stay accurate!"
                ],
                goldenRule: "Cyber Tip: Playing Cyber Fall and Laser Defense game modes helps map complex words into muscle memory.",
                posture1Title: "Daily Practice",
                posture1Desc: "Spend 15 minutes daily on focused touch typing to double your speed in two weeks.",
                posture2Title: "Stay Relaxed",
                posture2Desc: "Keep fingers and wrists relaxed, avoid pressing keys too hard.",
                target: "sentences",
                buttonText: "Launch Full Typing Test! 🚀"
            }
        },
        hindi: {
            "1": {
                title: "अध्याय 1: होम रो फाउंडेशन (शून्य)",
                description: "टच टाइपिंग शुरू करने का सबसे महत्वपूर्ण कदम **होम रो** स्थिति है। अपनी उंगलियों को नीचे दिखाए अनुसार रखें:",
                points: [
                    "<strong>बायां हाथ (Left Hand):</strong> A (Pinky), S (Ring), D (Middle), F (Index) - <em>F की (Key) पर उभरे हुए बम्प को महसूस करें!</em>",
                    "<strong>दायां हाथ (Right Hand):</strong> J (Index), K (Middle), L (Ring), ; (Pinky) - <em>J की (Key) पर उभरे हुए बम्प को महसूस करें!</em>",
                    "<strong>अंगूठे (Thumbs):</strong> दोनों अंगूठे स्पेसबार पर आराम करेंगे।"
                ],
                goldenRule: "स्वर्ण नियम: किसी भी की (Key) को दबाने के बाद अपनी उंगलियों को हमेशा होम रो पर ही वापस लाएं!",
                posture1Title: "कलाई ऊपर",
                posture1Desc: "कलाइयों को ऊपर उठाकर रखें (आराम की मुद्रा में नहीं) और कोहनी को 90 डिग्री पर।",
                posture2Title: "बम्प महसूस करें",
                posture2Desc: "कीबोर्ड को देखे बिना F और J पर उंगलियों को सेट करना सीखें।",
                target: "homerow",
                buttonText: "अभी होम रो का अभ्यास करें! 🚀"
            },
            "2": {
                title: "अध्याय 2: टॉप रो को पार करना (शुरुआती)",
                description: "**टॉप रो** (Q W E R T Y U I O P) पर जाने के लिए उंगलियों को होम रो से तिरछा (diagonal) ऊपर की ओर बढ़ाएं:",
                points: [
                    "<strong>बाएं हाथ का खिंचाव:</strong> Q (Pinky), W (Ring), E (Middle), R और T (Index)",
                    "<strong>दाएं हाथ का खिंचाव:</strong> Y और U (Index), I (Middle), O (Ring), P (Pinky)"
                ],
                goldenRule: "त्वरित टिप: तर्जनी उंगलियां (R, T, Y, U) सबसे अधिक खिंचाव संभालती हैं।",
                posture1Title: "होम पर लौटें",
                posture1Desc: "टॉप रो दबाने के तुरंत बाद उंगली को होम रो पर वापस लाने का अभ्यास करें।",
                posture2Title: "देखना मना है",
                posture2Desc: "स्क्रीन पर देखें, कीबोर्ड पर बिल्कुल नहीं!",
                target: "homerow_toprow",
                buttonText: "अभी होम + टॉप रो का अभ्यास करें! 🚀"
            },
            "3": {
                title: "अध्याय 3: बॉटम रो पर उतरना (मध्यम)",
                description: "**बॉटम रो** (Z X C V B N M , . /) के लिए उंगलियों को होम रो से नीचे उतारा जाता है। इसमें सही कोण होना जरूरी है:",
                points: [
                    "<strong>बाएं हाथ का खिंचाव:</strong> Z (Pinky), X (Ring), C (Middle), V और B (Index)",
                    "<strong>दाएं हाथ का खिंचाव:</strong> N और M (Index), , (Middle), . (Ring), / (Pinky)"
                ],
                goldenRule: "त्वरित टिप: कलाई को घुमाए बिना लेफ्ट पिंकी (Z) को नीचे लाने में अभ्यास लगता है।",
                posture1Title: "सीधी कलाई",
                posture1Desc: "अपनी कलाइयों को सीधा रखें ताकि नीचे की ओर तिरछी गति स्वाभाविक लगे।",
                posture2Title: "पिंकी कंट्रोल",
                posture2Desc: "Z और / को ठीक से नियंत्रित करने के लिए उंगलियों के मोड़ को चुस्त रखें।",
                target: "allrows",
                buttonText: "अभी सभी वर्णमाला पंक्तियों का अभ्यास करें! 🚀"
            },
            "4": {
                title: "अध्याय 4: नंबर और प्रतीक (उन्नत)",
                description: "**नंबर रो** (1 से 0) ऊपर तक पहुंचने की अंतिम चुनौती है। यह मानक तिरछे नियमों का पालन करता है:",
                points: [
                    "<strong>बाएं हाथ का खिंचाव:</strong> 1 (Pinky), 2 (Ring), 3 (Middle), 4 और 5 (Index)",
                    "<strong>दाएं हाथ का खिंचाव:</strong> 6 और 7 (Index), 8 (Middle), 9 (Ring), 0 (Pinky)"
                ],
                goldenRule: "शिफ्ट की (Shift) नियम: प्रतीकों (symbols) को टाइप करने के लिए विपरीत दिशा का शिफ्ट की दबाएं!",
                posture1Title: "विपरीत शिफ्ट",
                posture1Desc: "बाएं हाथ के प्रतीकों के लिए राइट शिफ्ट और दाएं हाथ के प्रतीकों के लिए लेफ्ट शिफ्ट का प्रयोग करें।",
                posture2Title: "पूरा खिंचाव",
                posture2Desc: "संख्याओं पर उंगलियों की पकड़ मजबूत करने के लिए अभ्यास जारी रखें।",
                target: "numbers",
                buttonText: "अभी नंबर रो का अभ्यास करें! 🚀"
            },
            "5": {
                title: "अध्याय 5: प्रो स्पीड टिप्स (मास्टर)",
                description: "अब जब आपने मानक गतिविधियों को सीख लिया है, तो 100+ WPM की गति प्राप्त करने के लिए इन नियमों को अपनाएं:",
                points: [
                    "<strong>स्वर्ण नियम: कभी नीचे न देखें!</strong> अपना ध्यान 100% केवल स्क्रीन पर रखें।",
                    "<strong>लय (Rhythm) ही राजा है:</strong> बहुत तेज भागने के बजाय एक स्थिर गति और निरंतर प्रवाह बनाए रखें।",
                    "<strong>गति से ऊपर सटीकता:</strong> सटीकता आने पर गति अपने आप आ जाएगी। सटीकता के लिए आवश्यकतानुसार धीमे टाइप करें!"
                ],
                goldenRule: "साइबर टिप: साइबर फॉल और लेजर डिफेंस गेम खेलने से कठिन शब्द दिमाग में अच्छी तरह सेट हो जाते हैं।",
                posture1Title: "दैनिक अभ्यास",
                posture1Desc: "2 सप्ताह में अपनी गति दोगुनी करने के लिए प्रतिदिन 15 मिनट ध्यान लगाकर अभ्यास करें।",
                posture2Title: "तनावमुक्त रहें",
                posture2Desc: "उंगलियों और कलाइयों को सामान्य और ढीला रखें, कीज़ को जोर से दबाने से बचें।",
                target: "sentences",
                buttonText: "अभी टाइपिंग टेस्ट शुरू करें! 🚀"
            }
        },
        hinglish: {
            "1": {
                title: "Chapter 1: The Home Row Foundation (Zero)",
                description: "Touch typing shuru karne ki sabse important step **Home Row** position hai. Apni fingers ko niche diye anusar position kijiye:",
                points: [
                    "<strong>Left Hand:</strong> A (Pinky), S (Ring), D (Middle), F (Index) - <em>F key par line/bump ko feel kijiye!</em>",
                    "<strong>Right Hand:</strong> J (Index), K (Middle), L (Ring), ; (Pinky) - <em>J key par line/bump ko feel kijiye!</em>",
                    "<strong>Thumbs:</strong> Dono thumbs Spacebar par rest karenge."
                ],
                goldenRule: "Golden Rule: Har key press ke baad aapki fingers ko home row par hi wapas aana hai!",
                posture1Title: "Wrists Up",
                posture1Desc: "Wrists ko upar rakhein (resting state mein nahi) aur elbows ko 90 degrees par.",
                posture2Title: "Feel the bump",
                posture2Desc: "F aur J par standard indices bina dekhe set karna seekhein.",
                target: "homerow",
                buttonText: "Practice Home Row Now! 🚀"
            },
            "2": {
                title: "Chapter 2: Scaling the Top Row (Beginner)",
                description: "**Top Row** (Q W E R T Y U I O P) ko hit karne ke liye fingers ko home row se diagonal reach-up karna hota hai:",
                points: [
                    "<strong>Left Hand reaches:</strong> Q (Pinky), W (Ring), E (Middle), R & T (Index)",
                    "<strong>Right Hand reaches:</strong> Y & U (Index), I (Middle), O (Ring), P (Pinky)"
                ],
                goldenRule: "Quick Tip: Index fingers (R, T, Y, U) sabse zyada stretch handle karti hain.",
                posture1Title: "Return Home",
                posture1Desc: "Top row key press karte hi finger wapas home row par lane ki practice karein.",
                posture2Title: "No Peeking",
                posture2Desc: "Screen par dekhein, keyboard par bilkul nahi!",
                target: "homerow_toprow",
                buttonText: "Practice Home + Top Row Now! 🚀"
            },
            "3": {
                title: "Chapter 3: Descending the Bottom Row (Intermediate)",
                description: "**Bottom Row** (Z X C V B N M , . /) par fingers ko home row se niche drop kiya jata hai. Isme accurate angles banana zaruri hai:",
                points: [
                    "<strong>Left Hand reaches:</strong> Z (Pinky), X (Ring), C (Middle), V & B (Index)",
                    "<strong>Right Hand reaches:</strong> N & M (Index), , (Middle), . (Ring), / (Pinky)"
                ],
                goldenRule: "Quick Tip: Left pinky (Z) ko drop karne mein practice lagti hai. Wrist ko turn na karein.",
                posture1Title: "Straight Wrists",
                posture1Desc: "Apne wrists ko seedha rakhein taaki niche diagonal movement natural lage.",
                posture2Title: "Pinky Control",
                posture2Desc: "Z aur / ke control ke liye finger arches tight rakhein.",
                target: "allrows",
                buttonText: "Practice All Alphabet Rows Now! 🚀"
            },
            "4": {
                title: "Chapter 4: Numbers & Symbols (Advanced)",
                description: "**Number Row** (1 to 0) reach-up ka ultimate level hai. Ise handle karne ke liye diagonal extensions standard rule follow karte hain:",
                points: [
                    "<strong>Left Hand reaches:</strong> 1 (Pinky), 2 (Ring), 3 (Middle), 4 & 5 (Index)",
                    "<strong>Right Hand reaches:</strong> 6 & 7 (Index), 8 (Middle), 9 (Ring), 0 (Pinky)"
                ],
                goldenRule: "Shift Key Rule: Khas symbols ko type karne ke liye, opposite side ka Shift key hold karein!",
                posture1Title: "Opposite Shift",
                posture1Desc: "Left key symbol ke liye Right Shift use karein aur right ke liye Left Shift.",
                posture2Title: "Full Extension",
                posture2Desc: "Numbers par muscle memory build karne ke liye practice consistent rakhein.",
                target: "numbers",
                buttonText: "Practice Number Row Now! 🚀"
            },
            "5": {
                title: "Chapter 5: Pro Speed Tips (Master)",
                description: "Ab aapne standard layout aur movements ko completely seekh liya hai. Speed badhane aur 100+ WPM ke Keyboard God banne ke liye touch typing rules follow karein:",
                points: [
                    "<strong>Golden Rule: Never Look Down!</strong> Apna look 100% display/screen par rakhein.",
                    "<strong>Rhythm is King:</strong> Tezi se bhagne ke badle ek smooth rhythm (constant flow) maintain karein.",
                    "<strong>Accuracy Over Speed:</strong> Speed tabhi aayegi jab aapki accuracy 95%+ hogi. Slow down and get it right first!"
                ],
                goldenRule: "Cyber tip: Cyber Fall aur Laser Defense game modes khelne se complex words reflex memory me set ho jate hain.",
                posture1Title: "Daily Practice",
                posture1Desc: "Daily 15 minutes of focus touch typing will double your speed in 2 weeks.",
                posture2Title: "Stay Relaxed",
                posture2Desc: "Fingers aur wrists ko normal aur relax rakhein, hard pressing se bachein.",
                target: "sentences",
                buttonText: "Launch Full Typing Test! 🚀"
            }
        },
        spanish: {
            "1": {
                title: "Capítulo 1: La Fila Base (Cero)",
                description: "El punto de partida más importante en la mecanografía al tacto es la posición de la **Fila Base**. Coloque los dedos de la siguiente manera:",
                points: [
                    "<strong>Mano Izquierda:</strong> A (Meñique), S (Anular), D (Medio), F (Índice) - <em>¡Siente la relieve en la tecla F!</em>",
                    "<strong>Mano Derecha:</strong> J (Índice), K (Medio), L (Anular), ; (Meñique) - <em>¡Siente la relieve en la tecla J!</em>",
                    "<strong>Pulgares:</strong> Ambos pulgares descansan sobre la barra espaciadora."
                ],
                goldenRule: "Regla de Oro: ¡Siempre regresa los dedos a la fila base después de presionar cualquier tecla!",
                posture1Title: "Muñecas Arriba",
                posture1Desc: "Mantenga las muñecas elevadas (no apoyadas) y los codos a 90 grados.",
                posture2Title: "Sentir el relieve",
                posture2Desc: "Aprenda a orientarse en las teclas F y J sin mirar el teclado.",
                target: "homerow",
                buttonText: "¡Practica Fila Base Ahora! 🚀"
            },
            "2": {
                title: "Capítulo 2: Fila Superior (Principiante)",
                description: "Para pulsar la **Fila Superior** (Q W E R T Y U I O P), los dedos se estiran diagonalmente hacia arriba:",
                points: [
                    "<strong>Mano Izquierda:</strong> Q (Meñique), W (Anular), E (Medio), R y T (Índice)",
                    "<strong>Mano Derecha:</strong> Y y U (Índice), I (Medio), O (Anular), P (Meñique)"
                ],
                goldenRule: "Tip: Los dedos índices (R, T, Y, U) manejan la mayor parte de los estiramientos.",
                posture1Title: "Regresar a Base",
                posture1Desc: "Practique regresar el dedo a la fila base inmediatamente después de pulsar una tecla superior.",
                posture2Title: "Sin mirar",
                posture2Desc: "Mire la pantalla, ¡nunca hacia abajo al teclado!",
                target: "homerow_toprow",
                buttonText: "¡Practica Home + Fila Superior! 🚀"
            },
            "3": {
                title: "Capítulo 3: Descendiendo la Fila Inferior (Intermedio)",
                description: "Para la **Fila Inferior** (Z X C V B N M , . /), los dedos caen en ángulos precisos hacia abajo:",
                points: [
                    "<strong>Mano Izquierda:</strong> Z (Meñique), X (Anular), C (Medio), V y B (Índice)",
                    "<strong>Mano Derecha:</strong> N y M (Índice), , (Medio), . (Anular), / (Meñique)"
                ],
                goldenRule: "Tip: El dedo meñique izquierdo (Z) requiere práctica para caer sin torcer la muñeca.",
                posture1Title: "Muñecas Rectas",
                posture1Desc: "Mantenga las muñecas rectas para que el movimiento diagonal hacia abajo se sienta natural.",
                posture2Title: "Control de Meñique",
                posture2Desc: "Mantenga los arcos de los dedos tensos para controlar Z y / con precisión.",
                target: "allrows",
                buttonText: "¡Practica Todas las Filas de Letras! 🚀"
            },
            "4": {
                title: "Capítulo 4: Números y Símbolos (Avanzado)",
                description: "La **Fila de Números** (1 a 0) es el desafío definitivo de alcance. Sigue las extensiones diagonales estándar:",
                points: [
                    "<strong>Mano Izquierda:</strong> 1 (Meñique), 2 (Anular), 3 (Medio), 4 y 5 (Índice)",
                    "<strong>Mano Derecha:</strong> 6 y 7 (Índice), 8 (Medio), 9 (Anular), 0 (Meñique)"
                ],
                goldenRule: "Regla del Shift: Para escribir símbolos especiales, mantenga presionado el Shift opuesto con el meñique.",
                posture1Title: "Shift Opuesto",
                posture1Desc: "Use el Shift derecho para símbolos de la izquierda, y Shift izquierdo para los de la derecha.",
                posture2Title: "Extensión Completa",
                posture2Desc: "Se requiere una práctica constante para desarrollar memoria muscular en los números.",
                target: "numbers",
                buttonText: "¡Practica Fila de Números Ahora! 🚀"
            },
            "5": {
                title: "Capítulo 5: Consejos de Velocidad Pro (Maestro)",
                description: "Ahora que domina los movimientos de diseño estándar, aplique hábitos de mecanografía táctil para llegar a 100+ PPM:",
                points: [
                    "<strong>Regla de Oro: ¡Nunca mires abajo!</strong> Mantén la vista 100% enfocada en la pantalla.",
                    "<strong>El Ritmo es el Rey:</strong> Mantén un flujo de escritura suave y constante en lugar de ráfagas rápidas.",
                    "<strong>Precisión antes que Velocidad:</strong> La velocidad viene con la precisión. ¡Reduce la velocidad para mantenerte preciso!"
                ],
                goldenRule: "Tip Cyber: Jugar a los modos Cyber Fall y Laser Defense ayuda a memorizar palabras complejas.",
                posture1Title: "Práctica Diaria",
                posture1Desc: "Dedica 15 minutos diarios a la mecanografía táctil para duplicar tu velocidad en dos semanas.",
                posture2Title: "Mantente Relajado",
                posture2Desc: "Mantén los dedos y las muñecas relajados, evita golpear las teclas con demasiada fuerza.",
                target: "sentences",
                buttonText: "¡Inicia la Prueba de Textos Completos! 🚀"
            }
        },
        french: {
            "1": {
                title: "Chapitre 1: La Ligne de Base (Zéro)",
                description: "Le point de départ le plus important en dactylographie est la position de la **Ligne de Base**. Placez vos doigts comme suit :",
                points: [
                    "<strong>Main Gauche :</strong> A (Auriculaire), S (Annulaire), D (Majeur), F (Index) - <em>Sentez le relief sur la touche F !</em>",
                    "<strong>Main Droite :</strong> J (Index), K (Majeur), L (Annulaire), ; (Auriculaire) - <em>Sentez le relief sur la touche J !</em>",
                    "<strong>Pouces :</strong> Les deux pouces reposent sur la barre d'espace."
                ],
                goldenRule: "Règle d'Or: Revenez toujours sur la ligne de base après avoir appuyé sur n'importe quelle touche !",
                posture1Title: "Poignets Levés",
                posture1Desc: "Gardez vos poignets élevés (pas appuyés) et vos coudes à 90 degrés.",
                posture2Title: "Sentir le relief",
                posture2Desc: "Apprenez à vous repérer sur les touches F et J sans regarder le clavier.",
                target: "homerow",
                buttonText: "Pratiquer Ligne de Base Maintenant ! 🚀"
            },
            "2": {
                title: "Chapitre 2: La Ligne Supérieure (Débutant)",
                description: "Pour frapper la **Ligne Supérieure** (Q W E R T Y U I O P), les doigts s'étirent diagonalement vers le haut :",
                points: [
                    "<strong>Main Gauche :</strong> Q (Auriculaire), W (Annulaire), E (Majeur), R et T (Index)",
                    "<strong>Main Droite :</strong> Y et U (Index), I (Majeur), O (Annulaire), P (Auriculaire)"
                ],
                goldenRule: "Astuce: Les index (R, T, Y, U) effectuent les étirements les plus importants.",
                posture1Title: "Retour à Base",
                posture1Desc: "Entraînez-vous à ramener votre doigt sur la ligne de base immédiatement après avoir frappé une touche supérieure.",
                posture2Title: "Ne pas regarder",
                posture2Desc: "Regardez l'écran, jamais le clavier vers le bas !",
                target: "homerow_toprow",
                buttonText: "Pratiquer Ligne Supérieure ! 🚀"
            },
            "3": {
                title: "Chapitre 3: Ligne Inférieure (Intermédiaire)",
                description: "Pour la **Ligne Inférieure** (Z X C V B N M , . /), les doigts descendent à des angles précis :",
                points: [
                    "<strong>Main Gauche :</strong> Z (Auriculaire), X (Annulaire), C (Majeur), V et B (Index)",
                    "<strong>Main Droite :</strong> N et M (Index), , (Majeur), . (Annulaire), / (Auriculaire)"
                ],
                goldenRule: "Astuce: L'auriculaire gauche (Z) nécessite de l'entraînement pour descendre sans tordre le poignet.",
                posture1Title: "Poignets Droits",
                posture1Desc: "Gardez vos poignets droits pour que le mouvement diagonal vers le bas soit naturel.",
                posture2Title: "Contrôle d'Auriculaire",
                posture2Desc: "Maintenez les articulations des doigts fermes pour contrôler Z et / avec précision.",
                target: "allrows",
                buttonText: "Pratiquer toutes les lignes de lettres ! 🚀"
            },
            "4": {
                title: "Chapitre 4: Chiffres et Symboles (Avancé)",
                description: "La **Ligne des Chiffres** (1 à 0) représente le défi d'extension ultime. Elle suit des règles diagonales :",
                points: [
                    "<strong>Main Gauche :</strong> 1 (Auriculaire), 2 (Annulaire), 3 (Majeur), 4 et 5 (Index)",
                    "<strong>Main Droite :</strong> 6 et 7 (Index), 8 (Majeur), 9 (Annulaire), 0 (Auriculaire)"
                ],
                goldenRule: "Règle de la Touche Shift: Pour taper des symboles spéciaux, maintenez le Shift opposé avec l'auriculaire.",
                posture1Title: "Shift Opposé",
                posture1Desc: "Utilisez le Shift droit pour les symboles de gauche, et le Shift gauche pour les symboles de droite.",
                posture2Title: "Extension Complète",
                posture2Desc: "Une pratique régulière est requise pour développer la mémoire musculaire des chiffres.",
                target: "numbers",
                buttonText: "Pratiquer la Ligne des Chiffres ! 🚀"
            },
            "5": {
                title: "Chapitre 5: Conseils de Vitesse Pro (Maître)",
                description: "Maintenant que vous maîtrisez les mouvements de base, appliquez les habitudes dactylographiques pour atteindre 100+ MPM :",
                points: [
                    "<strong>Règle d'Or: Ne regardez jamais en bas !</strong> Gardez vos yeux fixés à 100% sur l'écran.",
                    "<strong>Le Rythme est Roi:</strong> Maintenez un flux de frappe fluide et régulier plutôt que des accélérations brusques.",
                    "<strong>Précision avant Vitesse:</strong> La vitesse vient avec la précision. Ralentissez pour rester précis !"
                ],
                goldenRule: "Astuce Cyber: Jouer aux modes Cyber Fall et Laser Defense aide à enregistrer les mots complexes dans la mémoire musculaire.",
                posture1Title: "Entraînement Quotidien",
                posture1Desc: "Consacrez 15 minutes par jour à la dactylographie pour doubler votre vitesse en deux semaines.",
                posture2Title: "Restez Détendu",
                posture2Desc: "Gardez vos doigts et vos poignets détendus, évitez de frapper les touches trop fort.",
                target: "sentences",
                buttonText: "Lancer le Test de Textes Complets ! 🚀"
            }
        },
        german: {
            "1": {
                title: "Kapitel 1: Die Grundreihe (Null)",
                description: "Der wichtigste Ausgangspunkt beim Zehnfingersystem ist die **Grundreihe**. Positionieren Sie Ihre Finger wie folgt:",
                points: [
                    "<strong>Linke Hand:</strong> A (Kleiner Finger), S (Ringfinger), D (Mittelfinger), F (Zeigefinger) - <em>Spüren Sie die Erhebung auf der F-Taste!</em>",
                    "<strong>Rechte Hand:</strong> J (Zeigefinger), K (Mittelfinger), L (Ringfinger), ; (Kleiner Finger) - <em>Spüren Sie die Erhebung auf der J-Taste!</em>",
                    "<strong>Daumen:</strong> Beide Daumen ruhen auf der Leertaste."
                ],
                goldenRule: "Goldene Regel: Kehren Sie nach jedem Tastendruck immer zur Grundreihe zurück!",
                posture1Title: "Handgelenke Hoch",
                posture1Desc: "Halten Sie die Handgelenke erhöht (nicht aufgelegt) und die Ellbogen im 90-Grad-Winkel.",
                posture2Title: "Erhebung spüren",
                posture2Desc: "Lernen Sie, sich ohne Blick auf die Tastatur an den Tasten F und J zu orientieren.",
                target: "homerow",
                buttonText: "Jetzt Grundreihe üben! 🚀"
            },
            "2": {
                title: "Kapitel 2: Die obere Tastenreihe (Anfänger)",
                description: "Um Tasten auf der **oberen Reihe** (Q W E R T Y U I O P) zu treffen, strecken sich die Finger diagonal nach oben:",
                points: [
                    "<strong>Linke Hand greift:</strong> Q (Kleiner Finger), W (Ringfinger), E (Mittelfinger), R & T (Zeigefinger)",
                    "<strong>Rechte Hand greift:</strong> Y & U (Zeigefinger), I (Mittelfinger), O (Ringfinger), P (Kleiner Finger)"
                ],
                goldenRule: "Quick-Tipp: Die Zeigefinger (R, T, Y, U) übernehmen die meisten Streckungen.",
                posture1Title: "Zurück zur Basis",
                posture1Desc: "Üben Sie, den Finger sofort nach dem Tippen einer oberen Taste zur Grundreihe zurückzuführen.",
                posture2Title: "Nicht spicken",
                posture2Desc: "Schauen Sie auf den Bildschirm, niemals nach unten auf die Tastatur!",
                target: "homerow_toprow",
                buttonText: "Jetzt Grund- und Oberreihe üben! 🚀"
            },
            "3": {
                title: "Kapitel 3: Die untere Tastenreihe (Fortgeschritten)",
                description: "Für die **untere Reihe** (Z X C V B N M , . /) werden die Finger in präzisen Winkeln nach unten bewegt:",
                points: [
                    "<strong>Linke Hand greift:</strong> Z (Kleiner Finger), X (Ringfinger), C (Mittelfinger), V & B (Zeigefinger)",
                    "<strong>Rechte Hand greift:</strong> N & M (Zeigefinger), , (Mittelfinger), . (Ringfinger), / (Kleiner Finger)"
                ],
                goldenRule: "Quick-Tipp: Der linke kleine Finger (Z) erfordert Übung, um ihn ohne Handgelenksdrehung zu erreichen.",
                posture1Title: "Gerade Handgelenke",
                posture1Desc: "Halten Sie die Handgelenke gerade, damit sich die diagonale Abwärtsbewegung natürlich anfühlt.",
                posture2Title: "Kleinfinger-Kontrolle",
                posture2Desc: "Halten Sie die Fingerkrümmung stabil, um Z und / präzise anzusteuern.",
                target: "allrows",
                buttonText: "Jetzt alle Buchstabenreihen üben! 🚀"
            },
            "4": {
                title: "Kapitel 4: Zahlen & Symbole (Profi)",
                description: "Die **Zahlenreihe** (1 bis 0) ist die ultimative Streck-Herausforderung. Sie folgt standardmäßigen diagonalen Linien:",
                points: [
                    "<strong>Linke Hand greift:</strong> 1 (Kleiner Finger), 2 (Ringfinger), 3 (Mittelfinger), 4 & 5 (Zeigefinger)",
                    "<strong>Rechte Hand greift:</strong> 6 & 7 (Zeigefinger), 8 (Mittelfinger), 9 (Ringfinger), 0 (Kleiner Finger)"
                ],
                goldenRule: "Shift-Tasten-Regel: Um Sondersymbole zu tippen, halten Sie die gegenüberliegende Shift-Taste gedrückt.",
                posture1Title: "Gegenüberliegendes Shift",
                posture1Desc: "Nutzen Sie das rechte Shift für linke Tasten und das linke Shift für rechte Tasten.",
                posture2Title: "Volle Extension",
                posture2Desc: "Regelmäßiges Training ist der Schlüssel, um ein Muskelgedächtnis für Zahlen zu entwickeln.",
                target: "numbers",
                buttonText: "Jetzt Zahlenreihe üben! 🚀"
            },
            "5": {
                title: "Kapitel 5: Profi-Tipps für Speed (Meister)",
                description: "Sobald Sie die Tasten und Wege verinnerlicht haben, wenden Sie diese Regeln an, um 100+ WPM zu knacken:",
                points: [
                    "<strong>Goldene Regel: Niemals nach unten schauen!</strong> Richten Sie den Blick zu 100 % auf den Bildschirm.",
                    "<strong>Rhythmus ist Trumpf:</strong> Halten Sie einen gleichmäßigen Tippfluss anstelle von schnellen Ausbrüchen.",
                    "<strong>Genauigkeit vor Tempo:</strong> Geschwindigkeit folgt der Präzision. Tippen Sie langsamer, um fehlerfrei zu bleiben!"
                ],
                goldenRule: "Cyber-Tipp: Das Spielen der Modi Cyber Fall und Laser Defense festigt schwierige Wörter im Muskelgedächtnis.",
                posture1Title: "Tägliches Üben",
                posture1Desc: "Täglich 15 Minuten fokussiertes Zehnfingersystem verdoppeln Ihr Tempo in zwei Wochen.",
                posture2Title: "Entspannt bleiben",
                posture2Desc: "Halten Sie Finger und Handgelenke locker, vermeiden Sie verkrampftes Tastendrücken.",
                target: "sentences",
                buttonText: "Jetzt kompletten Text-Test starten! 🚀"
            }
        },
        arabic: {
            "1": {
                title: "الفصل الأول: صف الارتكاز (الأساس)",
                description: "أهم نقطة انطلاق في الكتابة باللمس هي وضعية **صف الارتكاز**. ضع أصابعك كما يلي:",
                points: [
                    "<strong>اليد اليسرى:</strong> A (الخنصر), S (البنصر), D (الوسطى), F (السبابة) - <em>اشعر بالبروز على مفتاح F!</em>",
                    "<strong>اليد اليمنى:</strong> J (السبابة), K (الوسطى), L (البنصر), ; (الخنصر) - <em>اشعر بالبروز على مفتاح J!</em>",
                    "<strong>الإبهامان:</strong> كلا الإبهامين يستقران على زر المسافة."
                ],
                goldenRule: "القاعدة الذهبية: عد بأصابعك دائماً إلى صف الارتكاز بعد الضغط على أي مفتاح!",
                posture1Title: "المعصم مرتفع",
                posture1Desc: "حافظ على معصميك مرتفعين (وليس مستندين) والمرفقين بزاوية 90 درجة.",
                posture2Title: "اشعر بالبروز",
                posture2Desc: "تعلم تحديد موقع الأصابع على مفتاحي F و J دون النظر إلى لوحة المفاتيح.",
                target: "homerow",
                buttonText: "تمرن على صف الارتكاز الآن! 🚀"
            },
            "2": {
                title: "الفصل الثاني: الصف العلوي (مبتدئ)",
                description: "للوصول إلى **الصف العلوي** (Q W E R T Y U I O P)، تمتد الأصابع بشكل مائل إلى الأعلى:",
                points: [
                    "<strong>اليد اليسرى تصل إلى:</strong> Q (الخنصر), W (البنصر), E (الوسطى), R و T (السبابة)",
                    "<strong>اليد اليمنى تصل إلى:</strong> Y و U (السبابة), I (الوسطى), O (البنصر), P (الخنصر)"
                ],
                goldenRule: "نصيحة سريعة: السبابتان (R, T, Y, U) تتعاملان مع أكبر قدر من التمددات.",
                posture1Title: "العودة للارتكاز",
                posture1Desc: "تدرب على إعادة إصبعك إلى صف الارتكاز فوراً بعد الضغط على زر في الصف العلوي.",
                posture2Title: "ممنوع التلصص",
                posture2Desc: "انظر دائماً إلى الشاشة، ولا انظر أبداً لأسفل لوحة المفاتيح!",
                target: "homerow_toprow",
                buttonText: "تمرن على صف الارتكاز والعلوي الآن! 🚀"
            },
            "3": {
                title: "الفصل الثالث: الصف السفلي (متوسط)",
                description: "بالنسبة إلى **الصف السفلي** (Z X C V B N M , . /)، تنخفض الأصابع بزوايا دقيقة إلى الأسفل:",
                points: [
                    "<strong>اليد اليسرى تصل إلى:</strong> Z (الخنصر), X (البنصر), C (الوسطى), V و B (السبابة)",
                    "<strong>اليد اليمنى تصل إلى:</strong> N و M (السبابة), , (الوسطى), . (البنصر), / (الخنصر)"
                ],
                goldenRule: "نصيحة سريعة: خنصر اليد اليسرى (Z) يحتاج إلى تدريب للهبوط دون التواء المعصم.",
                posture1Title: "استقامة المعصمين",
                posture1Desc: "حافظ على معصميك مستقيمين حتى تشعر بالحركة المائلة لأسفل بشكل طبيعي.",
                posture2Title: "التحكم بالخنصر",
                posture2Desc: "حافظ على ثبات أقواس الأصابع للتحكم بمفتاحي Z و / بدقة.",
                target: "allrows",
                buttonText: "تمرن على جميع صفوف الحروف الآن! 🚀"
            },
            "4": {
                title: "الفصل الرابع: الأرقام والرموز (متقدم)",
                description: "إن **صف الأرقام** (من 1 إلى 0) هو التحدي الأقصى للمد والوصول. يتبع تمددات مائلة قياسية:",
                points: [
                    "<strong>اليد اليسرى تصل إلى:</strong> 1 (الخنصر), 2 (البنصر), 3 (الوسطى), 4 و 5 (السبابة)",
                    "<strong>اليد اليمنى تصل إلى:</strong> 6 و 7 (السبابة), 8 (الوسطى), 9 (البنصر), 0 (الخنصر)"
                ],
                goldenRule: "قاعدة مفتاح Shift: لكتابة الرموز، اضغط مع الاستمرار على مفتاح Shift المقابل بخنصر اليد الأخرى!",
                posture1Title: "مفتاح Shift المقابل",
                posture1Desc: "استخدم زر Shift الأيمن لرموز الجانب الأيسر، و زر Shift الأيسر لرموز الجانب الأيمن.",
                posture2Title: "التمدد الكامل",
                posture2Desc: "يتطلب بناء الذاكرة العضلية للأرقام ممارسة وتدريباً مستمرين.",
                target: "numbers",
                buttonText: "تمرن على صف الأرقام الآن! 🚀"
            },
            "5": {
                title: "الفصل الخامس: نصائح السرعة الفائقة (محترف)",
                description: "الآن وقد أتقنت جميع التحركات القياسية، طبق عادات الكتابة باللمس لتصل لسرعة 100+ كلمة/دقيقة:",
                points: [
                    "<strong>القاعدة الذهبية: لا تنظر للأسفل أبداً!</strong> أبقِ عينيك مركزتين بنسبة 100% على الشاشة.",
                    "<strong>الإيقاع هو الملك:</strong> حافظ على وتيرة كتابة سلسة ومستمرة بدلاً من السرعات المتقطعة.",
                    "<strong>الدقة فوق السرعة:</strong> السرعة تأتي تلقائياً مع الدقة. أبطئ سرعتك لتضمن خلو كتابتك من الأخطاء!"
                ],
                goldenRule: "تلميح سيبراني: اللعب في وضعي Cyber Fall و Laser Defense يثبت الكلمات المعقدة في ذاكرتك العضلية.",
                posture1Title: "التدريب اليومي",
                posture1Desc: "تخصيص 15 دقيقة يومياً للكتابة باللمس يضاعف سرعتك في غضون أسبوعين.",
                posture2Title: "ابقَ مسترخياً",
                posture2Desc: "أبقِ أصابعك ومعصميك في وضع مريح، وتجنب الضغط الشديد على المفاتيح.",
                target: "sentences",
                buttonText: "ابدأ اختبار النصوص الكاملة الآن! 🚀"
            }
        },
        japanese: {
            "1": {
                title: "第1章：ホームポジションの基礎（ゼロ）",
                description: "タッチタイピングを始めるにあたって、最も重要なのが**ホームポジション**です。指を次のように配置します：",
                points: [
                    "<strong>左手:</strong> A (小指), S (薬指), D (中指), F (人差指) - <em>Fキーの突起をしっかり確認してください！</em>",
                    "<strong>右手:</strong> J (人差指), K (中指), L (薬指), ; (小指) - <em>Jキーの突起をしっかり確認してください！</em>",
                    "<strong>親指:</strong> 両方の親指はスペースキーの上に軽く置きます。"
                ],
                goldenRule: "黄金のルール: どのキーを押した後も、必ず指をホームポジションに戻しましょう！",
                posture1Title: "手首を上げる",
                posture1Desc: "手首を机につけずに浮かせ、肘の角度を90度に保ちます。",
                posture2Title: "突起を感じる",
                posture2Desc: "キーボードを見ずに、FとJのキーにある突起で指の位置をホームポジションに戻せるようにします。",
                target: "homerow",
                buttonText: "ホームポジションの練習を始める！ 🚀"
            },
            "2": {
                title: "第2章：上段行の攻略（初心者）",
                description: "**上段行** (Q W E R T Y U I O P) を打つときは、指をホームポジションから斜め上へ伸ばします：",
                points: [
                    "<strong>左手の担当:</strong> Q (小指), W (薬指), E (中指), R & T (人差指)",
                    "<strong>右手の担当:</strong> Y & U (人差指), I (中指), O (薬指), P (小指)"
                ],
                goldenRule: "クイックチップ: 人差し指 (R, T, Y, U) が最も広い範囲を担当します。",
                posture1Title: "すぐに戻る",
                posture1Desc: "上段のキーを押した直後に、指を素早くホームポジションに戻す習慣をつけます。",
                posture2Title: "手元を見ない",
                posture2Desc: "キーボードではなく、視線は常に100%画面に向けてください！",
                target: "homerow_toprow",
                buttonText: "ホーム＋上段行의 練習を始める！ 🚀"
            },
            "3": {
                title: "第3章：下段行へのアプローチ（中級者）",
                description: "**下段行** (Z X C V B N M , . /) を打つときは、指をホームポジションから正確な角度で下ろします：",
                points: [
                    "<strong>左手の担当:</strong> Z (小指), X (薬指), C (中指), V & B (人差指)",
                    "<strong>右手の担当:</strong> N & M (人差指), , (中指), . (薬指), / (小指)"
                ],
                goldenRule: "クイックチップ: 左手の小指 (Z) は、手首をひねらずに自然に下ろせるよう練習が必要です。",
                posture1Title: "手首をまっすぐに",
                posture1Desc: "手首をまっすぐ平行に保つことで、斜め下への指의 移動がスムーズになります。",
                posture2Title: "小指のコントロール",
                posture2Desc: "指のアーチをしっかり保ち、Zや / のキーを正確にコントロールします。",
                target: "allrows",
                buttonText: "すべてのアルファベット行を練習する！ 🚀"
            },
            "4": {
                title: "第4章：数字キーと記号（上級者）",
                description: "**数字行** (1〜0) は最長距離のストレッチが必要な挑戦エリアです。斜めへの正しい拡張パターンに従います：",
                points: [
                    "<strong>左手の担当:</strong> 1 (小指), 2 (薬指), 3 (中指), 4 & 5 (人差指)",
                    "<strong>右手の担当:</strong> 6 & 7 (人差指), 8 (中指), 9 (薬指), 0 (小指)"
                ],
                goldenRule: "シフトキーのルール: 記号を打つときは、打つキーとは反対側のシフトキーを小指で長押しします！",
                posture1Title: "反対のシフト",
                posture1Desc: "左側のキーを打つときは右シフト、右側のキーを打つときは左シフトを使います。",
                posture2Title: "反復ストレッチ",
                posture2Desc: "数字キーの配列を体で覚えるため、毎日のコツコツした反復練習が効果的です。",
                target: "numbers",
                buttonText: "数字キーの練習を始める！ 🚀"
            },
            "5": {
                title: "第5章：プロのスピードへのヒント（マスター）",
                description: "標準的なキー位置と指の動きをマスターしたら、100+ WPMのタイピングゴッドを目指しましょう：",
                points: [
                    "<strong>黄金のルール：絶対に手元を見ない！</strong> 視線を常に完全に画面にロックしておきます。",
                    "<strong>リズムが命:</strong> 急激に速く打とうとするのではなく、一定の打鍵リズムを保つよう意識します。",
                    "<strong>速度より正確さ:</strong> 正確に打てるようになれば、速度は自然についてきます。正確さを優先しましょう！"
                ],
                goldenRule: "サイバーチップ: Cyber FallやLaser Defenseなどのゲームモードをプレイすると、反射的な文字の入力が鍛えられます。",
                posture1Title: "毎日の練習",
                posture1Desc: "毎日15分間の集中タイピング練習により、2週間で打鍵スピードを約2倍にできます。",
                posture2Title: "リラックスする",
                posture2Desc: "指や手首の余計な力を抜き、キーを強く叩きすぎないようにします。",
                target: "sentences",
                buttonText: "フルテキストのタイピングテストを開始！ 🚀"
            }
        },
        portuguese: {
            "1": {
                title: "Capítulo 1: A Linha de Base (Cero)",
                description: "O ponto de partida mais importante na dactilografia é a posição da **Linha de Base**. Coloque os dedos da seguinte forma:",
                points: [
                    "<strong>Mão Esquerda:</strong> A (Mindinho), S (Anular), D (Médio), F (Indicador) - <em>Sinta a marcação saliente na tecla F!</em>",
                    "<strong>Mão Direita:</strong> J (Indicador), K (Médio), L (Anular), ; (Mindinho) - <em>Sinta a marcação saliente na tecla J!</em>",
                    "<strong>Polegares:</strong> Ambos os polegares descansam na barra de espaço."
                ],
                goldenRule: "Regra de Ouro: Sempre retorne os dedos para a linha de base após pressionar qualquer tecla!",
                posture1Title: "Pulsos Elevados",
                posture1Desc: "Mantenha os pulsos levantados (não apoiados na mesa) e os cotovelos a 90 graus.",
                posture2Title: "Sentir a marcação",
                posture2Desc: "Aprenda a orientar-se nas teclas F e J sem olhar para o teclado.",
                target: "homerow",
                buttonText: "Praticar Linha de Base Agora! 🚀"
            },
            "2": {
                title: "Capítulo 2: Linha Superior (Iniciante)",
                description: "Para digitar na **Linha Superior** (Q W E R T Y U I O P), os dedos esticam-se diagonalmente para cima:",
                points: [
                    "<strong>Mão Esquerda:</strong> Q (Mindinho), W (Anular), E (Médio), R e T (Indicador)",
                    "<strong>Mão Direita:</strong> Y e U (Indicador), I (Médio), O (Anular), P (Mindinho)"
                ],
                goldenRule: "Dica Rápida: Os indicadores (R, T, Y, U) lidam com o maior esforço de alcance.",
                posture1Title: "Retornar a Base",
                posture1Desc: "Pratique retornar o dedo para a linha de base imediatamente após digitar uma tecla superior.",
                posture2Title: "Sem Espreitar",
                posture2Desc: "Olhe para o ecrã, nunca para baixo na direção do teclado!",
                target: "homerow_toprow",
                buttonText: "Praticar Linhas de Base + Superior! 🚀"
            },
            "3": {
                title: "Capítulo 3: Descendo para a Linha Inferior (Intermédio)",
                description: "Para a **Linha Inferior** (Z X C V B N M , . /), os dedos descem em ângulos precisos:",
                points: [
                    "<strong>Mão Esquerda:</strong> Z (Mindinho), X (Anular), C (Médio), V e B (Indicador)",
                    "<strong>Mão Direita:</strong> N e M (Indicador), , (Médio), . (Anular), / (Mindinho)"
                ],
                goldenRule: "Dica Rápida: O mindinho esquerdo (Z) requer bastante treino para alcançar sem torcer o pulso.",
                posture1Title: "Pulsos Alinhados",
                posture1Desc: "Mantenha os pulsos retos para que o movimento diagonal para baixo seja natural.",
                posture2Title: "Controle do Mindinho",
                posture2Desc: "Mantenha as articulações dos dedos firmes para teclar Z e / com precisão.",
                target: "allrows",
                buttonText: "Praticar Todas as Linhas de Letras! 🚀"
            },
            "4": {
                title: "Capítulo 4: Números e Símbolos (Avançado)",
                description: "A **Linha de Números** (1 a 0) é o derradeiro desafio de extensão de dedos. Siga o alinhamento diagonal:",
                points: [
                    "<strong>Mão Esquerda:</strong> 1 (Mindinho), 2 (Anular), 3 (Médio), 4 e 5 (Indicador)",
                    "<strong>Mão Direita:</strong> 6 e 7 (Indicador), 8 (Médio), 9 (Anular), 0 (Mindinho)"
                ],
                goldenRule: "Regra do Shift: Para digitar símbolos especiais, pressione a tecla Shift oposta com o mindinho.",
                posture1Title: "Shift Oposto",
                posture1Desc: "Utilize o Shift direito para símbolos da esquerda, e o Shift esquerdo para símbolos da direita.",
                posture2Title: "Extensão Completa",
                posture2Desc: "Treino regular é fundamental para construir memória muscular para a linha de números.",
                target: "numbers",
                buttonText: "Praticar Linha de Números Agora! 🚀"
            },
            "5": {
                title: "Capítulo 5: Conselhos de Velocidade Pro (Mestre)",
                description: "Agora que domina os movimentos base, aplique os seguintes hábitos para alcançar 100+ PPM:",
                points: [
                    "<strong>Regra de Ouro: Nunca olhe para baixo!</strong> Mantenha o olhar 100% focado no ecrã.",
                    "<strong>O Ritmo é Rei:</strong> Mantenha uma digitação fluida e com ritmo constante, evite impulsos rápidos seguidos de pausas.",
                    "<strong>Precisão Antes de Velocidade:</strong> A velocidade é o resultado da precisão. Digite mais devagar para ser preciso!"
                ],
                goldenRule: "Dica Cyber: Jogar aos modos Cyber Fall e Laser Defense ajuda a memorizar sequências complexas reflexivamente.",
                posture1Title: "Treino Diário",
                posture1Desc: "Dedique 15 minutos diários à digitação com o zehfingersystem para duplicar o seu ritmo em duas semanas.",
                posture2Title: "Mantenha-se Descontraído",
                posture2Desc: "Mantenha os dedos e os pulsos relaxados, evite martelar as teclas com muita força.",
                target: "sentences",
                buttonText: "Iniciar o Teste de Digitação Completo! 🚀"
            }
        }
    };

    function getChapterHTML(chapterId, lang) {
        const langData = chaptersTranslations[lang] || chaptersTranslations.english;
        const data = langData[chapterId];
        if (!data) return '';

        return `
            <h3 style="color:#fff; font-family:'Orbitron',sans-serif; font-size:1.3rem; margin-bottom:0.75rem;">${data.title}</h3>
            <p style="margin-bottom: 1rem; color:var(--text-sub);">${data.description}</p>
            <ul style="margin-left: 1.5rem; margin-bottom: 1rem; display: flex; flex-direction: column; gap: 0.4rem; color:var(--text-sub);">
                ${data.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
            <p style="margin-bottom: 1rem; color: var(--primary); font-weight: bold;">🔑 ${data.goldenRule}</p>
            <div class="posture-guide">
                <div class="posture-item">
                    <span class="posture-title">${data.posture1Title}</span>
                    <span class="posture-desc">${data.posture1Desc}</span>
                </div>
                <div class="posture-item">
                    <span class="posture-title">${data.posture2Title}</span>
                    <span class="posture-desc">${data.posture2Desc}</span>
                </div>
            </div>
            <button class="cyber-btn start-practice-btn" data-target="${data.target}" style="margin-top: 1.5rem; width: 100%; text-align: center;">${data.buttonText}</button>
        `;
    }

    function renderChapter(chapterId) {
        const langData = chaptersTranslations[currentLearningLang] || chaptersTranslations.english;
        const chapter = langData[chapterId];
        if (!chapter) return;

        // Determine highlightKeys and highlightFingers dynamically to avoid translation dictionary bloat
        let highlightKeys = [];
        let highlightFingers = [];
        if (chapterId === "1") {
            highlightKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';'];
            highlightFingers = ['lf-pinky', 'lf-ring', 'lf-middle', 'lf-index', 'rf-index', 'rf-middle', 'rf-ring', 'rf-pinky'];
        } else if (chapterId === "2") {
            highlightKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
            highlightFingers = ['lf-pinky', 'lf-ring', 'lf-middle', 'lf-index', 'rf-index', 'rf-middle', 'rf-ring', 'rf-pinky'];
        } else if (chapterId === "3") {
            highlightKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
            highlightFingers = ['lf-pinky', 'lf-ring', 'lf-middle', 'lf-index', 'rf-index', 'rf-middle', 'rf-ring', 'rf-pinky'];
        } else if (chapterId === "4") {
            highlightKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
            highlightFingers = ['lf-pinky', 'lf-ring', 'lf-middle', 'lf-index', 'rf-index', 'rf-middle', 'rf-ring', 'rf-pinky'];
        } else if (chapterId === "5") {
            highlightKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
            highlightFingers = ['lf-pinky', 'lf-ring', 'lf-middle', 'lf-index', 'rf-index', 'rf-middle', 'rf-ring', 'rf-pinky'];
        }

        // Render HTML Content dynamically using the translation template
        learningTextContainer.innerHTML = getChapterHTML(chapterId, currentLearningLang);

        // Reset all keys
        learningKeys.forEach(k => {
            k.className = 'key'; // remove color and dim classes
            const keyChar = k.getAttribute('data-key');
            if (highlightKeys.includes(keyChar)) {
                const fingerClass = fingerClasses[keyChar];
                if (fingerClass) k.classList.add(fingerClass);
            } else {
                k.classList.add('dim');
            }
        });

        // Reset all fingers
        learningFingers.forEach(f => {
            // Keep dynamic identity classes
            f.className = f.className.split(' ')[0] + ' ' + f.className.split(' ')[1];
            const id = f.getAttribute('id');
            const handSide = id.startsWith('lf') ? 'left' : 'right';
            const fingerType = id.substring(3);
            
            let matchedId = '';
            if (fingerType === 'thumb') matchedId = 'lf-thumb';
            else matchedId = `${handSide === 'left' ? 'lf' : 'rf'}-${fingerType}`;

            if (highlightFingers.includes(matchedId)) {
                let colorClass = '';
                if (matchedId === 'lf-thumb') colorClass = 'thumb';
                else if (matchedId === 'rf-thumb') colorClass = 'thumb';
                else colorClass = `${fingerType}-${handSide}`;
                f.classList.add(colorClass);
            } else {
                f.classList.add('dim');
            }
        });

        // Attach practice buttons click listeners
        learningTextContainer.querySelectorAll('.start-practice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lessonTarget = e.target.getAttribute('data-target');
                if (lessonTarget) {
                    learningModal.classList.add('hidden');
                    
                    // Search and select standard lesson button programmatically
                    const targetItem = document.querySelector(`.practice-item[data-lesson="${lessonTarget}"]`);
                    if (targetItem) {
                        targetItem.click();
                    } else {
                        // Fallback
                        currentLesson = lessonTarget;
                        resetGame();
                    }
                    const trans = siteTranslations[currentLearningLang] || siteTranslations.english;
                    showToast(`🚀 ${trans.navLearning.replace('🎓', '').trim()} Mode: ${lessonTarget.replace('_', ' ').toUpperCase()}!`);
                }
            });
        });
    }

    // Bind Global Language Selection Events
    if (langTrigger && langMenu) {
        langTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
            langTrigger.classList.toggle('open');
            
            // Close other dropdown menus
            const themeMenu = document.getElementById('theme-menu');
            const themeTrigger = document.getElementById('theme-trigger');
            const soundMenu = document.getElementById('sound-menu');
            const soundTrigger = document.getElementById('sound-trigger');
            const govtMenu = document.getElementById('govt-menu');
            const govtTrigger = document.getElementById('govt-trigger');
            
            if (themeMenu) themeMenu.classList.add('hidden');
            if (themeTrigger) themeTrigger.classList.remove('open');
            if (soundMenu) soundMenu.classList.add('hidden');
            if (soundTrigger) soundTrigger.classList.remove('open');
            if (govtMenu) govtMenu.classList.add('hidden');
            if (govtTrigger) govtTrigger.classList.remove('open');
        });
    }

    // Close language menu when clicking outside
    document.addEventListener('click', () => {
        if (langMenu && langTrigger) {
            langMenu.classList.add('hidden');
            langTrigger.classList.remove('open');
        }
    });

    langItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const btn = e.currentTarget;
            const chosenLang = btn.getAttribute('data-lang');
            if (!chosenLang) return;
            
            // Set active state in dropdown list
            langItems.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            
            // Update Trigger text
            const icon = btn.querySelector('.lang-item-icon').textContent;
            const name = btn.textContent.replace(icon, '').trim();
            if (currentLangIcon) currentLangIcon.textContent = icon;
            if (currentLangName) currentLangName.textContent = name;
            
            // Save selection and forcefully reload the page to ensure completely clean rendering
            localStorage.setItem('typingDostLang', chosenLang);
            
            // Check if there is a dedicated standalone regional page for this language
                        const pageMap = {
                'hindi': 'hindi-typing-test.html',
                'bengali': 'bengali-typing-test.html',
                'marathi': 'marathi-typing-test.html',
                'tamil': 'tamil-typing-test.html',
                'telugu': 'telugu-typing-test.html',
                'gujarati': 'gujarati-typing-test.html',
                'kannada': 'kannada-typing-test.html',
                'malayalam': 'malayalam-typing-test.html',
                'odia': 'odia-typing-test.html',
                'punjabi': 'punjabi-typing-test.html',
                'urdu': 'urdu-typing-test.html',
                'assamese': 'assamese-typing-test.html',
                'english': 'english-typing-test.html',
                'hinglish': 'hinglish-typing-test.html'
            };
            
            const targetPage = pageMap[chosenLang];
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            if (targetPage && targetPage !== currentPage && !(targetPage === 'index.html' && currentPage === '')) {
                window.location.href = targetPage;
            } else {
                const url = new URL(window.location.href);
                url.searchParams.set('lang', chosenLang);
                window.location.href = url.toString();
            }
        });
    });

    // Initialize saved language from localStorage on script startup
    if (langItems.length > 0) {
        let activeLangItem = document.querySelector(`#lang-menu .lang-item[data-lang="${currentLearningLang}"]`);
        if (!activeLangItem) {
            activeLangItem = document.querySelector('#lang-menu .lang-item[data-lang="hinglish"]');
        }
        
        if (activeLangItem) {
            langItems.forEach(t => t.classList.remove('active'));
            activeLangItem.classList.add('active');
            
            const iconSpan = activeLangItem.querySelector('.lang-item-icon');
            if (iconSpan) {
                const icon = iconSpan.textContent;
                const name = activeLangItem.textContent.replace(icon, '').trim();
                if (currentLangIcon) currentLangIcon.textContent = icon;
                if (currentLangName) currentLangName.textContent = name;
            }
        }
        
        // Translate site dynamically to saved/default language on load
        translateWholeSite(currentLearningLang);
    }

    if (learningBtn) {
        learningBtn.addEventListener('click', () => {
            learningModal.classList.remove('hidden');
            // Redraw content with global active language
            const activeTab = document.querySelector('.learning-tab.active');
            const activeChapterId = activeTab ? activeTab.getAttribute('data-chapter') : "1";
            renderChapter(activeChapterId);
        });
    }

    if (closeLearningBtn) {
        closeLearningBtn.addEventListener('click', () => {
            learningModal.classList.add('hidden');
        });
    }


    function translateWholeSite(lang) {
        const trans = siteTranslations[lang] || siteTranslations.english;
        if (!trans) return;

        // 1. Navigation items & dropdown triggers
        const testTrigger = document.getElementById('test-trigger');
        if (testTrigger) testTrigger.innerHTML = `${trans.testLabel} <span class="dropdown-arrow">▾</span>`;

        const govtTrigger = document.getElementById('govt-trigger');
        if (govtTrigger) govtTrigger.innerHTML = `🏛️ ${trans.govtLabel || 'Govt Exam'} <span class="dropdown-arrow">▾</span>`;

        const practiceTrigger = document.getElementById('practice-trigger');
        if (practiceTrigger) practiceTrigger.innerHTML = `${trans.practiceLabel} <span class="dropdown-arrow">▾</span>`;

        const gameTrigger = document.getElementById('game-trigger');
        if (gameTrigger) {
            const gameModeNames = {
                hindi: 'गेम मोड', hinglish: 'Game Mode', spanish: 'Juegos', french: 'Mode Jeu',
                german: 'Spielmodus', arabic: 'وضع اللعب', japanese: 'ゲーム', portuguese: 'Modo Jogo',
                bengali: 'গেম মোড', marathi: 'गेम मोड', tamil: 'கேம் மோட்', telugu: 'గేమ్ మోడ్',
                gujarati: 'ગેમ મોડ', kannada: 'ಗೇಮ್ ಮೋಡ್', malayalam: 'ഗേം മോഡ്', odia: 'ଗେମ ମୋଡ',
                punjabi: 'ਗੇਮ ਮੋਡ', urdu: 'گیم موڈ', assamese: 'গেম মোড'
            };
            gameTrigger.innerHTML = `🎮 ${gameModeNames[lang] || 'Game Mode'} <span class="dropdown-arrow">▾</span>`;
        }

        const learningBtnElement = document.getElementById('learning-btn');
        if (learningBtnElement) learningBtnElement.textContent = trans.navLearning;

        // Find and translate Weakspot button
        const weakspotBtnElement = document.querySelector('button[data-lesson="weakspot"]');
        if (weakspotBtnElement) weakspotBtnElement.textContent = trans.navWeakspot;

        // 2. Control labels (Sound & Theme Mode)
        const soundControlLabelElement = document.getElementById('sound-control-label');
        if (soundControlLabelElement) soundControlLabelElement.textContent = trans.soundLabel;

        const themeControlLabelElement = document.getElementById('theme-control-label');
        if (themeControlLabelElement) themeControlLabelElement.textContent = trans.themeLabel;

        const displayModeLabelEl = document.getElementById('display-mode-label');
        if (displayModeLabelEl) displayModeLabelEl.textContent = trans.displayModeLabel || "Display Mode";

        if (headerLangLabel) headerLangLabel.textContent = trans.langLabel.replace(':', '');

        const focusMascotBubbleElement = document.querySelector('.focus-mascot-bubble');
        if (focusMascotBubbleElement && trans.focusMascotBubble) {
            focusMascotBubbleElement.textContent = trans.focusMascotBubble;
        }

        // 3. Stats Board labels
        const timeLabelEl = document.getElementById('stat-label-time');
        if (timeLabelEl) timeLabelEl.textContent = trans.timeLabel;

        const wpmLabelEl = document.getElementById('stat-label-wpm');
        if (wpmLabelEl) wpmLabelEl.textContent = trans.wpmLabel;

        const accLabelEl = document.getElementById('stat-label-accuracy');
        if (accLabelEl) accLabelEl.textContent = trans.accLabel;

        const mistakesLabelEl = document.getElementById('stat-label-mistakes');
        if (mistakesLabelEl) mistakesLabelEl.textContent = trans.mistakesLabel;

        // 4. Action buttons
        const newTextBtn = document.getElementById('new-text-btn');
        if (newTextBtn) newTextBtn.textContent = trans.newTextBtn;

        const zenModeBtnElement = document.getElementById('zen-mode-btn');
        if (zenModeBtnElement) zenModeBtnElement.textContent = trans.zenBtn;

        const historyBtnElement = document.getElementById('history-btn');
        if (historyBtnElement) historyBtnElement.textContent = trans.historyBtn;

        const customTimeBtn = document.getElementById('custom-time-btn');
        if (customTimeBtn) customTimeBtn.textContent = trans.customBtn;

        const customTimeApply = document.getElementById('custom-time-apply');
        if (customTimeApply) customTimeApply.textContent = trans.setBtn;

        const customTimeInput = document.getElementById('custom-time-input');
        if (customTimeInput) customTimeInput.placeholder = trans.secPlaceholder;

        // Translate results modal restart button dynamically based on mode
        if (modalCloseBtn) {
            const btnTrans = MODAL_BTN_TRANSLATIONS[lang] || MODAL_BTN_TRANSLATIONS.english;
            if (currentLesson === 'game') {
                modalCloseBtn.innerText = btnTrans.playAgain;
            } else {
                modalCloseBtn.innerText = btnTrans.typeAgain;
            }
        }

        // Translate encouraging message dynamically based on last score in chosen language
        if (encouragingMsgEl) {
            if (lastTestMode.startsWith('game') || lastTestMode === 'game') {
                const encTrans = ENCOURAGEMENT_TRANSLATIONS[lang] || ENCOURAGEMENT_TRANSLATIONS.english;
                encouragingMsgEl.innerText = encTrans.gameTry;
            } else {
                encouragingMsgEl.innerText = getDynamicPerformanceMessage(lastWpm, lastAccuracy, lang);
            }
        }

        // 5. Footer and Donate modal contents
        const footerTextElement = document.querySelector('.footer-text');
        if (footerTextElement) footerTextElement.textContent = trans.footerText;

                const donateBtnElement = document.getElementById('donate-btn');
        if (donateBtnElement) {
            const donateText = (trans.donateBtn || 'Donate').trim();
            donateBtnElement.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor" class="donate-icon action-btn-icon">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>${donateText}</span>
            `;
        }

        // 6. Mascot and speech bubbles
        const mascotText = document.getElementById('mascot-bubble-text');
        if (mascotText) mascotText.innerHTML = trans.mascotBubble;

        // 7. Touch Typing Modal Headers & Tabs
        if (learningHeaderTitle) learningHeaderTitle.textContent = trans.learningTitle;
        if (learningHeaderSubtitle) learningHeaderSubtitle.textContent = trans.learningSubtitle;
        if (closeLearningBtn) closeLearningBtn.textContent = trans.closeBtn;

        learningTabs.forEach((tab, index) => {
            const tabText = trans.tabs[index];
            const emojiMap = ["🏠", "⬆️", "⬇️", "🔢", "🚀"];
            const emoji = emojiMap[index] || "🏠";
            tab.innerHTML = `<span style="font-size: 1.2rem; margin-right: 6px;">${emoji}</span> ${tabText}`;
            
            // Retain active styles dynamically
            if (tab.classList.contains('active')) {
                tab.style.background = 'rgba(0, 255, 255, 0.05)';
                tab.style.borderColor = 'var(--primary)';
                tab.style.color = '#fff';
            } else {
                tab.style.background = 'transparent';
                tab.style.borderColor = 'transparent';
                tab.style.color = 'var(--text-sub)';
            }
        });

        // Redraw currently active chapter in learning modal
        const activeTab = document.querySelector('.learning-tab.active');
        const activeChapterId = activeTab ? activeTab.getAttribute('data-chapter') : "1";
        renderChapter(activeChapterId);

        // Initialize Layout/Font Selector for current language
        if (typeof window.initFontSelector === "function") window.initFontSelector(lang);
        if (typeof window.initFontSelector === 'function') {
            window.initFontSelector(lang);
        }
    }

    // Initialize Layout/Font selector based on language
    function initLayoutSelector_old_unused(lang) {
        const layoutControl = document.getElementById('layout-control-group');
        const layoutMenu = document.getElementById('layout-menu');
        const layoutTrigger = document.getElementById('layout-trigger');

        if (!layoutControl || !layoutMenu || !layoutTrigger) return;

        // Ensure we only process if the language has specific layouts defined in config
        if (typeof SUPPORTED_LANGUAGES !== 'undefined' && SUPPORTED_LANGUAGES[lang] && SUPPORTED_LANGUAGES[lang].layouts) {
            const layouts = SUPPORTED_LANGUAGES[lang].layouts;
            layoutControl.style.display = 'inline-block'; // Show the control group properly

            // Define friendly names for known layouts
            const LAYOUT_META = {
                'remington-gail': { icon: '🖋️', name: 'Remington Gail' },
                'kruti-dev': { icon: '📝', name: 'Kruti Dev 010' },
                'inscript': { icon: '⌨️', name: 'Inscript' },
                'phonetic': { icon: '🔊', name: 'Phonetic' },
                'tamil-99': { icon: '⌨️', name: 'Tamil 99' }
            };

            layoutMenu.innerHTML = ''; // Clear previous

            layouts.forEach(layoutId => {
                const meta = LAYOUT_META[layoutId] || { icon: '⌨️', name: layoutId };
                const btn = document.createElement('button');
                btn.className = 'theme-item layout-item';
                btn.setAttribute('data-layout', layoutId);
                btn.innerHTML = `<span class="theme-item-icon">${meta.icon}</span> ${meta.name}`;
                
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Update UI
                    const currentIcon = document.getElementById('current-layout-icon');
                    const currentName = document.getElementById('current-layout-name');
                    if (currentIcon) currentIcon.textContent = meta.icon;
                    if (currentName) currentName.textContent = meta.name;
                    
                    layoutMenu.classList.add('hidden');
                    layoutTrigger.classList.remove('open');
                    
                    // Save and apply class
                    localStorage.setItem('typingDostLayout_' + lang, layoutId);
                    document.body.classList.remove(...layouts.map(l => 'layout-' + l));
                    document.body.classList.add('layout-' + layoutId);
                });
                
                layoutMenu.appendChild(btn);
            });

            // Set active layout
            const savedLayout = localStorage.getItem('typingDostLayout_' + lang) || layouts[0];
            const activeBtn = layoutMenu.querySelector(`[data-layout="${savedLayout}"]`);
            if (activeBtn) {
                activeBtn.click(); // Trigger click to apply classes and update UI
            } else if (layoutMenu.firstElementChild) {
                layoutMenu.firstElementChild.click();
            }

            // Bind click to open dropdown
            const newLayoutTrigger = layoutTrigger.cloneNode(true);
            layoutTrigger.parentNode.replaceChild(newLayoutTrigger, layoutTrigger);

            newLayoutTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                layoutMenu.classList.toggle('hidden');
                newLayoutTrigger.classList.toggle('open');
            });
            document.addEventListener('click', () => {
                layoutMenu.classList.add('hidden');
                newLayoutTrigger.classList.remove('open');
            });

        } else {
            layoutControl.style.display = 'none'; // Hide if no layouts available
        }
    }


    // Track if input was already focused when the click started (mousedown)
    document.addEventListener('mousedown', (e) => {
        inputWasFocusedOnMousedown = (document.activeElement === typingInput);
    });

    // 3. Immersive Click Everywhere to Resume Focus & Unblur Background
    document.addEventListener('click', (e) => {
        const focusOverlay = document.getElementById('focus-overlay');
        const textDisplay = document.getElementById('text-display');
        
        // If user is actively typing (focused on mousedown) and clicks anywhere, we blur the input to pause and show controls!
        if (isTyping && inputWasFocusedOnMousedown) {
            typingInput.blur();
            return;
        }
        
        const activeModals = document.querySelectorAll('.modal:not(.hidden)');
        if (activeModals.length > 0) return; // Keep focus on modals if open

        const typingSection = document.getElementById('typing-section-wrapper');
        const isClickInsideTyping = typingSection && typingSection.contains(e.target);

        // 1. If background blur (focused-typing) is active
        if (document.body.classList.contains('focused-typing') && !isClickInsideTyping) {
            document.body.classList.remove('focused-typing');
        }

        // 2. If idle blur/overlay is active (or triggered by blur)
        if (focusOverlay && textDisplay) {
            const isOverlayVisible = !focusOverlay.classList.contains('hidden') || textDisplay.classList.contains('blurred');
            
            if (isOverlayVisible && !isClickInsideTyping) {
                // Clicked outside -> Unblur the entire site immediately
                focusOverlay.classList.add('hidden');
                textDisplay.classList.remove('blurred');
                document.body.classList.remove('focused-typing');
            }
        }
    });

    /* ==========================================================================
       COLLAPSIBLE PARAMETERS DRAWER & HARDWARE ACCELERATED SPARKS ENGINE
       ========================================================================== */

    // 1. Collapsible Cyber Parameters Drawer
    const drawerToggleBtn = document.getElementById('drawer-toggle-btn');
    const cyberDrawer = document.getElementById('cyber-drawer');

    if (drawerToggleBtn && cyberDrawer) {
        // Toggle drawer on button click
        drawerToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = !cyberDrawer.classList.contains('hidden');
            if (isOpen) {
                cyberDrawer.classList.add('hidden');
                drawerToggleBtn.classList.remove('active');
            } else {
                cyberDrawer.classList.remove('hidden');
                drawerToggleBtn.classList.add('active');
                
                // Scroll slightly to drawer for visibility on mobile
                requestAnimationFrame(() => {
                    cyberDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                });
            }
        });

        // Close drawer when clicking outside, or when choosing a different lesson button
        document.addEventListener('click', (e) => {
            const isClickInsideDrawer = cyberDrawer.contains(e.target);
            const isClickOnToggleBtn = drawerToggleBtn.contains(e.target);
            
            if (!isClickInsideDrawer && !isClickOnToggleBtn) {
                cyberDrawer.classList.add('hidden');
                drawerToggleBtn.classList.remove('active');
            }
        });

        // Prevent drawer closure when clicking inside the drawer itself
        cyberDrawer.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // --- KEYBOARD DROPDOWN ACCESSIBILITY (a11y) MODULE ---
    function bindDropdownA11y(triggerId, menuId, itemClass) {
        const trigger = document.getElementById(triggerId);
        const menu = document.getElementById(menuId);
        if (!trigger || !menu) return;

        function getItems() {
            return Array.from(menu.querySelectorAll(itemClass));
        }

        function updateAriaState(isOpen) {
            trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }

        trigger.setAttribute('aria-haspopup', 'listbox');
        updateAriaState(false);

        trigger.addEventListener('keydown', (e) => {
            const items = getItems();
            if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                menu.classList.remove('hidden');
                trigger.classList.add('open');
                updateAriaState(true);

                if (items.length > 0) {
                    items[0].focus();
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                menu.classList.add('hidden');
                trigger.classList.remove('open');
                updateAriaState(false);
            }
        });

        menu.addEventListener('keydown', (e) => {
            const item = e.target.closest(itemClass);
            if (!item) return;

            const items = getItems();
            const currentIndex = items.indexOf(item);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % items.length;
                items[nextIndex].focus();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + items.length) % items.length;
                items[prevIndex].focus();
            } else if (e.key === 'Escape' || e.key === 'Tab') {
                menu.classList.add('hidden');
                trigger.classList.remove('open');
                updateAriaState(false);
                trigger.focus();
            } else if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                item.click();
                trigger.focus();
            }
        });
    }

    bindDropdownA11y('sound-trigger', 'sound-menu', '.sound-item');
    bindDropdownA11y('theme-trigger', 'theme-menu', '.theme-item');
    bindDropdownA11y('lang-trigger', 'lang-menu', '.lang-item');
    bindDropdownA11y('test-trigger', 'test-menu', '.practice-item');
    bindDropdownA11y('govt-trigger', 'govt-menu', '.practice-item');
    bindDropdownA11y('practice-trigger', 'practice-menu', '.practice-item');
    bindDropdownA11y('game-trigger', 'game-menu', '.practice-item');

    // --- MOBILE VIRTUAL MECHANICAL KEYBOARD INTERACTION LOGIC ---
    (function initVirtualKeyboard() {
        const virtualKeyboard = document.getElementById('mobile-virtual-keyboard');
        const inputArea = document.getElementById('typing-input');
        if (!virtualKeyboard || !inputArea) return;

        let isShiftActive = false;

        function updateKeyCases() {
            const keys = virtualKeyboard.querySelectorAll('.v-key');
            keys.forEach(k => {
                const keyVal = k.getAttribute('data-key');
                if (keyVal && keyVal.length === 1 && keyVal !== ' ') {
                    k.textContent = isShiftActive ? keyVal.toUpperCase() : keyVal.toLowerCase();
                }
            });
        }

        virtualKeyboard.addEventListener('click', (e) => {
            const btn = e.target.closest('.v-key');
            if (!btn) return;

            e.preventDefault();
            e.stopPropagation();

            // Retain input focus so background unblurs and stays active
            inputArea.focus();

            const keyVal = btn.getAttribute('data-key');

            // Play simulated click sound
            if (keyVal === 'shift') {
                isShiftActive = !isShiftActive;
                btn.classList.toggle('active-press', isShiftActive);
                updateKeyCases();
                return;
            }

            let charToAppend = keyVal;
            if (charToAppend === 'backspace') {
                const currentVal = inputArea.value;
                if (currentVal.length > 0) {
                    inputArea.value = currentVal.substring(0, currentVal.length - 1);
                    inputArea.dispatchEvent(new Event('input', { bubbles: true }));
                }
                return;
            }

            if (charToAppend !== ' ') {
                charToAppend = isShiftActive ? charToAppend.toUpperCase() : charToAppend.toLowerCase();
            }

            inputArea.value += charToAppend;
            inputArea.dispatchEvent(new Event('input', { bubbles: true }));

            // Autoshift release flow
            if (isShiftActive && keyVal !== ' ') {
                isShiftActive = false;
                const shiftBtn = virtualKeyboard.querySelector('.v-key[data-key="shift"]');
                if (shiftBtn) shiftBtn.classList.remove('active-press');
                updateKeyCases();
            }
        });

        // Sync with physical keyboard inputs
        document.addEventListener('keydown', (e) => {
            if (virtualKeyboard.classList.contains('hidden') || getComputedStyle(virtualKeyboard).display === 'none') {
                return;
            }
            let keyName = e.key.toLowerCase();
            if (keyName === 'backspace' || keyName === ' ') {
                // Keep same
            } else if (keyName === 'shift') {
                keyName = 'shift';
            } else if (keyName.length > 1) {
                return;
            }

            const vKey = virtualKeyboard.querySelector(`.v-key[data-key="${keyName}"]`);
            if (vKey) {
                vKey.classList.add('active-press');
            }
        });

        document.addEventListener('keyup', (e) => {
            let keyName = e.key.toLowerCase();
            if (keyName === 'backspace' || keyName === ' ') {
                // Keep same
            } else if (keyName === 'shift') {
                keyName = 'shift';
            } else if (keyName.length > 1) {
                return;
            }

            const vKey = virtualKeyboard.querySelector(`.v-key[data-key="${keyName}"]`);
            if (vKey) {
                if (keyName === 'shift') {
                    vKey.classList.toggle('active-press', isShiftActive);
                } else {
                    vKey.classList.remove('active-press');
                }
            }
        });
    })();



    // --- PROGRESSIVE WEB APP (PWA) SERVICE WORKER REGISTRATION ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('[Service Worker] Cyber precache systems activated scope:', reg.scope))
                .catch(err => console.error('[Service Worker] Cyber systems failed initialization:', err));
        });
    }

    // --- DYNAMIC TYPING GEARS FOOTER CLICK ACTION (GOOGLE SHEETS CMS) ---
    const gearsBtn = document.getElementById('typing-gears-btn');
    const gearsModal = document.getElementById('typing-gears-modal');
    const gearsLoader = document.getElementById('gears-loader');
    const gearsError = document.getElementById('gears-error');
    const gearsGrid = document.getElementById('gears-products-grid');
    const gearsRetryBtn = document.getElementById('gears-retry-btn');
    
    let cachedGears = null;
    const sheetsCSVUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFMFSkERnvD90fxv3tk6yOB7CjaUEWSIfMtDFOsFaMzwSfUE2ghby6JDl6Z6a4sv6CPeIUw8wZRuJV/pub?gid=0&single=true&output=csv';

    function parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        result.push(current.trim());
        return result;
    }

    async function fetchGearProducts() {
        if (!gearsLoader || !gearsError || !gearsGrid) return;
        
        gearsLoader.classList.remove('hidden');
        gearsError.classList.add('hidden');
        gearsGrid.classList.add('hidden');
        
        try {
            const response = await fetch(sheetsCSVUrl);
            if (!response.ok) throw new Error('Network response was not OK');
            const dataText = await response.text();
            
            const lines = dataText.split('\n');
            const products = [];
            
            // Skip header row
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;
                
                const cols = parseCSVLine(line);
                if (cols.length >= 3 && cols[0] && cols[2]) {
                    products.push({
                        name: cols[0],
                        image: cols[1] || 'typingdost_brand.png',
                        link: cols[2],
                        price: cols[3] || 'Check Price',
                        description: cols[4] || 'Highly recommended gear'
                    });
                }
            }
            
            if (products.length === 0) {
                throw new Error('No products found in the sheet');
            }
            
            cachedGears = products;
            renderGears(products);
            
        } catch (error) {
            console.error('[Typing Gears] Error fetching products:', error);
            gearsLoader.classList.add('hidden');
            gearsError.classList.remove('hidden');
        }
    }

    function renderGears(products) {
        if (!gearsGrid || !gearsLoader) return;
        
        gearsGrid.innerHTML = '';
        products.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'gear-card';
            
            const nameClean = prod.name.replace(/^"(.*)"$/, '$1');
            const descClean = prod.description.replace(/^"(.*)"$/, '$1');
            const priceClean = prod.price.replace(/^"(.*)"$/, '$1');
            const imageClean = prod.image.replace(/^"(.*)"$/, '$1');
            const linkClean = prod.link.replace(/^"(.*)"$/, '$1');
            
            card.innerHTML = `
                <div class="gear-img-wrap">
                    <img src="${imageClean}" alt="${nameClean}" class="gear-img" onerror="this.src='typingdost_brand.png'" loading="lazy">
                </div>
                <h4 class="gear-title" title="${nameClean}">${nameClean}</h4>
                <p class="gear-desc" title="${descClean}">${descClean}</p>
                <div class="gear-footer">
                    <span class="gear-price">${priceClean.startsWith('₹') || priceClean.toLowerCase().includes('price') ? priceClean : '₹' + priceClean}</span>
                    <a href="${linkClean}" target="_blank" rel="noopener noreferrer" class="gear-buy-btn">
                        Shop Now
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14" style="vertical-align: middle;">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            `;
            gearsGrid.appendChild(card);
        });
        
        gearsLoader.classList.add('hidden');
        gearsGrid.classList.remove('hidden');
    }

    if (gearsBtn && gearsModal) {
        gearsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof initAudio === 'function') initAudio();
            if (typeof playClick === 'function') playClick();
            
            gearsModal.classList.remove('hidden');
            
            if (!cachedGears) {
                fetchGearProducts();
            } else {
                renderGears(cachedGears);
            }
        });
        
        gearsModal.addEventListener('click', (e) => {
            if (e.target === gearsModal) {
                gearsModal.classList.add('hidden');
            }
        });
    }

    if (gearsRetryBtn) {
        gearsRetryBtn.addEventListener('click', () => {
            fetchGearProducts();
        });
    }

    const resultGearBanner = document.getElementById('result-gear-banner');
    const resultModal = document.getElementById('result-modal');
    if (resultGearBanner && resultModal && gearsModal) {
        resultGearBanner.addEventListener('click', (e) => {
            e.stopPropagation();
            if (typeof initAudio === 'function') initAudio();
            if (typeof playClick === 'function') playClick();
            
            resultModal.classList.add('hidden');
            gearsModal.classList.remove('hidden');
            
            if (!cachedGears) {
                fetchGearProducts();
            } else {
                renderGears(cachedGears);
            }
        });
    }

    /* ==========================================================================
       ⚡ MASCOT CORNER GREETING POPUP SYSTEM (MULTILINGUAL WELCOME & 15-MIN)
       ========================================================================== */
    (function initMascotGreetings() {
        // Create the widget DOM structure dynamically
        const widget = document.createElement('div');
        widget.className = 'mascot-greeting-widget';
        widget.id = 'mascot-greeting-widget';
        widget.innerHTML = `
            <div class="mascot-greeting-avatar">
                <img id="mascot-greeting-img-tag" class="mascot-greeting-img" src="typingdost_welcome.webp" alt="Mascot">
            </div>
            <div class="mascot-greeting-bubble">
                <button class="mascot-greeting-close" id="mascot-greeting-close-btn" title="Dismiss">&times;</button>
                <div class="mascot-greeting-title" id="mascot-greeting-title-tag">TypingDost Says</div>
                <div class="mascot-greeting-text" id="mascot-greeting-text-tag">...</div>
            </div>
        `;
        document.body.appendChild(widget);

        const closeBtn = widget.querySelector('#mascot-greeting-close-btn');
        const imgTag = widget.querySelector('#mascot-greeting-img-tag');
        const titleTag = widget.querySelector('#mascot-greeting-title-tag');
        const textTag = widget.querySelector('#mascot-greeting-text-tag');

        // Multilingual translations for corner greetings
        const mascotTranslations = {
            english: {
                welcomeTitle: "Welcome Sir! 🚀",
                welcomeMsg: "Welcome to <b>TypingDost</b>! I am your personal typing partner. Let's practice together and make your fingers lightning fast! Ready? Start a typing test now! ⚡💻",
                welcomeBackTitle: "Welcome Back, Sir! 🕶️",
                welcomeBackMsg: "Hey, welcome back, boss! 🌟 I am completely ready to help you break your speed records today! Let's start typing! 🚀🎯",
                milestoneTitle: "15-Minute Milestone! 🏆",
                milestoneMsg: "Wow, 15 minutes of practicing! ☕ Take a short break, stretch those fingers, and drink some water. Mascot is super proud of your consistency! Let's smash some more records! 💪🕶️"
            },
            hinglish: {
                welcomeTitle: "Welcome Sir! 🚀",
                welcomeMsg: "Welcome to <b>TypingDost</b>! Main aapka personal typing partner hoon. Let's practice together aur aapki fingers ko laser lightning fast banate hain! Ready ho? Ek typing test start karo! ⚡💻",
                welcomeBackTitle: "Welcome Back, Sir! 🕶️",
                welcomeBackMsg: "Arey welcome back, boss! 🌟 Aapki absolute speed record break karne ke liye I am completely ready! Let's test your fingers speed today! 🚀🎯",
                milestoneTitle: "15-Minute Milestone! 🏆",
                milestoneMsg: "Bhai, 15 minutes ho gaye typing practice karte hue! ☕ Ungliyon ko thoda stretch kar lo aur short water break le lo. Mascot is super proud of your absolute consistency! Let's smash some more records! 💪🕶️"
            },
            hindi: {
                welcomeTitle: "आपका स्वागत है, सर! 🚀",
                welcomeMsg: "<b>TypingDost</b> में आपका स्वागत है! मैं आपका व्यक्तिगत टाइपिंग पार्टनर हूँ। आइए मिलकर अभ्यास करें और आपकी उंगलियों को बिजली की तरह तेज़ बनाएं! तैयार हैं? अभी टाइपिंग टेस्ट शुरू करें! ⚡💻",
                welcomeBackTitle: "स्वागत है, सर! 🕶️",
                welcomeBackMsg: "अरे, स्वागत है बॉस! 🌟 आज आपके स्पीड रिकॉर्ड को तोड़ने के लिए मैं पूरी तरह तैयार हूँ! चलिए टाइपिंग शुरू करते हैं! 🚀🎯",
                milestoneTitle: "15 मिनट पूरे! 🏆",
                milestoneMsg: "भाई, 15 मिनट अभ्यास के पूरे हो गए हैं! ☕ थोड़ा विश्राम लें, उंगलियों को फैलाएं और पानी पिएं। मैस्कॉट को आपकी लगन पर बहुत गर्व है! चलिए और भी रिकॉर्ड तोड़ते हैं! 💪🕶️"
    },
            arabic: {
                welcomeTitle: "أهلاً بك يا سيدي! 🚀",
                welcomeMsg: "مرحباً بك في <b>TypingDost</b>! أنا شريكك الشخصي في الكتابة. دعنا نتدرب معاً ونجعل أصابعك سريعة كالبرق! هل أنت مستعد؟ ابدأ اختبار الكتابة الآن! ⚡💻",
                welcomeBackTitle: "أهلاً بك مجدداً يا سيدي! 🕶️",
                welcomeBackMsg: "يا أهلاً بعودتك يا رئيس! 🌟 أنا مستعد تماماً لمساعدتك في تحطيم أرقامك القياسية اليوم! دعنا نبدأ الكتابة! 🚀🎯",
                milestoneTitle: "إنجاز 15 دقيقة! 🏆",
                milestoneMsg: "يا أخي، لقد أمضيت 15 دقيقة في التدريب! ☕ خذ استراحة قصيرة، ومدد أصابعك، واشرب بعض الماء. التميمة فخورة جداً باستمراريتك! دعنا نحطم المزيد من الأرقام القياسية! 💪🕶️"
            },
            spanish: {
                welcomeTitle: "¡Bienvenido Señor! 🚀",
                welcomeMsg: "¡Bienvenido a <b>TypingDost</b>! Soy tu compañero personal de escritura. ¡Practiquemos juntos y hagamos tus dedos ultrarrápidos como el rayo! ¿Listo? ¡Comienza una prueba de escritura ahora! ⚡💻",
                welcomeBackTitle: "¡Bienvenido de vuelta, Señor! 🕶️",
                welcomeBackMsg: "¡Hola, bienvenido de vuelta, jefe! 🌟 ¡Estoy completamente listo para ayudarte a romper tus récords de velocidad hoy! ¡Comencemos a escribir! 🚀🎯",
                milestoneTitle: "¡Hito de 15 Minutos! 🏆",
                milestoneMsg: "Hermano, ¡15 minutos de práctica! ☕ Toma un breve descanso, estira los dedos y bebe algo de agua. ¡El peluche está súper orgulloso de tu consistencia! ¡Vamos a romper mais récords! 💪🕶️"
            },
            french: {
                welcomeTitle: "Bienvenue Monsieur ! 🚀",
                welcomeMsg: "Bienvenue sur <b>TypingDost</b> ! Je suis votre partenaire de frappe personnel. Pratiquons ensemble et rendons vos doigts rapides comme l'éclair ! Prêt ? Commencez un test de frappe maintenant ! ⚡💻",
                welcomeBackTitle: "Bon retour, Monsieur ! 🕶️",
                welcomeBackMsg: "Hé, bon retour, chef ! 🌟 Je suis totalement prêt à vous aider à battre vos records de vitesse aujourd'hui ! Commençons à taper ! 🚀🎯",
                milestoneTitle: "Étape des 15 Minutes ! 🏆",
                milestoneMsg: "Mon frère, 15 minutes de pratique ! ☕ Faites une courte pause, étirez vos doigts et buvez un peu d'eau. La mascotte est super fière de votre régularité ! Allons battre d'autres records ! 💪🕶️"
            },
            german: {
                welcomeTitle: "Willkommen, Sir! 🚀",
                welcomeMsg: "Willkommen bei <b>TypingDost</b>! Ich bin dein persönlicher Schreibpartner. Lass uns zusammen üben und deine Finger blitzschnell machen! Bereit? Starte jetzt einen Schreibtest! ⚡💻",
                welcomeBackTitle: "Willkommen zurück, Sir! 🕶️",
                welcomeBackMsg: "Hey, willkommen zurück, Boss! 🌟 Ich bin absolut bereit, dir heute zu helfen, deine Geschwindigkeitsrekorde zu brechen! Lass uns anfangen zu tippen! 🚀🎯",
                milestoneTitle: "15-Minuten-Meilenstein! 🏆",
                milestoneMsg: "Kumpel, 15 Minuten Übung! ☕ Mach eine kurze Pause, strecke deine Finger und trink etwas Wasser. Das Maskottchen ist super stolz auf deine Beständigkeit! Lass uns noch mehr Rekorde brechen! 💪🕶️"
            },
            japanese: {
                welcomeTitle: "ようこそ、お客様！🚀",
                welcomeMsg: "<b>TypingDost</b>へようこそ！私はあなたのパーソナルタイピングパートナーです。一緒に練習して、指を稲妻のように速くしましょう！準備はいいですか？今すぐタイピングテストを開始しましょう！ ⚡💻",
                welcomeBackTitle: "おかえりなさいませ！🕶️",
                welcomeBackMsg: "お帰りなさい、ボス！🌟 今日のタイピング速度の記録更新に向けて、準備は万端です！さあ、タイピングを始めましょう！🚀🎯",
                milestoneTitle: "15分マイルストーン！🏆",
                milestoneMsg: "友よ、15分間のタイピング練習達成です！☕ 少し休憩して、指をストレッチし、水分補給をしてください。マスコットはあなたの継続的な努力をとても誇りに思っています！さらなる記録を打ち立てましょう！💪🕶️"
            },
            portuguese: {
                welcomeTitle: "Bem-vindo Senhor! 🚀",
                welcomeMsg: "Bem-vindo ao <b>TypingDost</b>! Sou o seu parceiro pessoal de digitação. Vamos praticar juntos e tornar os seus dedos rápidos como o relâmpago! Pronto? Comece um teste de digitação agora! ⚡💻",
                welcomeBackTitle: "Bem-vindo de volta, Senhor! 🕶️",
                welcomeBackMsg: "Olá, bem-vindo de volta, chefe! 🌟 Estou totalmente pronto para o ajudar a quebrar os seus recordes de velocidade hoje! Vamos começar a digitar! 🚀🎯",
                milestoneTitle: "Marco de 15 Minutos! 🏆",
                milestoneMsg: "Mano, 15 minutos de prática! ☕ Faça uma pequena palavra-chave, alongue os dedos e beba um pouco de água. O mascote está super orgulhoso da sua consistência! Vamos quebrar mais recordes! 💪🕶️"
            }
        };

        // Function to show a greeting, dynamically resolved according to language setting
        function triggerGreeting(type) {
            // Only show if user is NOT in focus mode or zen mode currently
            if (document.body.classList.contains('zen-mode') || document.body.classList.contains('focused-typing')) {
                return;
            }

            // Fetch currently selected global language dynamically
            const activeLang = (typeof currentLearningLang !== 'undefined' && currentLearningLang) ? currentLearningLang.toLowerCase() : 'english';
            const trans = mascotTranslations[activeLang] || mascotTranslations.english;

            let pose = 'typingdost_welcome.webp';
            let title = '';
            let message = '';

            if (type === 'welcome') {
                pose = 'typingdost_welcome.webp';
                title = trans.welcomeTitle;
                message = trans.welcomeMsg;
            } else if (type === 'welcome_back') {
                pose = 'typingdost_welcome.webp';
                title = trans.welcomeBackTitle;
                message = trans.welcomeBackMsg;
            } else if (type === 'milestone_15') {
                pose = 'typingdost_cool.webp';
                title = trans.milestoneTitle;
                message = trans.milestoneMsg;
            }

            imgTag.src = pose;
            titleTag.textContent = title;
            textTag.innerHTML = message;
            widget.classList.add('active');

            // Play mechanical key switch tick sound if engine is loaded
            if (typeof playClick === 'function') {
                try { playClick(); } catch (e) {}
            }
        }

        // Function to hide the greeting
        function hideGreeting() {
            widget.classList.remove('active');
        }

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hideGreeting();
        });

        // 1. Initial Visit Welcome Popup Trigger
        setTimeout(() => {
            const hasVisited = localStorage.getItem('typingdost_visited');
            if (!hasVisited) {
                // First Time Visit welcome
                localStorage.setItem('typingdost_visited', 'true');
                triggerGreeting('welcome');
            } else {
                // Returning User welcome
                triggerGreeting('welcome_back');
            }

            // Auto dismiss after 10 seconds to remain non-obtrusive
            setTimeout(hideGreeting, 10000);
        }, 3000); // Trigger 3 seconds after page loads

        // 2. 15-Minute Milestone Greeting Trigger
        setTimeout(() => {
            triggerGreeting('milestone_15');

            // Auto dismiss after 12 seconds
            setTimeout(hideGreeting, 12000);
        }, 15 * 60 * 1000); // Trigger after 15 minutes of practice
    })();

    // Initialize daily quest and streaks dashboard on script startup
    if (typeof updateDailyStreakAndQuest === 'function') {
        updateDailyStreakAndQuest();
    }
    
    // Initialize gamification elements and live mascot states
    if (typeof updateGamificationHeader === 'function') {
        updateGamificationHeader();
    }
    if (typeof updateLiveMascot === 'function') {
        updateLiveMascot('welcome');
    }

    // ---- HOMEPAGE LIVE KEYBOARD GUIDE ENGINE ----
    const liveKeyboardGuide = document.getElementById('live-keyboard-guide');
    const toggleKeyboardBtn = document.getElementById('toggle-keyboard-btn');
    let keyboardGuideState = localStorage.getItem('typingDostKeyboardGuide') || 'on';
    let highlightedKeyElements = [];

    // Helper to get key elements efficiently
    function getKeyElement(code) {
        if (!keyElementsMap) {
            keyElementsMap = new Map();
            if (liveKeyboardGuide) {
                const keys = liveKeyboardGuide.querySelectorAll('.key[data-keycode]');
                keys.forEach(k => {
                    keyElementsMap.set(k.getAttribute('data-keycode'), k);
                });
            }
        }
        return keyElementsMap.get(code);
    }

    // Universal Character to Physical QWERTY Keycode & Shift Resolver (100% Coverage for all 14 Languages)
    const UNIVERSAL_KEYCODES_MAP = {
        // 1. Numerals Across All Indic Scripts
        '१': { code: 'Digit1', shift: false }, '२': { code: 'Digit2', shift: false }, '३': { code: 'Digit3', shift: false }, '४': { code: 'Digit4', shift: false }, '५': { code: 'Digit5', shift: false },
        '६': { code: 'Digit6', shift: false }, '७': { code: 'Digit7', shift: false }, '८': { code: 'Digit8', shift: false }, '९': { code: 'Digit9', shift: false }, '०': { code: 'Digit0', shift: false },
        '১': { code: 'Digit1', shift: false }, '২': { code: 'Digit2', shift: false }, '৩': { code: 'Digit3', shift: false }, '৪': { code: 'Digit4', shift: false }, '৫': { code: 'Digit5', shift: false },
        '৬': { code: 'Digit6', shift: false }, '৭': { code: 'Digit7', shift: false }, '৮': { code: 'Digit8', shift: false }, '৯': { code: 'Digit9', shift: false }, '০': { code: 'Digit0', shift: false },
        '૧': { code: 'Digit1', shift: false }, '૨': { code: 'Digit2', shift: false }, '૩': { code: 'Digit3', shift: false }, '૪': { code: 'Digit4', shift: false }, '૫': { code: 'Digit5', shift: false },
        '૬': { code: 'Digit6', shift: false }, '૭': { code: 'Digit7', shift: false }, '૮': { code: 'Digit8', shift: false }, '૯': { code: 'Digit9', shift: false }, '૦': { code: 'Digit0', shift: false },
        '೧': { code: 'Digit1', shift: false }, '೨': { code: 'Digit2', shift: false }, '೩': { code: 'Digit3', shift: false }, '೪': { code: 'Digit4', shift: false }, '೫': { code: 'Digit5', shift: false },
        '೬': { code: 'Digit6', shift: false }, '೭': { code: 'Digit7', shift: false }, '೮': { code: 'Digit8', shift: false }, '೯': { code: 'Digit9', shift: false }, '೦': { code: 'Digit0', shift: false },
        '൧': { code: 'Digit1', shift: false }, '൨': { code: 'Digit2', shift: false }, '൩': { code: 'Digit3', shift: false }, '൪': { code: 'Digit4', shift: false }, '൫': { code: 'Digit5', shift: false },
        '൬': { code: 'Digit6', shift: false }, '൭': { code: 'Digit7', shift: false }, '൮': { code: 'Digit8', shift: false }, '൯': { code: 'Digit9', shift: false }, '൦': { code: 'Digit0', shift: false },
        '୧': { code: 'Digit1', shift: false }, '୨': { code: 'Digit2', shift: false }, '୩': { code: 'Digit3', shift: false }, '୪': { code: 'Digit4', shift: false }, '୫': { code: 'Digit5', shift: false },
        '୬': { code: 'Digit6', shift: false }, '୭': { code: 'Digit7', shift: false }, '୮': { code: 'Digit8', shift: false }, '୯': { code: 'Digit9', shift: false }, '୦': { code: 'Digit0', shift: false },
        '੧': { code: 'Digit1', shift: false }, '੨': { code: 'Digit2', shift: false }, '੩': { code: 'Digit3', shift: false }, '੪': { code: 'Digit4', shift: false }, '੫': { code: 'Digit5', shift: false },
        '੬': { code: 'Digit6', shift: false }, '੭': { code: 'Digit7', shift: false }, '੮': { code: 'Digit8', shift: false }, '੯': { code: 'Digit9', shift: false }, '੦': { code: 'Digit0', shift: false },
        '౧': { code: 'Digit1', shift: false }, '౨': { code: 'Digit2', shift: false }, '౩': { code: 'Digit3', shift: false }, '౪': { code: 'Digit4', shift: false }, '౫': { code: 'Digit5', shift: false },
        '౬': { code: 'Digit6', shift: false }, '౭': { code: 'Digit7', shift: false }, '౮': { code: 'Digit8', shift: false }, '౯': { code: 'Digit9', shift: false }, '౦': { code: 'Digit0', shift: false },
        '௧': { code: 'Digit1', shift: false }, '௨': { code: 'Digit2', shift: false }, '௩': { code: 'Digit3', shift: false }, '௪': { code: 'Digit4', shift: false }, '௫': { code: 'Digit5', shift: false },
        '௬': { code: 'Digit6', shift: false }, '௭': { code: 'Digit7', shift: false }, '௮': { code: 'Digit8', shift: false }, '௯': { code: 'Digit9', shift: false }, '௰': { code: 'Digit0', shift: false },
        '۱': { code: 'Digit1', shift: false }, '۲': { code: 'Digit2', shift: false }, '۳': { code: 'Digit3', shift: false }, '۴': { code: 'Digit4', shift: false }, '۵': { code: 'Digit5', shift: false },
        '۶': { code: 'Digit6', shift: false }, '۷': { code: 'Digit7', shift: false }, '۸': { code: 'Digit8', shift: false }, '۹': { code: 'Digit9', shift: false }, '۰': { code: 'Digit0', shift: false },

        // 2. Global Punctuation & Typography
        '—': { code: 'Minus', shift: true }, '–': { code: 'Minus', shift: false }, '’': { code: 'Quote', shift: false }, '‘': { code: 'Quote', shift: false },
        '”': { code: 'Quote', shift: true }, '“': { code: 'Quote', shift: true }, '।': { code: 'Period', shift: false }, '॥': { code: 'Period', shift: true },
        '‌': { code: 'Space', shift: false }, '‍': { code: 'Space', shift: false },

        // 3. International European Characters
        'é': { code: 'KeyE', shift: false }, 'è': { code: 'KeyE', shift: true }, 'ê': { code: 'KeyE', shift: true },
        'á': { code: 'KeyA', shift: false }, 'à': { code: 'KeyA', shift: true }, 'ã': { code: 'KeyA', shift: true }, 'ä': { code: 'KeyA', shift: true },
        'í': { code: 'KeyI', shift: false }, 'î': { code: 'KeyI', shift: true },
        'ó': { code: 'KeyO', shift: false }, 'ô': { code: 'KeyO', shift: true }, 'ö': { code: 'KeyO', shift: true },
        'ú': { code: 'KeyU', shift: false }, 'ü': { code: 'KeyU', shift: true }, 'Ü': { code: 'KeyU', shift: true },
        'ç': { code: 'KeyC', shift: false }, 'ñ': { code: 'KeyN', shift: true }, 'ß': { code: 'KeyS', shift: true },

        // 4. Specific Indic Symbols & Matras across scripts
        'ऑ': { code: 'Backslash', shift: true }, 'ॉ': { code: 'Backslash', shift: false },
        'ं': { code: 'KeyA', shift: false }, 'ँ': { code: 'KeyA', shift: true }, 'ः': { code: 'Minus', shift: true },
        'ृ': { code: 'Equal', shift: false }, 'ऋ': { code: 'Equal', shift: true },
        'ব': { code: 'KeyC', shift: false },
        'ৰ': { code: 'KeyJ', shift: false }, 'ৱ': { code: 'KeyB', shift: false },
        'ধ': { code: 'Slash', shift: false }, 'ৃ': { code: 'Equal', shift: false }, 'ঁ': { code: 'KeyX', shift: true },
        'ய': { code: 'Slash', shift: false }, 'ம': { code: 'KeyC', shift: false }, 'ந': { code: 'KeyV', shift: false }, 'ஜ': { code: 'KeyP', shift: false },
        'ெ': { code: 'KeyZ', shift: false }, 'ொ': { code: 'KeyX', shift: false }, 'ஞ': { code: 'KeyL', shift: true },
        'ం': { code: 'KeyM', shift: true }, 'ಂ': { code: 'KeyM', shift: true }, 'ം': { code: 'KeyM', shift: true }, 'ଂ': { code: 'KeyZ', shift: false },
        'ృ': { code: 'Equal', shift: false }, 'ೃ': { code: 'Equal', shift: false }, 'ൃ': { code: 'Equal', shift: false }, 'ୃ': { code: 'Equal', shift: false },
        'ૃ': { code: 'Equal', shift: false }, 'ૉ': { code: 'Backslash', shift: true },
        'ః': { code: 'Minus', shift: true }, 'ಃ': { code: 'Minus', shift: true }, 'ਃ': { code: 'Minus', shift: true }, 'ઃ': { code: 'Minus', shift: true }, 'ഃ': { code: 'Minus', shift: true },
        'റ': { code: 'KeyJ', shift: true }, 'ൽ': { code: 'KeyN', shift: false }, 'ർ': { code: 'KeyJ', shift: false },
        'ൾ': { code: 'KeyN', shift: true }, 'ൻ': { code: 'KeyV', shift: false }, 'ൗ': { code: 'KeyQ', shift: false },

        // Urdu (Arabic script comprehensive QWERTY key map)
        'ک': { code: 'KeyK', shift: false }, 'پ': { code: 'KeyP', shift: false }, 'ی': { code: 'KeyI', shift: false }, 'ٹ': { code: 'KeyT', shift: true },
        'ے': { code: 'KeyY', shift: false }, 'ں': { code: 'KeyN', shift: true }, 'ہ': { code: 'KeyO', shift: false }, '۔': { code: 'Period', shift: false },
        'گ': { code: 'KeyG', shift: false }, 'ڑ': { code: 'KeyR', shift: true }, 'ھ': { code: 'KeyH', shift: true }, 'ڈ': { code: 'KeyD', shift: true },
        'چ': { code: 'KeyC', shift: false }, 'ذ': { code: 'KeyZ', shift: true }, 'ژ': { code: 'KeyX', shift: true },
        'ا': { code: 'KeyA', shift: false }, 'آ': { code: 'KeyA', shift: true }, 'ب': { code: 'KeyB', shift: false }, 'ت': { code: 'KeyT', shift: false },
        'ث': { code: 'KeyC', shift: true }, 'ج': { code: 'KeyJ', shift: false }, 'ح': { code: 'KeyH', shift: false }, 'خ': { code: 'KeyK', shift: true },
        'د': { code: 'KeyD', shift: false }, 'ر': { code: 'KeyR', shift: false }, 'ز': { code: 'KeyZ', shift: false }, 'س': { code: 'KeyS', shift: false },
        'ش': { code: 'KeyX', shift: false }, 'ص': { code: 'KeyS', shift: true }, 'ض': { code: 'KeyJ', shift: true }, 'ط': { code: 'KeyV', shift: false },
        'ظ': { code: 'KeyV', shift: true }, 'ع': { code: 'KeyE', shift: false }, 'غ': { code: 'KeyG', shift: true }, 'ف': { code: 'KeyF', shift: false },
        'ق': { code: 'KeyQ', shift: false }, 'ل': { code: 'KeyL', shift: false }, 'م': { code: 'KeyM', shift: false }, 'ن': { code: 'KeyN', shift: false },
        'و': { code: 'KeyW', shift: false }, 'ؤ': { code: 'KeyW', shift: true }, 'ۂ': { code: 'KeyO', shift: true }, 'ۃ': { code: 'KeyO', shift: true },
        'ء': { code: 'KeyU', shift: false }, 'ئ': { code: 'KeyU', shift: true }, '،': { code: 'Comma', shift: false }, '؛': { code: 'Semicolon', shift: false }, '؟': { code: 'Slash', shift: true }
    };

    function findTargetKeyForChar(targetChar, lang, layout) {
        if (!targetChar) return null;

        // 1. Standard ASCII Direct mapping
        const asciiCharToKeycode = {
            ' ': { code: 'Space', shift: false },
            '`': { code: 'Backquote', shift: false }, '~': { code: 'Backquote', shift: true },
            '1': { code: 'Digit1', shift: false }, '!': { code: 'Digit1', shift: true },
            '2': { code: 'Digit2', shift: false }, '@': { code: 'Digit2', shift: true },
            '3': { code: 'Digit3', shift: false }, '#': { code: 'Digit3', shift: true },
            '4': { code: 'Digit4', shift: false }, '$': { code: 'Digit4', shift: true },
            '5': { code: 'Digit5', shift: false }, '%': { code: 'Digit5', shift: true },
            '6': { code: 'Digit6', shift: false }, '^': { code: 'Digit6', shift: true },
            '7': { code: 'Digit7', shift: false }, '&': { code: 'Digit7', shift: true },
            '8': { code: 'Digit8', shift: false }, '*': { code: 'Digit8', shift: true },
            '9': { code: 'Digit9', shift: false }, '(': { code: 'Digit9', shift: true },
            '0': { code: 'Digit0', shift: false }, ')': { code: 'Digit0', shift: true },
            '-': { code: 'Minus', shift: false },  '_': { code: 'Minus', shift: true },
            '=': { code: 'Equal', shift: false },  '+': { code: 'Equal', shift: true },
            '[': { code: 'BracketLeft', shift: false }, '{': { code: 'BracketLeft', shift: true },
            ']': { code: 'BracketRight', shift: false }, '}': { code: 'BracketRight', shift: true },
            '\\': { code: 'Backslash', shift: false }, '|': { code: 'Backslash', shift: true },
            ';': { code: 'Semicolon', shift: false }, ':': { code: 'Semicolon', shift: true },
            "'": { code: 'Quote', shift: false }, '"': { code: 'Quote', shift: true },
            ',': { code: 'Comma', shift: false }, '<': { code: 'Comma', shift: true },
            '.': { code: 'Period', shift: false }, '>': { code: 'Period', shift: true },
            '/': { code: 'Slash', shift: false }, '?': { code: 'Slash', shift: true }
        };

        if (asciiCharToKeycode[targetChar]) {
            return asciiCharToKeycode[targetChar];
        }

        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const lower = targetChar.toLowerCase();
        if (alphabet.includes(lower)) {
            const isUpper = (targetChar !== lower);
            return { code: 'Key' + lower.toUpperCase(), shift: isUpper };
        }

        if (UNIVERSAL_KEYCODES_MAP[targetChar]) {
            return UNIVERSAL_KEYCODES_MAP[targetChar];
        }

        // 2. Comprehensive Hindi Remington Gail & Kruti Dev 010 direct mapping table
        const HINDI_REMINGTON_KRUTI = {
            'क': { code: 'KeyD', shift: false }, 'ख': { code: 'BracketLeft', shift: false }, 'ग': { code: 'KeyX', shift: false }, 'घ': { code: 'BracketRight', shift: false }, 'ङ': { code: 'KeyU', shift: true },
            'च': { code: 'KeyP', shift: false }, 'छ': { code: 'KeyN', shift: true }, 'ज': { code: 'KeyT', shift: false }, 'झ': { code: 'Period', shift: true }, 'ञ': { code: 'BracketRight', shift: true },
            'ट': { code: 'KeyV', shift: true }, 'ठ': { code: 'KeyB', shift: true }, 'ड': { code: 'KeyM', shift: true }, 'ढ': { code: 'Comma', shift: true }, 'ण': { code: 'KeyC', shift: true },
            'त': { code: 'KeyR', shift: false }, 'थ': { code: 'KeyF', shift: true }, 'द': { code: 'KeyN', shift: false }, 'ध': { code: 'Slash', shift: false }, 'न': { code: 'KeyU', shift: false },
            'प': { code: 'KeyI', shift: false }, 'फ': { code: 'KeyQ', shift: true }, 'ब': { code: 'KeyC', shift: false }, 'भ': { code: 'KeyG', shift: true }, 'म': { code: 'KeyE', shift: false },
            'य': { code: 'Semicolon', shift: false }, 'र': { code: 'KeyJ', shift: false }, 'ल': { code: 'KeyY', shift: false }, 'व': { code: 'KeyO', shift: false },
            'श': { code: 'Quote', shift: false }, 'ष': { code: 'Quote', shift: true }, 'स': { code: 'KeyL', shift: false }, 'ह': { code: 'KeyG', shift: false },
            'ा': { code: 'KeyK', shift: false }, 'ि': { code: 'KeyF', shift: false }, 'ी': { code: 'KeyH', shift: false }, 'ु': { code: 'KeyQ', shift: false }, 'ू': { code: 'KeyW', shift: false },
            'ृ': { code: 'Backquote', shift: false }, 'े': { code: 'KeyS', shift: false }, 'ै': { code: 'KeyS', shift: true }, 'ो': { code: 'KeyK', shift: false }, 'ौ': { code: 'KeyK', shift: false },
            'ं': { code: 'KeyA', shift: false }, 'ँ': { code: 'KeyA', shift: true }, 'ः': { code: 'Minus', shift: true }, '्': { code: 'KeyD', shift: false },
            '़': { code: 'BracketRight', shift: false }, '।': { code: 'Period', shift: false },
            'अ': { code: 'KeyV', shift: false }, 'आ': { code: 'KeyV', shift: false }, 'इ': { code: 'KeyB', shift: false }, 'ई': { code: 'KeyB', shift: false },
            'उ': { code: 'KeyM', shift: false }, 'ऊ': { code: 'KeyM', shift: true }, 'ऋ': { code: 'Backquote', shift: true },
            'ए': { code: 'Comma', shift: false }, 'ऐ': { code: 'Comma', shift: false }, 'ओ': { code: 'KeyV', shift: false }, 'औ': { code: 'KeyV', shift: false },
            'ज्ञ': { code: 'KeyK', shift: true }, 'श्र': { code: 'KeyJ', shift: true }, 'त्र': { code: 'Digit1', shift: true }, 'क्ष': { code: 'KeyD', shift: false }
        };

        // Comprehensive Tamil 99 direct mapping table
        const TAMIL_99_DIRECT_MAP = {
            'க': { code: 'KeyH', shift: false }, 'ங': { code: 'KeyH', shift: true },
            'ச': { code: 'BracketLeft', shift: false }, 'ஞ': { code: 'BracketRight', shift: false },
            'ட': { code: 'KeyO', shift: false }, 'ண': { code: 'KeyP', shift: false },
            'த': { code: 'KeyL', shift: false }, 'ந': { code: 'Semicolon', shift: false },
            'ப': { code: 'KeyJ', shift: false }, 'ம': { code: 'KeyK', shift: false },
            'ய': { code: 'Quote', shift: false }, 'ர': { code: 'KeyN', shift: false },
            'ல': { code: 'KeyB', shift: false }, 'வ': { code: 'KeyC', shift: false },
            'ழ': { code: 'KeyM', shift: false }, 'ள': { code: 'KeyY', shift: false },
            'ற': { code: 'KeyU', shift: false }, 'ன': { code: 'KeyI', shift: false },
            'ஜ': { code: 'Quote', shift: true }, 'ஷ': { code: 'BracketRight', shift: true },
            'ஸ': { code: 'BracketLeft', shift: true }, 'ஹ': { code: 'KeyC', shift: true },
            'க்ஷ': { code: 'KeyV', shift: true }, 'ஶ': { code: 'KeyB', shift: true },
            'அ': { code: 'KeyA', shift: false }, 'ஆ': { code: 'KeyQ', shift: false },
            'இ': { code: 'KeyS', shift: false }, 'ஈ': { code: 'KeyW', shift: false },
            'உ': { code: 'KeyD', shift: false }, 'ஊ': { code: 'KeyE', shift: false },
            'எ': { code: 'KeyG', shift: false }, 'ஏ': { code: 'KeyR', shift: false },
            'ஐ': { code: 'KeyT', shift: false }, 'ஒ': { code: 'KeyZ', shift: false },
            'ஓ': { code: 'KeyZ', shift: true }, 'ஔ': { code: 'KeyX', shift: false },
            'ஃ': { code: 'Backquote', shift: false },
            'ா': { code: 'KeyQ', shift: false }, 'ி': { code: 'KeyS', shift: false },
            'ீ': { code: 'KeyW', shift: false }, 'ு': { code: 'KeyD', shift: false },
            'ூ': { code: 'KeyE', shift: false }, 'ெ': { code: 'KeyG', shift: false },
            'ே': { code: 'KeyR', shift: false }, 'ை': { code: 'KeyT', shift: false },
            'ொ': { code: 'KeyZ', shift: false }, 'ோ': { code: 'KeyZ', shift: true },
            'ௌ': { code: 'KeyX', shift: false }, '்': { code: 'KeyF', shift: false },
            '।': { code: 'Period', shift: false }
        };

        if (lang === 'hindi' || lang === 'marathi') {
            if ((layout === 'remington-gail' || layout === 'kruti-dev') && HINDI_REMINGTON_KRUTI[targetChar]) {
                return HINDI_REMINGTON_KRUTI[targetChar];
            }
        }

        if (lang === 'tamil') {
            if ((layout === 'tamil-99' || layout === 'tamil99') && TAMIL_99_DIRECT_MAP[targetChar]) {
                return TAMIL_99_DIRECT_MAP[targetChar];
            }
        }

        // 3. Dynamic search in LANGUAGE_KEYBOARDS for active layout
        if (typeof getLanguageKeymap === 'function') {
            const normalMap = getLanguageKeymap(lang, layout, false);
            const shiftMap = getLanguageKeymap(lang, layout, true);

            if (normalMap) {
                for (const [kCode, char] of Object.entries(normalMap)) {
                    if (char === targetChar) {
                        return { code: kCode, shift: false };
                    }
                }
            }
            if (shiftMap) {
                for (const [kCode, char] of Object.entries(shiftMap)) {
                    if (char === targetChar) {
                        return { code: kCode, shift: true };
                    }
                }
            }
        }

        // 4. Secondary fallback: Check Inscript layout of same language if currently in Phonetic
        if (layout === 'phonetic' && typeof getLanguageKeymap === 'function') {
            const inscriptNormal = getLanguageKeymap(lang, 'inscript', false);
            const inscriptShift = getLanguageKeymap(lang, 'inscript', true);
            if (inscriptNormal) {
                for (const [kCode, char] of Object.entries(inscriptNormal)) {
                    if (char === targetChar) return { code: kCode, shift: false };
                }
            }
            if (inscriptShift) {
                for (const [kCode, char] of Object.entries(inscriptShift)) {
                    if (char === targetChar) return { code: kCode, shift: true };
                }
            }
        }

        return null;
    }

    // 1. Define next key guidance helper
    updateKeyboardGuideNextKey = function() {
        // Early exit: if guide is hidden or off, do absolutely nothing!
        if (!liveKeyboardGuide || liveKeyboardGuide.classList.contains('hidden')) {
            return;
        }

        // Fast class removal using tracked highlighted elements (both letter key and Shift key)
        if (highlightedKeyElements.length > 0) {
            highlightedKeyElements.forEach(el => {
                if (el) el.classList.remove('next-key');
            });
            highlightedKeyElements = [];
        }

        if (charIndex >= activeSpansList.length) return;

        const nextSpan = activeSpansList[charIndex];
        if (!nextSpan) return;

        const nextChar = nextSpan.textContent;
        const activeLang = localStorage.getItem('typingDostLang') || 'english';
        const activeLayout = localStorage.getItem('typingDostLayout_' + activeLang) || 'phonetic';

        const match = findTargetKeyForChar(nextChar, activeLang, activeLayout);
        if (match && match.code) {
            const targetKey = getKeyElement(match.code);
            if (targetKey) {
                targetKey.classList.add('next-key');
                highlightedKeyElements.push(targetKey);
            }
            if (match.shift) {
                const shiftKey = getKeyElement('ShiftLeft') || getKeyElement('ShiftRight');
                if (shiftKey) {
                    shiftKey.classList.add('next-key');
                    highlightedKeyElements.push(shiftKey);
                }
            }
        }
    };

    // 2. Define state applier next
    function applyKeyboardGuideState(state) {
        const toggleText = document.getElementById('keyboard-toggle-text');
        if (state === 'off') {
            if (liveKeyboardGuide) liveKeyboardGuide.classList.add('hidden');
            
            // Clean up any lingering highlighted keys
            if (highlightedKeyElement) {
                highlightedKeyElement.classList.remove('next-key');
                highlightedKeyElement = null;
            }

            if (toggleKeyboardBtn) {
                if (toggleText) {
                    toggleText.textContent = 'Keyboard: Off';
                } else {
                    toggleKeyboardBtn.innerHTML = '⌨️ Keyboard: Off';
                }
                toggleKeyboardBtn.classList.add('muted');
            }
        } else {
            if (liveKeyboardGuide) liveKeyboardGuide.classList.remove('hidden');
            if (toggleKeyboardBtn) {
                if (toggleText) {
                    toggleText.textContent = 'Keyboard: On';
                } else {
                    toggleKeyboardBtn.innerHTML = '⌨️ Keyboard: On';
                }
                toggleKeyboardBtn.classList.remove('muted');
            }
            if (typeof updateKeyboardGuideNextKey === 'function') {
                updateKeyboardGuideNextKey();
            }
        }
        localStorage.setItem('typingDostKeyboardGuide', state);
    }

    // 3. Initialize/Bootstrap state safely
    applyKeyboardGuideState(keyboardGuideState);

    // 4. Bind event listeners
    if (toggleKeyboardBtn) {
        toggleKeyboardBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            initAudio();
            keyboardGuideState = keyboardGuideState === 'on' ? 'off' : 'on';
            applyKeyboardGuideState(keyboardGuideState);
            playClick();
            showToast(`⌨️ Keyboard Guide turned ${keyboardGuideState.toUpperCase()}!`);
            if (typingInput) typingInput.focus();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (!liveKeyboardGuide || liveKeyboardGuide.classList.contains('hidden')) return;
        const keyEl = document.querySelector(`.live-keyboard-guide [data-keycode="${e.code}"]`);
        if (keyEl) {
            keyEl.classList.add('active');
        }
    });

    window.addEventListener('keyup', (e) => {
        if (!liveKeyboardGuide || liveKeyboardGuide.classList.contains('hidden')) return;
        const keyEl = document.querySelector(`.live-keyboard-guide [data-keycode="${e.code}"]`);
        if (keyEl) {
            keyEl.classList.remove('active');
        }
    });

})();

// --- INITIALIZE FROM URL PARAMETERS ON STARTUP (UX LINKING UPGRADE) ---
(function handleUrlParamsOnStartup() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    const gamemodeParam = urlParams.get('gamemode');
    
    if (lessonParam) {
        const lesson = lessonParam.toLowerCase();
        if (lesson === 'game' && gamemodeParam) {
            const gamemode = gamemodeParam.toLowerCase();
            
            // Switch current lesson setting
            currentLesson = 'game';
            
            // Update class lists to show game interface
            document.body.classList.add('game-mode-active');
            const standardContainer = document.getElementById('standard-mode-container');
            const gameContainer = document.getElementById('game-mode-container');
            const bsContainer = document.getElementById('bubble-shooter-container');
            const gamePlayScreen = document.getElementById('game-play-screen');
            
            if (standardContainer) standardContainer.classList.add('hidden');
            if (gameContainer) gameContainer.classList.remove('hidden');
            if (bsContainer) bsContainer.classList.add('hidden');
            if (gamePlayScreen) gamePlayScreen.classList.remove('hidden');
            
            // Initialize game details & trigger start overlay for specific gamemode
            if (typeof showGameStartScreen === 'function') {
                showGameStartScreen(gamemode);
            }
        } else if (lesson === 'bubble-shooter' || lesson === 'bubble') {
            // Transition directly into Bubble Shooter game
            currentLesson = 'bubble-shooter';
            document.body.classList.add('game-mode-active');
            const standardContainer = document.getElementById('standard-mode-container');
            const gameContainer = document.getElementById('game-mode-container');
            const bsContainer = document.getElementById('bubble-shooter-container');
            
            if (standardContainer) standardContainer.classList.add('hidden');
            if (gameContainer) gameContainer.classList.add('hidden');
            if (bsContainer) {
                bsContainer.classList.remove('hidden');
                if (typeof launchBubbleShooter === 'function') {
                    launchBubbleShooter();
                }
            }
        } else {
            // Load specific standard lesson category (e.g. homerow, quotes)
            const item = document.querySelector(`.practice-item[data-lesson="${lesson}"]`);
            if (item) {
                currentLesson = lesson;
                const testTrigger = document.getElementById('test-trigger');
                const practiceTrigger = document.getElementById('practice-trigger');
                const govtTrigger = document.getElementById('govt-trigger');
                
                document.querySelectorAll('.practice-item').forEach(btn => btn.classList.remove('selected'));
                item.classList.add('selected');
                
                if (['govtexam', 'ssc', 'rrb', 'highcourt', 'ldc', 'statepsc', 'police', 'paramilitary', 'banking', 'postal', 'defense', 'kvs', 'epfo', 'fci', 'districtcourt'].includes(lesson)) {
                    if (govtTrigger) govtTrigger.classList.add('active-sub');
                    if (testTrigger) testTrigger.classList.remove('active-sub');
                    if (practiceTrigger) practiceTrigger.classList.remove('active-sub');
                } else if (['sentences', 'easy', 'commonwords', 'story', 'coder', 'dataentry', 'quotes'].includes(lesson)) {
                    if (testTrigger) testTrigger.classList.add('active-sub');
                    if (practiceTrigger) practiceTrigger.classList.remove('active-sub');
                    if (govtTrigger) govtTrigger.classList.remove('active-sub');
                } else if (['homerow', 'toprow', 'bottomrow', 'numbers', 'homerow_toprow', 'homerow_bottomrow', 'toprow_bottomrow', 'allrows'].includes(lesson)) {
                    if (practiceTrigger) {
                        practiceTrigger.classList.add('active-sub');
                    }
                    if (testTrigger) testTrigger.classList.remove('active-sub');
                    if (govtTrigger) govtTrigger.classList.remove('active-sub');
                }
                
                if (['homerow', 'toprow', 'bottomrow', 'numbers', 'homerow_toprow', 'homerow_bottomrow', 'toprow_bottomrow', 'allrows'].includes(lesson)) {
                    if (typeof showKeyboardGuide === 'function') {
                        showKeyboardGuide(lesson);
                    }
                } else {
                    if (typeof resetGame === 'function') {
                        resetGame();
                    }
                }
            }
        }
    }
})();

/* ==========================================================
   GAMIFICATION, MASCOT SYNC & JUICY FEEDBACK HELPER ENGINES
   ========================================================== */

function getRankNameAndIcon(level) {
    if (level >= 31) return { name: "Keyboard God", icon: "👑" };
    if (level >= 21) return { name: "Keyboard Ninja", icon: "🥷" };
    if (level >= 15) return { name: "Hacker", icon: "🕶️" };
    if (level >= 9) return { name: "Code Warrior", icon: "💻" };
    if (level >= 5) return { name: "Cyber Racer", icon: "🏎️" };
    if (level >= 2) return { name: "Netrunner", icon: "🌐" };
    return { name: "Cadet", icon: "👶" };
}

function getGoalGrade(testsCompleted) {
    if (testsCompleted < 5) {
        return { name: "BRONZE", target: 5, icon: "🥉", color: "#cd7f32" };
    } else if (testsCompleted < 10) {
        return { name: "SILVER", target: 10, icon: "🥈", color: "#c0c0c0" };
    } else if (testsCompleted < 15) {
        return { name: "GOLD", target: 15, icon: "🥇", color: "#ffd700" };
    } else if (testsCompleted < 20) {
        return { name: "PLATINUM", target: 20, icon: "💎", color: "#e5e4e2" };
    } else if (testsCompleted < 25) {
        return { name: "DIAMOND", target: 25, icon: "👑", color: "#b9f2ff" };
    } else if (testsCompleted < 30) {
        return { name: "ELITE", target: 30, icon: "🔥", color: "#ff4757" };
    } else if (testsCompleted < 50) {
        return { name: "CHAMPION", target: 50, icon: "🏆", color: "#ffa500" };
    } else {
        return { name: "GRANDMASTER", target: 100, icon: "🌌", color: "#00ffff" };
    }
}

function updateGamificationHeader() {
    const testsCountEl = document.getElementById('header-tests-count');
    const progressBar = document.getElementById('header-progress-bar');
    const progressRatio = document.getElementById('header-progress-ratio');
    const rankVal = document.getElementById('header-rank-val');
    const rankIcon = document.getElementById('header-rank-icon');
    const goalGradeEl = document.getElementById('header-goal-grade');

    // Update dynamic Rank based on Level
    const rank = getRankNameAndIcon(userLevel);
    if (rankVal) rankVal.innerText = rank.name;
    if (rankIcon) rankIcon.innerText = rank.icon;

    // Get dynamic Goal Grade based on tests completed today
    const grade = getGoalGrade(testsCompletedToday);
    const targetTests = grade.target;

    if (goalGradeEl) {
        goalGradeEl.innerText = `${grade.name} GOAL ${grade.icon}`;
        goalGradeEl.style.color = grade.color;
    }

    if (testsCountEl) testsCountEl.innerText = `${testsCompletedToday}/${targetTests}`;
    if (progressRatio) {
        const pct = Math.min(100, Math.round((testsCompletedToday / targetTests) * 100));
        progressRatio.innerText = `${pct}% Completed`;
    }
    if (progressBar) {
        const pct = Math.min(100, (testsCompletedToday / targetTests) * 100);
        progressBar.style.width = `${pct}%`;
        progressBar.style.background = `linear-gradient(90deg, var(--primary), ${grade.color})`;
    }
}

function showLevelUpModal(newLevel) {
    const rank = getRankNameAndIcon(newLevel);
    showToast(`⚡ LEVEL UP! Level ${newLevel} - ${rank.name} unlocked! 🎉`, 5000);
    playWarning(); // Play special transition warning sound as level up sound
}

function updateLiveMascot(state, info = {}) {
    const mascotImg = document.getElementById('live-mascot-avatar');
    const mascotSpeech = document.getElementById('live-mascot-speech');
    if (!mascotImg || !mascotSpeech) return;

    let src = 'typingdost_welcome.webp';
    let text = 'Start typing, friend! Let\'s unlock new levels! 🚀';

    // Get strictly localized dialogues
    const activeLang = (typeof currentLearningLang !== 'undefined' && currentLearningLang) 
        ? currentLearningLang.toLowerCase() 
        : (localStorage.getItem('typingDostLang') || 'english');

    if (activeLang === 'hinglish') {
        if (state === 'idle') {
            src = 'typingdost_sleeping.webp';
            text = "Bhai, typing chhod kar kidhar gae?";
        } else if (state === 'welcome') {
            src = 'typingdost_welcome.webp';
            text = "Chalo dost, typing start karo aur levels unlock karo! 🚀";
        } else if (state === 'rage') {
            src = 'typingdost_rage.webp';
            text = "Arey bhai, aaram se! Galatiyan ho rahi hain. Accuracy is key! 🎯";
        } else {
            const wpm = info.wpm || 0;
            if (wpm >= 90) {
                src = 'typingdost_hacker.webp';
                text = "HOLY SHIT! Tu toh keyboard ka raja hai! 👑⚡";
            } else if (wpm >= 65) {
                src = 'typingdost_gamer.webp';
                text = "Bhai speed toh dekho! Keyboards par aag laga di! 🔥🚀";
            } else if (wpm >= 40) {
                src = 'typingdost_determined.webp';
                text = "Bhai, kya baat hai! Achha flow ban raha hai. 👍";
            } else {
                src = 'typingdost_welcome.webp';
                text = "Aram se type karo dost, rhythm pakdo! 🎵";
            }
        }
    } else if (activeLang === 'hindi') {
        if (state === 'idle') {
            src = 'typingdost_sleeping.webp';
            text = "भाई, टाइपिंग छोड़कर किधर गए?";
        } else if (state === 'welcome') {
            src = 'typingdost_welcome.webp';
            text = "चलो दोस्त, टाइपिंग शुरू करो और नए लेवल्स अनलॉक करो! 🚀";
        } else if (state === 'rage') {
            src = 'typingdost_rage.webp';
            text = "अरे भाई, आराम से! गलतियां हो रही हैं। शुद्धता जरूरी है! 🎯";
        } else {
            const wpm = info.wpm || 0;
            if (wpm >= 90) {
                src = 'typingdost_hacker.webp';
                text = "गजब! तुम तो कीबोर्ड के राजा हो! 👑⚡";
            } else if (wpm >= 65) {
                src = 'typingdost_gamer.webp';
                text = "भाई स्पीड तो देखो! कीबोर्ड पर आग लगा दी! 🔥🚀";
            } else if (wpm >= 40) {
                src = 'typingdost_determined.webp';
                text = "भाई, क्या बात है! अच्छा फ्लो बन रहा है। 👍";
            } else {
                src = 'typingdost_welcome.webp';
                text = "आराम से टाइप करो दोस्त, रिदम पकड़ो! 🎵";
            }
        }
    } else {
        // Pure English (english mode and fallback for other languages like Spanish, French, etc.)
        if (state === 'idle') {
            src = 'typingdost_sleeping.webp';
            text = "Where did you go, buddy?";
        } else if (state === 'welcome') {
            src = 'typingdost_welcome.webp';
            text = "Start typing, friend! Let's unlock new levels! 🚀";
        } else if (state === 'rage') {
            src = 'typingdost_rage.webp';
            text = "Take it easy, friend! Watch your accuracy! 🎯";
        } else {
            const wpm = info.wpm || 0;
            if (wpm >= 90) {
                src = 'typingdost_hacker.webp';
                text = "HOLY SHIT! You are the keyboard king! 👑⚡";
            } else if (wpm >= 65) {
                src = 'typingdost_gamer.webp';
                text = "Speed demon! You are lighting up the keys! 🔥🚀";
            } else if (wpm >= 40) {
                src = 'typingdost_determined.webp';
                text = "Great flow! Keep typing like this! 👍";
            } else {
                src = 'typingdost_welcome.webp';
                text = "Type slowly, find your rhythm! 🎵";
            }
        }
    }

    // Only update image src if changed to prevent flashing
    if (mascotImg.src.indexOf(src) === -1) {
        mascotImg.src = src;
        mascotImg.classList.add('bounce');
        setTimeout(() => mascotImg.classList.remove('bounce'), 400);
    }
    if (mascotSpeech.innerText !== text) {
        mascotSpeech.innerText = text;
    }
}

function updateLiveMascotByWpm(wpm, accuracy) {
    let state = 'normal';
    if (mistakes > 8) {
        state = 'rage';
    }
    updateLiveMascot(state, { wpm, accuracy });
}

function triggerScreenShake() {
    if (!typingSectionWrapper) {
        typingSectionWrapper = document.getElementById('typing-section-wrapper');
    }
    const textDisplayWrapper = typingSectionWrapper;
    if (textDisplayWrapper) {
        textDisplayWrapper.classList.add('screen-shake');
        setTimeout(() => textDisplayWrapper.classList.remove('screen-shake'), 180);
    }
}

let cachedSparkColor = null;
let activeSparksCount = 0;
const MAX_CONCURRENT_SPARKS = 12;

function getCachedSparkColor() {
    if (!cachedSparkColor) {
        try {
            cachedSparkColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#00ffff';
        } catch(e) {
            cachedSparkColor = '#00ffff';
        }
    }
    return cachedSparkColor;
}

function createSparks(spanOrIdx) {
    if (activeSparksCount >= MAX_CONCURRENT_SPARKS) return;

    let x, y;
    if (typeof spanOrIdx === 'number') {
        const cached = getSpanCoords(spanOrIdx);
        if (!cached) return;
        x = cached.left + cached.width / 2;
        y = cached.top + cached.height / 2;
    } else {
        const span = spanOrIdx;
        if (!span) return;
        const rect = span.getBoundingClientRect();
        const displayRect = textDisplay.getBoundingClientRect();
        x = rect.left - displayRect.left + rect.width / 2;
        y = rect.top - displayRect.top + rect.height / 2 + textDisplay.scrollTop;
    }
    
    const primaryColor = getCachedSparkColor();
    const boxShadowVal = `0 0 6px ${primaryColor}`;

    // Create 2-3 lightweight sparks
    const count = 2 + Math.floor(Math.random() * 2);
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        if (activeSparksCount >= MAX_CONCURRENT_SPARKS) break;
        activeSparksCount++;

        const spark = document.createElement('div');
        spark.className = 'cyber-spark';
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 12 + Math.random() * 24;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        
        spark.style.setProperty('--dx', `${dx}px`);
        spark.style.setProperty('--dy', `${dy}px`);
        spark.style.backgroundColor = primaryColor;
        spark.style.boxShadow = boxShadowVal;
        
        fragment.appendChild(spark);
        setTimeout(() => {
            spark.remove();
            activeSparksCount = Math.max(0, activeSparksCount - 1);
        }, 450);
    }
    textDisplay.appendChild(fragment);
}

// Invalidate coordinate cache and reposition caret when web fonts load asynchronously
if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
        activeSpansCoords = [];
        if (typeof updateCaretPosition === 'function') {
            updateCaretPosition();
        }
    });
}

// --- Policy & Contact Modals Logic ---
const openPolicyBtn = document.getElementById('open-policy-btn');
const closePolicyBtn = document.getElementById('close-policy-btn');
const policyModal = document.getElementById('policy-modal');

if (openPolicyBtn && closePolicyBtn && policyModal) {
    openPolicyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        policyModal.classList.remove('hidden');
    });
    closePolicyBtn.addEventListener('click', () => {
        policyModal.classList.add('hidden');
    });
}

const openContactBtn = document.getElementById('open-contact-btn');
const closeContactBtn = document.getElementById('close-contact-btn');
const contactModal = document.getElementById('contact-modal');

if (openContactBtn && closeContactBtn && contactModal) {
    openContactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.classList.remove('hidden');
    });
    closeContactBtn.addEventListener('click', () => {
        contactModal.classList.add('hidden');
    });
}

