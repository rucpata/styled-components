import React from 'react'
import Layout from '../Layout/Layout'
import Button from '../components/Button/Button'
import {Link} from 'gatsby';
import styled from 'styled-components';

const data = [
  {
    title: 'Section 1'
  },
  {
    title: 'Section 2',
    ad: "I'm baby taxidermy cold-pressed disrupt..."
  },
  {
    title: 'Section 3',
  },
  {
    title: 'Section 4',
    ad: "I'm baby taxidermy cold-pressed disrupt..."
  },
]

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledH2 = styled.h2`
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: white;
  grid-column-start: ${({order}) => order % 2 === 0 ? '2' : '1'};
`;

const StyledAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: aqua;
  border-radius: 10px;
  height: 80%;
  width: 80%;
`;

const About = () => {
  return (
    <Layout>
      <h2>About Page</h2>
      <Button as={Link} href='/'>Go back</Button>
      <StyledWrapper>
        {data.map((item, i) => (
          <>
            <StyledH2 order={i}>{item.title}</StyledH2>
            {item.ad && <StyledAd>{item.ad}</StyledAd>}
          </>
        ) )}
      </StyledWrapper>
    </Layout>
  )
}

export default About
