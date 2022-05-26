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


  const removeWishList = (id) => {
    Swal.fire({
      title: "¿Está seguro de quitar el producto?",
      showDenyButton: true,
      confirmButtonText: "S[i",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        api.remove("/api/wishlist/remove-from-wish/" + id).then(() => {
          Swal.fire({
            title: "Exíto",
            text: "Producto eliminado de lista de deseos.",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div>
      <CHeader />
      <div className="details-page-details-content">
        <div className="details-section-on-page-details-content">
          <CentralItem id={id} />
          <div>
            <ContenedorItemsRec
              removeWishList={removeWishList}
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
