import React from 'react'
import Layout from '../Layout/Layout'
import Button from '../components/Button/Button'
import {Link} from 'gatsby';


const About = () => {
  return (
    <Layout>
      <h2>About Page</h2>
      <Button as={Link} href='/'>Go back</Button>
    </Layout>
  )
}

export default About
