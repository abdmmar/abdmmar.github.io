const workContent = workData => {
    //Create element and get element
    const article = document.createElement(`article`);
    const div = document.createElement(`div`);
    const img = document.createElement(`img`);
    const h3 = document.createElement(`h3`);
    const small = document.createElement(`p`);
    const work = document.querySelector(`.work`);

    article.setAttribute(`tabindex`, `0`);
    article.setAttribute(`data-id`, `${workData.id}`);
    img.setAttribute(`src`, `../src/asset/work/${workData.id}.png`);
    img.setAttribute(`alt`, `${workData.name}`);
    div.classList.add(`work-detail`);
    h3.innerHTML = workData.name;
    small.innerHTML = `${workData.year} | ${workData.category}`;

    //append attribut
    div.append(h3);
    div.append(small);
    article.append(img);
    article.append(div);
    work.appendChild(article);
}

export {workContent};