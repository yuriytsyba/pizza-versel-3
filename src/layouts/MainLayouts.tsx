import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const MainLayouts: React.FC = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header />
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayouts;
