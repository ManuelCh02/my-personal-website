import { About } from "./About.jsx"
import { Experience } from "./experiences/Experience.jsx"
import { Projects } from "./projects/Projects.jsx"
import { Skills } from "./Skills.jsx"
import { Education } from "./Education.jsx"

export function Main ({experienceData, projectsData}) {
    return (
        <main>
            <About />
            <Experience experienceData={experienceData}/>
            <Projects projectsData={projectsData}/>
            <div className="skills-education-container">
                <Skills />
                <Education />
            </div>      
        </main>
    )
}