import express from "express";
import cors from "cors";

//Midle what
import {verificarToken, isAdmin} from "./middlewares/authjwt.js";

// Importacion rutas
import home from "./routes/home.route.js";
import productos from "./routes/productos.route.js";
import usuario from "./routes/usuario.route.js";
import listaProductos from "./routes/listaproductos.route.js";
import verificarUsuario from "./routes/verificarUsuario.route.js"

const app = express();



app.use(cors());
app.use(express.json());

// Rutas
// Aqui se decide el nombre de la ruta
app.use("/", home);
app.use("/productos", productos);
app.use("/usuario", usuario);
app.use("/verificarusuario", verificarUsuario);
app.use("/listaproductos", [verificarToken, isAdmin],listaProductos);
app.use("*", function (req, res){
    res.status(404).json({error: "Pagina no encontrada"});
});



export default app;

