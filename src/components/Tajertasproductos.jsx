import React from "react";

function Tarjetasproductos(props){
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
                            <button type="button" className="btn btn-outline-light comprar-button">COMPRAR</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-outline-light detalles-button">DETALLES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Tarjetasproductos;