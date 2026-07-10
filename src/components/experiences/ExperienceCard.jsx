export function ExperienceCard ({experience}) {
    return (
        <li className="experience-data">
            <span className="experience-data-date">{experience.startDate} - {experience.endDate}</span>
            <div className="experience-data-infoContainer">
                <div>
                    <h4>{experience.title}</h4>
                    <span className="experience-type">{experience.type}</span>
                </div>
                <p>{experience.description}</p>
                <ul className="goal-container">
                    {experience.goals.map(goal => <li key={goal}>{goal}</li>)
                    }
                </ul>             
                <ul className="tech-container">
                    {experience.technologies.map(tech => <li key={tech}>{tech}</li>)
                    }
                </ul>
            </div>              
        </li>
    )
}