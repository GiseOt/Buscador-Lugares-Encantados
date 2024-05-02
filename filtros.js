//Filtros*****
const comunidadSelect = document.getElementById("comunidad");
const categoriaSelect = document.getElementById("categorias__select");
const nivelEncantamientoSelect = document.getElementById("nivel_encantamiento");
const btnLimpiar = document.getElementById("btn__limpiar");

const urlObject = new URLSearchParams(urlApi.search);

comunidadSelect.addEventListener("change", ({ target }) => {
	const selectedValue = target.value;
	selectedValue === "Comunidad"
		? urlObject.delete("location")
		: urlObject.set("location", selectedValue);
	getLugares(`${urlApi}/?${urlObject}`);
});

categoriaSelect.addEventListener("change", ({ target }) => {
	const selectedValue = target.value;
	selectedValue === "Categoria"
		? urlObject.delete("category")
		: urlObject.set("category", selectedValue);
	getLugares(`${urlApi}/?${urlObject}`);
});

nivelEncantamientoSelect.addEventListener("change", ({ target }) => {
	const selectedValue = target.value;
	selectedValue === "Nivel"
		? urlObject.delete("enchantmentLevel")
		: urlObject.set("enchantmentLevel", selectedValue);
	getLugares(`${urlApi}/?${urlObject}`);
});

btnLimpiar.addEventListener("click", () => {
	comunidadSelect.value = "";
	categoriaSelect.value = "";
	nivelEncantamientoSelect.value = "";
	urlObject.delete("location");
	urlObject.delete("category");
	urlObject.delete("enchantmentLevel");
	getLugares(urlApi);
});
