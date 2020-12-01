const projectsItem = (project) => {
  //Create element and get element
  const article = document.createElement("article");
  const div = document.createElement("div");
  const a = document.createElement("a");
  const h3 = document.createElement("h3");
  const description = document.createElement("p");
  const tag = document.createElement("small");

  // Tag to append all project item
  const work = document.querySelector(".work");

  // Insert content
  description.innerHTML = project.description;
  a.setAttribute("href", `${project.link}`);
  project.link.includes("https://") && a.setAttribute("target", "_blank");
  a.innerHTML = project.name;
  tag.setAttribute("class", "tag");
  tag.innerHTML = `${project.year} • ${project.category}`;

  //append attribut
  h3.append(a);
  div.append(h3);
  div.append(description);
  div.append(tag);
  article.append(div);
  work.appendChild(article);
};

export { projectsItem };
