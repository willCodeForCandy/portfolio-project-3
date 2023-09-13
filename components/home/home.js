import "./home.css";

const $main = document.querySelector("main");
const $mainSection = document.createElement("section");
$mainSection.id = "main-section";
const mainSectionTemplate = `
<div><img src="/public/assets/IMG_20221005_145041312.jpg" alt="Ragnar y yo"></div>
<div class="description">
<h2>Hey!</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam iste neque quibusdam ipsa possimus,
  voluptatum dolorum voluptate atque ullam tempore? Illo, iure asperiores. Architecto deserunt fuga officiis culpa
  incidunt.
  Deserunt perspiciatis cum qui quis, culpa autem distinctio libero ea aliquid fugiat ratione placeat, impedit,
  voluptates recusandae non! Enim officiis laborum provident repudiandae quis blanditiis doloribus unde ad veniam
  eaque.
  Sapiente atque pariatur sint? Neque voluptatem libero eligendi, magnam ipsa maiores nihil corporis atque ea quo
  est, numquam amet eaque odit quaerat excepturi temporibus nesciunt veritatis exercitationem facere itaque
  soluta?</p>
  <div>
`;

$mainSection.innerHTML = mainSectionTemplate;

$main.append($mainSection);
