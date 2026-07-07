import style from "../styles/Project.module.css"

export function ProjectCard ({projectsData}) {
    return (
        <div>
            <ul>
                {
                    projectsData.map(project => 
                        <li key={project.id}>
                            <a 
                                href={project.githubLink}
                                target="about_blank"
                                className={style.projectCardContainer}
                            >
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <ul 
                                    className={style.techContainer}
                                >
                                    {
                                        project.technologies.map(tech =>
                                            <li>{tech}</li>
                                        )
                                    }
                                </ul>
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}