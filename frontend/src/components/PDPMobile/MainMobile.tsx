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
  name: string;
  basePrice: number;
  storageOptions: MobileInfoStorageOption[];
  colorOptions: MobileInfoColorOption[];
};

function MainMobile({
  name,
  basePrice,
  storageOptions,
  colorOptions,
}: MainMobileProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [mobileUrl, setMobileUrl] = useState("");

  const [price, setPrice] = useState(0);
  const [existePrecio, setExistePrecio] = useState(false);
  const [storageActive, setStorageActive] = useState(-1);
  const [capacity, setCapacity] = useState("");

  const [color, setColor] = useState("");
  const [colorActive, setColorActive] = useState(-1);
  const [originColor, setOriginColor] = useState("");

  useEffect(() => {
    defaultValues();

    const colorOption = colorOptions.at(0);
    if (colorOption) {
      setMobileUrl(colorOption.imageUrl);
    }

    setPrice(basePrice);
  }, [name, basePrice, storageOptions, colorOptions]);

  const defaultValues = () => {
    setMobileUrl("");
    setExistePrecio(false);
    setColor("");
    setOriginColor("");
    setStorageActive(-1);
    setColorActive(-1);
    setCapacity("");
  };

  const handleStorageMobileClick = (
    price: number,
    capacity: string,
    index: number,
  ) => {
    setPrice(price);
    setExistePrecio(true);
    setCapacity(capacity);
    setStorageActive(index);

    if (!color) {
      const colorOption = colorOptions.at(0);
      if (colorOption) {
        setColor(colorOption.name);
        setColorActive(0);
      }
    }
  };

  const handleColorMobileClick = (
    name: string,
    imageUrl: string,
    index: number,
  ) => {
    setColor(name);
    setOriginColor(name);
    setMobileUrl(imageUrl);
    setColorActive(index);

    if (!existePrecio) {
      const storageOption = storageOptions.at(0);
      if (storageOption) {
        setPrice(price);
        setExistePrecio(true);
        setCapacity(storageOption.capacity);
        setStorageActive(0);
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
      name: name,
      capacity: capacity,
      price: price,
      color: color,
      imageUrl: mobileUrl,
    };

    addToCart(newMobileCart);

    navigate(`/cart`);
  };

  return (
    <>
      <div className="mainMobile">
        <div className="imageMobile">
          {mobileUrl && <img src={mobileUrl} alt={name} />}
        </div>
        <div className="configurationMobile">
          <div className="sectionInfoMobile">
            <p className="name">{name.toUpperCase()}</p>
            {existePrecio && <p className="price">{price} EUR</p>}
            {!existePrecio && <p className="price">FROM {price} EUR</p>}
          </div>

          <div className="sectionStorage">
            <p className="questionStorage">
              STORAGE ¿HOW MUCH SPACE DO YOU NEED?
            </p>
            <div className="capacity">
              {storageOptions.map((option, index) => (
                <StorageMobile
                  key={index}
                  storageOption={option}
                  onClick={handleStorageMobileClick}
                  isActive={storageActive === index}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="sectionColor">
            <p className="questionColor">COLOR. PICK YOUR FAVOURITE.</p>
            <div className="color">
              {colorOptions.map((color, index) => (
                <ColorMobile
                  key={index}
                  colorOption={color}
                  onClick={handleColorMobileClick}
                  onHover={handleColorMobileHover}
                  isActive={colorActive === index}
                  index={index}
                />
              ))}
            </div>
            <p className="colorSelected">{color}</p>
          </div>

          <button disabled={!existePrecio || !color} onClick={handleAddClick}>
            AÑADIR
          </button>
        </div>
      </div>
    </>
  );
}
export default MainMobile;
