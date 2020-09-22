interface iProjects {
  title: string,
  paragraph: string,
  link: string,
  img: string,
  frontEnd: string,
  backEnd: string,
  date: string,
  highlight: string
};

export const projects: iProjects[] | any = [
  {
    title: "GoalSetter",
    paragraph: "App + Extension that tracks users tasks and analyzes their online productivity.",
    frontEnd: "Front-end: React, HTML, styled-components, Material UI",
    backEnd: "Back-end: Python, Django, PostgreSQL (Machine Learning and AWS soon) ",
    link: "https://github.com/MShaoK/GoalSetter",
    img: "/images/img-placeholder.png",
    date: "May 2020 - present",
    highlight: "Django" 
  },
  {
    title: "Text Analytics Scrapper",
    paragraph: `Chrome extension that informs users of the cognitive sentiment of the page's text.`,
    frontEnd: "Front-end: HTML, CSS",
    backEnd: "Back-end: JavaScript, Microsoft Azure API, Ajax",
    link: "https://github.com/ej2brown/text-analytics-chrome-ext",
    img: "/images/projects/ext-analytics.png",
    date: "May 2020",
    highlight: "Scraper, Chrome Extension" 
  },
  {
    title: "DevCollabs",
    paragraph: "Connects developers on a unified platform and allows collaboration on an IDE code editor. PERN stack.",
    frontEnd: "Front-end: Styled Components, Material UI, React",
    backEnd: "Back-end: TypeScript, Gatsby, Express, JWT ",
    link: "https://github.com/bmark88/lhl-final",
    img: "/images/projects/devCollabs.png",
    date: "May 2020",
    highlight: "" 
  },
  {
    title: "Jungle",
    paragraph: "A mini e-commerce application.",
    frontEnd: "Front-end: HTML, CSS",
    backEnd: "Back-end: Ruby, Ruby on Rails",
    link: "https://github.com/ej2brown/jungle-rails",
    img: "/images/projects/jungle.png",
    date: "May 2020",
    highlight: "Ruby on Rails" 
  },
  {
    title: "Interview Scheduler",
    paragraph: "Single page application (SPA) for users to book interviews with the interviewer of their choice. Includes error handling and async loading status.",
    frontEnd: "Front-end: HTML, CSS/SCSS, React",
    backEnd: "Back-end: Node, Express, SQL, API, WebSockets",
    testing: " Testing: Cypress, Jest, Storybook, CircleCi",
    link: "https://github.com/ej2brown/scheduler",
    img: "/images/projects/scheduler.png",
    date: "March 2020",
    highlight: "Testing: Cypress, Jest, Storybook, CircleCi"
  },
  {
    title: "Resource Wall",
    paragraph: "Similar to Pinterest boards, learners can save learning resources like tutorials, blogs and videos.",
    frontEnd: "Front-end: HTML, CSS/SCSS",
    backEnd: " Node, Express, SQL, API, jQuery",
    link: "https://github.com/ej2brown/resourse_wall",
    img: "/images/projects/resource-wall.png",
    date: "March 2020",
    highlight: "jQuery, SCSS"
  }
];