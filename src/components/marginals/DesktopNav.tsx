import React from 'react';
import styled from '@emotion/styled';
// import {motion} from 'framer-motion';
import tw from 'twin.macro';
import {Link} from 'react-scroll';

import Logo from './Logo';

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
  ${tw`text-xl text-primary font-semibold`}
`;

/**
 * * DesktopNav Component
 */
const DesktopNav = () => (
  <Nav>
    <Logo />
    <Ul>
      {/* <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}> */}
      <li>
        <Li className="pr-10" to="about-section" smooth duration={500}>
          About
        </Li>
      </li>
      <li>
        <Li className="pr-10" to="skills-section" smooth duration={500}>
          Skills
        </Li>
      </li>
      <li>
        <Li className="pr-10" to="projects-section" smooth duration={500}>
          Projects
        </Li>
      </li>
      <li>
        <Li to="contact-section" smooth duration={500}>
          Contact
        </Li>
      </li>
    </Ul>
  </Nav>
);

export default DesktopNav;
