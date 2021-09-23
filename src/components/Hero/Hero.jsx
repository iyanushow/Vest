import CtaButton from '../CtaButton';
import {
  Container,
  Content,
  HeroBkg,
  StyledHeading,
  StyledParagraph,
  VideoBkg,
} from './Hero.styles';

const Hero = () => {
  return (
    <Container id='home'>
      <HeroBkg>
        <VideoBkg loop autoPlay='autoplay' muted src='video/video.mp4' type='video/mp4' />
      </HeroBkg>
      <Content>
        <StyledHeading>Invest your way to comfort</StyledHeading>
        <StyledParagraph>
          Join us and begin crafting your path to financial freedom. Get $50 investment credit on
          sign up
        </StyledParagraph>
        <CtaButton label='get started' type='router' route='/signup' primary={1} dark={1} />
      </Content>
    </Container>
  );
};

export default Hero;
