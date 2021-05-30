import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import tw from 'twin.macro';

import Logo from '../Logo';
import MenuToggle from './MenuToggle';
import Navigation from './MobileNavigation';
import useScrollDirection from '../../../hooks/useScrollDirection';

/**
 * * Mobile Navbar Styling
 */
const Nav = styled.nav`
  ${tw`container flex md:hidden justify-between items-center`}
`;

const Div = styled.div`
  ${tw`relative h-5 w-5`}
`;

const sidebarOpen = css`
  clip-path: circle(1200px);
`;

const sidebarClosed = css`
  clip-path: circle(0px);
`;

const Sidebar = styled.div`
  position: absolute;
  top: -100vh;
  right: -100vw;
  bottom: 0;
  width: 200vw;
  height: 200vh;
  z-index: 100;
  transition-duration: 1000ms;
  ${tw`bg-background`}
`;

/**
 * * Mobile Navbar Component
 */
const Navbar = () => {
  const [isOpen, toggleOpen] = useState(false);
  const direction = useScrollDirection();

  const toggleHandler = () => {
    toggleOpen(state => !state);
  };

  useEffect(() => {
    if (direction.isDown && isOpen) {
      toggleHandler();
    }
  }, [direction, isOpen]);

  return (
    <Nav>
      <Logo />
      <Div>
        <MenuToggle isOpen={isOpen} toggle={toggleHandler} />
        <Sidebar className={isOpen ? sidebarOpen : sidebarClosed} />
        <Navigation isOpen={isOpen} toggle={toggleHandler} />
      </Div>
    </Nav>
  );
};

export default Navbar;
