import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'TrioCart-an ecommerce website',
        description: "I have designed and developed TrioCart, an eCommerce platform specializes in dress shopping, catering to ladies, men, and kids. It is developed using Node.js, Express.js, MongoDB, and other technologies. It provides a comprehensive set of features for both customers and administrators.The platform includes essential eCommerce features such as product listings, detailed product pages, shopping cart functionality, secure checkout process with payment integration using Razorpay, and order management. Additionally, TrioCart provides advanced functionalities like image uploading and cropping using Cropper.js, real-time data visualization with Graph.js, and scheduling capabilities with Schedule.js.",
        tools: ['Express', 'MongoDB', 'Multer', 'AWS','Node Mailer', 'Cropper.js', 'Razorpay', 'Graph.js','Schedule.js', 'PM2', 'Nginx'],
        role: 'FullStack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Netflix clone',
        description: 'I have cloned Netflix, aiming to replicate its features and UI design. Users can securely log in or sign up to access personalized content recommendations and watch history. They can watch movie trailers, bookmark movies for later viewing, and enjoy a seamless streaming experience. Built with React and TypeScript, authenticated with Firebase, and styled with Tailwind CSS, this clone offers a user-friendly interface with robust functionality.',
        tools: ['TypeScript',"React",'Tailwind CSS', "Node.js", "Firebase", "TMDB"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Secure Profile Manager',
        description: 'I have designed and implemented SecureProfileManager, a robust MERN Redux JWT web application designed for seamless user authentication and profile management. With integrated JWT authentication, users can securely sign up, log in, and manage their profiles with confidence. Redux enhances scalability and performance by efficiently managing application state, while MongoDB ensures reliable storage and retrieval of user information. This platform empowers users to update their profile details, including profile images, for a personalized experience. Additionally, admin authentication and CRUD operations enable efficient management of user details.',
        tools: ['React', 'MongoDB','Bootstrap', 'Express','Redux', 'Multer', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'BloomWell',
        description: "My upcoming project, BloomWell, is an innovative online therapy platform dedicated to providing effective mental health support to individuals in need. BloomWell will offer comprehensive consultation services tailored for individuals, couples, and teens, providing a safe space for clients to connect with professional therapists via chat or video call. In addition to serving clients, BloomWell will also provide an opportunity for aspiring therapists to register and gain valuable practice experience, empowering them to enhance their skills while contributing to the mental health community. With its user-friendly interface and accessible services, BloomWell aims to be a comprehensive platform for mental health support and wellbeing, fostering growth and resilience for all who seek support.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Node.js', "Express","Calendar",'MongoDb','Razorpay','Multer'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
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