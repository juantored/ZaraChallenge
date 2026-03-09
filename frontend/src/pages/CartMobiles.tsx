import { useNavigate } from "react-router-dom";
import CartCard from "../components/Cart/CartCard";
import { useCart } from "../context/CartContext";
import "../styles/pages/CartMobiles.scss";
import { useMediaQuery } from "react-responsive";

function CartMobile() {
  const { cart } = useCart();
  const { removeToCart } = useCart();
  const { totalPrice } = useCart();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 480 });

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
    <div className="sectionCart">
      <p className="cartNumber">CART ({cart.length})</p>

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
        {isMobile ? (
          <>
            {cart.length !== 0 && (
              <div className="totalPay">
                <p className="total">TOTAL</p>
                <p className="price">{totalPrice} EUR</p>
              </div>
            )}

            <div className="botones">
              <div className="back">
                <button
                  className="continue"
                  onClick={handleContinueShoppingClick}
                >
                  CONTINUE SHOPPING
                </button>
              </div>

              {cart.length !== 0 && (
                <div className="shopping">
                  <button className="pay" onClick={handlePayClick}>
                    PAY
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div>
              <button
                className="continue"
                onClick={handleContinueShoppingClick}
              >
                CONTINUE SHOPPING
              </button>
            </div>

            {cart.length !== 0 && (
              <div className="shopping">
                <div className="totalPay">
                  <p className="total">TOTAL</p>
                  <p className="price">{totalPrice} EUR</p>
                </div>
                <button className="pay" onClick={handlePayClick}>
                  PAY
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default CartMobile;
