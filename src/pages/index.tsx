import React from 'react';
import Navbar from '../components/marginals/Navbar';
import Landing from '../components/sections/Landing';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Footer from '../components/marginals/Footer';

import Layout from '../layout';
import About from '../components/sections/About';

// import 'tailwindcss/dist/base.css';
// import 'tailwindcss/dist/components.css';
// import 'tailwindcss/dist/utilities.css';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Landing />
    <Skills />
    <Projects />
    <About />
    <Footer />
  </Layout>
);

export default IndexPage;
