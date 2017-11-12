//Se Crea Variable boton que accede al identificador de el elemento button
//llamada 'boton'
var boton=document.getElementById('boton');
//se accede a la variable creada boton y se agrega el evento click .

boton.addEventListener('click',function(){
//Se crea la variable comentario para acceder a la raiz de dom por medio del document
    var comentario = document.getElementById('ingreso').value;

    document.getElementById('ingreso').value ='';

    var cont=document.getElementById('contenido');


    var NuevoComentario=document.createElement('div');


    var chequeo =document.createElement('text');
    chequeo.type='chequeoCaja';

    var textNuevo=document.createTextNode (comentario);
    var contenedor=document.createElement('p');

    contenedor.appendChild(textNuevo);

    NuevoComentario.appendChild(chequeo);
    NuevoComentario.appendChild(contenedor);

    cont.appendChild(NuevoComentario);
})




    var ingresoTexto=document.getElementById('ingreso');
    ingresoTexto.onkeydown=function(){
        var comentario=document.getElementById('ingreso').value;
    	var conteoLetras=comentario.length;
        
    	var conteo=document.getElementById('contando');
     	conteo.innerHTML='<p></p>' +conteoLetras;           


}


 function maxLength(caracter) {
  if (!('max' in caracter)) 
 { 
    var max = el.attributes.maxLength.value; caracter.onkeypress = function () { 
    if (this.value.length >= max)
     return false; }; 
} 
} 
 maxLength(document.getElementById("text")); 

function validar(contenido,btx)
{
if (contenido==null || contenido=="") {document.form(btx).disabled=true}
else
if (contenido!=null || contenido!="") {document.form(btx).disabled=false}
}

