import React from 'react';
import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

// Using filter to display only 3 at a time
// Map to map the items array and get their props
// Whenever this component is called, the functions bellow will run, this can be a performance
// issue if the items array gets too big.
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
)

export default CollectionPreview;