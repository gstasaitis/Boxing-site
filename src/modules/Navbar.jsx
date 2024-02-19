import { GiBoxingGlove } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="icon">
        <GiBoxingGlove />
        </div>
        <div className="navi">
            <ul>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"></a>Classes</li>
                <li>Prices</li>
                <li>Team</li>
                <li>Gallery</li>
                <li>Contacts</li>
                <li>Sign Up</li>
            </ul>
        </div>
        <div className="phone">
        <FaPhoneAlt /> +123 123 123123
        </div>
  </div>
  )
}

export default Navbar