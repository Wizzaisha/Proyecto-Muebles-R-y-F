import React from "react";



function Nabvar(){
    return (
        <section id="filtros-productos">
            <hr></hr>
            <div className="container-fluid container-buttons">
    
                <div className="row">
    
                    <div className="col-lg-3 col-md-6 div-button">
                        <button type="button" className="btn btn-outline-light filtros">Camas y base camas</button>
                    </div>
                    <div className="col-lg-2 col-md-6 div-button">
                        <button type="button" className="btn btn-outline-light filtros">Colchones</button>
                    </div>
                    <div className="col-lg-2 col-md-6 div-button">
                        <button type="button" className="btn btn-outline-light filtros">Closets</button>
                    </div>
                    <div className="col-lg-2 col-md-6 div-button">
                        <button type="button" className="btn btn-outline-light filtros">Salas y comedores</button>
                    </div>
                    <div className="col-lg-3 col-md-6 div-button">
                        <button type="button" className="btn btn-outline-light filtros">Muebles para la cocina</button>
                    </div>
                </div>
    
            </div>
        </section>
  
    );
}


export default Nabvar;