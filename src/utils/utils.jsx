// take the anime object and return a new object with the properties that we need
export const animeSummary = (anime) => {
  
    return {
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
  