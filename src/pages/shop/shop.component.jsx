import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }

  }

  render() {
    const {collections} = this.state;
    return (
      <section className='shop-page'>
        {
          collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </section>
    )
  }
}

export default ShopPage;