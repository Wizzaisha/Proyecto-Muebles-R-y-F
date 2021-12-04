import React from "react";
import Conocemas from "./Conocemas";
import { useState } from "react";
import axios from "axios";
import { Carousel, CarouselItem } from "react-bootstrap";
import _ from "lodash";


function Ofertas(){
    
    // Obtencion de los datos desde axios
    const [lista, setLista] = useState([]);

    
    // Axios para la obtencion de datos
    axios.get("http://localhost:5000/productos")
    .then(function(res){
        setLista(res.data)
    })
    .catch(function (err){
        console.log(err)
    });

    return (

        

        <section id="ofertas">

            <Carousel>

                {lista.map((elemento, index) => {
                    return (
                        _.lowerCase(elemento.oferta) === "si" && 
                        <CarouselItem key={index} id="ofertas-carousel" className="carousel slide">
                            <img
                                className="carousel-image"
                                alt="First slide"
                                src={elemento.imagen}
                            ></img>
                            <Carousel.Caption>
                                <h2 className="ofertas-title">Aproveche esta oferta de {elemento.nombre}</h2>
                                <p className="ofertas-text">Por tan solo: $ {elemento.precio} COP</p>

                            </Carousel.Caption>
                        </CarouselItem>
            

                    );
                })}
            </Carousel>
                    {/* {lista.map((elemento, index) => {
                        return (
                        _.lowerCase(elemento.oferta) === "si" && 
                            <div className="carousel-item" >
                                <img  className="carousel-image" alt="mueble1"></img>
                                <h2 className="ofertas-title"></h2>
                                <p className="ofertas-text"></p>
                            </div>
                        );
                    })} */}
            
            <Conocemas />
        </section>    
    );
    

}


export default Ofertas;