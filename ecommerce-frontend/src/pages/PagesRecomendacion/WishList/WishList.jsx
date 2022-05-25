import React, { useEffect, useState } from "react";
import ContenedorItemsRec from "../Componentes/ContenedorItemsRec";
import { api } from "../../../api";
import Swal from "sweetalert2"; 

const WishList = () => {
  const [objectsfromdb, setObjectsfromdb] = useState([]);

  useEffect(() => {
    api
      .get("/api/wishlist/by-user/" + localStorage.getItem("token"))
      .then((res) => {
        setObjectsfromdb(res.data.wishlist);
      });
  }, []);

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
    <div className="wishlistPage">
      <ContenedorItemsRec removeWishList={removeWishList} title="Wish List" items={objectsfromdb} />
    </div>
  );
};

export default WishList;
