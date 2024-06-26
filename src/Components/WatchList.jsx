import { useState } from 'react'; // Import useState
import AnimeList from './AnimeList';
import { WATCHLIST } from '../utils/constants';

const WatchList = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshList = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <button onClick={refreshList}>REFRESH</button>
      <AnimeList key={refreshKey} list={WATCHLIST} />
    </>
  );
};

export default WatchList;
