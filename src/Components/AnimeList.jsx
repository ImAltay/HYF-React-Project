import { useEffect, useState } from 'react';
import { fetchTopAnimes } from '../utils/FetchFunctions';
import { animeSummary } from '../utils/utils';
import AnimeSingle from './AnimeSingle';
import { animeListShowcase, animeListContainer } from '../utils/constants';

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const data = await fetchTopAnimes();
      const summarizedAnimes = data.map(animeSummary);
      setAnimes(summarizedAnimes);
    };

    fetchAnimes();
  }, []);
  return (
    <div className={animeListShowcase}>
      <h1>AnimeList</h1>
      <div className={animeListContainer}>
      {animes.length > 0 ? (
        animes.map((anime, index) => <AnimeSingle key={index} anime={anime} />)
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
};

export default AnimeList;
