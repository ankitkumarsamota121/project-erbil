import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Div = styled.div`
  ${tw`w-screen bg-background`}
  ${tw`flex flex-col justify-center items-center`}
  ${tw`h-20`}
  ${tw`mt-24 md:mt-32`}
`;

const Text = styled.div`
  font-family: 'space grotesk';
  ${tw`text-primary flex justify-center`}
`;

const Footer = () => (
  <Div>
    <Text>
      &copy; Designed & Developed by
      <a href="https://github.com/ankitkumarsamota121">
        <strong tw="text-accent ml-2">Ankit Samota</strong>
      </a>
    </Text>
  </Div>
);

export default Footer;
