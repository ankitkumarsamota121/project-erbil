import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {Link} from 'react-scroll';

import Logo from '../Logo';

/**
 * * DesktopNav Styling
 */
const Nav = styled.nav`
  ${tw`container hidden md:flex justify-between items-center `}
`;

const Ul = styled.ul`
  ${tw`flex flex-row`}
`;

const Li = styled(Link)`
  font-family: 'Space Grotesk';
  cursor: pointer;
  transform-origin: center;
  transition-duration: 300ms;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
  ${tw`block text-primary tracking-wide`}
  ${tw`text-xl lg:text-2xl`}
`;

/**
 * * DesktopNav Component
 */
const DesktopNav = () => (
  <Nav>
    <Logo />
    <Ul>
      <li>
        <Li
          tw="mr-12"
          to="projects-section"
          smooth
          duration={500}
          offset={-120}
        >
          Projects
        </Li>
      </li>
      <li>
        <Li tw="mr-12" to="about-section" smooth duration={500}>
          About
        </Li>
      </li>
      <li>
        <Li tw="lg:mr-20" to="about-section" smooth duration={500}>
          Contact
        </Li>
      </li>
    </Ul>
  </Nav>
);

export default DesktopNav;
