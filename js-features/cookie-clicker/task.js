"use strict";

let cookie = document.getElementById("cookie");

cookie.onclick = function() {
    let counter = document.getElementById("clicker__counter");
    counter.innerHTML ++;

    if (counter.innerHTML % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 300;
    }
};