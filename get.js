//GET ************
const urlApi = "https://6617d152ed6b8fa43483db5a.mockapi.io/api/places";
const contenedorCards = document.getElementById("contenedor-cards");
const sectionBuscar = document.getElementById("section_buscar");
const spinner = document.getElementById("spinner");



// Traer Lugares
const getLugares = (urlApi) => {
	fetch(urlApi)
		.then((res) => res.json())
		.then((data) => {
			renderCardLugar(data);
			
		})
		.catch((err) => {
			contenedorCards.innerHTML = `<div class="card-alert">
                <h2> No se encontraron Lugares </h2>
                </div>`;
		});
};

getLugares(urlApi);

// Renderizar
const renderCardLugar = (places) => {
	contenedorCards.innerHTML = "";

	places.forEach((place) => {
		const { name, urlImagen, id } = place;
		contenedorCards.innerHTML += `
            <div class="card">
                <div class="img__card">
                    <img id="img" src="${urlImagen}" alt="imagen_card" />
                </div>
                <div>
                    <h2 id="descripcion">${name}</h2>
                    <button class="btn-detalle" data-cardid="${id}">Ver detalle</button>
                </div>
            </div>`;
	});
	btnsDetalles(document.querySelectorAll(".btn-detalle"));
};

// Evento botón "ver detalle"
const btnsDetalles = (btns) => {
	btns.forEach((btn) =>
		btn.addEventListener("click", () => {
			const cardId = btn.getAttribute("data-cardid");
			getLugarEncantado(cardId);
			sectionBuscar.style.display = "none";
		})
	);
};
// Get detalle
const getLugarEncantado = (idLugar) => {
	fetch(`${urlApi}/${idLugar}`)
		.then((res) => res.json())
		.then((data) => renderizarDetalleLugar(data))
		.catch((err) => console.log(err));
};

// Renderizar el detalle del lugar

const renderizarDetalleLugar = (lugar) => {
	const { name, urlImagen, id, description, location, enchantmentLevel } =
		lugar;

	contenedorCards.innerHTML = `
            <div id="contenedor-detalle">
                <div class="card_detalle">
                    <button class="volver__btn" id="volver__btn" type="submit"><< Volver </button>
                    <h2 class="card_name">${name}</h2>
                    <img src="${urlImagen}" class="card_img" />
                    <h3 class="card_location">${location}</h3>
                    <p>${description}</p>
                    <span class="nivel_span">👻${enchantmentLevel}</span>
                    <button class="card_button_editar" data-cardId="${id}">
                        Editar
                    </button>
                    <button class="card_button_eliminar" data-cardId="${id}">
                        Eliminar
                    </button>
                </div>
            </div>`;

	const btnVolver = document.getElementById("volver__btn");
	btnVolver.addEventListener("click", () => {
		sectionBuscar.style.display = "block";
		document.getElementById("contenedor-detalle").style.display = "none";
		getLugares(urlApi);
	});

	document.querySelectorAll(".card_button_editar").forEach((btn) => {
		btn.addEventListener("click", () => mostrarFormularioEdicion(lugar));
	});

	document.querySelectorAll(".card_button_eliminar").forEach((btn) => {
		btn.addEventListener("click", () => mostrarlModalBorrar(id));
	});
};
