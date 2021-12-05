import React from "react";
import { useState } from "react";
import axios from "axios";

function Tarjetasproductos(props){

    const [producto, setDetalleProducto] = useState({})
    
    function detalleProducto(){
        axios.get("http://localhost:5000/productos/" + props.id)
        .then(function(res){
            setDetalleProducto(res.data)
            console.log(res.data);
        })
        .catch(function (err){
            console.log(err)
        });
    }



    return (
        <div className="col-lg-4 cards-div">
            <div className="card catalogo-cards">
                <img src={props.imagen} className="card-img-top image-muebles" alt="imagen"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <p className="card-text">$ {props.precio} </p>
                    <div className="row">
                        <div className="col-6">
                            <button type="submit" className="btn btn-outline-light comprar-button">COMPRAR</button>
                        </div>
                        <div className="col-6">
                            <button type="submit" onClick={detalleProducto} className="btn btn-outline-light detalles-button">DETALLES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Tarjetasproductos;