import { useEffect } from "react";
import PropTypes from "prop-types";
import { animeCard, animeTitle, animeImageContainer } from "../utils/constants";

const AnimeSingle = ({anime}) => {
 const {image_url, title, titleJP, status, rating, score } = anime;
 const genres = anime.genres.map(genre => genre.name);
  return (
    // get anime image title status rating score synopsis genres
    <div className={animeCard}>
      <div className={animeImageContainer}><img src={image_url} alt={title} /></div> 
      <h2 className={animeTitle}>{title} <span>{titleJP}</span></h2>
      <p><strong>Status: </strong>{status} / <strong>Rating:</strong> {rating} <strong>Score: </strong>{score} </p>
      <p><strong>Genres:</strong> {genres.join(', ')}</p>
    </div>
  );
};

AnimeSingle.propTypes = {
  anime: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleJP: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default AnimeSingle;
