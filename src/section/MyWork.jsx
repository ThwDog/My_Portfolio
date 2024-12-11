import { LightMode } from '@chakra-ui/react';
import './MyWork.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from '../Data.jsx'

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

var settings = {
    // centerPadding: "100px",
    centerMode: false,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 4,
    focusOnSelect: true,
    speed: 100,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

function MyWork(){
    return(
        <>
        <section class="mywork">
            {/* <h1 className='Header-MyWork'>MY WORK</h1> */}
            <br/>
            <div className='slide-Card'>
                <div className='card'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='card-Inside'>
                            <div className='card-Img'>
                                <div className='card-status'>
                                {/* <h1>status : {d.status}</h1> */}
                                    {d.youtube ? <iframe className='card-img-in-youtube' src={d.youtube} title="YouTube video player" 
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                                    : 
                                    <img className='card-img-in' src={d.img} />}
                                    
                                </div>
                            </div>

                            <div className='card-dis'>
                                <p className='card-Name'><h1>{d.name}</h1></p>
                                <p className='card-disc'>{d.dis}</p>
                                <a href={d.link}  target="_blank" >
                                    <button className='card-button'>GIT</button>
                                </a>
                                <a href={d.itch}  target="_blank" >
                                    {d.itch ? <button className='card-button'>ITCH.IO</button> : null}
                                </a>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        <br/>
        </section>
        </>
    );
}

export default MyWork;