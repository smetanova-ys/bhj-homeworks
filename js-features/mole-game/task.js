"use strict";

let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let holes = document.getElementsByClassName("hole");

function getHole(index) {
    let hole = document.getElementById(`hole${index}`);
    return hole;
}

for (let i = 1; i <= holes.length; i++) {
    getHole(i).onclick = function() {
        if (this.className.includes("hole_has-mole")) {
            dead.innerHTML++;
            if (dead.innerHTML == 10) {
                alert("Вы победили!");
                dead.innerHTML = 0;
                lost.innerHTML = 0;
            }
        } else {
            lost.innerHTML++;
            if (lost.innerHTML == 5) {
                alert("Вы проиграли!");
                dead.innerHTML = 0;
                lost.innerHTML = 0;
            }
        }
    }
}
