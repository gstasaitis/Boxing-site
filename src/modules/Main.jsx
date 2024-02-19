import Navbar from "./Navbar"
import { FaAngleDoubleDown } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
        <Navbar/>
        <div className="arrow">
            <FaAngleDoubleDown />
        </div>
  </div>  )
}

export default Main