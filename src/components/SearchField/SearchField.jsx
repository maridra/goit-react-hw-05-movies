import { useState } from 'react';

import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from './SearchField.module.css';

export default function SearchField({ getQuery }) {
  const [query, setQuery] = useState('');

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

    getQuery(query);
    setQuery('');
  };

  return (
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
  );
}

SearchField.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
