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
        }
    })
});


export default router;