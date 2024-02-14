// import { Header, NavBar, TopLeftImage } from "@components";
// import { Outlet } from "react-router-dom";


import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

const MainLayout = () => {
    return (
        <div className=" min-h-[100vh] bg-[black] text-white bg-cover bg-no-repeat">
            {/*<TopLeftImage />*/}
            <NavBar/>
            <div className="w-full bg-[red] shadow-xl ">
              {/*<Header />*/}
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
