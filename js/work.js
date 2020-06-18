const dataWorks = [
    {
        id: 1,
        link: `univesity-expo`,
        name: `University Expo 2019`,
        year: `2019`,
        category: `Brand Identity`
    },
    {
        id: 2,
        link: `suntree`,
        name: `Suntree`,
        year: `2020`,
        category: `Brand Identity`
    }, 
    {
        id: 3,
        link: `golden-techno`,
        name: `Golden Techno`,
        year: `2018`,
        category: `Brand Identity`
    },
    {
        id: 4,
        link: `mural-cafetaria`,
        name: `Mural Cafetaria ESQBS`,
        year: `2020`,
        category: `Illustration`
    }
];

//Work Content
const workContent = workData => {
    //Create element and get element
    const article = document.createElement(`article`);
    const a = document.createElement(`a`);
    const img = document.createElement(`img`);
    const h3 = document.createElement(`h3`);
    const p = document.createElement(`p`);
    const small = document.createElement(`small`);
    const work = document.querySelector(`.work`);

    //append attribut
    a.append(img);
    a.append(h3);
    p.append(small);
    article.append(a);
    article.append(p);
    work.append(article);

    a.setAttribute(`href`, `pages/work-detail-${workData.link}.html` );
    img.setAttribute(`src`, `asset/work/${workData.id}.png`);
    img.setAttribute(`alt`, `${workData.name}`);
    h3.innerHTML = workData.name;
    small.innerHTML = `${workData.year} | ${workData.category}`;
}

dataWorks.forEach(workData => workContent(workData));