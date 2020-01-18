'use strict';

let preloader = document.getElementById('loader');
let items = document.getElementById('items');

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/');
request.send();

request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        preloader.classList.remove('loader_active');
        let data = JSON.parse(request.responseText);
        
        let valute = data.response.Valute;
        for (let index in valute) {
            let currency = valute[index];
            let curName = currency.CharCode;
            let sum = currency.Value;

            let currencyEl = document.createElement('div');
            currencyEl.setAttribute('class', 'item');
            currencyEl.insertAdjacentHTML('afterbegin', `<div class='item__code'>${curName}</div>
            <div class='item__value'>${sum}</div>
            <div class='item__currency'>руб.</div>`);
            items.insertAdjacentElement('beforeend', currencyEl);
        }
    }
};
