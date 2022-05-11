import React from "react";

const ItemsRec = (props) => {
  const { id, name, image } = props;
  return (
    <div className="itemRecContainer">
      <img />
      <div className="itemRecNameAndCart">
        <p>{name}</p>
        <img src="https://cdn.shopify.com/s/files/1/0101/2522/products/Sin_titulo_2_afb20beb-4be9-42a5-9719-61eb6a30fa04_1200x.jpg?v=1649972064" />
      </div>
    </div>
  );
};

export default ItemsRec;
