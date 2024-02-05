import featured from "../../assets/featured.png";
import closeimg from "../../assets/closeimg.png";



function VideoCard({ movie = {} }) {

  
      return (
    <div className="video-card">
       
 
<div className="video-information">
 <h3> {movie.name}</h3>
<h2>  ${movie.pricing}/month</h2>
<div className="card-details"> {movie.features.isavailable && <img className="featured-image" src={featured} />} <h6>{movie.features.desc1}</h6> </div>  
<div className="card-details">{movie.featured && <img className="featured-image" src={featured} />} <h6>{movie.features.desc2}</h6></div>
<div className="card-details">{movie.featured && <img className="featured-image" src={featured} />} <h6>{movie.features.desc3}</h6></div>
<div className="card-details">{movie.featured && <img className="featured-image" src={featured} />} <h6>{movie.features.desc4}</h6></div>
<div className="card-details">{movie.featured && <img className="featured-image" src={featured} />} <h6>{movie.features.desc5}</h6></div>
<div className="card-details">{movie.featured && <img className="featured-image" src={featured} />} <h6>{movie.features.desc6}</h6></div>
<div className="card-details">{movie.featured && <img className="featured-image" src={featured} />} <h6>{movie.features.desc7}</h6></div>
<div className="card-details">{movie.featured && <img className="featured-image" src={featured} />} <h6>{movie.features.desc8}</h6></div>
<button>Button</button>
      </div>
    </div>
  );
}

export default VideoCard;
