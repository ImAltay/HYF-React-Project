import { useNavigate } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <nav className="nav-bar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/anime">Anime</a></li>
                <li><a href="/manga">My List</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        </header>
    )
    }
export default Header;