//PUT ****
const editarLugarForm = document.getElementById("seccion__formulario__editar");
const editarNombreInput = document.getElementById("editar__nombre");
const editarImagenInput = document.getElementById("editar__imagen");
const editarDescripcionTextarea = document.getElementById(
	"editar__descripcion"
);
const editarCategoriaSelect = document.getElementById("editar__categoria");
const editarComunidadSelect = document.getElementById("editar__comunidad");
const editarNivelSelect = document.getElementById("editar__nivel");
const btnEditar = document.getElementById("editar__lugar");
const formularioEditar = document.getElementById("formulario_editar");


const mostrarFormularioEdicion = (lugar) => {
	editarLugarForm.style.display = "block";
	editarNombreInput.value = lugar.name;
	editarImagenInput.value = lugar.urlImagen;
	editarDescripcionTextarea.value = lugar.description;
	editarCategoriaSelect.value = lugar.category;
	editarComunidadSelect.value = lugar.location;
	editarNivelSelect.value = lugar.enchantmentLevel;
	btnEditar.lugarId = lugar.id;
};

//Evento editar // confirmar
const confrimarEditar = () => {
	const idLugar = btnEditar.lugarId;
	const lugarEditado = {
		name: editarNombreInput.value,
		urlImagen: editarImagenInput.value,
		description: editarDescripcionTextarea.value,
		category: editarCategoriaSelect.value,
		location: editarComunidadSelect.value,
		enchantmentLevel: editarNivelSelect.value,
	};

	// metodo PUT
	fetch(`${urlApi}/${idLugar}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(lugarEditado),
	})
		.then((res) => {
			getLugarEncantado(idLugar);
		})
		.catch((err) => {
			contenedorCards.innerHTML = `<div class="alert">
                <h2> No se editaron Lugares </h2>
                </div>`;
		});
};

formularioEditar.addEventListener("submit", (e) => {
	e.preventDefault();
	confrimarEditar();
});

/* BOTONES*/
btnEditar.addEventListener("click", () => {
	editarLugarForm.style.display = "none";
});

const ocultarFormularioEdicion = () => {
	const btnCerrarEditar = document.getElementById("cerrar_editar");

	btnCerrarEditar.addEventListener("click", (e) => {
		editarLugarForm.style.display = "none";
	});
};
ocultarFormularioEdicion();
