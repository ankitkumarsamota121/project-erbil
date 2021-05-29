import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {IGatsbyImageData} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';

// @ts-expect-error : Just a friendly SVG
import GithubIcon from '../../../images/github.svg';
// @ts-expect-error : Just a friendly SVG
import LinkIcon from '../../../images/link.svg';

/**
 * * Project Details Styling
 */
// const StyledOuterDiv = styled(motion.div)`
const StyledBackground = styled(BgImage)`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  ${tw`bg-background bg-cover flex flex-col items-start rounded-lg`}
`;

const StyledFilter = styled.div`
  z-index: -1;
  ${tw`bg-background h-full w-full absolute top-0 left-0 opacity-80`}
`;

const StyledContent = styled.div`
  ${tw`h-full w-full p-6 sm:p-10 z-20 flex flex-col`}
`;

const StyledType = styled.div`
  font-family: 'space grotesk';
  ${tw`text-secondary text-xl font-semibold`}
`;

const StyledTitle = styled.div`
  font-family: 'space grotesk';
  ${tw`text-accent text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide sm:mt-2`}
`;

const StyledDescription = styled.div`
  font-family: 'space grotesk';
  ${tw`text-primary sm:text-lg font-light mt-4 sm:mt-6`}
`;

const StyledStackDiv = styled.div`
  font-family: 'space grotesk';
  ${tw`flex flex-wrap text-primary sm:text-lg font-semibold tracking-wide space-x-4 sm:space-x-6 mt-4 sm:mt-6`}
`;

const StyledIconsDiv = styled.div`
  ${tw`flex space-x-4 sm:space-x-6 mt-4 sm:mt-6`}
`;

const Icon = styled.div`
  ${tw`h-6 w-6 sm:w-8 sm:h-8`}
`;

/**
 * * Project Details Component
 */
interface Props {
  title: string;
  description: string;
  github: string;
  link: string;
  stack: string[];
  thumb: IGatsbyImageData;
}

const ProjectDetails = ({
  title,
  description,
  github,
  link,
  thumb,
  stack,
}: Props) => (
  <StyledBackground image={thumb}>
    <StyledFilter />
    <StyledContent>
      <StyledType>Featured Project</StyledType>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledStackDiv>
        {stack.map(s => (
          <span key={s}>{s}</span>
        ))}
      </StyledStackDiv>
      <StyledIconsDiv>
        <Icon>
          <GithubIcon tw="h-full w-full" />
        </Icon>
        <Icon>
          <LinkIcon tw="h-full w-full" />
        </Icon>
      </StyledIconsDiv>
    </StyledContent>
  </StyledBackground>
);

export default ProjectDetails;
