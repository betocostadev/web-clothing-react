import React from 'react';
import './menu-item.styles.scss';
// Using withRouter for routing
import { withRouter } from 'react-router-dom';

// Using withRouter we will have access to history
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  // Using the style tag to add css for the image
  <section
    role='link'
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

// Using withRouter we are passing a Higher-Order component, a component that will use
// a function to get it mutated
export default withRouter(MenuItem);