import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {motion} from 'framer-motion';

// @ts-expect-error : Just importing a friendly SVG
import FrontendIcon from '../../../images/frontend.svg';
// @ts-expect-error : Just importing a friendly SVG
import BackendIcon from '../../../images/backend.svg';
// @ts-expect-error : Just importing a friendly SVG
import NeuralIcon from '../../../images/neural.svg';
// @ts-expect-error : Just importing a friendly SVG
import CodingIcon from '../../../images/competitive.svg';

import Container from '../../layout/Container';
import MotionDiv from '../../layout/MotionDiv';

const StyledOuterDiv = styled.div`
  ${tw`w-screen bg-background`}
  ${tw`flex flex-col justify-center items-center`}
`;

const OuterGrid = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  ${tw`bg-paper rounded-2xl w-full`}
  ${tw`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0`}
  ${tw`p-6 lg:p-8 `}

  @media (max-width: 420px) {
    ${tw`p-4`}
  }
`;

const SkillsGrid = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2`}
  ${tw`gap-4 xl:gap-6`}
`;

const SkillDiv = styled.div`
  ${tw`bg-background rounded-xl p-8`}
  ${tw`flex flex-col justify-center items-center`}
`;

const StyledTitle = styled.div`
  font-family: 'space grotesk';
  ${tw`text-secondary text-center font-semibold tracking-wide`}
  ${tw`sm:text-xl`}
  ${tw`mt-4 sm:mt-6 `}
`;

const StyledIcon = styled.div`
  ${tw`h-20 w-20 xl:h-24 xl:w-24`}
`;

const StyledContent = styled.div`
  ${tw`flex flex-col justify-center`}
  ${tw`mt-4 sm:mt-8 ml-0 lg:ml-16 xl:ml-24`}
  ${tw`row-start-1 sm:row-start-2 lg:row-start-1 lg:col-start-2`}
`;

const StyledHeading = styled.div`
  font-family: 'montserrat';
  ${tw`mx-auto lg:mx-0`}
  ${tw`text-5xl md:text-6xl xl:text-7xl`}
  ${tw`text-center lg:text-left`}
  ${tw`text-primary font-bold`}
  ${tw`max-w-md`}

  @media (max-width: 420px) {
    ${tw`text-4xl`}
  }
`;

/*
  transform-origin: center;
  transition-duration: 300ms;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
*/

const Button = styled(motion.button)`
  font-family: 'space grotesk';
  outline: none;

  &:focus {
    outline: none;
  }
  ${tw`bg-primary text-primary rounded-full`}
  ${tw`hidden sm:block`}
  ${tw`text-xl xl:text-2xl`}
  ${tw`self-center lg:self-start`}
  ${tw`px-8 lg:px-12 py-3 lg:py-4`}
  ${tw`mt-12 xl:mt-16`}
`;

const Skills = () => (
  <StyledOuterDiv>
    <Container>
      <MotionDiv>
        <OuterGrid>
          <SkillsGrid>
            <SkillDiv>
              <StyledIcon>
                <FrontendIcon tw="h-full w-full" />
              </StyledIcon>
              <StyledTitle>
                Frontend
                <br />
                Development
              </StyledTitle>
            </SkillDiv>
            <SkillDiv>
              <StyledIcon>
                <BackendIcon tw="h-full w-full" />
              </StyledIcon>
              <StyledTitle>
                Backend
                <br />
                Development
              </StyledTitle>
            </SkillDiv>
            <SkillDiv>
              <StyledIcon>
                <NeuralIcon tw="h-full w-full" />
              </StyledIcon>
              <StyledTitle>
                Machine
                <br />
                Learning
              </StyledTitle>
            </SkillDiv>
            <SkillDiv>
              <StyledIcon>
                <CodingIcon tw="h-full w-full" />
              </StyledIcon>
              <StyledTitle>
                Competitive
                <br />
                Programming
              </StyledTitle>
            </SkillDiv>
          </SkillsGrid>
          <StyledContent>
            <StyledHeading>I build things for the web</StyledHeading>
            <a href="mailto:ankitkumarsamota121@gmail.com">
              <Button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                Get in touch
              </Button>
            </a>
          </StyledContent>
        </OuterGrid>
      </MotionDiv>
    </Container>
  </StyledOuterDiv>
);

export default Skills;
