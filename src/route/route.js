import Login from "../pages/login";
import Home from "../pages/home";


const title = "BlockFlix";

export const routes = [
    {
        path: "/orders",
        component: "Login",
        title: title + "- Ordens",
        login: false,
    },
    {
        path: "/checkout",
        component: "Login",
        title: title + "- Checkout",
        login: false,
    },
    {
        path: "/description/:movie",
        component: "Login",
        title: title + "- Descrição",
        login: false,
    },
    {
        path: "/home",
        component: Home,
        title: title + "- Inicio",
        login: false,
    },
    {
        path: "/",
        component: Login,
        title: title + "- Login",
        login: false,
    },
]