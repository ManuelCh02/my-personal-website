import style from "../styles/Project.module.css"

export function ProjectCard () {
    return (
        <div>
            <h4>Openmetrics</h4>
            <p>Open-source, self-hostable analytics dashboard with privacy-first event tracking.</p>
            <ul className={style.techContainer}>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
            </ul>
        </div>
    )
}