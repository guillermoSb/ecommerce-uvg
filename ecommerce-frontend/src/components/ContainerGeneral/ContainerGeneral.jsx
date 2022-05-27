import React from 'react';
import '../Carrito/Carrito.scss';
import total from './total'
import '../ProductContainer/ProductContainer';
import ProductContainer from '../ProductContainer/ProductContainer';
import Boton from "../Boton/Boton";
import { useState } from 'react';


function ContainerGeneral({listaproductos, id}) {
    const [total1 ,setTotal ] = useState(0)
    const {getIndexTotal,getCantidades,resetTotal,ResTotal,addTotal,updateCantidades} = total()

    function llamarTotal (){
        setTotal(getIndexTotal())
    }

    function generarLista() {
        let lista = getCantidades()

        let lista2 = listaproductos
        let lista3 = []
        for (const [key, value] of Object.entries(lista)) {
            for (let i = 0; i < lista2.length; i++) {
                if (key === lista2[i].itemcode) {
                    lista3.push({
                        cantidad: value,
                        imagen: lista2[i].imagen,
                        itemcode: lista2[i].itemcode,
                        nombre: lista2[i].nombre,
                        precio: lista2[i].precio,
                    })
                }
            }
        }
        return lista3


    }

    return (
        <div className='Container' onClick = {llamarTotal}>
            <div className='descrip'>
                <ul className='grid-columns'>
                    <h2 style={{marginTop: 40}}className='texto'>Carrito</h2>
                </ul>
            </div>
            <div className='display-productos'>
                {listaproductos.map((Number) =>(
                    <ProductContainer test={Number}/>
                ))}
                <div className="TotalContainer">
                    <h1 className='total' style={{textAlign:"center"}}>Total:
                    {total1}

                    </h1>

                </div>
            </div>
            <Boton arr={generarLista()} id={id}/>
        </div>
    );
}

export default ContainerGeneral;
