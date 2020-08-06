interface iSchools {
  institute: string,
  degree: string,
  link: string,
  img: string,
  alt: string
};

interface iWork {
  company: string,
  title: string,
  summary: string[],
};

export const schools: iSchools[] | any = [
  {
    institute: "Lighthouse Labs | Mar - May 2020",
    degree: "Diploma: Full-Stack Web Development",
    img: "/images/lighthouselabs-logo.png",
    alt: "lighthouselabs-logo"
  },
  {
    institute: "University of Waterloo | 2015 - 2019",
    degree: "Bachelor of Science: General",
    img: "/images/uwaterloo-logo.png",
    alt: "uwaterloo-logo"
  }
];

export const work: iWork[] | any = [
  {
    company: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    summary: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Aliquam tincidunt mauris eu risus.",
      "Vestibulum auctor dapibus neque."
    ],
  },
  {
    company: "Lorem ipsum",
    title: "Lorem ipsum dolor sit amet",
    summary: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "Aliquam tincidunt mauris eu risus.",
      "Vestibulum auctor dapibus neque."
    ],
  }
];