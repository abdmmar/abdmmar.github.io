function openPlayground(evt, playgroundName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName(`tabcontent`);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(playgroundName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.querySelector("#defaultOpen").click();

// Load Design Playground
const playgroundDesign = image => {
    //Create element and get element
    const li = document.createElement(`li`);
    const img = document.createElement(`img`);
    const playground = document.querySelector(`.playground`);

    //append attribut
    li.append(img);
    playground.append(li);

    img.setAttribute(`src`, `asset/pg_design/${image}.png`);
}

const arrayImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

arrayImages.forEach(image => playgroundDesign(image));

// Load Code Playground
const pg_code = [
    {
        id: 1,
        link: `https://github.com/abdmmar/finalproject-roombookingsystem`,
        name: `Room Booking System 2019`,
        year: `2020`,
        category: `Final Project`,
        img: `room-booking`
    }
];

const playgroundCode = code => {
    //Create element and get element
    const article = document.createElement(`article`);
    const a = document.createElement(`a`);
    const img = document.createElement(`img`);
    const h3 = document.createElement(`h3`);
    const p = document.createElement(`p`);
    const small = document.createElement(`small`);
    const playgroundCode = document.querySelector(`.playgroundCode`);

    //append attribut
    a.append(img);
    a.append(h3);
    p.append(small);
    article.append(a);
    article.append(p);
    playgroundCode.append(article);

    a.setAttribute(`href`, `${code.link}` );
    img.setAttribute(`src`, `asset/pg_code/${code.img}.png`);
    img.setAttribute(`alt`, `${code.name}`);
    h3.innerHTML = code.name;
    small.innerHTML = `${code.year} | ${code.category}`;
}

pg_code.forEach(code => playgroundCode(code));
