import addWatchlist from "../assets/add-watchlist.svg";
import removeWatchlist from "../assets/remove-watchlist.svg";

// take the anime object and return a new object with the properties that we need
export const animeSummary = (anime) => {
  
    return {
      id: anime.mal_id,
      image_url: anime.images.jpg.image_url,
      title: anime.title_english,
      titleJP: anime.title_japanese,
      status: anime.status,
      rating: anime.rating,
      score: anime.score,
      synopsis: anime.synopsis,
      genres: anime.genres,
    };
  };
  
// Color the favorites 
export const toggleWatchListImage = (watchlist, animeID) => {
    if (watchlist.includes(animeID)) {
      return removeWatchlist;
    } else {
      return addWatchlist;
    }
  };
