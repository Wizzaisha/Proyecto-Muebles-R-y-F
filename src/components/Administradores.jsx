import React from "react";
import { Link } from "react-router-dom";

function VerificarAdmin(porps){

    return (
        <div>
        <Link
            className="admin-link"
            to="/listaproductos"
            onClick={porps.verificarUsuario}
            >Entrada Administradores</Link>
        </div>
    );
}


export default VerificarAdmin;