import { link } from "fs";
import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on a web app, that lets customers manage music in restaurants and cafés using tokens from purchases.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Weather Web App",
    des: "Discover the Weather, Anytime, Anywhere!",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Tabouzadah/JS-Weather-WebApp",
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis elit dolor, nec commodo risus tristique a. Mauris.",
    img: "/transparent.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis elit dolor, nec commodo risus tristique a. Mauris.",
    img: "/transparent.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis elit dolor, nec commodo risus tristique a. Mauris.",
    img: "/transparent.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://example.com",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien tincidunt, tristique justo et, cursus arcu. Suspendisse fringilla consectetur odio, ut ornare nisl auctor quis. Integer lobortis ante augue, id varius nisl pulvinar nec. Cras laoreet, eros at vulputate dignissim, nulla nibh aliquet nulla, vel sagittis.",
    name: "John Doe",
    title: "CEO of Example Technologies",
  },
  {
    quote:
      "Interviewing Seif was one of the best experiences I've ever had. His professionalism, punctuality, and dedication to providing insightful and thorough responses were evident throughout our conversation. Seif's passion for his field truly stands out. If you're looking for an engaging and knowledgeable interviewee, Seif is the perfect choice.",
    name: "Shingo Abe",
    title: "CEO of Bridge Asia",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien tincidunt, tristique justo et, cursus arcu. Suspendisse fringilla consectetur odio, ut ornare nisl auctor quis. Integer lobortis ante augue, id varius nisl pulvinar nec. Cras laoreet, eros at vulputate dignissim, nulla nibh aliquet nulla, vel sagittis.",
    name: "John Doe",
    title: "CEO of Example Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien tincidunt, tristique justo et, cursus arcu. Suspendisse fringilla consectetur odio, ut ornare nisl auctor quis. Integer lobortis ante augue, id varius nisl pulvinar nec. Cras laoreet, eros at vulputate dignissim, nulla nibh aliquet nulla, vel sagittis.",
    name: "John Doe",
    title: "CEO of Example Technologies",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at sapien tincidunt, tristique justo et, cursus arcu. Suspendisse fringilla consectetur odio, ut ornare nisl auctor quis. Integer lobortis ante augue, id varius nisl pulvinar nec. Cras laoreet, eros at vulputate dignissim, nulla nibh aliquet nulla, vel sagittis.",
    name: "John Doe",
    title: "CEO of Example Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Dynasty Esports",
    img: "/dynasty.png",
    nameImg: "/dynastyName.png",
  },
  {
    id: 2,
    name: "El Houbi Technometal",
    img: "/eH.png",
    nameImg: "/eHName.png",
  },
  {
    id: 3,
    name: "Hello Maldives",
    img: "/transparent.png",
    nameImg: "/hM.png",
  },
  {
    id: 4,
    name: "Tabouzadah for Media Productions",
    img: "/tfmp.png",
    nameImg: "/tfmpn.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using Angular.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer",
    desc: "Created and deployed a comprehensive website portfolio to highlight company products & services, increasing awareness among target customers",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Intranet Development Project",
    desc: "Overhauled legacy intranet, designing & deploying fully integrated software solution companywide",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Part-Time Frontend Developer",
    desc: "Spearheaded the redesign of the company's website, collaborated with the marketing team to implement SEO best practices, conducted A/B testing on new website features leading to an optimized user experience",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Tabouzadah/",
  },
  {
    id: 2,
    img: "/insta.svg",
    url: "https://www.instagram.com/seifthedeveloper/",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/seif-tabouzadah-427686210/",
  },
];
