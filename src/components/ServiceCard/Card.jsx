import { Details, Heading, Icon, ServicesCard } from './Card.styles';

const Card = ({ icon, heading, details }) => {
  return (
    <ServicesCard>
      <Icon src={icon}></Icon>
      <Heading>{heading}</Heading>
      <Details>{details}</Details>
    </ServicesCard>
  );
};

export default Card;
