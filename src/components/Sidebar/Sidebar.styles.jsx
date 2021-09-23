import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const Container = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;

  opacity: ${(props) => (props.isOpen ? '100%' : '0')};
  top: ${(props) => (props.isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Wrapper = styled.div`
  color: ${(props) => props.theme.color.white};
`;
export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;

  @media (min-width: 520px) {
    grid-template-rows: repeat(6, 80px);
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  text-transform: capitalize;
  color: ${(props) => props.theme.color.white};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.defaultMain};
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledLink = styled(RLink)`
  border-radius: 50px;
  background: ${(props) => props.theme.color.defaultMain};
  white-space: nowrap;
  padding: 16px 64px;
  color: ${(props) => props.theme.color.defaultBlack};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.defaultBlack};
  }
`;
