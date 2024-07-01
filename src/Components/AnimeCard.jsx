import PropTypes from 'prop-types';
import {
  ANIME_CARD,
  ANIME_TITLE,
  ANIME_CARD_IMAGE,
  BUTTON_MAKER,
  WATCHLIST_ICON,
} from '../utils/constants';
import { toggleWatchListImage } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import { useWatchList } from '../utils/hooks.jsx';

const AnimeCard = ({ anime }) => {
  const { id, image_url, title, titleJP, status, rating, score } = anime;
  const genres = anime.genres.map((genre) => genre.name);

  const navigate = useNavigate();

  const toggleWatchList = useWatchList().toggleWatchList;
  const watchList = useWatchList().watchList;

  const HandleAnimeClick = (id) => {
    navigate(`/anime/${id}`);
  };
  return (
    <div className={ANIME_CARD}>
      <img
        className={`${BUTTON_MAKER} ${ANIME_CARD_IMAGE}`}
        src={image_url}
        alt={title}
        onClick={() => {
          HandleAnimeClick(id);
        }}
      />

      <h2
        onClick={() => {
          HandleAnimeClick(id);
        }}
        className={`${ANIME_TITLE} ${BUTTON_MAKER}`}>
        {title} <span>{titleJP}</span>
      </h2>
      <img
        src={toggleWatchListImage(watchList, id)}
        className={WATCHLIST_ICON}
        onClick={() => {
          toggleWatchList(id);
        }}
      />
      <p>
        <strong>Status: </strong>
        {status} / <strong>Rating:</strong> {rating} <strong>Score: </strong>
        {score}
      </p>
      <p>
        <strong>Genres:</strong> {genres.join(', ')}
      </p>
    </div>
  );
};

AnimeCard.propTypes = {
  anime: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string,
    title: PropTypes.string,
    titleJP: PropTypes.string,
    status: PropTypes.string,
    rating: PropTypes.string,
    score: PropTypes.number,
    synopsis: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default AnimeCard;
