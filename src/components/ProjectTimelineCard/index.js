import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="header">
        <h1>{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="icon" />
          <p className="date">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
