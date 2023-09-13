import "./footer.css";
const $footer = document.querySelector("footer");

const insta = "../public/assets/icons8-instagram-48.png";
const linkedIn = "../public/assets/icons8-linkedin-48.png";
const twitter = "../public/assets/icons8-twitter-squared-48.png";
const github = "../public/assets/icons8-github-48.png";

$footer.innerHTML = `
<div><a href="#"><img src="${linkedIn}" alt="my linkedIn"></a></div>
<div><a href="#"><img src="${github}" alt="mu gitHub"></a></div>
<div><a href="#"><img src="${twitter}" alt="my (not X)"></a></div>
<div><a href="#"><img src="${insta}" alt="my Instagram"></a></div>`;
