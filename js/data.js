// Source: "Вопросы_ИТ_КМ 3.pdf" — Essential English for IT students. Part 2.
// 45 exam questions with model answers (English). UI is Russian, content English.

const QUESTIONS = [
  {
    id: 1,
    unit: "Unit 1 — The Internet",
    q: "What types of wired internet connections do you know? Talk about each of them in detail.",
    answer:
      "The main wired connections are dial-up, DSL, cable, and fibre-optic. Dial-up uses a modem over the ordinary telephone line and is very slow (up to 56 kbps), blocking the phone while online. DSL also runs over phone lines but uses higher frequencies, so it is always-on and much faster, and you can use the phone at the same time. Cable internet runs over the coaxial TV cable and offers high speeds, but bandwidth is shared with neighbours. Fibre-optic transmits data as light through glass fibres, giving the highest speed and reliability over long distances."
  },
  {
    id: 2,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between DSL and dial-up connection?",
    answer:
      "Both use the telephone line, but dial-up uses the voice frequency band, so it occupies the line, must 'dial in' each time, and is limited to about 56 kbps. DSL uses higher, separate frequencies, so it is always-on, far faster, and lets you make phone calls and be online simultaneously."
  },
  {
    id: 3,
    unit: "Unit 1 — The Internet",
    q: "Talk about the three wireless internet access technologies mentioned in the text.",
    answer:
      "The three are Wi-Fi, mobile/cellular (3G/4G), and satellite. Wi-Fi gives wireless access within a limited range of a wireless router/hotspot. Mobile (cellular) access uses the mobile phone network so you can connect almost anywhere there is signal. Satellite access sends and receives data via a satellite dish and is used in remote areas with no cable infrastructure, but it has higher latency."
  },
  {
    id: 4,
    unit: "Unit 1 — The Internet",
    q: "What are the three types of DSL connections that you know? Talk about each of them.",
    answer:
      "ADSL (Asymmetric DSL) gives a faster download than upload speed, which suits ordinary home users who download more than they upload. SDSL (Symmetric DSL) provides equal upload and download speeds, useful for businesses and servers. VDSL (Very-high-bit-rate DSL) offers the highest speeds but only over short distances from the exchange."
  },
  {
    id: 5,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between packet switching and circuit switching technologies?",
    answer:
      "In circuit switching a dedicated physical path is reserved for the whole communication (like a traditional phone call); it is reliable but wastes capacity when idle. In packet switching data is split into packets that travel independently over shared routes and are reassembled at the destination, which uses the network more efficiently and is the basis of the internet."
  },
  {
    id: 6,
    unit: "Unit 1 — The Internet",
    q: "What are the two subtypes of packet switching technologies that you know? Talk about each of them.",
    answer:
      "The two subtypes are connectionless (datagram) and connection-oriented (virtual circuit) packet switching. In connectionless switching each packet is routed independently and may take a different path, so packets can arrive out of order. In connection-oriented switching a virtual circuit/path is set up first and all packets follow the same route in order, giving more reliable delivery."
  },
  {
    id: 7,
    unit: "Unit 1 — The Internet",
    q: "Talk about the TCP/IP model (the layers, protocols).",
    answer:
      "The TCP/IP model has four layers. The Application layer holds user protocols such as HTTP, FTP, SMTP and DNS. The Transport layer (TCP and UDP) handles end-to-end delivery and, for TCP, reliability. The Internet layer (IP) handles addressing and routing of packets between networks. The Network Access (link) layer deals with the physical transmission over the local network hardware."
  },
  {
    id: 8,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between TCP and UDP?",
    answer:
      "TCP is connection-oriented and reliable: it sets up a connection, numbers packets, acknowledges them and retransmits lost ones, so data arrives complete and in order — good for web, email, file transfer. UDP is connectionless and unreliable but fast and low-overhead, with no acknowledgements or reordering — good for streaming, voice and online games where speed matters more than perfect delivery."
  },
  {
    id: 9,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between the Internet and the WWW?",
    answer:
      "The Internet is the global physical network of interconnected computers and the infrastructure that links them. The World Wide Web is just one service that runs on the Internet — a system of linked web pages and resources accessed via HTTP and browsers. So the Web is a part of the Internet, not the same thing."
  },
  {
    id: 10,
    unit: "Unit 2 — Search Engines",
    q: "Talk about the three types of search engines and their distinctive features.",
    answer:
      "The three types are crawler-based search engines, human-powered directories, and meta-search engines. Crawler-based engines (e.g. Google) use software 'spiders' to build their index automatically. Human-powered directories rely on people who review and categorise sites by hand. Meta-search engines have no index of their own — they send the query to several other search engines and combine the results."
  },
  {
    id: 11,
    unit: "Unit 2 — Search Engines",
    q: "What are the three steps that every crawler-based search engine takes before displaying search results?",
    answer:
      "The three stages are crawling, indexing, and ranking (searching/retrieval). Crawling: a spider/bot follows links and gathers web pages. Indexing: the collected pages are analysed and stored in a huge searchable index of words and locations. Ranking: when a query comes in, the engine searches the index and orders the matching pages by relevance before displaying them."
  },
  {
    id: 12,
    unit: "Unit 2 — Search Engines",
    q: "What makes meta-search engines different from other types of search engines?",
    answer:
      "A meta-search engine does not maintain its own database or index. Instead it forwards the user's query to several other search engines at once, then gathers, blends and presents their results. This can give broader coverage from one search, though with less control over ranking."
  },
  {
    id: 13,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between crawler-based search engines and human-powered directories?",
    answer:
      "Crawler-based engines build and update their index automatically with software spiders, so they cover huge numbers of pages and stay current. Human-powered directories are compiled manually by editors who review and categorise sites, so they are smaller and slower to update but the listings are human-checked for quality."
  },
  {
    id: 14,
    unit: "Unit 2 — Search Engines",
    q: "What factors determine higher ranking in search results? What aspects can a ranking algorithm take into consideration?",
    answer:
      "Ranking algorithms consider relevance and authority. Relevance factors include keywords in the title, headings, URL and body, keyword frequency and position, and freshness of content. Authority factors include the number and quality of inbound links (backlinks), the site's reputation, page load speed, mobile-friendliness and user behaviour signals such as click-through and time on page."
  },
  {
    id: 15,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between a search engine and a web browser?",
    answer:
      "A web browser (Chrome, Firefox, Safari) is a program installed on your device that retrieves and displays web pages. A search engine (Google, Bing) is a website/service that lets you find pages by keyword. You use a browser to reach a search engine, so the browser is the tool and the search engine is a service accessed through it."
  },
  {
    id: 16,
    unit: "Unit 2 — Search Engines",
    q: "Talk about any four search engines that can be used as an alternative to Google.",
    answer:
      "Bing is Microsoft's engine with image and video search. DuckDuckGo focuses on privacy and does not track users or personalise results. Yahoo offers search alongside news and mail services. Ecosia is an eco-friendly engine that uses its profits to plant trees. (Yandex, with strong results for the Russian language, is another option.)"
  },
  {
    id: 17,
    unit: "Unit 3 — Programming Languages",
    q: "How can programming languages be classified? Provide examples and talk about distinctive features of each type.",
    answer:
      "By level they split into low-level and high-level. Low-level languages include machine code (binary) and assembly language — hardware-dependent, fast, but hard to write. High-level languages (Python, Java, C++) are closer to human language, portable and easier to use. They can also be classified by paradigm — procedural, object-oriented, functional — and by execution as compiled or interpreted."
  },
  {
    id: 18,
    unit: "Unit 3 — Programming Languages",
    q: "What is OOP? What are the three key features of OOP? Talk about each of them in detail.",
    answer:
      "OOP (Object-Oriented Programming) organises code around objects that combine data and methods. Its three key features are encapsulation, inheritance and polymorphism. Encapsulation hides an object's internal data and exposes only a controlled interface. Inheritance lets a new class reuse and extend the properties and methods of an existing class. Polymorphism lets the same method name behave differently depending on the object that uses it."
  },
  {
    id: 19,
    unit: "Unit 3 — Programming Languages",
    q: "What is the difference between a compiler, an interpreter, and an assembler?",
    answer:
      "All translate code into machine language but differently. A compiler translates the whole high-level program into machine code at once, producing an executable that runs fast. An interpreter translates and executes the program line by line at run time, which is more flexible but slower. An assembler specifically translates assembly language into machine code, with roughly a one-to-one mapping of instructions."
  },
  {
    id: 20,
    unit: "Unit 4 — Web Design",
    q: "What are the three main tools used in web design? Talk about each of them.",
    answer:
      "The three core tools are HTML, CSS and JavaScript. HTML provides the structure and content of the page (headings, text, links, images). CSS controls the presentation — layout, colours, fonts and spacing. JavaScript adds interactivity and dynamic behaviour, such as form validation, animations and responding to user actions."
  },
  {
    id: 21,
    unit: "Unit 4 — Web Design",
    q: "What is the difference between frontend and backend web development?",
    answer:
      "Frontend (client-side) development builds what the user sees and interacts with in the browser, using HTML, CSS and JavaScript. Backend (server-side) development handles the logic behind the scenes — servers, databases and APIs — using languages like Python, PHP or Node.js. The frontend sends requests; the backend processes them, stores data and returns responses."
  },
  {
    id: 22,
    unit: "Unit 4 — Web Design",
    q: "What are the advantages and disadvantages of using website builders?",
    answer:
      "Advantages: website builders (Wix, Squarespace) are cheap, fast and need no coding skills, offering ready templates and hosting. Disadvantages: they give limited customisation and flexibility, you depend on the platform (vendor lock-in), sites can be slower or less SEO-friendly, and you do not own the underlying code, making migration hard."
  },
  {
    id: 23,
    unit: "Unit 4 — Web Design",
    q: "What is SEO? What is its main purpose?",
    answer:
      "SEO (Search Engine Optimization) is the practice of improving a website so it ranks higher in organic (unpaid) search results. Its main purpose is to increase the quantity and quality of free traffic by making the site more relevant and visible to search engines for chosen keywords."
  },
  {
    id: 24,
    unit: "Unit 2/4 — SEO",
    q: "What is the difference between on-page SEO and off-page SEO?",
    answer:
      "On-page SEO covers what you do on your own website — optimising titles, headings, content, keywords, URLs, images and internal links. Off-page SEO covers actions outside your site that build its authority and reputation, mainly earning quality backlinks, plus social signals and brand mentions."
  },
  {
    id: 25,
    unit: "Unit 4 — Web Design",
    q: "What is meant by 'organic results'?",
    answer:
      "Organic results are the unpaid search listings that a search engine shows purely because they are relevant to the query, based on its ranking algorithm. They are not advertisements — unlike paid/sponsored results, you cannot buy a position, you earn it through relevance and SEO."
  },
  {
    id: 26,
    unit: "Unit 5 — Malware",
    q: "What is malware? What types of malware do you know? Talk about each one in detail.",
    answer:
      "Malware is malicious software designed to damage, disrupt or gain unauthorised access to systems. A virus attaches to a file and needs a host and user action to spread. A worm spreads by itself across networks without a host. A Trojan disguises itself as a useful program to trick the user. Spyware secretly collects information, and ransomware encrypts the victim's data and demands payment."
  },
  {
    id: 27,
    unit: "Unit 5 — Malware",
    q: "What are the four routines of a virus? Talk about the function of each of them.",
    answer:
      "A virus typically has four routines. The infection (replication) routine spreads the virus by attaching it to other files. The concealment routine hides the virus from detection (e.g. by anti-virus software). The trigger (logic bomb) routine decides when the payload activates, often on a date or event. The payload routine carries out the harmful action, such as deleting or corrupting data."
  },
  {
    id: 28,
    unit: "Unit 5 — Malware",
    q: "What types of cybercrime do you know? Talk about each of them.",
    answer:
      "Common cybercrimes include hacking — gaining unauthorised access to systems; phishing — using fake emails or sites to steal personal data; identity theft — stealing someone's personal information to impersonate them; spreading malware such as viruses; and DoS/DDoS attacks that flood a service to make it unavailable. Many aim at financial gain or data theft."
  },
  {
    id: 29,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a worm?",
    answer:
      "A virus needs a host file and human action (like opening a file) to spread, attaching itself to other programs. A worm is standalone and self-replicating: it spreads automatically across networks without a host or user action, which lets it propagate much faster."
  },
  {
    id: 30,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a Trojan?",
    answer:
      "A virus replicates by attaching itself to other files and spreading. A Trojan does not self-replicate; instead it disguises itself as legitimate, useful software to trick the user into installing it, then performs hidden malicious actions such as opening a backdoor for attackers."
  },
  {
    id: 31,
    unit: "Unit 5/6 — Security",
    q: "What is the difference between DoS and DDoS attack? How is a DDoS attack performed?",
    answer:
      "A DoS (Denial of Service) attack floods a server with traffic from a single source to overload it and make it unavailable. A DDoS (Distributed DoS) attack does the same but from many sources at once. It is usually performed using a botnet — a network of malware-infected computers ('zombies') that the attacker commands to send requests to the target simultaneously, making it harder to block."
  },
  {
    id: 32,
    unit: "Unit 6 — Data Security",
    q: "What is a firewall? What can firewall filters be based on?",
    answer:
      "A firewall is hardware or software that monitors and controls incoming and outgoing network traffic, acting as a barrier between a trusted internal network and untrusted external ones. Its filters can be based on IP addresses, domain names, ports, protocols, and specific keywords or content, allowing or blocking traffic according to rules."
  },
  {
    id: 33,
    unit: "Unit 6 — Data Security",
    q: "What is the difference between signature-based scanning and heuristic scanning?",
    answer:
      "Signature-based scanning compares files against a database of known malware 'signatures'; it is accurate for known threats but cannot detect new ones. Heuristic scanning analyses code behaviour and characteristics to spot suspicious activity, so it can catch new or modified (zero-day) malware, but with a higher risk of false positives."
  },
  {
    id: 34,
    unit: "Unit 6 — Data Security",
    q: "What is a signature?",
    answer:
      "In anti-virus terms, a signature is a unique pattern or piece of code that identifies a particular piece of malware — like a digital fingerprint. Anti-virus software stores these signatures in a database and compares scanned files against them to detect known threats."
  },
  {
    id: 35,
    unit: "Unit 6 — Data Security",
    q: "What are the two main types of encryption? What is the difference between the two?",
    answer:
      "The two types are symmetric and asymmetric encryption. Symmetric encryption uses one shared secret key for both encrypting and decrypting — it is fast but the key must be shared securely. Asymmetric encryption uses a key pair: a public key to encrypt and a private key to decrypt — more secure for exchanging data with strangers, but slower."
  },
  {
    id: 36,
    unit: "Unit 6 — Data Security",
    q: "What two methods of breaking a cipher are there?",
    answer:
      "The two methods are the brute-force attack and cryptanalysis. A brute-force attack tries every possible key until the right one is found — guaranteed to work eventually but slow for long keys. Cryptanalysis instead studies the cipher's structure, patterns and weaknesses to break it without testing every key."
  },
  {
    id: 37,
    unit: "Unit 6 — Data Security",
    q: "What is a CAPTCHA? Where is this tool implemented?",
    answer:
      "A CAPTCHA is a challenge-response test used to tell humans and computers apart — for example distorted text or selecting images. It is implemented on websites at points open to abuse, such as registration forms, login pages, comment sections and online voting, to block automated bots and spam."
  },
  {
    id: 38,
    unit: "Unit 6 — Data Security",
    q: "What is the Turing test? Talk about its procedure.",
    answer:
      "The Turing test, proposed by Alan Turing, checks whether a machine can show intelligent behaviour indistinguishable from a human's. A human judge holds a text conversation with two hidden participants — one human and one machine. If the judge cannot reliably tell which is the machine, the machine is said to pass the test."
  },
  {
    id: 39,
    unit: "Unit 7 — Future of IT",
    q: "What is the difference between classification and clustering?",
    answer:
      "Both group data, but classification is supervised learning: the model is trained on labelled examples and assigns new data to predefined categories. Clustering is unsupervised learning: there are no labels, and the algorithm groups data into clusters by similarity, discovering the structure itself."
  },
  {
    id: 40,
    unit: "Unit 7 — Future of IT",
    q: "What is backpropagation?",
    answer:
      "Backpropagation is the main training algorithm for neural networks. After the network makes a prediction, the error is calculated and propagated backwards from the output layer to the input layer, adjusting the connection weights to reduce the error. Repeating this over many examples gradually makes the network more accurate."
  },
  {
    id: 41,
    unit: "Unit 7 — Future of IT",
    q: "What is an artificial neural network? What tasks can neural networks accomplish?",
    answer:
      "An artificial neural network is a computing system inspired by the brain, made of interconnected nodes (neurons) arranged in layers that learn from data. They can accomplish tasks such as image and speech recognition, classification, prediction/forecasting, natural language processing, and pattern recognition."
  },
  {
    id: 42,
    unit: "Unit 7 — Future of IT",
    q: "In what way is an artificial neural network similar to the biological brain? Describe the structure of artificial neural networks.",
    answer:
      "Like the brain's neurons connected by synapses, an ANN has artificial neurons (nodes) connected by weighted links, and it learns from experience. Structurally it has an input layer that receives data, one or more hidden layers that process it, and an output layer that gives the result; each connection has a weight that is adjusted during training."
  },
  {
    id: 43,
    unit: "Unit 7 — Future of IT",
    q: "Why are neural networks compared to 'black boxes'?",
    answer:
      "They are called black boxes because we can see the inputs and the outputs, but the internal decision-making — how the many weighted connections combine to reach a result — is too complex to interpret clearly. So even when the network works well, it is hard to explain exactly why it produced a particular answer."
  },
  {
    id: 44,
    unit: "Unit 7 — Future of IT",
    q: "What is IoT? What are the major problems in using the IoT technology?",
    answer:
      "IoT (Internet of Things) is a network of everyday physical objects fitted with sensors and connectivity that collect and exchange data over the internet. The major problems are security (many devices are easy to hack), privacy (huge amounts of personal data are collected), and a lack of common standards and interoperability between devices, plus scalability concerns."
  },
  {
    id: 45,
    unit: "Unit 7 — Future of IT",
    q: "What is HLAI? What are the risks of using HLAI?",
    answer:
      "HLAI (Human-Level Artificial Intelligence) is AI that can perform any intellectual task as well as a human. The risks include loss of human control over such systems, mass job displacement, misuse for harmful purposes, ethical and decision-making concerns, and the danger that an AI smarter than humans could act against our interests if its goals are not aligned with ours."
  }
];

// Multiple-choice bank covering key facts from the same topics.
// correct = index into options.
const MCQ = [
  { unit: "Unit 1", q: "Which wired connection transmits data as light through glass fibres?", options: ["Dial-up", "DSL", "Fibre-optic", "Cable"], correct: 2, why: "Fibre-optic sends data as pulses of light, giving the highest speed." },
  { unit: "Unit 1", q: "Maximum speed of a dial-up connection is about:", options: ["56 kbps", "100 Mbps", "1 Gbps", "10 Mbps"], correct: 0, why: "Dial-up over the voice band tops out around 56 kbps." },
  { unit: "Unit 1", q: "ADSL provides:", options: ["Equal up/down speeds", "Faster download than upload", "Faster upload than download", "No internet"], correct: 1, why: "ADSL is Asymmetric — download is faster than upload." },
  { unit: "Unit 1", q: "Which DSL type gives equal upload and download speeds?", options: ["ADSL", "SDSL", "VDSL", "Dial-up"], correct: 1, why: "SDSL = Symmetric DSL, equal in both directions." },
  { unit: "Unit 1", q: "Splitting data into independently routed packets describes:", options: ["Circuit switching", "Packet switching", "Dial-up", "Encryption"], correct: 1, why: "Packet switching sends independent packets over shared routes." },
  { unit: "Unit 1", q: "A dedicated reserved path for the whole call is:", options: ["Packet switching", "Datagram", "Circuit switching", "Broadcasting"], correct: 2, why: "Circuit switching reserves one physical path end-to-end." },
  { unit: "Unit 1", q: "How many layers does the TCP/IP model have?", options: ["3", "4", "5", "7"], correct: 1, why: "TCP/IP has 4 layers (Application, Transport, Internet, Link)." },
  { unit: "Unit 1", q: "Which protocol is reliable and connection-oriented?", options: ["UDP", "IP", "TCP", "HTTP"], correct: 2, why: "TCP acknowledges and retransmits, ensuring ordered delivery." },
  { unit: "Unit 1", q: "Best protocol for live video streaming and games:", options: ["TCP", "UDP", "FTP", "SMTP"], correct: 1, why: "UDP is fast with low overhead — speed over perfect delivery." },
  { unit: "Unit 1", q: "The WWW is:", options: ["The same as the Internet", "The physical network", "A service running on the Internet", "A web browser"], correct: 2, why: "The Web is one service (linked pages) on top of the Internet." },
  { unit: "Unit 2", q: "Which search engine has NO index of its own?", options: ["Crawler-based", "Human-powered directory", "Meta-search engine", "Vertical engine"], correct: 2, why: "A meta-search engine queries other engines instead of indexing." },
  { unit: "Unit 2", q: "Correct order of crawler-based search stages:", options: ["Index → Crawl → Rank", "Crawl → Index → Rank", "Rank → Crawl → Index", "Crawl → Rank → Index"], correct: 1, why: "First crawl pages, then index them, then rank for queries." },
  { unit: "Unit 2", q: "A program installed on your device to view web pages is a:", options: ["Search engine", "Web browser", "Web server", "Directory"], correct: 1, why: "A browser (Chrome/Firefox) retrieves and displays pages." },
  { unit: "Unit 2", q: "Which is a privacy-focused alternative to Google?", options: ["DuckDuckGo", "Bing Ads", "Apache", "MySQL"], correct: 0, why: "DuckDuckGo does not track users or personalise results." },
  { unit: "Unit 2", q: "Inbound links that boost ranking are called:", options: ["Backlinks", "Hyperlinks only", "Keywords", "Cookies"], correct: 0, why: "Quality backlinks raise a site's authority and ranking." },
  { unit: "Unit 3", q: "Which is a low-level language?", options: ["Python", "Assembly", "Java", "JavaScript"], correct: 1, why: "Assembly is hardware-dependent and close to machine code." },
  { unit: "Unit 3", q: "The three key features of OOP are:", options: ["Encapsulation, inheritance, polymorphism", "Loops, arrays, functions", "HTML, CSS, JS", "TCP, IP, UDP"], correct: 0, why: "OOP core: encapsulation, inheritance, polymorphism." },
  { unit: "Unit 3", q: "Hiding an object's internal data is called:", options: ["Inheritance", "Polymorphism", "Encapsulation", "Compilation"], correct: 2, why: "Encapsulation exposes only a controlled interface." },
  { unit: "Unit 3", q: "A program translated all at once into an executable uses a:", options: ["Interpreter", "Compiler", "Assembler only", "Browser"], correct: 1, why: "A compiler translates the whole program before running." },
  { unit: "Unit 3", q: "An interpreter executes code:", options: ["All at once", "Line by line at run time", "Never", "Only in binary"], correct: 1, why: "Interpreters translate and run line by line." },
  { unit: "Unit 4", q: "Which tool controls the layout, colours and fonts of a page?", options: ["HTML", "CSS", "JavaScript", "SQL"], correct: 1, why: "CSS handles presentation/styling." },
  { unit: "Unit 4", q: "Which tool adds interactivity to web pages?", options: ["HTML", "CSS", "JavaScript", "PHP"], correct: 2, why: "JavaScript adds dynamic, interactive behaviour." },
  { unit: "Unit 4", q: "Frontend development is also called:", options: ["Server-side", "Client-side", "Database-side", "Kernel-side"], correct: 1, why: "Frontend = client-side, what the user sees in the browser." },
  { unit: "Unit 4", q: "Unpaid search listings shown by relevance are:", options: ["Sponsored results", "Organic results", "Banner ads", "Pop-ups"], correct: 1, why: "Organic results are earned, not bought." },
  { unit: "Unit 4", q: "SEO stands for:", options: ["Secure Email Option", "Search Engine Optimization", "System Error Output", "Server Edge Onload"], correct: 1, why: "SEO = Search Engine Optimization." },
  { unit: "Unit 4", q: "Earning quality backlinks is part of:", options: ["On-page SEO", "Off-page SEO", "HTML coding", "Encryption"], correct: 1, why: "Backlinks come from outside your site = off-page SEO." },
  { unit: "Unit 5", q: "Malware that spreads by itself across networks without a host is a:", options: ["Virus", "Worm", "Trojan", "Cookie"], correct: 1, why: "A worm is self-replicating and needs no host file." },
  { unit: "Unit 5", q: "Malware disguised as useful software is a:", options: ["Worm", "Trojan", "Virus", "Firewall"], correct: 1, why: "A Trojan tricks users by pretending to be legitimate." },
  { unit: "Unit 5", q: "Malware that encrypts data and demands payment is:", options: ["Spyware", "Ransomware", "Adware", "A worm"], correct: 1, why: "Ransomware locks data until a ransom is paid." },
  { unit: "Unit 5", q: "Which virus routine carries out the harmful action?", options: ["Infection", "Concealment", "Trigger", "Payload"], correct: 3, why: "The payload performs the damage (e.g. deleting data)." },
  { unit: "Unit 5", q: "Fake emails to steal personal data describe:", options: ["Phishing", "Encryption", "Caching", "Indexing"], correct: 0, why: "Phishing uses fake messages/sites to steal data." },
  { unit: "Unit 5", q: "A DDoS attack is usually carried out using a:", options: ["Single PC", "Botnet", "Firewall", "Compiler"], correct: 1, why: "A botnet of infected 'zombie' computers floods the target." },
  { unit: "Unit 6", q: "Firewall filters can be based on:", options: ["IP addresses and ports", "Screen size", "Font type", "Battery level"], correct: 0, why: "Firewalls filter by IPs, ports, protocols, domains, keywords." },
  { unit: "Unit 6", q: "Detecting NEW malware by analysing behaviour is:", options: ["Signature-based scanning", "Heuristic scanning", "Indexing", "Crawling"], correct: 1, why: "Heuristic scanning spots suspicious behaviour, incl. zero-day." },
  { unit: "Unit 6", q: "A unique code pattern identifying known malware is a:", options: ["Signature", "Cookie", "Token", "Cipher"], correct: 0, why: "A signature is malware's digital fingerprint." },
  { unit: "Unit 6", q: "Encryption using one shared secret key is:", options: ["Asymmetric", "Symmetric", "Hashing", "Public-key"], correct: 1, why: "Symmetric uses the same key to encrypt and decrypt." },
  { unit: "Unit 6", q: "Asymmetric encryption uses:", options: ["One shared key", "A public and a private key", "No key", "A signature"], correct: 1, why: "A key pair: public to encrypt, private to decrypt." },
  { unit: "Unit 6", q: "Trying every possible key to break a cipher is:", options: ["Cryptanalysis", "Brute-force attack", "Phishing", "Heuristics"], correct: 1, why: "Brute force tests all keys until one works." },
  { unit: "Unit 6", q: "A CAPTCHA is used to:", options: ["Encrypt data", "Tell humans from bots", "Compile code", "Index pages"], correct: 1, why: "CAPTCHA blocks automated bots from forms/logins." },
  { unit: "Unit 6", q: "The Turing test checks whether a machine can:", options: ["Compute faster than humans", "Be told apart from a human in conversation", "Encrypt data", "Browse the web"], correct: 1, why: "If a judge can't tell machine from human, it passes." },
  { unit: "Unit 7", q: "Classification is which type of learning?", options: ["Unsupervised", "Supervised", "Reinforcement only", "No learning"], correct: 1, why: "Classification uses labelled training data = supervised." },
  { unit: "Unit 7", q: "Grouping unlabelled data by similarity is:", options: ["Classification", "Clustering", "Compilation", "Crawling"], correct: 1, why: "Clustering is unsupervised — no predefined labels." },
  { unit: "Unit 7", q: "Backpropagation adjusts a network's:", options: ["Pixels", "Weights", "IP address", "Cables"], correct: 1, why: "It propagates error back to update connection weights." },
  { unit: "Unit 7", q: "Neural networks are called 'black boxes' because:", options: ["They are physically black", "Their internal reasoning is hard to interpret", "They have no inputs", "They never work"], correct: 1, why: "Inputs/outputs are visible but internal logic is opaque." },
  { unit: "Unit 7", q: "IoT stands for:", options: ["Internet of Things", "Input output Transfer", "Index of Tags", "Internal Online Tool"], correct: 0, why: "IoT = Internet of Things — connected physical objects." },
  { unit: "Unit 7", q: "A major problem of IoT is:", options: ["Too few devices", "Weak security and privacy", "No data", "It needs no internet"], correct: 1, why: "Many IoT devices are insecure and collect personal data." },
  { unit: "Unit 7", q: "HLAI stands for:", options: ["High-Level API", "Human-Level Artificial Intelligence", "Hyper Link AI", "Hardware Logic AI"], correct: 1, why: "HLAI = AI matching human ability on any intellectual task." }
];
