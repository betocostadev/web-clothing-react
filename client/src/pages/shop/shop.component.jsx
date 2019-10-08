import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// Now using redux-thunk | new actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  // Will use HOC for the Collections Overview now.
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
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)