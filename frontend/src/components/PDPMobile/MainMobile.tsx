import { useEffect, useState } from "react";
import ColorMobile from "./ColorMobile";
import StorageMobile from "./StorageMobile";
import type {
  MobileInfoStorageOption,
  MobileInfoColorOption,
  MobileCart,
} from "../../types/Mobile";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

type MainMobileProps = {
  brand: string;
  basePrice: number;
  storageOptions: MobileInfoStorageOption[];
  colorOptions: MobileInfoColorOption[];
};

function MainMobile({
  brand,
  basePrice,
  storageOptions,
  colorOptions,
}: MainMobileProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [mobileUrl, setMobileUrl] = useState("");

  const [price, setPrice] = useState(0);
  const [existePrecio, setExistePrecio] = useState(false);

  const [color, setColor] = useState("");
  const [originColor, setOriginColor] = useState("");

  useEffect(() => {
    defaultValues();

    const colorOption = colorOptions.at(0);
    if (colorOption) {
      setMobileUrl(colorOption.imageUrl);
    }

    setPrice(basePrice);
  }, [brand, basePrice, storageOptions, colorOptions]);

  const defaultValues = () => {
    setMobileUrl("");
    setExistePrecio(false);
    setColor("");
    setOriginColor("");
  };

  const handleStorageMobileClick = (price: number) => {
    setPrice(price);
    setExistePrecio(true);

    if (!color) {
      const colorOption = colorOptions.at(0);
      if (colorOption) {
        setColor(colorOption.name);
      }
    }
  };

  const handleColorMobileClick = (name: string, imageUrl: string) => {
    setColor(name);
    setOriginColor(name);
    setMobileUrl(imageUrl);

    if (!existePrecio) {
      const storageOption = storageOptions.at(0);
      if (storageOption) {
        setPrice(price);
        setExistePrecio(true);
      }
    }
  };

  const handleColorMobileHover = (hover: boolean, name: string) => {
    if (hover) {
      setOriginColor(color);
      setColor(name);
    } else {
      setColor(originColor);
    }
  };

  const handleAddClick = () => {
    const newMobileCart: MobileCart = {
      brand: brand,
      capacity: "",
      price: price,
      color: color,
      imageUrl: mobileUrl,
    };

    addToCart(newMobileCart);

    navigate(`/cart`);
  };

  return (
    <>
      <div>
        <div className="imageMobile">
          {mobileUrl && <img src={mobileUrl} alt={brand} />}
        </div>
        <div className="configurationMobile">
          <h3>{brand}</h3>
          {existePrecio && <h4>{price} EUR</h4>}
          {!existePrecio && <h4>FROM {price} EUR</h4>}

          <h5>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</h5>
          {storageOptions.map((option, index) => (
            <StorageMobile
              key={index}
              storageOption={option}
              onClick={handleStorageMobileClick}
            />
          ))}

          <h5>COLOR. PICK YOUR FAVOURITE.</h5>
          {colorOptions.map((color, index) => (
            <ColorMobile
              key={index}
              colorOption={color}
              onClick={handleColorMobileClick}
              onHover={handleColorMobileHover}
            />
          ))}
          <h6>{color}</h6>

          <button disabled={!existePrecio || !color} onClick={handleAddClick}>
            AÑADIR
          </button>
        </div>
      </div>
    </>
  );
}
export default MainMobile;
