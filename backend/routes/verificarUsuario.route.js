import express from "express";
import Usuario from "../models/user.model.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Role from "../models/roles.model.js";



const router = express.Router();


router.route("/").post(function(req, res){
    const token = req.headers["x-access-token"]
    const decoded = jwt.verify(token, process.env.SECRET);

    Usuario.findById(decoded.id, function(err, usuarioEncontrado){
        if (err){
            return res.status(400).json({message: "Token invalido"});
        } else {
            const [rolUsuario] = usuarioEncontrado.roles
            Role.findById(rolUsuario._id, function(err, roleEncontrado){
                if (!err){
                    res.json(roleEncontrado.name);
                }
            })
            
        }
    });

    
})



export default router;
