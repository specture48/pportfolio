import Bio from "../components/Bio.tsx";
import Projects from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";
import Footer from "../components/Footer.tsx";
import Educations from "../components/Educations.tsx";
import WorkExperiences from "../components/WorkExperiences.tsx";
import ChallengesAndOptimizations from "../components/ChallengesAndOptimizations.tsx";

function Home() {
    return (
        <div className="h-full  pt-[100px]  mx-10">
            <div className="">
                <Bio/>
                <Skills/>
                <Projects/>
                <Educations/>
                <WorkExperiences  />
                <ChallengesAndOptimizations/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home