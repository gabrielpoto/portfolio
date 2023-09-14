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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  spscommerce,
  iocgroup,
  myunisoft,
  sql,
  terraform,
  travelapp,
  next,
  fastify,
  angular,
  spring
} from "../assets";
import {useTranslation} from "react-i18next";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Terraform",
    icon: terraform,
  },
];

const experiences = [
  {
    title: "Javascript Fullstack Developer",
    company_name: "SPS COMMERCE",
    icon: spscommerce,
    iconBg: "#383E56",
    date: "Novembre 2022 - Juin 2023",
    points: [
      "Création de l'interface Web de l' applications de gestion de la chaîne d'approvisionnement en utilisant React et TypeScript.",
      "Création et maintenance de services cloud sans serveur à l'aide de Node.js.",
      "Infrastructure provisionnée et déployée sur AWS à l'aide de Terraform.",
      "Implémentation d'un nouveau système de conception utilisant CSS Flexbox, CSS Grid et JavaScript ES6.",
      "Création de mises en page et de composants réactifs et réutilisables qui s'adaptent aux nouvelles applications Web de gestion de la chaîne d'approvisionnement.",
    ],
  },
  {
    title: "React - React Native - NodeJs(Express) Developer",
    company_name: "IOC GROUP",
    icon: iocgroup,
    iconBg: "#E6DEDD",
    date: "Octobre 2020 - Aout 2022",
    points: [
      "Architecture Database.",
      "UML",
      "Construction interface utilisateur en React",
      "Développement Application Mobile avec React Native",
      "Développement API-REST NODEJS ( ExpressJs)",
    ],
  },
  {
    title: "FrontEnd Developer React JS",
    company_name: "MYUNISOFT",
    icon: myunisoft,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Debug du legacy",
      "Développement de nouvelles fonctionnalités.",
      "Développement de composants (RTE like CKEditor, PDF to IMAGES / Images to PDF, Virtualisation de table,\n" +
      "Data Table…).",
      "Développement de hooks et composants réutilisable",
      "Refactoring de composants, logique, clean code, duplicated code, performances…",
      "Encadrement de l’équipe",
      "Animation de workshops",
    ],
  },
  {
    title: "Javascript Developer",
    company_name: "Marie du Pre Saint-Gervais",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Fev 2018 - Aout 2018",
    points: [
      "Développement d'une interface Intranet.",
      "Technologies: HTML5, JQUERY, BOOTSTRAP, CSS3",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TRAVEL APP - REACT NATIVE",
    description:
      "Application de voyage UI, utilisant une maquette de Dribble, l'application montre les endroit a visiter et une recherche de voyage par ville",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travelapp,
    source_code_link: "https://github.com/gabrielpoto/reactnativeTravel",
  },
  {
    name: "CRUD APPLICATION - NEXTJS",
    description:
      "Application Web, qui utilise implemente un systeme de CRUD, pour creer un utilisateur , recuperer un ou des utilisateurs , modifier un utilisateurs , supprimer un utilisateur.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "postgreSql",
        color: "pink-text-gradient",
      },
      {
        name: "tRPC",
        color: "blue-text-gradient",
      },
    ],
    image: next,
    source_code_link: "https://github.com/gabrielpoto/next3app",
  },
  {
    name: "CRUD APPLICATION - FASTIFY JS",
    description:
        "API, qui utilise implemente un systeme de CRUD, pour creer un utilisateur , recuperer un ou des utilisateurs , modifier un utilisateurs , supprimer un utilisateur.",
    tags: [
      {
        name: "fastify",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSql",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: fastify,
    source_code_link: "https://github.com/gabrielpoto/fastify_postgres_docker",
  },
  {
    name: "AUTHENTIFICATION APPLICATION - ANGULAR 13",
    description:
        "Application web, qui implemente un systeme d'authentification, via une API REST",
    tags: [
      {
        name: "angular 13",
        color: "blue-text-gradient",
      },
      {
        name: "rxjs",
        color: "green-text-gradient",
      },
    ],
    image: angular,
    source_code_link: "https://github.com/gabrielpoto/securecapitaapp",
  },
  {
    name: "AUTHENTIFICATION APPLICATION - SPRING BOOT",
    description:
        "API JAVA, qui implemente un systeme d'authentification ,security spring, messsage d'erreur, redirection, ...",
    tags: [
      {
        name: "spring boot",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "spring security",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSql",
        color: "pink-text-gradient",
      },
    ],
    image: spring,
    source_code_link: "https://github.com/gabrielpoto/secureCapitaSpringBoot",
  },
];

export { services, technologies, experiences, testimonials, projects };
