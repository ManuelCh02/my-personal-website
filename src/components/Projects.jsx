import { ProjectCard } from "./ProjectCard.jsx"
import style from "../styles/Project.module.css"

export function Projects () {
    return (
        <section className={style.projectSectionContainer} id="projects">
            <h3 className={style.projectTitle}>P R O Y E C T O S</h3>
            <ProjectCard />
        </section>
    )
}