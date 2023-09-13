import "./footer.css";
const $footer = document.querySelector("footer");

const insta = "../assets/icons8-instagram-48.png";
const linkedIn = "../assets/icons8-linkedin-48.png";
const twitter = "../assets/icons8-twitter-squared-48.png";
const github = "../assets/icons8-github-48.png";
const email = "../assets/icons8-email-48.png";

$footer.innerHTML = `
<div><a href="https://www.linkedin.com/in/virginia-raschia-545196280/" target="_blank"><img src="${linkedIn}" alt="my linkedIn"></a></div>
<div><a href="https://github.com/willCodeForCandy" target="_blank"><img src="${github}" alt="mu gitHub"></a></div>
<div><a href="https://twitter.com/virginia7_9" target="_blank"><img src="${twitter}" alt="my (not X)"></a></div>
<div><a href="https://www.instagram.com/lavirgin7/" target="_blank"><img src="${insta}" alt="my Instagram"></a></div>
<div><a href="mailto:viraschia@gmail.com" target="_blank"><img src="${email}" alt="email me"></a></div>`;
