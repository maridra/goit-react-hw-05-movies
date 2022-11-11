import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { MovieList } from 'components';
import { searchMovies } from 'api/api';

import css from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = e => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notify.failure('Please, fill in the request field');
      return;
    }

    searchMovies(query).then(({ results }) => setMovies(results));
    // setSearchParams(query !== '' ? { query: query } : {});

    setQuery('');
  };

  // const changeUrl = value => {
  //   setSearchParams(value !== '' ? { query: value } : {});
  //   console.log(1);
  // };

  // changeUrl(query);

  // setSearchParams(query !== '' ? { query: query } : {});

  return (
    <>
      <form className={css.searchbar} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          placeholder="Search movie"
          autoComplete="off"
          value={query}
          onChange={handleInputChange}
        />
        <button className={css.search_btn} type="submit">
          <BiSearchAlt className={css.icon} />
        </button>
      </form>
      {movies && <MovieList data={movies} />}
    </>
  );
}
