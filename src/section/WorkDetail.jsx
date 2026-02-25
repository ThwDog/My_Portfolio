import './WorkDetail.css';
import { Link, useParams } from 'react-router-dom';
import { data } from '../Data.jsx';
import YouTubeVideo from '../Function/YoutubeLoad.jsx';

function WorkDetail() {
  const { workId } = useParams();
  const index = Number(workId);
  const work = Number.isInteger(index) ? data[index] : undefined;

  if (!work) {
    return (
      <div className="work-detail">
        <div className="work-detail-container">
          <h1>Work not found</h1>
          <Link className="work-link" to="/MyWork">Back to My Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="work-detail">
      <div className="work-detail-container">
        <p className="work-status">{work.status}</p>
        <h1>{work.name}</h1>

        <div className="work-media">
          {work.video ? (
            <video autoPlay muted loop playsInline controls className="work-video">
              <source src={work.video} type="video/mp4" />
            </video>
          ) : work.youtube ? (
            <div className="work-youtube">
              <YouTubeVideo videoId={work.youtube} />
            </div>
          ) : (
            <img src={work.gif || work.img} alt={work.name} className="work-image" />
          )}
        </div>

        <p className="work-description">{work.dis}</p>

        <div className="work-actions">
          <Link className="work-link" to="/MyWork">Back to My Work</Link>
          {work.link ? (
            <a className="work-link" href={work.link} target="_blank" rel="noopener noreferrer">Github</a>
          ) : null}
          {work.itch ? (
            <a className="work-link" href={work.itch} target="_blank" rel="noopener noreferrer">Play / Itch</a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default WorkDetail;
