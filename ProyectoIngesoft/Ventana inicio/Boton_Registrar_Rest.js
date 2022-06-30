document.getElementById("btnenviar").addEventListener("click",e=>{
    Iiniciar();
    Validar();
    e.preventDefault;
})
const Expresiones = {
    nom:/^[a-zA-Z0-9\_\-\s]{4,20}$/,
    cor:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/,
    num_docum:/^\d{7,15}$/,
    contr:/^.{4,12}$/,
    num_tel:/^\d{7,10}$/,   
    dire:/^[a-zA-Z0-9_.+-\_\-\s]{4,30}$/,
    desc:/^[a-zA-Z0-9_.+-\_\-\s]{4,80}$/
}
function Iiniciar(){
    var nombreRes = document.getElementById("NombreRest").value;
    var nit = document.getElementById("Nit").value;
    var rest= document.getElementById("DireccionRest").value;
    var tel = document.getElementById("TelRest").value;
    var desc = document.getElementById("DescripcioRest").value;
    var imagen = document.getElementById("Img_Resta").files;
}
function Validar(){
    var nombreRes = document.getElementById("NombreRest").value;
    var nit = document.getElementById("Nit").value;
    var rest= document.getElementById("DireccionRest").value;
    var tel = document.getElementById("TelRest").value;
    var desc = document.getElementById("DescripcioRest").value;
    if(nombreRes==0 || 
        nit==0 ||
        rest==0 ||
        tel==0 ||
        desc==0
    ){
        alert("Completa los campos faltantes");
    }

    if(Expresiones.nom.test(nombreRes)){}
    else{
        alert("Nombre no valido");
        return 0;
    }
    
    if(Expresiones.num_docum.test(nit)){}
    else{
        alert("Nit no valido");
        return 0; 
    }

    if(Expresiones.num_tel.test(tel)){}
    else{
        alert("Telefono no valido");
        return 0; 
    }
    if(Expresiones.desc.test(desc)){}
    else{
        alert("Documento no valido");
        return 0; 
    }
    if(Expresiones.num_tel.test(tel)){}
    else{
        alert("Telefono no valido");
        return 0; 
    }
}