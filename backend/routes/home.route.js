import express from "express";
import Role from "../models/roles.model.js";

const router = express.Router();


router.route("/").get(function (req, res){



    const role1 = new Role({
        name: "user"
    });
    
    const role2 = new Role({
        name: "admin"
    });
    
    const role3 = new Role({
        name: "moderator"
    });
    
    const defaultItems = [role1, role2, role3];
    
    // Roles
    Role.find({}, function(err, foundItems){
        if (foundItems.length === 0){
            Role.insertMany(defaultItems, function(err){
                if (err){
                    console.log(err)
                } else {
                    console.log("Los roles se han añadido correctamente")
                }
            });
        } else {
            res.json({message: "Bienvenido al server de la pagina muebles R y F",
            navegacion: {
                home: "'/' es la ruta de home",
                productos: "'/productos' es la ruta donde se encuentran los productos que visualizan los usuarios.",
                listaproductos: "'/listaproductos' es la ruta donde se puede eliminar, modificar y agregar productos.",
                usuario: "'/usuario' es la ruta donde se gestiona todo lo relacionado a los usuarios, login y registro"
            }});
        }
    });

    

});

    

export default router;