document.getElementById("btnResgistrarse").addEventListener("click",e=>{
    window.location.href="Registrarse.html"
})
document.getElementById("btnenviar").addEventListener("click",e=>{
    Iiniciar();
    Validar();
    e.preventDefault;
})
function Iiniciar(){
      var name = document.getElementById("Nombre_usuario").value;
      var pass = document.getElementById("Pass").value;
}
const Expresiones = {
    cor:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/,
    contr:/^.{4,12}$/,
    
}
function Validar(){
    var nomUsu = document.getElementById("Nombre_usuario").value;
    var contra = document.getElementById("Pass").value;
    if(Expresiones.cor.test(nomUsu)){}
    else{
        alert("Usuario   no valido");
        return 0; 
    } 
    if(Expresiones.contr.test(contra)){}
    else{
        alert("Contraseña no valida");
        return 0; 
    }
}
