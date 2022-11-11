import { useState, useEffect } from 'react';

import { MovieList } from 'components';
import { getTrendingMovies } from 'api/api';

import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <MovieList data={movies} />
    </>
  );
}
