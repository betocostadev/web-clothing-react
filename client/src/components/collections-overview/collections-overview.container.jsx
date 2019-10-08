// We need to determine if the component should be loading
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// To make it easier to understand and read, we are using redux compose to pass the component
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// Compose evaluate from right to left.
// Evaluates WithSpinner first by passing Collections Overview to that
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;