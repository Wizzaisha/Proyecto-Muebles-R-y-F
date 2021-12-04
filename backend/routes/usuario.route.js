import express from "express";
import Usuario from "../models/user.model.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Role from "../models/roles.model.js";

const router = express.Router();
const saltRounds = 10;

dotenv.config();

// router.route("/").get(function (req, res){
//     res.send("Hola es pagina de login")
// });


// Aqui se decide lo que hara dicha ruta con la DB, asumir que este "/" representa el /login y los demas se
// añaden
router.route("/login").post(function (req, res){

    const username = req.body.usuario;
    const password = req.body.contraseña;

    Usuario.findOne({usuario: username}, function(err, usuarioEncontrado){

        if (err){
              res.status(400).json("Usuario no encontrado" + err);
        } else {
            if (usuarioEncontrado){
                bcrypt.compare(password, usuarioEncontrado.contraseña, function(err, result) {
                    if (result === true){
                        const token = jwt.sign({id: usuarioEncontrado._id}, process.env.SECRET, {
                            expiresIn: 7200
                        })

                        res.json({token});
                    }
                })
                console.log(usuarioEncontrado);
            } else {
                res.status(400).json("Usuario no encontrado");
            }
        }
  });
})

router.route("/registro").post(function(req, res){
    const {nombres, apellidos, usuario, correo, telefono, contraseña, roles} = req.body;

    bcrypt.hash(contraseña, saltRounds, function(err, hash) {

        if (roles){
            Role.find({name: roles}, function(err, foundItems){
                const [item] = foundItems;
                const newRol = [item._id];

                const nuevoUsuario = new Usuario ({
                    nombres,
                    apellidos,
                    usuario,
                    correo,
                    telefono,
                    contraseña: hash,
                    roles: newRol
                });

                nuevoUsuario.save();

                const token = jwt.sign({id: nuevoUsuario._id }, process.env.SECRET, {
                    expiresIn: 7200 // 2 horas
                })

                res.json({token});
                res.redirect("/login");

            });
        } else {
            Role.find({name: "user"}, function(err, foundItems){
                const [item] = foundItems;
                const newRol = [item._id];

                const nuevoUsuario = new Usuario ({
                    nombres,
                    apellidos,
                    usuario,
                    correo,
                    telefono,
                    contraseña: hash,
                    roles: newRol
                });

                nuevoUsuario.save();

                const token = jwt.sign({id: nuevoUsuario._id }, process.env.SECRET, {
                    expiresIn: 7200 // 2 horas
                })

                res.json({token});

            });
        }




    });



});



export default router;
