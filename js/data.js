// Source: "Вопросы_ИТ_КМ 3.pdf" — Essential English for IT students. Part 2.
// 45 exam questions with verified model answers (English, HTML, condensed).
// Answers verified against course materials + video tasks. UI is Russian.

const QUESTIONS = [
  {
    id: 1,
    unit: "Unit 1 — The Internet",
    q: "What types of wired internet connections do you know? Talk about each of them in detail.",
    answer: `<p>Three wired types: <b>DSL</b>, <b>Cable</b>, <b>Fiber-optic</b>.</p>
<ul>
<li><b>DSL</b> — copper phone line, data on higher frequencies (voice + data together). Common: <b>ADSL</b> (download faster than upload). Low-cost.</li>
<li><b>Cable</b> — coaxial TV cable to a cable modem. Reliable, but bandwidth <em>shared with neighborhood</em> → slows at peak hours.</li>
<li><b>Fiber-optic</b> — data as pulses of light. Fastest, low signal loss over long distances.</li>
</ul>`
  },
  {
    id: 2,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between DSL and dial-up connection?",
    answer: `<p>Both use the copper phone line, differ in <b>frequencies</b>.</p>
<ul>
<li><b>Dial-up</b> — same frequency for voice + data → one at a time (no calls while online). Slowest, ~dial a number.</li>
<li><b>DSL</b> — higher separate frequencies → voice + data <em>simultaneously</em>. Much faster, always-on.</li>
</ul>`
  },
  {
    id: 3,
    unit: "Unit 1 — The Internet",
    q: "Talk about the three wireless internet access technologies.",
    answer: `<p>Three wireless: <b>Wi-Fi</b>, <b>satellite</b>, <b>cellular</b>.</p>
<ul>
<li><b>Wi-Fi</b> — radio waves, local networking; device connects to a wireless router.</li>
<li><b>Satellite</b> — access via geostationary satellite + dish; some delay; good where no cable/DSL.</li>
<li><b>Cellular</b> — land split into "cells", each a cell tower with its own frequencies (avoid interference); voice + data.</li>
</ul>`
  },
  {
    id: 4,
    unit: "Unit 1 — The Internet",
    q: "What are the three types of DSL connections? Talk about each of them.",
    answer: `<p>Three DSL types (from the video):</p>
<ul>
<li><b>ADSL</b> (Asymmetric) — download &gt; upload. Home use.</li>
<li><b>SDSL</b> (Symmetric) — equal up/down. Business, servers.</li>
<li><b>VDSL</b> (Very-high-bit-rate) — fastest, but only over <em>short distances</em>.</li>
</ul>
<p>All have a dedicated line (no bandwidth sharing).</p>`
  },
  {
    id: 5,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between packet switching and circuit switching?",
    answer: `<ul>
<li><b>Circuit switching</b> — dedicated channel reserved <em>before</em> transfer (phone calls). Data goes whole, same route. Wastes bandwidth when idle.</li>
<li><b>Packet switching</b> — data split into <b>packets</b> (header + payload), routed separately, reassembled at destination. Efficient. <em>The Internet uses it.</em></li>
</ul>`
  },
  {
    id: 6,
    unit: "Unit 1 — The Internet",
    q: "What are the two subtypes of packet switching? Talk about each of them.",
    answer: `<ul>
<li><b>Datagram</b> — no dedicated channel; packets routed individually, reassembled by sequence number. Most efficient bandwidth use.</li>
<li><b>Virtual circuit</b> — connection set up first, then packets follow that path <em>in order</em>. Mixes circuit + packet features.</li>
</ul>`
  },
  {
    id: 7,
    unit: "Unit 1 — The Internet",
    q: "Talk about the TCP/IP model — the layers and protocols.",
    answer: `<p>TCP/IP = protocol stack, <b>4 layers</b>:</p>
<ul>
<li><b>Application</b> — HTTP, FTP, SMTP (user services).</li>
<li><b>Transport</b> — TCP (reliable) & UDP (real-time). Host-to-host.</li>
<li><b>Internet</b> — IP: addressing + routing of packets.</li>
<li><b>Network Interface</b> — physical delivery; e.g. Ethernet (LAN).</li>
</ul>`
  },
  {
    id: 8,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between TCP and UDP?",
    answer: `<p>Both transport-layer.</p>
<ul>
<li><b>TCP</b> — <em>guarantees delivery</em> via acknowledgements, resends lost packets. Reliable. For web, files, email.</li>
<li><b>UDP</b> — no connection check, no resend. Faster, low overhead, unreliable. For calls, streaming, gaming.</li>
</ul>`
  },
  {
    id: 9,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between the Internet and the WWW?",
    answer: `<ul>
<li><b>Internet</b> — the global physical network (cables, routers, TCP/IP). <em>Pre-existed</em> the Web.</li>
<li><b>WWW</b> — info system <em>on top of</em> the Internet: resources by URL, accessed via browser, hypertext + HTML.</li>
</ul>
<p>Invented by <b>Tim Berners-Lee</b>, 1989, CERN.</p>`
  },
  {
    id: 10,
    unit: "Unit 2 — Search Engines",
    q: "Talk about the three types of search engines and their distinctive features.",
    answer: `<ul>
<li><b>Crawler-based</b> (Google, Bing) — build index <em>automatically</em> via spider following links. Crawl→index→rank.</li>
<li><b>Human-powered directories</b> (Yahoo! Directory) — human editors review URL + description; match against description, not page content.</li>
<li><b>Meta-search</b> (Dogpile) — no own index; sends query to other engines, merges results.</li>
</ul>`
  },
  {
    id: 11,
    unit: "Unit 2 — Search Engines",
    q: "What are the three steps every crawler-based search engine takes before displaying search results?",
    answer: `<ul>
<li><b>Crawling</b> — spider (Googlebot) fetches pages, follows links to find new URLs.</li>
<li><b>Indexing</b> — info stored in a huge database (index); identifies <em>keywords</em> describing each page.</li>
<li><b>Ranking</b> — matches query to indexed pages, orders most→least relevant. Each engine has its own algorithm.</li>
</ul>`
  },
  {
    id: 12,
    unit: "Unit 2 — Search Engines",
    q: "What makes meta-search engines different from other types of search engines?",
    answer: `<p>No <em>own index/database</em>. Acts as middleman: sends query to <b>several engines</b> at once, merges top results, removes duplicates, re-ranks.</p>
<p>Examples: <b>Dogpile, MetaCrawler, SavvySearch</b>. Benefit: broad aggregated view in one query.</p>`
  },
  {
    id: 13,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between crawler-based search engines and human-powered directories?",
    answer: `<ul>
<li><b>Crawler-based</b> — listings built <em>automatically</em> by spider; scales to whole web, picks up page changes.</li>
<li><b>Human-powered</b> — editors manually approve URL + description; match against <em>description</em>, not page content; small, slow.</li>
</ul>
<p>Automated engines nearly wiped directories out.</p>`
  },
  {
    id: 14,
    unit: "Unit 2 — Search Engines",
    q: "What factors determine higher ranking in search results? What aspects can the ranking algorithm take into consideration?",
    answer: `<p>Each engine = own algorithm. Factors:</p>
<ul>
<li>Search term in the <b>page title</b>.</li>
<li>Words appearing <b>close together</b>.</li>
<li>Number of <b>backlinks</b> (Google's PageRank → authority).</li>
<li>Content <em>relevance</em> to keywords.</li>
<li>How recently updated.</li>
</ul>`
  },
  {
    id: 15,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between a search engine and a web browser?",
    answer: `<ul>
<li><b>Browser</b> — runs <em>locally</em>; decodes a web address, reads the site's code (HTML/CSS/JS), renders <em>one site</em>.</li>
<li><b>Search engine</b> — runs on <em>remote servers</em>; returns a <em>list</em> of indexed sites matching a query. Finds, doesn't display.</li>
</ul>`
  },
  {
    id: 16,
    unit: "Unit 2 — Search Engines",
    q: "Talk about any four search engines that can be used as an alternative to Google.",
    answer: `<ul>
<li><b>Bing</b> — Microsoft's; rewards points, US/UK popular.</li>
<li><b>Baidu</b> — China leader (70%+), heavily censored, in Mandarin.</li>
<li><b>Yandex</b> — Russia (~60%); "Yet Another iNDEXer".</li>
<li><b>Ecosia</b> — CO2-neutral, ~80% ad revenue plants trees (~45 searches = 1 tree).</li>
</ul>`
  },
  {
    id: 17,
    unit: "Unit 3 — Programming Languages",
    q: "How can programming languages be classified? Provide examples and talk about the distinctive features of each type.",
    answer: `<p>By abstraction level: <b>low-level</b> vs <b>high-level</b>.</p>
<ul>
<li><b>Low-level</b> — <b>machine code</b> (0s/1s) and <b>assembly</b> (ADD, SUB; via assembler). Hardware-specific, fast, hard to write.</li>
<li><b>High-level</b> — closer to English, portable. E.g. <b>C, C++, Java, Python</b>. Need a <b>compiler/interpreter</b>.</li>
</ul>`
  },
  {
    id: 18,
    unit: "Unit 3 — Programming Languages",
    q: "What is OOP? What are the three key features of OOP? Talk about each of them.",
    answer: `<p><b>OOP</b> = code organized around <b>objects</b> (data + instructions). 3 features:</p>
<ul>
<li><b>Encapsulation</b> — bundle data + instructions into objects.</li>
<li><b>Inheritance</b> — a class (Squares) inherits properties of another (Rectangles).</li>
<li><b>Polymorphism</b> — same instruction, different objects react differently.</li>
</ul>
<p>→ <b>code reusability</b>.</p>`
  },
  {
    id: 19,
    unit: "Unit 3 — Programming Languages",
    q: "What is the difference between a compiler, an interpreter, and an assembler?",
    answer: `<p>All translators:</p>
<ul>
<li><b>Assembler</b> — assembly → machine code.</li>
<li><b>Compiler</b> — high-level → machine code <b>all at once</b> (fast executable).</li>
<li><b>Interpreter</b> — high-level, translates + runs <b>line by line</b> (slower, easier to debug).</li>
</ul>`
  },
  {
    id: 20,
    unit: "Unit 4 — Web Design",
    q: "What are the three main tools used in web design? Talk about each of them.",
    answer: `<ul>
<li><b>HTML</b> — <em>structure</em> of the page via tags (text, links, images).</li>
<li><b>CSS</b> — <em>appearance</em>: styling + layout, consistent across pages.</li>
<li><b>JavaScript</b> — <em>behavior</em>: interactivity, animations, dynamic content.</li>
</ul>`
  },
  {
    id: 21,
    unit: "Unit 4 — Web Design",
    q: "What is the difference between frontend and backend web development?",
    answer: `<ul>
<li><b>Frontend</b> — <em>visible part</em> in the browser (buttons, layout). Tools: <b>HTML, CSS, JS</b>.</li>
<li><b>Backend</b> — <em>server-side</em>, hidden processes. Databases (MySQL, MongoDB), servers (Nginx, Apache), languages (PHP, Python, Java).</li>
</ul>`
  },
  {
    id: 22,
    unit: "Unit 4 — Web Design",
    q: "What are the advantages and disadvantages of using website builders?",
    answer: `<ul>
<li><b>Pros</b> — no coding, templates, WYSIWYG + drag-and-drop, cheap/fast, easy customization, add-ons (SEO, galleries, carts).</li>
<li><b>Cons</b> — <em>limited customization</em>, functionality restrictions, ads/branding on free tier, weaker SEO/performance, platform lock-in, generic look.</li>
</ul>`
  },
  {
    id: 23,
    unit: "Unit 4 — Web Design",
    q: "What is SEO? What is its main purpose?",
    answer: `<p><b>SEO</b> (Search Engine Optimization) = improvements that help a site rank higher in the <b>SERP</b>.</p>
<p>Purpose: get visitors <b>without paying for ads</b> → <em>organic traffic</em>. Matters: most users stay on page 1; top listings get most clicks.</p>`
  },
  {
    id: 24,
    unit: "Unit 2/4 — SEO",
    q: "What is the difference between on-page SEO and off-page SEO?",
    answer: `<ul>
<li><b>On-page</b> — done <em>on your site</em>: keywords in titles/headings/content, meta tags, internal links, load speed, mobile-friendly, alt text.</li>
<li><b>Off-page</b> — done <em>outside</em>: <b>backlinks</b> (most important), social signals, guest posts, reviews.</li>
</ul>`
  },
  {
    id: 25,
    unit: "Unit 4 — Web Design",
    q: "What is meant by 'organic results'?",
    answer: `<p><b>Organic results</b> = listings shown <em>naturally</em> by relevance (the algorithm), <b>not paid for</b>. Earned through SEO.</p>
<p>Opposite of <b>paid/sponsored</b> results (labeled "Ad"). SEO's goal = rank high in organic results.</p>`
  },
  {
    id: 26,
    unit: "Unit 5 — Malware",
    q: "What is malware? What types of malware do you know? Talk about each one.",
    answer: `<p><b>Malware</b> = malicious software to damage devices or steal info.</p>
<ul>
<li><b>Virus</b> — infects host programs, replicates.</li>
<li><b>Worm</b> — standalone, self-spreads, builds botnets.</li>
<li><b>Trojan</b> — fake freeware, no replication, opens <em>backdoor</em>.</li>
<li><b>Ransomware</b> — encrypts data, demands payment.</li>
<li><b>Spyware</b> / <b>Keylogger</b> — track activity / record keystrokes.</li>
<li><b>Adware</b> — unwanted ads. <b>Miner</b> — hijacks CPU/GPU for crypto.</li>
</ul>`
  },
  {
    id: 27,
    unit: "Unit 5 — Malware",
    q: "What are the four routines of a virus? Talk about the function of each.",
    answer: `<ul>
<li><b>Misdirection</b> — hides the virus.</li>
<li><b>Reproduction</b> — copies itself (<em>only mandatory part</em>; without it = Trojan).</li>
<li><b>Trigger</b> — activates payload at a time/event.</li>
<li><b>Payload</b> — does the damage (joke → deleting files).</li>
</ul>
<p>Infection uses a <b>JUMP command</b> to run virus before host.</p>`
  },
  {
    id: 28,
    unit: "Unit 5 — Malware",
    q: "What types of cybercrime do you know? Talk about each of them.",
    answer: `<ul>
<li><b>Phishing</b> — fake emails/sites steal data.</li>
<li><b>DDoS</b> — overload servers from many sources.</li>
<li><b>Website defacement</b> — vandalize a page's look.</li>
<li><b>Salami shaving</b> — tiny thefts from many accounts.</li>
<li><b>Piggybacking</b> — use an unprotected network.</li>
<li><b>Software piracy</b>, <b>hijacking</b>, <b>backdoor</b>.</li>
</ul>`
  },
  {
    id: 29,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a worm?",
    answer: `<ul>
<li><b>Virus</b> — needs a <em>host file</em> + human action; stays dormant until the file runs, then replicates.</li>
<li><b>Worm</b> — <em>standalone</em>; self-replicates and spreads across the network independently, no host, no human action.</li>
</ul>`
  },
  {
    id: 30,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a Trojan?",
    answer: `<ul>
<li><b>Virus</b> — <em>replicates itself</em>, infects host programs.</li>
<li><b>Trojan</b> — <em>does not replicate</em>; disguised as legit freeware, opens a <b>backdoor</b> for unauthorized access.</li>
</ul>
<p>Payload but no reproduction routine = Trojan.</p>`
  },
  {
    id: 31,
    unit: "Unit 5/6 — Security",
    q: "What is the difference between DoS and DDoS attack? How is a DDoS attack performed?",
    answer: `<ul>
<li><b>DoS</b> — flood from a <em>single source</em>; block the one IP.</li>
<li><b>DDoS</b> — flood from <em>many sources</em>; harder to block.</li>
</ul>
<p><b>How</b>: a <b>botnet</b> (infected computers) all hit the same target at once → server overwhelmed.</p>`
  },
  {
    id: 32,
    unit: "Unit 6 — Data Security",
    q: "What is a firewall? What can firewall filters be based on?",
    answer: `<p><b>Firewall</b> = software + hardware filtering incoming traffic to protect a network. Uses <b>packet filtering</b> → permit/deny.</p>
<p>Filters based on: <b>IP addresses, domain names, ports, protocols, words/phrases</b>. Types: host-based & network-based.</p>`
  },
  {
    id: 33,
    unit: "Unit 6 — Data Security",
    q: "What is the difference between signature-based scanning and heuristic scanning?",
    answer: `<ul>
<li><b>Signature-based</b> — match files against a <em>database of known malware</em>. Catches only known threats.</li>
<li><b>Heuristic</b> — rules/algorithms spot suspicious behavior → catches <b>new malware</b> with no exact match.</li>
</ul>
<p>Most antivirus use both.</p>`
  },
  {
    id: 34,
    unit: "Unit 6 — Data Security",
    q: "What is a signature?",
    answer: `<p>A virus's unique distinguishing feature — <em>like a fingerprint</em>. Makes it <b>recognizable</b> to antivirus.</p>
<p>Antivirus keeps a database of signatures, scans files against it. No signature yet → rely on <em>heuristic scanning</em>.</p>`
  },
  {
    id: 35,
    unit: "Unit 6 — Data Security",
    q: "What are the two main types of encryption? What is the difference?",
    answer: `<ul>
<li><b>Symmetric</b> — <em>same key</em> encrypts + decrypts. Fast, but key distribution is risky.</li>
<li><b>Asymmetric (public key)</b> — <b>private key</b> (secret) + <b>public key</b> (shared). Slower, solves key distribution.</li>
</ul>
<p>Also gives authentication, integrity, non-repudiation.</p>`
  },
  {
    id: 36,
    unit: "Unit 6 — Data Security",
    q: "What two methods of breaking a cipher are there?",
    answer: `<ul>
<li><b>Brute force</b> — try random keys until one works. Key size ↑ → harder (practically impossible now).</li>
<li><b>Cryptanalysis</b> — find a <em>weakness/flaw</em> in the cipher; a mathematical shortcut.</li>
</ul>`
  },
  {
    id: 37,
    unit: "Unit 6 — Data Security",
    q: "What is a CAPTCHA? Where is this tool implemented?",
    answer: `<p><b>CAPTCHA</b> = Completely Automated Public Turing test to tell Computers and Humans Apart. Distinguishes <em>humans from bots</em> (distorted text, image puzzles, "I'm not a robot").</p>
<p>Used on: <b>login & signup forms, comment sections, ticket pages, online voting</b>.</p>`
  },
  {
    id: 38,
    unit: "Unit 6 — Data Security",
    q: "What is the Turing test? Talk about its procedure.",
    answer: `<p><b>Turing test</b> — proposed by <b>Alan Turing, 1950</b> ("Imitation Game"). Checks if a machine can think.</p>
<ul>
<li>Two contestants: 1 human, 1 computer; a <b>judge</b> decides which is which via text.</li>
<li>Judge accuracy &lt; 50% → machine is "intelligent".</li>
</ul>
<p><b>2014: Eugene Goostman</b> — posed as a 13-year-old Ukrainian boy.</p>`
  },
  {
    id: 39,
    unit: "Unit 7 — Future of IT",
    q: "What is the difference between classification and clustering?",
    answer: `<ul>
<li><b>Classification</b> — sort data into <b>predefined</b> classes (known in advance). <em>Supervised</em> learning (labels). E.g. spam/not-spam.</li>
<li><b>Clustering</b> — group data into <b>undefined</b> categories the network finds itself. <em>Unsupervised</em> (no labels).</li>
</ul>`
  },
  {
    id: 40,
    unit: "Unit 7 — Future of IT",
    q: "What is backpropagation?",
    answer: `<p><b>Backpropagation</b> = feedback process a network learns by.</p>
<ul>
<li>Compares actual output vs intended output → the <b>error</b>.</li>
<li>Uses error to <b>modify weights</b>, working <em>backward</em>: output → hidden → input.</li>
</ul>
<p>Repeats until error ~0.</p>`
  },
  {
    id: 41,
    unit: "Unit 7 — Future of IT",
    q: "What is an artificial neural network? What tasks can neural networks accomplish?",
    answer: `<p><b>ANN</b> = computer model simulating the brain via densely interconnected <b>nodes</b> (neurons) to learn humanlike.</p>
<p>Tasks: <b>face recognition, autonomous driving, machine translation, fraud detection, classification, clustering, prediction</b>. <em>Trained, not programmed.</em></p>`
  },
  {
    id: 42,
    unit: "Unit 7 — Future of IT",
    q: "In what way is an artificial neural network similar to the biological brain? Describe its structure.",
    answer: `<p>Like brain neurons across <em>synapses</em>, an ANN has interconnected nodes with weighted links.</p>
<p>Structure — <b>units</b> in layers:</p>
<ul>
<li><b>Input units</b> — receive info.</li>
<li><b>Hidden units</b> — process (the bulk).</li>
<li><b>Output units</b> — give the response.</li>
</ul>
<p>Usually <b>fully connected</b>; weights positive (excite) or negative (inhibit).</p>`
  },
  {
    id: 43,
    unit: "Unit 7 — Future of IT",
    q: "Why are neural networks compared to 'black boxes'?",
    answer: `<p>You feed in data and get answers, but the <em>internal decision-making isn't accessible</em> — you don't know <b>how</b> the answer was produced.</p>
<p>Problem: hard to <b>debug</b>, <b>trust</b>, check for bias, or <b>explain</b> → field of <em>explainable AI</em>.</p>`
  },
  {
    id: 44,
    unit: "Unit 7 — Future of IT",
    q: "What is IoT? What are the major problems in using the IoT technology?",
    answer: `<p><b>IoT</b> = network of physical objects with <b>unique identifiers (UIDs)</b> transferring data with no human interaction (e.g. car sensors, heart monitor).</p>
<p>Problems: <b>security risk</b>, <b>massive data management</b>, <b>bug cascading</b>, <b>no compatibility standard</b>.</p>`
  },
  {
    id: 45,
    unit: "Unit 7 — Future of IT",
    q: "What is HLAI? What are the risks of using HLAI?",
    answer: `<p><b>HLAI</b> = Human-Like Artificial Intelligence — AI mimicking how humans think.</p>
<p>Risks: excessive focus = a <b>trap</b>; machines <b>substitute human labor</b> → workers lose bargaining power, grow dependent; power concentrates in a few owners.</p>
<p>Better path: <b>augment</b> humans, not mimic.</p>`
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
