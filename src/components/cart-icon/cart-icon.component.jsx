import { ReactComponent as BagBuyIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
const CartIcon = () => (
  <div className="cart-icon">
    <BagBuyIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
export default CartIcon;
