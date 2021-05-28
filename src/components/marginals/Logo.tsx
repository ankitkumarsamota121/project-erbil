import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {animateScroll as scroll} from 'react-scroll';

// @ts-expect-error : Just importing a friendly SVG
import LogoSVG from '../../images/logo.svg';

/**
 * * Logo Styling
 */
const LogoDiv = styled.div`
  font-family: 'poppins';
  cursor: pointer;
  ${tw`font-bold text-accent`}
  ${tw`text-2xl md:text-3xl lg:text-4xl`}
`;

/**
 * * Logo Component
 */
const Logo = () => (
  <LogoDiv onClick={() => scroll.scrollToTop()}>
    <LogoSVG tw="h-12 w-12" />
  </LogoDiv>
);

export default Logo;
