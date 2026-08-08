import { FaMapMarkerAlt } from "react-icons/fa";

export default function Entry(props){
  return(
    <article className="journal-entry">
      <div className="main-image-container">
         <img 
         className ='main-image' 
         src = {props.img.src}
         alt= {props.img.alt}
          ></img>
      </div>
      <div className="journal-info">
        <FaMapMarkerAlt size={20} color="#F55A5A" className = "marker-icon" />
        <span>{props.title}</span>
        <a target="blanck" href={props.link}>View on google maps</a>
        <h2>{props.place}</h2>
        <p>{props.date}</p>
        <p>{props.description}</p>
      </div>
    </article>
  )
}