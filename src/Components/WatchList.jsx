import AnimeList from './AnimeList';
import { WATCHLIST } from '../utils/constants';
const WatchList = () => {
  return <AnimeList list={WATCHLIST} />;
};

export default WatchList;
