import React from "react";
import ItemsRec from "./ItemsRec";
import "../recomendacion.sass";

// reemplaza los divs por los returns de items.map

const ContenedorItemsRec = ({ title }) => {
  const items = [
    {
      id: 10,
      image: "imagen",
      name: "IPAD",
    },
    {
      id: 11,
      image: "imagen",
      name: "IPOD",
    },
  ];

  return (
    <div className="contenedorItemsRecDiv">
      <h2>{title}</h2>
      <ul className="contenedorItemsRec">
        {/* {items.map((item)=>{
                return <div className="boxRecItems"><ItemsRec itemInfo = {item}/></div> 
            })
            } */}
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
        <div className="boxRecItems">1</div>
      </ul>
    </div>
  );
};

export default ContenedorItemsRec;
