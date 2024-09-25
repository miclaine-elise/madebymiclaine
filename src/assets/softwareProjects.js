import blogImg from './blog.png';
import rexImg from './rex.png';
import adaptiveImg from './adaptive.png';
import toDoImg from './to-do.png';
const projects = [
    {
        "title": "REX IOS APP",
        "img": rexImg,
        "info": "Over my travels, I'm always asking for recomendations for the best cafes and places to see, which was my source of inspiration for this app. I wanted a place where people could easily share their favorite things with me and mine with others.",
        "features": [
            "Create, edit, save, and delete 'boards', 'rex items', and 'suggestions'",
            "User authentication and authorizathon",
            "Search and 'follow' other users",
            "'Feed' view, which allows the user to view and 'like' updates made by the users they follow",
            "Tech Stack: SwiftUI, Firebase"
        ],
        "link": "https://adaptiveskateboard.com",
        "github": "https://github.com/miclaine-elise/RexApp"
    },
    {
        "title": "ADAPTIVE SKATEBOARDING PROJECT",
        "img": adaptiveImg,
        "info": "This website was developed for The Adaptive Skateboarding Project. Providing a hub for people in the community to learn, interact, and stay up to date with events.",
        "features": [
            "View stories, images, and videos from the adaptive skate community",
            "Downloadable infographics",
            "Tech Stack: Webpack, Javascript"
        ],
        "link": "https://adaptiveskateboard.com",
        "github": "https://github.com/miclaine-elise/adaptive-skateboarding-project"
    },
    {
        "title": "BLOG",
        "img": blogImg,
        "info": "This website uses an API only backend created using Express to serve two front-ends. One front end serves users to view the blog and the other for the admin (me) to manage my posts and comments.",
        "features": [
            "User authentication and authorizathon using JWTs",
            "Create, read, update, and delete endpoints for blog posts, users, and comments",
            "Secure passwords storage with bcryptJS",
            "Tech Stack: React, NodeJS, Express, MongoDB"
        ],
        "link": "https://miclaine-blog.netlify.app",
        "github": "https://github.com/miclaine-elise/blog-api"
    },
    {
        "title": "TO DO LIST",
        "img": toDoImg,
        "info": "Developed a dynamic task management app using JavaScript, with features including project-based task organization, task creation, editing, deletion, and prioritization.",
        "features": [
            "Integrated localStorage for data persistence, ensuring tasks and projects are saved across sessions.",
            "Modular design to separate business logic from the user interface, enhancing maintainability and scalability.",
            "Tech Stack: Webpack, Javascript"
        ],
        "link": "",
        "github": "https://github.com/miclaine-elise/to-do-list"
    }
]
export default projects