import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
  background: ${(props) => (props.scroll ? '#000' : 'tranparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(RLink)`
  color: #fff;
  cursor: pointer;
  justify-self: flex-start;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  text-transform: capitalize;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;

  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 4px solid ${(props) => props.theme.color.defaultMain};
  }
  &:hover {
    color: ${(props) => props.theme.color.defaultMain};
  }
`;
export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(RLink)`
  border-radius: 50px;
  background: ${(props) => props.theme.color.defaultMain};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${(props) => props.theme.color.defaultBlack};
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.defaultBlack};
  }
`;
