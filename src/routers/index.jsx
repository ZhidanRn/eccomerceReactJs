import { createBrowserRouter } from "react-router-dom";
import HomePages from "../pages/HomePages";
import DetailPages from "../pages/DetailPages";
import LoginPages from "../pages/LoginPages";
import RegisterPages from "../pages/RegisterPages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePages />,
    },
    {
        path: "detail",
        element: <DetailPages />,
    },
    {
        path: "login",
        element: <LoginPages />
    },
    {
        path: "register",
        element: <RegisterPages />
    }

])
