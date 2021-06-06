import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { selectShopCollections } from '../../redux/directory/directory.selectors';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
