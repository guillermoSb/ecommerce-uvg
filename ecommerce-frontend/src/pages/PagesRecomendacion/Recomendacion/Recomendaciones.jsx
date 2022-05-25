import React, { useState } from "react";
import ContenedorItemsRec from "../Componentes/ContenedorItemsRec";
import BigItemDescripcion from "../Componentes/BigItemDescripcion";
import SpectsRec from "../Componentes/SpectsRec";
import "../recomendacion.sass";

const items = {
  thisid: "2",
  thisname: "jajaja",
  thisimage: "adsfasdf",
  thisdesc1: "adfasdfasd",
  thisdesc2: "adfasdfasd",
  thisdesc3: "adfasdfasd",
  thisdesc4: "adfasdfasd",
  thisdesc5: "adfasdfasd",
};

const Recomendaciones = () => {

  const [objectsfromdb, setObjectsfromdb] = useState([]);

  return (
    <div>
      <div className="RecomendacionesPageDescription">
        <div>
          <BigItemDescripcion
            id={items.thisid}
            name={items.thisname}
            image={items.thisimage}
            descripcion1={items.thisdesc1}
            descripcion2={items.thisdesc2}
          />
        </div>
        <div>
          <SpectsRec
            id={items.thisid}
            spec1={items.thisdesc1}
            spec2={items.thisdesc2}
            spec3={items.thisdesc3}
            spec4={items.thisdesc4}
            spec5={items.thisdesc5}
          />
        </div>
      </div>
      <ContenedorItemsRec title="Productos Similares" items={objectsfromdb} />;
    </div>
  );
};

export default Recomendaciones;
