import React, {ReactNode} from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props {
  children: ReactNode;
  classes?: string;
}

const defaultContainerProps = {
  classes: '',
};

/**
 * * Container Styling
 */
const Div = styled.div`
  ${tw`w-full container mx-auto px-6 md:px-12`};
`;

/**
 * * Container Components
 */
const Container = ({children, classes}: Props) => (
  <Div className={classes}>{children}</Div>
);

Container.defaultProps = defaultContainerProps;

export default Container;
