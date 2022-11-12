import { createContext, useRef } from 'react';

const initContext = {
  movies: [],
};

export const MovieContext = createContext(initContext);

export default function MoviesWrapperCtx({ children }) {
  const movies = useRef(initContext.movies);

  const providerValue = { movies };

  return (
    <MovieContext.Provider value={providerValue}>
      {children}
    </MovieContext.Provider>
  );
}
