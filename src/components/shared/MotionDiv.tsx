import React, {ReactNode, useEffect} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

interface Props {
  children: ReactNode;
}

/**
 * * MotionDiv Styling
 */
const Div = styled(motion.div)`
  ${tw`p-0 m-0 w-full flex flex-col justify-center items-center`};
`;

/**
 * * Motion Variants
 */
const divVariants = {
  initial: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
  final: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
};

/**
 * * MotionDiv Components
 */
const MotionDiv = ({children}: Props) => {
  const controls = useAnimation();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('final');
    }
  }, [controls, inView]);

  return (
    <Div ref={ref} initial="initial" variants={divVariants} animate={controls}>
      {children}
    </Div>
  );
};

export default MotionDiv;
