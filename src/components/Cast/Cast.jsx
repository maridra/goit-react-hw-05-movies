import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieCredits } from 'api/api';

import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  if (!cast) return;

  return (
    <ul className={css.cast_list}>
      {cast.map(({ profile_path, original_name, character }) => (
        <li className={css.item} key={original_name}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt="Actor"
              width="100px"
            />
          )}
          <p>{original_name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
