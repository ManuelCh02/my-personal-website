import { ExperienceCard } from "./ExperienceCard.jsx"
import { ExperienceList } from "./ExperienceList.jsx"

export function Experience ({experienceData}) {
    return (
        <section className="experience-container" id="experience">
            <h3>E X P E R I E N C I A</h3>
            <ExperienceList experienceData={experienceData}/>
        </section>
    )
}