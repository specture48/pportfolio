import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

const MainLayout = () => {
    return (
        <div className=" min-h-[100vh] bg-[black] text-white bg-cover bg-no-repeat">
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
