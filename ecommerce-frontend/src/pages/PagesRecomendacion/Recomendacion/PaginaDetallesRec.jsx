import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from "react-router-dom";
import CHeader from '../../../components/CHeader'
import './pagina-detalles-rec-styles.scss'
import CentralItem from '../Componentes/CentralItem/CentralItem'
import ContenedorItemsRec from '../Componentes/ContenedorItemsRec';
import { api } from "../../../api";
import Swal from "sweetalert2";

const PaginaDetallesRec = (props) => {
    const { id } = useParams()
    const location = useLocation();

    const [myProudctID, setProductID] = useState(id)
    const [objectsfromdb, setObjectsfromdb] = useState([]);
    const [typeOfRec, setTypeOfRec] = useState('category')
    useEffect(()=>{
        api.get(`/api/reccomendacion${(props.tipo_de_recomendacion)}/${id}`)
        .then((res)=> setObjectsfromdb(res.data.productos))
        setProductID(id)

        
    }, [location])

  const addWish = (imagen, precio, itemcode, nombre, cantidad_disponible) => {
    api
      .post("/api/wishlist/save-as-wish", {
        obj: {
          usercode: localStorage.getItem("uid"),
          itemcode,
          producto: { imagen, precio, itemcode, nombre, cantidad_disponible },
        },
      })
      .then((res) => {
        Swal.fire(res.data);
      });
  }

  return (
    <div>
      <CHeader />
      <div className="details-page-details-content">
        <div className="details-section-on-page-details-content">
          <CentralItem id={id} removeWishList={addWish}/>
          <div>
            <ContenedorItemsRec
              style={{marginRight: '3%'}}
              removeWishList={addWish}
              title="Sugerencias"
              items={objectsfromdb}
              limit="4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaDetallesRec;
