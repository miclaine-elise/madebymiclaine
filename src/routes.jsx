import App from "./App";
import About from "./About";
import Software from "./Software";
import Privacy from "./Privacy";
import Art from "./Art";
import { Navigate } from 'react-router-dom';
const routes = [
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Navigate to="/about" />,
            },
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
            },
            {
                path: "/privacy",
                element: <Privacy />
            }

        ]
    },

];

export default routes;