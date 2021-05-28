import * as React from 'react';
import {motion} from 'framer-motion';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import MenuItem from './MenuItem';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

/**
 * * Navigation Styling
 */
const Container = styled.div`
  z-index: 900;
  display: ${(props: {isOpen: boolean}) => (props.isOpen ? 'flex' : 'none')};
  ${tw`h-screen w-screen fixed top-0 left-0 container mx-auto items-center`};
`;

const MotionUl = styled(motion.ul)`
  z-index: 900;
  ${tw`absolute right-0 pr-5`}
`;

/**
 * * Navigation Variants
 */
const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.25},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
};

const itemIds = ['About', 'Skills', 'Projects', 'Contact'];

/**
 * * Navigation Component
 */
const Navigation = ({isOpen, toggle}: Props) => (
  <Container isOpen={isOpen}>
    <MotionUl variants={variants}>
      {itemIds.map(i => (
        <MenuItem i={i} key={i} toggle={toggle} />
      ))}
    </MotionUl>
  </Container>
);

export default Navigation;
