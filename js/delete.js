//DELETE****
const bntMostrarModalBorrar = document.getElementById("card_button_eliminar");
const btnConfirmarBorrar = document.getElementById("confrimar__borrar");
const btnCancelarBorrar = document.getElementById("cancelar__borrar");
const modalDiv = document.getElementById("modal");


const mostrarlModalBorrar = (id) => {
	modalDiv.style.display = "block";

	btnConfirmarBorrar.dataset.cardId = id;
};

btnCancelarBorrar.addEventListener("click", () => {
	modalDiv.style.display = "none";
});

//Metodo Delete

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
			getLugares(urlApi);
			modalDiv.style.display = "none";
		})
		.catch((err) => {
			contenedorCards.innerHTML = `<div class="alerta">
                <h2> No se eliminaron Lugares </h2>
                </div>`;
		});
});
