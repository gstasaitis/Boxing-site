import { GiPunchingBag } from "react-icons/gi";
import { BsPersonRaisedHand } from "react-icons/bs";

const Classes = () => {
  return (
    <div className="classes">
        <div className="heading">
            <h1>Classes</h1>
        </div>
        <div className="classes-container">
            <div className="main-class">
                <div className="first-section">
                    <h5>Beginners</h5>
                    <h2>Boxing</h2>
                </div>
                <div className="second-section">
                    <p><GiPunchingBag /> Mo/Tu/Fr - 18:00 Sa - 10:00</p>
                    <p><BsPersonRaisedHand /> FirstName LastName</p>
                </div>
                <div className="third-section">
                    <h2>Boxing direct for begginers</h2>
                    <h3>Cardio / Punches / Sperring</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, soluta porro? Porro consequatur quisquam unde illo. Assumenda eos labore repellat voluptate vitae natus beatae sint.</p>

                    <h5>What will you learn?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reiciendis rem, rerum dicta nisi tempore odit alias aliquam quod quas voluptas eveniet iure ipsa culpa! Sed veniam error illo corrupti!</p>
                </div>
                    <button className="button-48" role="button"><span className="text">Get Started!</span></button>
                </div>
            <div className="secondary-classes">
                <div className="class">
                    <div className="first-section">
                        <h5>Advanced</h5>
                        <h2>Boxing</h2>
                    </div>
                    <div className="second-section">
                        <p><GiPunchingBag /> Mo/Tu/Fr - 19:00 Sa - 11:00</p>
                        <p><BsPersonRaisedHand /> FirstName LastName</p>
                    </div>
                </div>
                <div className="class">
                    <div className="first-section">
                        <h5>Advanced</h5>
                        <h2>Boxing</h2>
                    </div>
                    <div className="second-section">
                        <p><GiPunchingBag /> Mo/Tu/Fr - 19:00 Sa - 11:00</p>
                        <p><BsPersonRaisedHand /> FirstName LastName</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Classes