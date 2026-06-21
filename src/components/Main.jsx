import { About } from "./About.jsx"
import { Experience } from "./Experience.jsx"
import { Projects } from "./Projects.jsx"
import { Skills } from "./Skills.jsx"
import { Education } from "./Education.jsx"

export function Main ({experienceData}) {
    return (
        <main>
            <About />
            <Experience experienceData={experienceData}/>
            <Projects />
            <Skills />
            <Education />
        </main>
    )
}