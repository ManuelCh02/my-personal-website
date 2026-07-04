import style from "../styles/Project.module.css"

export function ProjectCard () {
    return (
        <div>
            <ul>
                <li>
                    <a 
                        href="https://manuelch02.github.io/movie-website/"
                        target="about_blank"
                        className={style.projectCardContainer}>
                        <h4>Movie Website</h4>
                        <p>Aplicación web responsive que permite a los usuarios explorar, buscar y marcar películas como favoritas mediante la API de The Movie Database (TMDb). El proyecto incorpora patrones de interfaz de usuario, carga básica, transiciones de vista y guardado persistente de favoritos mediante localStorage.</p>
                        <ul className={style.techContainer}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>HTTP</li>
                        </ul>
                    </a>
                </li>
            </ul>
        </div>
    )
}