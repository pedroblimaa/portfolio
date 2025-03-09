import './ProjectCard.css'

export interface Project {
  title: string
  description: string
  image: string
  link: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className='project-card'>
      <a href={project.link} target='_blank' rel='noreferrer'>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </a>
    </div>
  )
}

export default ProjectCard
