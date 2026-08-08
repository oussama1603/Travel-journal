import { FaMapMarkerAlt } from "react-icons/fa";

export default function Entry(props){
  return(
    <article className="journal-entry">
      <div className="main-image-container">
         <img 
         className ='main-image' 
         
          ></img>
      </div>
      <div className="journal-info">
        <FaMapMarkerAlt size={20} color="#F55A5A" className = "marker-icon" />
        <span>{props.title}</span>
        <a target="blanck" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on google maps</a>
        <h2>{props.place}</h2>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </article>
  )
}