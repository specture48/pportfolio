import {FC} from "react";
import Email from "../assets/icons/Email";
import Phone from "../assets/icons/Phone";
import WhatsApp from "../assets/icons/WhatsApp";
import LinkedIn from "../assets/icons/LinkedIn";
import Codeforces from "../assets/icons/Codeforces";
import Location from "../assets/icons/Location";
import Date from "../assets/icons/Date";
import { StackoverflowLine } from "devicons-react";
import Stackoverflow from "../assets/icons/StackOverFlow";

const Bio: FC = () => {
    return <div
        className="
    w-full
    min-h-[40vh]
    mt-[50px]
    mx-auto
    container
    text-white
    items-center
    justify-center
    ">
        <div>
        <div className="text-[1.4rem] flex flex-col gap-2">
							<div className="flex items-center gap-6">
								<Email />
								<a
									href="mailto:daniel.f.kasem@gmail.com"
									className="hover:underline"
								>
                                    daniel.f.kasem@gmail.com
								</a>
							</div>
							<div className="flex items-center gap-6">
								<Phone />
								<a
									href="tel:+963931869085"
									className="hover:underline"
								>
									+963 931 869 085
								</a>
							</div>
							<div className="flex items-center gap-6">
								<WhatsApp />
								<a
									href="https://wa.me/+963931869085"
									className="hover:underline"
									target="_blank"
								>
									+963 931 869 085
								</a>
							</div>
							<div className="flex items-center gap-6">
								<Location />
								<div>
									<a
										href="https://www.google.com/maps/place/Latakia,+Syria"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:underline"
									>
										Syria, Latakia
									</a>
									<span className="text-pumpkin text-[1.2rem] italic ml-2">
										(Willing To Relocate)
									</span>
								</div>
							</div>
							<div className="flex items-center gap-6">
								<Date />
								<div>March 22th, 1999</div>
							</div>
							<div className="flex items-center gap-6">
								<LinkedIn />
								<a
									href="https://www.linkedin.com/in/daniel-kasem-70bba9a4/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									/in/daniel-kasem
								</a>
							</div>
							<div className="flex items-center gap-6">
								<Stackoverflow />
								<a
									href="https://stackoverflow.com/users/21441411/daniel-kasem"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									daniel-kasem
								</a>
							</div>
							{/* <div className="flex items-center gap-6">
								<Codeforces />
								<a
									href="https://codeforces.com/profile/Nagham_Qarqamaz"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									/profile/Nagham_Qarqamaz
								</a>
							</div> */}
						</div>
        </div>
        <div className="mt-10">
        {/* <p className="text-4xl font-bold mb-10 ">
            Hi,I am Daniel
        </p> */}
        <p className="text-2xl  leading-loose">
            {/* I have four years of web development experience, specializing in backend technologies. For three years, I excelled in PHP, working with the Laravel framework. In the last two years, I transitioned to Node.js, specializing in Express and Nest.js. Proficient in MySQL and PostgresSQL, my approach emphasizes project success, and I am committed to staying current with industry trends */}
            I am a seasoned web developer with a strong focus on backend technologies. My expertise spans PHP with the Laravel framework, Node.js using Express and Nest.js. Recently, I've expanded my skill set to include Golang, where I’ve been able to harness its power for efficient and scalable backend solutions. I am proficient in working with both MySQL and PostgreSQL databases, always prioritizing project success and delivering high-quality results. My commitment to continuous learning ensures that I stay aligned with the latest industry trends and best practices.
        </p>
        </div>
        
    </div>
}
export default Bio