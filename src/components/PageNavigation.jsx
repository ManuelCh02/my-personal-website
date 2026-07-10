import "../styles/PageNavigation.css"

export function PageNavigation () {
    return (
        <nav className="pageNavigationContainer">
          <ul className="pageNavigationList">
            <li>
              <a href="#about" className="link-nav">
                <span className="transition"></span>
                <span>Sobre Mí</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="link-nav">
                <span className="transition"></span>
                <span>Experiencia</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="link-nav">
                <span className="transition"></span>
                <span>Proyectos</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="link-nav">
                <span className="transition"></span>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#education" className="link-nav">
                <span className="transition"></span>
                <span>Educatión</span>
              </a>
            </li>
          </ul>
        </nav>
    )
}