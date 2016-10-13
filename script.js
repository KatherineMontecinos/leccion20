// Funcion Promedio

function callbackPromedio(a,b,c,callback){
		var promedio = (a+b+c)/3;

		return callback(promedio)
}



// Funcion Segundero 

var numero = 1;
function segundero (){
	document.getElementById("titulo").innerHTML = numero++;
}
	setInterval(segundero, 1000);
