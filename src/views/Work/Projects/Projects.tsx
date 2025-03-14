import './Projects.scss'
import ProjectCard from '../../../components/ProjectCard/ProjectCard'
import { projects } from './projectData'

function Projects() {
  return (
    <div className='projects-section'>
      <h1 className='default-title'>Projects</h1>
      <p className='description'>Here are some of my personal projects</p>
      <div className='projects'>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <p className='footer-text'>Check out my GitHub for more projects!</p>
    </div>
  )
}

export default Projects
