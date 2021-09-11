import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.color.white};
  background: ${(props) => (props.lightBkg ? '#f9f9f9' : '#010606')};
  padding: 100px 0;
  @media (min-width: 768px) {
    padding: 0;
  }
`;
export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  /* flex-wrap: wrap; */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColumnUno = styled.div`
  order: ${(props) => (props.imgStart ? 2 : 1)};
`;
export const ColumnDuo = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  order: ${(props) => (props.imgStart ? 1 : 2)};
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding: 0 0 60px;
`;
export const Line = styled.p`
  color: ${(props) => props.theme.color.defaultMain};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: clamp(2rem, 1.6957rem + 1.7391vw, 3rem);

  line-height: 1.1;
  font-weight: 600;
  color: ${(props) => (props.lightText ? '#f7f8fa' : props.theme.color.defaultBlack)};
`;

export const Details = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => (props.darkText ? props.theme.color.defaultBlack : props.theme.color.white)};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
