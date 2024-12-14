import { LightMode } from '@chakra-ui/react';
import './MyWork.css';
import Slider from "react-slick";
import { data } from '../Data.jsx'
import YouTubeVideo  from "/src/Function/YoutubeLoad.jsx";
import Grid from '/src/Function/Grid.jsx';

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
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 4,
    focusOnSelect: false,
    speed: 100,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

function MyWork(){
    return(
        <>
        <div class="mywork">
            {/* <h1 className='Header-MyWork'>
                Swap to see more work
            </h1> */}
            <div className="cardGrid">
                <Grid data={data} />
            </div>
        </div>
        </>
    );
}

export default MyWork;