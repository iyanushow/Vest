import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Container = styled.div`
  background: #101522;
`;

export const Wrapper = styled.div`
  padding: 48px 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const LinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    padding: 10px;
    margin: 0;
    width: 100%;
  }
`;
export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0%.5rem;
  font-size: 14px;
  transition: 0.3s ease-out;
  line-height: 2.5;

  &:hover {
    color: ${(props) => props.theme.color.defaultMain};
  }
`;

export const Title = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const Socials = styled.section``;
export const SocialsWrapper = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
export const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
export const Copyright = styled.small`
  color: #fff;
  margin-bottom: 10px;
`;
