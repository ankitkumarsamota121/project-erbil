import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import Container from '../../layout/Container';

const StyledOuterDiv = styled.div`
  ${tw`w-screen bg-background flex flex-col justify-center items-center`}
`;

const OuterGrid = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  ${tw`bg-paper rounded-2xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 p-8`}
`;

const SkillsGrid = styled.div`
  ${tw`grid grid-cols-1  sm:grid-cols-2 gap-4 xl:gap-6`}
`;

const SkillDiv = styled.div`
  ${tw`bg-background rounded-xl text-secondary`}
`;

const StyledContent = styled.div`
  ${tw`flex flex-col justify-center`}
`;

const StyledHeading = styled.div`
  font-family: 'montserrat';
  ${tw`mx-auto lg:mx-0 text-5xl lg:text-6xl xl:text-7xl max-w-md text-primary text-center lg:text-left font-bold`}
`;

const Button = styled.button`
  font-family: 'space grotesk';
  ${tw`bg-primary text-primary text-xl xl:text-2xl self-center lg:self-start px-8 lg:px-12 py-3 lg:py-4 rounded-full mt-12 mt-16 xl:mt-20`}
`;

const Skills = () => (
  <StyledOuterDiv>
    <Container>
      <OuterGrid>
        <SkillsGrid>
          <SkillDiv>Div 1</SkillDiv>
          <SkillDiv>Div 2</SkillDiv>
          <SkillDiv>Div 3</SkillDiv>
          <SkillDiv>Div 4</SkillDiv>
        </SkillsGrid>
        <StyledContent>
          <StyledHeading>I build things for the web</StyledHeading>
          <Button>Get in touch</Button>
        </StyledContent>
      </OuterGrid>
    </Container>
  </StyledOuterDiv>
);

export default Skills;
