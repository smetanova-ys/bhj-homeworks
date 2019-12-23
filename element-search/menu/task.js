"use strict";

let arrMenu = Array.from(document.getElementsByClassName("menu__link"));
let linksWithSub = [];
for (let i = 0; i < arrMenu.length; i++) {
    if (arrMenu[i].getAttribute("href") == "") {
        linksWithSub.push(arrMenu[i]);
    }
}

let subMenu;

for (let i = 0; i < linksWithSub.length; i++) {
    linksWithSub[i].onclick = () => {
        subMenu = linksWithSub[i].parentElement.querySelector(".menu_sub");
        if (subMenu.getAttribute("class") == "menu menu_sub") {
            subMenu.setAttribute("class", "menu menu_sub menu_active");
        } else {
            subMenu.setAttribute("class", "menu menu_sub");
        }
        return false;
    }
}
