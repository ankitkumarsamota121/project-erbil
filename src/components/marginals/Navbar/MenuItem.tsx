import * as React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {Link} from 'react-scroll';

interface Props {
  i: string;
  toggle: () => void;
}

/**
 * * MenuItem Styling
 */
const MotionLi = styled.li`
  z-index: 900;
  display: block;
`;

const Title = styled.div`
  cursor: pointer;
  color: #efedff;
  font-family: 'Space Grotesk';
  ${tw`text-4xl m-4 font-semibold text-right`}
`;

/**
 * * MenuItem Component
 */
const MenuItem = ({i, toggle}: Props) => (
  <MotionLi>
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

export default MenuItem;
