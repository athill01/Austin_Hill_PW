import heroImage from "./assets/images/headshot.jpg";

const logotext = "AUSTIN HILL";
const meta = {
    title: "Austin Hill",
    description: "An aspiring actuary",
};

const introdata = {
    title: "Austin Hill",
    tagline: "Statistics & Computer Science Student | Aspiring Actuary",
    qualifications: "Excel | Python | Tableau | SQL",
    description: "Statistics & Computer Science student at UNC Chapel Hill with a 3.9 GPA and a passion for probability, predictive modeling, and risk analysis. Currently preparing for Exam P and seeking an actuarial internship where I can apply analytical thinking to real-world business challenges.",
    your_img_url: heroImage,
};

const dataabout = {
    title: "Who I Am and My Goals",
    aboutme: "I'm a Statistics and Computer Science student at the University of North Carolina at Chapel Hill with a passion for solving complex problems through mathematics, programming, and data analysis. My academic interests center around probability, statistical modeling, and predictive analytics, which naturally led me to pursue a career in actuarial science. \n\nI enjoy working with data to uncover meaningful patterns, build models, and support informed decision-making. Whether I'm analyzing large datasets in Excel, developing forecasting models in Python, or exploring new statistical methods in class, I'm always looking for opportunities to apply quantitative thinking to real-world challenges. \n\nOutside the classroom, I serve as a Computer Science Teaching Assistant, where I've discovered how rewarding it is to help others understand difficult concepts. That experience has strengthened my communication skills and reinforced the importance of explaining technical ideas clearly. I'm currently preparing for Exam P and seeking actuarial internship opportunities where I can continue developing my technical skills while contributing to meaningful work in risk analysis, financial modeling, and data-driven decision making. \n\nWhen I'm not studying or coding, you'll usually find me exploring new technologies, refining personal projects, or looking for ways to combine statistics, programming, and business to solve interesting problems.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: process.env.REACT_APP_YOUR_EMAIL || "hillat847@gmail.com",
    YOUR_FONE: process.env.REACT_APP_YOUR_FONE || "(757) 879-8348",
    description:
        process.env.REACT_APP_CONTACT_DESCRIPTION ||
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.",
    // To enable sending via EmailJS, set the following environment variables
    // in a .env file at the project root (REACT_APP_ prefix required):
    // REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, REACT_APP_EMAILJS_USER_ID
    YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_id",
    YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_id",
    YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID || "user_id",
};

const socialprofils = {
    github: "https://github.com/athill01",
    instagram: "https://www.instagram.com/athill0903?utm_source=qr",
    linkedin: "https://www.linkedin.com/in/austin-hill1/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};