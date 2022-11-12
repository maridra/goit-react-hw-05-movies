import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, StyledLink } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
