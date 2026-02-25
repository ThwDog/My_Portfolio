import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Grid.css';
import YouTubeVideo from "./YoutubeLoad.jsx"; 

const GridCard = ({ workId, status, name, img, gif, video, dis, link, youtube, itch }) => {
  const navigate = useNavigate();
  const imageSource = gif || img;
  const isGif = typeof imageSource === 'string' && /\.gif(\?|$)/i.test(imageSource);

  const handleOpenDetail = () => {
    navigate(`/MyWork/${workId}`);
  };

  const handleCardKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpenDetail();
    }
  };

  return (
    <div className="slide-Card">
      <div className="card" role="button" tabIndex={0} onClick={handleOpenDetail} onKeyDown={handleCardKeyDown}>
        <div className="card-Inside">
          <div className="card-Img">
            {video ? (
              <video autoPlay muted loop playsInline preload="metadata" className="card-video-in" >
                <source src={video} type="video/mp4" />
              </video>
            ) : 
              <img
                className="card-img-in"
                src={imageSource}
                loading={isGif ? 'eager' : 'lazy'}
                decoding="async"
                alt={name}
              />
            }
          </div>
          <div className="card-dis">
            <p className="card-Name">{name}</p>
            <p className="card-disc">{dis}</p>
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
        <GridCard key={item.name} workId={index} {...item} />
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