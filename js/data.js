// Source: "Вопросы_ИТ_КМ 3.pdf" — Essential English for IT students. Part 2.
// 45 exam questions with verified model answers (English, HTML formatting).
// Answers verified against course materials + video tasks. UI is Russian.

const QUESTIONS = [
  {
    id: 1,
    unit: "Unit 1 — The Internet",
    q: "What types of wired internet connections do you know? Talk about each of them in detail.",
    answer: `<p>There are three main types of wired internet connections: <b>DSL</b>, <b>Cable Internet</b>, and <b>Fiber-optic Internet</b>.</p>
<p><b>DSL (Digital Subscriber Line)</b> uses the standard copper telephone lines but transmits digital signals over higher frequency bands, so voice and data can run simultaneously. The DSL signal is pulled out from the phone line as it enters the premises and is wired separately to a DSL modem. The most common variant is <b>ADSL</b> — asymmetric, because the download speed is faster than the upload speed. DSL is a low-cost option.</p>
<p><b>Cable Internet</b> uses the cable TV infrastructure. The ISP sends a data signal through the coaxial cable to a cable modem, which connects to devices via Ethernet or Wi-Fi. It's reliable and not subject to outages from storms, but bandwidth is <em>shared with the neighborhood</em>, so speed can drop during peak hours.</p>
<p><b>Fiber-optic Internet</b> uses fiber-optic cables that carry data as pulses of light — presence of light = binary 1, absence = 0. It's the fastest option, with low attenuation and low distortion of the signal over long distances. Faster load times and higher-quality streaming.</p>`
  },
  {
    id: 2,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between DSL and dial-up connection?",
    answer: `<p>The main difference is in <b>how frequencies are used</b> on the copper telephone line.</p>
<p><b>Dial-up</b> uses the same frequency to carry both voice and data signals over the copper wire. Because of this, only one service could be provided at a time — it was <em>impossible to make a phone call and browse the Internet simultaneously</em>. The name comes from the fact that the connection was set up by dialing a phone number.</p>
<p><b>DSL</b> uses higher frequency bands for data transmission, which are separated from the voice frequency. So DSL service can be delivered <em>simultaneously</em> with wired telephone service over the same telephone line. Also, DSL is much faster than dial-up, which was the slowest way to access the Internet.</p>`
  },
  {
    id: 3,
    unit: "Unit 1 — The Internet",
    q: "Talk about the three wireless internet access technologies.",
    answer: `<p>The three widely used wireless technologies are <b>Wi-Fi</b>, <b>satellite</b>, and <b>cellular</b>.</p>
<p><b>Wi-Fi</b> uses radio waves to wirelessly connect devices and is commonly applied for local area networking. To access the Internet, a device (tablet, smartphone) has to be connected over Wi-Fi to a wireless router.</p>
<p><b>Satellite Internet</b> usually allows a user to access the Net via a geostationary satellite that orbits the Earth. Because signals must travel long distances from Earth up to the satellite and back, there's a delay — but modern tech minimizes this latency. You need a satellite dish for two-way communication and a modem. It's a good solution where conventional cable or DSL isn't available.</p>
<p><b>Cellular network</b> is a communication network distributed over land areas called "cells". Each cell has at least one fixed-location transceiver (cell tower), but more commonly three sites. These base stations provide network coverage for voice and data. Each cell uses a different set of frequencies from its neighbors to avoid interference.</p>`
  },
  {
    id: 4,
    unit: "Unit 1 — The Internet",
    q: "What are the three types of DSL connections? Talk about each of them.",
    answer: `<p>The three types of DSL mentioned in the video are <b>ADSL</b>, <b>SDSL</b>, and <b>VDSL</b>.</p>
<p><b>ADSL (Asymmetric DSL)</b> — the most common consumer type. Download speed is significantly faster than upload speed, which suits regular home use where people mostly consume content (streaming, browsing) more than they upload.</p>
<p><b>SDSL (Symmetric DSL)</b> — upload and download speeds are equal. Used more often in business settings where uploads matter as much as downloads (e.g. hosting servers, video conferencing).</p>
<p><b>VDSL (Very-high-bit-rate DSL)</b> — much faster than ADSL, but works only over <em>shorter distances</em> from the provider's equipment. Used where higher speeds are needed and the customer is close enough to the central office.</p>
<p>All three share the DSL property: they don't share bandwidth with the neighborhood — each subscriber has a dedicated line.</p>`
  },
  {
    id: 5,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between packet switching and circuit switching?",
    answer: `<p><b>Circuit switching</b> is connection-oriented. A dedicated channel is established between two nodes <em>before</em> communication starts — three steps: connection making, data transfer, connection removing. Data is not divided into units; the complete data goes through the same route. Used in public switched telephone networks. Downside: while the circuit is reserved, no other device can use that path, even if it's idle — <em>wasted bandwidth</em>.</p>
<p><b>Packet switching</b> divides data into small units called <b>packets</b>. Each packet has a header (with routing info) and a payload (the data). Packets can travel different routes and are reassembled at the destination. If the network is congested, some packets can be rerouted through a less congested path. Much more efficient use of bandwidth. <em>The Internet is a packet-switched network.</em></p>`
  },
  {
    id: 6,
    unit: "Unit 1 — The Internet",
    q: "What are the two subtypes of packet switching? Talk about each of them.",
    answer: `<p>The two approaches are <b>datagram packet switching</b> and <b>virtual circuit switching</b>.</p>
<p><b>Datagram packet switching</b> — there is <em>no dedicated channel</em>. Packets are routed individually through different paths and reassembled at the destination based on the sequence number of each packet. The major advantage is the most efficient use of Internet bandwidth.</p>
<p><b>Virtual circuit switching</b> is a connection-oriented technique that combines features of circuit switching and datagram packet switching. A virtual connection is first established between source and destination, and then packets are routed along this path <em>sequentially</em>. So you get some of the predictability of circuit switching with the efficiency of packets.</p>`
  },
  {
    id: 7,
    unit: "Unit 1 — The Internet",
    q: "Talk about the TCP/IP model — the layers and protocols.",
    answer: `<p>TCP/IP is a stack of protocols used to interconnect network devices on the Internet. It specifies how data is exchanged — how it's broken into packets, addressed, routed, and received. It has <b>four layers</b>:</p>
<p><b>1. Application layer</b> — topmost layer. Includes protocols used by applications to provide user services. Most common: <b>HTTP</b> (web browsers and websites), <b>FTP</b> (file transfer between computers), <b>SMTP</b> (emails).</p>
<p><b>2. Transport layer</b> — performs host-to-host communication. Main protocols: <b>TCP</b> (guarantees delivery through acknowledgements, retransmits missing packets) and <b>UDP</b> (does not verify the connection, used for real-time communication like phone calls).</p>
<p><b>3. Internet layer</b> — responsible for the logical transmission of data over the entire network. Primary protocol is <b>IP</b>, which defines how to address and route each packet. Both origin and destination IP addresses are attached to the packet; each gateway checks the IP address to decide where to forward.</p>
<p><b>4. Network Interface layer</b> — bottom layer. Includes protocols required to deliver data over a physical medium. The best-known is <b>Ethernet</b>, used in LAN environments (offices, homes, universities).</p>`
  },
  {
    id: 8,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between TCP and UDP?",
    answer: `<p>Both are transport-layer protocols, but they behave very differently.</p>
<p><b>TCP (Transmission Control Protocol)</b> <em>guarantees the delivery</em> of data through an acknowledgement system and ensures the transmission of missing packets — if a packet doesn't arrive, it's resent. Connection-oriented and reliable. Used where data integrity matters more than speed (web pages, file transfers, email).</p>
<p><b>UDP (User Datagram Protocol)</b> does <em>not verify</em> the connection between sender and receiver. No acknowledgements, no retransmission. Faster and has lower overhead, but unreliable. Used for <b>real-time communication</b> — phone calls, video streaming, online gaming — where some packet loss is acceptable but delay isn't.</p>`
  },
  {
    id: 9,
    unit: "Unit 1 — The Internet",
    q: "What is the difference between the Internet and the WWW?",
    answer: `<p>They're often confused but they're not the same thing.</p>
<p>The <b>Internet</b> is the underlying global network of interconnected devices that transmits data. It <em>pre-existed</em> the Web. It's the infrastructure — cables, routers, satellites, protocols like TCP/IP.</p>
<p>The <b>World Wide Web (WWW)</b> is an information system <em>built on top of</em> the Internet, where documents and other web resources are identified by a URL and accessed through a software application called a web browser. It's a hypertext-based system — hypertext is text that contains hyperlinks to other documents. Browsers understand <b>HTML</b> to display pages.</p>
<p>The Web was invented by <b>Tim Berners-Lee</b> in 1989 at CERN near Geneva. He wrote the first web browser in 1990. The Web entered everyday use in 1993–1994.</p>`
  },
  {
    id: 10,
    unit: "Unit 2 — Search Engines",
    q: "Talk about the three types of search engines and their distinctive features.",
    answer: `<p>Search engines fall into three categories: <b>crawler-based</b>, <b>human-powered directories</b>, and <b>meta-search engines</b>.</p>
<p><b>Crawler-based</b> (Google, Bing, Yahoo!) — create their listings <em>automatically</em> using a special program called a crawler or spider that finds new and updated content by following links. The three steps are crawling, indexing, ranking.</p>
<p><b>Human-powered directories</b> (Yahoo! Directory, Open Directory, LookSmart) — depend on human editors. A short description and URL are submitted, then manually reviewed and added to the appropriate category or rejected. Search matches the user's keywords with the human-written description — changes to the actual page content are not taken into consideration. <em>Nearly wiped out by automated engines.</em></p>
<p><b>Meta-search engines</b> (Dogpile, MetaCrawler, SavvySearch) — don't have their own index. They send the user's query to several other search engines and compile top results from each into one overall list, removing redundancy.</p>`
  },
  {
    id: 11,
    unit: "Unit 2 — Search Engines",
    q: "What are the three steps every crawler-based search engine takes before displaying search results?",
    answer: `<p>The three steps are <b>crawling</b>, <b>indexing</b>, and <b>ranking</b>.</p>
<p><b>Crawling</b> — a special program called a crawler or spider (e.g. Googlebot) starts by fetching a few webpages, then follows the links on those pages to find new URLs. Content can be a webpage, image, or video — it's all discovered by links. Data mining techniques define which pages should be crawled and how often.</p>
<p><b>Indexing</b> — search engines process and store information they find in a massive database called an index, to be retrieved later when a user enters a query. Indexing identifies the words and expressions that best describe the page — these are <em>keywords</em>, and the page is assigned to them.</p>
<p><b>Ranking</b> — the engine compares the search string with the indexed pages and provides content that best answers the user's query. Results are ordered from most relevant to least relevant. Different engines have different ranking algorithms, which is why the same query gives different results in different engines. Algorithms constantly evolve.</p>`
  },
  {
    id: 12,
    unit: "Unit 2 — Search Engines",
    q: "What makes meta-search engines different from other types of search engines?",
    answer: `<p>The key difference is that a meta-search engine <em>does not have its own database</em> of indexed pages. Unlike crawler-based engines, it doesn't crawl or index the web itself.</p>
<p>Instead, it works as a middleman: it sends the user's query to <em>several other search engines</em> simultaneously and compiles the top results from each into one overall list. After redundancy is removed (duplicate links eliminated), the results are processed, ranked according to its own algorithm, and presented to the user.</p>
<p>Examples: <b>Dogpile, MetaCrawler, SavvySearch</b>. The benefit is that you get a broader, aggregated view of results from multiple sources in one query.</p>`
  },
  {
    id: 13,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between crawler-based search engines and human-powered directories?",
    answer: `<p>The main difference is <b>how listings are created and updated</b>.</p>
<p><b>Crawler-based engines</b> build their listings <em>automatically</em>. A spider discovers, indexes, and ranks content algorithmically. Changes to webpages are picked up on subsequent crawls. They're scalable to the size of the web.</p>
<p><b>Human-powered directories</b> depend on human editors. A site owner submits a URL and description; an editor manually reviews and approves or rejects it. The keyword match happens against the <em>human-written description</em>, not the actual page content. So if you change your page, the directory won't notice — only the description matters.</p>
<p>This is why automated engines like Google have nearly wiped human-powered directories out — they can't compete on scale or freshness.</p>`
  },
  {
    id: 14,
    unit: "Unit 2 — Search Engines",
    q: "What factors determine higher ranking in search results? What aspects can the ranking algorithm take into consideration?",
    answer: `<p>Each search engine has its own algorithm, and they're constantly updated to give better and faster results than competitors. Several factors can be considered:</p>
<ul>
<li>Whether the search term shows up in the <b>page title</b>.</li>
<li>Whether all the words appear <b>close together</b> on the page.</li>
<li>How many <b>other webpages link</b> to a given page — this is the algorithm Google invented (PageRank): the more pages link to you, the more authoritative you're considered.</li>
<li>The <em>relevance</em> of the content to the keywords.</li>
<li>How recently the page was updated.</li>
</ul>
<p>That's why the same query gives different results on different engines — they weigh these factors differently.</p>`
  },
  {
    id: 15,
    unit: "Unit 2 — Search Engines",
    q: "What is the difference between a search engine and a web browser?",
    answer: `<p>They're very different tools, though both deal with the web.</p>
<p>A <b>web browser</b> runs <em>locally</em> on your hardware. When you enter a web address, the browser decodes that address, puts it into a series of binary signals so the computer can route traffic to servers, reads the computer code (HTML, CSS, JS) of a website, and renders it on the screen. With a browser, you point at <em>one specific website</em>.</p>
<p>A <b>search engine</b> operates on <em>remote servers</em>. After a user enters a request, it looks across all the websites it has indexed and returns a <em>list</em> of potential places one can go. It doesn't display sites — it finds them.</p>
<p>So: browser = renders one site you already know; search engine = helps you find many sites.</p>`
  },
  {
    id: 16,
    unit: "Unit 2 — Search Engines",
    q: "Talk about any four search engines that can be used as an alternative to Google.",
    answer: `<p><b>Bing</b> — Microsoft's engine. Easy to use, beautiful background photos. Full of internal features like currency conversion, translation, flight tracking. Has a Rewards scheme: shopping or searching earns points toward apps and movies. Popular in the US and UK.</p>
<p><b>Baidu</b> — founded in 2000, dominant in China with over 70% market share. Strikingly similar to Google in design but in Mandarin. <em>Heavily censored</em> — certain images and pro-democracy websites are blocked. Outside China it has little influence, but inside it powers 3.3 billion searches per day.</p>
<p><b>Yandex</b> — used extensively in Russia, where it holds around 60% of the market. Similar service to Google: websites, images, videos, news, plus apps, maps, translation, cloud storage. Name comes from "Yet Another iNDEXer" (adopted 1993); the Yandex.ru domain launched in 1997; went public on NYSE in 2011 with a $1.3 billion IPO.</p>
<p><b>Ecosia</b> — CO2-neutral search engine. Servers run on 100% renewable energy and about 80% of ad revenue goes toward planting trees. Roughly 45 searches plant one tree on average.</p>
<p><i>Also worth mentioning: Search Encrypt — privacy-based, uses encryption, auto-erases history after 15 min inactivity.</i></p>`
  },
  {
    id: 17,
    unit: "Unit 3 — Programming Languages",
    q: "How can programming languages be classified? Provide examples and talk about the distinctive features of each type.",
    answer: `<p>Programming languages can be divided into two main classes based on <b>abstraction level</b>: <b>low-level</b> and <b>high-level</b>.</p>
<p><b>Low-level languages</b> are closer to the hardware. They include:</p>
<ul>
<li><b>Machine code</b> — strictly numerical, 0s and 1s. What computers actually run. No abstraction.</li>
<li><b>Assembly languages</b> — use abbreviations like ADD, SUB, MUL. Translated into machine code by an <em>assembler</em>. Hardware-specific — each assembly is designed for a particular architecture.</li>
</ul>
<p>They're complex and restricted to particular machines.</p>
<p><b>High-level languages</b> are closer to English and portable across hardware. Examples:</p>
<ul>
<li><b>FORTRAN</b> (1950s, IBM) — first high-level language, for scientific computation.</li>
<li><b>BASIC</b> (1960s) — for beginners.</li>
<li><b>PASCAL</b> (1970s) — for teaching programming fundamentals.</li>
<li><b>C</b> (1970s, Dennis Ritchie at Bell Labs) — combined low-level control with high-level abstraction, suitable for systems programming.</li>
<li><b>C++</b> — C with object-oriented programming.</li>
<li><b>Java</b> (1995, Sun Microsystems) — platform-independent, "Write Once Run Anywhere," uses JVM.</li>
<li><b>Python</b> (1989) — emphasizes readability and simplicity. Used in web dev, data analysis, AI.</li>
</ul>
<p>High-level programs must be translated to machine code by a <b>compiler</b> or <b>interpreter</b>.</p>`
  },
  {
    id: 18,
    unit: "Unit 3 — Programming Languages",
    q: "What is OOP? What are the three key features of OOP? Talk about each of them.",
    answer: `<p><b>OOP (Object-Oriented Programming)</b> is a programming paradigm used for handling multimedia applications where diverse data types like sound and video are packaged together into executable modules, and for writing more intuitive and reusable code.</p>
<p>The three key features are:</p>
<p><b>1. Encapsulation</b> — bundling data and program instructions into modules called <em>objects</em>. When the user selects an object (e.g. a "Triangles" icon), instructions inside it are executed with whatever properties or data the object holds. The encapsulation feature is great for complex apps where speech and moving images are integrated with text and graphics.</p>
<p><b>2. Inheritance</b> — defining one class of objects (e.g. "Rectangles") and a specific instance (e.g. "Squares" — a rectangle with equal sides). All properties of rectangles ("has 4 sides," "contains 4 right angles") are automatically <em>inherited</em> by Squares.</p>
<p><b>3. Polymorphism</b> — different objects can receive the same instruction but deal with it in different ways. Right-clicking on "Right triangle" might explain properties of right triangles; the same right-click on "Equilateral triangle" explains properties of equilateral triangles instead.</p>
<p>Together, these lead to <b>code reusability</b> — new programs can be assembled from a library of objects, no need to write code from scratch. Makes development and maintenance faster.</p>`
  },
  {
    id: 19,
    unit: "Unit 3 — Programming Languages",
    q: "What is the difference between a compiler, an interpreter, and an assembler?",
    answer: `<p>All three are translators, but they work on different levels and in different ways.</p>
<p><b>Assembler</b> — translates <em>assembly language</em> (a low-level language using mnemonics like ADD, SUB, MUL) into <b>machine code</b>. Operates one level above machine code.</p>
<p><b>Compiler</b> — translates a program written in a <em>high-level language</em> into object code (machine code) <b>all at once</b>, in one go, before execution. Output is a fast executable file.</p>
<p><b>Interpreter</b> — also translates high-level code, but translates and executes the source code <b>line by line</b> as the program is running. No compiled executable is produced.</p>
<p>Trade-off: compiled programs are faster and use less memory; interpreted ones are easier to debug and more portable but slower.</p>`
  },
  {
    id: 20,
    unit: "Unit 4 — Web Design",
    q: "What are the three main tools used in web design? Talk about each of them.",
    answer: `<p>The three tools that dominate web development are <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</p>
<p><b>HTML (Hypertext Markup Language)</b> — describes the <em>structure</em> of information on a webpage. Consists of commands called <b>tags</b> placed around different kinds of content (tables, paragraphs, lists, hyperlinks, images, videos) telling the web browser how to display them. This is the structural layer.</p>
<p><b>CSS (Cascading Style Sheets)</b> — a design mechanism whose primary function is to improve the <em>appearance</em> of a webpage by defining its styling and layout. Provides a way to apply styles consistently across all pages of a website, making it easier to maintain and update. Presentational layer.</p>
<p><b>JavaScript (JS)</b> — a cross-platform, object-oriented programming language used to make web pages interactive, intuitive, and user-friendly. Allows dynamically updating content, animations, pop-up menus, clickable buttons. While HTML and CSS control presentation and layout, JS controls the <em>behavior</em>. Without JavaScript, 90% of webpages would be static.</p>`
  },
  {
    id: 21,
    unit: "Unit 4 — Web Design",
    q: "What is the difference between frontend and backend web development?",
    answer: `<p>Frontend and backend are tightly connected — they can't exist separately — but they're completely different in the type of tasks and overall purpose.</p>
<p><b>Frontend</b> is the development of the <em>visible part</em> of the site — everything the user sees and interacts with in the browser: buttons, text, animations, layout. Tools: <b>HTML, CSS, JavaScript</b>. HTML structures, CSS styles, JavaScript handles interaction.</p>
<p><b>Backend</b> is the <em>server-side</em> part — all the internal processes hidden from the user that happen on the server, where user requests are processed. Backend developers work with:</p>
<ul>
<li><b>Databases</b>: SQLite, MySQL, MongoDB.</li>
<li><b>Servers</b>: Nginx, Apache, IIS.</li>
<li><b>Languages</b>: Java, PHP, Python, Ruby, etc.</li>
</ul>
<p>Frontend = what you see; backend = what you don't see but makes everything work.</p>`
  },
  {
    id: 22,
    unit: "Unit 4 — Web Design",
    q: "What are the advantages and disadvantages of using website builders?",
    answer: `<p><b>Advantages:</b></p>
<ul>
<li>No coding required — almost anyone can build a website.</li>
<li><b>Predesigned templates</b> with professional looks save huge time.</li>
<li><b>WYSIWYG editors</b> (What You See Is What You Get) let you edit visually, similar to editing a document.</li>
<li>Drag-and-drop functionality for images and elements.</li>
<li>Affordable and quick — you can have a site designed "in no time."</li>
<li>Easy customization: changing colors and images is much quicker than starting from scratch.</li>
<li>Many builders include add-on features like SEO tools, forums, image galleries, shopping carts.</li>
</ul>
<p><b>Disadvantages:</b></p>
<ul>
<li><em>Limited customization</em> compared to coding from scratch — you're locked into what the builder allows.</li>
<li>Restrictions on functionality, especially on free tiers.</li>
<li>Often have ads or platform branding on free plans.</li>
<li>SEO and performance can be limited compared to a hand-coded site.</li>
<li>You depend on the platform — hard to migrate elsewhere later.</li>
<li>Templates can look generic if not customized enough.</li>
</ul>`
  },
  {
    id: 23,
    unit: "Unit 4 — Web Design",
    q: "What is SEO? What is its main purpose?",
    answer: `<p><b>SEO (Search Engine Optimization)</b> is the practice of optimizing websites for Google and other search engines. It refers to a <em>set of improvements</em> that help a website rank higher in the Search Engine Results Page (SERP).</p>
<p>In short, SEO is about getting users to visit your site <b>without directly paying for advertising</b> — generating <em>organic traffic</em>.</p>
<p>SEO is incredibly important because:</p>
<ul>
<li>Most people don't go beyond the first couple of pages of search results.</li>
<li>Websites on the first page receive the <b>majority of clicks</b> — and the top three listings get most of those.</li>
<li>The number of people clicking decreases the further down a website ranks.</li>
</ul>
<p>SEO is a fundamental part of digital marketing because people conduct millions of searches every day with intent to find products and services. Greater visibility and ranking higher than competitors can have a material impact on revenue.</p>`
  },
  {
    id: 24,
    unit: "Unit 2/4 — SEO",
    q: "What is the difference between on-page SEO and off-page SEO?",
    answer: `<p>These are the two main approaches to SEO.</p>
<p><b>On-page SEO</b> covers everything you do <em>on your own website</em> to help it rank better:</p>
<ul>
<li>Keywords in titles, headings, and content.</li>
<li>Content quality and relevance.</li>
<li>Meta tags and descriptions.</li>
<li>Page structure and internal linking.</li>
<li>Load speed and mobile-friendliness.</li>
<li>Image alt text and URL structure.</li>
</ul>
<p><b>Off-page SEO</b> covers everything done <em>outside your site</em> to build its authority and reputation:</p>
<ul>
<li><b>Backlinks</b> from other reputable websites (most important factor — Google sees them as votes of confidence).</li>
<li>Social media signals and brand mentions.</li>
<li>Guest posting on other sites.</li>
<li>Online reviews and citations.</li>
</ul>
<p>So on-page = what you control directly on your site; off-page = how the rest of the web treats your site.</p>`
  },
  {
    id: 25,
    unit: "Unit 4 — Web Design",
    q: "What is meant by 'organic results'?",
    answer: `<p><b>Organic results</b> are search results that appear <em>naturally</em> based on the search engine's algorithm — purely on relevance to the query.</p>
<p>They are <b>not paid for</b>. The site owner didn't pay the search engine to put them there — they're earned through good SEO practices.</p>
<p>This contrasts with <b>paid results</b> (also called sponsored or ad results), which appear at the top or side of the page because advertisers paid for placement. Paid results are usually labeled "Ad" or "Sponsored."</p>
<p>The main purpose of SEO is exactly this — to get a website into the organic results, ranking as high as possible without paying for ads, since organic listings receive the majority of clicks.</p>`
  },
  {
    id: 26,
    unit: "Unit 5 — Malware",
    q: "What is malware? What types of malware do you know? Talk about each one.",
    answer: `<p><b>Malware</b> is malicious software designed to damage devices, networks, or steal sensitive information. Cybercriminals continuously develop new tools.</p>
<p><b>Virus</b> — malicious code that infects applications serving as host programs for its replication. Can enter via infected USB or Internet. Propagates by modifying other programs and inserting its code.</p>
<p><b>Worm</b> — standalone program that spreads rapidly, deletes files, creates botnets, or consumes bandwidth. Spreads through email attachments, replicates itself, exploits vulnerabilities.</p>
<p><b>Trojan</b> — distributed through legitimate-looking freeware (utilities, games, fake antivirus). Doesn't replicate, but opens a <em>backdoor</em> for unauthorized access. Can delete, modify, or capture sensitive info.</p>
<p><b>Ransomware</b> — encrypts data and demands payment for its release. Causes significant financial and operational damage. No guarantee that payment restores access.</p>
<p><b>Spyware</b> — collects and reports user's Internet activity, can access microphone, location, calendar, contacts.</p>
<p><b>Keylogger</b> — specific type of spyware. Records every keystroke (usernames, passwords) and transmits to hackers.</p>
<p><b>Adware</b> — generates revenue by automatically displaying unwanted ads. Not illegal but annoying. Typically bundled with free downloads.</p>
<p><b>Miner</b> — hijacks the victim's CPU/GPU to mine cryptocurrency. Slows the device, increases electricity bills, shortens device life.</p>`
  },
  {
    id: 27,
    unit: "Unit 5 — Malware",
    q: "What are the four routines of a virus? Talk about the function of each.",
    answer: `<p>To be a virus, a program only needs to have a reproduction routine. But viruses can have <b>four main parts</b>:</p>
<p><b>1. Misdirection routine</b> — enables the virus to <em>hide itself</em>. Hides the presence of the malicious code.</p>
<p><b>2. Reproduction routine</b> — allows the virus to <em>copy itself</em> to other programs. This is the only mandatory part of a virus. A program that has a payload but no reproduction routine is a <b>Trojan</b>, not a virus.</p>
<p><b>3. Trigger</b> — causes the payload to be activated at a particular time or when a particular event takes place (e.g. a specific date, a key press).</p>
<p><b>4. Payload</b> — does the actual damage. Can be a fairly harmless joke (displaying a message) or very destructive (deleting files on the hard disk).</p>
<p>When infecting a file, the virus replaces the first instruction with a <b>JUMP command</b> that causes the virus instructions to run before the host program. After the virus executes, control returns to the host program, which continues normally.</p>`
  },
  {
    id: 28,
    unit: "Unit 5 — Malware",
    q: "What types of cybercrime do you know? Talk about each of them.",
    answer: `<p><b>Phishing</b> — attempt to steal sensitive info (usernames, passwords, credit card numbers) by sending fake emails with links to phishing websites. Attacker disguises as a legitimate source.</p>
<p><b>DDoS attack</b> — hackers overload networks and servers with traffic from many sources so legitimate users can't access them.</p>
<p><b>Website defacement</b> — vandalism that changes the visual appearance of a webpage. Done for ideological, political, or personal reasons. Causes financial loss and reputation damage.</p>
<p><b>Salami shaving</b> — theft of small amounts of money from a large number of accounts. The fraudster avoids detection by keeping each transaction tiny over a long period.</p>
<p><b>Piggybacking</b> — obtaining wireless access to a business's network because it's unprotected or uses a weak password.</p>
<p><b>Software piracy</b> — unauthorized copying of a program for sale or distribution. A copyright violation.</p>
<p><b>Hijacking</b> — redirecting someone trying to visit a certain site elsewhere.</p>
<p><b>Backdoor</b> — leaving an illicit program within a completed system that allows unauthorized entry later.</p>
<p>Prevention: don't open email attachments from strangers, take care downloading files, keep antivirus updated.</p>`
  },
  {
    id: 29,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a worm?",
    answer: `<p>The main difference is in <b>activation and spreading mechanism</b>.</p>
<p><b>Viruses</b> must be <em>triggered by the activation of their host</em>. They're often attached or concealed in downloaded files. When the host file is accepted by a system, the virus stays <em>dormant</em> until that file is activated. Only then can the virus run, execute malicious code, and replicate to infect other files. They <em>require human intervention</em> (someone opening the file).</p>
<p><b>Worms</b> are <em>standalone</em> malicious programs that can self-replicate and propagate <em>independently</em> as soon as they have breached the system. They don't require a host file or any human action. Once a worm enters the system (usually via a network connection), it self-replicates and spreads across the network, infecting any inadequately protected computers it can reach.</p>
<p>So: virus = needs a host + human action; worm = autonomous and network-spreading.</p>`
  },
  {
    id: 30,
    unit: "Unit 5 — Malware",
    q: "What is the difference between a virus and a Trojan?",
    answer: `<p>The key technical difference: a <b>virus replicates itself</b>, but a <b>Trojan does not</b>.</p>
<p>A <b>virus</b> is malicious code that infects host programs, attaches itself to them, and spreads by inserting its code into other programs. The reproduction routine is what defines it as a virus.</p>
<p>A <b>Trojan horse</b> is distributed through some form of <em>legitimate-looking freeware</em> — utilities, games, fake antivirus programs. It <em>misleads users</em> by pretending to be useful. Unlike viruses, Trojans don't replicate themselves, but they can be just as destructive — they can delete, modify, or capture sensitive information. Moreover, Trojans open a <b>backdoor entry</b> to the computer, allowing a malicious actor to gain unauthorized access.</p>
<p>In the formal definition: a program that has a payload but does not have a reproduction routine is a Trojan, not a virus.</p>`
  },
  {
    id: 31,
    unit: "Unit 5/6 — Security",
    q: "What is the difference between DoS and DDoS attack? How is a DDoS attack performed?",
    answer: `<p><b>DoS (Denial of Service)</b> attack comes from a <em>single source</em> — one machine flooding the target with requests until the server can't keep up with legitimate traffic. Easier to handle: you can block the single source IP.</p>
<p><b>DDoS (Distributed Denial of Service)</b> attack comes from <em>many sources</em> at once — distributed. Hackers overload networks and servers with traffic from thousands of devices simultaneously. Much harder to defend against because traffic comes from many legitimate-looking IPs.</p>
<p><b>How a DDoS attack is performed:</b> hackers use a <b>botnet</b> — a network of compromised computers, often infected with malware without their owners knowing. The hacker commands all the bots in the botnet to send traffic to the same target at the same time. The target's server is overwhelmed and either crashes or becomes unresponsive to legitimate users.</p>
<p>Reasons for DDoS: extortion, hacktivism, competitive sabotage, distraction from another attack.</p>`
  },
  {
    id: 32,
    unit: "Unit 6 — Data Security",
    q: "What is a firewall? What can firewall filters be based on?",
    answer: `<p>A <b>firewall</b> is a combination of software and hardware used to protect private networks by filtering incoming data traffic. It's like the firewall of a building — it stops threats from spreading.</p>
<p>One common method is <b>packet filtering</b>: incoming data is broken into small chunks (packets), and the firewall inspects each packet using a set of filters, deciding to <em>permit or deny access</em>.</p>
<p><b>Filters can be based on:</b></p>
<ul>
<li><b>IP addresses</b> — block specific IPs generating suspicious traffic.</li>
<li><b>Domain names</b> — block traffic to or from certain domains.</li>
<li><b>Port numbers</b> — block specific ports used by attackers.</li>
<li><b>Protocols.</b></li>
<li><b>Certain words or phrases</b> in packet content.</li>
</ul>
<p>Users can create <b>exceptions</b> to allow specific unauthorized programs through without lowering overall security.</p>
<p>Types: <b>host-based</b> firewall (on a single machine) and <b>network-based</b> firewall (protects the whole network). Combining both gives stronger defense — set up by the network administrator.</p>`
  },
  {
    id: 33,
    unit: "Unit 6 — Data Security",
    q: "What is the difference between signature-based scanning and heuristic scanning?",
    answer: `<p>Both are antivirus techniques but they work differently.</p>
<p><b>Signature-based scanning</b> matches signatures found in files against a <em>database of known malware</em>. Every virus has a unique signature — like a fingerprint. Only catches malware that's <b>already been identified</b> and added to the database. Reliable for known threats but can't catch brand-new ones.</p>
<p><b>Heuristic scanning</b> uses <em>rules and algorithms</em> to look for commands that may indicate malicious intent. It causes the antivirus to recognize <b>new malware</b> without having an exact match in the database — based on suspicious behavior or code patterns.</p>
<p>Most antivirus programs use both in combination — signatures for reliability on known threats, heuristics to catch new malware trying to evade detection.</p>`
  },
  {
    id: 34,
    unit: "Unit 6 — Data Security",
    q: "What is a signature?",
    answer: `<p>Every virus contains a <b>signature</b> — its unique distinguishing feature, <em>like a fingerprint</em>.</p>
<p>It's the feature that sets the virus apart from other programs running on a computer, and it also makes the virus <b>recognizable</b> to antivirus software — therefore a potential target for detection.</p>
<p>Antivirus software maintains a database of known signatures. Documents, programs, and applications are scanned for these signatures when they're being used — when an executable is downloaded, it's instantly scanned to check if it's infected with malware whose signature is in the database.</p>
<p>If a new malware doesn't have a signature in the database yet, antivirus has to rely on <em>heuristic scanning</em> instead.</p>`
  },
  {
    id: 35,
    unit: "Unit 6 — Data Security",
    q: "What are the two main types of encryption? What is the difference?",
    answer: `<p>Encryption is a way of encoding data so that only authorized parties can understand the information. The two main types are <b>symmetric</b> and <b>asymmetric (public key)</b> encryption.</p>
<p><b>Symmetric encryption</b> — <em>all parties have the same key</em>. The key is used both to encrypt and decrypt messages. It must be kept secret, or security is compromised. Faster, but distributing the key safely is a problem.</p>
<p><b>Asymmetric encryption (public key)</b> — uses <em>two keys</em>:</p>
<ul>
<li>The <b>private key</b> is kept secret.</li>
<li>The <b>public key</b> is made widely available to anyone who needs it.</li>
</ul>
<p>The keys are mathematically related: information encrypted with the public key can only be decrypted by the corresponding private key. Slower, but solves the key distribution problem.</p>
<p>Encryption provides confidentiality, plus <b>authentication</b> (verifies origin), <b>integrity</b> (proves content wasn't changed), and <b>non-repudiation</b> (sender can't deny sending).</p>`
  },
  {
    id: 36,
    unit: "Unit 6 — Data Security",
    q: "What two methods of breaking a cipher are there?",
    answer: `<p>There are two main methods of attacking encryption.</p>
<p><b>1. Brute force</b> — the most basic method. Trying <em>random keys until the right one is found</em>. The length of the key determines the possible number of keys and affects the plausibility of this attack.</p>
<p>Encryption strength is <em>directly proportional to key size</em>, but as the key size increases, so does the number of resources required for the computation. With modern key lengths, brute-forcing is practically impossible.</p>
<p><b>2. Cryptanalysis</b> — finding a <em>weakness in the cipher</em> itself and exploiting it. More likely to occur when there's a flaw in the cipher itself or its implementation. Doesn't try every key — instead, finds a mathematical shortcut.</p>
<p>Brute force = exhaustive search. Cryptanalysis = clever shortcut through a flaw.</p>`
  },
  {
    id: 37,
    unit: "Unit 6 — Data Security",
    q: "What is a CAPTCHA? Where is this tool implemented?",
    answer: `<p><b>CAPTCHA</b> stands for <b>Completely Automated Public Turing test to tell Computers and Humans Apart</b>.</p>
<p>It's a challenge-response test used on websites to <em>distinguish humans from bots</em>. Typical formats:</p>
<ul>
<li>Distorted text that the user must recognize and type.</li>
<li>Image puzzles ("select all squares with traffic lights").</li>
<li>Click-the-checkbox tests ("I'm not a robot").</li>
<li>Logic puzzles or simple math.</li>
</ul>
<p><b>Where it's used:</b></p>
<ul>
<li><b>Login forms</b> — to stop brute-force password attacks.</li>
<li><b>Signup pages</b> — to prevent mass automated account creation.</li>
<li><b>Comment sections</b> — to block spam bots.</li>
<li><b>Ticket-purchase pages</b> — to stop scalper bots buying tickets in bulk.</li>
<li><b>Online voting and forms</b> — to ensure real human input.</li>
</ul>
<p>It's essentially a reverse Turing test — the machine judges whether the user is human.</p>`
  },
  {
    id: 38,
    unit: "Unit 6 — Data Security",
    q: "What is the Turing test? Talk about its procedure.",
    answer: `<p>The <b>Turing test</b> was proposed by <b>Alan Turing</b> in <b>1950</b>, originally called <em>"The Imitation Game"</em>. The idea was to check whether a machine can think — whether it has intelligence.</p>
<p><b>Procedure:</b></p>
<ul>
<li>There are two <b>contestants</b> — one human (of either gender) and one computer.</li>
<li>There's a <b>judge</b> (interrogator) whose job is to decide which of the two is human and which is the machine.</li>
<li>The judge asks a series of questions to both contestants — communication is done via text so the judge can't see or hear them.</li>
<li>If the judge's accuracy is <em>less than 50%</em> — meaning the judge is essentially guessing — then the computer has fooled them well enough to be considered intelligent.</li>
</ul>
<p><b>Notable moments:</b></p>
<ul>
<li><b>ELIZA</b> and <b>PARRY</b> — early programs that fooled judges, but exposed weaknesses in the test (simple pattern matching could work).</li>
<li><b>2014: Eugene Goostman</b> — a chatbot claimed to pass by pretending to be a <em>13-year-old Ukrainian boy</em>, which excused his imperfect English and limited knowledge.</li>
</ul>`
  },
  {
    id: 39,
    unit: "Unit 7 — Future of IT",
    q: "What is the difference between classification and clustering?",
    answer: `<p>Both are tasks that neural networks can perform — both involve sorting data into categories — but the key difference is whether the categories are known in advance.</p>
<p><b>Classification</b> means <em>classifying data sets into <b>predefined</b> classes</em>. The categories are <b>known in advance</b>, and the network learns to assign incoming data to one of them. Example: spam vs not-spam — the two classes are defined before training.</p>
<p><b>Clustering</b> means <em>classifying data into <b>undefined</b> categories</em>. The categories are <b>not predefined</b>. The network finds patterns in the data and groups similar items together on its own, without being told what the groups should be. Example: grouping customers by purchasing behavior without prior labels.</p>
<p>In machine learning terms: classification is <em>supervised learning</em> (you have labels); clustering is <em>unsupervised learning</em> (no labels — the network discovers structure).</p>`
  },
  {
    id: 40,
    unit: "Unit 7 — Future of IT",
    q: "What is backpropagation?",
    answer: `<p><b>Backpropagation</b> is the <em>feedback process</em> by which a neural network learns. For a neural network to learn, there has to be an element of feedback — just as children learn by being told what they're doing right or wrong.</p>
<p><b>How it works:</b></p>
<ul>
<li>The network compares the <em>output it actually produces</em> with the <em>output it was supposed to produce</em>.</li>
<li>The <b>difference</b> between them is the error.</li>
<li>The network uses this difference to <b>modify the weights</b> of connections between units.</li>
<li>The modification works <em>backward</em>: from the output units, through the hidden units, to the input units — going "back" through the network, hence the name.</li>
</ul>
<p>In time, backpropagation causes the network to learn, reducing the difference between actual and intended output until they exactly coincide — so the network figures things out as it should.</p>`
  },
  {
    id: 41,
    unit: "Unit 7 — Future of IT",
    q: "What is an artificial neural network? What tasks can neural networks accomplish?",
    answer: `<p><b>An artificial neural network (ANN)</b> is a computer model that simulates the work of the biological brain — copying it in a simplified but reasonably faithful way. It creates lots of densely interconnected nodes (artificial neurons) inside a computer to learn things and make decisions in a humanlike way.</p>
<p>Technically, these are collections of algebraic variables and mathematical equations linking them — numbers stored in boxes whose values constantly change.</p>
<p><b>Tasks neural networks can accomplish:</b></p>
<ul>
<li><b>Face recognition</b>.</li>
<li><b>Autonomous driving</b> — making cars drive on the roads.</li>
<li><b>Generating realistic CGI faces</b>.</li>
<li><b>Machine translation</b>.</li>
<li><b>Fraud detection</b>.</li>
<li><b>Classification</b> — into predefined classes.</li>
<li><b>Clustering</b> — into undefined categories.</li>
<li><b>Prediction</b> — using past events to guess future ones (stock market, box office).</li>
</ul>
<p>They're excellent at finding patterns too complex or numerous for a human programmer to extract. <em>Neural networks are not programmed — they are trained.</em></p>`
  },
  {
    id: 42,
    unit: "Unit 7 — Future of IT",
    q: "In what way is an artificial neural network similar to the biological brain? Describe its structure.",
    answer: `<p>An ANN mimics the brain by using many <b>densely interconnected nodes</b> (artificial neurons) that influence each other through weighted connections — similar to how brain cells trigger one another across tiny gaps called <em>synapses</em>.</p>
<p><b>Structure of an ANN:</b></p>
<ul>
<li>A typical network has from a few dozen to millions of artificial neurons called <b>units</b>, arranged in a <em>series of layers</em>.</li>
<li><b>Input units</b> — receive various forms of information from the outside world that the network will try to learn, recognize, or process.</li>
<li><b>Hidden units</b> — sit between input and output. One or more layers of them form the majority of the artificial brain.</li>
<li><b>Output units</b> — signal how the network responds to the information it's learned.</li>
</ul>
<p>Most networks are <b>fully connected</b> — each unit in one layer is connected to every unit in the next.</p>
<p>Connections have <b>weights</b> — numbers that can be <em>positive</em> (one unit excites another) or <em>negative</em> (one unit suppresses/inhibits another). The higher the weight, the more influence one unit has on another.</p>`
  },
  {
    id: 43,
    unit: "Unit 7 — Future of IT",
    q: "Why are neural networks compared to 'black boxes'?",
    answer: `<p>Neural networks are called <b>"black boxes"</b> because the user feeds in data and receives answers, but the <em>exact decision-making process inside isn't accessible</em>.</p>
<p>You can <b>fine-tune the answers</b> by training, but you don't know <em>how exactly</em> these answers were produced — which specific weights and pathways led to that conclusion.</p>
<p>This is a major problem because:</p>
<ul>
<li>It's hard to <b>debug</b> errors.</li>
<li>It's hard to <b>trust</b> the network for critical decisions (medicine, justice, finance).</li>
<li>It's hard to verify there's no hidden bias.</li>
<li>It's hard to <b>explain</b> decisions to users or regulators.</li>
</ul>
<p>This is the problem a number of researchers are working on today (the field of <em>explainable AI</em>), and it will only become more important as ANNs play a bigger role in our lives.</p>`
  },
  {
    id: 44,
    unit: "Unit 7 — Future of IT",
    q: "What is IoT? What are the major problems in using the IoT technology?",
    answer: `<p><b>IoT (Internet of Things)</b> is a system of interrelated physical objects, animals, or people that are provided with <b>unique identifiers (UIDs)</b> and the ability to transfer data over a network without requiring human-to-human or human-to-computer interaction.</p>
<p>A "thing" can be a person with a heart monitor implant, a farm animal with a biochip transponder, a car with built-in sensors for tire pressure, or any object assigned an IP address.</p>
<p><b>Major problems / disadvantages:</b></p>
<ul>
<li><b>Security risk</b> — as the number of connected devices increases and more information is shared, the risk of a hacker stealing confidential data also grows.</li>
<li><b>Massive data management</b> — enterprises may eventually have to deal with millions of IoT devices; collecting and managing all that data is challenging.</li>
<li><b>Bug cascading</b> — if there's a bug in the system, it's likely every connected device will become corrupted.</li>
<li><b>No international compatibility standard</b> — it's difficult for devices from different manufacturers to communicate with each other.</li>
</ul>
<p><b>Benefits</b> (worth mentioning briefly): access from anywhere on any device, automation reducing labor costs, real-time business insights.</p>`
  },
  {
    id: 45,
    unit: "Unit 7 — Future of IT",
    q: "What is HLAI? What are the risks of using HLAI?",
    answer: `<p><b>HLAI</b> stands for <b>Human-Like Artificial Intelligence</b> — AI specifically designed to match human intelligence, mimicking how humans think and behave.</p>
<p><b>Benefits</b> include:</p>
<ul>
<li>Soaring productivity.</li>
<li>Increased leisure.</li>
<li>A better understanding of our own minds.</li>
</ul>
<p><b>Risks:</b></p>
<ul>
<li>Not all types of AI are human-like — and an <em>excessive focus</em> on developing and deploying HLAI can lead us into a <b>trap</b>.</li>
<li>As machines become better <b>substitutes for human labor</b>, workers lose economic and political bargaining power.</li>
<li>Workers become <em>increasingly dependent on those who control the technology</em>.</li>
<li>Concentration of power in the hands of a few tech owners.</li>
</ul>
<p>The alternative perspective: when AI is focused on <b>augmenting humans</b> rather than mimicking them, then humans retain control. Augmentation creates new capabilities, products, and services — ultimately generating <em>far more value</em> than merely human-like AI.</p>`
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
