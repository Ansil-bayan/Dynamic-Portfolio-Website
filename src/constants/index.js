import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  python,
  java,
  mysql,
  git,
  i,
  tathva,
  npol,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  android,
  expense,
  pytorch,
  huggingface,
  perceptron,
  hotel,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Research Analyst LLM Advanced Math",
    company_name: "Turing",
    company_website: "https://www.turing.com",
    icon: i,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Trained Large Language Models using Mathematical reasoning",
      "Solved Complex Problems involving Mathematical Engineering skills and explained the process step by step to Chatbots on a daily basis",
      "Integrated GenAI models to automate flow creation from user prompts, eliminating manual configuration efforts.",
      " Worked with xAI in training Grok3 Math Reasoning",
    ],
  },
  {
    title: "EC Intern",
    company_name: "Grafito Innovations Private Limited ",
    company_website: "https://www.grafito-in.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "June 2024 - July 2024",
    points: [
      "Developed a Python GUI with PyQt5, creating a communication bridge for ESP32 through ROS and microROS, allowing accurate control of motor rotations",
      " Employed microROS and FreeRTOS in crafting ESP32 code, enabling precise management of various motors and sensors, and designed the corresponding PCB on the EasyEDA platform",
      
    ],
  },
  {
    title: "Intern",
    company_name: "NPOL Cochin, DRDO",
    company_website: "https://www.drdo.gov.in/drdo/labs-and-establishments/naval-physical-oceanographic-laboratory-npol.com/",
    icon: npol,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Worked on the Password Matching Front End for Acoustic Demodulator project, involving the design and implementation of a password matching algorithm in a PIC18F microcontroller.",
      "Developed a low-power analog demodulator circuit using AD633 analog multipliers and an operational amplifier, integrated with a 4-bit decoder system and microcontroller-based password matching system.",
      
    ],
  },
  {
    title: "Intern Trainee",
    company_name: "IIIT Kottayam",
    company_website: "https://iiitkottayam.ac.in/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Developed a lightweight symmetric encryption algorithm, facilitating encryption of text and diverse image formats",
      "Undertook a detailed performance evaluation of the algorithm, benchmarking its throughput and avalanche effect against prevailing encryption methods.",
      
    ],
  },
  
  {
    title: "Tech Committee Head",
    company_name: "Tathva NIT Calicut",
    company_website: "https://tathva.org",
    icon: tathva,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Spearheaded the development of a fully responsive website for the college coding society.",
      "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
      "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
      "Curated and designed challenging coding problems for college competitions.",
    ],
  },
];

const projects = [
  {
    name: "NN Training using Torch Tensor-RT",
    description:
      "Used Torch Tensor-RT to train Neural Network using CUDA \nData manipulation using pandas to update the weights ",
    tags: [
      {
        name: "CUDA",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: pytorch,
    hosted_link: "https://github.com/AnsilBayan/Smart-Bill-Splitter",
  },
  {
    name: "LoRA Fine tune Diffusion model",
    description:
      "A stable runaway diffusion model fine tuned with lora trained to take your image and turn it however you want with a prompt.",
    tags: [
      {
        name: "AutoTokenizer",
        color: "blue-text-gradient",
      },
      {
        name: "StableDiffusionPipeline",
        color: "green-text-gradient",
      },
      {
        name: "Peft",
        color: "pink-text-gradient",
      },
    ],
    image: huggingface,
    hosted_link:
      "https://github.com/AnsilBayan/Smart-Bill-Splitter",
  },
  {
    name: "Perceptron",
    description:
      "Coded a neural network from scratch using Deep learning concepts like cross entropy loss, gradient decsent correction and activation function(sigmoid) ",
    tags: [
      {
        name: "Transformers",
        color: "blue-text-gradient",
      },
      {
        name: "DPMSolverMultistepScheduler",
        color: "green-text-gradient",
      },
      {
        name: "Safetensors",
        color: "pink-text-gradient",
      },
    ],
    image: perceptron,
    hosted_link:
      "https://github.com/AnsilBayan/Smart-Bill-Splitter",
  },
  {
    name: "Hotel Management System",
    description:
      "Developed an efficient hotel management system, including room bookings, guest information, and billing, using Python and MySQL.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    hosted_link: "https://github.com/AnsilBayan/Smart-Bill-Splitter.com/",
  },
  {
    name: "Smart Bill Splitter",
    description:
      "A travel expense tracker cum expense splitter",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "CSV",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    hosted_link: "https://github.com/AnsilBayan/Smart-Bill-Splitter",
  },
  {
    name: "Android Expense Tracker",
    description:
      "Developed an Android app using Flutter and Dart for efficient expense tracking and management.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "SQLite3",
        color: "pink-text-gradient",
      },
    ],
    image: android,
    hosted_link: "https://github.com/AnsilBayan/Smart-Bill-Splitter",
    
  },
  
  
  
];

const personalInfo = {
  name: "Ansil",
  fullName: "Ansil Bayan",
  email: "ansilbayan5@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in Python and
  Gen AI, and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and I can collaborate closely with peers to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "./Resume.pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "http://linkedin.com/in/ansil-bayan-48641723b",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/AnsilBayan",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
