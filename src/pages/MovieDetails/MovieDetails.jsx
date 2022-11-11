import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from 'api/api';

import css from './MovieDetails.module.css';
import { CastLink } from './MovieDetails.styled';

export default function MovieDetails() {
  const [details, setDetails] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      if (!data) return;
      setDetails(data);
    });
  }, [movieId]);

  if (!details) return;

  const { title, overview, poster_path, genres } = details;
  const userScore = Math.round(details.vote_average * 10);

  return (
    <main>
      <div className={css.box}>
        <Link to={location.state.from}>Go back</Link>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="Poster of the film"
          width="200px"
          // height="500px"
        />
        <div className={css.about}>
          <h2>{title}</h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul className={css.genres}>
            {genres.map((it, index) => (
              <li key={index}>{it.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={css.info}>
        <h4>Additional information</h4>
        <CastLink to="cast">Cast</CastLink>
        <CastLink to="reviews">Reviews</CastLink>
      </div>
      <Outlet />
    </main>
  );
}
