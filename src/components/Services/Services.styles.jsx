import styled from 'styled-components';

export const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.color.defaultBlack};

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 16px;
  padding: 0 50px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: ${(props) => props.theme.color.white};
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
