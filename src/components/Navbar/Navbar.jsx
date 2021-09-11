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
import { Fragment, useState } from 'react';
import Sidebar from '../Sidebar';

const Navbar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    console.log('clicked');
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <Fragment>
      <Nav>
        <Container>
          <NavLogo to='/'>Vest</NavLogo>
          <MobileIcon onClick={toggleNav}>
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
            <StyledLink to='/signup'>Sign Up</StyledLink>
          </NavButton>
        </Container>
      </Nav>
      <Sidebar navItems={navItems} isOpen={isOpen} toggleNav={toggleNav} />
    </Fragment>
  );
};

export default Navbar;
