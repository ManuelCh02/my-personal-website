export function ExperienceCard ({experienceData}) {
    return (
        <div>
            {
                experienceData.map(data => {
                    return (
                        <div className="experience-data">
                            <span>{data.startDate} - {data.endDate}</span>
                            <div>
                                <h4>{data.title}</h4>
                                <span className="experience-type">{data.type}</span>
                            </div>
                            <p>{data.description}</p>
                            <ul className="goal-container">
                                {
                                    data.goals.map(goal => <li>{goal}</li>)
                                }
                            </ul>             
                            <ul className="tech-container">
                                {
                                    data.technologies.map(tech => <li>{tech}</li>)
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}