// Select * Comunidad  * Categoria  * Nivel
const comunidadSelect = document.getElementById("comunidad");
const categoriaSelect = document.getElementById("categorias__select");
const nivelEncantamientoSelect = document.getElementById("nivel_encantamiento");
const btnLimpiar = document.getElementById("btn__limpiar");

const urlObject = new URLSearchParams(urlApi.search);
//console.log(urlObject);

//Eventos de mis Select
comunidadSelect.addEventListener("change", (e) => {
	//location = e.target.value;
	urlObject.set("location", e.target.value);
	//console.log(urlObject);
	getLugares(`${urlApi}/?${urlObject}`);
});

categoriaSelect.addEventListener("change", (e) => {
	category = e.target.value;
	urlObject.set("category", e.target.value);
	console.log(urlObject);

	getLugares(`${urlApi}/?${urlObject}`);
});

nivelEncantamientoSelect.addEventListener("change", (e) => {
	enchantmentLevel = e.target.value;
	urlObject.set("enchantmentLevel", e.target.value);
	console.log(urlObject);

	getLugares(`${urlApi}/?${urlObject}`);
});


/* Boton limpiar filtros */
btnLimpiar.addEventListener("click", () => {
	comunidadSelect.value = "";
	categoriaSelect.value = "";
	nivelEncantamientoSelect.value = "";
	getLugares(urlApi);
});
