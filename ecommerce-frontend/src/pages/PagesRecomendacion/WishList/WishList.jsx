import React, { useEffect, useState } from "react";
import ContenedorItemsRec from "../Componentes/ContenedorItemsRec";
import { api } from "../../../api";
import Swal from "sweetalert2";
import CHeader from "../../../components/CHeader";

const WishList = () => {
  const [objectsfromdb, setObjectsfromdb] = useState([]);

  const getData = () => {
    api
      .get("/api/wishlist/by-user/" + localStorage.getItem("uid"))
      .then((res) => {
        setObjectsfromdb(res.data.wishlist);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const removeWishList = (id) => {
    Swal.fire({
      title: "¿Está seguro de quitar el producto?",
      showDenyButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        api.remove("/api/wishlist/remove-from-wish/" + id).then(() => {
          Swal.fire({
            title: "Exíto",
            text: "Producto eliminado de lista de deseos.",
            icon: "success",
          });
          getData();
        });
      }
    });
  };

  return (
    <React.Fragment>
      <CHeader />
      <div
        className="wishlistPage"
        //style={{backgroundColor: 'rgb(93, 116, 137)'}}
      >
        {objectsfromdb.length > 0 ? (
          <ContenedorItemsRec
            removeWishList={removeWishList}
            title="Wish List"
            items={objectsfromdb}
          />
        ) : (
          <p style={{ margin: "20px" }}>
            Agrega productos a tu lista de deseos:{" "}
            <a href="/Catalogo">catálogo de productos</a>{" "}
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default WishList;
