// lib/data.js

export const books = [
    {
        id: 1,
        title: "Indian Polity",
        author: "M. Laxmikanth",
        price: 599,
        rating: 4.9,
        reviews: 1243,
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
        category: "UPSC",
        language: "English",
        subject: "Polity",
        description: "Most recommended book for UPSC Civil Services Examination.",
        progress: 75,
        status: "reading",
        lastRead: "Today",
    },
    {
        id: 2,
        title: "Indian History",
        author: "R.S. Sharma",
        price: 449,
        rating: 4.8,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
        category: "UPSC",
        language: "English",
        subject: "History",
        description: "Ancient and Medieval India comprehensive guide.",
        progress: 100,
        status: "completed",
        lastRead: "Yesterday",
    },
    {
        id: 3,
        title: "Concepts of Physics",
        author: "H.C. Verma",
        price: 599,
        rating: 4.9,
        reviews: 2156,
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80",
        category: "JEE",
        language: "English",
        subject: "Physics",
        description: "Bible for JEE Physics preparation.",
        progress: 30,
        status: "reading",
        lastRead: "2 hours ago",
    },
    {
        id: 4,
        title: "Quantitative Aptitude",
        author: "Arun Sharma",
        price: 499,
        rating: 4.7,
        reviews: 876,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
        category: "CAT",
        language: "English",
        subject: "Mathematics",
        description: "Complete guide for CAT and MBA entrance exams.",
        progress: 0,
        status: "wishlist",
        lastRead: null,
    },
    {
        id: 5,
        title: "Physical Geography",
        author: "G.C. Leong",
        price: 399,
        rating: 4.8,
        reviews: 654,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        category: "UPSC",
        language: "English",
        subject: "Geography",
        description: "Comprehensive geography for competitive exams.",
        progress: 60,
        status: "reading",
        lastRead: "3 days ago",
    },
    {
        id: 6,
        title: "Organic Chemistry",
        author: "Morrison & Boyd",
        price: 699,
        rating: 4.9,
        reviews: 1432,
        image: "https://images.unsplash.com/photo-1614963326505-843868e1d83a?auto=format&fit=crop&w=600&q=80",
        category: "NEET",
        language: "English",
        subject: "Chemistry",
        description: "Standard textbook for organic chemistry.",
        progress: 100,
        status: "completed",
        lastRead: "1 week ago",
    },
    {
        id: 7,
        title: "English Grammar",
        author: "Wren & Martin",
        price: 299,
        rating: 4.6,
        reviews: 543,
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
        category: "SSC",
        language: "English",
        subject: "English",
        description: "Complete English grammar for competitive exams.",
        progress: 0,
        status: "wishlist",
        lastRead: null,
    },
    {
        id: 8,
        title: "General Studies",
        author: "Manohar Pandey",
        price: 549,
        rating: 4.8,
        reviews: 987,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        category: "UPSC",
        language: "English",
        subject: "General Studies",
        description: "Complete GS for UPSC and state PCS exams.",
        progress: 45,
        status: "reading",
        lastRead: "Today",
    },
    {
        id: 9,
        title: "A Modern Approach to Verbal Reasoning",
        author: "R.S. Aggarwal",
        price: 420,
        rating: 4.7,
        reviews: 1850,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
        category: "Banking",
        language: "English",
        subject: "Reasoning",
        description: "Highly effective book for banking and insurance exam preparation.",
        progress: 15,
        status: "reading",
        lastRead: "5 hours ago",
    },
    {
        id: 10,
        title: "Biology for NEET",
        author: "Dr. Ali",
        price: 650,
        rating: 4.9,
        reviews: 3120,
        image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&w=600&q=80",
        category: "NEET",
        language: "English",
        subject: "Biology",
        description: "Objective biology question bank mapped to NCERT.",
        progress: 90,
        status: "reading",
        lastRead: "Yesterday",
    }
];

export const categories = [
    { name: "UPSC", icon: "🏛️", color: "from-blue-500 to-cyan-500" },
    { name: "SSC", icon: "📊", color: "from-emerald-500 to-teal-500" },
    { name: "JEE", icon: "⚗️", color: "from-purple-500 to-violet-500" },
    { name: "NEET", icon: "🧬", color: "from-rose-500 to-pink-500" },
    { name: "Banking", icon: "🏦", color: "from-amber-500 to-orange-500" },
    { name: "CAT", icon: "📈", color: "from-indigo-500 to-blue-500" },
];

export const testimonials = [
    {
        id: 1,
        name: "Meera Reddy",
        exam: "UPSC CSE 2024",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
        review: "The Indian Polity book is amazing. I got AIR 87 using these ebooks! The reading experience is fantastic.",
        rating: 5,
        rank: "AIR 87"
    },
    {
        id: 2,
        name: "Rahul Singh",
        exam: "UPSC Prelims",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
        review: "Prepared for UPSC using these ebooks and cleared prelims in first attempt. Best investment for serious aspirants.",
        rating: 5,
        rank: "Cleared Prelims"
    },
    {
        id: 3,
        name: "Anjali Gupta",
        exam: "SSC CGL",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
        review: "Best ebook platform I have used. Dark mode reader is amazing for night study sessions. Highly recommended!",
        rating: 5,
        rank: "Selected"
    },
    {
        id: 4,
        name: "Deepak Kumar",
        exam: "Banking Exams",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
        review: "General studies ebooks are excellent. Complete coverage of all topics for government exams.",
        rating: 5,
        rank: "IBPS PO"
    },
    {
        id: 5,
        name: "Vikram Malhotra",
        exam: "IIT JEE Advanced",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
        review: "HC Verma concepts are presented beautifully. The mobile responsive UI allowed me to revise formulas on the go.",
        rating: 5,
        rank: "AIR 245"
    }
];

export const reviews = [
    {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        comment: "This book helped me clear my UPSC prelims in first attempt. Crystal clear concepts!",
        date: "2 days ago"
    },
    {
        id: 2,
        name: "Amit Patel",
        rating: 4,
        comment: "Best book for JEE Physics. The examples are very practical and easy to understand.",
        date: "1 week ago"
    },
    {
        id: 3,
        name: "Neha Gupta",
        rating: 5,
        comment: "The language is very simple. Even average students can understand complex topics.",
        date: "3 weeks ago"
    },
    {
        id: 4,
        name: "Rohan Das",
        rating: 5,
        comment: "Arun Sharma's shortcut tricks for Quantitative Aptitude saved me a lot of time in mock tests.",
        date: "1 month ago"
    }
];

export const topAuthors = [
    {
        id: 1,
        name: "M. Laxmikanth",
        books: 8,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
        expertise: "Polity & Governance",
    },
    {
        id: 2,
        name: "R.S. Sharma",
        books: 12,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
        expertise: "Ancient & Medieval History",
    },
    {
        id: 3,
        name: "H.C. Verma",
        books: 5,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80",
        expertise: "Physics",
    },
    {
        id: 4,
        name: "Arun Sharma",
        books: 7,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&h=150&q=80",
        expertise: "Quantitative Aptitude",
    },
    {
        id: 5,
        name: "G.C. Leong",
        books: 4,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
        expertise: "Geography",
    },
];

// Mock chapter content for books
export const chapterContent = [
    {
        id: 1,
        bookId: 1,
        chapter: 1,
        title: "Introduction to Constitution",
        content: `The Constitution of India is the supreme law of India. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.

It is the longest written constitution of any country on earth. The constitution was adopted by the Constituent Assembly on 26 November 1949 and came into effect on 26 January 1950.

The constitution declares India a sovereign, socialist, secular, and democratic republic, assuring its citizens justice, equality, and liberty, and endeavors to promote fraternity among them.`
    },
    {
        id: 2,
        bookId: 1,
        chapter: 2,
        title: "Fundamental Rights",
        content: `Fundamental Rights are the basic rights guaranteed to all citizens of India. These rights are essential for the development of an individual and are enforceable by courts.

The constitution provides for six fundamental rights:
1. Right to Equality
2. Right to Freedom
3. Right against Exploitation
4. Right to Freedom of Religion
5. Cultural and Educational Rights
6. Right to Constitutional Remedies

These rights are not absolute and can be restricted in the interest of security, public order, and morality.`
    },
    {
        id: 3,
        bookId: 1,
        chapter: 3,
        title: "Directive Principles of State Policy",
        content: `The Directive Principles of State Policy are guidelines for the government to establish a just society. They are not enforceable by courts but are fundamental in governance.

The Directive Principles aim to:
- Promote the welfare of the people
- Secure social and economic justice
- Minimize inequalities in income, status, and opportunities
- Ensure adequate means of livelihood
- Provide equal pay for equal work
- Protect the environment

These principles make the constitution a living document that guides the government in policymaking.`
    },
    {
        id: 4,
        bookId: 3,
        chapter: 1,
        title: "Introduction to Physics",
        content: `Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force.

Physics is one of the oldest academic disciplines and, through its inclusion of astronomy, perhaps the oldest. Over much of the past two millennia, physics, chemistry, biology, and certain branches of mathematics were a part of natural philosophy.

Physics is the fundamental science because it deals with the most basic laws of nature. It provides the foundation for all other sciences.`
    },
    {
        id: 5,
        bookId: 3,
        chapter: 2,
        title: "Mechanics",
        content: `Mechanics is the area of physics concerned with the behavior of physical bodies when subjected to forces or displacements, and the subsequent effects of the bodies on their environment.

The main branches of mechanics are:
1. Classical Mechanics - deals with the motion of macroscopic objects
2. Quantum Mechanics - deals with the behavior of microscopic particles
3. Relativistic Mechanics - deals with objects moving at speeds close to light

Newton's laws of motion form the foundation of classical mechanics.`
    },
    {
        id: 6,
        bookId: 10,
        chapter: 1,
        title: "Cell: The Unit of Life",
        content: `All organisms are composed of cells. Some are composed of a single cell and are called unicellular organisms while others, like us, composed of many cells, are called multicellular organisms.

Antoni van Leeuwenhoek first saw and described a live cell. Robert Brown later discovered the nucleus. The invention of the microscope and its improvement leading to the electron microscope revealed all the structural details of the cell.`
    }
];

// Mock user progress data
export const userProgress = {
    bookId: 1,
    currentPage: 15,
    totalPages: 150,
    completionPercentage: 75,
    lastRead: "Today",
    bookmarks: [5, 12, 18, 25, 37, 54],
    notes: [
        {
            id: 1,
            content: "Important - Fundamental Rights are crucial for UPSC",
            timestamp: "2 days ago"
        },
        {
            id: 2,
            content: "Remember Article 32 - Right to Constitutional Remedies",
            timestamp: "1 day ago"
        },
        {
            id: 3,
            content: "Compare with US Constitution for better understanding",
            timestamp: "3 hours ago"
        }
    ]
};

// Reading statistics
export const readingStats = {
    totalBooksRead: 15,
    totalPagesRead: 4210,
    currentStreak: 12,
    longestStreak: 60,
    hoursSpent: 114,
    booksCompleted: 7,
    currentlyReading: 4
};

export const chapters = [
    {
        id: 1,
        title: "Chapter 1",
        content: "This is the content of chapter 1.",
    },
    {
        id: 2,
        title: "Chapter 2",
        content: "This is the content of chapter 2.",
    },
    {
        id: 3,
        title: "Chapter 3",
        content: "This is the content of chapter 3.",
    },
    {
        id: 4,
        title: "Chapter 4",
        content: "This is the content of chapter 4.",
    },
    {
        id: 5,
        title: "Chapter 5",
        content: "This is the content of chapter 5.",
    },
];