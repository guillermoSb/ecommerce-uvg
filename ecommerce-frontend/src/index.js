import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import ContenedorItemsRec from "./pages/PagesRecomendacion/Componentes/ContenedorItemsRec";
import reportWebVitals from "../src/reportWebVitals";
import BigItemDescripcion from "./pages/PagesRecomendacion/Componentes/BigItemDescripcion";
import SpectsRec from "./pages/PagesRecomendacion/Componentes/SpectsRec";

// aqui podes reemplazar el contenedor por app y estructurarla bien bien, solo lo reemplace para probar
// la wishlist

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContenedorItemsRec title="WishList" />
    <ContenedorItemsRec title="Productos Similares" />
    <BigItemDescripcion
      name="Iphone 11"
      descripcion1="Silver"
      descripcion2="128GB"
      image="https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064"
    />
    <SpectsRec
      spec1="128bg"
      spec2="platinum"
      spec3="32gb"
      spec4="Jajaja"
      spec5="jijijiji"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
