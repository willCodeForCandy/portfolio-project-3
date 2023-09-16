import "./projects.css";
import { myProjects } from "./constants";
import { $main } from "../home/home";

const colors = ["pink", "yellow", "blue"];
const $projectsContainer = document.createElement("section");
$projectsContainer.id = "proyectos";
$projectsContainer.classList.add("article-container");

const $sectionTitle = document.createElement("h1");
$sectionTitle.innerText = "Mis Proyectos";

const createProjectTemplate = (project, color) => `
<article class="project-container">
<h2 class="project-name ${color}">${project.title}</h2>
<div class="project-description">
  <div class="polaroid project-image">
    <img src="${project.screenshot}" alt="${project.imgDescription}">
  </div>
  <div class="project-details">
  ${project.description}
  </div>
</div>
</article>
`;

const populateProjectsContainer = (projectList, colorList) => {
  projectList.forEach((element, index) => {
    const colorIndex = index % colorList.length;
    $projectsContainer.innerHTML += createProjectTemplate(
      element,
      colorList[colorIndex]
    );
  });
};

populateProjectsContainer(myProjects, colors);

$main.append($projectsContainer);
