import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-scroll';
import { Link as RLink } from 'react-router-dom';

export const HeroCtaWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ForwardArrow = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const RightArrow = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const Button = styled(Link)`
  border-radius: 50px;
  text-transform: capitalize;
  background: ${(props) =>
    props.primary ? props.theme.color.defaultMain : props.theme.color.defaultBlack};
  white-space: nowrap;
  padding: ${(props) => (props.big ? '14px 48px' : '12px 30px')};
  color: ${(props) => (props.dark ? props.theme.color.defaultBlack : props.theme.color.white)};
  font-size: ${(props) => (props.bigFont ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${(props) =>
      props.primary ? props.theme.color.white : props.theme.color.defaultMain};
  }
`;

export const RouterBtn = styled(RLink)`
  border-radius: 50px;
  text-transform: capitalize;
  background: ${(props) =>
    props.primary ? props.theme.color.defaultMain : props.theme.color.defaultBlack};
  white-space: nowrap;
  padding: ${(props) => (props.big ? '14px 48px' : '12px 30px')};
  color: ${(props) => (props.dark ? props.theme.color.defaultBlack : props.theme.color.white)};
  font-size: ${(props) => (props.bigFont ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${(props) =>
      props.primary ? props.theme.color.white : props.theme.color.defaultMain};
  }
`;
