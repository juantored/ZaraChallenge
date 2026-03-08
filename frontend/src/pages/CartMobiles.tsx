import { useNavigate } from "react-router-dom";
import CartCard from "../components/Cart/CartCard";
import { useCart } from "../context/CartContext";

function CartMobile() {
  const { cart } = useCart();
  const { removeToCart } = useCart();
  const { totalPrice } = useCart();
  const navigate = useNavigate();

  const handleDeleteClick = (index: number) => {
    removeToCart(index);
  };

  const handleContinueShoppingClick = () => {
    navigate("/mobiles");
  };

  const handlePayClick = () => {
    alert("Now pay");
  };

  return (
    <div>
      <h4>CART ({cart.length})</h4>
      <div className="mobiles">
        {cart.map((mobile, index) => (
          <CartCard
            key={index}
            cart={mobile}
            index={index}
            onClickDelete={handleDeleteClick}
          />
        ))}
      </div>
      <div className="cartBotton">
        <button onClick={handleContinueShoppingClick}>CONTINUE SHOPPING</button>
        <p className="total">TOTAL</p>
        <p className="price">{totalPrice} EUR</p>
        <button onClick={handlePayClick}>PAY</button>
      </div>
    </div>
  );
}
export default CartMobile;
