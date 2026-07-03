import { ProjectCard } from "./ProjectCard.jsx"
import style from "../styles/Project.module.css"

export function Projects () {
    return (
        <section className={style.projectSectionContainer}>
            <h3 className={style.projectTitle}>P R O J E C T S</h3>
            <ProjectCard />
        </section>
    )
}