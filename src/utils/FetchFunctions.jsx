export const fetchTopAnimes = async () => {
  const response = await fetch(
    'https://api.jikan.moe/v4/anime?order_by=popularity&limit=10'
  );
  const data = await response.json();
  return data.data;
};

export const fetchAnime = async (id) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime${id}`);
  const data = await response.json();
  return data;
};

export const fetchAnimeBySearch = async (search) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`);
  const data = await response.json();
  return data.data;
};

