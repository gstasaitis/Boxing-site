import { GiBoxingGlove } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Team = () => {
  return (
    <div className="team">
        <div className="heading">
            <h1>Team</h1>
        </div>
        <div className="coach">
            <div className="main-coach">
                <div>
                    <h5>Boxing Trainer</h5>
                    <h2><GiBoxingGlove /> Firstname Lastname</h2>
                </div>

                <div>
                <h6>Key Information</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sed minus necessitatibus nostrum reiciendis provident molestiae quisquam dolores, dolorum blanditiis enim possimus facilis, iusto pariatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dignissimos facilis. Aut autem, aspernatur laboriosam, quisquam nesciunt nisi illo libero illum obcaecati numquam at vitae inventore. Maxime, reiciendis? Omnis, mollitia! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, eveniet architecto. Quasi magni iure quae adipisci voluptatibus minus vero harum ullam cumque doloremque quo, omnis, culpa modi doloribus nihil vitae.
                    <br />
                    <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ratione quisquam asperiores odio quae dicta ullam veritatis labore adipisci fuga nemo earum dolorum enim doloremque, officia accusamus consequatur magnam facere.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, recusandae voluptatem rem culpa minima nesciunt sed architecto aspernatur atque delectus aliquid eos, itaque totam aut adipisci? Quos amet natus molestiae.
                </p>
                </div>
                
                <div className="socials">
                <h6>Name Lastname Socials</h6>
                    <FaInstagram />
                    <FaFacebookSquare />
                    <BsTwitterX />
                </div>
                    <button className="button-48" role="button"><span className="text">Contact trainer</span></button>
            </div>
                <div className="trainer-profile">
                    <img src="src\images\trainer2.png" alt="trainer" srcSet="" />
                </div>
        </div>
    </div>
  )
}

export default Team