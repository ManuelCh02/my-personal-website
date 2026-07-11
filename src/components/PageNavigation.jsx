import "../styles/PageNavigation.css"

const navLinks = [
  {
    id: "aboutLink",
    href: "#about",
    label: "Sobre Mí"
  },
  {
    id: "experienceLink",
    href: "#experience",
    label: "Experiencia"
  },
  {
    id: "projectsLink",
    href: "#projects",
    label: "Proyectos"
  },
  {
    id: "skillsLink",
    href: "#skills",
    label: "Skills"
  },
  {
    id: "educationLink",
    href: "#education",
    label: "Educación"
  }
]

export function PageNavigation () {
    return (
        <nav className="pageNavigationContainer">
          <ul className="pageNavigationList">
            {navLinks.map(link =>
              <li key={link.id}>
                <a href={link.href} className="link-nav">
                  <span className="transition"></span>
                  <span>{link.label}</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
    )
}