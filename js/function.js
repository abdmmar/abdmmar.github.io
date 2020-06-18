// Underline Navbar
$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('.navbar').addClass('under');
    } else{
        $('.navbar').removeClass('under');
    }
});

// Copy Email To Clipboard
const clipboard = document.querySelector('#clipboard');
const tooltip = document.querySelector('#myTooltip');

clipboard.addEventListener('click', () => {
    /* Select the text field */

    const copyText = document.querySelector('#mail');
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand('copy');

    /* Alert the copied text */
    tooltip.innerHTML = `Copied`;
});

tooltip.addEventListener('mouseout', () => {
    tooltip.innerHTML = 'Copy';
});

//Responsive Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const mainMenu = document.getElementsByClassName('main-menu')[0]

toggleButton.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
  toggleButton.classList.toggle('active')
})



  