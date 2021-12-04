import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Heading from "./Heading";
import Listaproductos from "./Listaproductos";
import Login from "./Login";
import Navbar from "./Navbar";
import Ofertas from "./Ofertas";
import Productos from "./Productos";
import Registro from "./Registro";



function App(){
    return (
        <Router>
            <Heading />
            <Navbar />
            <Routes>
                <Route path="/" element={<Ofertas />}/>
                <Route path="/productos" element={<Productos />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/registro" element={<Registro />}/>
                <Route path="/listaproductos" element={<Listaproductos />}/>
                
            </Routes>
            <Footer />
        </Router>

 
    );
}


export default App;