import style from "./Projects.module.css"

export function ProjectCard ({project}) {
    return (
        <li>
            <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={style.projectCardContainer}
            >
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <ul 
                    className={style.techContainer}
                >
                    {
                        project.technologies.map(tech =>
                            <li key={tech}>{tech}</li>
                        )
                    }
                </ul>
            </a>
        </li>
    )
}