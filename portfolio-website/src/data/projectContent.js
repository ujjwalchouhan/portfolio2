import { IMAGE_URLS } from "./imageUrls";

const E = IMAGE_URLS.Elriad;
const A = IMAGE_URLS.Aucto;
const M = IMAGE_URLS["My Loan"];
const K = IMAGE_URLS.Kaashin;
const P = IMAGE_URLS.pepsi;
const D = IMAGE_URLS.Dingg;
const Cb = IMAGE_URLS.Canbiz;
const Ng = IMAGE_URLS.Netgear;
const T = IMAGE_URLS.Together;
const El = IMAGE_URLS.Elegancia;

export const ELRIADSHRINE = {
    id: 1,
    company: "EL Riad Shrine",
    title: "Designed Ticket Booking Experience for Their Event Halls",
    platform: "Web & Mobile",
    service: "Design Ticket Booking Experience",
    role: "UI/UX Designer",
    image: E.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "El Riad Shrine has first-class facilities available to rent for their own shriners (at a reduced rate) and also for the general public. Their units and clubs host many events that are open to the public."
            ]
        },
        {
            heading: "Problem",
            content: [
                "Tickets are currently booked by email, which is slow and can cause errors. Users can’t pick specific seats or tables in real-time, making it less convenient. There’s also no way to scan and verify tickets at the event, making entry hard to manage."
            ]
        },
        {
            heading: "Design Process",
            content: [
                "The design process followed an iterative approach, focusing on continuous feedback and improvements. We worked closely with the client to ensure the system met their needs, creating prototypes, testing them, and refining the design based on their input."
            ]
        },
        {
            heading: "Requirement Analysis",
            content: [
                "We identified key needs for the ticketing system — it should work with the current WordPress site, support reserved seating, and let users pick specific seats or tables. It should also allow code-based access for certain tables and include ticket scanning for quick entry. Tickets must show seat and table numbers clearly."
            ]
        },
        {
            heading: "Solution",
            content: [
                "Implement ticketing software that works with WordPress, allowing reserved seating and real-time seat selection. Generate QR codes for quick check-in and attendance tracking, reducing entry time and manual checks. Make sure the system is mobile-friendly and easy to use on all devices."
            ]
        }
    ],
    processSteps: [
        {
            heading: "Feature Based Comparison of Ticketing Solutions",
            image: E.image1,
        },
        {
            heading: "Structuring the Ticketing Booking Experience",
            image: E.image2,
        },
        {
            heading: "Wireframes",
            image: E.image3,
        },
        {
            heading: "Style Guide",
            image: E.image4,
        },
        {
            heading: "Seat Booking Flow",
            image: E.image5,
        },
        {
            heading: "Mobile Responsive",
            image: E.image6,
        },
        {
            heading: "Emailers",
            image: E.image7,
        },
        {
            heading: "Admin Ticket Redemption Tool",
            image: E.image8,
        },
        {
            heading: "Tickets",
            image: E.image9,
        },
        {
            heading: "Prototype",
            image: E.image9,
        }
    ]
};

export const MYLONE = {
    id: 2,
    company: "My Loan",
    title: "Compare loan offers easily and apply quickly with trusted lenders.",
    platform: "Web/Mobile",
    service: "Loan Comparison",
    role: "UI/UX Designer",
    image: M.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "MyLoan.co.za is a South African loan comparison platform that helps users find and apply for the best loan offers from trusted lenders. I was responsible for the complete UI/UX design, focusing on simplifying the loan journey, improving trust, and increasing conversions across both desktop and mobile."
            ]
        },
        {
            heading: "Problem",
            content: [
                "Loan seekers often face unclear terms, hidden fees, and long application forms that lead to drop-offs. Competitor sites lacked transparency, which created distrust and poor user experience.",
                "The challenge was to design a platform that was simple, transparent, and trustworthy while encouraging users to complete their loan applications."
            ]
        },
        {
            heading: "UX Research",
            content: [
                "Through user analysis and competitive benchmarking, I identified three core insights:",
                {
                    type: "bulletList",
                    items: [
                        "Users want speed and simplicity in starting applications.",
                        "Trust indicators (NCR licensing, data security, credit score safety) are essential.",
                        "A mobile-first approach was critical, as most users apply via smartphones."
                    ]
                }
            ]
        },
        {
            heading: "Solution",
            content: [
                "Loan offers are displayed in card-based comparisons with sorting and filtering options. Trust cues, such as licensed lenders and “no impact on credit score,” were highlighted, while a three-step visual journey (Compare → Choose → Get Money) simplified the process.",
                "Supporting educational content like FAQs and blogs further reduced hesitation."
            ]
        },
        {
            heading: "Result",
            content: [
                "The result was a clean, trustworthy, and conversion-focused platform that simplified the loan application journey and improved user confidence."
            ]
        }
    ],
    processSteps: [
        {
            heading: "Wireframes",
            image: M.image1,
        },
        {
            heading: "Style Guide",
            image: M.image2,
        },
        {
            heading: "UI Design",
            image: M.image3,
        }
    ]
};

export const AUCTOSELLERAPP = {
    id: 3,
    company: "Aucto Seller Mobile App",
    title: "Empowering Industrial Sellers to Manage Auctions on the Go",
    platform: "Mobile",
    service: "Auction and Seller App",
    role: "UI/UX Designer",
    image: A.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "Aucto is a B2B auction platform that helps businesses buy and sell industrial equipment and machinery. Aucto’s existing platform primarily focused on a web-first experience, leaving a significant gap for mobile-first users — especially sellers who are often on-site, in warehouses, or away from their desktops. The absence of a dedicated seller mobile app resulted in inefficiencies like delayed asset listings, missed auction activity, and limited real-time responsiveness.",
                "The goal of this project was to bridge that gap by designing a mobile-first seller app that simplifies complex workflows while preserving the depth and functionality required by industrial sellers."
            ]
        },
        {
            heading: "Problem",
            content: [
                "Industrial asset sellers using Aucto often manage large inventories, complex auction events, and high-value transactions. The existing web experience doesn't translate well to mobile, and sellers lacked:",
                {
                    type: "bulletList",
                    items: [
                        "Real-time updates on bids and auction activity",
                        "A streamlined process for listing assets",
                        "A way to communicate with support on urgent issues",
                        "Mobile access to documents, reports, and compliance data"
                    ]
                }
            ]
        },
        {
            heading: "Solution",
            content: [
                "To address the unique needs of industrial equipment sellers using Aucto, I designed a mobile-first seller application that transforms complex workflows into a streamlined, accessible, and intuitive experience. The app empowers sellers to manage their auctions, monitor performance, and communicate with buyers and support teams — anytime, anywhere."
            ]
        }
    ],
    processSteps: [
        {
            heading: "Information Architecture",
            image: A.image1,
        },
        {
            heading: "Wireframes",
            image: A.image2,
        },
        {
            heading: "Style Guide",
            image: A.image3,
        },
        {
            heading: "UI Design",
            image: A.image4,
        }
    ],
    keySolutions: [
        {
            title: "1. Transparent Loan Comparison",
            description: "Users can easily compare loan offers with:",
            items: [
                "Side-by-side comparison of interest rates and terms",
                "Clear display of total repayment amounts",
                "Filtering options by loan amount, duration, and lender type",
                "Highlighted trust indicators (NCR licensing, security badges)"
            ]
        },
        {
            title: "2. Simplified Application Process",
            description: "A streamlined three-step journey:",
            items: [
                "Quick pre-qualification with minimal information",
                "Guided form completion with progress indicators",
                "Instant application submission with confirmation tracking"
            ]
        },
        {
            title: "3. Trust & Security Features",
            description: "Built-in trust elements include:",
            items: [
                "NCR-licensed lender verification badges",
                "Secure data encryption indicators",
                "No credit score impact messaging",
                "Privacy policy and data protection highlights"
            ]
        },
        {
            title: "4. Educational Support Content",
            description: "Comprehensive resources to help users:",
            items: [
                "FAQ section addressing common loan questions",
                "Blog articles on financial literacy and loan types",
                "Clear explanation of terms and conditions",
                "Contact support for additional assistance"
            ]
        }
    ]
};

export const PEPSI = {
  id: 4,
  company: "Pepsico",
  title: "Ensuring data integrity, visibility, and auditability.",
  platform: "Web & Mobile",
  service: "Business & Enterprise",
  role: "UI Designer",
  image: P.main,
  projectInfoSections: [
    {
      heading: "Project Overview",
      content: [
        "PepsiCo manages a wide range of promotional deals through various departments, including Sales, Marketing, Finance, and Supply Chain. These deals play a crucial role in driving market penetration and maintaining retailer relationships. However, the current process for managing deals is fragmented and inefficient, relying heavily on emails, spreadsheets, and outdated legacy systems. Our goal was to design a centralized, user-friendly Deal Management System that streamlines the creation, approval, tracking, and analysis of promotional deals. The system needed to support cross-functional collaboration while ensuring data integrity, visibility, and auditability."
      ],
    },
    {
      heading: "Problem",
      content: [
        "The existing deal management process suffered from the following issues:",
        {
          type: "bulletList",
          items: [
            "Lack of centralized tracking",
            "Delayed approvals",
            "Poor interdepartmental visibility",
            "High error rates due to manual entry",
            "No real-time analytics or performance insights"
          ]
        },
        "These inefficiencies led to lost revenue opportunities, strained team coordination, and compliance risks."
      ],
    },
    {
      heading: "Design Process",
      content: [
        "Define, Research, Competitor Analysis, Product map, UI Design, Branding, Information Architecture, User Flow, Wireframe, Prototype, Discovery, Solution."
      ],
    },
    {
      heading: "Style Guide",
      content: [
        "Typography: Pepsi Owner (custom bespoke font for Pepsi wordmark) and Roboto. Color palette: Black #000000, Globe Blue #0E0E96, Electric Blue #0025FF, White #FFFFFF, Globe Red #FF1400."
      ],
    },
    {
      heading: "Wireframe & UI Design",
      content: [
        "Wireframes and UI design for Pepsico FoodService: Dashboard, Customer List, Deal List, Bottle and Can, Admin flows; Add New Deal with segment selection, contract details, outlets, and product selection; sign-in and account information screens. The system supports a centralized deal lifecycle with clear hierarchy and cross-functional visibility."
      ],
    },
  ],
  processSteps: [
    { heading: "Wireframe", image: P.image1 },
    { heading: "UI Design", image: P.image2 },
  ],
};

export const DINGG = {
  id: 5,
  company: "Dingg",
  title: "Empowering Salon Management with Actionable Insights",
  platform: "Web & Mobile",
  service: "SaaS & Enterprise",
  role: "UI Designer",
  image: D.main,
  projectInfoSections: [
    {
      heading: "Project Overview",
      content: [
        "Dingg is a SaaS appointment scheduling and management platform designed to help businesses streamline bookings, manage customers, and track performance through a centralized dashboard. The goal of this project was to design a scalable, intuitive, and visually engaging product experience that simplifies complex scheduling workflows while providing actionable insights to users."
      ],
    },
    {
      heading: "Problem Statement",
      content: [
        "Many scheduling and booking tools suffer from cluttered dashboards, confusing workflows, and poor data visibility. Business owners often struggle to quickly understand appointment performance, manage clients, and take timely actions. The challenge was to create a product experience that reduces cognitive load, improves clarity, and enables users to manage appointments effortlessly without feeling overwhelmed by data."
      ],
    },
    {
      heading: "Goals & Objectives",
      content: [
        "Design a clean, intuitive, and modern dashboard for salon managers. Provide quick access to KPIs like revenue, appointments, and feedback. Allow for trend analysis (week/month/year) at a glance. Integrate actionable insights into a visual, user-friendly layout. Improve task planning with a real-time appointment scheduler."
      ],
    },
    {
      heading: "UX Research & Insights",
      content: [
        "Research focused on understanding the needs of service-based businesses and professionals who rely on appointment scheduling daily. Key insights included: Users want a quick overview of bookings, revenue, and performance without navigating multiple screens. Clear visual hierarchy is essential for dashboards with mixed content like charts, lists, and metrics. Users expect flexible scheduling, simple customer management, and fast actions. Consistency in UI patterns significantly reduces learning time for new users.",
        "Competitive analysis revealed that successful scheduling tools prioritize simplicity, clear data visualization, and minimal steps to complete core tasks."
      ],
    },
    {
      heading: "Style Guide",
      content: [
        "Typography: Eudoxus Sans (Light, Regular, Bold). Color palette: Primary Text #1C142B, Secondary #29292C, Tertiary #4D4D50, Disabled #949495; Accent/Link #B36C95; Error #EB4D2B, Warning #EF9400, Success #38B45A. Defined styles for Heading, SubHeading, Body, and Input text."
      ],
    },
    {
      heading: "Information Architecture & UI Design",
      content: [
        "Information architecture covers Splash, Login, Forgot Password, Verification, Dashboard, Clients, and related flows. Wireframes and 50+ screens support a clean, scalable UI design for the scheduling and management experience."
      ],
    },
  ],
  processSteps: [
    { heading: "Screens", image: D.image1 },
    { heading: "Flow", image: D.image2 },
    { heading: "Dashboard", image: D.image3 },
    { heading: "Final", image: D.image4 },
  ],
};

export const KAASHIN = {
    id: 5,
    company: "Kaashin",
    title: "Brand Identity that Embodies Varanasi’s Serene Essence",
    platform: "Logo",
    service: "Hospitality",
    role: "UI/UX Designer",
    image: K.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "Kaashin is a boutique hotel located in Varanasi — a city known for its deep spiritual roots, sacred riverbanks, and timeless cultural heritage. The client envisioned a brand identity that embodies Varanasi’s serene essence while maintaining a contemporary, global appeal.",
                "My task was to design a logo that visually reflects this balance — where tradition meets modern tranquility."
            ]
        },
        {
            heading: "Design Approach",
            content: [
                "The creative direction centered on harmonizing cultural depth with modern simplicity. I began by exploring the essence of Varanasi — its calm mornings by the river, spiritual geometry in architecture, and organic textures of sacred art.",
                "Typography played an essential role: a custom serif typeface was chosen with gentle curves and fine terminals, adding warmth and sophistication while preserving legibility. This gave the wordmark a modern elegance rooted in tradition."
            ]
        }
    ],
    processSteps: [
        {
            heading: "Logo Design",
            image: K.image1
        },
        {
            heading: "Mockup",
            image: K.image2
        }
    ]
};

export const CANBIZ = {
    id: 7,
    company: "Canbiz",
    title: "Redesigned Business Model Canvas Tool",
    platform: "Web & Mobile",
    service: "Business & Enterprise",
    role: "UI Designer",
    image: Cb.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "Simventure Validate is a useful tool to develop proficiency in using Business Model Canvas. It helps you to validate ideas to create new ventures by creating a business model. The client requires a complete redesign and rebranding of their existing business model canvas (BMC) tool, currently named Simventure Validate. The new platform will be called Canbiz."
            ]
        },
        {
            heading: "Problem",
            content: [
                "The UI is outdated and visually unappealing, with limited mobile access and a confusing, lengthy onboarding process. Users struggle with minimal guidance and feedback during BMC creation, along with unclear information architecture and labeling."
            ]
        },
        {
            heading: "Design Process",
            content: [
                "Gathered client requirements and user needs, evaluated the existing tool, and documented key issues. Designed the new platform's information architecture, logo, UI, onboarding, and AI features. Tested the prototype with the client and refined it based on feedback."
            ]
        },
        {
            heading: "Solution",
            content: [
                "Design a new logo for Canbiz, create a user-friendly, mobile-optimized interface with a sleek dark theme, and implement a clear onboarding process to guide users through the BMC framework. AI will provide personalized insights, and educational resources like tutorials and case studies will enhance user support, with potential partnerships for added resources and community access also considered.",
                "Improve the information architecture and navigation. Created a modern, user-friendly, and visually appealing interface. Optimize the platform for mobile devices."
            ]
        },
        {
            heading: "Style Guide",
            content: [
                "Created a modern, user-friendly, and visually appealing interface. Optimize the platform for mobile devices."
            ]
        }
    ],
    processSteps: [
        { heading: "Overview", image: Cb.image1 },
        { heading: "Design", image: Cb.image2 },
        { heading: "Screens", image: Cb.image3 },
        { heading: "Detail", image: Cb.image4 },
        { heading: "Flow", image: Cb.image5 },
        { heading: "Components", image: Cb.image6 },
        { heading: "Final", image: Cb.image7 },
    ]
};

export const NETGEAR = {
    id: 8,
    company: "Netgear",
    title: "NETGEAR Armor & Insight – Emailer Design Case Study",
    platform: "Web & Mobile",
    service: "Emailer",
    role: "UI Designer",
    image: Ng.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "This project focused on designing a series of marketing and product emailers for NETGEAR Armor and NETGEAR Insight, aimed at improving user engagement, feature awareness, and product adoption. The emailers were crafted to communicate cybersecurity benefits, real-time insights, and premium features in a clear, visually engaging, and conversion-focused manner across devices.",
                "My role involved designing the complete email experience — from layout and visual hierarchy to typography, CTA placement, and mobile responsiveness — ensuring consistency with NETGEAR's brand system."
            ]
        },
        {
            heading: "Problem",
            content: [
                "Existing email communications in the cybersecurity and networking space often suffer from information overload, poor readability, and weak visual hierarchy. Users quickly skim emails, especially on mobile devices, making it challenging to communicate product value effectively.",
                "The key challenges were:",
                {
                    type: "bulletList",
                    items: [
                        "Presenting complex cybersecurity features in a simple and scannable format",
                        "Maintaining brand consistency across multiple campaigns",
                        "Designing emailers that perform equally well on desktop and mobile",
                        "Encouraging users to take action without overwhelming them"
                    ]
                }
            ]
        },
        {
            heading: "Design Approach",
            content: [
                "The emailer design strategy focused on clarity, hierarchy, and modularity. Each email was structured with a clear narrative flow — starting with a strong headline, followed by a visual feature highlight, supporting content, and a prominent call-to-action.",
                "The layouts were designed using a card-based structure, allowing content blocks to be easily rearranged or reused across campaigns. This approach ensured scalability while maintaining a cohesive design language."
            ]
        },
        {
            heading: "Style Guide",
            content: [
                "Color palette and typography were defined to align with NETGEAR's brand system: Avenir (Light, Regular, Bold) for type, and a consistent color palette for hierarchy and CTAs across all emailer designs."
            ]
        }
    ],
    processSteps: [
        { heading: "Emailer design", image: Ng.image1 },
        { heading: "Variants", image: Ng.image2 },
        { heading: "Final", image: Ng.image3 },
    ]
};

export const TOGETHER = {
    id: 9,
    company: "Together we ship",
    title: "Empowering agencies to grow smarter, faster, together.",
    platform: "Web",
    service: "Loan Comparison",
    role: "UI/UX Designer",
    image: T.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "TogetherWeShip is a growth partnership platform that helps digital agencies scale through expert guidance, proven strategies, and collaborative support. Designed for simplicity and impact, it connects agencies with industry experts, streamlining their journey from discovery to measurable growth."
            ]
        },
        {
            heading: "Style Guide",
            content: [
                "Typography: Poppins. Color palette includes ghost (#C1C7D0), radical red (#FF3366), pure black (#000000), and slate (#3a3A3A) for a modern, cohesive visual system."
            ]
        },
        {
            heading: "UI Design",
            content: [
                "The UI delivers a clear value proposition (Instant Team Deployment, Unlimited Revisions & Swaps, Commitment to Quality, Close Collaboration), subscription plans, service capabilities (Interface Design, Mobile App Development, UX Research, Illustrations, Email Designs, Web Development), and conversion-focused elements including newsletter signup and contact CTAs."
            ]
        }
    ],
    processSteps: [
        { heading: "Screens", image: T.image1 },
        { heading: "Flow", image: T.image2 },
        { heading: "Detail", image: T.image3 },
        { heading: "Final", image: T.image4 },
    ]
};

export const ELEGANCIA = {
    id: 10,
    company: "Elegancia Luxury",
    title: "Design a refined digital experience that reflects the brand's core values",
    platform: "Web & Mobile",
    service: "Luxury Real Estate",
    role: "UI Designer",
    image: El.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "Elegancia Luxury is a high-end real estate brand specializing in exclusive properties across Costa Rica and Central America. The objective of this project was to design a refined digital experience that reflects the brand's core values—discretion, trust, and elegance—while showcasing luxury properties in a visually immersive and confidence-driven manner. The website needed to appeal to high-net-worth individuals, investors, and international clients seeking a seamless, premium property journey."
            ]
        },
        {
            heading: "Problem Statement",
            content: [
                "Luxury real estate websites often struggle to balance visual richness with clarity. Many platforms overwhelm users with excessive listings, cluttered layouts, or transactional messaging that dilutes brand prestige. Elegancia Luxury required a website that felt curated rather than commercial—one that builds trust, communicates exclusivity, and guides users gently toward engagement without aggressive selling."
            ]
        },
        {
            heading: "UX Strategy & Approach",
            content: [
                "The UX strategy focused on creating a calm, editorial-style browsing experience that mirrors the feel of a luxury hospitality brand. Instead of pushing listings immediately, the design emphasizes storytelling, brand values, and emotional connection. Content hierarchy was intentionally minimal, allowing users to explore at their own pace while maintaining a sense of control and confidence throughout the journey.",
                "Navigation was kept simple and intuitive, ensuring easy access to properties, brand information, and contact options without disrupting the immersive experience."
            ]
        },
        {
            heading: "Visual Design & Style Direction",
            content: [
                "The visual language reflects understated luxury. A deep blue and neutral color palette conveys trust, sophistication, and calm, while generous white space enhances readability and elegance. High-quality property photography plays a central role, acting as the primary storytelling element and reinforcing emotional appeal.",
                "Typography is refined and modern, balancing readability with a subtle sense of heritage. Soft gradients, rounded sections, and smooth transitions add warmth without distracting from content."
            ]
        },
        {
            heading: "UI Design",
            content: [
                "The UI design focuses on visual hierarchy and restraint. Headlines are bold yet elegant, while body text remains light and easy to scan. CTAs are subtle and thoughtfully placed, encouraging interaction without feeling intrusive. Cards, image blocks, and section dividers are used consistently to guide the eye and maintain rhythm across the page."
            ]
        }
    ],
    processSteps: [
        { heading: "Brand", image: El.image1 },
        { heading: "Experience", image: El.image2 },
    ]
};

export const STORMLAKECAPITAL = {
    id: 13,
    company: "Storm Lake Capital",
    title: "Storm Lake Capital is a banking and investment firm",
    platform: "Web",
    service: "Banking",
    role: "UI/UX Designer",
    image: IMAGE_URLS.SCL.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "Storm Lake Capital is a Detroit-based merchant banking and investment firm specializing in value-based partnerships with lower middle-market companies. The company provides flexible capital solutions, strategic advisory, and operational expertise to help businesses grow and succeed.",
                "The goal of this project was to design a professional, trustworthy, and conversion-focused corporate website that effectively communicates Storm Lake Capital's expertise, investment philosophy, and value proposition — while enhancing usability across devices for potential partners, investors, and business owners."
            ]
        },
        {
            heading: "Problem",
            content: [
                "Before the redesign, the main challenges were:",
                {
                    type: "bulletList",
                    items: [
                        "Unclear value communication: Users needed a clear understanding of what Storm Lake Capital stands for and how its services differ from other investment firms.",
                        "Low trust signals: As a financial services brand, trust and credibility are essential — the site needed stronger emphasis on experience, team credentials, and investment philosophy.",
                        "Poor user engagement: The original layout risked losing users quickly because key information was buried or hard to scan.",
                        "Navigation ambiguity: Visitors interested in investment criteria, leadership team details, or contact information needed a smoother, more intuitive path through the site."
                    ]
                },
                "The objective was to redesign the site to clearly articulate the brand, guide users to key information quickly, and increase conversions (e.g., consultation inquiries or partner engagement)."
            ]
        },
        {
            heading: "Solution & Design Strategy",
            content: [
                "1. Hero section with clear value statement — A concise headline paired with a short description communicates who Storm Lake Capital is and what it does — value-based investments with operational expertise.",
                "2. Core value blocks — Key attributes like Flexible Capital, Relevant Experience, and Opportunistic Approach are presented with concise descriptions that users can quickly scan.",
                "3. Navigation refinement — A simplified navigation menu was designed to help users easily access About Us, Criteria & Interests, Our Team, and Contact Us pages.",
                "4. Investment Criteria section — Clear, bulleted information outlines the types of businesses and situations Storm Lake Capital targets, helping potential partners self-identify their fit.",
                "5. Team profiles — Highlighting leadership and partner biographies strengthens credibility and fosters personal connection with site visitors.",
                "6. Contact & conversion elements — A persistent call-to-action (CTA) to contact the firm or initiate a consultation ensures that interested users always have a clear next step."
            ]
        },
        {
            heading: "Style Guide",
            content: [
                "Color palette and typography were defined to align with the brand: Barlow Condensed and IBM Plex Sans for type, with a consistent color palette (#3C3457, #AD9B5A) for hierarchy and trust."
            ]
        },
        {
            heading: "UI Design",
            content: [
                "The UI design delivers a professional, scannable corporate site with a clear hero value statement, core value blocks (Flexible Capital, Relevant Experience, Opportunistic Approach), refined navigation (About Us, Criteria & Interests, Our Team, Contact Us), investment criteria section, team profiles, and persistent contact CTAs."
            ]
        }
    ],
    processSteps: [
        { heading: "Overview", image: IMAGE_URLS.SCL.image1 },
        { heading: "UI Design", image: IMAGE_URLS.SCL.image2 },
    ]
};

export const XTAGAPP = {
    id: 12,
    company: "Ntradex",
    title: "X Tag – Reward Flow UI/UX Case Study",
    platform: "Web & Mobile",
    service: "Reward Flow",
    role: "UI Designer",
    image: IMAGE_URLS.Ntradex.main,
    projectInfoSections: [
        {
            heading: "Project Overview",
            content: [
                "Ntradex X Tag is a mobile rewards and engagement feature within the NTRADEX ecosystem, designed to incentivize users through points, badges, rankings, and social interactions. The objective of this project was to design a seamless Reward Flow that motivates users, encourages participation, and clearly communicates progress and achievements—while strictly following the existing X Tag style guide for consistency.",
                "My role focused on designing the complete reward experience, from entry points and dashboards to reward redemption and confirmation states."
            ]
        },
        {
            heading: "Problem Statement",
            content: [
                "The challenge was to design a reward flow that feels intuitive, motivating, and transparent—without adding friction or cognitive overload."
            ]
        },
        {
            heading: "UX Goals",
            content: [
                "The primary UX goals were to:",
                {
                    type: "bulletList",
                    items: [
                        "Clearly communicate reward value and user progress",
                        "Make earning and redeeming rewards feel effortless",
                        "Encourage repeat engagement through gamification",
                        "Maintain visual and interaction consistency with the X Tag style guide"
                    ]
                }
            ]
        },
        {
            heading: "Final UI Design",
            content: [
                "The final UI delivers a cohesive and engaging reward experience that feels simple, rewarding, and intuitive. Each screen is designed with clear hierarchy, smooth transitions, and consistent components, ensuring a frictionless experience across the reward journey."
            ]
        }
    ],
    processSteps: [
        { heading: "App design", image: IMAGE_URLS.Ntradex.image1 },
    ],
};
