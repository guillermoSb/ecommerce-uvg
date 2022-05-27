import React, {useEffect, useState} from 'react';
import './Carrito.scss';
import ContainerGeneral from "../ContainerGeneral/ContainerGeneral";
import firebase from "../../firebase";
import CHeader from '../CHeader';
import ContenedorItemsRec from "../../pages/PagesRecomendacion/Componentes/ContenedorItemsRec";
import {api} from "../../api";
import Swal from "sweetalert2";


function useInfo() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('carrito')
            .onSnapshot((snapshot) => {
                const newInfo = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setInfo(newInfo);
            });
    }, []);

    return info;

}


function Carrito() {



    const info = useInfo()

    const actual = info.filter(item => item.id === localStorage.getItem("uid"))

    console.log(actual)

    let itemsInCarrito

    if (actual.length !== 0) {
        itemsInCarrito = actual.map((item) => <ContainerGeneral listaproductos={item.items} id={item.id}/>)
    }else {
        itemsInCarrito =<div className="noincarrito"><h1 style={{color:"#FFFFFF"}}>No hay productos en el carrito</h1><a href="/Catalogo"> ⮜ Regresar a la tienda</a></div>
    }

    //Strange Recomendation things
    const [objectsfromdb, setObjectsfromdb] = useState([]);
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
        <>
            <CHeader/>
            {itemsInCarrito}
            <ContenedorItemsRec
                style={{marginRight: '3%'}}
                removeWishList={addWish}
                title="Sugerencias"
                items={objectsfromdb}
                limit="4"
            />
        </>
    );
}

export default Carrito;
