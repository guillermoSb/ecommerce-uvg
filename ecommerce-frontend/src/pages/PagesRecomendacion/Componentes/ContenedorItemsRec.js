import React from "react";
import ItemsRec from "./ItemsRec";
import "../recomendacion.sass";

// reemplaza los divs por los returns de items.map
// items deberia estar afuera del componente para poder reutilizarlo

const ContenedorItemsRec = ({ title }) => {
  const items = [
    {
      id: 10,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPAD",
    },
    {
      id: 11,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone",
    },
    {
      id: 13,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone3",
    },
    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },

    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },

    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },

    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },

    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },

    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },

    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },

    {
      id: 14,
      image:
        "https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064",
      name: "IPhone4",
    },
  ];

  return (
    <div className="contenedorItemsRecDiv">
      <h2>{title}</h2>
      <ul className="contenedorItemsRec">
        {items.map((item) => {
          return (
            <div className="boxRecItems">
              <ItemsRec id={item.id} name={item.name} image={item.image} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ContenedorItemsRec;
