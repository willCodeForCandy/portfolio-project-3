const $header = document.querySelector("header");

const createNavbarTemplate = () => `
<nav>
    <a href="#">Home</a>
    <a href="#">Projects</a>
    <a href="#">Experience</a>
</nav>`;

// Lee los comentarios de este código para entender lo que hace 🔴
document.querySelector("...").addEventListener("click", (ev) => {
  ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log("El link apunta a:", linkHref); // La mostramos en consola
  // Añade aquí tu lógica! 🔽
});
