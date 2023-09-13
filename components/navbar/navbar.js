import "./navbar.css";

const $header = document.querySelector("header");

$header.innerHTML += `
<nav>
    <a href="#" class="textmarker-effect yellow">Home</a>
    <a href="#" class="textmarker-effect blue">Projects</a>
    <a href="#" class="textmarker-effect pink">Experience</a>
</nav>`;

// Lee los comentarios de este código para entender lo que hace 🔴
document.querySelector("...").addEventListener("click", (ev) => {
  ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log("El link apunta a:", linkHref); // La mostramos en consola
  // Añade aquí tu lógica! 🔽
});
