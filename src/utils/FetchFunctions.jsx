import { animeSummary } from "./utils";

export const fetchTopAnimes = async () => {
  const response = await fetch(
    'https://api.jikan.moe/v4/anime?order_by=popularity&limit=12&sfw'
  );
  const data = await response.json();
  return data.data;
};

export const fetchAnimeById = async (id) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const data = await response.json();
  return animeSummary(data.data);
};

export const fetchAnimeBySearch = async (search) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`);
  const data = await response.json();
  return data.data;
};

