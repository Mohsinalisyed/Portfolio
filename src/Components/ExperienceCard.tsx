import React from 'react'
import { useTheme } from '../Theme/ThemeContext';
interface Iprops{
    startDate:string;
    endDate:string;
    position:string;
    company:string;
    desc: React.ReactNode;
    location: string;
}
const ExperienceCard: React.FC<Iprops> = ({ startDate, endDate, position, company, desc, location }) => {
 const { theme } = useTheme();
  return (
      <div className="card shadow border-0 rounded-4 mb-5 bg-gradient">
          <div className="card-body res-p">
        <div className="row align-items-center gx-5">
            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className={`${theme === 'dark' ? 'bg-light' : 'bg-dark'} p-4 rounded-4`}>
                    <div className="text-primary fw-bolder mb-2">{startDate}- {endDate}</div>
                    <div className="small fw-bolder">{position} </div>
                          <div className="small text-muted">{company}</div>
                          <div className="small text-muted">{location}</div>
                </div>
            </div>
            <div className="col-lg-8 text-bg-light"><div>{desc}</div></div>
        </div>
    </div>
</div>
  )
}

export default ExperienceCard
