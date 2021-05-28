import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {motion} from 'framer-motion';

interface Props {
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

/**
 * * MenuToggle Component
 */
const MenuToggle = ({toggle}: Props) => {
  return (
    <Button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: {d: 'M 2 2.5 L 20 2.5'},
            open: {d: 'M 3 16.5 L 17 2.5'},
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0},
          }}
          transition={{duration: 0.1}}
        />
        <Path
          variants={{
            closed: {d: 'M 2 16.346 L 20 16.346'},
            open: {d: 'M 3 2.5 L 17 16.346'},
          }}
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;
