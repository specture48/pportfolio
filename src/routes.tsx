import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts";
import Home from "./pages/home.tsx";


const routers = createBrowserRouter([
    {
        path: "/o",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
        ],
    },
    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
]);
export {routers};
