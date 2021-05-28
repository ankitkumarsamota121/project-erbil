import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
// import {motion, useAnimation} from 'framer-motion';

import DesktopNav from './DesktopNav';
// import MobileNav from './MobileNav';
import Container from '../layout/Container';
// import useScrollDirection from '../../hooks/useScrollDirection';

/**
 * * Navbar Styling
 */
// const Div = styled(motion.div)`
const Div = styled.div`
  ${tw`fixed top-0 w-full h-20  z-10 flex justify-center items-center bg-background`}
`;

// const divVariants = {
//   hidden: {
//     y: -100,
//     opacity: 0,
//     transition: {
//       type: 'tween',
//       duration: 0.25,
//       ease: 'easeInOut',
//     },
//   },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: 'tween',
//       duration: 0.25,
//       ease: 'easeInOut',
//     },
//   },
// };

/**
 * * Navbar Component
 */
const Navbar = () => (
  // const controls = useAnimation();
  // const direction = useScrollDirection();

  // useEffect(() => {
  //   if (!direction.isDown) {
  //     controls.start('visible');
  //   } else {
  //     controls.start('hidden');
  //   }
  // }, [direction]);
  // <Div initial="initial" variants={divVariants} animate={controls}>
  <Div>
    <Container>
      <DesktopNav />
      {/* <MobileNav /> */}
    </Container>
  </Div>
);

export default Navbar;
