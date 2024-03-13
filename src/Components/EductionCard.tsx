import React from 'react'
import { useTheme } from '../Theme/ThemeContext';
interface Iprops{
    startDate:string;
    endDate:string;
    degree:string;
    location1:string;
    location2:string;
    grade:string
}
const EductionCard: React.FC<Iprops> = ({ startDate, endDate, degree, location1, location2, grade }) => {
    const { theme } = useTheme();

  return (
      <div className="card shadow border-0 rounded-4 mb-5 bg-gradient">
    <div className="card-body p-5">
        <div className="row align-items-center gx-5">
            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                      <div className={`p-4 rounded-4 ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}>
                    <div className="text-secondary fw-bolder mb-2">{startDate} - {endDate}</div>
                    <div className="mb-2">
                        <div className="small fw-bolder">{location1}</div>
                        <div className="small text-muted">{location2}</div>
                    </div>
                    <div className="fst-italic">
                        <div className="small text-muted">{degree}</div>
                    </div>
                </div>
            </div>
                  <div className="col-lg-8 text-bg-light"><div>{grade}</div></div>
        </div>
    </div>
</div>
  )
}

export default EductionCard
