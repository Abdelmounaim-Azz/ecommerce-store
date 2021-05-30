import './header.styles.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/icon-shop.svg"
const Header=()=>(
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop">
        SHOP
      </Link>
      <Link to="/contact">
        SHOP
      </Link>
    </div>
  </div>
);
export default Header;