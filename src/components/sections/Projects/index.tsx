import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {graphql, useStaticQuery} from 'gatsby';
// import {useInView} from 'react-intersection-observer';
import {IGatsbyImageData} from 'gatsby-plugin-image';

import Container from '../../layout/Container';
import Project from './Project';

/**
 * * Projects Section Styling
 */
const Grid = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-2`}
  ${tw`gap-6 lg:gap-8 xl:gap-12`}
  ${tw`mt-12 md:mt-20`}
`;

const StyledHeading = styled.div`
  font-family: 'montserrat';
  ${tw`mx-auto lg:mx-0`}
  ${tw`text-5xl sm:text-6xl`}
  ${tw`text-center`}
  ${tw`text-primary font-bold`}

  @media (max-width: 460px) {
    ${tw`text-4xl`}
  }

  @media (max-width: 360px) {
    ${tw`text-3xl`}
  }
`;

/**
 * * Projects Section Component
 */
interface QueryData {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        title: string;
        description: string;
        github: string;
        link: string;
        stack: string[];
        thumb: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
    }[];
  };
}

const Projects = () => {
  // const controls = useAnimation();
  // const {ref, inView} = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('final');
  //   }
  // }, [inView]);

  const data: QueryData = useStaticQuery(graphql`
    query Projects {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/.*\\.md$/"}}) {
      nodes {
        frontmatter {
          title
          description
          github
          link
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
  `);

  const {nodes} = data.allMarkdownRemark;
  return (
    <div id="projects-section" tw="w-screen bg-background mt-32 sm:mt-48">
      <Container>
        <StyledHeading>Things I&apos;ve built</StyledHeading>
        <Grid>
          {nodes.map(node => {
            const {title, description, github, link, stack} = node.frontmatter;
            return (
              <Project
                title={title}
                description={description}
                github={github}
                link={link}
                stack={stack}
                thumb={node.frontmatter.thumb.childImageSharp.gatsbyImageData}
                key={title}
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
