'use strict';

let accentuatedPhrases = document.getElementsByClassName('has-tooltip');

function showTip(event) {
    event.preventDefault();
    let accentuatedElement = event.target;
    let tip = accentuatedElement.title;
    let tooltip = document.createElement('div');
    tooltip.setAttribute('class', 'tooltip');
    tooltip.style.left = accentuatedElement.offsetLeft + 'px';
    tooltip.style.top = accentuatedElement.offsetTop + 20 + 'px';
    tooltip.style.position = 'absolute';
    tooltip.textContent = tip;
    accentuatedElement.insertAdjacentElement('afterend', tooltip);

    let tooltips = document.getElementsByClassName('tooltip');
    for (let item of tooltips) {
        item.classList.remove('tooltip_active');
    }

    tooltip.classList.toggle('tooltip_active');
}

for (let i = 0; i < accentuatedPhrases.length; i++) {
    accentuatedPhrases.item(i).addEventListener('click', showTip);
}