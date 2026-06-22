// lib/data.js
export const books = [
    {
        id: 1,
        title: "Indian Polity",
        author: "M. Laxmikanth",
        price: 599,
        rating: 4.9,
        reviews: 1243,
        image: "/images/books/polity.jpg",
        category: "UPSC",
        language: "English",
        subject: "Polity",
        description: "Most recommended book for UPSC Civil Services Examination.",
    },
    {
        id: 2,
        title: "Indian History",
        author: "R.S. Sharma",
        price: 449,
        rating: 4.8,
        reviews: 987,
        image: "/images/books/history.jpg",
        category: "UPSC",
        language: "English",
        subject: "History",
        description: "Ancient and Medieval India comprehensive guide.",
    },
    {
        id: 3,
        title: "Concepts of Physics",
        author: "H.C. Verma",
        price: 599,
        rating: 4.9,
        reviews: 2156,
        image: "/images/books/physics.jpg",
        category: "JEE",
        language: "English",
        subject: "Physics",
        description: "Bible for JEE Physics preparation.",
    },
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
        image: "/images/testimonials/meera.jpg",
        review: "The class 10 science book is amazing. I got 95% in my board exams using this! The reading experience is fantastic.",
        rating: 5,
        rank: "AIR 87"
    },
    {
        id: 2,
        name: "Rahul Singh",
        exam: "UPSC Prelims",
        image: "/images/testimonials/rahul.jpg",
        review: "Prepared for UPSC using these ebooks and cleared prelims in first attempt. Best investment for serious aspirants.",
        rating: 5,
        rank: "Cleared Prelims"
    },
    {
        id: 3,
        name: "Anjali Gupta",
        exam: "SSC CGL",
        image: "/images/testimonials/anjali.jpg",
        review: "Best ebook platform I have used. Dark mode reader is amazing for night study sessions. Highly recommended!",
        rating: 5,
        rank: "Selected"
    },
    {
        id: 4,
        name: "Deepak Kumar",
        exam: "Banking Exams",
        image: "/images/testimonials/deepak.jpg",
        review: "General studies ebooks are excellent. Complete coverage of all topics for government exams.",
        rating: 5,
        rank: "IBPS PO"
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
    }
];

export const topAuthors = [
    {
        id: 1,
        name: "M. Laxmikanth",
        books: 8,
        rating: 4.9,
        image: "/images/authors/laxmikanth.jpg",
        expertise: "Polity & Governance",
    },
    {
        id: 2,
        name: "R.S. Sharma",
        books: 12,
        rating: 4.8,
        image: "/images/authors/rs-sharma.jpg",
        expertise: "Ancient & Medieval History",
    },
    {
        id: 3,
        name: "H.C. Verma",
        books: 5,
        rating: 4.9,
        image: "/images/authors/hc-verma.jpg",
        expertise: "Physics",
    },
    {
        id: 4,
        name: "Arun Sharma",
        books: 7,
        rating: 4.7,
        image: "/images/authors/arun-sharma.jpg",
        expertise: "Quantitative Aptitude",
    },
    {
        id: 5,
        name: "G.C. Leong",
        books: 4,
        rating: 4.8,
        image: "/images/authors/gc-leong.jpg",
        expertise: "Geography",
    },
];