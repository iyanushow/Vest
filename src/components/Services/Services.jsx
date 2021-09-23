import Card from '../ServiceCard';
import { Container, Heading, Wrapper } from './Services.styles';

const Services = ({ services }) => {
  return (
    <Container id='services'>
      <Heading>Our Services</Heading>
      <Wrapper>
        {services.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Services;
