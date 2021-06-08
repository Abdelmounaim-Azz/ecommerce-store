import './collection-overview.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <PreviewCollection key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
