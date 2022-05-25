import React from 'react'
import {useParams} from "react-router-dom";
import CHeader from '../../../components/CHeader'
import './pagina-detalles-rec-styles.scss'
import CentralItem from '../Componentes/CentralItem/CentralItem'
import Recomendaciones from './Recomendaciones';
import ContenedorItemsRec from '../Componentes/ContenedorItemsRec';
const PaginaDetallesRec = (props) => {
    const { id } = useParams()
    return (
        <div>
            <CHeader />
            <div className='details-page-details-content'>
                <div className='details-section-on-page-details-content'>
                    <CentralItem id={id}/>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaginaDetallesRec