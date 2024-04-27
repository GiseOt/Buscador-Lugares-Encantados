//DELETE
const bntMostrarModalBorrar = document.getElementById("card_button_eliminar");
const btnConfirmarBorrar = document.getElementById("confrimar__borrar");
const btnCancelarBorrar = document.getElementById("cancelar__borrar");
const modalDiv = document.getElementById("modal");

//Mostrar Modal
const mostrarlModalBorrar = (id) => {
	console.log("ID del lugar a eliminar:", id);
	modalDiv.style.display = "block";

	btnConfirmarBorrar.dataset.cardId = id; 
};

btnCancelarBorrar.addEventListener("click", () => {
	modalDiv.style.display = "none";
});

//Metodo Delete
// Evento a mi boton
btnConfirmarBorrar.addEventListener("click", (e) => {
	fetch(`${urlApi}/${e.currentTarget.dataset.cardId}`, {
		method: "DELETE",
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((data) => {
			console.log("Lugar eliminado:", data);
			getLugares(urlApi);
			modalDiv.style.display = "none";
		})
		.catch((err) => console.log(err, "no se pudo borrar"));
});
