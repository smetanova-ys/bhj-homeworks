'use strict';

let editor = document.getElementById('editor');
let btn = document.createElement('button');
btn.setAttribute('type', 'reset');
btn.setAttribute('style', 'font-size: 14px; color: black; display: block;');
btn.innerText = 'Очистить';
editor.insertAdjacentElement('afterend', btn);

if (localStorage.getItem('text')) {
    editor.value = localStorage.getItem('text');
}

function saveText() {
    if (editor.value !== '') {
        localStorage.setItem('text', editor.value);
    }
}

function clear() {
    editor.value = '';
    localStorage.clear();
}

editor.addEventListener('input', saveText);
btn.addEventListener('click', clear);
