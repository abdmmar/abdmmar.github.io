// $(window).on("scroll", function(){
//     if($(window).scrollTop()){
//         $('header').addClass('under');
//     } else{
//         $('header').removeClass('under');
//     }
// });

// window.addEventListener("scroll", function(){
//     if(window.scrollTop()){
//         document.querySelector('.header').classList.add('under');
//     }else{
//         document.querySelector('.header').classList.remove('under');
//     }
// })

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


    const clipboard = document.querySelector("#clipboard");
    const tooltip = document.querySelector("#myTooltip");
    clipboard.addEventListener("click", () => {
        /* Select the text field */

        const copyText = document.querySelector("#mail");
        copyText.focus();
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        tooltip.innerHTML = "Copied";
    });

    tooltip.addEventListener("mouseout", () => {
        tooltip.innerHTML = "Copy";
    })



  