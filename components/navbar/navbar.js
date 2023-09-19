import { $main, $mainSection } from "../home/home";
import { $projectsContainer } from "../projects/projects";
import "./navbar.css";
// import { $header } from "../../main";
export const $header = document.querySelector("header");
$header.innerHTML += `
<nav>
    <a href="#home" class="textmarker-effect yellow" id="go-home">Home</a>
    <a href="#projects" class="textmarker-effect blue" id="go-projects">Projects</a>
    <a href="#experience" class="textmarker-effect pink" id="go-experience">Experience</a>
</nav>`;

const linkHome = document.querySelector("#go-home");
const linkProjects = document.querySelector("#go-projects");
const linkExperience = document.querySelector("#go-experience");

const redirect = (ev) => {
  ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  let linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log("El link apunta a:", linkHref); // La mostramos en consola
  const aaa = linkHref.slice(linkHref.indexOf("#"));
  console.log(aaa);
  // Añade aquí tu lógica! 🔽

  if (aaa === "#home") {
    $main.innerHTML = "";
    $main.append($mainSection);
  } else if (aaa === "#projects") {
    $main.innerHTML = "";
    $main.append($projectsContainer);
  }
};

linkHome.addEventListener("click", redirect);
linkProjects.addEventListener("click", redirect);
