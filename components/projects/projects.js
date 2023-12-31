import "./projects.css";
import { myProjects } from "./constants";
import { $main } from "../home/home";

const colors = ["pink", "yellow", "blue"];
export const $projectsContainer = document.createElement("section");
$projectsContainer.id = "proyectos";
$projectsContainer.classList.add("article-container");

const $sectionTitle = document.createElement("h1");
$sectionTitle.innerText = "Mis Proyectos";

const createProjectTemplate = (project, color) => `
<article class="project-container">
  <h2 class="project-name ${color} slidein">${project.title}</h2>
  <div class="project-description">
    <div class="polaroid project-image-container">
      <img src="${project.screenshot}" alt="${project.imgDescription}">
      <div class="overlay">
          <a href="${project.liveUrl}" target="_blank">Ver live</a>
      </div>
      <div class="drawer">
          <a href="${project.gitHubUrl}" class="view-code"  target="_blank"><img src="/assets/icons8-code-100.png">Ver código</a>
      </div>
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
