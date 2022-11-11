const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '556d59275e7e814a4dccfe2b8480ba60';
const TRENDING_MOVIES = 'trending/movie/day';
const SEARCH_MOVIES = 'search/movie';
const MOVIE_DETAILS = 'movie/';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
});

export const getTrendingMovies = () => {
  return fetch(`${BASE_URL}${TRENDING_MOVIES}?${searchParams}`).then(res =>
    res.json()
  );
};

export const searchMovies = query => {
  const searchMoviesParams = new URLSearchParams({
    api_key: API_KEY,
    query,
  });

  return fetch(`${BASE_URL}${SEARCH_MOVIES}?${searchMoviesParams}`).then(res =>
    res.json()
  );
};

export const getMovieDetails = id => {
  return fetch(`${BASE_URL}${MOVIE_DETAILS}${id}?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(
          new Error('There are no details about this movie')
        );
      }
      return res.json();
    })
    .catch(e => console.log(e.message));
};

export const getMovieCredits = id => {
  return fetch(`${BASE_URL}${MOVIE_DETAILS}${id}/credits?${searchParams}`).then(
    res => res.json()
  );
};

export const getMovieRewievs = id => {
  return fetch(`${BASE_URL}${MOVIE_DETAILS}${id}/reviews?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(
          new Error(`We don't have any reviews for this movie`)
        );
      }
      return res.json();
    })
    .catch(e => console.log(e.message));
};
