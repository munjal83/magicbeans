import React from 'react';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>BEVERAGES</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MERCHANDISE</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>FOOD</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>COFFEE</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>TEA</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};
