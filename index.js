//Перевір в який рік ти народився
function checkLeapYear() {
    let year = document.getElementById("birthYear").value;
    let text = document.getElementById("textId");

    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

    if (isLeapYear) {
        text.innerHTML = "Ви народилися у високосний рік!";
        text.style.color = "green";
    } else {
        text.innerHTML = 'Ви народилися у звичайному році!';
        text.style.color = 'red';
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

let randomNumber = generateRandomNumber();

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (guess === randomNumber) {
        message.innerHTML = `Вітаю, ви вгадали число! (${randomNumber})`;
        message.style.color = "green";
    } else if(guess > 10 || guess < 0){
        message.innerHTML = 'Невірно!';
        message.style.color = 'red';
    } else{
        message.innerHTML = `Невірно! Спробуйте ще раз. Число було (${randomNumber})`;
        message.style.color = 'red';
    }
    randomNumber = generateRandomNumber();
}






//Калькулятор часу
function calculateTime() {
    let seconds = parseInt(document.getElementById("inputNumber").value);
    if (isNaN(seconds) || seconds < 0) {
        document.getElementById("outputTime").textContent = "Некоректне значення";
        return;
    }
    let days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;
    document.getElementById("outputTime").textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
}



// DINO
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let isAlive = null;

// Прыжок по клавише
document.addEventListener("keydown", function(event){
    jump();
});

function jump() {
    if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function() {
            dino.classList.remove("jump");
        }, 300);
    }
}

// Функция запуска игры
function startGame() {
    cactus.style.animationPlayState = "running";

    isAlive = setInterval(function(){
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
            alert("GAME OVER!!");
            stopGame(); // Останавливаем игру при проигрыше
        }
    }, 10);
}

// Функция остановки игры
function stopGame() {
    cactus.style.animationPlayState = "paused";
    clearInterval(isAlive);
    isAlive = null;
}

// Назначаем кнопкам действия
startBtn.onclick = startGame;
stopBtn.onclick = stopGame;

// Изначально игра на паузе
window.onload = () => {
    cactus.style.animationPlayState = "paused";
};