import type { MobileCart } from "../../types/Mobile";

type CardCartProps = {
  cart: MobileCart;
  index: number;
  onClickDelete?: (index: number) => void;
};

function CartCard({ cart, index, onClickDelete }: CardCartProps) {
  return (
    <div className="cart">
      <div className="cartImage">
        {/* Imagen del móvil */}
        <img src={cart.imageUrl} alt={cart.name} />
      </div>

      <div className="cartInfo">
        <div>
          {/* Marca */}
          <p className="name">{cart.name}</p>

          {/* Capacidad y color */}
          <p className="capacity">
            {cart.capacity} | {cart.color}{" "}
          </p>

          {/* Precio */}
          <p className="price">{cart.price} EUR</p>
        </div>

        <div className="cartButton">
          <button onClick={() => onClickDelete?.(index)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}
export default CartCard;
