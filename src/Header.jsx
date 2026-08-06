import {FaGlobe} from 'react-icons/fa'

export default function Header(){
  return(
    <header >
      <FaGlobe size={30} color="white" className='icon' alt = "globe-icon" />
      <h1>my travel journal .</h1>
    </header>
  )
}