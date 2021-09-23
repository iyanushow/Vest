import styled from 'styled-components';

export const Container = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;
export const HeroBkg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBkg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
`;
export const Content = styled.div`
  z-index: 5;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeading = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-size: clamp(1.7rem, 1.3043rem + 2.2609vw, 3rem);
  text-align: center;
`;
export const StyledParagraph = styled.p`
  margin-top: 24px;
  color: ${(props) => props.theme.color.white};
  font-size: clamp(1.125rem, 0.9804rem + 0.8261vw, 1.6rem);
  text-align: center;
  max-width: 600px;
`;
