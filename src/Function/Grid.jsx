import React from 'react';
import './Grid.css'; // Import your CSS file
import YouTubeVideo  from "./YoutubeLoad.jsx";

const GridCard = ({ status, name, img, dis, link, youtube, itch }) => {
  return (
    <div className="slide-Card">
      <div className="card">
        <div className="card-Inside">
          <div className="card-Img">
            {youtube ? (
              <div className="card-img-in-youtube">
                <YouTubeVideo videoId={youtube}/>
              </div>
            ) : (
              <img className="card-img-in" src={img} loading="lazy" />
            )}
            {/* <div className="card-status">{status}</div> */}
          </div>
          <div className="card-dis">
            <p className="card-Name">{name}</p>
            <p className="card-disc">{dis}</p>
            <div className="card-button">
                <a href={link} target="_blank" >
                    <button className='card-buttons'>GIT</button>
                </a>
                <a href={itch} target="_blank" >
                    {itch ? <button className='card-buttons'>ITCH.IO</button> : null}
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Grid = ({ data }) => {
  return (
    <div className="grid-container">
      {data.map((item, index) => (
        <div key={index} className="grid-column">
          <GridCard key={item.name} {...item} />
        </div>
      ))}
    </div>
  );
};

export default Grid;