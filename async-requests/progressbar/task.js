'use strict';

let progress = document.getElementById('progress');
let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(form);

    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    request.upload.onprogress = function (event) {
        console.log(`Отправлено ${event.loaded} из ${event.total} байт`);
        progress.value = event.loaded;
    }

    request.upload.onerror = function() {
        console.log(`Произошла ошибка во время отправки: ${request.status}`);
    }

    request.onprogress = function(event) {
        progress.value = event.loaded;
    }

    request.send(formData);
});