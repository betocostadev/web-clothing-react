import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Now using redux-thunk | new actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  // isLoading is inverted ! because we can receive the false value when loading.
  // Will use HOC for the Collections Overview now.
  render() {
    const { match } = this.props;
    return (
      <section className='shop-page'>
        <Route exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);