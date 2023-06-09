import React from 'react'
interface Iprops{
    projectName:string;
    link:string;
    imgSrc:string;
}
const ProjectCard:React.FC<Iprops> = ({projectName,link,imgSrc}) => {
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
    <div className="card-body p-0 ">
        <div className="d-flex align-items-center  justify-content-between">
            <div className="p-5">
                <h2 className="fw-bolder">{projectName}</h2>
                <a href={link}> Click to visit</a>
            </div>
            <div><img className="img-fluid" src={imgSrc} alt="..." style={{maxWidth:'400px'}} /></div>
        </div>
    </div>
</div>
  )
}

export default ProjectCard
