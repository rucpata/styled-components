import * as React from "react";
import {Link} from 'gatsby';
import H1 from '../components/H1/H1'
import Button from '../components/Button/Button';
import Layout from "../Layout/Layout";

const IndexPage = () => (
  <Layout>
    <H1>Good morning</H1>
    <Button as={Link} href="/about">About page</Button>
  </Layout>
 
)

export default IndexPage
