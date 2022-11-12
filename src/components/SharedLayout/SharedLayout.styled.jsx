import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  padding: 8px 15px;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.3);
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: black;

  &.active {
    color: green;
    border-radius: 5px;
    box-shadow: 3px 3px 8px 2px rgba(0, 0, 0, 0.3);
  }
`;
