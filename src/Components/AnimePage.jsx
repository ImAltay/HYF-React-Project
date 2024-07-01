import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { fetchAnimeById } from '../utils/FetchFunctions';
import { ANIME_PAGE_CONTAINER } from '../utils/constants';
import { useWatchList } from '../utils/hooks';
import { toggleWatchListImage } from '../utils/utils';

const AnimePage = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    const toggleWatchList = useWatchList().toggleWatchList;
    const watchList = useWatchList().watchList;

    const fetchAnime = useCallback(async () => {
        const data = await fetchAnimeById(id);
        setAnime(data);
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
                    <img
        src={toggleWatchListImage(watchList, anime.id)}
        className='watchlist-icon'
        onClick={() => {
          toggleWatchList(anime.id);
        }}
      />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default AnimePage;