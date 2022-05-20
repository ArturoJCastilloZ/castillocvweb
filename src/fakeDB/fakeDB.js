import img1 from '../assets/img2.png';
import myweb from '../assets/mi-web.png';
import code from '../assets/code.png';

export const FAKE_DB = {
    hero: {
        name: "Arturo Castillo",
        profession: "Newly graduated developer",
        email: "castillo.arturo93@hotmail.com",
        linkedin: "https://www.linkedin.com/in/castillo93/",
        web: "https://arturocastillocv.vercel.app/",
        github: "https://github.com/ArturoJCastilloZ",
        url: img1,
        alt: "Caricatura"
    },
    curriculumSection: {
        education: [
            {
                title: "Ingeniería Desarrollo y gestión de software",
                year: "From September 2020 to April 2022",
                institution: "Universidad Tecnológica de Santa Catarina"
            },
            {
                title: "Técnico Superior Universitario en Tecnologías de la información y comunicación",
                year: "From September 2017 to August 2020",
                institution: "Universidad Tecnológica de Santa Catarina"
            }
        ],
        experience: [
            {
                title: "Web Development Intern",
                year: "From August 2021 to December 2021",
                institution: "Triple i Soluciones",
                description: "This company has a platform to manage tasks in a very orderly manner, said platform is called Fluxy. As a Web Development Intern, I made updates, fixes and modifications to this platform. Fluxy was created with Angular as FrontEnd, Go! as Backend and on localhost MongoDB was used.",
                // tools: 
                //     + "Angular"
                //     + "GitLab"
                //     + "MongoDB"
                //     + "Scrum"
                //     + "Karma&Jasmine"
            },
            {
                title: "Junior Developer",
                year: "From January 2022 to April 2022",
                institution: "Tecsa Contact Center",
                description: "Develop web pages requested through tickets by the Continuous Improvement team for departments such as Human Resources, Technical Support, even to motivate advisors with different dynamics taught by the Marketing department. The developments are done with PHP, Laravel, Tailwindcss, Javascript, JQuery and Ajax Requests.",
                // tools: 
                //     + "PHP"
                //     + "Laravel"
                //     + "SQL Server"
                //     + "MySql"
                //     + "GitHub"
            },
            {
                title: "Junior Developer",
                year: "From April 2022 to the present",
                institution: "v09&Co.",
                description: "Make updates or modifications to the Restology and Supercolchones pages, which were created in Magento2.",
                // tools: 
                //     + "Magento2"
            }
        ]
    },
    portfolio: [
        {
            url: myweb,
            alt: "Mi primer web hosteada",
            site: "https://arturocastillocv.vercel.app/",
            description: "My first hosted web development was my resume. I liked how my page was taking shape while I was learning to use the reactjs framework. Although it is something basic and simple, it is motivating to see how to get things out even without having prior knowledge of this framework."
        },
        {
            url: code,
            alt: "Codigo de la web hosteada",
            site: "https://github.com/ArturoJCastilloZ/arturocastillocv",
            description: "This is a part of the code of my first web page hosted."
        }
    ],
    footer: {
        info: "Page created with ReactJs, SCSS y @mui/icons-material",
        linkedin: "https://www.linkedin.com/in/castillo93/",
        web: "https://arturocastillocv.vercel.app/",
        create: "Arturo Castillo"
    }
}