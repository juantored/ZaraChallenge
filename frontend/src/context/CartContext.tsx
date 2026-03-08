import { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { MobileCart } from "../types/Mobile";

type CartContextType = {
  cart: MobileCart[];
  totalPrice: number;
  addToCart: (mobile: MobileCart) => void;
  removeToCart: (index: number) => void;
};

// Creamos el contexto que se usara de forma global
const CartContext = createContext<CartContextType | null>(null);

// Provider que comparte el estado con toda la aplicacion de cart
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<MobileCart[]>(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  // Actualizamos el localStorage cada vez que lo cambiamos
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Actualizamos el contenido de cart
  const addToCart = (mobile: MobileCart) => {
    setCart((prev) => [...prev, mobile]);
  };

  // Quitamos el elemento de cart a partir del indice
  const removeToCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const totalPrice = useMemo(
    () => cart.reduce((total, mobile) => total + mobile.price, 0),
    [cart],
  );

  // Todos los hijos que esten debajo de CartProvider podrán acceder a cart
  return (
    <CartContext.Provider value={{ cart, totalPrice, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Creamos un hook para evitar usar el useContext siempre que se quiera importar
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error al recuperar el contexto de CartProvider");
  }
  return context;
}
