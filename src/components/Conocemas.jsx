import React from "react";
import { Link } from "react-router-dom";

function Conocemas(){


    return (
        <section id="conoce-mas">
            <hr></hr>
            <div className="container-fluid">
                <h2 className="conocemas-title">Conoce más sobre nuestros productos</h2>
                <Link to="/productos">
                    <button 
                        type="submit"
                        name="button" 
                        className="btn btn-light conocemas-button"
                        >Catálogo
                    </button>
                </Link>
            </div>
        </section>
    );

}


export default Conocemas;