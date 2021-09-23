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
import { Fragment, useEffect, useState } from 'react';
import Sidebar from '../Sidebar';

const Navbar = ({ navItems, toggleTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleNav = () => {
    console.log('clicked');
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <Nav scroll={scroll}>
        <Container>
          <NavLogo to='/' onClick={toggleTop}>
            Vest
          </NavLogo>
          <MobileIcon onClick={toggleNav}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                <NavLink
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  {item}
                </NavLink>
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
