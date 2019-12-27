"use strict";

const reveals = document.getElementsByClassName("reveal");

window.addEventListener("scroll", function() {
    let viewportHeight = this.innerHeight;
    let elementTop;
    let elementBottom;
    for (let i = 0; i < reveals.length; i++) {
        elementTop = reveals.item(i).getBoundingClientRect().top;
        elementBottom = reveals.item(i).getBoundingClientRect().bottom;

        if (elementTop < viewportHeight && elementTop > 0 && elementBottom < viewportHeight && elementBottom > 0) {
            reveals.item(i).classList.add("reveal_active");
        } else {
            reveals.item(i).classList.remove("reveal_active");
        }
    }
});