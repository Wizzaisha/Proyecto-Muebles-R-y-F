import React from "react";


function Elementoslita(props){
    return (
        <tbody>
            <tr>
                <th>{props.id}</th>
                <td><img src={props.imagen} style={{width:"100px", height:"100px"}} alt="imagen"></img></td>
                <td>{props.nombre}</td>
                <td>{props.categoria}</td>
                <td>{props.precio}</td>
                <td>{props.descripcion}</td>
                <td>{props.oferta}</td>
                <td>
                    <button 
                        className="btn btn-danger"
                        onClick={() => {
                            props.borrar(props._id)
                        }}
                        >Borrar</button>
                    <button
                        type="submit" 
                        className="btn btn-warning"
                        onClick={() => {
                            props.activarMod(props._id)
                        }}

                        >Modificar</button>
                </td>
            </tr>     
        </tbody>
        

    );
}


export default Elementoslita;