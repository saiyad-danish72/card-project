import React from 'react'
import { Bookmark, Car } from 'lucide-react'

const Card = (props) => {
  console.log(props.company)
  return (
      <div className="card">
        <div className="top">
          <img
            src={props.logo}
            alt={props.company}
            
          />
          
          <button>
            save <Bookmark />
          </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.postedDate}</span></h3>
          <h2>{props.post}</h2>
          <h4>{props.tag}</h4>
          <h4>{props.tag2}</h4>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
