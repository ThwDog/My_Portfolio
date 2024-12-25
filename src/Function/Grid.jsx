import React, { useMemo, useRef } from 'react';
import './Grid.css';
import YouTubeVideo from "./YoutubeLoad.jsx"; 

const GridCard = ({ status, name, img, video, dis, link, youtube, itch }) => {
  return (
    <div className="slide-Card">
      <div className="card">
        <div className="card-Inside">
          <div className="card-Img">
            {video ? (
              <video autoPlay loop className="card-video-in" >
                <source src={video} type="video/mp4" />
              </video>
            ) : youtube ? (
              <div className="card-img-in-youtube">
                <YouTubeVideo videoId={youtube} />
              </div>
            ) : (
              <img className="card-img-in" src={img} loading="lazy" />
            )}
          </div>
          <div className="card-dis">
            <p className="card-Name">{name}</p>
            <p className="card-disc">{dis}</p>
            <div className="card-button">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <button className="card-buttons">GIT</button>
              </a>
              {itch ? (
                <a href={itch} target="_blank" rel="noopener noreferrer">
                  <button className="card-buttons">ITCH.IO</button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Grid = ({ data }) => {
  const gridItems = React.useMemo(() => {
    return data.map((item, index) => (
      <div key={index} className="grid-column">
        <GridCard key={item.name} {...item} />
      </div>
    ));
  }, [data]);

  return (
    <div className="grid-container">
      {gridItems}
    </div>
  );
};

export default Grid;