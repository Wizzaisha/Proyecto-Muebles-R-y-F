import React from "react";
import { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import VerificarAdmin from "./Administradores";

function Login() {

    const [token, setToken] = useState();



    const [isAdmin, setIsAdmin] = useState(false);


    const [login, setLogin] = useState({
        usuario: "",
        contraseña: ""
    });


    function ingresarUsuario(event){

        axios.post("http://localhost:5000/usuario/login", login)
        .then(function(res){
            setToken(res.data.token);
        })
        .catch(function(err){
            alert("Usuario o contraseña incorrectos");
            console.log(err)
        });

        setLogin({
            usuario:"",
            contraseña: ""
        })

        event.preventDefault();
    }

    // function verificarUsuario(){
    //     axios.get("http://localhost:5000/usuario", token)
    //     .then(function(res){
    //         console.log(res.data)
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // }
    
    function manejoInputs(event){
        const {name, value} = event.target;

        setLogin((prevUsuario) => {
            return {
                ...prevUsuario,
                [name]: value
            }
        })
    }


    return (
        <div>
        <section id="login">
            <div className="container-fluid login-elements">
                <div className="row">
                    <div className="col-lg-6 login-text">
                        <h3 className="login-title">Bienvenido</h3>
                        <hr></hr>
                        <ul className="nav flex-column">
                            <li className="nav-item login-links">
                                <a className="nav-link contraseña-login" href="/">¿Perdiste la contraseña?</a>
                            </li>
                            <li className="nav-item login-links">
                                <p>¿Usuario nuevo?</p>
                            </li>
                            <li className="nav-item login-links">
                                <a className="nav-link registrese-login" href="/registro">Registrese</a>
                            </li>
                            <hr></hr>
                            <li className="nav-item login-links">
                                <a className="nav-link volver-login" href="/">⪡ Volver</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 login-input">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Usuario</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={manejoInputs}
                                    value={login.usuario}
                                    name="usuario" 
                                ></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input 
                                    type="password" 
                                    className="form-control"
                                    name="contraseña"
                                    value={login.contraseña} 
                                    onChange={manejoInputs}
                                ></input>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                                <label className="form-check-label">Recordarme</label>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-outline-light login-button"
                                onClick={ingresarUsuario}
                            >Ingresar</button>
                        </form>
                    </div>
        
                </div>
            </div>
 
        </section>
            {/* <div className="autorizacion" >
                <VerificarAdmin 
                    activarLista={verificarUsuario}
                />
            </div> */}
        </div>
    );
}

export default Login;