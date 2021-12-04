import express from "express";
import Producto from "../models/productos.model.js";

const router = express.Router();


router.route("/").get(function (req, res){
    Producto.find({}, function(err, productosEncontrados){
        if (err){
            console.log(res.status(400).json("Error: " + err));
        } else {
            res.json(productosEncontrados);
        }
    });
});

router.route("/:id").get(function(req, res){

    const id = req.params.id;
    
    Producto.findById({_id:id}, function(err, productoEncontrado){
        if (err){
            console.log(res.status(400).json("Error: " + err));
        } else {
            res.json(productoEncontrado);
        }
    });
});


export default router;