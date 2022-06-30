document.getElementById("btnInicioSesion").addEventListener("click",e=>{
    window.location.href="Inicio_sesion.html"
})

document.getElementById("btnEnviar").addEventListener("click",e=>{
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
    dire:/^[a-zA-Z0-9_.+-\_\-\s]{4,30}$/
}
function Iiniciar(){
      var nombre = document.getElementById("Nombre_Usu").value;
      var contra = document.getElementById("Conraseña").value;
      var correo = document.getElementById("Correo").value;
      var numero_docum = document.getElementById("Numero_Documento").value;
      var numero_tel = document.getElementById("Numero_Tele").value;
      var direccion = document.getElementById("Direccion").value;
      var Forma_Pago = document.getElementById("Forma_de_pago").value;
}

function Validar(){
    var nombre = document.getElementById("Nombre_Usu").value;
    var contra = document.getElementById("Conraseña").value;
    var correo = document.getElementById("Correo").value;
    var tipo_document = document.getElementById("Tipo_de_documento").value;
    var numero_docum = document.getElementById("Numero_Documento").value;
    var numero_tel = document.getElementById("Numero_Tele").value;
    var direccion = document.getElementById("Direccion").value;
    var Forma_Pago = document.getElementById("Forma_de_pago").value;
    if(Expresiones.nom.test(nombre)){}
    else{
        alert("Nombre no valido");
        return 0;
    }
    if(Expresiones.contr.test(contra)){}
    else{
        alert("Contraseña no valida");
        return 0; 
    }
    if(Expresiones.cor.test(correo)){}
    else{
        alert("Correo no valido");
        return 0; 
    }
    if(Expresiones.num_docum.test(numero_docum)){}
    else{
        alert("Documento no valido");
        return 0; 
    }
    if(Expresiones.num_tel.test(numero_tel)){}
    else{
        alert("Telefono no valido");
        return 0; 
    }
    if(Expresiones.dire.test(direccion)){}
    else{
        alert("Direccion no valida");
        return 0; 
    }
    if(Forma_Pago=="Forma de pago" || 
       tipo_document=="Tipo de Documento"
    ){
        alert("Completa los campos faltantes");
    } 
}

