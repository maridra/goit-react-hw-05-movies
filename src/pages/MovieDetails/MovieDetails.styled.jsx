import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CastLink = styled(NavLink)`
  color: black;

  &:hover,
  &:focus {
    color: green;
  }
`;
