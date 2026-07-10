import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList({experienceData}) {
    return (
        <ul className="experienceCardContainer">
            {experienceData.map(experience => 
                <ExperienceCard key={experience.id} experience={experience} />
            )}
        </ul>
    )
}