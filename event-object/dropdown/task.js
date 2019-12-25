"use strict";

const dropdownBtn = Array.from(document.getElementsByClassName("dropdown"));

for (let i = 0; i < dropdownBtn.length; i++) {
    let dropdownValue = dropdownBtn[i].querySelector(".dropdown__value");
    let dropdownList = dropdownBtn[i].querySelector(".dropdown__list");
    let dropdownItems = dropdownBtn[i].querySelectorAll(".dropdown__item");
    
    dropdownValue.addEventListener("click", function() {
        dropdownList.classList.toggle("dropdown__list_active");
    });

    for (let j = 0; j < dropdownItems.length; j++) {
        dropdownItems.item(j).addEventListener("click", function() {
            if (dropdownItems.item(j).querySelector(".dropdown__link").getAttribute("href") == "") {
                event.preventDefault();
                dropdownValue.innerText = dropdownItems.item(j).querySelector(".dropdown__link").innerText;
                dropdownList.classList.remove("dropdown__list_active");
            }
        });
    }
}
