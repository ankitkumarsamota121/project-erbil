import React from 'react';
import Navbar from '../components/marginals/Navbar';
import Landing from '../components/sections/Landing';
import Skills from '../components/sections/Skills';

import Layout from '../layout';

// import 'tailwindcss/dist/base.css';
// import 'tailwindcss/dist/components.css';
// import 'tailwindcss/dist/utilities.css';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Landing />
    <Skills />
    {/* <Footer /> */}
  </Layout>
);

export default IndexPage;
