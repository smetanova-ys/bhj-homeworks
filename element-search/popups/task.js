"use strict";

let modals = document.getElementsByClassName("modal");
//console.log(Array.isArray(modals));
let arrModals = Array.from(modals);
//console.log(Array.isArray(arrModals));
//console.log(arrModals);
let firstmodalsEl = arrModals[0];
let secondmodalsEl = arrModals[1];

let buttons = document.getElementsByClassName("btn");
let redButton = buttons.item(0);
//console.log(redButton);
let close = document.querySelectorAll(".modal__close_times");

setTimeout(() => firstmodalsEl.setAttribute("class", "modal modal_active"), 3000);

redButton.onclick = () => {
    firstmodalsEl.setAttribute("class", "modal");
    secondmodalsEl.setAttribute("class", "modal modal_active");
};

close.item(0).onclick = () => firstmodalsEl.setAttribute("class", "modal");
close.item(1).onclick = () => secondmodalsEl.setAttribute("class", "modal");
