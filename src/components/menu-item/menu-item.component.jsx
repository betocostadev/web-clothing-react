import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  // Using the style tag to add css for the image
  <section className={`${size} menu-item`}>
    <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
    }}>
    </div>
    <div className='content-body'>
      <h1 className='content-title'>{title.toUpperCase()}</h1>
      <span className='content-subtitle'>SHOP NOW</span>
    </div>
  </section>
);

export default MenuItem;