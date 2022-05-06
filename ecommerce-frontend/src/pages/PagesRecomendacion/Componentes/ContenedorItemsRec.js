import React from 'react'
import ItemsRec from './ItemsRec'

const ContenedorItemsRec = () => {
    const items = [
        {
            id: 10, 
            image: "imagen",
            name: "IPAD" 
        },
        {
            id: 11, 
            image: "imagen",
            name: "IPOD" 
        }
    ]

  return (
    <div>
        <ul>
            {items.map((item)=>{
                return <ItemsRec itemInfo = {item}/>
            })
            }
        </ul>
    </div>
  )
}

export default ContenedorItemsRec