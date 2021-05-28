import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {motion, useCycle} from 'framer-motion';

import Logo from './Logo';
import MenuToggle from './MenuToggle';
import Navigation from './MobileNavigation';
import useDimensions from '../../hooks/useDimensions';

/**
 * * Mobile Navbar Styling
 */
const Nav = styled(motion.nav)`
  ${tw`container flex md:hidden justify-between items-center`}
`;

const Div = styled(motion.div)`
  ${tw`relative h-5 w-5`}
`;

const Sidebar = styled(motion.div)`
  position: absolute;
  top: -100vh;
  right: -100vw;
  bottom: 0;
  width: 200vw;
  height: 200vh;
  z-index: 100;
  ${tw`bg-background`}
`;

/**
 * * Variants
 */
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

/**
 * * Mobile Navbar Component
 */
const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const {height} = useDimensions();

  return (
    <Nav>
      <Logo />
      <Div initial={false} animate={isOpen ? 'open' : 'closed'} custom={height}>
        <Sidebar variants={sidebar} />
        <MenuToggle toggle={() => toggleOpen()} />
        <Navigation isOpen={isOpen} toggle={() => toggleOpen()} />
      </Div>
    </Nav>
  );
};

export default Navbar;
