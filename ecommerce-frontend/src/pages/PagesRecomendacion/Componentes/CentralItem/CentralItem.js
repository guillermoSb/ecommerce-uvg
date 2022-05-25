import React, { useState, useEffect} from 'react'
import { FaQuestion } from 'react-icons/fa';
import "./central-item-style.scss"
import axios from 'axios';

export default class CentralItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            product: {
                ID: "V8763NF57CYZB3fKHg1u",
                imagen: "https://www.vuescript.com/wp-content/uploads/2018/11/Show-Loader-During-Image-Loading-vue-load-image.png",
                descripcion: "descripcion",
                fecha: {
                    "seconds": 0,
                    "nanoseconds": 0
                },
                precio: 0,
                categoria: "categoria",
                calificacion: 0,
                cant_ventas: 0,
                nombre: "nombre",
                marca: "marca"
            }
        };
      }
    componentDidMount(){
        axios.get(`http://localhost:3000/api/reccomendacion/get-item-by-id/${this.props.id}`)
        .then((res) => {
            console.log(res)
            if(res.data.producto) {
                console.log(res.data.producto)
                this.setState({product: res.data.producto }) }
    })
    }
      render(){
        return (
            <div className='centrarl-card-item-wrapper'>
                {(this.state.product && this.state.product!==0 ) && (
                <div> 
                    <div className='card-item-image-spaceArt' style={(this.state.product.imagen) ? { backgroundImage: `url(${this.state.product.imagen})`, backgroundSize: 'cover' } : {}}> </div>
                    <div className='info-into-central-card-item'> 
                        <p className='no-style-p'>Q{this.state.product.precio} </p>
                        <p className='no-style-p'>{this.state.product.nombre}</p>
                        <p className='no-style-p mini-info-gray-into-central-item'>{this.state.product.categoria} |  {this.state.product.marca}</p>
                        <p className='no-style-p description-into-info-central-card-item'>{this.state.product.descripcion}</p>
                    </div>
                    <div className='buttons-section-into-central-card-item'> 


                    </div>
                </div>)}
                {!this.state.product && (<div> Loading...</div>)}
            </div>
        )
        }
}

