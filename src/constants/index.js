import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, 
I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB.
 My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I have done my BSc and MS in CSE from University of Chittagong, Bangladesh. 
With private job professional experience working now in Department of ICT under ICT Division, Ministry of Posts, Telecommunications and Information. 
I have worked with a variety of Government ICT services for the people of Bangladesh. 
My journey in software development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2019 - Present",
    role: "Assistant Programmer",
    company: "DoICT, Ministry of Posts, Telecommunications and Information.",
    description: `Upazila ICT officer, developed and maintaining TCV Card Mangement applications using PHP, MySQl. Recently completed Bootcamp for Remote Job Placement (ToT).`,
    technologies: ["Javascript", "React.js", "Next.js", "Node.js", "MongoDB"],
  },
  {
    year: "2016 - 2019",
    role: "Softare Engineer",
    company: "LEADS Corporation Ltd.",
    description: `Designed and developed user interfaces for Call Center Support applications using ASP.NET and Sql Server.`,
    technologies: ["HTML", "CSS", "JS", "ASP.NET", "SQL Server"],
  },
  {
    year: "2015 - 2016",
    role: "Software Developer",
    company: "IT Corner",
    description: `Developed and maintained web applications using PHP and MySQL`,
    technologies: ["HTML", "CSS", "JS", "PHP", "MySQL"],
  },
  {
    year: "2015",
    role: "Intern",
    company: "Infosys, India",
    description: `Intern in development of web applications using Java EE. 3 Months Experienced in Java Enterprise Edition.`,
    technologies: ["Java", "Oracle"],
  },
  {
    year: "2014",
    role: "MS",
    company: "University of Chittagong",
    description: "CSE",
    technologies: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    year: "2008-2013",
    role: "BSc",
    company: "University of Chittagong",
    description: "CSE",
    technologies: ["Programming", "Data Structure", "Algorithm"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    demo: `https://mern-books-shop.vercel.app/`,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication. Full-stack (MERN) Project, Building a Product Buy/Sell Shop.",
    technologies: ["Tailwind CSS", "React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    title: "Book Shop",
    image: project2,
    demo: `https://66f39e680bd155c92b7b4bdf--nimble-malasada-6a3f57.netlify.app/`,
    description:
      "An application in React Router DOM with JSON data integration.",
    technologies: ["HTML", "CSS", "React", "JS API"],
  },
  {
    title: "Food Website",
    image: project3,
    demo: `https://alauddindipu.github.io/Food-website/`,
    description:
      "A Food selling website showcasing products information.",
    technologies: ["Tailwind CSS", "Daisy UI", "JS API"],
  },
  {
    title: "Secret Key Mather",
    image: project4,
    demo: `https://alauddindipu.github.io/first-assignment-key-match/`,
    description:
      "A Java Script programme for Password Generation, Input Handling, Editing Input and Submission and Validation.",
    technologies: ["HTML", "CSS", "Java Script"],
  },
];

export const CONTACT = {
  address: "Departmet of ICT, Sirajganj Sadar, Sirajganj.",
  phoneNo: "+880 1701776353 ",
  email: "alauddin.cu@gmail.com",
};
