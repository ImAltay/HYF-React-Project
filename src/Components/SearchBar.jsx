import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const input = document.querySelector('input[type="text"]');
        const text = input.value;
        input.value = '';
        input.placeholder = 'Search for anime';
        if (text.trim() === '') return;
        navigate(`/search/${text}`);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Search for anime" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;