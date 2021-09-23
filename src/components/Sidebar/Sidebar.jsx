import {
  Container,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  BtnWrapper,
  NavLink,
  StyledLink,
} from './Sidebar.styles';
const Sidebar = ({ navItems, toggleNav, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggleNav}>
        <CloseIcon />
      </Icon>
      <Wrapper>
        <Menu>
          {navItems.map((item, index) => (
            <NavLink key={index} to={item}>
              {item}
            </NavLink>
          ))}
        </Menu>
        <BtnWrapper>
          <StyledLink to='/signup'>Sign Up</StyledLink>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
