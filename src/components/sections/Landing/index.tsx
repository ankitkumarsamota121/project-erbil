import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
// import {Link} from 'react-scroll';

// @ts-expect-error : Just importing a friendly SVG
import GithubIcon from '../../../images/github.svg';
// @ts-expect-error : Just importing a friendly SVG
import LinkedinIcon from '../../../images/linkedin.svg';
// @ts-expect-error : Just importing a friendly SVG
import InstagramIcon from '../../../images/instagram.svg';

import Container from '../../layout/Container';

/**
 * * Landing Styling
 */
const StyledOuterDiv = styled.div`
  height: 90vh;
  ${tw`w-screen bg-background flex flex-col justify-center items-center`}
`;

const Grid = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-3 md:gap-8 text-primary`}
`;

const StyledHeading = styled.div`
  font-family: 'montserrat';
  ${tw`text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-primary font-bold`}
`;

const StyledOutline = styled.div`
  font-family: 'poppins';
  text-shadow: -1px -1px 0 #efedff, 1px -1px 0 #efedff, -1px 1px 0 #efedff,
    1px 1px 0 #efedff;

  ${tw`text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-background font-bold`};
`;

const StyledSubHeading = styled.div`
  font-family: 'space grotesk';
  ${tw`text-2xl md:text-3xl xl:text-5xl text-secondary font-bold tracking-wide`}
`;

const StyledNavLink = styled.div`
  font-family: 'space grotesk';
  cursor: pointer;
  ${tw`text-2xl hidden sm:block lg:text-3xl text-secondary tracking-wide`}
`;

const Row = styled.div`
  ${tw`mt-20 grid grid-cols-1 md:grid-cols-3`}
`;

/**
 * * Landing Component
 */
const Landing = () => {
  const [idx, setIdx] = useState(0);
  const phrases = ['Hey There!', 'नमस्ते!', 'Bonjour!', 'Hola!', 'Ciao!'];

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
      <Container>
        <Grid>
          <div tw="col-span-1 sm:col-span-2 space-y-2">
            <StyledOutline>{phrases[idx]}</StyledOutline>
            <StyledHeading>I&apos;m Ankit.</StyledHeading>
            <StyledSubHeading>Full Stack Developer</StyledSubHeading>
          </div>
          <div tw="hidden md:flex flex flex-col justify-center space-y-4 md:space-y-8">
            <StyledNavLink>My Projects</StyledNavLink>
            <StyledNavLink>About Me</StyledNavLink>
            <StyledNavLink>Contact Me</StyledNavLink>
          </div>
        </Grid>
        <Row>
          <div tw="md:col-start-3 max-h-12 flex justify-center md:justify-start space-x-8  md:space-x-12">
            <GithubIcon tw="w-8 h-8 md:w-12 md:h-12" />
            <LinkedinIcon tw="w-8 h-8 md:w-12 md:h-12" />
            <InstagramIcon tw="w-8 h-8 md:w-12 md:h-12" />
          </div>
        </Row>
      </Container>
    </StyledOuterDiv>
  );
};

export default Landing;
