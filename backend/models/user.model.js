import mongoose from "mongoose";
import pkg from "mongoose";

const {Schema} = pkg;

const usuariosSchema = new mongoose.Schema({
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    usuario: {
        type: String,
        require: [true, "No se puede dejar vacio!"],
        uniquie: true,
        minlength: 3
    },
    correo: {
        type: String,
        require: [true, "No se puede dejar vacio!"],
        unique: true
    },
    telefono: {
        type: Number,
    },
    contraseña: {
        type: String,
        require: [true, "No se puede dejar vacio!"]
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]

}, {
    timestamps: true,
});



const Usuario = mongoose.model("Usuario", usuariosSchema);


export default Usuario;
