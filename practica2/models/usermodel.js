import db from "../connection/connection.js";

export const insertProduct = (data, result) => {
    db.query("INSERT INTO usuarios (Nombre, SegundoNombre, ApellidoPaterno, ApellidoMaterno, RFC, Ciec) VALUES (?,'',?,?,?,?)", [data.nombre,data.apellidopat,data.apellidomat,data.rfc,data.ciec], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}