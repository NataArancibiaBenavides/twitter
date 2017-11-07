var boton=document.getElementById('boton');

boton.addEventListener('click',function(){
	var comentario = document.getElementById('ingreso').value;

	document.getElementById('ingreso').value ='';

	var cont=document.getElementById('contenido');


	var NuevoComentario=document.createElement('div');

	if(comentario.length == 0 || comentario == null){
		alert ('ingresa nuevamente');
		return false;
	}

    var chequeo =document.createElement('text');
    chequeo.type='chequeoCaja';

    var textNuevo=document.createTextNode (comentario);
    var contenedor=document.createElement('p');

    contenedor.appendChild(textNuevo);

    NuevoComentario.appendChild(chequeo);
    NuevoComentario.appendChild(contenedor);

    cont.appendChild(NuevoComentario);


})


