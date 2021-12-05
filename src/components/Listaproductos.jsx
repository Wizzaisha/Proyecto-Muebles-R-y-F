import React, { useEffect } from "react";
import { useState } from "react";
import Elementoslita from "./Elementoslista";
import axios from "axios";


function Listaproductos(props){

    // Obtencion de los datos desde axios
    const [lista, setLista] = useState([]);

    // Añadir
    const [nuevoItem, setNuevoItem] = useState({
        nombre: "",
        imagen: "",
        categoria: "",
        precio: 0,
        descripcion: "",
        oferta: "",
    });

    // Modificar

    const [modificarActivado, setModificar] = useState(false);
    const [datosMoficar, setDatosMoficiar] = useState({
        nombre: "",
        imagen: "",
        categoria: "",
        precio: 0,
        descripcion: "",
        oferta: "",
    })


    useEffect(() => {
        // Axios para la obtencion de datos
        axios({
            method: "get",
            url: "http://localhost:5000/listaproductos",
            headers: {"x-access-token": props.tokenUsuario}
        })
        .then(function(res){
            setLista(res.data)
        })
        .catch(function (err){
            console.log(err)
        });


    });

    // Funciones para modificar

    function modificarElemento(_id){
        console.log("El elemento ha sido activado para modificar!.")
        setModificar(true)
        console.log(_id)
        const elemento = lista.find(function(element){
            return element._id === _id
        })

        console.log(elemento);

        setDatosMoficiar({
            id: elemento._id,
            nombre: elemento.nombre,
            imagen: elemento.imagen,
            categoria: elemento.categoria,
            precio: elemento.precio,
            descripcion: elemento.descripcion,
            oferta: elemento.oferta
        });

    }
    

    // Funciones para añadir! 
    //Añadir
    function añadirElemento(event){

        if (modificarActivado === false){
            console.log("El elemento se ha añadido!.")

            axios.post("http://localhost:5000/listaproductos/add", nuevoItem)
            .then(function(res){
                console.log(res)
            })
            .catch(function (err){
                console.log(err)
            });
            setNuevoItem({
                nombre: "",
                imagen:"",
                categoria: "",
                precio: 0,
                descripcion: "",
                oferta: "",    
            })    
        } else {
            console.log("El elemento se ha modificado con exito!.")

            axios.post("http://localhost:5000/listaproductos/actualizar/"+ datosMoficar.id, datosMoficar)
            .then(function(res){
                console.log(res)
            })
            .catch(function (err){
                console.log(err)
            });
            setNuevoItem({
                nombre: "",
                imagen:"",
                categoria: "",
                precio: 0,
                descripcion: "",
                oferta: "",    
            });    
            setModificar(false);
        }
        
        
        event.preventDefault();
    }
    function manejoInputs(event){

        if (modificarActivado === false) {
            const {name, value} = event.target;

            setNuevoItem((prevItem) => {
                return {
                    ...prevItem,
                    [name]: value
                };
            });
        } else {
            const {name, value} = event.target;
            setDatosMoficiar((prevItem) => {
                return {
                    ...prevItem,
                    [name]: value
                }
            });        
        }
    }

    // Borrar
    function borrarElemento(_id){
        console.log("El elemento ha sido borrado!.")
        console.log(_id);

        axios.delete("http://localhost:5000/listaproductos/borrar/"+ _id)
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    return (
        <section>
            <form id="controlProductos">
                <div className="controlElementos">
                    <label className="form-label">Nombre</label>
                    <input 
                        onChange={manejoInputs}
                        type="text"
                        name="nombre"
                        value={modificarActivado ? datosMoficar.nombre : nuevoItem.nombre} 
                        className="form-control"
                        
                    ></input>
                </div>
                <div className="controlElementos">
                    <label className="form-label">Categoria</label>
                    <input 
                        onChange={manejoInputs} 
                        name="categoria"
                        value={modificarActivado ? datosMoficar.categoria : nuevoItem.categoria}
                        className="form-control"
                    ></input>
                </div>
                <div className="controlElementos">
                    <label className="form-label">Precio</label>
                    <input 
                        onChange={manejoInputs} 
                        name="precio"
                        value={modificarActivado ? datosMoficar.precio : nuevoItem.precio}
                        className="form-control"
                        ></input>
                </div>
                <div className="controlElementos">
                    <label className="form-label">URL imagen</label>
                    <textarea 
                        onChange={manejoInputs}
                        name="imagen"
                        value={modificarActivado ? datosMoficar.imagen : nuevoItem.imagen} 
                        row="2" 
                        className="form-control"
                    ></textarea>
                </div>

                <div className="controlElementos">
                    <label className="form-label">Descripción</label>
                    <textarea 
                        onChange={manejoInputs}
                        name="descripcion"
                        value={modificarActivado ? datosMoficar.descripcion : nuevoItem.descripcion} 
                        row="4" 
                        className="form-control"
                    ></textarea>
                </div>
                <div className="controlElementos">
                    <label className="form-label">Oferta</label>
                    <input 
                        onChange={manejoInputs}
                        name="oferta"
                        value={modificarActivado ? datosMoficar.oferta : nuevoItem.oferta} 
                        className="form-control"
                    ></input>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-dark-outline controlbutton"
                    onClick={añadirElemento}
                    >Agregar</button>
            </form>

            <div id="listaproductos">
                <table className="table">
                    <thead>
                        <tr className="titulo-tabla">
                            <th scope="col" >ID</th>
                            <th scope="col" >Imagen</th>
                            <th scope="col" >Nombre</th>
                            <th scope="col" >Categoria</th>
                            <th scope="col" >Precio</th>
                            <th scope="col" >Descripcion</th>
                            <th scope="col" >Oferta</th>
                            <th scope="col" >Accion</th>
                        </tr>
                    </thead>
                    {lista.map((elemento, index)=> {
                            return (
                                <Elementoslita
                                    id={index}
                                    key={elemento._id}
                                    _id={elemento._id} 
                                    nombre={elemento.nombre}
                                    categoria={elemento.categoria}
                                    precio={elemento.precio}
                                    descripcion={elemento.descripcion}
                                    oferta={elemento.oferta}
                                    imagen={elemento.imagen}
                                    borrar={borrarElemento}
                                    activarMod={modificarElemento}

                                />
                            );
                        })}
                </table>


            </div>
        </section>
    
    );
}


export default Listaproductos;