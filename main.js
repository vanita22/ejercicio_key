function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardar);
	guardar(); /*si se guarda aqui el llamado el valor no se borra al actualizar la página*/
}

function guardar(){
	var clave = document.getElementById("key").value;
	var valor = document.getElementById("value").value;

sessionStorage.setItem(clave, valor); /*para guardar los datos remotamente*/

   var contenedor = document.getElementById("contenedor");
   contenedor.innerHTML = ' ';
	for(var i = 0; i < sessionStorage.length; i++){
		var kei = sessionStorage.key(i);
		var valuee = sessionStorage.getItem(kei);

		contenedor.innerHTML += "<p>" + kei + ' ' + valuee + "</p>";/*se usa += para agregar, si se usa == se sobreescribe el valor*/
	}
}

init();