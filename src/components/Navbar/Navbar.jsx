import {
  Container,
  MobileIcon,
  Nav,
  NavButton,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  StyledLink,
} from './Navbar.styles';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const navItems = ['about', 'discover', 'services', 'contact-us'];
  return (
    <Nav>
      <Container>
        <NavLogo to='/'>Vest</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink to={item}>{item}</NavLink>
            </NavItem>
          ))}
        </NavMenu>
        <NavButton>
          <StyledLink to='/signin'>Sign In</StyledLink>
        </NavButton>
      </Container>
    </Nav>
  );
};

export default Navbar;
