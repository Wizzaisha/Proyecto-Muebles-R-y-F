import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Registro(){

    const navigate = useNavigate();

    // State para añadir un nuevo usuario
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombres: "",
        apellidos:"",
        usuario: "",
        correo: "",
        fechaNacimiento: "",
        telefono: "",
        contraseña: "",
    });

    function añadirNuevoUsuario(event){
        axios.post("https://salty-springs-00842.herokuapp.com/usuario/registro", nuevoUsuario)
        .then(function(res){
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        });

        setNuevoUsuario({
            nombres: "",
            apellidos:"",
            usuario: "",
            correo: "",
            telefono: "",
            contraseña: "",    
        });

        navigate(-1);

        event.preventDefault();
    }

    function manejoInputs(event){
        const {name, value} = event.target;

        setNuevoUsuario((prevUsuario) => {
            return {
                ...prevUsuario,
                [name]: value
            }
        })
    }



    return (
        <section id="registro">
            <div className="container-fluid registro-elements">
                <div className="row">
                    <div className="col-lg-6 registro-text">
                        <h3 className="registro-title">Bienvenido</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                            <a className="nav-link volver-registro" href="/login">⪡ Volver</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 login-input">
                        <form>
                            <label className="form-label">Nombres y apellidos</label>
                            <div className="mb-3 input-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="nombres"
                                    onChange={manejoInputs}
                                    value={nuevoUsuario.nombres}
                                ></input>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="apellidos"
                                    onChange={manejoInputs}
                                    value={nuevoUsuario.apellidos}
                                ></input>
                            </div>
                                <div className="mb-3">
                                <label className="form-label">Usuario</label>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    name="usuario"
                                    onChange={manejoInputs}
                                    value={nuevoUsuario.usuario}
                                ></input>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    name="correo"
                                    onChange={manejoInputs}
                                    value={nuevoUsuario.correo}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefono de concacto</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    name="telefono"
                                    onChange={manejoInputs}
                                    value={nuevoUsuario.telefono}
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control"
                                    name="contraseña"
                                    onChange={manejoInputs}
                                    value={nuevoUsuario.contraseña}
                                ></input>
                                <div id="passwordHelpBlock" className="form-text">
                                    Tu contraseña debe tener 8-20 caracteres, con letras y números y no debe tener espacios, caracteres especiales, o emotes.
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-outline-light login-button"
                                onClick={añadirNuevoUsuario}
                                >Registrarse</button>
                        </form>
                    </div>
            
                </div>
        
            </div>
        </section>    
    );

}


export default Registro;