import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'TrioCart',
        description: "An eCommerce platform for shopping across men, women, and kids categories, featuring product browsing, cart, secure checkout, and complete order management with admin controls.",
        tools: ['Express', 'MongoDB', 'Multer', 'AWS','Node Mailer', 'Cropper.js', 'Razorpay', 'Graph.js','Schedule.js', 'PM2', 'Nginx'],
        role: 'FullStack Developer',
        code: 'sadfds',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Netflix clone',
        description: "A streaming platform clone that allows users to explore content, watch trailers, and save movies, delivering a smooth and personalized viewing experience.",
        tools: ['TypeScript',"React",'Tailwind CSS', "Node.js", "Firebase", "TMDB"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'BloomWell',
        description: "An upcoming online therapy platform connecting individuals, couples, and teens with professional therapists through chat and video sessions, while also supporting aspiring therapists with real-world experience.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Node.js', "Express","Calendar",'MongoDb','Razorpay','Multer'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 4,
        name: 'Sailor - Hybrid Cloud Orchestration Platform',
        description: "A SaaS platform enabling self-service cloud infrastructure orchestration, where I developed responsive UI components and collaborated closely with backend systems.",
        tools: [],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    },
    {
        id: 5,
        name: 'CRASH TEST - Mahindra Internal Platform',
        description: "An internal platform where I fixed critical frontend issues, improved application stability, and enhanced the overall user experience with UI refinements.",
        tools: [],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    },
    {
        id: 6,
        name: 'MICA - Mahindra Application',
        description: "Worked on implementing new UI features and ensuring smooth API integration, contributing to a seamless and high-performing user experience.",
        tools: [],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },