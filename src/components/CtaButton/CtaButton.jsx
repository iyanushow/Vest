import { useState } from 'react';
import { Button, ForwardArrow, HeroCtaWrapper, RightArrow } from './CtaButton.styles';

const CtaButton = ({ route, label, primary, big, dark }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };
  return (
    <HeroCtaWrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <Button to={route} primary={primary} dark={dark}>
        {label}
        {hover ? <ForwardArrow /> : <RightArrow />}
      </Button>
    </HeroCtaWrapper>
  );
};

export default CtaButton;
