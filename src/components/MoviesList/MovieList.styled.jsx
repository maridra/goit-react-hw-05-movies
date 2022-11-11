import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &:hover,
  &:focus {
    color: green;
  }
`;
