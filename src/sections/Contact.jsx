import { FaPhone } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5";
import { Ri24HoursLine } from "react-icons/ri";


const Contact = () => {
  return (
    <div className="contact">
        <div className="heading">
            <h1>Contact Us!</h1>
        </div>
        <div className="contact-section">
            <div className="contact-info">
                <div className="info">
                    <div className="info-icon">
                <FaPhone />
                    </div>
                    <div className="info-text">
                    <p>Mobile Phone</p>
                <h5>+123 123 12345</h5>
                    </div>
                </div>
                <div className="info">
                <div className="info-icon">
                <IoLocationSharp />
                </div>
                <div className="info-text">
                <p>Adress</p>
                <h5>New York, st Washington Pl, 29</h5>
                </div>
                </div>
                <div className="info">
                <div className="info-icon">
                <Ri24HoursLine />
                </div>
                <div className="info-text">
                <p>Gym 24/7</p>
                <h5>Trainings Check Calendar</h5>
                </div>
                </div>
                <div className="map-button">
                <button className="button-48" role="button"><span className="text">Show on google maps</span></button>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Contact