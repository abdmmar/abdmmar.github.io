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

const playgroundContent = image => {
    //Create element and get element
    const li = document.createElement(`li`);
    const img = document.createElement(`img`);
    const playground = document.querySelector(`.playground`);

    //append attribut
    li.append(img);
    playground.append(li);

    img.setAttribute(`src`, `asset/playground/${image}.png`);
}

const arrayImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

arrayImages.forEach(image => playgroundContent(image));