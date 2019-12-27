"use strict";

const rotators = document.getElementsByClassName("rotator");

for (let i = 0; i < rotators.length; i++) {
    let rotator = rotators.item(i);
    let phrase = rotator.querySelector(".rotator__case");

    function showNextPhrase() {
        if (phrase.classList.contains("rotator__case_active")) {
            phrase.classList.remove("rotator__case_active");
        }
        phrase = phrase.nextElementSibling;
        if (phrase == null) {
            phrase = rotator.querySelector(".rotator__case");
        }
        phrase.classList.add("rotator__case_active");
        if (phrase.classList.contains("rotator__case_active")) {
            let dye = phrase.dataset.color;
            phrase.style.color = dye;
        }
    }
    setInterval(showNextPhrase, 1000);
};