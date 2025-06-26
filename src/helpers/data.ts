import swpProject from "assets/project/SWP391-KoiOrderingSystemInJapan.png";
import portFolio from "assets/project/portFolio.png";
import cmsProject from "assets/project/CMS-Commercial-blog.png";
export const APP_DATA = {
  FACEBOOK_URL: "https://www.facebook.com/vietphomaique123/",
  GIT_URL: "https://github.com/Vietokeman/",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Kỹ sư phần mềm",
      en: "Software Engineer",
    },
    company: {
      vi: "An Khang Thịnh Vượng",
      en: "An Khang Thinh Vuong",
    },
    duration: {
      vi: "Từ 05/2025 - Hiện tại",
      en: "May 2025 - Present",
    },
  },
  {
    id: 2,
    title: {
      vi: "Lập trình viên phần mềm",
      en: "Software Developer",
    },
    company: {
      vi: "FPT Software",
      en: "FPT Software",
    },
    duration: {
      vi: "Từ 01/2025 - Hiện tại",
      en: "January 2025 - Present",
    },
  },
  {
    id: 3,
    title: {
      vi: "Dự án tự làm",
      en: "Self Employed",
    },
    company: {
      vi: "Học kiến thức mới mỗi ngày",
      en: "Code and build something everyday.",
    },
    duration: {
      vi: "Tháng 9/2024 - Hiện tại",
      en: "September 2024 - Present",
    },
  },
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: swpProject,
    title: "Koi Ordering System In Japan",
    description:
      "The Koi Ordering System in Japan connects Vietnamese Koi enthusiasts with top Japanese farms, streamlining the purchase and delivery of premium Koi fish.he Koi Ordering System in Japan connects Vietnamese Koi enthusiasts with top Japanese farms, streamlining the purchase and delivery of premium Koi fish..",
    githubLink: "https://github.com/thanhbinh12i/KoiOrderingSystemInJapan",
    demoLink: "https://koidaynevn.vercel.app/",
  },
  {
    id: 2,
    imgPath: portFolio,
    title: "Portfolio",
    description: "Create my Portfolio by learning typescript",
    githubLink: "https://github.com/Vietokeman/My-Portfolio",
    demoLink: "https://my-portfolio-wu6a.vercel.app/",
  },
  {
    id: 3,
    imgPath: cmsProject,
    title: "CMS Commercial Platform",
    description:
      "A fullstack CMS for blog/content management built with .NET API, .NET MVC, and Angular. It supports user roles, content workflows, and analytics dashboard.",
    githubLink: "https://github.com/Vietokeman/Commercial-CMS",
  },
];

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Git",
  "Bootstrap",
  "MySQL",
];
