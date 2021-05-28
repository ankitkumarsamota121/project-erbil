import React, {useEffect} from 'react';
import styled from '@emotion/styled';

import {css} from '@emotion/css';
import tw from 'twin.macro';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import Container from '../layout/Container';
import useScrollDirection from '../../hooks/useScrollDirection';

/**
 * * Navbar Styling
 */
const hidden = css`
  opacity: 0;
  transform: translateY(-120px);
  transition-duration: 500ms;
`;

const visible = css`
  opacity: 1;
  transform: translateY(0px);
  transition-duration: 1s;
`;

const Div = styled.div`
  ${tw`fixed top-0 z-10 bg-background`}
  ${tw`flex justify-center items-center`}
  ${tw`w-full h-16 md:h-24`};
`;

/**
 * * Navbar Component
 */
const Navbar = () => {
  const direction = useScrollDirection();

  useEffect(() => {}, [direction]);
  return (
    <Div className={direction.isUp ? hidden : visible}>
      <Container>
        <DesktopNav />
        <MobileNav />
      </Container>
    </Div>
  );
};

export default Navbar;
