import {FC} from "react";

const Footer: FC = () => {
    return <div className="mt-10">
        <hr/>
        <div className="p-10  text-white items-center flex justify-between ">
            <div>
                <p>© 2024 All rights reserved.</p>
            </div>
            <div className="flex">
                {/* <img src="/linkedin.png" className="mx-2 w-[50px] h-[50px]" alt=""/> */}
            </div>
        </div>
    </div>
}
export default Footer