import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Usuario from "../models/user.model.js";
import Role from "../models/roles.model.js";



dotenv.config();

export const verificarToken = (req, res, next) => {
    
    try{
        const token = req.headers["x-access-token"]

        if (!token){
            return res.status(403).json({message: "No se ingreso el Token"})
        } else {
            const decoded = jwt.verify(token, process.env.SECRET);
            req.userId = decoded.id;

            Usuario.findById(req.userId.id, function(err, usuarioEncontrado){
                if (err){
                    return res.status(400).json({message: "Token invalido"});
                } else {
                    console.log(usuarioEncontrado);
                    res.json()
                }
            });
        }
        next()    
    } catch (error){
        return res.status(401).json({message: "Usuario no autorizado"});
    }

}



export const isAdmin = (req, res, next) => {

        Usuario.findById(req.userId, function(err, usuarioEncontrado){
            if (err){
                return res.status(400).json({message: "Token invalido"});
            } else {
                const [rolUsuario] = usuarioEncontrado.roles
                Role.findById(rolUsuario._id, function(err, roleEncontrado){
                    if (!err){
                        if(roleEncontrado.name === "admin" || roleEncontrado.name === "moderator"){
                            next(); 
                        } else {
                            return res.status(401).json({message: "Usuario no autorizado"});
                        }
                    }
                })
                
            }
        });

        
}