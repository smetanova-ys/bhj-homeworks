'use strict';

let insertedList = document.getElementsByClassName('interests_active');

for (let i = 0; i < insertedList.length; i++) {
    let mainInterest = insertedList.item(i).closest('.interest').firstElementChild.firstElementChild;
    let insertedItems = insertedList.item(i).querySelectorAll('.interest__check');

    mainInterest.addEventListener('change', function () {
        if (this.checked) {
            for (let item of insertedItems) {
                item.checked = true;
            }
        } else {
            for (let item of insertedItems) {
                item.checked = false;
            }
        }
    });
}