import { useParams } from 'react-router-dom';
import AnimeList from './AnimeList';
import { useEffect } from 'react';

const AnimeSearchList = () => {
  const { text } = useParams();

  useEffect(() => {}, [text]);
  return <AnimeList list={text} />;
};

export default AnimeSearchList;
