import { Hero } from './components/Hero.jsx'
import { SocialMedia } from './components/SocialMedia.jsx'
import { PageNavigation } from './components/PageNavigation.jsx'
import { Main } from './components/Main.jsx'
import { Footer } from './components/Footer.jsx'
import './App.css'

function App() {
  const experienceData = [
    {
      id: 1,
      startDate: 2021,
      endDate: 'Actualidad',
      title: 'Asesor Comercial',
      type: 'Remoto',
      description: 'Responsable de la gestión comercial, prospección de clientes y consultoría técnica para la venda de equipos industriales eléctricos. Encargado del ciclo completo de ventas.',
      goals: [
        'Gestión y optimización de la propescción y cotización a clientes',
        'Negociación exitosa de contratos comerciales de alto valor bajo modalidades de pago (50/50) mitigando riesgos financieros.',
        'Automatización del ciclo de ventas mediante la implementación de herramientas digitales',
      ],
      technologies: [
        
      ]  
    },
    {
      id: 2,
      startDate: 'Marzo 2025',
      endDate: 'Abril 2025',
      title: 'Desarrollador web Freelance',
      type: 'Remoto',
      description: 'Desarrollé un sitio web corporativo gestionando el ciclo de desarrollo desde el diseño y estructura hasta el proceso técnico completo configurando hosting, dominio e emails corporativos.',
      goals: [
        
      ],
      technologies: [
        'WordPress',
        'HTML',
        'CSS'
      ]  
    }
  ]

  const projectsData = [
    {
      id: 1,
      githubLink: "https://manuelch02.github.io/movie-website/",
      title: "Movie Website",
      description: "Aplicación web responsive que permite a los usuarios explorar, buscar y marcar películas como favoritas mediante la API de The Movie Database (TMDb). El proyecto incorpora patrones de interfaz de usuario, carga básica, transiciones de vista y guardado persistente de favoritos mediante localStorage.",
      technologies: ["HTML", "CSS", "JavaScript", "HTTP", "API"]
    }
  ]

  return (
    <div className="app-container">
      <div className="app-hero">
        <Hero />
        <PageNavigation /> 
        <SocialMedia />
      </div>
      <div className="app-main">
        <Main 
          experienceData={experienceData}
          projectsData={projectsData}  
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
