"use strict";

function init () {
    let timer = document.getElementById("timer");
    timer.innerHTML = timer.innerHTML - 1;

    if (timer.innerHTML <= 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(timerStart);
    }
};

let timerStart = setInterval(init, 1000);