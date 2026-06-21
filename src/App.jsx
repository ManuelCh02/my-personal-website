import { Hero } from './components/Hero.jsx'
import { SocialMedia } from './components/SocialMedia.jsx'
import { Main } from './components/Main.jsx'
import { Footer } from './components/Footer.jsx'
import './App.css'

function App() {
  const experienceData = [
    {
      startDate: 2022,
      endDate: 'PRESENT',
      title: 'Senior Software Engineer · Northwind Cloud',
      type: 'Remote',
      description: 'Lead front-end engineer on the developer platform team, owning the component library and core dashboard.',
      goals: [
        'Reduced dashboard load time by 48% (4.1s → 2.1s) by code-splitting and migrating to React Server Components.',
        'Shipped a design system adopted by 9 teams, cutting UI bug reports by 35% quarter over quarter.',
        'Mentored 4 engineers; 2 were promoted within 12 months.'
      ],
      technologies: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'AWS'
      ]  
    }
  ]
 

  return (
    <>
      <Hero />
      <SocialMedia />
      <Main experienceData={experienceData}/>
      <Footer />
    </>
  )
}

export default App
