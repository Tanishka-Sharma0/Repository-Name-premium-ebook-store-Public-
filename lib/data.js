// ============================================
// CATEGORIES
// ============================================
export const categories = [
    "UPSC",
    "SSC",
    "Banking",
    "Railway",
    "JEE",
    "NEET",
    "CAT",
    "Programming",
    "School",
    "Government Exams",
];

// ============================================
// SUBJECTS
// ============================================
export const subjects = [
    "Polity",
    "History",
    "Geography",
    "Economics",
    "Science",
    "Maths",
    "Reasoning",
    "Biology",
    "Physics",
    "Chemistry",
    "English",
    "Computer Science",
    "Aptitude",
    "Current Affairs",
    "Environment",
];

// ============================================
// LANGUAGES
// ============================================
export const languages = [
    "English",
    "Hindi",
    "Bilingual"
];

// ============================================
// BOOKS (30 Books)
// ============================================
export const books = [
    // 1. UPSC - Polity
    {
        id: 1,
        slug: "indian-polity",
        title: "Indian Polity",
        subtitle: "For Civil Services Examination",
        author: "M. Laxmikanth",
        category: "UPSC",
        subject: "Polity",
        language: "English",
        price: 499,
        originalPrice: 699,
        discount: 28,
        pages: 850,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.9,
        reviewsCount: 2854,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        description: "Complete guide to Indian Constitution and Political System. Covers all topics for UPSC Civil Services Examination with detailed analysis and case studies.",
        tags: ["UPSC", "Polity", "Constitution", "Civil Services"],
        previewPages: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f"
        ],
        readingContent: `
            Chapter 1: Historical Background of Indian Constitution
            The Constitution of India was adopted on 26 November 1949 and came into force on 26 January 1950.
            
            Chapter 2: Making of the Constitution
            The Constituent Assembly was formed in 1946 and took 2 years, 11 months, and 18 days to complete the Constitution.
            
            Chapter 3: Preamble
            The Preamble declares India to be a Sovereign, Socialist, Secular, Democratic Republic.
            
            Chapter 4: Fundamental Rights
            The Fundamental Rights are enshrined in Part III of the Constitution from Articles 12 to 35.
            
            Chapter 5: Directive Principles of State Policy
            The Directive Principles are contained in Part IV of the Constitution.
        `,
        tableOfContents: [
            "Historical Background",
            "Making of the Constitution",
            "Preamble",
            "Union and its Territory",
            "Citizenship",
            "Fundamental Rights",
            "Directive Principles",
            "Fundamental Duties",
            "President",
            "Vice President",
            "Prime Minister",
            "Parliament",
            "Supreme Court"
        ],
        reviews: [1, 2, 3, 4, 5, 6, 7, 8],
        relatedBooks: [2, 3, 4, 5],
        totalReaders: 12500,
        completionRate: 88,
        lastUpdated: "2025-01-12"
    },

    // 2. UPSC - History
    {
        id: 2,
        slug: "indian-history",
        title: "Indian History",
        subtitle: "Ancient, Medieval & Modern India",
        author: "R.S. Sharma",
        category: "UPSC",
        subject: "History",
        language: "English",
        price: 599,
        originalPrice: 799,
        discount: 25,
        pages: 920,
        level: "Beginner",
        publishedYear: 2024,
        rating: 4.8,
        reviewsCount: 2150,
        featured: true,
        bestseller: false,
        trending: true,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
        description: "Comprehensive history of India from ancient to modern times. Essential for UPSC and competitive exams.",
        tags: ["UPSC", "History", "Ancient India", "Medieval India"],
        previewPages: [
            "https://images.unsplash.com/photo-1532012197267-da84d127e765",
            "https://images.unsplash.com/photo-1505664194779-8beaceb93744"
        ],
        readingContent: `
            Chapter 1: Prehistoric India
            The earliest evidence of human existence in India dates back to the Lower Paleolithic period.
            
            Chapter 2: Indus Valley Civilization
            One of the world's oldest urban civilizations, flourishing around 2500 BCE.
            
            Chapter 3: Vedic Period
            The Vedic period saw the composition of the Vedas and the emergence of the caste system.
        `,
        tableOfContents: [
            "Prehistoric India",
            "Indus Valley Civilization",
            "Vedic Period",
            "Mahajanapadas",
            "Mauryan Empire",
            "Gupta Empire",
            "Medieval India",
            "Mughal Empire",
            "Modern India"
        ],
        reviews: [9, 10, 11, 12, 13, 14],
        relatedBooks: [1, 3, 5],
        totalReaders: 9800,
        completionRate: 75,
        lastUpdated: "2024-11-05"
    },

    // 3. UPSC - Geography
    {
        id: 3,
        slug: "indian-geography",
        title: "Indian Geography",
        subtitle: "Physical & Human Geography",
        author: "G.C. Leong",
        category: "UPSC",
        subject: "Geography",
        language: "English",
        price: 449,
        originalPrice: 599,
        discount: 25,
        pages: 780,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.7,
        reviewsCount: 1870,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b",
        description: "Complete coverage of Indian and World Geography for UPSC and state PCS examinations.",
        tags: ["UPSC", "Geography", "Physical Geography", "Human Geography"],
        previewPages: [
            "https://images.unsplash.com/photo-1589519160732-576f165b9aad",
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
        ],
        readingContent: `
            Chapter 1: Universe and Solar System
            The universe is vast and contains billions of galaxies.
            
            Chapter 2: Earth's Interior
            The Earth is composed of three layers: crust, mantle, and core.
            
            Chapter 3: Climate of India
            India has a monsoon climate with distinct seasonal variations.
        `,
        tableOfContents: [
            "Universe",
            "Earth's Interior",
            "Rocks and Minerals",
            "Geomorphic Processes",
            "Climate",
            "Drainage System",
            "Soil and Vegetation",
            "Population",
            "Agriculture",
            "Industries"
        ],
        reviews: [15, 16, 17, 18, 19],
        relatedBooks: [1, 2, 4],
        totalReaders: 7600,
        completionRate: 70,
        lastUpdated: "2025-02-20"
    },

    // 4. UPSC - Economics
    {
        id: 4,
        slug: "indian-economy",
        title: "Indian Economy",
        subtitle: "For Civil Services Examination",
        author: "Ramesh Singh",
        category: "UPSC",
        subject: "Economics",
        language: "English",
        price: 549,
        originalPrice: 749,
        discount: 26,
        pages: 800,
        level: "Intermediate",
        publishedYear: 2024,
        rating: 4.8,
        reviewsCount: 2450,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
        description: "Detailed analysis of Indian economy for UPSC and other competitive exams.",
        tags: ["UPSC", "Economics", "Indian Economy", "Budget"],
        previewPages: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
        ],
        readingContent: `
            Chapter 1: Economic Planning
            India's economic planning began with the First Five Year Plan in 1951.
            
            Chapter 2: Agriculture
            Agriculture is the backbone of the Indian economy.
            
            Chapter 3: Industry
            India's industrial sector has grown significantly since independence.
        `,
        tableOfContents: [
            "Economic Planning",
            "Agriculture",
            "Industry",
            "Services Sector",
            "Foreign Trade",
            "Balance of Payments",
            "Inflation",
            "Poverty",
            "Unemployment",
            "Fiscal Policy"
        ],
        reviews: [20, 21, 22, 23, 24, 25],
        relatedBooks: [1, 3, 5],
        totalReaders: 8900,
        completionRate: 72,
        lastUpdated: "2024-12-15"
    },

    // 5. UPSC - Environment
    {
        id: 5,
        slug: "environment-ecology",
        title: "Environment & Ecology",
        subtitle: "For UPSC Examination",
        author: "R.K. Sharma",
        category: "UPSC",
        subject: "Environment",
        language: "English",
        price: 399,
        originalPrice: 549,
        discount: 27,
        pages: 650,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.6,
        reviewsCount: 1560,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
        description: "Comprehensive coverage of environment and ecology topics for UPSC.",
        tags: ["UPSC", "Environment", "Ecology", "Biodiversity"],
        previewPages: [
            "https://images.unsplash.com/photo-1470071459604-7b8ec44ffd6b",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
        ],
        readingContent: `
            Chapter 1: Ecosystem
            An ecosystem is a community of living organisms interacting with their environment.
            
            Chapter 2: Biodiversity
            Biodiversity refers to the variety of life on Earth.
            
            Chapter 3: Climate Change
            Climate change is one of the most pressing global challenges.
        `,
        tableOfContents: [
            "Ecosystem",
            "Biodiversity",
            "Climate Change",
            "Pollution",
            "Natural Resources",
            "Conservation",
            "Environmental Acts",
            "International Summits"
        ],
        reviews: [26, 27, 28, 29, 30],
        relatedBooks: [1, 3],
        totalReaders: 6500,
        completionRate: 65,
        lastUpdated: "2025-03-10"
    },

    // 6. UPSC - Science
    {
        id: 6,
        slug: "general-science-upsc",
        title: "General Science",
        subtitle: "For Competitive Exams",
        author: "Rajesh Kumar",
        category: "UPSC",
        subject: "Science",
        language: "English",
        price: 349,
        originalPrice: 499,
        discount: 30,
        pages: 700,
        level: "Beginner",
        publishedYear: 2024,
        rating: 4.5,
        reviewsCount: 1320,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        description: "General science concepts for UPSC and other competitive exams.",
        tags: ["UPSC", "Science", "Physics", "Chemistry", "Biology"],
        previewPages: [
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
        ],
        readingContent: `
            Chapter 1: Physics
            Physics deals with matter, energy, and their interactions.
            
            Chapter 2: Chemistry
            Chemistry is the study of matter and its properties.
            
            Chapter 3: Biology
            Biology is the study of living organisms.
        `,
        tableOfContents: [
            "Physics",
            "Chemistry",
            "Biology",
            "Space Science",
            "Nanotechnology",
            "Genetics"
        ],
        reviews: [31, 32, 33, 34],
        relatedBooks: [1, 4],
        totalReaders: 5800,
        completionRate: 60,
        lastUpdated: "2024-10-28"
    },

    // 7. SSC - Reasoning
    {
        id: 7,
        slug: "reasoning-ssc",
        title: "Reasoning Ability",
        subtitle: "For SSC & Banking Exams",
        author: "A.K. Singh",
        category: "SSC",
        subject: "Reasoning",
        language: "English",
        price: 299,
        originalPrice: 399,
        discount: 25,
        pages: 550,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.7,
        reviewsCount: 1950,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "Master reasoning ability with this comprehensive guide for SSC and Banking exams.",
        tags: ["SSC", "Reasoning", "Banking", "Aptitude"],
        previewPages: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
        ],
        readingContent: `
            Chapter 1: Verbal Reasoning
            Verbal reasoning involves analyzing and evaluating information.
            
            Chapter 2: Non-Verbal Reasoning
            Non-verbal reasoning involves visual and spatial reasoning.
            
            Chapter 3: Logical Reasoning
            Logical reasoning involves drawing conclusions from premises.
        `,
        tableOfContents: [
            "Verbal Reasoning",
            "Non-Verbal Reasoning",
            "Logical Reasoning",
            "Puzzles",
            "Seating Arrangements",
            "Data Sufficiency"
        ],
        reviews: [35, 36, 37, 38, 39, 40],
        relatedBooks: [8, 9, 10],
        totalReaders: 8500,
        completionRate: 80,
        lastUpdated: "2025-01-20"
    },

    // 8. SSC - Maths
    {
        id: 8,
        slug: "quantitative-aptitude",
        title: "Quantitative Aptitude",
        subtitle: "For SSC & Banking Exams",
        author: "R.S. Aggarwal",
        category: "SSC",
        subject: "Maths",
        language: "English",
        price: 399,
        originalPrice: 549,
        discount: 27,
        pages: 780,
        level: "Intermediate",
        publishedYear: 2024,
        rating: 4.8,
        reviewsCount: 2650,
        featured: true,
        bestseller: true,
        trending: false,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "Complete quantitative aptitude guide for SSC and banking examinations.",
        tags: ["SSC", "Maths", "Aptitude", "Banking"],
        previewPages: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
        ],
        readingContent: `
            Chapter 1: Number System
            The number system is the foundation of mathematics.
            
            Chapter 2: Arithmetic
            Arithmetic operations include addition, subtraction, multiplication, and division.
            
            Chapter 3: Algebra
            Algebra involves solving equations and inequalities.
        `,
        tableOfContents: [
            "Number System",
            "Arithmetic",
            "Algebra",
            "Geometry",
            "Trigonometry",
            "Data Interpretation",
            "Probability"
        ],
        reviews: [41, 42, 43, 44, 45],
        relatedBooks: [7, 9, 10],
        totalReaders: 9200,
        completionRate: 76,
        lastUpdated: "2024-12-01"
    },

    // 9. SSC - English
    {
        id: 9,
        slug: "english-ssc",
        title: "English Language",
        subtitle: "For SSC & Banking Exams",
        author: "Wren & Martin",
        category: "SSC",
        subject: "English",
        language: "English",
        price: 349,
        originalPrice: 499,
        discount: 30,
        pages: 600,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.6,
        reviewsCount: 1650,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
        description: "Comprehensive English language guide for competitive exams.",
        tags: ["SSC", "English", "Grammar", "Banking"],
        previewPages: [
            "https://images.unsplash.com/photo-1512820790803-83ca734da794",
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d"
        ],
        readingContent: `
            Chapter 1: Grammar Basics
            Grammar is the foundation of any language.
            
            Chapter 2: Vocabulary
            Building vocabulary is essential for competitive exams.
            
            Chapter 3: Comprehension
            Reading comprehension tests understanding of text.
        `,
        tableOfContents: [
            "Grammar Basics",
            "Vocabulary",
            "Comprehension",
            "Fill in the Blanks",
            "Error Detection",
            "Sentence Improvement",
            "Para Jumbles"
        ],
        reviews: [46, 47, 48, 49, 50],
        relatedBooks: [7, 8, 10],
        totalReaders: 7200,
        completionRate: 68,
        lastUpdated: "2025-02-15"
    },

    // 10. SSC - GK
    {
        id: 10,
        slug: "general-knowledge",
        title: "General Knowledge",
        subtitle: "For SSC & Competitive Exams",
        author: "Manohar Pandey",
        category: "SSC",
        subject: "Current Affairs",
        language: "English",
        price: 249,
        originalPrice: 349,
        discount: 28,
        pages: 500,
        level: "Beginner",
        publishedYear: 2024,
        rating: 4.5,
        reviewsCount: 1450,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
        description: "Current affairs and general knowledge for competitive exams.",
        tags: ["SSC", "GK", "Current Affairs", "Banking"],
        previewPages: [
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
            "https://images.unsplash.com/photo-1589519160732-576f165b9aad"
        ],
        readingContent: `
            Chapter 1: National Events
            Recent national events and developments.
            
            Chapter 2: International Events
            Important international events and relations.
            
            Chapter 3: Sports
            Recent sports achievements and tournaments.
        `,
        tableOfContents: [
            "National Events",
            "International Events",
            "Sports",
            "Awards and Honors",
            "Books and Authors",
            "Important Days",
            "World Organizations"
        ],
        reviews: [51, 52, 53, 54],
        relatedBooks: [7, 8, 9],
        totalReaders: 6500,
        completionRate: 70,
        lastUpdated: "2024-11-20"
    },

    // 11. Banking - Banking Awareness
    {
        id: 11,
        slug: "banking-awareness",
        title: "Banking Awareness",
        subtitle: "For Bank Exams",
        author: "S.K. Sharma",
        category: "Banking",
        subject: "Economics",
        language: "English",
        price: 299,
        originalPrice: 399,
        discount: 25,
        pages: 480,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.7,
        reviewsCount: 1850,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
        description: "Complete banking awareness for IBPS, SBI and other bank exams.",
        tags: ["Banking", "Awareness", "IBPS", "SBI"],
        previewPages: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
        ],
        readingContent: `
            Chapter 1: Banking System
            India's banking system consists of scheduled and non-scheduled banks.
            
            Chapter 2: RBI Functions
            RBI is the central bank of India.
            
            Chapter 3: Banking Services
            Various banking services available to customers.
        `,
        tableOfContents: [
            "Banking System",
            "RBI Functions",
            "Banking Services",
            "Loans and Advances",
            "Digital Banking",
            "Financial Inclusion",
            "Recent Reforms"
        ],
        reviews: [55, 56, 57, 58, 59],
        relatedBooks: [12, 13, 14],
        totalReaders: 8200,
        completionRate: 78,
        lastUpdated: "2025-02-28"
    },

    // 12. Banking - Data Interpretation
    {
        id: 12,
        slug: "data-interpretation",
        title: "Data Interpretation",
        subtitle: "For Bank Exams",
        author: "A.K. Gupta",
        category: "Banking",
        subject: "Maths",
        language: "English",
        price: 349,
        originalPrice: 499,
        discount: 30,
        pages: 550,
        level: "Intermediate",
        publishedYear: 2024,
        rating: 4.6,
        reviewsCount: 1540,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        description: "Master data interpretation for banking and competitive exams.",
        tags: ["Banking", "Data Interpretation", "Maths"],
        previewPages: [
            "https://images.unsplash.com/photo-1509228468518-180dd4864904",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba"
        ],
        readingContent: `
            Chapter 1: Tables
            Data presented in tabular form.
            
            Chapter 2: Bar Graphs
            Visual representation of data using bars.
            
            Chapter 3: Pie Charts
            Circular representation of data.
        `,
        tableOfContents: [
            "Tables",
            "Bar Graphs",
            "Pie Charts",
            "Line Graphs",
            "Caselets",
            "Data Sufficiency"
        ],
        reviews: [60, 61, 62, 63],
        relatedBooks: [11, 13, 14],
        totalReaders: 6800,
        completionRate: 65,
        lastUpdated: "2024-12-10"
    },

    // 13. Banking - English
    {
        id: 13,
        slug: "english-banking",
        title: "English for Banking",
        subtitle: "For Bank Exams",
        author: "S.P. Bakshi",
        category: "Banking",
        subject: "English",
        language: "English",
        price: 279,
        originalPrice: 379,
        discount: 26,
        pages: 450,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.4,
        reviewsCount: 1250,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
        description: "English language preparation for bank exams.",
        tags: ["Banking", "English", "Grammar"],
        previewPages: [
            "https://images.unsplash.com/photo-1512820790803-83ca734da794",
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d"
        ],
        readingContent: `
            Chapter 1: Reading Comprehension
            Understanding and analyzing written passages.
            
            Chapter 2: Cloze Test
            Filling blanks with appropriate words.
            
            Chapter 3: Error Spotting
            Identifying grammatical errors.
        `,
        tableOfContents: [
            "Reading Comprehension",
            "Cloze Test",
            "Error Spotting",
            "Para Jumbles",
            "Fill in the Blanks",
            "Idioms and Phrases"
        ],
        reviews: [64, 65, 66, 67],
        relatedBooks: [11, 12, 14],
        totalReaders: 5900,
        completionRate: 62,
        lastUpdated: "2025-01-25"
    },

    // 14. Banking - Reasoning
    {
        id: 14,
        slug: "reasoning-banking",
        title: "Reasoning for Banking",
        subtitle: "For Bank Exams",
        author: "M.K. Pandey",
        category: "Banking",
        subject: "Reasoning",
        language: "English",
        price: 299,
        originalPrice: 399,
        discount: 25,
        pages: 500,
        level: "Intermediate",
        publishedYear: 2024,
        rating: 4.7,
        reviewsCount: 1750,
        featured: true,
        bestseller: false,
        trending: true,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "Reasoning ability preparation for bank exams.",
        tags: ["Banking", "Reasoning", "Aptitude"],
        previewPages: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
        ],
        readingContent: `
            Chapter 1: Syllogism
            Drawing logical conclusions from premises.
            
            Chapter 2: Inequality
            Solving mathematical inequalities.
            
            Chapter 3: Puzzles
            Solving complex puzzles.
        `,
        tableOfContents: [
            "Syllogism",
            "Inequality",
            "Puzzles",
            "Seating Arrangement",
            "Blood Relations",
            "Coding-Decoding",
            "Data Sufficiency"
        ],
        reviews: [68, 69, 70, 71, 72],
        relatedBooks: [11, 12, 13],
        totalReaders: 7500,
        completionRate: 73,
        lastUpdated: "2024-11-15"
    },

    // 15. JEE - Physics
    {
        id: 15,
        slug: "physics-jee",
        title: "Concepts of Physics",
        subtitle: "For JEE Main & Advanced",
        author: "H.C. Verma",
        category: "JEE",
        subject: "Physics",
        language: "English",
        price: 599,
        originalPrice: 799,
        discount: 25,
        pages: 900,
        level: "Advanced",
        publishedYear: 2025,
        rating: 4.9,
        reviewsCount: 3250,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        description: "Classic physics textbook for JEE preparation.",
        tags: ["JEE", "Physics", "Advanced"],
        previewPages: [
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
        ],
        readingContent: `
            Chapter 1: Mechanics
            Motion, forces, and energy.
            
            Chapter 2: Thermodynamics
            Heat, temperature, and energy transfer.
            
            Chapter 3: Electromagnetism
            Electric and magnetic fields.
        `,
        tableOfContents: [
            "Mechanics",
            "Thermodynamics",
            "Electromagnetism",
            "Optics",
            "Modern Physics",
            "Wave Motion"
        ],
        reviews: [73, 74, 75, 76, 77, 78],
        relatedBooks: [16, 17, 18],
        totalReaders: 12000,
        completionRate: 82,
        lastUpdated: "2025-01-30"
    },

    // 16. JEE - Chemistry
    {
        id: 16,
        slug: "chemistry-jee",
        title: "Physical Chemistry",
        subtitle: "For JEE Main & Advanced",
        author: "O.P. Tandon",
        category: "JEE",
        subject: "Chemistry",
        language: "English",
        price: 549,
        originalPrice: 749,
        discount: 26,
        pages: 850,
        level: "Advanced",
        publishedYear: 2024,
        rating: 4.8,
        reviewsCount: 2850,
        featured: true,
        bestseller: true,
        trending: false,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        description: "Physical chemistry for JEE preparation.",
        tags: ["JEE", "Chemistry", "Physical"],
        previewPages: [
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
        ],
        readingContent: `
            Chapter 1: Atomic Structure
            Structure of atoms and subatomic particles.
            
            Chapter 2: Chemical Bonding
            Types of chemical bonds and molecular structures.
            
            Chapter 3: Thermodynamics
            Energy changes in chemical reactions.
        `,
        tableOfContents: [
            "Atomic Structure",
            "Chemical Bonding",
            "Thermodynamics",
            "Chemical Equilibrium",
            "Ionic Equilibrium",
            "Electrochemistry",
            "Kinetics"
        ],
        reviews: [79, 80, 81, 82, 83],
        relatedBooks: [15, 17, 18],
        totalReaders: 10500,
        completionRate: 78,
        lastUpdated: "2024-12-20"
    },

    // 17. JEE - Maths
    {
        id: 17,
        slug: "maths-jee",
        title: "Mathematics for JEE",
        subtitle: "For JEE Main & Advanced",
        author: "Amit M. Agarwal",
        category: "JEE",
        subject: "Maths",
        language: "English",
        price: 549,
        originalPrice: 749,
        discount: 26,
        pages: 880,
        level: "Advanced",
        publishedYear: 2025,
        rating: 4.7,
        reviewsCount: 2650,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "Comprehensive mathematics for JEE preparation.",
        tags: ["JEE", "Maths", "Advanced"],
        previewPages: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
        ],
        readingContent: `
            Chapter 1: Algebra
            Polynomials, sequences, and series.
            
            Chapter 2: Calculus
            Limits, derivatives, and integrals.
            
            Chapter 3: Coordinate Geometry
            Lines, circles, and conics.
        `,
        tableOfContents: [
            "Algebra",
            "Calculus",
            "Coordinate Geometry",
            "Trigonometry",
            "Matrices and Determinants",
            "Probability"
        ],
        reviews: [84, 85, 86, 87, 88],
        relatedBooks: [15, 16, 18],
        totalReaders: 9800,
        completionRate: 75,
        lastUpdated: "2025-02-10"
    },

    // 18. NEET - Biology
    {
        id: 18,
        slug: "biology-neet",
        title: "Biology for NEET",
        subtitle: "For NEET Examination",
        author: "Trueman",
        category: "NEET",
        subject: "Biology",
        language: "English",
        price: 499,
        originalPrice: 699,
        discount: 28,
        pages: 820,
        level: "Intermediate",
        publishedYear: 2025,
        rating: 4.9,
        reviewsCount: 3450,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        description: "Complete biology guide for NEET preparation.",
        tags: ["NEET", "Biology", "Medical"],
        previewPages: [
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d"
        ],
        readingContent: `
            Chapter 1: Cell Biology
            Structure and function of cells.
            
            Chapter 2: Genetics
            Principles of heredity and variation.
            
            Chapter 3: Evolution
            Theories and evidence of evolution.
        `,
        tableOfContents: [
            "Cell Biology",
            "Genetics",
            "Evolution",
            "Plant Physiology",
            "Human Physiology",
            "Ecology",
            "Biotechnology"
        ],
        reviews: [89, 90, 91, 92, 93, 94],
        relatedBooks: [19, 20],
        totalReaders: 13000,
        completionRate: 85,
        lastUpdated: "2025-03-01"
    },

    // 19. NEET - Physics
    {
        id: 19,
        slug: "physics-neet",
        title: "Physics for NEET",
        subtitle: "For NEET Examination",
        author: "D.C. Pandey",
        category: "NEET",
        subject: "Physics",
        language: "English",
        price: 449,
        originalPrice: 649,
        discount: 30,
        pages: 750,
        level: "Intermediate",
        publishedYear: 2024,
        rating: 4.7,
        reviewsCount: 2150,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        description: "Physics guide for NEET preparation.",
        tags: ["NEET", "Physics", "Medical"],
        previewPages: [
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31"
        ],
        readingContent: `
            Chapter 1: Kinematics
            Motion in one and two dimensions.
            
            Chapter 2: Laws of Motion
            Newton's laws of motion.
            
            Chapter 3: Work and Energy
            Work-energy theorem and conservation.
        `,
        tableOfContents: [
            "Kinematics",
            "Laws of Motion",
            "Work and Energy",
            "Rotational Motion",
            "Gravitation",
            "Properties of Matter"
        ],
        reviews: [95, 96, 97, 98],
        relatedBooks: [18, 20],
        totalReaders: 8500,
        completionRate: 70,
        lastUpdated: "2024-11-28"
    },

    // 20. NEET - Chemistry
    {
        id: 20,
        slug: "chemistry-neet",
        title: "Chemistry for NEET",
        subtitle: "For NEET Examination",
        author: "M.S. Chauhan",
        category: "NEET",
        subject: "Chemistry",
        language: "English",
        price: 449,
        originalPrice: 649,
        discount: 30,
        pages: 780,
        level: "Intermediate",
        publishedYear: 2025,
        rating: 4.6,
        reviewsCount: 2050,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        description: "Chemistry guide for NEET preparation.",
        tags: ["NEET", "Chemistry", "Medical"],
        previewPages: [
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d"
        ],
        readingContent: `
            Chapter 1: Organic Chemistry
            Carbon compounds and their reactions.
            
            Chapter 2: Inorganic Chemistry
            Elements and their compounds.
            
            Chapter 3: Physical Chemistry
            Chemical principles and laws.
        `,
        tableOfContents: [
            "Organic Chemistry",
            "Inorganic Chemistry",
            "Physical Chemistry",
            "Biomolecules",
            "Environmental Chemistry"
        ],
        reviews: [99, 100, 101, 102],
        relatedBooks: [18, 19],
        totalReaders: 7800,
        completionRate: 68,
        lastUpdated: "2025-02-05"
    },

    // 21. CAT - Quantitative Ability
    {
        id: 21,
        slug: "quantitative-cat",
        title: "Quantitative Ability",
        subtitle: "For CAT Examination",
        author: "Arun Sharma",
        category: "CAT",
        subject: "Maths",
        language: "English",
        price: 399,
        originalPrice: 549,
        discount: 27,
        pages: 680,
        level: "Advanced",
        publishedYear: 2025,
        rating: 4.8,
        reviewsCount: 2350,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "Quantitative ability preparation for CAT and MBA entrance exams.",
        tags: ["CAT", "MBA", "Quantitative", "Aptitude"],
        previewPages: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
        ],
        readingContent: `
            Chapter 1: Arithmetic
            Basic arithmetic operations and applications.
            
            Chapter 2: Algebra
            Advanced algebraic concepts.
            
            Chapter 3: Geometry
            Geometric shapes and theorems.
        `,
        tableOfContents: [
            "Arithmetic",
            "Algebra",
            "Geometry",
            "Number Theory",
            "Modern Math",
            "Data Sufficiency"
        ],
        reviews: [103, 104, 105, 106],
        relatedBooks: [22, 23],
        totalReaders: 9500,
        completionRate: 80,
        lastUpdated: "2025-02-18"
    },

    // 22. CAT - Logical Reasoning
    {
        id: 22,
        slug: "logical-reasoning-cat",
        title: "Logical Reasoning",
        subtitle: "For CAT Examination",
        author: "R.K. Gupta",
        category: "CAT",
        subject: "Reasoning",
        language: "English",
        price: 349,
        originalPrice: 499,
        discount: 30,
        pages: 580,
        level: "Advanced",
        publishedYear: 2024,
        rating: 4.7,
        reviewsCount: 1850,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "Logical reasoning for CAT and MBA entrance exams.",
        tags: ["CAT", "MBA", "Reasoning", "Logic"],
        previewPages: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
        ],
        readingContent: `
            Chapter 1: Puzzles
            Solving complex puzzles.
            
            Chapter 2: Logical Reasoning
            Deductive and inductive reasoning.
            
            Chapter 3: Data Interpretation
            Analyzing and interpreting data.
        `,
        tableOfContents: [
            "Puzzles",
            "Logical Reasoning",
            "Data Interpretation",
            "Critical Reasoning",
            "Seating Arrangements"
        ],
        reviews: [107, 108, 109, 110],
        relatedBooks: [21, 23],
        totalReaders: 7200,
        completionRate: 72,
        lastUpdated: "2024-12-25"
    },

    // 23. CAT - Verbal Ability
    {
        id: 23,
        slug: "verbal-ability-cat",
        title: "Verbal Ability",
        subtitle: "For CAT Examination",
        author: "Nishit Sinha",
        category: "CAT",
        subject: "English",
        language: "English",
        price: 349,
        originalPrice: 499,
        discount: 30,
        pages: 550,
        level: "Advanced",
        publishedYear: 2025,
        rating: 4.6,
        reviewsCount: 1650,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
        description: "Verbal ability for CAT and MBA entrance exams.",
        tags: ["CAT", "MBA", "Verbal", "English"],
        previewPages: [
            "https://images.unsplash.com/photo-1512820790803-83ca734da794",
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d"
        ],
        readingContent: `
            Chapter 1: Reading Comprehension
            Understanding and analyzing passages.
            
            Chapter 2: Grammar
            Advanced grammar concepts.
            
            Chapter 3: Vocabulary
            Building advanced vocabulary.
        `,
        tableOfContents: [
            "Reading Comprehension",
            "Grammar",
            "Vocabulary",
            "Sentence Correction",
            "Para Jumbles",
            "Summary Writing"
        ],
        reviews: [111, 112, 113, 114],
        relatedBooks: [21, 22],
        totalReaders: 6800,
        completionRate: 65,
        lastUpdated: "2025-01-15"
    },

    // 24. Programming - Python
    {
        id: 24,
        slug: "python-programming",
        title: "Python Programming",
        subtitle: "From Basics to Advanced",
        author: "Eric Matthes",
        category: "Programming",
        subject: "Computer Science",
        language: "English",
        price: 399,
        originalPrice: 549,
        discount: 27,
        pages: 620,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.8,
        reviewsCount: 2450,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description: "Complete Python programming guide for beginners and advanced learners.",
        tags: ["Programming", "Python", "Coding"],
        previewPages: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        ],
        readingContent: `
            Chapter 1: Introduction to Python
            Python is a high-level, interpreted programming language.
            
            Chapter 2: Variables and Data Types
            Python supports various data types like int, float, string, and list.
            
            Chapter 3: Control Flow
            Conditional statements and loops in Python.
        `,
        tableOfContents: [
            "Introduction to Python",
            "Variables and Data Types",
            "Control Flow",
            "Functions",
            "Object-Oriented Programming",
            "File Handling",
            "Database Connectivity"
        ],
        reviews: [115, 116, 117, 118, 119],
        relatedBooks: [25, 26],
        totalReaders: 11000,
        completionRate: 84,
        lastUpdated: "2025-03-05"
    },

    // 25. Programming - JavaScript
    {
        id: 25,
        slug: "javascript-programming",
        title: "JavaScript: The Complete Guide",
        subtitle: "For Beginners to Advanced",
        author: "David Flanagan",
        category: "Programming",
        subject: "Computer Science",
        language: "English",
        price: 349,
        originalPrice: 499,
        discount: 30,
        pages: 580,
        level: "Beginner",
        publishedYear: 2024,
        rating: 4.7,
        reviewsCount: 1950,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        description: "Complete JavaScript guide from basics to advanced concepts.",
        tags: ["Programming", "JavaScript", "Web Development"],
        previewPages: [
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        ],
        readingContent: `
            Chapter 1: JavaScript Basics
            JavaScript is a programming language for web development.
            
            Chapter 2: DOM Manipulation
            Working with Document Object Model.
            
            Chapter 3: Asynchronous JavaScript
            Promises, async/await, and callbacks.
        `,
        tableOfContents: [
            "JavaScript Basics",
            "DOM Manipulation",
            "Asynchronous JavaScript",
            "ES6 Features",
            "Frameworks Overview",
            "Node.js Basics"
        ],
        reviews: [120, 121, 122, 123],
        relatedBooks: [24, 26],
        totalReaders: 8900,
        completionRate: 76,
        lastUpdated: "2024-12-15"
    },

    // 26. Programming - React
    {
        id: 26,
        slug: "react-js",
        title: "React JS Mastery",
        subtitle: "Learn React with Projects",
        author: "Kent C. Dodds",
        category: "Programming",
        subject: "Computer Science",
        language: "English",
        price: 449,
        originalPrice: 649,
        discount: 30,
        pages: 650,
        level: "Intermediate",
        publishedYear: 2025,
        rating: 4.9,
        reviewsCount: 2750,
        featured: true,
        bestseller: true,
        trending: true,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        description: "Master React JS with real-world projects and best practices.",
        tags: ["Programming", "React", "Web Development", "Frontend"],
        previewPages: [
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        ],
        readingContent: `
            Chapter 1: React Basics
            React is a component-based library for building UIs.
            
            Chapter 2: State and Props
            Managing state and passing props in React.
            
            Chapter 3: Hooks
            Using useState, useEffect, and other hooks.
        `,
        tableOfContents: [
            "React Basics",
            "State and Props",
            "Hooks",
            "Context API",
            "Redux",
            "Next.js",
            "React Router"
        ],
        reviews: [124, 125, 126, 127, 128],
        relatedBooks: [24, 25],
        totalReaders: 10200,
        completionRate: 82,
        lastUpdated: "2025-02-22"
    },

    // 27. Railway - Technical
    {
        id: 27,
        slug: "technical-railway",
        title: "Technical Subjects",
        subtitle: "For Railway Exams",
        author: "S.K. Kumar",
        category: "Railway",
        subject: "Science",
        language: "English",
        price: 299,
        originalPrice: 399,
        discount: 25,
        pages: 450,
        level: "Beginner",
        publishedYear: 2024,
        rating: 4.5,
        reviewsCount: 1250,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
        description: "Technical subjects for railway recruitment exams.",
        tags: ["Railway", "Technical", "Engineering"],
        previewPages: [
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"
        ],
        readingContent: `
            Chapter 1: Electrical Engineering
            Basic electrical principles and circuits.
            
            Chapter 2: Mechanical Engineering
            Mechanical principles and systems.
            
            Chapter 3: Civil Engineering
            Civil engineering basics.
        `,
        tableOfContents: [
            "Electrical Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Computer Science",
            "General Science"
        ],
        reviews: [129, 130, 131, 132],
        relatedBooks: [28, 29],
        totalReaders: 5800,
        completionRate: 62,
        lastUpdated: "2024-11-10"
    },

    // 28. Government Exams - General Studies
    {
        id: 28,
        slug: "general-studies-govt",
        title: "General Studies",
        subtitle: "For State PCS & Govt Exams",
        author: "Arihant Expert",
        category: "Government Exams",
        subject: "Current Affairs",
        language: "English",
        price: 349,
        originalPrice: 499,
        discount: 30,
        pages: 600,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.6,
        reviewsCount: 1850,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        description: "General studies for state PCS and government exams.",
        tags: ["Government Exams", "General Studies", "PCS"],
        previewPages: [
            "https://images.unsplash.com/photo-1589519160732-576f165b9aad",
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
        ],
        readingContent: `
            Chapter 1: Indian Polity
            Constitution and political system.
            
            Chapter 2: History
            Indian and world history.
            
            Chapter 3: Geography
            Physical and human geography.
        `,
        tableOfContents: [
            "Indian Polity",
            "History",
            "Geography",
            "Economy",
            "Environment",
            "Science and Technology",
            "Current Affairs"
        ],
        reviews: [133, 134, 135, 136],
        relatedBooks: [29, 30],
        totalReaders: 7200,
        completionRate: 70,
        lastUpdated: "2025-01-20"
    },

    // 29. School - 10th Science
    {
        id: 29,
        slug: "science-10th",
        title: "Science for Class 10",
        subtitle: "NCERT Based",
        author: "NCERT Experts",
        category: "School",
        subject: "Science",
        language: "English",
        price: 149,
        originalPrice: 249,
        discount: 40,
        pages: 350,
        level: "Beginner",
        publishedYear: 2025,
        rating: 4.5,
        reviewsCount: 1550,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69",
        description: "NCERT based science for class 10 CBSE and state boards.",
        tags: ["School", "Science", "CBSE"],
        previewPages: [
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31",
            "https://images.unsplash.com/photo-1532094349884-543bc11b234d"
        ],
        readingContent: `
            Chapter 1: Chemical Reactions
            Types of chemical reactions.
            
            Chapter 2: Acids and Bases
            Properties and uses of acids and bases.
            
            Chapter 3: Life Processes
            Nutrition, respiration, and transportation.
        `,
        tableOfContents: [
            "Chemical Reactions",
            "Acids and Bases",
            "Life Processes",
            "Light",
            "Electricity",
            "Magnetic Effects"
        ],
        reviews: [137, 138, 139, 140],
        relatedBooks: [30],
        totalReaders: 6500,
        completionRate: 72,
        lastUpdated: "2025-02-15"
    },

    // 30. School - 12th Maths
    {
        id: 30,
        slug: "maths-12th",
        title: "Mathematics for Class 12",
        subtitle: "NCERT Based",
        author: "NCERT Experts",
        category: "School",
        subject: "Maths",
        language: "English",
        price: 199,
        originalPrice: 349,
        discount: 43,
        pages: 400,
        level: "Intermediate",
        publishedYear: 2025,
        rating: 4.6,
        reviewsCount: 1650,
        featured: false,
        bestseller: false,
        trending: false,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "NCERT based mathematics for class 12 CBSE and state boards.",
        tags: ["School", "Maths", "CBSE", "12th"],
        previewPages: [
            "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
        ],
        readingContent: `
            Chapter 1: Relations and Functions
            Types of relations and functions.
            
            Chapter 2: Calculus
            Derivatives and integrals.
            
            Chapter 3: Probability
            Probability concepts and distributions.
        `,
        tableOfContents: [
            "Relations and Functions",
            "Calculus",
            "Probability",
            "Vectors",
            "3D Geometry",
            "Linear Programming"
        ],
        reviews: [141, 142, 143, 144],
        relatedBooks: [29],
        totalReaders: 6800,
        completionRate: 74,
        lastUpdated: "2025-02-28"
    }
];

// ============================================
// CONTINUE READING
// ============================================
export const continueReading = [
    {
        id: 1,
        bookId: 1,
        currentPage: 120,
        totalPages: 850,
        progress: 14,
        lastRead: "2026-06-20"
    },
    {
        id: 2,
        bookId: 4,
        currentPage: 250,
        totalPages: 800,
        progress: 31,
        lastRead: "2026-06-19"
    },
    {
        id: 3,
        bookId: 15,
        currentPage: 450,
        totalPages: 900,
        progress: 50,
        lastRead: "2026-06-18"
    },
    {
        id: 4,
        bookId: 24,
        currentPage: 150,
        totalPages: 620,
        progress: 24,
        lastRead: "2026-06-17"
    }
];

// ============================================
// PURCHASED BOOKS (My Library)
// ============================================
export const myLibrary = [
    { bookId: 1, purchasedAt: "2026-05-12" },
    { bookId: 2, purchasedAt: "2026-05-15" },
    { bookId: 4, purchasedAt: "2026-05-20" },
    { bookId: 7, purchasedAt: "2026-05-25" },
    { bookId: 11, purchasedAt: "2026-06-01" },
    { bookId: 15, purchasedAt: "2026-06-05" },
    { bookId: 18, purchasedAt: "2026-06-08" },
    { bookId: 21, purchasedAt: "2026-06-10" },
    { bookId: 24, purchasedAt: "2026-06-12" },
    { bookId: 26, purchasedAt: "2026-06-15" }
];

// ============================================
// BOOKMARKS
// ============================================
export const bookmarks = [
    { id: 1, bookId: 1, page: 45, note: "Important Fundamental Rights" },
    { id: 2, bookId: 1, page: 89, note: "Preamble keywords" },
    { id: 3, bookId: 4, page: 120, note: "Budget 2024 highlights" },
    { id: 4, bookId: 15, page: 234, note: "Newton's laws formula" },
    { id: 5, bookId: 24, page: 78, note: "Python list methods" }
];

// ============================================
// NOTES
// ============================================
export const notes = [
    {
        id: 1,
        bookId: 1,
        selectedText: "Fundamental Rights are enforceable through courts.",
        note: "Important for Prelims and Mains both"
    },
    {
        id: 2,
        bookId: 1,
        selectedText: "Directive Principles are non-justiciable but fundamental for governance.",
        note: "Compare with Fundamental Rights"
    },
    {
        id: 3,
        bookId: 4,
        selectedText: "Fiscal deficit is the difference between total expenditure and total receipts.",
        note: "Important for Economics Paper"
    },
    {
        id: 4,
        bookId: 15,
        selectedText: "Newton's second law states F = ma.",
        note: "Memorize formula with examples"
    },
    {
        id: 5,
        bookId: 24,
        selectedText: "List comprehension in Python is a concise way to create lists.",
        note: "Practice with examples"
    }
];

// ============================================
// REVIEWS (100+ Reviews)
// ============================================
export const reviews = [
    // Book 1 - Indian Polity
    { id: 1, bookId: 1, name: "Rahul Sharma", avatar: "https://i.pravatar.cc/150?img=1", rating: 5, comment: "Best polity book for UPSC. Every topic explained clearly.", date: "2026-04-12" },
    { id: 2, bookId: 1, name: "Aditi Singh", avatar: "https://i.pravatar.cc/150?img=2", rating: 4, comment: "Very detailed and exam oriented content.", date: "2026-04-10" },
    { id: 3, bookId: 1, name: "Vikram Patel", avatar: "https://i.pravatar.cc/150?img=3", rating: 5, comment: "Helped me clear UPSC Prelims. Highly recommended!", date: "2026-04-08" },
    { id: 4, bookId: 1, name: "Priya Kumari", avatar: "https://i.pravatar.cc/150?img=4", rating: 5, comment: "The best resource for Indian Polity.", date: "2026-04-05" },
    { id: 5, bookId: 1, name: "Amit Verma", avatar: "https://i.pravatar.cc/150?img=5", rating: 4, comment: "Good book but needs more practice questions.", date: "2026-04-03" },
    { id: 6, bookId: 1, name: "Neha Gupta", avatar: "https://i.pravatar.cc/150?img=6", rating: 5, comment: "Must read for UPSC aspirants!", date: "2026-04-01" },
    { id: 7, bookId: 1, name: "Ravi Kumar", avatar: "https://i.pravatar.cc/150?img=7", rating: 4, comment: "Content is comprehensive and well organized.", date: "2026-03-28" },
    { id: 8, bookId: 1, name: "Sneha Reddy", avatar: "https://i.pravatar.cc/150?img=8", rating: 5, comment: "Perfect for beginners and advanced learners.", date: "2026-03-25" },

    // Book 2 - Indian History
    { id: 9, bookId: 2, name: "Vivek Singh", avatar: "https://i.pravatar.cc/150?img=9", rating: 5, comment: "Covers all historical periods comprehensively.", date: "2026-04-15" },
    { id: 10, bookId: 2, name: "Meera Iyer", avatar: "https://i.pravatar.cc/150?img=10", rating: 4, comment: "Good for competitive exams preparation.", date: "2026-04-13" },
    { id: 11, bookId: 2, name: "Arjun Menon", avatar: "https://i.pravatar.cc/150?img=11", rating: 5, comment: "Very well researched and presented.", date: "2026-04-11" },
    { id: 12, bookId: 2, name: "Lata Sharma", avatar: "https://i.pravatar.cc/150?img=12", rating: 4, comment: "Detailed but some chapters need simplification.", date: "2026-04-09" },
    { id: 13, bookId: 2, name: "Kiran Reddy", avatar: "https://i.pravatar.cc/150?img=13", rating: 5, comment: "Excellent coverage of modern Indian history.", date: "2026-04-07" },
    { id: 14, bookId: 2, name: "Suresh Kumar", avatar: "https://i.pravatar.cc/150?img=14", rating: 4, comment: "Good reference book for UPSC history.", date: "2026-04-05" },

    // Book 3 - Indian Geography
    { id: 15, bookId: 3, name: "Ritu Patel", avatar: "https://i.pravatar.cc/150?img=15", rating: 5, comment: "Best geography book for UPSC.", date: "2026-04-18" },
    { id: 16, bookId: 3, name: "Mohan Das", avatar: "https://i.pravatar.cc/150?img=16", rating: 4, comment: "Good explanation of physical geography.", date: "2026-04-16" },
    { id: 17, bookId: 3, name: "Sita Ram", avatar: "https://i.pravatar.cc/150?img=17", rating: 5, comment: "Perfect for UPSC and state PCS exams.", date: "2026-04-14" },
    { id: 18, bookId: 3, name: "Gita Sharma", avatar: "https://i.pravatar.cc/150?img=18", rating: 4, comment: "Comprehensive but needs more maps.", date: "2026-04-12" },
    { id: 19, bookId: 3, name: "Rajesh Kumar", avatar: "https://i.pravatar.cc/150?img=19", rating: 5, comment: "Very easy to understand language.", date: "2026-04-10" },

    // Book 4 - Indian Economy
    { id: 20, bookId: 4, name: "Sudhir Gupta", avatar: "https://i.pravatar.cc/150?img=20", rating: 5, comment: "Most comprehensive economy book.", date: "2026-04-20" },
    { id: 21, bookId: 4, name: "Pooja Agarwal", avatar: "https://i.pravatar.cc/150?img=21", rating: 5, comment: "Updated with latest budget and economic survey.", date: "2026-04-18" },
    { id: 22, bookId: 4, name: "Gopal Krishnan", avatar: "https://i.pravatar.cc/150?img=22", rating: 4, comment: "Good book but requires some prior knowledge.", date: "2026-04-16" },
    { id: 23, bookId: 4, name: "Sunita Singh", avatar: "https://i.pravatar.cc/150?img=23", rating: 5, comment: "Best for understanding Indian economy concepts.", date: "2026-04-14" },
    { id: 24, bookId: 4, name: "Anand Kumar", avatar: "https://i.pravatar.cc/150?img=24", rating: 4, comment: "Detailed but could have more examples.", date: "2026-04-12" },
    { id: 25, bookId: 4, name: "Bhavna Reddy", avatar: "https://i.pravatar.cc/150?img=25", rating: 5, comment: "Highly recommended for UPSC economics.", date: "2026-04-10" },

    // Book 5 - Environment
    { id: 26, bookId: 5, name: "Deepak Sharma", avatar: "https://i.pravatar.cc/150?img=26", rating: 5, comment: "Very relevant for current UPSC pattern.", date: "2026-04-22" },
    { id: 27, bookId: 5, name: "Kavita Jain", avatar: "https://i.pravatar.cc/150?img=27", rating: 4, comment: "Good coverage of environmental issues.", date: "2026-04-20" },
    { id: 28, bookId: 5, name: "Ramesh Verma", avatar: "https://i.pravatar.cc/150?img=28", rating: 5, comment: "Best book for ecology and environment.", date: "2026-04-18" },
    { id: 29, bookId: 5, name: "Jyoti Patel", avatar: "https://i.pravatar.cc/150?img=29", rating: 4, comment: "Good but needs more diagrams.", date: "2026-04-16" },
    { id: 30, bookId: 5, name: "Sanjay Singh", avatar: "https://i.pravatar.cc/150?img=30", rating: 5, comment: "Excellent for prelims and mains.", date: "2026-04-14" },

    // Book 6 - General Science
    { id: 31, bookId: 6, name: "Seema Gupta", avatar: "https://i.pravatar.cc/150?img=31", rating: 5, comment: "Very helpful for general science.", date: "2026-04-25" },
    { id: 32, bookId: 6, name: "Raj Kumar", avatar: "https://i.pravatar.cc/150?img=32", rating: 4, comment: "Concise and to the point.", date: "2026-04-23" },
    { id: 33, bookId: 6, name: "Anita Singh", avatar: "https://i.pravatar.cc/150?img=33", rating: 5, comment: "Best for quick revision.", date: "2026-04-21" },
    { id: 34, bookId: 6, name: "Vijay Sharma", avatar: "https://i.pravatar.cc/150?img=34", rating: 4, comment: "Good but could include more questions.", date: "2026-04-19" },

    // Book 7 - Reasoning SSC
    { id: 35, bookId: 7, name: "Ravi Shankar", avatar: "https://i.pravatar.cc/150?img=35", rating: 5, comment: "Best reasoning book for SSC.", date: "2026-04-28" },
    { id: 36, bookId: 7, name: "Lakshmi Narayan", avatar: "https://i.pravatar.cc/150?img=36", rating: 5, comment: "Very helpful for reasoning preparation.", date: "2026-04-26" },
    { id: 37, bookId: 7, name: "Rajesh Gupta", avatar: "https://i.pravatar.cc/150?img=37", rating: 4, comment: "Good book with ample practice questions.", date: "2026-04-24" },
    { id: 38, bookId: 7, name: "Priyanka Reddy", avatar: "https://i.pravatar.cc/150?img=38", rating: 5, comment: "Cleared all concepts perfectly.", date: "2026-04-22" },
    { id: 39, bookId: 7, name: "Ashok Kumar", avatar: "https://i.pravatar.cc/150?img=39", rating: 4, comment: "Good for beginners and intermediates.", date: "2026-04-20" },
    { id: 40, bookId: 7, name: "Sunanda Jain", avatar: "https://i.pravatar.cc/150?img=40", rating: 5, comment: "Highly recommended for SSC aspirants.", date: "2026-04-18" },

    // Book 8 - Quantitative Aptitude
    { id: 41, bookId: 8, name: "Manish Kumar", avatar: "https://i.pravatar.cc/150?img=41", rating: 5, comment: "Best for quantitative aptitude practice.", date: "2026-05-01" },
    { id: 42, bookId: 8, name: "Renu Agarwal", avatar: "https://i.pravatar.cc/150?img=42", rating: 4, comment: "Good coverage of all topics.", date: "2026-04-29" },
    { id: 43, bookId: 8, name: "Sanjeev Singh", avatar: "https://i.pravatar.cc/150?img=43", rating: 5, comment: "Great book for speed improvement.", date: "2026-04-27" },
    { id: 44, bookId: 8, name: "Meena Sharma", avatar: "https://i.pravatar.cc/150?img=44", rating: 4, comment: "Detailed solutions helped a lot.", date: "2026-04-25" },
    { id: 45, bookId: 8, name: "Rohit Patel", avatar: "https://i.pravatar.cc/150?img=45", rating: 5, comment: "One of the best quant books.", date: "2026-04-23" },

    // Book 9 - English SSC
    { id: 46, bookId: 9, name: "Suman Verma", avatar: "https://i.pravatar.cc/150?img=46", rating: 5, comment: "Excellent for English preparation.", date: "2026-05-03" },
    { id: 47, bookId: 9, name: "Kishore Kumar", avatar: "https://i.pravatar.cc/150?img=47", rating: 4, comment: "Good grammar concepts covered.", date: "2026-05-01" },
    { id: 48, bookId: 9, name: "Jyoti Singh", avatar: "https://i.pravatar.cc/150?img=48", rating: 5, comment: "Best book for vocabulary building.", date: "2026-04-29" },
    { id: 49, bookId: 9, name: "Vishal Sharma", avatar: "https://i.pravatar.cc/150?img=49", rating: 4, comment: "Good practice material included.", date: "2026-04-27" },
    { id: 50, bookId: 9, name: "Anuradha Patel", avatar: "https://i.pravatar.cc/150?img=50", rating: 5, comment: "Very helpful for SSC English.", date: "2026-04-25" },

    // Book 10 - General Knowledge
    { id: 51, bookId: 10, name: "Rajesh Prasad", avatar: "https://i.pravatar.cc/150?img=51", rating: 5, comment: "Best GK book for competitive exams.", date: "2026-05-05" },
    { id: 52, bookId: 10, name: "Nisha Gupta", avatar: "https://i.pravatar.cc/150?img=52", rating: 4, comment: "Good current affairs coverage.", date: "2026-05-03" },
    { id: 53, bookId: 10, name: "Pradeep Singh", avatar: "https://i.pravatar.cc/150?img=53", rating: 5, comment: "Excellent for last minute revision.", date: "2026-05-01" },
    { id: 54, bookId: 10, name: "Sakshi Jain", avatar: "https://i.pravatar.cc/150?img=54", rating: 4, comment: "Comprehensive but needs frequent updates.", date: "2026-04-29" },

    // Book 11 - Banking Awareness
    { id: 55, bookId: 11, name: "Harish Kumar", avatar: "https://i.pravatar.cc/150?img=55", rating: 5, comment: "Perfect for banking exams.", date: "2026-05-07" },
    { id: 56, bookId: 11, name: "Rekha Singh", avatar: "https://i.pravatar.cc/150?img=56", rating: 5, comment: "Very well structured content.", date: "2026-05-05" },
    { id: 57, bookId: 11, name: "Manoj Gupta", avatar: "https://i.pravatar.cc/150?img=57", rating: 4, comment: "Good book but needs more questions.", date: "2026-05-03" },
    { id: 58, bookId: 11, name: "Swati Raj", avatar: "https://i.pravatar.cc/150?img=58", rating: 5, comment: "Best for RBI assistant preparation.", date: "2026-05-01" },
    { id: 59, bookId: 11, name: "Vijay Kumar", avatar: "https://i.pravatar.cc/150?img=59", rating: 4, comment: "Good reference material.", date: "2026-04-29" },

    // Book 12 - Data Interpretation
    { id: 60, bookId: 12, name: "Dinesh Sharma", avatar: "https://i.pravatar.cc/150?img=60", rating: 5, comment: "Best DI practice book.", date: "2026-05-09" },
    { id: 61, bookId: 12, name: "Pooja Singh", avatar: "https://i.pravatar.cc/150?img=61", rating: 4, comment: "Good variety of questions.", date: "2026-05-07" },
    { id: 62, bookId: 12, name: "Rahul Jain", avatar: "https://i.pravatar.cc/150?img=62", rating: 5, comment: "Excellent for bank exam preparation.", date: "2026-05-05" },
    { id: 63, bookId: 12, name: "Neha Verma", avatar: "https://i.pravatar.cc/150?img=63", rating: 4, comment: "Good but could be more challenging.", date: "2026-05-03" },

    // Book 13 - English Banking
    { id: 64, bookId: 13, name: "Kiran Malhotra", avatar: "https://i.pravatar.cc/150?img=64", rating: 5, comment: "Very helpful for banking English.", date: "2026-05-11" },
    { id: 65, bookId: 13, name: "Sandeep Reddy", avatar: "https://i.pravatar.cc/150?img=65", rating: 4, comment: "Good practice questions.", date: "2026-05-09" },
    { id: 66, bookId: 13, name: "Preeti Sharma", avatar: "https://i.pravatar.cc/150?img=66", rating: 5, comment: "Best for grammar practice.", date: "2026-05-07" },
    { id: 67, bookId: 13, name: "Rajiv Kumar", avatar: "https://i.pravatar.cc/150?img=67", rating: 4, comment: "Good for vocabulary building.", date: "2026-05-05" },

    // Book 14 - Reasoning Banking
    { id: 68, bookId: 14, name: "Meera Sharma", avatar: "https://i.pravatar.cc/150?img=68", rating: 5, comment: "Best reasoning book for banking.", date: "2026-05-13" },
    { id: 69, bookId: 14, name: "Kumar Saurabh", avatar: "https://i.pravatar.cc/150?img=69", rating: 4, comment: "Good puzzle collection.", date: "2026-05-11" },
    { id: 70, bookId: 14, name: "Anjali Gupta", avatar: "https://i.pravatar.cc/150?img=70", rating: 5, comment: "Excellent for SBI PO preparation.", date: "2026-05-09" },
    { id: 71, bookId: 14, name: "Rajan Singh", avatar: "https://i.pravatar.cc/150?img=71", rating: 4, comment: "Good but needs more practice.", date: "2026-05-07" },
    { id: 72, bookId: 14, name: "Sonali Jain", avatar: "https://i.pravatar.cc/150?img=72", rating: 5, comment: "Highly recommended for reasoning.", date: "2026-05-05" },

    // Book 15 - Physics JEE
    { id: 73, bookId: 15, name: "Akshay Kumar", avatar: "https://i.pravatar.cc/150?img=73", rating: 5, comment: "Best physics book for JEE Advanced.", date: "2026-05-15" },
    { id: 74, bookId: 15, name: "Vivek Singh", avatar: "https://i.pravatar.cc/150?img=74", rating: 5, comment: "Concept clarity is outstanding.", date: "2026-05-13" },
    { id: 75, bookId: 15, name: "Nisha Patel", avatar: "https://i.pravatar.cc/150?img=75", rating: 4, comment: "Great book but tough for beginners.", date: "2026-05-11" },
    { id: 76, bookId: 15, name: "Rohit Sharma", avatar: "https://i.pravatar.cc/150?img=76", rating: 5, comment: "Perfect for JEE Main preparation.", date: "2026-05-09" },
    { id: 77, bookId: 15, name: "Priya Verma", avatar: "https://i.pravatar.cc/150?img=77", rating: 4, comment: "Good problems and solutions.", date: "2026-05-07" },
    { id: 78, bookId: 15, name: "Arjun Reddy", avatar: "https://i.pravatar.cc/150?img=78", rating: 5, comment: "One of the best physics resources.", date: "2026-05-05" },

    // Book 16 - Chemistry JEE
    { id: 79, bookId: 16, name: "Kavya Singh", avatar: "https://i.pravatar.cc/150?img=79", rating: 5, comment: "Best physical chemistry book.", date: "2026-05-17" },
    { id: 80, bookId: 16, name: "Tanmay Gupta", avatar: "https://i.pravatar.cc/150?img=80", rating: 4, comment: "Good coverage of all topics.", date: "2026-05-15" },
    { id: 81, bookId: 16, name: "Rhea Sharma", avatar: "https://i.pravatar.cc/150?img=81", rating: 5, comment: "Excellent for JEE preparation.", date: "2026-05-13" },
    { id: 82, bookId: 16, name: "Punit Kumar", avatar: "https://i.pravatar.cc/150?img=82", rating: 4, comment: "Good but could have more problems.", date: "2026-05-11" },
    { id: 83, bookId: 16, name: "Smriti Jain", avatar: "https://i.pravatar.cc/150?img=83", rating: 5, comment: "Very detailed and systematic.", date: "2026-05-09" },

    // Book 17 - Maths JEE
    { id: 84, bookId: 17, name: "Sushant Singh", avatar: "https://i.pravatar.cc/150?img=84", rating: 5, comment: "Best maths book for JEE.", date: "2026-05-19" },
    { id: 85, bookId: 17, name: "Manya Patel", avatar: "https://i.pravatar.cc/150?img=85", rating: 4, comment: "Good variety of problems.", date: "2026-05-17" },
    { id: 86, bookId: 17, name: "Kushal Kumar", avatar: "https://i.pravatar.cc/150?img=86", rating: 5, comment: "Excellent for calculus.", date: "2026-05-15" },
    { id: 87, bookId: 17, name: "Isha Sharma", avatar: "https://i.pravatar.cc/150?img=87", rating: 4, comment: "Good but needs more advanced problems.", date: "2026-05-13" },
    { id: 88, bookId: 17, name: "Varun Raj", avatar: "https://i.pravatar.cc/150?img=88", rating: 5, comment: "Highly recommended for JEE Main.", date: "2026-05-11" },

    // Book 18 - Biology NEET
    { id: 89, bookId: 18, name: "Aarav Mehta", avatar: "https://i.pravatar.cc/150?img=89", rating: 5, comment: "Best biology book for NEET.", date: "2026-05-21" },
    { id: 90, bookId: 18, name: "Sara Khan", avatar: "https://i.pravatar.cc/150?img=90", rating: 5, comment: "Very comprehensive coverage.", date: "2026-05-19" },
    { id: 91, bookId: 18, name: "Rishabh Singh", avatar: "https://i.pravatar.cc/150?img=91", rating: 4, comment: "Good but requires NCERT base.", date: "2026-05-17" },
    { id: 92, bookId: 18, name: "Nidhi Sharma", avatar: "https://i.pravatar.cc/150?img=92", rating: 5, comment: "Perfect for NEET preparation.", date: "2026-05-15" },
    { id: 93, bookId: 18, name: "Kabir Patel", avatar: "https://i.pravatar.cc/150?img=93", rating: 4, comment: "Good diagrams and explanations.", date: "2026-05-13" },
    { id: 94, bookId: 18, name: "Zara Gupta", avatar: "https://i.pravatar.cc/150?img=94", rating: 5, comment: "Best book for both theory and practice.", date: "2026-05-11" },

    // Book 19 - Physics NEET
    { id: 95, bookId: 19, name: "Om Prakash", avatar: "https://i.pravatar.cc/150?img=95", rating: 5, comment: "Excellent for NEET physics.", date: "2026-05-23" },
    { id: 96, bookId: 19, name: "Riya Jain", avatar: "https://i.pravatar.cc/150?img=96", rating: 4, comment: "Good concept explanations.", date: "2026-05-21" },
    { id: 97, bookId: 19, name: "Gautam Singh", avatar: "https://i.pravatar.cc/150?img=97", rating: 5, comment: "Best for NEET preparation.", date: "2026-05-19" },
    { id: 98, bookId: 19, name: "Tanya Verma", avatar: "https://i.pravatar.cc/150?img=98", rating: 4, comment: "Good but could be more detailed.", date: "2026-05-17" },

    // Book 20 - Chemistry NEET
    { id: 99, bookId: 20, name: "Uday Kumar", avatar: "https://i.pravatar.cc/150?img=99", rating: 5, comment: "Perfect for NEET chemistry.", date: "2026-05-25" },
    { id: 100, bookId: 20, name: "Ira Sharma", avatar: "https://i.pravatar.cc/150?img=100", rating: 4, comment: "Good coverage of organic chemistry.", date: "2026-05-23" },
    { id: 101, bookId: 20, name: "Mira Patel", avatar: "https://i.pravatar.cc/150?img=101", rating: 5, comment: "Best for inorganic chemistry.", date: "2026-05-21" },
    { id: 102, bookId: 20, name: "Vivaan Gupta", avatar: "https://i.pravatar.cc/150?img=102", rating: 4, comment: "Good book but needs more practice.", date: "2026-05-19" },

    // Book 21 - Quantitative CAT
    { id: 103, bookId: 21, name: "Disha Jain", avatar: "https://i.pravatar.cc/150?img=103", rating: 5, comment: "Best for CAT quantitative.", date: "2026-05-27" },
    { id: 104, bookId: 21, name: "Harsh Singh", avatar: "https://i.pravatar.cc/150?img=104", rating: 4, comment: "Good variety of problems.", date: "2026-05-25" },
    { id: 105, bookId: 21, name: "Neelam Kumar", avatar: "https://i.pravatar.cc/150?img=105", rating: 5, comment: "Excellent for CAT preparation.", date: "2026-05-23" },
    { id: 106, bookId: 21, name: "Tarun Sharma", avatar: "https://i.pravatar.cc/150?img=106", rating: 4, comment: "Good but could be more challenging.", date: "2026-05-21" },

    // Book 22 - Logical Reasoning CAT
    { id: 107, bookId: 22, name: "Jiya Mehta", avatar: "https://i.pravatar.cc/150?img=107", rating: 5, comment: "Best for CAT reasoning.", date: "2026-05-29" },
    { id: 108, bookId: 22, name: "Sahil Khan", avatar: "https://i.pravatar.cc/150?img=108", rating: 4, comment: "Good puzzle collection.", date: "2026-05-27" },
    { id: 109, bookId: 22, name: "Arya Patel", avatar: "https://i.pravatar.cc/150?img=109", rating: 5, comment: "Excellent for LR practice.", date: "2026-05-25" },
    { id: 110, bookId: 22, name: "Rishi Gupta", avatar: "https://i.pravatar.cc/150?img=110", rating: 4, comment: "Good but needs more DI practice.", date: "2026-05-23" },

    // Book 23 - Verbal CAT
    { id: 111, bookId: 23, name: "Trisha Singh", avatar: "https://i.pravatar.cc/150?img=111", rating: 5, comment: "Best for CAT verbal.", date: "2026-05-31" },
    { id: 112, bookId: 23, name: "Yash Kumar", avatar: "https://i.pravatar.cc/150?img=112", rating: 4, comment: "Good reading comprehension.", date: "2026-05-29" },
    { id: 113, bookId: 23, name: "Lavanya Reddy", avatar: "https://i.pravatar.cc/150?img=113", rating: 5, comment: "Excellent for grammar practice.", date: "2026-05-27" },
    { id: 114, bookId: 23, name: "Dev Sharma", avatar: "https://i.pravatar.cc/150?img=114", rating: 4, comment: "Good vocabulary building.", date: "2026-05-25" },

    // Book 24 - Python
    { id: 115, bookId: 24, name: "Ayaan Gupta", avatar: "https://i.pravatar.cc/150?img=115", rating: 5, comment: "Best Python book for beginners.", date: "2026-06-02" },
    { id: 116, bookId: 24, name: "Diya Patel", avatar: "https://i.pravatar.cc/150?img=116", rating: 5, comment: "Very easy to understand.", date: "2026-05-31" },
    { id: 117, bookId: 24, name: "Nakul Singh", avatar: "https://i.pravatar.cc/150?img=117", rating: 4, comment: "Good for self-learning.", date: "2026-05-29" },
    { id: 118, bookId: 24, name: "Ivy Jain", avatar: "https://i.pravatar.cc/150?img=118", rating: 5, comment: "Excellent for practice problems.", date: "2026-05-27" },
    { id: 119, bookId: 24, name: "Rudra Kumar", avatar: "https://i.pravatar.cc/150?img=119", rating: 4, comment: "Good but could include more projects.", date: "2026-05-25" },

    // Book 25 - JavaScript
    { id: 120, bookId: 25, name: "Aarohi Sharma", avatar: "https://i.pravatar.cc/150?img=120", rating: 5, comment: "Best JavaScript reference book.", date: "2026-06-04" },
    { id: 121, bookId: 25, name: "Virat Singh", avatar: "https://i.pravatar.cc/150?img=121", rating: 4, comment: "Good for advanced concepts.", date: "2026-06-02" },
    { id: 122, bookId: 25, name: "Kyra Patel", avatar: "https://i.pravatar.cc/150?img=122", rating: 5, comment: "Excellent for web development.", date: "2026-05-31" },
    { id: 123, bookId: 25, name: "Aadi Gupta", avatar: "https://i.pravatar.cc/150?img=123", rating: 4, comment: "Good but could be more beginner friendly.", date: "2026-05-29" },

    // Book 26 - React
    { id: 124, bookId: 26, name: "Anvika Reddy", avatar: "https://i.pravatar.cc/150?img=124", rating: 5, comment: "Best React book I've read.", date: "2026-06-06" },
    { id: 125, bookId: 26, name: "Vivaan Singh", avatar: "https://i.pravatar.cc/150?img=125", rating: 4, comment: "Good for React beginners.", date: "2026-06-04" },
    { id: 126, bookId: 26, name: "Sara Jain", avatar: "https://i.pravatar.cc/150?img=126", rating: 5, comment: "Excellent with real-world projects.", date: "2026-06-02" },
    { id: 127, bookId: 26, name: "Zayn Kumar", avatar: "https://i.pravatar.cc/150?img=127", rating: 4, comment: "Good but needs more hooks explanation.", date: "2026-05-31" },
    { id: 128, bookId: 26, name: "Elina Sharma", avatar: "https://i.pravatar.cc/150?img=128", rating: 5, comment: "Best for modern React development.", date: "2026-05-29" },

    // Book 27 - Railway Technical
    { id: 129, bookId: 27, name: "Dhruv Patel", avatar: "https://i.pravatar.cc/150?img=129", rating: 5, comment: "Good for railway technical exams.", date: "2026-06-08" },
    { id: 130, bookId: 27, name: "Riya Singh", avatar: "https://i.pravatar.cc/150?img=130", rating: 4, comment: "Comprehensive coverage.", date: "2026-06-06" },
    { id: 131, bookId: 27, name: "Arnav Kumar", avatar: "https://i.pravatar.cc/150?img=131", rating: 5, comment: "Very helpful for ALP exam.", date: "2026-06-04" },
    { id: 132, bookId: 27, name: "Kiara Jain", avatar: "https://i.pravatar.cc/150?img=132", rating: 4, comment: "Good but needs more practice.", date: "2026-06-02" },

    // Book 28 - General Studies
    { id: 133, bookId: 28, name: "Yuvan Sharma", avatar: "https://i.pravatar.cc/150?img=133", rating: 5, comment: "Best for state PCS preparation.", date: "2026-06-10" },
    { id: 134, bookId: 28, name: "Aahana Gupta", avatar: "https://i.pravatar.cc/150?img=134", rating: 4, comment: "Good coverage of all GS topics.", date: "2026-06-08" },
    { id: 135, bookId: 28, name: "Ishan Singh", avatar: "https://i.pravatar.cc/150?img=135", rating: 5, comment: "Excellent for general awareness.", date: "2026-06-06" },
    { id: 136, bookId: 28, name: "Sia Patel", avatar: "https://i.pravatar.cc/150?img=136", rating: 4, comment: "Good but could be more updated.", date: "2026-06-04" },

    // Book 29 - 10th Science
    { id: 137, bookId: 29, name: "Ira Singh", avatar: "https://i.pravatar.cc/150?img=137", rating: 5, comment: "Perfect for class 10 science.", date: "2026-06-12" },
    { id: 138, bookId: 29, name: "Adrian Kumar", avatar: "https://i.pravatar.cc/150?img=138", rating: 4, comment: "Good NCERT based content.", date: "2026-06-10" },
    { id: 139, bookId: 29, name: "Leela Sharma", avatar: "https://i.pravatar.cc/150?img=139", rating: 5, comment: "Very helpful for board exams.", date: "2026-06-08" },
    { id: 140, bookId: 29, name: "Nandini Patel", avatar: "https://i.pravatar.cc/150?img=140", rating: 4, comment: "Good but needs more diagrams.", date: "2026-06-06" },

    // Book 30 - 12th Maths
    { id: 141, bookId: 30, name: "Avni Gupta", avatar: "https://i.pravatar.cc/150?img=141", rating: 5, comment: "Best for class 12 mathematics.", date: "2026-06-14" },
    { id: 142, bookId: 30, name: "Vihaan Singh", avatar: "https://i.pravatar.cc/150?img=142", rating: 4, comment: "Good calculus explanations.", date: "2026-06-12" },
    { id: 143, bookId: 30, name: "Anaya Kumar", avatar: "https://i.pravatar.cc/150?img=143", rating: 5, comment: "Perfect for CBSE board exams.", date: "2026-06-10" },
    { id: 144, bookId: 30, name: "Shaurya Sharma", avatar: "https://i.pravatar.cc/150?img=144", rating: 4, comment: "Good but needs more examples.", date: "2026-06-08" }
];

// ============================================
// AUTHORS
// ============================================
export const authors = [
    { id: 1, name: "M. Laxmikanth", image: "https://i.pravatar.cc/150?img=145", books: 3, rating: 4.9, bio: "Author of Indian Polity, one of the most popular books for UPSC preparation." },
    { id: 2, name: "R.S. Sharma", image: "https://i.pravatar.cc/150?img=146", books: 5, rating: 4.8, bio: "Indian historian and author of India's Ancient Past and other history books." },
    { id: 3, name: "G.C. Leong", image: "https://i.pravatar.cc/150?img=147", books: 2, rating: 4.7, bio: "Author of physical geography textbooks widely used in competitive exams." },
    { id: 4, name: "H.C. Verma", image: "https://i.pravatar.cc/150?img=148", books: 2, rating: 4.9, bio: "Indian physicist and author of Concepts of Physics for JEE students." },
    { id: 5, name: "Ramesh Singh", image: "https://i.pravatar.cc/150?img=149", books: 3, rating: 4.8, bio: "Author of Indian Economy books for UPSC and competitive exams." },
    { id: 6, name: "R.S. Aggarwal", image: "https://i.pravatar.cc/150?img=150", books: 8, rating: 4.8, bio: "Renowned author of Quantitative Aptitude and reasoning books." },
    { id: 7, name: "Arun Sharma", image: "https://i.pravatar.cc/150?img=151", books: 4, rating: 4.7, bio: "Author of quantitative ability books for CAT and MBA exams." },
    { id: 8, name: "Trueman", image: "https://i.pravatar.cc/150?img=152", books: 2, rating: 4.6, bio: "Author of Trueman's Biology for NEET and medical entrance exams." },
    { id: 9, name: "Eric Matthes", image: "https://i.pravatar.cc/150?img=153", books: 1, rating: 4.9, bio: "Author of Python Crash Course, a popular book for Python beginners." },
    { id: 10, name: "David Flanagan", image: "https://i.pravatar.cc/150?img=154", books: 3, rating: 4.7, bio: "Author of JavaScript: The Definitive Guide, a comprehensive JS reference." }
];

// ============================================
// TESTIMONIALS
// ============================================
export const testimonials = [
    { id: 1, name: "Rahul Singh", role: "UPSC Aspirant", image: "https://i.pravatar.cc/150?img=155", review: "The reading experience is fantastic. I prepared for UPSC using these ebooks and cleared prelims!", rating: 5 },
    { id: 2, name: "Anjali Gupta", role: "SSC Student", image: "https://i.pravatar.cc/150?img=156", review: "Best ebook platform I have used. The dark mode reader is amazing for late night study sessions.", rating: 5 },
    { id: 3, name: "Rohit Jain", role: "JEE Student", image: "https://i.pravatar.cc/150?img=157", review: "Very smooth and modern UI. The 3D book display makes learning more interactive and engaging.", rating: 4 },
    { id: 4, name: "Sneha Patel", role: "Bank PO Aspirant", image: "https://i.pravatar.cc/150?img=158", review: "Loved the dark mode reader. Made my banking exam preparation so much easier and comfortable.", rating: 5 },
    { id: 5, name: "Vikram Singh", role: "NEET Aspirant", image: "https://i.pravatar.cc/150?img=159", review: "The biology ebook helped me understand complex topics easily. Highly recommend for NEET students!", rating: 5 },
    { id: 6, name: "Priya Sharma", role: "CAT Student", image: "https://i.pravatar.cc/150?img=160", review: "The 3D book display makes learning fun. I've improved my quantitative skills significantly.", rating: 4 },
    { id: 7, name: "Amit Verma", role: "Programming Student", image: "https://i.pravatar.cc/150?img=161", review: "The Python ebook is a game changer. Perfect for beginners and advanced learners.", rating: 5 },
    { id: 8, name: "Neha Gupta", role: "Railway Exam Student", image: "https://i.pravatar.cc/150?img=162", review: "Technical subjects made easy! The content is well structured and easy to understand.", rating: 4 },
    { id: 9, name: "Deepak Kumar", role: "Government Exam Student", image: "https://i.pravatar.cc/150?img=163", review: "General studies ebooks are excellent. Complete coverage of all topics for government exams.", rating: 5 },
    { id: 10, name: "Meera Reddy", role: "School Student", image: "https://i.pravatar.cc/150?img=164", review: "The class 10 science book is amazing. I got 95% in my board exams using this!", rating: 5 }
];

// ============================================
// PLATFORM STATS
// ============================================
export const platformStats = {
    books: 30,
    students: 12500,
    ratings: 4.8,
    categories: 10,
    authors: 10,
    testimonials: 10
};

// ============================================
// FEATURES (Why Choose Us)
// ============================================
export const features = [
    {
        title: "Dark Mode Reading",
        description: "Comfortable reading experience with dark mode for late night study sessions.",
        icon: "Moon"
    },
    {
        title: "Bookmarks & Notes",
        description: "Save important pages and take notes while reading.",
        icon: "Bookmark"
    },
    {
        title: "Highlights & Annotations",
        description: "Highlight key concepts and add annotations for better understanding.",
        icon: "Highlighter"
    },
    {
        title: "Cross Device Access",
        description: "Read anywhere, anytime. Sync your progress across all devices.",
        icon: "Devices"
    },
    {
        title: "3D Book Display",
        description: "Interactive 3D book display for an immersive reading experience.",
        icon: "Box"
    },
    {
        title: "Offline Reading",
        description: "Download ebooks and read offline without internet connection.",
        icon: "Download"
    }
];