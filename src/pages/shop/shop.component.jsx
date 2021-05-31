import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import SHOP_DATA from './shop.data';
import { useState } from 'react';
const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
