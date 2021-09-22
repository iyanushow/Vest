import { Fragment } from 'react';
import CtaButton from '../CtaButton';
import {
  Container,
  Img,
  ImgWrapper,
  BtnWrapper,
  Heading,
  Row,
  Wrapper,
  ColumnUno,
  ColumnDuo,
  TextWrapper,
  Line,
  Details,
} from './Info.styles';

const Info = ({ data }) => {
  return (
    <Fragment>
      {data &&
        data.map((section, i) => {
          const { id, topline, description, headline, btnLabel, btnRoute, img, imgAlt } = section;
          return (
            <Container key={id} id={id} lightBkg={!(i % 2 === 0)}>
              <Wrapper>
                <Row imgStart={!i % 2 === 0}>
                  <ColumnUno>
                    <TextWrapper>
                      <Line>{topline}</Line>
                      <Heading lightText={i % 2 === 0}>{headline}</Heading>
                      <Details darkText={!(i % 2 === 0)}>{description}</Details>
                      <BtnWrapper>
                        <CtaButton
                          label={btnLabel}
                          route={btnRoute}
                          primary={i % 2 === 0 ? 1 : 0}
                          dark={i % 2 === 0 ? 1 : 0}
                        />
                      </BtnWrapper>
                    </TextWrapper>
                  </ColumnUno>
                  <ColumnDuo>
                    <ImgWrapper>
                      <Img src={img} alt={imgAlt} />
                    </ImgWrapper>
                  </ColumnDuo>
                </Row>
              </Wrapper>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default Info;
