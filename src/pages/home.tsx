import Bio from "../components/Bio.tsx";
import Projects from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";
import Footer from "../components/Footer.tsx";

function Home() {
    return (
        <div className="h-full  pt-[100px]  ">
            <div className=" ">
                <Bio/>
                <Skills/>
                <Projects/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home