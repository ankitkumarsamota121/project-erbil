import React, {ReactNode} from 'react';
import {GlobalStyles} from 'twin.macro';
import SEO from '../components/seo';
import './index.css';

interface Props {
  children: ReactNode;
}

const Layout = ({children, ...rest}: Props) => (
  <>
    <SEO />
    <div className="layout-container" {...rest}>
      <GlobalStyles />
      {children}
    </div>
  </>
);

export default Layout;
