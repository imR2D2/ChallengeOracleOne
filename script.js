//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`
function mostrarImagen() {
	var imagenPersona = document.getElementById("imgPersona");
	imagenPersona.style.display = "none";

	var cajaMostrar = document.getElementById("cajaMostrar");
	cajaMostrar.style.display = "block";
}

function encriptar() {
	var textEscribir = document
		.getElementById("cajaEscribir")
		.value.toLowerCase();
	//Lo que hace el replace es para remplazar las cosas
	//i = para que tome en cuenta mayusculas y minúsculas
	//g = tome en cuenta toda la linea o la oracion
	//m = tome en cuenta multiples lineas
	var validador = textEscribir.match(/^[a-z]*$/);

	if (!validador || validador === 0) {
		alert("Solo son permitidas letras minúsculas y sin acentos");
		location.reload();
	} else {
		var textEncriptado = textEscribir
			.replace(/e/gim, "enter")
			.replace(/o/gim, "ober")
			.replace(/i/gim, "imes")
			.replace(/a/gim, "ai")
			.replace(/u/gim, "ufat");

		document.getElementById("cajaMostrar").innerHTML = textEncriptado;

		//Modificar esto para que no tenga que escribirlo dos veces, en el encriptar y desencriptar
		var ningunMsj = document.getElementById("ningunMensaje");
		var ingresaTxt = document.getElementById("ingresaTexto");
		var botonCopy = document.getElementById("copiar");
		ningunMsj.style.display = "none";
		ingresaTxt.style.display = "none";
		botonCopy.style.display = "inline-block";
	}
}

function desencriptar() {
	var frase = document.getElementById("cajaEscribir").value.toLowerCase();

	var textEncriptado = frase
		.replace(/enter/gim, "e")
		.replace(/ober/gim, "o")
		.replace(/imes/gim, "i")
		.replace(/ai/gim, "a")
		.replace(/ufat/gim, "u");

	document.getElementById("cajaMostrar").innerHTML = textEncriptado;

	var ningunMsj = document.getElementById("ningunMensaje");
	var ingresaTxt = document.getElementById("ingresaTexto");
	var botonCopy = document.getElementById("copiar");
	ningunMsj.style.display = "none";
	ingresaTxt.style.display = "none";
	botonCopy.style.display = "inline-block";
}

function copiar() {
	var copiar = document.getElementById("cajaMostrar");
	copiar.select();
	document.execCommand("copy");
	copiar.blur();
	alert("Texto copiado al portapapeles");
}
