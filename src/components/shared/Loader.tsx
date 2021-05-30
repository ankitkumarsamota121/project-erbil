import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {motion, useAnimation} from 'framer-motion';

const Container = styled(motion.div)`
  display: ${(props: {loading: boolean}) => (props.loading ? 'block' : 'none')}
    ${tw`fixed top-0 left-0 w-screen h-screen bg-background flex justify-center items-center`};
`;

const StyledPathA = styled(motion.path)`
  overflow: visible;
  stroke: #fa5c77;
  stroke-width: 8px;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

const StyledPathB = styled(motion.path)`
  overflow: visible;
  stroke: #f73859;
  stroke-width: 8px;
  stroke-linejoin: round;
  stroke-linecap: round;
`;

const pathA = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: '#F73859',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: '#F73859',
  },
};

const pathB = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: '#101010',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: '#101010',
  },
};

const divVariants = {
  initial: {
    opacity: 1,
  },
  final: {
    opacity: 0,
    scale: 0.2,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
};

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    if (!loading) {
      controls.start('final');
    }
  }, [loading, controls]);

  return (
    <Container
      loading={loading}
      initial="initial"
      variants={divVariants}
      animate={controls}
    >
      <motion.svg
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="item"
        tw="h-24 w-24 md:h-32 md:w-32 overflow-visible"
      >
        <StyledPathA
          d="M512 256C512 397.385 397.385 512 256 512C186.378 512 256 512 0 512C0.00113593 256 0.000254313 327.763 0.000254313 256C0.000254313 114.615 114.615 0 256 0C397.385 0 512 114.615 512 256Z"
          variants={pathA}
          initial="hidden"
          animate="visible"
          transition={{
            default: {duration: 2, ease: 'easeInOut'},
            fill: {duration: 2, ease: [1, 0, 0.8, 1]},
          }}
        />
        <StyledPathB
          d="M266.812 412.003C294.21 412.003 318.792 405.248 340.56 391.737C362.328 377.85 379.592 359.273 392.353 336.004C404.738 312.359 410.931 285.712 410.931 256.063C410.931 226.413 404.175 199.766 390.664 176.122C376.778 152.478 358.2 133.9 334.931 120.389C311.286 106.502 284.827 99.5591 255.553 99.5591C226.279 99.5591 200.007 106.502 176.738 120.389C153.469 133.9 135.079 152.478 121.568 176.122C107.681 199.766 100.738 226.413 100.738 256.063V381.604C100.738 389.86 103.553 396.804 109.183 402.433C114.437 407.687 121.192 410.315 129.449 410.315C137.706 410.315 144.649 407.687 150.279 402.433C155.533 396.804 158.16 389.86 158.16 381.604V360.774C171.296 376.537 187.247 389.11 206.012 398.492C224.402 407.5 244.669 412.003 266.812 412.003ZM255.553 361.337C236.412 361.337 219.336 356.833 204.323 347.826C189.311 338.443 177.489 325.87 168.857 310.107C160.225 293.969 155.908 275.954 155.908 256.063C155.908 235.796 160.225 217.781 168.857 202.018C177.489 185.88 189.311 173.307 204.323 164.3C219.336 154.917 236.412 150.226 255.553 150.226C274.318 150.226 291.395 154.917 306.783 164.3C321.795 173.307 333.805 185.88 342.812 202.018C351.444 217.781 355.76 235.796 355.76 256.063C355.76 275.954 351.444 293.969 342.812 310.107C333.805 325.87 321.795 338.443 306.783 347.826C291.395 356.833 274.318 361.337 255.553 361.337Z"
          fill="#101010"
          variants={pathB}
          initial="hidden"
          animate="visible"
          transition={{
            default: {duration: 2.5, ease: 'easeInOut'},
            fill: {duration: 2.5, ease: [1, 0, 0.8, 1]},
          }}
        />
      </motion.svg>
    </Container>
  );
};

export default Loader;
