'use strict';

let modalWin = document.getElementById('subscribe-modal');
let close = modalWin.querySelector('.modal__close');
//console.log(document.cookie);

function closeModalWin() {
    modalWin.classList.remove('modal_active');
    document.cookie = 'closed=true';
    //console.log(document.cookie);
}

function checkCookie() {
    if (document.cookie != 'closed=true') {
        modalWin.classList.add('modal_active');
    }
}

window.addEventListener('load', checkCookie);
close.addEventListener('click', closeModalWin);