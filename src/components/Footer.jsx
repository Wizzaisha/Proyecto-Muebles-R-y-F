import React from "react";


function Footer(){
    return (
        <footer id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 suscribe">
                        <h3 className="footer-title">Suscribete para reciribir ofertas especiales</h3>
                        <div className="input-group mb-3 suscribe-div">
                            <input type="text" className="form-control suscribe-input" placeholder="Tu email" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                            <button className="btn btn-outline-dark suscribe-input" type="button" id="button-addon2">Enviar</button>
                        </div>
                    </div>
                    <div className="col-lg-4 help">
                        <h3 className="footer-title">¿Necesitas ayuda?</h3>
                        <h3 className="footer-title">Contáctenos</h3>
                        <p className="help-text">Cel: 3213123122</p>
                        <p className="help-text">Tel: 3123122</p>
                        <p className="help-text">email: gato@gato.com</p>
                    </div>
                    <div className="col-lg-4 medio-pago">
                        <h3 className="footer-title">Medios de pago</h3>
                        <div>
                            <img src="../images/nequi-logo.png" alt="imagen" className="footer-logo"></img>
                            <img src="../images/master-logo.png" alt="imagen" className="footer-logo"></img>
                        </div>
                            <div className="">
                            <img src="../images/visa-logo.png" alt="imagen" className="footer-logo"></img>
                            <img src="../images/pago-efectivo.svg" alt="imagen" className="footer-logo"></img>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;