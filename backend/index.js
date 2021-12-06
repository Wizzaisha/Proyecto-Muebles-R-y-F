import app from "./server.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

//Conexion con db
const uri = process.env.ALMACEN_DB_URI;
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("La conexion con MongoDB se ha establecido exitosamente.")
});





// Listening on port

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, function(){
  console.log("Server has started succesfully.");
});