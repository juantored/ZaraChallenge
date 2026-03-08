import { ScrollRestoration, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        {/* ScrollRestoration Componente que pone el scroll arriba, necesario crear las rutas con createBrowserRouter */}
        <ScrollRestoration />
        <Header />
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
}

export default App;
