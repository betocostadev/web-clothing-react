import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory__menu'>
      <div className='menu__item'>
        <div className='content__body'>
          <h1 className='content__title'>HATS</h1>
          <h2 className='content__subtitle'>SHOP NOW</h2>
        </div>
      </div>
      <div className='menu__item'>
        <div className='content__body'>
          <h1 className='content__title'>JACKETS</h1>
          <h2 className='content__subtitle'>SHOP NOW</h2>
        </div>
      </div>
      <div className='menu__item'>
        <div className='content__body'>
          <h1 className='content__title'>SNEAKERS</h1>
          <h2 className='content__subtitle'>SHOP NOW</h2>
        </div>
      </div>
      <div className='menu__item'>
        <div className='content__body'>
          <h1 className='content__title'>WOMENS</h1>
          <h2 className='content__subtitle'>SHOP NOW</h2>
        </div>
      </div>
      <div className='menu__item'>
        <div className='content__body'>
          <h1 className='content__title'>MENS</h1>
          <h2 className='content__subtitle'>SHOP NOW</h2>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;