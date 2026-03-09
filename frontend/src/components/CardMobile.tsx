import type { Mobile } from "../types/Mobile";

type CardMobileProps = {
  mobile: Mobile;
  onClick?: (id: string) => void;
};

function CardMobile({ mobile, onClick }: CardMobileProps) {
  return (
    <div className="cardMobile" onClick={() => onClick?.(mobile.id)}>
      {/* Imagen del móvil */}
      <div className="imageMobile">
        <img src={mobile.imageUrl} alt={mobile.name} />
      </div>

      <div className="descriptionMobile">
        <div className="typeMobile">
          {/* Marca */}
          <p className="brand">{mobile.brand}</p>
          {/* Nombre */}
          <p className="name">{mobile.name}</p>
        </div>
        <div className="price">
          {/* Precio */}
          <p>{mobile.basePrice} EUR</p>
        </div>
      </div>
    </div>
  );
}
export default CardMobile;
