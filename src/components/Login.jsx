import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Listaproductos from "./Listaproductos";

function Login() {


    const [token, setToken] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [rolUsuario, setRolUsuario] = useState("");

    const [login, setLogin] = useState({
        usuario: "",
        contraseña: ""
    });

    function ingresarUsuario(event){

        axios.post("http://localhost:5000/usuario/login", login)
        .then(function(res){
            setToken(res.data);
            setIsLogin(true);
            
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

    localStorage.setItem("jwtToken", token)

    useEffect(() => {
        if (isLogin){
            axios({
                method: "post",
                url: "http://localhost:5000/verificarusuario",
                headers: {"x-access-token": token.token}
            })
            .then(function(res){
                setRolUsuario(res.data);
            })
            .catch(function(err){
                console.log(err)
            })
        }
    }, [isLogin, token.token])


    function manejoInputs(event){
        const {name, value} = event.target;

        setLogin((prevUsuario) => {
            return {
                ...prevUsuario,
                [name]: value
            }
        })
    }

    const handleLogout = () => {
        setIsLogin(false); 
        localStorage.removeItem("jwtToken");
    }


    return (
        <div>
            
            {isLogin ?
                <div>
                    <section>
                        <div className="welcome-login">
                            <h2 className="welcome-title">Bienvenido</h2>
                            <button className="btn btn-outline-light logout-button" onClick={handleLogout} type="submit">Salir</button>
                        </div>
                    </section>
                    {rolUsuario === "admin" ?
                    <section>
                        <Listaproductos 
                            tokenUsuario={token.token}
                        />
                    </section>
                    :
                    null
                    }
                </div>
            :
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
            }

        </div>
    );
}

export default Login;