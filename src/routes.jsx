import App from "./App";
import About from "./About";
import Software from "./Software";
import Art from "./Art";
const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/software",
                element: <Software />
            },
            {
                path: "/art",
                element: <Art />
            }

        ]
    },

];

export default routes;