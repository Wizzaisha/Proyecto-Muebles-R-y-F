import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: [true, "No se puede dejar vacio!"]
    },
    imagen: {
      type: String,
    },
    categoria: {
        type: String,
        require: [true, "No se puede dejar vacio!"]
    },
    precio: {
        type: Number,
        require: [true, "No se puede dejar vacio!"]
    },
    descripcion: {
        type: String,
        require: [true, "No se puede dejar vacio!"]
    },
    oferta: {
        type: String
    }
},{
    timestamps: true,
});

const Producto = mongoose.model("Producto", productosSchema);

export default Producto;
