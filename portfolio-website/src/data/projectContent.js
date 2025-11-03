import elRiadImage from "../assets/images/el-riad-shrine.png";

// ELRIADSHRINE images
import elRiadImage1 from "../assets/images/ELRIADSHRINE/1.png";
import elRiadImage2 from "../assets/images/ELRIADSHRINE/2.png";
import elRiadImage3 from "../assets/images/ELRIADSHRINE/3.png";
import elRiadImage4 from "../assets/images/ELRIADSHRINE/4.png";
import elRiadImage5 from "../assets/images/ELRIADSHRINE/5.png";
import elRiadImage6 from "../assets/images/ELRIADSHRINE/6.png";
import elRiadImage8 from "../assets/images/ELRIADSHRINE/8.png";
import elRiadImage9 from "../assets/images/ELRIADSHRINE/9.png";
import elRiadImage10 from "../assets/images/ELRIADSHRINE/10.png";
import elRiadImage11 from "../assets/images/ELRIADSHRINE/11.png";


// MYLONE images
import myLoneImage1 from "../assets/images/MYLONE/1.png";
import myLoneImage2 from "../assets/images/MYLONE/2.png";
import myLoneImage3 from "../assets/images/MYLONE/3.png";
import myLoneImage4 from "../assets/images/MYLONE/4.png";

// AUCTOSELLERAPP images
import auctoImage1 from "../assets/images/AUCTOSELLERAPP/1.png";
import auctoImage2 from "../assets/images/AUCTOSELLERAPP/2.png";
import auctoImage3 from "../assets/images/AUCTOSELLERAPP/3.png";
import auctoImage4 from "../assets/images/AUCTOSELLERAPP/4.png";
import auctoImage5 from "../assets/images/AUCTOSELLERAPP/5.png";

// KAASHIN images
import kaashinImage1 from "../assets/images/KAASHIN/1.png";
import kaashinImage2 from "../assets/images/KAASHIN/2.png";
import kaashinImage3 from "../assets/images/KAASHIN/3.png";

export const ELRIADSHRINE = {
    id: 1,
    company: "EL Riad Shrine",
    title: "Designed Ticket Booking Experience for Their Event Halls",
    platform: "Web & Mobile",
    service: "Design Ticket Booking Experience",
    role: "UI/UX Designer",
    image: elRiadImage,
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
            image: elRiadImage1,
        },
        {
            heading: "Structuring the Ticketing Booking Experience",
            image: elRiadImage2,
        },
        {
            heading: "Wireframes",
            image: elRiadImage3,
        },
        {
            heading: "Style Guide",
            image: elRiadImage4,
        },
        {
            heading: "Seat Booking Flow",
            image: elRiadImage5,
        },
        {
            heading: "Mobile Responsive",
            image: elRiadImage6,
        },
        {
            heading: "Emailers",
            image: elRiadImage8,
        },
        {
            heading: "Admin Ticket Redemption Tool",
            image: elRiadImage9,
        },
        {
            heading: "Tickets",
            image: elRiadImage11,
        },
        {
            heading: "Prototype",
            image: elRiadImage10,
        }
    ]

    // keySolutions: [
    //     {
    //         title: "1. Simplified Asset Listing Workflow",
    //         description: "Sellers can now list assets in just a few guided steps:",
    //         items: [
    //             "Upload photos/videos directly from their mobile device",
    //             "Add descriptions, categories, and compliance documentation",
    //             "Set auction details such as start date, reserve price, and duration",
    //             "Review and publish in one tap"
    //         ]
    //     },
    //     {
    //         title: "2. Real-Time Auction Monitoring",
    //         description: "A dedicated auction dashboard shows:",
    //         items: [
    //             "Live bidding activity with real-time updates",
    //             "Key stats like current bid, number of bidders, and time remaining",
    //             "Actionable controls like 'Edit Auction' or 'Pause Bidding'"
    //         ]
    //     },
    //     {
    //         title: "3. Performance & Payout Analytics",
    //         description: "A visually rich analytics screen helps sellers:",
    //         items: [
    //             "Track sales performance over time",
    //             "Identify top-performing assets",
    //             "View and download financial reports",
    //             "Track upcoming payouts with estimated dates"
    //         ]
    //     },
    //     {
    //         title: "4. Document & Compliance Manager",
    //         description: "Sellers can:",
    //         items: [
    //             "Upload, view, and manage certificates, manuals, or legal docs",
    //             "Attach files directly to listings",
    //             "Filter documents by asset, auction, or date"
    //         ]
    //     }
    // ]
};

export const MYLONE = {
    id: 2,
    company: "My Loan",
    title: "Compare loan offers easily and apply quickly with trusted lenders.",
    platform: "Web/Mobile",
    service: "Loan Comparison",
    role: "UI/UX Designer",
    image: myLoneImage1,
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
            image: myLoneImage2,
        },
        {
            heading: "Style Guide",
            image: myLoneImage3,
        },
        {
            heading: "UI Design",
            image: myLoneImage4,
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
    image: auctoImage1,
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
            image: auctoImage2,
        },
        {
            heading: "Wireframes",
            image: auctoImage3,
        },
        {
            heading: "Style Guide",
            image: auctoImage4,
        },
        {
            heading: "UI Design",
            image: auctoImage5,
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

export const KAASHIN = {
    id: 5,
    company: "Kaashin",
    title: "Brand Identity that Embodies Varanasi’s Serene Essence",
    platform: "Logo",
    service: "Hospitality",
    role: "UI/UX Designer",
    image: kaashinImage1,
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
            image: kaashinImage2
        },
        {
            heading: "Mockup",
            image: kaashinImage3
        }
    ]
};
