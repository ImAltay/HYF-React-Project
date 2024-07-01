import { useEffect, useState } from 'react';
import {
  fetchTopAnimes,
  fetchAnimeBySearch,
  fetchAnimeById,
} from '../utils/FetchFunctions';
import { animeSummary } from '../utils/utils';
import AnimeCard from './AnimeCard';
import {
  ANIME_LIST_SHOWCASE,
  ANIME_LIST_CONTAINER,
  TOP_ANIMES,
  SEARCH_RESULTS,
  WATCHLIST,
} from '../utils/constants';
import { useWatchList } from '../utils/hooks';
import PropTypes from 'prop-types';

const AnimeList = ({ list }) => {
  const [animes, setAnimes] = useState([]);
  const { watchList } = useWatchList();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('Top Animes');

  useEffect(() => {
    const fetchAnimes = async () => {
      let data;
      setIsLoading(true);
      setError(null);
      try {
        if (list === WATCHLIST) {
          data = await Promise.all(watchList.map((id) => fetchAnimeById(id)));
          setAnimes(data);
          setTitle(WATCHLIST);
        } else if (list === TOP_ANIMES) {
          data = await fetchTopAnimes();
          setAnimes(data.map(animeSummary));
          setTitle(TOP_ANIMES);
        } else {
          data = await fetchAnimeBySearch(list);
          setAnimes(data.map(animeSummary));
          setTitle(SEARCH_RESULTS);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimes();
  }, [list, watchList]);

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={ANIME_LIST_SHOWCASE}>
      <h1> {title} </h1>
      <div className={ANIME_LIST_CONTAINER}>
        {animes.length > 0 ? (
          animes.map((anime, index) => (
            <AnimeCard key={index} anime={anime} onClick />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

AnimeList.propTypes = {
  list: PropTypes.string.isRequired,
};

export default AnimeList;
