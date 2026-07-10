import { ProjectCard } from "./ProjectCard.jsx"

export function ProjectList ({projectsData}) {
    return (
        <ul>
            {projectsData.map(project => 
                <ProjectCard key={project.id} project={project} />
            )}
        </ul>
    )
}