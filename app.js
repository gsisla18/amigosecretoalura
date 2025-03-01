let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.getElementById("sortearAmigo").addEventListener("click", sortearAmigo);
    document.getElementById("resetAmigo").addEventListener("click", resetearSorteo);
});

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else if (!nombre) {
        alert("Por favor, ingrese un nuevo nombre.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para el sorteo");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    
    mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigo) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `El amigo secreto seleccionado es: ${amigo}`;
    listaResultado.appendChild(li);
}

function resetearSorteo() {
    if (amigos.length === 0) {
        alert("La lista ya está vacía.");
        return;
    }
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("Se ha reiniciado el sorteo.");
}
let limpiarlista = document.getElementById("listaAmigos");
        limpiarlista.innerHTML= "";
