'use strict';

let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
let buttons = document.getElementsByClassName('poll__answer');

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        let poll = JSON.parse(request.responseText);
        //console.log(poll.data);
        pollTitle.innerText = poll.data.title;
        let answers = poll.data.answers;
        for (let i = 0; i < answers.length; i++) {
            let answer = document.createElement('button');
            answer.setAttribute('class', 'poll__answer');
            answer.innerText = answers[i];
            pollAnswers.insertAdjacentElement('beforeend', answer);
        }
        
        for (let button of buttons) {
            button.onclick = () => window.alert('Спасибо, Ваш голос засчитан!');
        }
    }
};
