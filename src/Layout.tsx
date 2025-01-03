import React from 'react';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
