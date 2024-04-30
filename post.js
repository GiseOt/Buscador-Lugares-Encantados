//POST
const formularioAgregar = document.getElementById(
	"seccion__formulario__agregar"
);
const agregarLugarform = document.getElementById("formulario_agregar");
const agregarNombre = document.getElementById("agregar__lugar");
const agregarImagen = document.getElementById("agregar__imagen");
const agregarDescripcion = document.getElementById("agregar__descripcion");
const agregarCategoriaSelect = document.getElementById("agregar__categoria");
const agregarComunidadSelect = document.getElementById("agregar__comunidad");
const agregarNivelSelect = document.getElementById("agregar__nivel");
const btnCancelar = document.getElementById("btn__cancelar");
const btnAgregar = document.getElementById("crear__lugar");
const btnMostrarFormCrear = document.getElementById("btn__form-crear");

// Boton que muestra mi formulario
btnMostrarFormCrear.addEventListener("click", (e) => {
	formularioAgregar.style.display = "block";
	document.getElementById("contenedor-cards").style.display = "none";
	document.getElementById("section_buscar").style.display = "none";
});

// Boton de cancelar
btnCancelar.addEventListener("click", (e) => {
	formularioAgregar.style.display = "none";
	document.getElementById("contenedor-cards").style.display = "flex";
	document.getElementById("section_buscar").style.display = "block";
});

btnAgregar.addEventListener("click", () => {
	const nombre = agregarNombre.value;
	const imagen = agregarImagen.value;
	const descripcion = agregarDescripcion.value;
	const categoria = agregarCategoriaSelect.value;
	const comunidad = agregarComunidadSelect.value;
	const nivel = agregarNivelSelect.value;

	const nuevoLugar = {
		name: nombre,
		urlImagen: imagen,
		description: descripcion,
		category: categoria,
		location: comunidad,
		enchantmentLevel: nivel,
	};

	agregarLugar(nuevoLugar);
});

agregarLugarform.addEventListener("submit", (e) => {
	e.preventDefault(); // Evitar que mi formulario se envie
});

// Post
const agregarLugar = (nuevoLugar) => {
	fetch(urlApi, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(nuevoLugar),
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((data) => {
			console.log("Nuevo lugar agregado:", data);
			getLugares(urlApi);
			agregarLugarform.reset(); // resetea el formulario
			formularioAgregar.style.display = "none";
			document.getElementById("contenedor-cards").style.display = "flex";
			document.getElementById("section_buscar").style.display = "block";
		})
		.catch((err) => console.log(err));
};
