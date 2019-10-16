import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component'
import ErrorBoundary from '../../components/error-boundary/error-boundary.component'

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'))

const CollectionPageContainer = lazy(() => import('../collection/collection.container'))

const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  // Will use HOC for the Collections Overview now.
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <section className='shop-page'>
        <Route exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
        />
        <Route path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
        />
        </section>
      </Suspense>
    </ErrorBoundary>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)