const express = require("express");
const app = express();

app.set('appName','Prueba1');
app.use(express.json());
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
var Nombre="";
var ApellidoPat="";
var AppellidoMat="";
var RFC="";
var CIEC="";

app.get('/',(req,res)=>{
    Nombre=req.body.nombre||'';
    ApellidoPat=req.body.apellidoPat||'';
    AppellidoMat=req.body.appellidoMat||'';
    RFC=req.body.rfc||'';
    CIEC=req.body.ciec||'';
    console.log(Nombre);
    console.log(ApellidoPat);
    console.log(AppellidoMat);
    console.log(RFC);
    console.log(CIEC);
    res.render('index.ejs',{
        nombre:Nombre,
        apellidoPat:ApellidoPat,
        appellidoMat:AppellidoMat,
        rfc:RFC,
        ciec:CIEC
    });
});

app.get('/api',(req,res)=>{
    res.json(
        {
            nombre:Nombre,
            apellidoPat:ApellidoPat,
            appellidoMat:AppellidoMat,
            rfc:RFC,
            ciec:CIEC
        }
    );
});

app.get('*',(req,res)=>{
    
    res.end('Pagina no encontrada');
});

app.listen(3000,function(){
    console.log("funcion corriendo, pueto 3000")
});
