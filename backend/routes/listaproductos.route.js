import express from "express";
import Producto from "../models/productos.model.js";

const router = express.Router();


router.route("/").get(function (req, res){
    Producto.find({}, function(err, productosEncontrados){
        if (err){
            res.status(400).json("Error: " + err);
        } else {
            res.json(productosEncontrados);
        }
    })
});

router.route("/:id").get(function(req, res){

    const id = req.params.id;

    Producto.findById({_id:id}, function(err, productoEncontrado){
        if (err){
            res.status(400).json("Error: " + err);
        } else {
            res.json(productoEncontrado);
        }
    });
});

router.route("/add").post(function(req, res){
    const {nombre, imagen, categoria, precio, descripcion, oferta} = req.body;

    const nuevoProducto = new Producto ({
        nombre,
        imagen,
        categoria,
        precio,
        descripcion,
        oferta
    });

    nuevoProducto.save();

    res.json("Productos añadidos correctamente.");

});

router.route("/borrar/:id").delete(function(req, res){
    const id = req.params.id;

    Producto.findByIdAndRemove({_id:id}, function(err){
        if (err){
            res.status(400).json("Error: " + err);
        } else {
            res.json("Productos borrados correctamente.");
        }
    });
});

router.route("/actualizar/:id").post(function(req, res){

    const id = req.params.id;

    Producto.findById({_id:id}, function(err, producto){

        if (err){
            res.status(400).json("Error: " + err);
        } else {

            producto.nombre = req.body.nombre;
            producto.imagen = req.body.imagen;
            producto.categoria = req.body.categoria;
            producto.precio = req.body.precio;
            producto.descripcion = req.body.descripcion;
            producto.oferta = req.body.oferta;


            producto.save();

            res.json(producto);
        }
    });
});


export default router;
