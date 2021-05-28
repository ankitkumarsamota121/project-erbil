import * as React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import tw from 'twin.macro';

import MenuItem from './MenuItem';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

/**
 * * Navigation Styling
 */
const open = css`
  opacity: 1;
  transform: translateX(0px);
`;

const closed = css`
  opacity: 0;
  transform: translateX(100vw);
`;

const Container = styled.div`
  z-index: 900;
  transition-duration: 500ms;
  ${tw`h-screen w-screen fixed top-0 left-0 container mx-auto flex justify-end items-center`};
`;

const MotionUl = styled.ul`
  z-index: 900;
  ${tw`right-0 pr-5`}
`;

const itemIds = ['Projects', 'About', 'Contact'];

/**
 * * Navigation Component
 */
const Navigation = ({isOpen, toggle}: Props) => (
  <Container className={isOpen ? open : closed}>
    <MotionUl>
      {itemIds.map(i => (
        <MenuItem i={i} key={i} toggle={toggle} />
      ))}
    </MotionUl>
  </Container>
);

export default Navigation;
