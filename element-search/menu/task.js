"use strict";

let links = document.querySelectorAll(".menu__item");
let arrLinks = Array.from(links);

let menuWithSub = document.querySelectorAll(".menu_sub");
let arrMenuSub = Array.from(menuWithSub);

for (let link of arrLinks) {
    if (link.querySelector(".menu_sub")) {
        link.querySelector(".menu__link").onclick = () => {
            arrMenuSub.forEach(el => el.className = "menu menu_sub");
            link.querySelector(".menu_sub").className = "menu menu_sub menu_active";
            return false;
        }
    }
}
