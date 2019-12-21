"use strict";

let left = document.getElementsByClassName("slider__arrow_prev");
let right = document.getElementsByClassName("slider__arrow_next");
let sliderItems = document.getElementsByClassName("slider__item");
let arrSlider = Array.from(sliderItems);

right.item(0).onclick = () => {

    for (let i = 0; i < arrSlider.length; i++) {
        if (arrSlider[i].getAttribute("class") == "slider__item slider__item_active") {
            arrSlider[i].classList.remove("slider__item_active");
            if (i === arrSlider.length - 1) {
                i = 0;
            } else {
                i++;
            }
            arrSlider[i].classList.add("slider__item_active");
        }
    }
};

left.item(0).onclick = () => {

    for (let i = arrSlider.length - 1; i < arrSlider.length; i--) {
        if (arrSlider[i].getAttribute("class") == "slider__item slider__item_active") {
            arrSlider[i].classList.remove("slider__item_active");
            if (i === 0) {
                i = arrSlider.length - 1;
            } else {
                i--;
            }
            arrSlider[i].classList.add("slider__item_active");
        }
    }
};
