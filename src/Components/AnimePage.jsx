import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { fetchAnimeById } from '../utils/FetchFunctions';
import { ANIME_PAGE_CONTAINER } from '../utils/constants';

const AnimePage = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

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
                <div className={ANIME_PAGE_CONTAINER}>
                    <h1>{anime.title} / {anime.titleJP}</h1>
                    <img src={anime.image_url} alt={anime.title} />
                    <p><strong>Synopsis:</strong>{anime.synopsis}</p>
                    <p><strong>Genres: </strong>{anime.genres.map(genre => genre.name).join(', ')}</p>
                    <p><strong>Status:</strong>{anime.status}</p>
                    <p><strong>Rating:</strong>{anime.rating}</p>
                    <p><strong>Score: </strong>{anime.score}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default AnimePage;