import React, {useEffect, useState} from 'react';
import './Carrito.scss';
import ContainerGeneral from "../ContainerGeneral/ContainerGeneral";
import firebase from "../../firebase";
import Header from '../Header/Header';


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

    const actual = info.filter(item => item.id === 'ZsuFnGu76TWPQus6xGce')

    console.log(actual)

    let itemsInCarrito

    if (actual.length !== 0) {
        itemsInCarrito = actual.map((item) => <ContainerGeneral listaproductos={item.items} id={item.id}/>)
    }else {
        itemsInCarrito =<div className="noincarrito"><h1 style={{color:"#FFFFFF"}}>No hay productos en el carrito</h1><button href="/signup"> ⮜ Regresar a la tienda</button></div>
    }


    return (
        <>
            {itemsInCarrito}
        </>
    );
}

export default Carrito;
