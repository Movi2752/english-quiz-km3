// Source: "Вопросы_ИТ_КМ 3.pdf" — Essential English for IT students. Part 2.
// 45 exam questions. Answers = concise oral-answer essence (English, HTML).
// UI is Russian. Verified against course + video tasks.

const QUESTIONS = [
  {
    id: 1,
    unit: "Unit 1 — The Internet",
    q: "What types of wired internet connections do you know? Talk about each of them in detail.",
    answer: `<p>Three wired types:</p>
<ul>
<li><b>DSL</b> — copper phone line, voice + data together.</li>
<li><b>Cable</b> — coaxial TV cable, bandwidth <em>shared with neighbors</em>.</li>
<li><b>Fiber-optic</b> — data as light, fastest.</li>
</ul>`
  },
  {
    id: 2,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between DSL and dial-up connection?",
    answer: `<ul>
<li><b>Dial-up</b> — one frequency for voice + data → can't call and browse together. Slow.</li>
<li><b>DSL</b> — separate frequencies → both at once. Faster, always-on.</li>
</ul>`
  },
  {
    id: 3,
    unit: "Unit 1 — The Internet",
    q: "Talk about the three wireless internet access technologies.",
    answer: `<ul>
<li><b>Wi-Fi</b> — radio waves, local, via a router.</li>
<li><b>Satellite</b> — dish + satellite; some delay; for remote areas.</li>
<li><b>Cellular</b> — land split into cells with towers; voice + data.</li>
</ul>`
  },
  {
    id: 4,
    unit: "Unit 1 — The Internet",
    q: "What are the three types of DSL connections? Talk about each of them.",
    answer: `<ul>
<li><b>ADSL</b> — download &gt; upload. Home.</li>
<li><b>SDSL</b> — equal up/down. Business.</li>
<li><b>VDSL</b> — fastest, but short distance only.</li>
</ul>`
  },
  {
    id: 5,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between packet switching and circuit switching?",
    answer: `<ul>
<li><b>Circuit switching</b> — dedicated path reserved first (phone call); wastes idle bandwidth.</li>
<li><b>Packet switching</b> — data split into packets, separate routes, reassembled. Efficient — the Internet uses it.</li>
</ul>`
  },
  {
    id: 6,
    unit: "Unit 1 — The Internet",
    q: "What are the two subtypes of packet switching? Talk about each of them.",
    answer: `<ul>
<li><b>Datagram</b> — no channel; packets routed individually, reordered at the end.</li>
<li><b>Virtual circuit</b> — path set up first, packets follow it in order.</li>
</ul>`
  },
  {
    id: 7,
    unit: "Unit 1 — The Internet",
    q: "Talk about the TCP/IP model — the layers and protocols.",
    answer: `<p>4 layers:</p>
<ul>
<li><b>Application</b> — HTTP, FTP, SMTP.</li>
<li><b>Transport</b> — TCP, UDP.</li>
<li><b>Internet</b> — IP (addressing + routing).</li>
<li><b>Network Interface</b> — physical, e.g. Ethernet.</li>
</ul>`
  },
  {
    id: 8,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between TCP and UDP?",
    answer: `<ul>
<li><b>TCP</b> — guarantees delivery, resends lost packets. Reliable. Web, email.</li>
<li><b>UDP</b> — no check, no resend. Fast but unreliable. Calls, streaming.</li>
</ul>`
  },
  {
    id: 9,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between the Internet and the WWW?",
    answer: `<ul>
<li><b>Internet</b> — the physical global network (cables, routers).</li>
<li><b>WWW</b> — info system on top: pages by URL, accessed via browser.</li>
</ul>`
  },
  {
    id: 10,
    unit: "Unit 2 — Search Engines",
    q: "Talk about the three types of search engines and their distinctive features.",
    answer: `<ul>
<li><b>Crawler-based</b> — auto index via spider.</li>
<li><b>Human-powered directory</b> — editors review a description.</li>
<li><b>Meta-search</b> — no own index, queries other engines.</li>
</ul>`
  },
  {
    id: 11,
    unit: "Unit 2 — Search Engines",
    q: "What are the three steps every crawler-based search engine takes before displaying search results?",
    answer: `<ul>
<li><b>Crawling</b> — spider fetches pages, follows links.</li>
<li><b>Indexing</b> — stores pages by keywords in an index.</li>
<li><b>Ranking</b> — orders results by relevance.</li>
</ul>`
  },
  {
    id: 12,
    unit: "Unit 2 — Search Engines",
    q: "What makes meta-search engines different from other types of search engines?",
    answer: `<p>No <em>own index</em>. Sends the query to several engines, merges their results, removes duplicates.</p>`
  },
  {
    id: 13,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between crawler-based search engines and human-powered directories?",
    answer: `<ul>
<li><b>Crawler-based</b> — auto by spider, scalable, picks up changes.</li>
<li><b>Human-powered</b> — manual editors, match against the <em>description</em>, not page content.</li>
</ul>`
  },
  {
    id: 14,
    unit: "Unit 2 — Search Engines",
    q: "What factors determine higher ranking in search results? What aspects can the ranking algorithm take into consideration?",
    answer: `<ul>
<li>Keyword in the <b>title</b>.</li>
<li>Words appearing close together.</li>
<li>Number of <b>backlinks</b> (PageRank).</li>
<li>Relevance and freshness.</li>
</ul>`
  },
  {
    id: 15,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between a search engine and a web browser?",
    answer: `<ul>
<li><b>Browser</b> — runs locally, renders <em>one site</em>.</li>
<li><b>Search engine</b> — runs on remote servers, returns a <em>list</em> of sites.</li>
</ul>`
  },
  {
    id: 16,
    unit: "Unit 2 — Search Engines",
    q: "Talk about any four search engines that can be used as an alternative to Google.",
    answer: `<ul>
<li><b>Bing</b> — Microsoft's.</li>
<li><b>Baidu</b> — China, censored.</li>
<li><b>Yandex</b> — Russia.</li>
<li><b>Ecosia</b> — plants trees with ad revenue.</li>
</ul>`
  },
  {
    id: 17,
    unit: "Unit 3 — Programming Languages",
    q: "How can programming languages be classified? Provide examples and talk about the distinctive features of each type.",
    answer: `<ul>
<li><b>Low-level</b> — machine code, assembly. Hardware-specific, hard to write.</li>
<li><b>High-level</b> — C, Java, Python. Closer to English, portable, need a compiler/interpreter.</li>
</ul>`
  },
  {
    id: 18,
    unit: "Unit 3 — Programming Languages",
    q: "What is OOP? What are the three key features of OOP? Talk about each of them.",
    answer: `<p><b>OOP</b> = code built around <b>objects</b>.</p>
<ul>
<li><b>Encapsulation</b> — bundle data + instructions.</li>
<li><b>Inheritance</b> — a class inherits another's properties.</li>
<li><b>Polymorphism</b> — same instruction, different reaction.</li>
</ul>`
  },
  {
    id: 19,
    unit: "Unit 3 — Programming Languages",
    q: "What is the difference between a compiler, an interpreter, and an assembler?",
    answer: `<ul>
<li><b>Assembler</b> — assembly → machine code.</li>
<li><b>Compiler</b> — high-level → machine code <em>all at once</em>.</li>
<li><b>Interpreter</b> — translates + runs <em>line by line</em>.</li>
</ul>`
  },
  {
    id: 20,
    unit: "Unit 4 — Web Design",
    q: "What are the three main tools used in web design? Talk about each of them.",
    answer: `<ul>
<li><b>HTML</b> — structure.</li>
<li><b>CSS</b> — appearance.</li>
<li><b>JavaScript</b> — behavior / interactivity.</li>
</ul>`
  },
  {
    id: 21,
    unit: "Unit 4 — Web Design",
    q: "What is the difference between frontend and backend web development?",
    answer: `<ul>
<li><b>Frontend</b> — visible browser part. HTML, CSS, JS.</li>
<li><b>Backend</b> — server-side, hidden. Databases, servers, server languages.</li>
</ul>`
  },
  {
    id: 22,
    unit: "Unit 4 — Web Design",
    q: "What are the advantages and disadvantages of using website builders?",
    answer: `<ul>
<li><b>Pros</b> — no coding, templates, fast, cheap.</li>
<li><b>Cons</b> — limited customization, platform lock-in, weaker SEO/performance.</li>
</ul>`
  },
  {
    id: 23,
    unit: "Unit 4 — Web Design",
    q: "What is SEO? What is its main purpose?",
    answer: `<p><b>SEO</b> = improving a site to rank higher in search results.</p>
<p>Purpose: get <b>organic traffic</b> without paying for ads.</p>`
  },
  {
    id: 24,
    unit: "Unit 2/4 — SEO",
    q: "What is the difference between on-page SEO and off-page SEO?",
    answer: `<ul>
<li><b>On-page</b> — on your site: keywords, content, meta tags.</li>
<li><b>Off-page</b> — outside: mainly <b>backlinks</b>.</li>
</ul>`
  },
  {
    id: 25,
    unit: "Unit 4 — Web Design",
    q: "What is meant by 'organic results'?",
    answer: `<p><b>Organic results</b> = natural listings shown by relevance, <em>not paid for</em>. Opposite of sponsored ads.</p>`
  },
  {
    id: 26,
    unit: "Unit 5 — Malware",
    q: "What is malware? What types of malware do you know? Talk about each one.",
    answer: `<p><b>Malware</b> = malicious software to damage or steal.</p>
<p>Types: <b>virus, worm, Trojan, ransomware, spyware, adware</b>.</p>`
  },
  {
    id: 27,
    unit: "Unit 5 — Malware",
    q: "What are the four routines of a virus? Talk about the function of each.",
    answer: `<ul>
<li><b>Misdirection</b> — hides the virus.</li>
<li><b>Reproduction</b> — copies itself (only mandatory part).</li>
<li><b>Trigger</b> — activates the payload.</li>
<li><b>Payload</b> — does the damage.</li>
</ul>`
  },
  {
    id: 28,
    unit: "Unit 5 — Malware",
    q: "What types of cybercrime do you know? Talk about each of them.",
    answer: `<p><b>Phishing</b>, <b>DDoS</b>, <b>website defacement</b>, <b>salami shaving</b>, <b>piggybacking</b>, <b>software piracy</b>.</p>`
  },
  {
    id: 29,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a worm?",
    answer: `<ul>
<li><b>Virus</b> — needs a host file + human action.</li>
<li><b>Worm</b> — standalone, self-spreads on the network.</li>
</ul>`
  },
  {
    id: 30,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a Trojan?",
    answer: `<ul>
<li><b>Virus</b> — replicates itself.</li>
<li><b>Trojan</b> — doesn't replicate; disguised, opens a <b>backdoor</b>.</li>
</ul>`
  },
  {
    id: 31,
    unit: "Unit 5/6 — Security",
    q: "What is the difference between DoS and DDoS attack? How is a DDoS attack performed?",
    answer: `<ul>
<li><b>DoS</b> — flood from a single source.</li>
<li><b>DDoS</b> — flood from many sources via a <b>botnet</b>.</li>
</ul>`
  },
  {
    id: 32,
    unit: "Unit 6 — Data Security",
    q: "What is a firewall? What can firewall filters be based on?",
    answer: `<p><b>Firewall</b> = software + hardware filtering network traffic.</p>
<p>Filters based on: <b>IP, domain, ports, protocols, words</b>.</p>`
  },
  {
    id: 33,
    unit: "Unit 6 — Data Security",
    q: "What is the difference between signature-based scanning and heuristic scanning?",
    answer: `<ul>
<li><b>Signature-based</b> — matches a database of <em>known</em> malware.</li>
<li><b>Heuristic</b> — behavior rules → catches <em>new</em> malware.</li>
</ul>`
  },
  {
    id: 34,
    unit: "Unit 6 — Data Security",
    q: "What is a signature?",
    answer: `<p>A virus's unique <b>fingerprint</b> — makes it recognizable to antivirus, which keeps a database of signatures.</p>`
  },
  {
    id: 35,
    unit: "Unit 6 — Data Security",
    q: "What are the two main types of encryption? What is the difference?",
    answer: `<ul>
<li><b>Symmetric</b> — same key encrypts + decrypts.</li>
<li><b>Asymmetric</b> — public key + private key.</li>
</ul>`
  },
  {
    id: 36,
    unit: "Unit 6 — Data Security",
    q: "What two methods of breaking a cipher are there?",
    answer: `<ul>
<li><b>Brute force</b> — try all keys.</li>
<li><b>Cryptanalysis</b> — find a flaw in the cipher.</li>
</ul>`
  },
  {
    id: 37,
    unit: "Unit 6 — Data Security",
    q: "What is a CAPTCHA? Where is this tool implemented?",
    answer: `<p><b>CAPTCHA</b> = test telling <em>humans from bots</em>.</p>
<p>Used on: login/signup forms, comment sections, online voting.</p>`
  },
  {
    id: 38,
    unit: "Unit 6 — Data Security",
    q: "What is the Turing test? Talk about its procedure.",
    answer: `<p><b>Turing test</b> (Turing, 1950) — can a machine think?</p>
<p>A judge talks via text to a human and a computer; if accuracy &lt; 50%, the machine is "intelligent".</p>`
  },
  {
    id: 39,
    unit: "Unit 7 — Future of IT",
    q: "What is the difference between classification and clustering?",
    answer: `<ul>
<li><b>Classification</b> — predefined classes (supervised).</li>
<li><b>Clustering</b> — undefined groups the network finds itself (unsupervised).</li>
</ul>`
  },
  {
    id: 40,
    unit: "Unit 7 — Future of IT",
    q: "What is backpropagation?",
    answer: `<p>The <b>feedback</b> a network learns by: compares actual vs intended output, then modifies the <b>weights</b> <em>backward</em> to reduce the error.</p>`
  },
  {
    id: 41,
    unit: "Unit 7 — Future of IT",
    q: "What is an artificial neural network? What tasks can neural networks accomplish?",
    answer: `<p><b>ANN</b> = computer model simulating the brain via interconnected nodes.</p>
<p>Tasks: recognition, translation, classification, clustering, prediction.</p>`
  },
  {
    id: 42,
    unit: "Unit 7 — Future of IT",
    q: "In what way is an artificial neural network similar to the biological brain? Describe its structure.",
    answer: `<p>Like brain neurons linked by synapses — nodes with weighted connections.</p>
<p>Layers: <b>input</b>, <b>hidden</b>, <b>output</b>.</p>`
  },
  {
    id: 43,
    unit: "Unit 7 — Future of IT",
    q: "Why are neural networks compared to 'black boxes'?",
    answer: `<p>Inputs and outputs are visible, but the <em>internal decision-making is hidden</em> — hard to explain or trust.</p>`
  },
  {
    id: 44,
    unit: "Unit 7 — Future of IT",
    q: "What is IoT? What are the major problems in using the IoT technology?",
    answer: `<p><b>IoT</b> = objects with unique IDs sharing data with no human interaction.</p>
<p>Problems: <b>security, data management, bug cascading, no standard</b>.</p>`
  },
  {
    id: 45,
    unit: "Unit 7 — Future of IT",
    q: "What is HLAI? What are the risks of using HLAI?",
    answer: `<p><b>HLAI</b> = AI mimicking how humans think.</p>
<p>Risks: replaces human labor, workers lose power, power concentrates in a few owners.</p>`
  }
];

// Multiple-choice bank covering key facts from the same topics.
// correct = index into options.
const MCQ = [
  { unit: "Unit 1", q: "Which wired connection transmits data as pulses of light?", options: ["Dial-up", "DSL", "Fiber-optic", "Cable"], correct: 2, why: "Fiber-optic sends data as pulses of light, giving the highest speed." },
  { unit: "Unit 1", q: "Which wired connection shares bandwidth with the neighborhood?", options: ["Fiber-optic", "Cable Internet", "DSL", "SDSL"], correct: 1, why: "Cable runs over shared coaxial TV infrastructure, so speed drops at peak hours." },
  { unit: "Unit 1", q: "ADSL provides:", options: ["Equal up/down speeds", "Faster download than upload", "Faster upload than download", "No internet"], correct: 1, why: "ADSL is Asymmetric — download is faster than upload." },
  { unit: "Unit 1", q: "Which DSL type gives equal upload and download speeds?", options: ["ADSL", "SDSL", "VDSL", "Dial-up"], correct: 1, why: "SDSL = Symmetric DSL, equal in both directions." },
  { unit: "Unit 1", q: "Splitting data into independently routed packets describes:", options: ["Circuit switching", "Packet switching", "Dial-up", "Encryption"], correct: 1, why: "Packet switching sends independent packets over shared routes." },
  { unit: "Unit 1", q: "A dedicated reserved path for the whole communication is:", options: ["Packet switching", "Datagram", "Circuit switching", "Broadcasting"], correct: 2, why: "Circuit switching reserves one channel end-to-end before transfer." },
  { unit: "Unit 1", q: "How many layers does the TCP/IP model have?", options: ["3", "4", "5", "7"], correct: 1, why: "TCP/IP has 4 layers (Application, Transport, Internet, Network Interface)." },
  { unit: "Unit 1", q: "Which protocol guarantees delivery with acknowledgements?", options: ["UDP", "IP", "TCP", "HTTP"], correct: 2, why: "TCP acknowledges and retransmits missing packets, ensuring delivery." },
  { unit: "Unit 1", q: "Best protocol for real-time phone calls and live streaming:", options: ["TCP", "UDP", "FTP", "SMTP"], correct: 1, why: "UDP is fast with low overhead — no connection verification." },
  { unit: "Unit 1", q: "Who invented the World Wide Web?", options: ["Alan Turing", "Dennis Ritchie", "Tim Berners-Lee", "Bill Gates"], correct: 2, why: "Tim Berners-Lee invented the Web in 1989 at CERN." },
  { unit: "Unit 2", q: "Which search engine has NO index of its own?", options: ["Crawler-based", "Human-powered directory", "Meta-search engine", "Vertical engine"], correct: 2, why: "A meta-search engine queries other engines instead of indexing." },
  { unit: "Unit 2", q: "Correct order of crawler-based search stages:", options: ["Index → Crawl → Rank", "Crawl → Index → Rank", "Rank → Crawl → Index", "Crawl → Rank → Index"], correct: 1, why: "First crawl pages, then index them, then rank for queries." },
  { unit: "Unit 2", q: "A program installed locally to view web pages is a:", options: ["Search engine", "Web browser", "Web server", "Directory"], correct: 1, why: "A browser runs locally and renders one specific site." },
  { unit: "Unit 2", q: "Which alternative engine plants trees with its ad revenue?", options: ["Ecosia", "Baidu", "Bing", "Yandex"], correct: 0, why: "Ecosia is CO2-neutral and ~45 searches plant one tree." },
  { unit: "Unit 2", q: "Counting how many webpages link to a page is the basis of:", options: ["Backlinks (PageRank)", "Crawling", "Indexing", "Caching"], correct: 0, why: "Google's PageRank weighs inbound links as authority." },
  { unit: "Unit 3", q: "Which is a low-level language?", options: ["Python", "Assembly", "Java", "JavaScript"], correct: 1, why: "Assembly is hardware-dependent and close to machine code." },
  { unit: "Unit 3", q: "The three key features of OOP are:", options: ["Encapsulation, inheritance, polymorphism", "Loops, arrays, functions", "HTML, CSS, JS", "TCP, IP, UDP"], correct: 0, why: "OOP core: encapsulation, inheritance, polymorphism." },
  { unit: "Unit 3", q: "Bundling data and instructions into objects is called:", options: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"], correct: 2, why: "Encapsulation packages data + instructions into objects." },
  { unit: "Unit 3", q: "A translator that converts a whole program at once is a:", options: ["Interpreter", "Compiler", "Assembler", "Browser"], correct: 1, why: "A compiler translates the whole program before running." },
  { unit: "Unit 3", q: "An interpreter executes code:", options: ["All at once", "Line by line at run time", "Never", "Only in binary"], correct: 1, why: "Interpreters translate and run line by line." },
  { unit: "Unit 4", q: "Which tool controls the appearance, layout and styling of a page?", options: ["HTML", "CSS", "JavaScript", "SQL"], correct: 1, why: "CSS handles presentation/styling." },
  { unit: "Unit 4", q: "Which tool makes web pages interactive?", options: ["HTML", "CSS", "JavaScript", "PHP"], correct: 2, why: "JavaScript controls behavior/interactivity." },
  { unit: "Unit 4", q: "Frontend development is the:", options: ["Server-side part", "Visible part the user interacts with", "Database part", "Kernel part"], correct: 1, why: "Frontend = visible part in the browser (HTML/CSS/JS)." },
  { unit: "Unit 4", q: "Unpaid search listings shown by relevance are:", options: ["Sponsored results", "Organic results", "Banner ads", "Pop-ups"], correct: 1, why: "Organic results are earned, not bought." },
  { unit: "Unit 4", q: "SEO stands for:", options: ["Secure Email Option", "Search Engine Optimization", "System Error Output", "Server Edge Onload"], correct: 1, why: "SEO = Search Engine Optimization." },
  { unit: "Unit 4", q: "Earning quality backlinks is part of:", options: ["On-page SEO", "Off-page SEO", "HTML coding", "Encryption"], correct: 1, why: "Backlinks come from outside your site = off-page SEO." },
  { unit: "Unit 5", q: "Malware that self-replicates and spreads across networks without a host is a:", options: ["Virus", "Worm", "Trojan", "Cookie"], correct: 1, why: "A worm is standalone and self-replicating, needs no host file." },
  { unit: "Unit 5", q: "Malware disguised as legitimate freeware that opens a backdoor is a:", options: ["Worm", "Trojan", "Virus", "Firewall"], correct: 1, why: "A Trojan tricks users and doesn't replicate, but opens a backdoor." },
  { unit: "Unit 5", q: "Malware that encrypts data and demands payment is:", options: ["Spyware", "Ransomware", "Adware", "A worm"], correct: 1, why: "Ransomware encrypts data and demands payment for release." },
  { unit: "Unit 5", q: "The only mandatory routine that defines a program as a virus is the:", options: ["Misdirection routine", "Reproduction routine", "Trigger", "Payload"], correct: 1, why: "Without a reproduction routine it's a Trojan, not a virus." },
  { unit: "Unit 5", q: "Stealing tiny amounts from many accounts to avoid detection is:", options: ["Phishing", "Salami shaving", "Piggybacking", "Hijacking"], correct: 1, why: "Salami shaving keeps each transaction tiny over a long period." },
  { unit: "Unit 5", q: "A DDoS attack is usually carried out using a:", options: ["Single PC", "Botnet", "Firewall", "Compiler"], correct: 1, why: "A botnet of compromised computers floods the target at once." },
  { unit: "Unit 6", q: "Firewall filters can be based on:", options: ["IP addresses, ports, protocols", "Screen size", "Font type", "Battery level"], correct: 0, why: "Firewalls filter by IPs, domains, ports, protocols, keywords." },
  { unit: "Unit 6", q: "Detecting NEW malware by rules/behavior with no exact match is:", options: ["Signature-based scanning", "Heuristic scanning", "Indexing", "Crawling"], correct: 1, why: "Heuristic scanning recognizes new malware via suspicious patterns." },
  { unit: "Unit 6", q: "A virus's unique fingerprint stored in antivirus databases is a:", options: ["Signature", "Cookie", "Token", "Cipher"], correct: 0, why: "A signature is the virus's unique distinguishing feature." },
  { unit: "Unit 6", q: "Encryption where all parties share the same key is:", options: ["Asymmetric", "Symmetric", "Hashing", "Public-key"], correct: 1, why: "Symmetric uses the same key to encrypt and decrypt." },
  { unit: "Unit 6", q: "Asymmetric (public-key) encryption uses:", options: ["One shared key", "A public and a private key", "No key", "A signature"], correct: 1, why: "Public key encrypts; matching private key decrypts." },
  { unit: "Unit 6", q: "Trying random keys until the right one is found is:", options: ["Cryptanalysis", "Brute force", "Phishing", "Heuristics"], correct: 1, why: "Brute force tests keys exhaustively; cryptanalysis finds a flaw." },
  { unit: "Unit 6", q: "CAPTCHA stands for a test to:", options: ["Encrypt data", "Tell computers and humans apart", "Compile code", "Index pages"], correct: 1, why: "Completely Automated Public Turing test to tell Computers and Humans Apart." },
  { unit: "Unit 6", q: "In 2014 a chatbot claimed to pass the Turing test by pretending to be a:", options: ["Doctor", "13-year-old Ukrainian boy", "Robot", "Native speaker"], correct: 1, why: "Eugene Goostman posed as a 13-year-old Ukrainian boy." },
  { unit: "Unit 7", q: "Classifying data into predefined classes is:", options: ["Clustering", "Classification", "Backpropagation", "Crawling"], correct: 1, why: "Classification uses predefined classes = supervised learning." },
  { unit: "Unit 7", q: "Grouping data into undefined categories by similarity is:", options: ["Classification", "Clustering", "Compilation", "Crawling"], correct: 1, why: "Clustering finds groups without predefined labels = unsupervised." },
  { unit: "Unit 7", q: "Backpropagation adjusts a network's:", options: ["Pixels", "Weights", "IP address", "Cables"], correct: 1, why: "It propagates error backward to modify connection weights." },
  { unit: "Unit 7", q: "Neural networks are called 'black boxes' because:", options: ["They are physically black", "Their internal decision-making isn't accessible", "They have no inputs", "They never work"], correct: 1, why: "Inputs/outputs are visible but the internal process is opaque." },
  { unit: "Unit 7", q: "IoT devices are provided with:", options: ["Unique identifiers (UIDs)", "Free internet", "A single shared IP", "No network"], correct: 0, why: "IoT things get UIDs and transfer data without human interaction." },
  { unit: "Unit 7", q: "A major problem of IoT is:", options: ["Too few devices", "Security risk and massive data management", "No data", "It needs no internet"], correct: 1, why: "More connected devices = bigger hacking risk + data to manage." },
  { unit: "Unit 7", q: "HLAI stands for:", options: ["High-Level API", "Human-Like Artificial Intelligence", "Hyper Link AI", "Hardware Logic AI"], correct: 1, why: "HLAI = AI designed to mimic how humans think and behave." }
];
