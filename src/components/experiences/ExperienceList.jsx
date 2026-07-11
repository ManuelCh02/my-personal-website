import { ExperienceCard } from "./ExperienceCard.jsx";

import style from "./Experiences.module.css"

export function ExperienceList({experienceData}) {
    return (
        <ul className={style.card}>
            {experienceData.map(experience => 
                <ExperienceCard key={experience.id} experience={experience} />
            )}
        </ul>
    )
}