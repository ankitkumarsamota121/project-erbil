import * as React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Link} from 'react-scroll';

interface Props {
  i: string;
  toggle: () => void;
}

/**
 * * MenuItem Styling
 */
const MotionLi = styled(motion.li)`
  z-index: 900;
`;

const Title = styled.div`
  cursor: pointer;
  color: #efedff;
  font-family: 'Space Grotesk';
  ${tw`text-4xl m-4 font-semibold text-right`}
`;

/**
 * * MenuItem Variants
 */
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

/**
 * * MenuItem Component
 */
const MenuItem = ({i, toggle}: Props) => {
  return (
    <MotionLi
      variants={variants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
    >
      <Link
        to={`${i.toLowerCase()}-section`}
        spy
        smooth
        duration={500}
        onClick={toggle}
      >
        <Title>{i}</Title>
      </Link>
    </MotionLi>
  );
};

export default MenuItem;
