import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {GatsbyImage} from 'gatsby-plugin-image';
// import {Link} from 'react-scroll';

import Container from '../../layout/Container';

/**
 * * About Section Styling
 */
const Grid = styled.div`
  ${tw`grid grid-cols-1 md:grid-cols-9 gap-8 sm:gap-16 lg:gap-0`}
  ${tw`mt-16 md:mt-20`}
`;

const GridImage = styled.div`
  ${tw`flex justify-center items-center md:col-start-1 md:col-span-4`}
`;

const StyledImage = styled.div`
  width: fit-content;
  height: fit-content;
  ${tw`relative rounded-lg`}
`;

const BackDiv = styled.div`
  ${tw`absolute top-0 left-0`}
  ${tw`h-full w-full rounded-lg`}
  ${tw`border-2 border-primary`}
  transform: translate(-20px, -20px);
`;

const ShadowDiv = styled.div`
  filter: drop-shadow(4px 4px 20px #000000);
  overflow: hidden;
  ${tw`w-72 rounded-lg`}

  @media (max-width: 500px) {
    ${tw`w-60`}
  }
`;

const StyledText = styled.div`
  font-family: 'Space Grotesk';
  ${tw`md:text-xl max-w-lg font-light text-left text-secondary xl:text-2xl md:col-start-5 md:col-span-5`}
  ${tw`flex flex-col`}
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

const Button = styled.button`
  font-family: 'space grotesk';
  ${tw`bg-primary text-primary rounded-full`}
  ${tw`text-xl xl:text-2xl`}
  ${tw`self-center sm:self-start`}
  ${tw`px-8 lg:px-12 py-3 lg:py-4`}
  ${tw`mt-8 xl:mt-12`}
`;

/**
 * * About Section Styling
 */
const About = () => {
  const data = useStaticQuery(
    graphql`
      query Ankit {
        file(relativePath: {eq: "ankit.png"}) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    `,
  );

  const imageData = data.file.childImageSharp.gatsbyImageData;
  return (
    <div id="about-section" tw="w-screen bg-background mt-32 sm:mt-48">
      <Container>
        <StyledHeading>About Me</StyledHeading>
        <Grid>
          <GridImage>
            <StyledImage>
              <BackDiv />
              <ShadowDiv>
                <GatsbyImage image={imageData} alt="Ankit Samota" />
              </ShadowDiv>
            </StyledImage>
          </GridImage>
          <StyledText>
            <p>
              <strong>Hey! My name is Ankit Samota,</strong> and I’m a
              final-year student for Industrial Design at NIT Rourkela.
            </p>
            <p tw="mt-4 md:mt-6">
              <strong>I love to solve problems and build things.</strong> I have
              been developing software for the past 2 years and my main focus
              these days is to write performant and industry standard code
              mainly in JavaScript. Whether it’s web development or competitive
              programming, I love the challenge of finding a way and discovering
              solutions.
            </p>
            <Button>Get in touch</Button>
          </StyledText>
        </Grid>
      </Container>
    </div>
  );
};

export default About;