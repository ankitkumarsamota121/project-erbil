import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

// @ts-expect-error : Just importing a friendly SVG
import GithubIcon from '../../../images/github.svg';
// @ts-expect-error : Just importing a friendly SVG
import LinkedinIcon from '../../../images/linkedin.svg';
// @ts-expect-error : Just importing a friendly SVG
import InstagramIcon from '../../../images/instagram.svg';

import Container from '../../shared/Container';
import MotionDiv from '../../shared/MotionDiv';

/**
 * * Landing Styling
 */
const StyledOuterDiv = styled.div`
  min-height: 85vh;
  ${tw`w-screen bg-background`}
  ${tw`flex flex-col justify-center items-center py-20`}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-3 md:gap-8`}
`;

const StyledHeading = styled.div`
  font-family: 'montserrat';
  ${tw`text-primary font-bold`}
  ${tw`text-8xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`}

  @media (max-width: 560px) {
    ${tw`text-7xl`}
  }

  @media (max-width: 420px) {
    ${tw`text-6xl`}
  }

  @media (max-width: 360px) {
    ${tw`text-5xl`}
  }
`;

const StyledOutline = styled.div`
  font-family: 'poppins';
  text-shadow: -1px -1px 0 #efedff, 1px -1px 0 #efedff, -1px 1px 0 #efedff,
    1px 1px 0 #efedff;
  ${tw`text-background font-bold`};
  ${tw`text-8xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl`};

  @media (max-width: 560px) {
    ${tw`text-7xl`}
  }

  @media (max-width: 420px) {
    ${tw`text-6xl`}
  }

  @media (max-width: 360px) {
    ${tw`text-5xl`}
  }
`;

const StyledSubHeading = styled.div`
  font-family: 'space grotesk';
  ${tw`text-secondary font-semibold tracking-wide`}
  ${tw`text-4xl sm:text-2xl md:text-3xl xl:text-5xl`}

  @media (max-width: 560px) {
    ${tw`text-3xl`}
  }

  @media (max-width: 420px) {
    ${tw`text-2xl`}
  }

  @media (max-width: 360px) {
    ${tw`text-xl`}
  }
`;

const StyledNavigation = styled.div`
  ${tw`hidden sm:flex`}
  ${tw`flex-col justify-center`}
  ${tw`space-y-4 md:space-y-6 lg:space-y-8`}
`;

const StyledNavLink = styled(motion.div)`
  font-family: 'space grotesk';
  cursor: pointer;
  transform-origin: left;
  ${tw`hidden sm:block`}
  ${tw`text-secondary tracking-wide`}
  ${tw`text-2xl lg:text-3xl`}
`;

const Row = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-3`}
  ${tw`mt-24`}
`;

const StyledIconContainer = styled.div`
  ${tw`flex justify-center md:justify-start`}
  ${tw`sm:col-start-3 space-x-8  md:space-x-12`}
`;

const StyledIcon = styled(motion.a)`
  cursor: pointer;
  ${tw`w-8 h-8 md:w-12 md:h-12`}
`;

/**
 * * Landing Component
 */
const Landing = () => {
  const [idx, setIdx] = useState(0);
  const phrases = ['Hello!', 'नमस्ते!', 'Bonjour!', 'Hola!', 'Ciao!'];

  useEffect(() => {
    setTimeout(() => {
      setIdx(state => {
        if (state + 1 === phrases.length) return 0;
        return state + 1;
      });
    }, 2000);
  }, [idx, phrases.length]);

  return (
    <StyledOuterDiv>
      <MotionDiv>
        <Container>
          <Grid>
            <div tw="col-span-1 sm:col-span-2 space-y-4">
              <StyledOutline>{phrases[idx]}</StyledOutline>
              <StyledHeading>I&apos;m Ankit.</StyledHeading>
              <StyledSubHeading>Full Stack Developer</StyledSubHeading>
            </div>
            <StyledNavigation>
              <Link to="projects-section" smooth duration={500} offset={-120}>
                <StyledNavLink
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  My Projects
                </StyledNavLink>
              </Link>
              <Link to="about-section" smooth duration={500}>
                <StyledNavLink
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  About Me
                </StyledNavLink>
              </Link>
              <Link to="about-section" smooth duration={500}>
                <StyledNavLink
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                >
                  Contact Me
                </StyledNavLink>
              </Link>
            </StyledNavigation>
          </Grid>
          <Row>
            <StyledIconContainer>
              <StyledIcon
                target="_blank"
                href="https://www.linkedin.com/in/ankitkumarsamota121/"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <LinkedinIcon tw="h-full w-full" />
              </StyledIcon>
              <StyledIcon
                target="_blank"
                href="https://github.com/ankitkumarsamota121"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <GithubIcon tw="h-full w-full" />
              </StyledIcon>
              <StyledIcon
                target="_blank"
                href="https://www.instagram.com/ak_samota/"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <InstagramIcon tw="h-full w-full" />
              </StyledIcon>
            </StyledIconContainer>
          </Row>
        </Container>
      </MotionDiv>
    </StyledOuterDiv>
  );
};

export default Landing;
