import React from "react";

let  indexTotal = 0
const lista = {}
function total (){
    function resetTotal (){
        indexTotal  = 0
    }

    function updateCantidades(index, cantidad) {
        if (cantidad > 0) {
            lista[index] = cantidad
        } else {
            delete lista[index]
        }
    }
    function addTotal(precio){
        indexTotal = indexTotal +  parseInt(precio)

    }

    function ResTotal(precio){
        indexTotal = indexTotal- parseInt(precio)
    }

    function getCantidades(){
        return lista
    }
    function getIndexTotal(){
      return indexTotal
    }
    return{
        addTotal,ResTotal,resetTotal,getCantidades,getIndexTotal,updateCantidades
    }
}

export default total
