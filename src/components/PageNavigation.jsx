import "../styles/PageNavigation.css"

export function PageNavigation () {
    return (
        <nav className="pageNavigationContainer">
          <ul className="pageNavigationList">
            <li>
              <a href="#about">
                <span className="transition"></span>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#experience">
                <span className="transition"></span>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects">
                <span className="transition"></span>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#skills">
                <span className="transition"></span>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#education">
                <span className="transition"></span>
                <span>Education</span>
              </a>
            </li>
          </ul>
        </nav>
    )
}