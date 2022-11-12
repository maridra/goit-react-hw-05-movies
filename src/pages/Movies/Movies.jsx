import { useState, useEffect, useContext } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { MovieList, SearchField } from 'components';
import { searchMovies } from 'api/api';
import { MovieContext } from 'context/MoviesCtx';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { movies: moviesCtx } = useContext(MovieContext);
  const location = useLocation();

  const getData = queryData => {
    setQuery(queryData);
    setSearchParams(queryData !== '' ? { query: queryData } : {});
  };

  const queryParam = searchParams.get('query');

  useEffect(() => {
    if (!queryParam) return;
    setQuery(queryParam);
  }, [queryParam]);

  useEffect(() => {
    if (query === '') return;

    searchMovies(query)
      .then(({ results }) => {
        if (results.length === 0) {
          return Promise.reject(
            new Error(`There are no movies named ${query}.`)
          );
        }

        moviesCtx.current = results;
        setMovies(moviesCtx.current);
      })
      .catch(e => Notify.failure(e.message));
  }, [location, moviesCtx, query, queryParam]);

  return (
    <>
      <SearchField getQuery={getData} />
      {movies && <MovieList data={movies} />}
    </>
  );
}
