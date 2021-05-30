import React, {ReactNode, useState, useEffect} from 'react';
import {GlobalStyles} from 'twin.macro';
import SEO from '../components/seo';
import Loader from '../components/shared/Loader';
import './index.css';

interface Props {
  children: ReactNode;
}

const Layout = ({children, ...rest}: Props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  });
  return (
    <>
      <SEO />
      <div className="layout-container" {...rest}>
        <GlobalStyles />
        {loading ? <Loader /> : <>{children}</>}
      </div>
    </>
  );
};

export default Layout;
