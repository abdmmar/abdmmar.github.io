import {workContent} from '../components/card-item.js'
import {dataWorks} from '../data/data-source.js';
import {detailWorks} from '../data/data-detail.js';

const main = () => {
    // Copy Email To Clipboard
    const clipboard = document.querySelector('#clipboard');
    const tooltip = document.querySelector('#myTooltip');
    const pathname = window.location.pathname;
    
    clipboard.addEventListener('click', () => {
        /* Select the text field */
        const copyText = document.querySelector('#mail');
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
        
        /* Copy the text inside the text field */
        document.execCommand('copy');
        
        /* Alert the copied text */
        tooltip.innerHTML = `Email addres copied to clipboard🎉`;
    });
    
    tooltip.addEventListener('mouseout', () => {
        tooltip.innerHTML = 'Copy email to clipboard';
    });

    if(pathname === `/index.html`){
        dataWorks.forEach(workData => workContent(workData));

        const modal = document.querySelector(".modal");
        const trigger = document.querySelectorAll(".work article");
        const closeButton = document.querySelector(".close-button");

        function toggleModal() {
            modal.classList.toggle("show-modal");
            this.blur();
            closeButton.focus();
            const workId = this.getAttribute(`data-id`);
            const result = workItem(workId);
            renderResult(result);
        }

        function closeModal() {
            modal.classList.toggle("show-modal");
        }

        function workItem(num){
            return detailWorks.find(detailWork => detailWork.id == num);
        }

        function renderResult(result){
            const yearCategory = document.querySelector(`.modal-header > h3`);
            const title = document.querySelector(`.modal-main-title > h1`);
            const shortDesc = document.querySelector(`.modal-main-description > h2`);
            const jumbotron = document.querySelector(`.modal-jumbotron > img`);
            const longDesc = document.querySelector(`.modal-content-detail > div`);
            const contentImg = document.querySelector(`.modal-content-images`);
            const role = document.querySelector(`.modal-footer-role dd`);
            const client = document.querySelector(`.modal-footer-client dd`);
            const discipline = document.querySelector(`.modal-footer-discipline dd`);
            const sector = document.querySelector(`.modal-footer-sector dd`);
            const teams = document.querySelectorAll(`.modal-footer-teams dd`);
            
            yearCategory.innerHTML = `${result.year} | ${result.category}`;
            title.innerHTML = result.title;
            shortDesc.innerHTML = result.shortDescription;
            jumbotron.setAttribute(`src`, result.jumbotron);
            longDesc.innerHTML = result.description;
            contentImg.innerHTML = ``;
            
            result.images.forEach(image => {
                const img = document.createElement(`img`);
                img.setAttribute(`src`, `${image}`);
                img.setAttribute(`alt`, `${result.title}`)
                img.setAttribute(`loading`, `lazy`)
                contentImg.append(img);
            });

            role.innerHTML = result.role;
            client.innerHTML = result.client;
            discipline.innerHTML = result.discipline;
            sector.innerHTML = result.sector;
            let i = 0;
            for(const member of teams){
                member.innerHTML = result.teams[i];
                i++;
            }
        }

        function windowOnClick(event) {
            if (event.target === modal) {
                closeModal();
            }
        }

        trigger.forEach(trig => {
            trig.addEventListener("click", toggleModal);
            trig.addEventListener("keypress", toggleModal);
        })
        
        closeButton.addEventListener("click", closeModal);
        closeButton.addEventListener("keypress", closeModal);
        window.addEventListener("click", windowOnClick);
    }
    

    
}

export default main;


  