import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import ContenedorItemsRec from "./pages/PagesRecomendacion/Componentes/ContenedorItemsRec";
import reportWebVitals from "../src/reportWebVitals";

// aqui podes reemplazar el contenedor por app y estructurarla bien bien, solo lo reemplace para probar
// la wishlist

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContenedorItemsRec title="WhishList" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
