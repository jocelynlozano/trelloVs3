window.addEventListener("load", function(){
	var spanAddList = document.getElementById("spanAddList");
	var form = document.getElementById("form");
	var textInput = document.getElementById("textInput");
	var buttonSaveList = document.getElementById("buttonSaveList");
	var subContenedor = document.getElementById("subContenedor");
	var contenedorNuevo = document.createElement("div");
	var contenedorGrande = document.getElementById("contenedorGrande")

	spanAddList.addEventListener("click", mostrarForm);
	buttonSaveList.addEventListener("click", function(){
		mostrarNombreLista();
		nuevoDiv();
	});
	
	function mostrarForm(){
		textInput.focus();
		spanAddList.style.display = "none";
		form.style.display = "block";
	};

	function mostrarNombreLista(){
		form.style.display = "none";
		var nombreLista = document.createElement("div");
		var enlace = document.createElement("a");

		spanAddList.parentElement.appendChild(nombreLista);
		spanAddList.parentElement.appendChild(enlace);


		nombreLista.innerHTML = textInput.value;
		textInput.value = "";
		enlace.textContent = "Añadir tarjeta..";
		nombreLista.setAttribute("class", "nombreLista");
		enlace.setAttribute("class", "enlace");
		var contenedorSpan = document.createElement("div");
		spanAddList.parentElement.insertBefore(contenedorSpan, spanAddList.parentElement.children[3]);
		enlace.addEventListener("click", function(){
			toShowTextArea(enlace, contenedorSpan, nombreLista);
		});

	};

	function toShowTextArea(enlace, contenedorSpan, nombreLista){

		enlace.style.display = "none";
		var nuevoForm = document.createElement("form");
		var textAreaCreado = document.createElement("textarea");
		var botonCreadoEnJs = document.createElement("button");
		
		nombreLista.parentElement.appendChild(nuevoForm);
		nuevoForm.appendChild(textAreaCreado);
		nuevoForm.appendChild(botonCreadoEnJs);

		botonCreadoEnJs.textContent = "Guardar";

		textAreaCreado.focus();
		textAreaCreado.setAttribute("class", "textAreaCreado");
		botonCreadoEnJs.setAttribute("class", "botonCreadoEnJs");
		botonCreadoEnJs.addEventListener("click", function(e){
			e.preventDefault();
			nuevaTarjeta(e, textAreaCreado, contenedorSpan, nuevoForm, botonCreadoEnJs, enlace);
		});

	};

	function nuevaTarjeta(e, textAreaCreado, contenedorSpan, nuevoForm, botonCreadoEnJs, enlace){
		e.preventDefault();
		var tarjetaNueva = document.createElement("span");
		nuevoForm.style.display = "none";
		contenedorSpan.appendChild(tarjetaNueva);
		tarjetaNueva.style.display= "block";
		enlace.style.display = "inline-block";
		tarjetaNueva.textContent = textAreaCreado.value;
	};

	function nuevoDiv(){
		var divNuevo = document.createElement("div");
		
		contenedorGrande.appendChild(divNuevo);
		divNuevo.appendChild(spanAddList);
		divNuevo.appendChild(form);
		divNuevo.setAttribute("class", "subContenedor");
		divNuevo.classList.add("inline");
		spanAddList.style.display = "inline-block";
	};

});