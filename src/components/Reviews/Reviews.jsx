import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieRewievs } from 'api/api';

import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieRewievs(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
      {reviews && (
        <ul className={css.reviews_list}>
          {reviews.map(({ author, content }) => (
            <li className={css.item} key={author}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
