//Cambio la imagen de la camiseta en función del color
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const camiseta = document.getElementById("camiseta");
        camiseta.src = e.target.value === "black" ? "img/camiseta/black.png" : "img/camiseta/white.png";
    });
});

// Actualizo el título en la camiseta
const tituloInput = document.getElementById("titulo");
const tituloCamiseta = document.getElementById("tituloCamiseta");
tituloInput.addEventListener('input', () => {
    tituloCamiseta.textContent = tituloInput.value;
});

// Muevo el título en la camiseta (Al principio se pone en medio de la camiseta, pero si lo mueves se pone bien)
document.getElementById("moverX").addEventListener("input", (e) => {
    tituloCamiseta.style.right = e.target.value + "px";
});

document.getElementById("moverY").addEventListener("input", (e) => {
    tituloCamiseta.style.top = e.target.value + "px";
});

//Hago la "mecánica" para arrastrar los personajes dentro de la camiseta
document.querySelectorAll(".personajes img").forEach(img => {
    img.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.src);
        e.dataTransfer.setData("nombre", e.target.dataset.nombre);
    });
});

const camisetaContainer = document.getElementById("camiseta");
camisetaContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
});

camisetaContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    const src = e.dataTransfer.getData("text");
    const nombre = e.dataTransfer.getData("nombre");

    // Muestro el personaje en grande y en pequeño
    personajeGrande.innerHTML = `<img src="${src}" alt="${nombre}" style="width: 200px;">`;
    personajePequeño.innerHTML = `<img src="${src}" alt="${nombre}" style="width: 50px;">`;

    //Le asigno el nombre del personaje a un elemento oculto para evitar sobreescribir el contenido
    document.getElementById("nombrePersonaje").textContent = nombre;
});
