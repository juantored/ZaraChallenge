import type { Mobile } from "../types/Mobile";

type CardMobileProps = {
  mobile: Mobile;
  onClick?: (id: string) => void;
};

function CardMobile({ mobile, onClick }: CardMobileProps) {
  return (
    <div
      onClick={() => onClick?.(mobile.id)}
      // efecto visual al hover opcional
      onMouseEnter={(e) =>
        onClick && (e.currentTarget.style.transform = "scale(1.02)")
      }
      onMouseLeave={(e) =>
        onClick && (e.currentTarget.style.transform = "scale(1)")
      }
    >
      {/* Imagen del móvil */}
      <img src={mobile.imageUrl} alt={mobile.name} />

      {/* Marca */}
      <p>{mobile.brand}</p>

      {/* Nombre */}
      <h3>{mobile.name}</h3>

      {/* Precio */}
      <p>{mobile.basePrice} EUR</p>
    </div>
  );
}
export default CardMobile;
