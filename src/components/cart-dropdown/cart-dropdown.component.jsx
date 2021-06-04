import { connect } from 'react-redux';
import CustomButton from '../custom-btn/custom-btn.component';
import CardItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CardItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropDown);
