import style from "../styles/About.module.css"

export function About () {
    return (
        <section className={style.section} id="about">
            <div className={style.aboutTitle}>
                <h3>S O B R E</h3>
                <h3>M Í</h3>    
            </div>
            <p>
                Soy un profesional apasionado por la tecnología y el desarrollo de soluciones que generan impacto. Me motiva enfrentar nuevos retos, aprender continuamente y colaborar con equipos para crear productos de calidad. Busco aportar tanto desde el punto de vista técnico como estratégico, combinando proactividad, capacidad de adaptación y enfoque en resultados para contribuir al éxito de cada proyecto.
            </p>
        </section>
    )
}