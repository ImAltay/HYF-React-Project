import { useNavigate } from 'react-router-dom';
import { NAV_BAR } from '../utils/constants';
import SearchBar from './SearchBar';

const Header = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleWatchlistClick = () => {
    navigate('/watchlist');
  };
  return (
    <header>
      <nav className={NAV_BAR}>
      <SearchBar />
        <ul>
          <li>
            <a onClick={() => handleHomeClick()}>Home</a>
          </li>
          <li>
            <a onClick={() => handleWatchlistClick()}>Watch List</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
