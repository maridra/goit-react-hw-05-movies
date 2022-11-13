import { useState, useEffect, Suspense } from 'react';
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

  const backLink = location.state?.from ?? '/movies';

  return (
    <main>
      <Link className={css.btn_back} to={backLink} state={'movieDetails'}>
        Go back
      </Link>
      <div className={css.box}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="Poster of the film"
          width="200px"
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
        <CastLink to="cast" state={{ from: backLink }}>
          Cast
        </CastLink>
        <CastLink to="reviews" state={{ from: backLink }}>
          Reviews
        </CastLink>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
}
