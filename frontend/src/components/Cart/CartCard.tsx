import type { MobileCart } from "../../types/Mobile";

type CardCartProps = {
  cart: MobileCart;
  index: number;
  onClickDelete?: (index: number) => void;
};

function CartCard({ cart, index, onClickDelete }: CardCartProps) {
  return (
    <div>
      <div className="cartImage">
        {/* Imagen del móvil */}
        <img src={cart.imageUrl} alt={cart.brand} />
      </div>

      <div className="cartInfo">
        {/* Marca */}
        <p>{cart.brand}</p>

        {/* Capacidad y color */}
        <p>
          {cart.capacity} | {cart.color}{" "}
        </p>

        {/* Precio */}
        <p>{cart.price} EUR</p>
      </div>

      <div className="cartButton">
        <button onClick={() => onClickDelete?.(index)}>Eliminar</button>
      </div>
    </div>
  );
}
export default CartCard;
