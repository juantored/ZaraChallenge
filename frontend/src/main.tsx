import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ListMobiles from "./pages/ListMobiles.tsx";
import PDPMobile from "./pages/PDPMobile.tsx";
import CartMobile from "./pages/CartMobiles.tsx";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "mobiles", element: <ListMobiles /> },
      { path: "mobiles/:id", element: <PDPMobile /> },
      { path: "cart", element: <CartMobile /> },
      { path: "*", element: <ListMobiles /> },
      { index: true, element: <ListMobiles /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
