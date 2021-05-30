import React, {useState} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import tw from 'twin.macro';
import {IGatsbyImageData} from 'gatsby-plugin-image';
import {BgImage} from 'gbimage-bridge';
import {motion} from 'framer-motion';

// @ts-expect-error : Just a friendly SVG
import GithubIcon from '../../../images/github.svg';
// @ts-expect-error : Just a friendly SVG
import LinkIcon from '../../../images/link.svg';

/**
 * * Project Styling
 */
const StyledBackground = styled(BgImage)`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  ${tw`bg-background bg-cover flex flex-col items-start rounded-lg`}
`;

const filterHovered = css`
  opacity: 0;
`;
const filter = css`
  opacity: 0.8;
`;
const StyledFilter = styled.div`
  z-index: -1;
  transition-duration: 500ms;
  ${tw`bg-background h-full w-full absolute top-0 left-0`}
`;

const contentHovered = css`
  opacity: 0;
`;
const content = css`
  opacity: 1;
`;
const StyledContent = styled.div`
  transition-duration: 500ms;
  ${tw`h-full w-full p-6 sm:p-10 z-20 flex flex-col`}
`;

const StyledType = styled.div`
  font-family: 'space grotesk';
  ${tw`text-secondary text-xl font-semibold`}
`;

const StyledTitle = styled.div`
  font-family: 'space grotesk';
  ${tw`text-accent font-bold uppercase tracking-wide`}
  ${tw`text-2xl sm:text-3xl lg:text-4xl`}
  ${tw`sm:mt-2`}
`;

const StyledDescription = styled.div`
  font-family: 'space grotesk';
  ${tw`text-primary font-light`}
  ${tw`mt-4 sm:mt-6`}
  ${tw`sm:text-lg`}
`;

const StyledStackDiv = styled.div`
  font-family: 'space grotesk';
  ${tw`text-primary font-semibold tracking-wide`}
  ${tw`flex flex-wrap space-x-4 sm:space-x-6`}
  ${tw`sm:text-lg`}
  ${tw`mt-4 sm:mt-6`}
`;

const StyledIconsDiv = styled.div`
  ${tw`flex space-x-4 sm:space-x-6`}
  ${tw` mt-4 sm:mt-6`}
`;

const Icon = styled(motion.a)`
  ${tw`h-6 w-6`}
  ${tw`sm:w-8 sm:h-8`}
`;

/**
 * * Motion Variants
 */
const divVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  final: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

/**
 * * Project Component
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
}: Props) => {
  const [isHovered] = useState(false);

  return (
    <motion.div variants={divVariants}>
      <StyledBackground image={thumb}>
        <StyledFilter className={isHovered ? filterHovered : filter} />
        <StyledContent
          className={isHovered ? contentHovered : content}
          // onMouseEnter={() => setHovered(() => true)}
          // onMouseLeave={() => setHovered(() => false)}
        >
          <StyledType>Featured Project</StyledType>
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledStackDiv>
            {stack.map(s => (
              <span key={s}>{s}</span>
            ))}
          </StyledStackDiv>
          <StyledIconsDiv>
            {github.length > 0 && (
              <Icon
                href={github}
                target="_blank"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <GithubIcon tw="h-full w-full" />
              </Icon>
            )}
            {link.length > 0 && (
              <Icon
                href={link}
                target="_blank"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
              >
                <LinkIcon tw="h-full w-full" />
              </Icon>
            )}
          </StyledIconsDiv>
        </StyledContent>
      </StyledBackground>
    </motion.div>
  );
};

export default ProjectDetails;
