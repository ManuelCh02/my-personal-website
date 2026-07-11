import style from "./Experiences.module.css"

export function ExperienceCard ({experience}) {
    return (
        <li className={style.data}>
            <span className={style.dataDate}>{experience.startDate} - {experience.endDate}</span>
            <div className={style.infoContainer}>
                <div>
                    <h4>{experience.title}</h4>
                    <span className={style.experienceType}>{experience.type}</span>
                </div>
                <p>{experience.description}</p>
                <ul className={style.goalContainer}>
                    {experience.goals.map(goal => <li key={goal}>{goal}</li>)
                    }
                </ul>             
                <ul className={`${style.techContainer}, tech-container`}>
                    {experience.technologies.map(tech => <li key={tech}>{tech}</li>)
                    }
                </ul>
            </div>              
        </li>
    )
}