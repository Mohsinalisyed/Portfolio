import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
import { useTheme } from '../Theme/ThemeContext';

interface Iprops{
    projectName:string;
    link?: string;
    desc?: string;
  status?: string
  imgUrl:string
}
const ProjectCard: React.FC<Iprops> = ({ projectName, link, desc, status, imgUrl }) => {
  const { theme } = useTheme();
  const bgColor = theme === 'dark' ? 'bg-light' : 'bg-dark'
  return (
    <div className={`card mb-5 ${bgColor}`} style={{ backgroundImage: `url(${imgUrl})`}}>
      <div className="card-content text-bg-dark">
        <h2 className="card-title">{projectName} <span style={{ fontSize: "12px", position: "absolute", top: "-10px", left: "70%", whiteSpace: "nowrap",color:'green' }}>{status && '(In progress)'}</span></h2>
        <p className="card-body">
          {desc}
        </p>
        <Link to={link ?? ''} className="button" target="_blank" rel="noopener noreferrer">
          {link && 'Visit Website'}
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
