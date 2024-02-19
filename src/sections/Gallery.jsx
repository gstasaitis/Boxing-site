import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Gallery = () => {

    const properties = {
        prevArrow: <button className='arrowbtn'><IoIosArrowBack /></button>,
        nextArrow: <button className='arrowbtn'><IoIosArrowForward /></button>
    }

    const images = [
        "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1612090295965-e506249ccecc?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1575747515871-2e323827539e?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <div className='gallery'>
            <div className="heading">
                <h1>Gallery</h1>
            </div>
            <div className="slideshow">
        <Slide {...properties}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Coach</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Gym 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Gym 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span>Our Training</span>
                </div>
            </div>
        </Slide>
        <div className="gallery-button">
            <button className="button-48" role="button"><span className="text">Gallery</span></button>
        </div>
            </div>
        </div>
    )
}

export default Gallery;
