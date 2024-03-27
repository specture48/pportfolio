import {FC} from "react";
import {Link} from "react-router-dom";

const NavBar: FC = () => {

    return <div className="
    z-30
    {/*mt-10*/}
    {/*mb-5*/}
    h-[100px]
    shadow-xl
    fixed
    top-0
    w-full
    {/*w-[90%]*/}
    {/*left-[5%]*/}
    bg-[black]
    ">
            <div className="flex
        justify-between
        h-full
        items-center
    container
mx-auto
px-5
        ">
                <div className="
            items-center
            flex
            h-full
            justify-center
            ">
                <span className=" text-4xl font-bold text-white">
                    Daniel
                </span> <span className="text-[red] text-4xl">.</span>
                </div>

                <div className="
            ">
                    <Link  className="w-[50%] h-[50%]" to="/public">
                        <img src="/public/menu.png" alt=""/>
                    </Link>
                </div>
            </div>
        </div>

}
export default NavBar