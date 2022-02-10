const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.setAttribute("style", "color: red");

container.appendChild(para);

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!";
heading.setAttribute("style", "color: blue");

container.appendChild(heading);

const box = document.createElement("div");
box.setAttribute(
  "style",
  "background: pink; border: solid; width: 200px; height: 200px"
);

const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";
box.appendChild(divHeading);
const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";
box.appendChild(divPara);
container.appendChild(box);
