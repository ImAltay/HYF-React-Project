import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { fetchAnimeById } from '../utils/FetchFunctions';

const AnimePage = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);
    const navigate = useNavigate();

    const fetchAnime = useCallback(async () => {
        const data = await fetchAnimeById(id);
        setAnime(data);
        console.log(data)
    }, [id]);

    useEffect(() => {
        fetchAnime();
    }, [fetchAnime]);

    return (
        <div>
            {anime ? (
                <div>
                    <h1>{anime.title}</h1>
                    <img src={anime.image_url} alt={anime.title} />
                    <p>{anime.synopsis}</p>
                    <p>{anime.genres.map(genre => genre.name).join(', ')}</p>
                    <p>{anime.status}</p>
                    <p>{anime.rating}</p>
                    <p>{anime.score}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default AnimePage;