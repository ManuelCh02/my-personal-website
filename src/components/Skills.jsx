import style from "../styles/Skills.module.css"

export function Skills () {
    return (
        <section className={style.skillsContainer} id="skills">
            <h3>S K I L L S</h3>
            <div>
                <h4 className={style.skillsTitle}>LANGUAGES</h4>
                <ul className={style.techContainer}>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>css</li>
                </ul>
            </div>
            <div>
                <h4 className={style.skillsTitle}>FRONTEND</h4>
                <ul className={style.techContainer}>
                    <li>React.js</li>
                </ul>
            </div>
            <div>
                <h4 className={style.skillsTitle}>BACKEND</h4>
                <ul className={style.techContainer}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                </ul>
            </div>
            
            {
            /* Will be added soon ;) */
            /* <div>
                <h4>CLOUD & TOOLING</h4>
                <ul>
                    <li>AWS</li>
                    <li>Docker</li>
                </ul>
            </div> */}
        </section>
    )
}