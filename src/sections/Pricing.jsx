import { CiCalendar } from "react-icons/ci";
import { GiGymBag } from "react-icons/gi";

const Pricing = () => {
  return (
    <div className="pricing">
        <div className="heading">
            <h1>Pricing</h1>
        </div>

        <div className="subscription">
            <h5>One Session</h5>
            <h5>Monthly</h5>
            <h5>Yearly</h5>
        </div>

        <div className="prices">
            <div className="price-container">
                <div className="price-header">
                    <h5>Monthly</h5>
                    <h2>8 Sessions</h2>
                </div>
                <div className="calendar">
                    <div className="calendar-icon">
                        <CiCalendar />
                    </div>
                    <div className="times">
                        <h3>Monday - Saturday</h3>
                        <h5>18:00 / 19:00 </h5>
                    </div>
                </div>
                <div className="calendar">
                    <div className="calendar-icon">
                        <GiGymBag />
                    </div>
                    <div className="times">
                        <h3>Price includes:</h3>
                        <h5>Water, Gym equipment</h5>
                    </div>
                </div>
                <div className="membership">
                    <div className="membership-price">
                        <h1>€ 45.99</h1>
                    </div>
                </div>
                <div className="button-container">
                    <button className="button-48" role="button"><span className="text">Get Started!</span></button>
                </div>
            </div>

            <div className="price-container">
                <div className="price-header">
                    <h5>Monthly</h5>
                    <h2>12 Sessions</h2>
                </div>
                <div className="calendar">
                    <div className="calendar-icon">
                        <CiCalendar />
                    </div>
                    <div className="times">
                        <h3>Monday - Saturday</h3>
                        <h5>18:00 / 19:00 </h5>
                    </div>
                </div>
                <div className="calendar">
                    <div className="calendar-icon">
                        <GiGymBag />
                    </div>
                    <div className="times">
                        <h3>Price includes:</h3>
                        <h5>Water, Towel, Gym equipment</h5>
                    </div>
                </div>
                <div className="membership">
                    <div className="membership-price">
                        <h1>€ 49.99</h1>
                    </div>
                </div>
                <div className="button-container">
                    <button className="button-48" role="button"><span className="text">Get Started!</span></button>
                </div>
            </div>

            <div className="price-container">
                <div className="price-header">
                    <h5>Monthly</h5>
                    <h2>Unlimited</h2>
                </div>
                <div className="calendar">
                    <div className="calendar-icon">
                        <CiCalendar />
                    </div>
                    <div className="times">
                        <h3>Monday - Saturday</h3>
                        <h5>18:00 / 19:00 </h5>
                    </div>
                </div>
                <div className="calendar">
                    <div className="calendar-icon">
                        <GiGymBag />
                    </div>
                    <div className="times">
                        <h3>Price includes:</h3>
                        <h5>Water, Towel, Gym equipment, Gloves</h5>
                    </div>
                </div>
                <div className="membership">
                    <div className="membership-price">
                        <h1>€ 54.99</h1>
                    </div>
                </div>
                <div className="button-container">
                    <button className="button-48" role="button"><span className="text">Get Started!</span></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Pricing