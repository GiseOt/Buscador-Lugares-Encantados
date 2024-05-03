//POST****
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


btnMostrarFormCrear.addEventListener("click", (e) => {
	formularioAgregar.style.display = "block";
	document.getElementById("contenedor-cards").style.display = "none";
	document.getElementById("section_buscar").style.display = "none";
});

// Botón cancelar
btnCancelar.addEventListener("click", (e) => {
	formularioAgregar.style.display = "none";
	document.getElementById("contenedor-cards").style.display = "flex";
	document.getElementById("section_buscar").style.display = "block";
	agregarLugarform.reset();
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
	e.preventDefault();
});

// Post
const agregarLugar = (nuevoLugar) => {
	if (
		agregarNombre.value.trim() === "" ||
		agregarImagen.value.trim() === "" ||
		agregarDescripcion.value.trim() === "" ||
		agregarCategoriaSelect.value.trim() === "" ||
		agregarComunidadSelect.value.trim() === "" ||
		agregarNivelSelect.value.trim() === ""
	) {
		return;
	} else {
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
				formularioAgregar.style.display = "none";
				document.getElementById("contenedor-cards").style.display = "flex";
				document.getElementById("section_buscar").style.display = "block";
				getLugares(urlApi);
				agregarLugarform.reset();
			})
			.catch((err) => {
				contenedorCards.innerHTML = `<div class="alerta">
                <h2> No se agregaron Lugares </h2>
                </div>`;
			});
	}
};
