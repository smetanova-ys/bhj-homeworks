"use strict";

let links = document.querySelectorAll(".menu__item");
let arrLinks = Array.from(links);

let arrMenu = Array.from(document.getElementsByClassName("menu__link"));
let linksWithSub = [];
for (let i = 0; i < arrMenu.length; i++) {
    if (arrMenu[i].getAttribute("href") == "") {
        linksWithSub.push(arrMenu[i]);
    }
}

let company = linksWithSub[0];
let service = linksWithSub[1];

company.onclick = () => {
    let companySubmenu = company.parentElement.querySelector(".menu_sub");
    if (companySubmenu.getAttribute("class") == "menu menu_sub") {
        companySubmenu.setAttribute("class", "menu menu_sub menu_active");
        return false;
    } else {
        companySubmenu.setAttribute("class", "menu menu_sub");
    }
}

service.onclick = () => {
    let serviceSubmenu = service.parentElement.querySelector(".menu_sub");
    if (serviceSubmenu.getAttribute("class") == "menu menu_sub") {
        serviceSubmenu.setAttribute("class", "menu menu_sub menu_active");
        return false;
    } else {
        serviceSubmenu.setAttribute("class", "menu menu_sub");
    }
}
