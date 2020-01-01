'use strict';

const redBadge = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const message = document.getElementById('chat-widget__messages');

function getDateAndTime() {
    return new Date().toLocaleTimeString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
    });
}

let phrases = ['Вы не купили ни одного товара, чтобы так с нами разговаривать!', 
'Кто тут?', 'Где Ваша совесть?', 'К сожалению, все операторы сейчас заняты. Не пишите нам больше.', 
'Добрый день! До свидания!', 'Мы ничего не будем Вам продавать!', 'Никуда не уходите, я скоро вернусь.', 'Не мешайте, я думаю!'];

redBadge.addEventListener('click', function() {
    redBadge.classList.add('chat-widget_active');
});

chatInput.addEventListener('change', sendMessage);

function sendMessage(event) {
    message.innerHTML += `
    <div class='message message_client'>
    <div class='message__time'>${getDateAndTime()}</div>
    <div class='message__text'>${event.target.value}</div>
    </div>`;
    event.target.value = '';
    getReplyBot(phrases);
}

function getReplyBot(phrases) {
    const random = Math.floor(Math.random() * phrases.length);

    message.innerHTML += `
    <div class='message'>
    <div class='message__time'>${getDateAndTime()}</div>
    <div class='message__text'>${phrases[random]}</div>
    </div>`;
}
