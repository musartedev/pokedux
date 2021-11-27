import React from 'react';
import Menu from '../Menu';
import './styles.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className='Layout-content'>{children}</div>
    </div>
  );
};

export default Layout;
