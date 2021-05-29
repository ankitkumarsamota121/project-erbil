import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import tw from 'twin.macro';
import {motion} from 'framer-motion';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

/**
 * * MenuToggle Styling
 */
const Path = styled(motion.path)`
  fill: transparent;
  stroke-width: 3;
  stroke: #efedff;
  stroke-linecap: round;
`;

const Button = styled.button`
  z-index: 1000;
  position: absolute;
  &:focus {
    outline: none;
  }
  ${tw`text-primary`}
`;

const open = css`
  transition-duration: 100ms;
`;

const closed = css`
  transition-duration: 100ms;
`;

const openMid = css`
  opacity: 0;
  transition-duration: 100ms;
`;

const closedMid = css`
  opacity: 1;
  transition-duration: 100ms;
`;

/**
 * * MenuToggle Component
 */
const MenuToggle = ({isOpen, toggle}: Props) => (
  <Button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        d={isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5'}
        className={isOpen ? open : closed}
      />
      <Path d="M 2 9.423 L 20 9.423" className={isOpen ? openMid : closedMid} />
      <Path
        d={isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346'}
        className={isOpen ? open : closed}
      />
    </svg>
  </Button>
);

export default MenuToggle;
