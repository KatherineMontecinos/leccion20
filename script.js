
// 1- NUMERO MENOR

function numMenor(num1, num2, num3){

  var numero = Math.min(num1,num2,num3);
  return numero;

}

// 2- NUMERO PAR O IMPAR 

function Par(num){

  if (num%2===0){
    alert(numero+= "Es par")
  } else {
    alert(numero+= "Es impar")
  }
}

// 3- NUMERO DE MENOR A MAYOR

function Ordenado(num1,num2,num3){

  var numero =[10,45,5];
  var ordenar = numero.sort(function(a,b){
    return a - b;
  });
}

alert(ordenar);

// 4- MAYUSCULAS Y MINUSCULAS

function palabras(texto){

  var resultado = "El texto " +texto+" ";

  if (texto===texto.toLowerCase()){
    resultado += " esta formado sólo por minusculas";
  } else if (texto===texto.toUpperCase()){
    resultado += " esta formado sólo por mayúsculas";
  } else {
    resultado += " esta formado por ambas, mayusculas y minusculas";
  }
  return resultado;
}


// 5- CUADADRO DE LA SUMA DE DOS NUMEROS 

function cuadradoSuma(num1, num2){

  var suma = (num1+num2);
  var cuadrado = suma*suma; 

  return cuadrado; 
}

// 6- NUMERO PRIMO

function primo(num){
	for (var i=2; i < num; i++) {
	if (num % i == 0){
	alert ("El " +num+ " no es primo"); 
	break;
	} else {
	alert ("El " +num+ " es primo");
	break; 
    }
   }
}

// 7- MULTIPLOS DE UN NUMERO 

function multiplos(n,callback){
	for (var i=1; i<=10; i++){
		if(i%num==0){
			callback(i);
		}
	}
}


// 8- FIBONACCI 

function fibonacci(n){
    var num1=0;
    var num2=1;
 
    for(i=0; i<n;i++){
        var fibo=num1;
        num1=num2;
        num2=fibo+num1;
 
        document.writeln(num1+" ");
    }
}

