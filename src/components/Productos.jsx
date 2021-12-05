import React from "react";
import { useState } from "react";
import Tarjetasproductos from "./Tajertasproductos";
import axios from "axios";

function Productos(props){


    const [lista, setLista] = useState([]);


    axios.get("http://localhost:5000/productos")
    .then(function(res){
        setLista(res.data)
    })
    .catch(function (err){
        console.log(err)
    });

    return (
        <section id="catalogo">
            <div className="container-fluid">
                <div className="row">

                    {lista.map((producto, index)=>{
                        return (
                            <Tarjetasproductos 
                                key={index}
                                id={producto._id}
                                nombre={producto.nombre}
                                imagen={producto.imagen}
                                descripcion={producto.descripcion}
                                categoria={producto.categoria}
                                precio={producto.precio}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Productos;