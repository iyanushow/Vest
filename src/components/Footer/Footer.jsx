import {
  Container,
  Copyright,
  LinkContainer,
  LinkItem,
  LinkWrapper,
  Logo,
  Socials,
  SocialsWrapper,
  StyledLink,
  Title,
  Wrapper,
} from './Footer.styles';

const Footer = ({ toggleTop }) => {
  return (
    <Container>
      <Wrapper>
        <LinkContainer>
          <LinkWrapper>
            <LinkItem>
              <Title>About Us</Title>
              <StyledLink to='/signup'>How it works </StyledLink>
              <StyledLink to='/signup'>Testimonials </StyledLink>
              <StyledLink to='/signup'>Careers </StyledLink>
              <StyledLink to='/signup'>Terms of Service </StyledLink>
            </LinkItem>

            <LinkItem>
              <Title>Contact Us</Title>
              <StyledLink to='/signup'>Contact </StyledLink>
              <StyledLink to='/signup'>Support </StyledLink>
              <StyledLink to='/signup'>Destinations </StyledLink>
              <StyledLink to='/signup'>Sponsorships </StyledLink>
            </LinkItem>
          </LinkWrapper>
          <LinkWrapper>
            <LinkItem>
              <Title>Videos</Title>
              <StyledLink to='/signup'>Submit Video </StyledLink>
              <StyledLink to='/signup'>Ambassadors </StyledLink>
              <StyledLink to='/signup'>Agency </StyledLink>
              <StyledLink to='/signup'>Influencer </StyledLink>
            </LinkItem>

            <LinkItem>
              <Title>Social Media</Title>
              <StyledLink to='/signup'>Instagram </StyledLink>
              <StyledLink to='/signup'>Facebook </StyledLink>
              <StyledLink to='/signup'>Youtube </StyledLink>
              <StyledLink to='/signup'>Twitter </StyledLink>
            </LinkItem>
          </LinkWrapper>
        </LinkContainer>
        <Socials>
          <SocialsWrapper>
            <Logo onClick={toggleTop}>Vest</Logo>
            <Copyright>Vest &copy; Shady-dev 2021</Copyright>
          </SocialsWrapper>
        </Socials>
      </Wrapper>
    </Container>
  );
};

export default Footer;
