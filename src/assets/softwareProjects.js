import blogImg from './blog.png';
import adaptiveImg from './adaptive.png';
import toDoImg from './to-do.png';
const projects = [
    {
        "title": "ADAPTIVE SKATEBOARDING PROJECT",
        "img": adaptiveImg,
        "info": "This website was developed for The Adaptive Skateboarding Project. Providing a hub for people in the community to learn, interact, and stay up to date with events.",
        "features": [
            "User authentication and authorizathon using JWTs",
            "Create, read, update, and delete endpoints for blog posts, users, and comments",
            "Secure passwords storage with bcryptJS",
            "Tech Stack: NodeJS, Express, MongoDB"
        ],
        "link": "https://https://adaptiveskateboard.com",
        "github": "https://github.com/miclaine-elise/madebymiclaine"
    },
    {
        "title": "BLOG",
        "img": blogImg,
        "info": "This website uses an API only backend created using Express to serve two front-ends. One front end serves users to view the blog and the other for the admin (me) to manage my posts and comments.",
        "features": [
            "User authentication and authorizathon using JWTs",
            "Create, read, update, and delete endpoints for blog posts, users, and comments",
            "Secure passwords storage with bcryptJS",
            "Tech Stack: NodeJS, Express, MongoDB"
        ],
        "link": "https://miclaine-blog.netlify.app/posts",
        "github": "https://github.com/miclaine-elise/madebymiclaine"
    },
    {
        "title": "TO DO LIST",
        "img": toDoImg,
        "info": "This webpage was developed using Javascript for The Odin Project course.",
        "features": [
            "User authentication and authorizathon using JWTs",
            "Create, read, update, and delete endpoints for blog posts, users, and comments",
            "Secure passwords storage with bcryptJS",
            "Tech Stack: NodeJS, Express, MongoDB"
        ],
        "link": "https://miclaine-blog.netlify.app/posts",
        "github": "https://github.com/miclaine-elise/to-do-list"
    }
]
export default projects