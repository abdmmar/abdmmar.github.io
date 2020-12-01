import { projectsItem } from "../components/card-item.js";
import { dataProjects } from "../data/data-source.js";
import splitting from "https://cdn.skypack.dev/splitting@~1.0.6";

const main = () => {
  const pathname = window.location.pathname;
  const lengthProject = dataProjects.length - 1;

  splitting();

  // Print project to the page
  if (pathname === "/") {
    // Print recent project
    for (let index = lengthProject; index > lengthProject - 3; index--) {
      projectsItem(dataProjects[index]);
    }
  } else if (pathname === "/projects.html") {
    // Print all project
    for (let index = lengthProject; index >= 0; index--) {
      projectsItem(dataProjects[index]);
    }
  }
};

export default main;
