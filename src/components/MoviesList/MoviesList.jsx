import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, StyledLink } from './MovieList.styled';

export default function MoviesList({ data }) {
  const location = useLocation();

  return (
    <Box>
      {data.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </Box>
  );
}
