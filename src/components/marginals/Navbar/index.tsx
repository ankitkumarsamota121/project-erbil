import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {motion, useAnimation} from 'framer-motion';
import tw from 'twin.macro';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Container from '../../layout/Container';
import useScrollDirection from '../../../hooks/useScrollDirection';

/**
 * * Navbar Styling
 */
const Div = styled(motion.div)`
  ${tw`fixed top-0 z-10 bg-background`}
  ${tw`flex justify-center items-center`}
  ${tw`w-full h-16 md:h-24`};
`;

const divVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

/**
 * * Navbar Component
 */
const Navbar = () => {
  const controls = useAnimation();
  const direction = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 120);
  };

  useEffect(() => {
    if (!direction.isDown && !scrolledToTop) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [direction, controls, scrolledToTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Div initial="initial" variants={divVariants} animate={controls}>
      <Container>
        <DesktopNav />
        <MobileNav />
      </Container>
    </Div>
  );
};

export default Navbar;
