document.getElementById("btnAgregar").addEventListener("click",e=>{
    Iiniciar();
    Validar();
    e.preventDefault;
})
const Expresiones = {
    nom:/^[a-zA-Z0-9\_\-\s]{4,20}$/,
    valormoneda:/^\d{4,6}$/,   
    desc:/^[a-zA-Z0-9_.+-\_\-\s]{4,80}$/
}
function Iiniciar(){
    var nombrePla = document.getElementById("Nombre_Plato").value;
    var precio = document.getElementById("Precio").value;
    var desc = document.getElementById("DescripcionPlato").value;
    var imagen = document.getElementById("Img_plato").files;
}
function Validar(){
    var nombrePla = document.getElementById("Nombre_Plato").value;
    var precio = document.getElementById("Precio").value;
    var desc = document.getElementById("DescripcionPlato").value;
    var imagen = document.getElementById("Img_plato").files;
    if(nombrePla==0 || 
        precio==0 ||
        desc==0 
    ){
        alert("Completa los campos faltantes");
    }

    if(Expresiones.nom.test(nombrePla)){}
    else{
        alert("Nombre no valido");
        return 0;
    }
    
    if(Expresiones.valormoneda.test(precio)){}
    else{
        alert("Precio no valido");
        return 0; 
    }

    if(Expresiones.desc.test(desc)){}
    else{
        alert("Descripcion no valida");
        return 0; 
    }
    
}