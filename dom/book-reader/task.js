"use strict";

const book = document.getElementById("book");
const sizeElements = Array.from(document.getElementsByClassName("font-size"));

for (let i = 0; i < sizeElements.length; i++) {
    let sizeElement = sizeElements[i];
    sizeElement.addEventListener("click", function() {
        sizeElements.forEach(el => el.classList.remove("font-size_active"));
        sizeElement.classList.add("font-size_active");
        event.preventDefault();

        let size = sizeElement.dataset.size;
        switch(size) {
            case undefined:
                book.setAttribute("class", "book");
                break;
                case "small":
                    book.setAttribute("class", "book");
                    book.classList.add("book_fs-small");
                    break;
                    case "big":
                        book.setAttribute("class", "book");
                        book.classList.add("book_fs-big");
                        break;
        }
    });
}