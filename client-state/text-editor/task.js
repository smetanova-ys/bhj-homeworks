'use strict';

let editor = document.getElementById('editor');

function saveText() {
    if (editor.value !== '') {
        localStorage.setItem('text', editor.value);
    }
}

function getText() {
    editor.value = localStorage.getItem('text');
}

window.onload = () => editor.value = '';
editor.addEventListener('focus', getText);
editor.addEventListener('change', saveText);
