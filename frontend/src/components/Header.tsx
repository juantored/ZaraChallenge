import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();

  const location = useLocation();

  // Comprobamos si ocultar el carrito
  const hideBag = location.pathname !== "/cart";

  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/mobiles">
            <Icon name="Logo" />
          </Link>
        </div>

        <div className="bag">
          {hideBag && (
            <Link to="/cart">
              {cart.length == 0 ? <Icon name="Bag" /> : <Icon name="BagFull" />}
              <p>{cart.length}</p>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;
