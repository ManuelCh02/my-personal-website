import style from "../styles/Education.module.css"

export function Education () {
    return (
        <section className={style.educationContainer} id="education">
            <div className={style.educationCollege}>
                <h3>E D U C A C I Ó N</h3>
                <div className={style.educationCard}>
                    <span className={style.educationDate}>2020 - ACTUALIDAD</span>
                    <div>
                        <h4>Tecnología en Desarrollo de Software</h4>
                        <span className={style.educationCollegeName}>Universidad Nacional abierta y a distancia</span>
                        <p>Cursando la carrera</p>
                    </div>
                </div>
            </div>
            {
            // Will be there soon ;)
            /* <div>
                <h3>CERTIFICATIONS</h3>
                <ul>
                    <li>
                        AWS Certified Solutions Architect — Associate (2023)
                    </li>
                    <li>
                        Google UX Design Professional Certificate (2021)
                    </li>
                </ul>
            </div> */}
        </section>
    )
} 