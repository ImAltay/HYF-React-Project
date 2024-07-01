import React, { useState } from 'react'; // Import useState
import AnimeList from './AnimeList';
import { WATCHLIST } from '../utils/constants';

const WatchList = () => {
  // State to trigger rerender
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to update the state, causing rerender
  const refreshList = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <>
      <button onClick={refreshList}>REFRESH</button>
      {/* Use the refreshKey as a key prop to force rerender */}
      <AnimeList key={refreshKey} list={WATCHLIST} />;
    </>
  );
};

export default WatchList;