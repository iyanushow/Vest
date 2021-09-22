import { useState } from 'react';
import { Button, ForwardArrow, HeroCtaWrapper, RightArrow, RouterBtn } from './CtaButton.styles';

const CtaButton = ({ route, label, primary, big, dark, type }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  if (type === 'router') {
    console.log(route);
    return (
      <HeroCtaWrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
        <RouterBtn to={route} primary={primary} dark={dark}>
          {label}
          {hover ? <ForwardArrow /> : <RightArrow />}
        </RouterBtn>
      </HeroCtaWrapper>
    );
  }
  return (
    <HeroCtaWrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Button
        to={route}
        primary={primary}
        dark={dark}
        smooth={true}
        spy={true}
        exact='true'
        offset={-80}
      >
        {label}
        {hover ? <ForwardArrow /> : <RightArrow />}
      </Button>
    </HeroCtaWrapper>
  );
};

export default CtaButton;
