import React from 'react'
import { Link } from 'react-router-dom';
interface Iprops{
    projectName:string;
    link?: string;
    desc?: string;
    status?:string
}
const ProjectCard: React.FC<Iprops> = ({ projectName, link, desc, status }) => {
  return (
    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
    <div className="card-body p-0 ">
              <div className="d-grid d-sm-flex justify-content-sm-center justify-content-xxl-start align-items-center py-4">
            <div className="px-3" style={{minWidth:"230px"}}>
                      <h2 className="fw-bolder" style={{ position: "relative",width:"max-content" }}>{projectName}
                          <span style={{ fontSize: "12px",position:"absolute", top:"-10px" ,left:"70%", whiteSpace:"nowrap"}}>{status && '(In progress)'}</span></h2>
                {link && <Link to={link}> Click to visit</Link>}
            </div>
        <div className='px-3'>
         {desc}
        </div>
        </div>
    </div>
</div>
  )
}

export default ProjectCard
