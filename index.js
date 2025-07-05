//Перевір в який рік ти народився
function checkLeapYear() {
  let year = document.getElementById("birthYear").value;
  let text = document.getElementById("textId");

  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

  if (isLeapYear) {
    text.innerHTML = "Ви народилися у високосний рік!";
    text.style.color = "green";
  } else {
    text.innerHTML = "Ви народилися у звичайному році!";
    text.style.color = "red";
  }
}



// Вгадай число, яке загадав комп’ютер



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
  } else if (guess > 10 || guess < 0) {
    message.innerHTML = "Невірно!";
    message.style.color = "red";
  } else {
    message.innerHTML = `Невірно! Спробуйте ще раз. Число було (${randomNumber})`;
    message.style.color = "red";
  }
  randomNumber = generateRandomNumber();
}



// Камінь - ножиці - папір



let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(userChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (userChoice === computerChoice) {
    result = "Нічия!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "Ви виграли раунд!";
    userScore++;
  } else {
    result = "Комп'ютер виграв раунд!";
    computerScore++;
  }

  document.querySelector(".result").textContent = result;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function computerPlay() {
  const computerChoice = getComputerChoice();
  alert(`Комп'ютер вибрав: ${computerChoice}`);
}



// Калькулятор



function calculate(operation) {
  let a = parseFloat(document.getElementById("input-number").value);
  let b = parseFloat(document.getElementById("input-field").value);
  let result;

  document.getElementById("plusButton").addEventListener("click", function () {
    calculate("plus");
  });

  document.getElementById("timesButton").addEventListener("click", function () {
    calculate("times");
  });

  document.getElementById("minusButton").addEventListener("click", function () {
    calculate("minus");
  });

  document
    .getElementById("divideButton")
    .addEventListener("click", function () {
      calculate("divide");
    });

  if (operation === "plus") {
    result = a + b;
  } else if (operation === "minus") {
    result = a - b;
  } else if (operation === "times") {
    result = a * b;
  } else if (operation === "divide") {
    if (b === 0) {
      result = "Помилка: ділення на нуль";
    } else {
      result = a / b;
    }
  }

  document.getElementById("result").innerHTML = result;
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
  document.getElementById(
    "outputTime"
  ).textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
}



// DINO


const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let isAlive = null;

// Прыжок по клавише
document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

// Функция запуска игры
function startGame() {
  cactus.style.animationPlayState = "running";

  isAlive = setInterval(function () {
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

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



// Футбол


const field = document.getElementById("field");
const ball = document.getElementById("ball");
const ballRadius = ball.offsetWidth / 2;
field.addEventListener("click", ({ clientX, clientY }) => {
  const { left, top, width, height } = field.getBoundingClientRect();
  const x = Math.min(
    Math.max(clientX - left - ballRadius, 0),
    width - ball.offsetWidth
  );
  const y = Math.min(
    Math.max(clientY - top - ballRadius, 0),
    height - ball.offsetHeight
  );
  Object.assign(ball.style, { left: `${x}px`, top: `${y}px` });
});



// Введіть 3 числа


const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const output = document.getElementById("myParagraph");

// Додаємо слухачі подій input
input1.addEventListener("input", handleInput);
input2.addEventListener("input", handleInput);
input3.addEventListener("input", handleInput);

function handleInput() {
  const val1 = input1.value.trim();
  const val2 = input2.value.trim();
  const val3 = input3.value.trim();

  const num1 = parseFloat(val1);
  const num2 = parseFloat(val2);
  const num3 = parseFloat(val3);

  if (val1 === "" || val2 === "" || val3 === "") {
    output.textContent = "Введіть усі три числа.";
    return;
  }

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    output.textContent = "Будь ласка, введіть тільки числові значення.";
    return;
  }

  const max = Math.max(num1, num2, num3);
  output.textContent = `Найбільше число, яке ви ввели - ${max}`;
}



// Наша команда


// new Swiper('.buttton_click_slide_box', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   },
// });



//Обери вченого/их

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

let ageSum = scientists.reduce((sum, scientists) => {
    return sum + (scientists.born - scientists.dead);
  });
  
  //1
  const scientistItemList = document.querySelectorAll(".item-list");
  const scientistswasborn = document.getElementById("list1");
  scientistswasborn.addEventListener("click", (event) => {
    let scientistsNot19th = scientists.filter(
      (scientist) => scientist.born >= 1801
    );
    scientistItemList.forEach((element, idx) => {
      if (scientistsNot19th[idx]) {
        element.textContent = `${scientistsNot19th[idx].name} ${scientistsNot19th[idx].surname}`;
      }
    });
  });

  //2
  const sorfOfNames = document.getElementById("list2");
  sorfOfNames.addEventListener("click", (event) => {
    const filteredScientists = scientists.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    let albertEinsteinWasBorn = scientists.find(
      (scientist) => scientist.surname === "Einstein"
    );
  
    if (albertEinsteinWasBorn && scientistItemList.length > 0) {
      scientistItemList[0].style.backgroundImage = `url("${albertEinsteinWasBorn.url}")`;
    }
  });
  //3
  const sortOfDaysGone = document.getElementById("list3");
  sortOfDaysGone.addEventListener("click", (event) => {
    let sortedByAge = scientists.sort(
      (a, b) => a.dead - a.born - (b.dead - b.born)
    );
    scientistItemList.forEach((element, idx) => {
      if (sortedByAge[idx]) {
        element.textContent = `${sortedByAge[idx].name} ${sortedByAge[idx].surname}`;
      }
    });
  });

  //4
  const wasBornLeiter = document.getElementById("list4");
  wasBornLeiter.addEventListener("click", () => {
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    let youngestScientist = scientists.reduce(
      (youngest, scientist) =>
        scientist.born > youngest.born ? scientist : youngest,
      scientists[0]
    );
  
    if (scientistItemList.length > 0) {
      scientistItemList[0].textContent = `${youngestScientist.name} ${youngestScientist.surname}`;
    }
  });

  //5
  
  const einsteinBorn = document.getElementById("list5");
  
  einsteinBorn.addEventListener("click", () => {
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    let albertEinsteinWasBorn = scientists.find(
      (scientist) => scientist.surname === "Einstein"
    );
  });
  
  //6
  const secondNameC = document.getElementById("list6");
  secondNameC.addEventListener("click", (event) => {
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    const scientistsWithC = scientists.filter(
      (scientist) => scientist.surname[0] === "C"
    );
    scientistItemList.forEach((element, idx) => {
      if (scientistsWithC[idx]) {
        element.textContent = `${scientistsWithC[idx].name} ${scientistsWithC[idx].surname}`;
      }
    });
  });

  //7
  const filterOfNamesA = document.getElementById("list7");
  filterOfNamesA.addEventListener("click", (event) => {
    const updatedScientists = scientists.filter(
      (scientist) => scientist.name[0] !== "A"
    );
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
    scientistItemList.forEach((element, idx) => {
      if (updatedScientists[idx]) {
        element.textContent = `${updatedScientists[idx].name} ${updatedScientists[idx].surname}`;
      }
    });
  });

  //8
  const findTheScientistsHadLife = document.getElementById("list8");
  findTheScientistsHadLife.addEventListener("click", (event) => {});
  const firstLetter = document.getElementById("list9");
  firstLetter.addEventListener("click", (event) => {
    console.log();
  });
  const namesFirstLetter = document.getElementById("list9");
  
  namesFirstLetter.addEventListener("click", () => {
    const filteredScientists = scientists.filter(
      (scientist) =>
        scientist.name[0].toUpperCase() === scientist.surname[0].toUpperCase()
    );
  
    scientistItemList.forEach((element) => {
      element.textContent = "";
    });
  
    scientistItemList.forEach((element, idx) => {
      if (filteredScientists[idx]) {
        element.textContent = `${filteredScientists[idx].name} ${filteredScientists[idx].surname}`;
      }
    });
  });


//модалка
let buttonForModal = document.querySelector(".buttons");
  buttonForModal.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "block";
  });
  let closeModal = document.getElementById("modal_close");
  closeModal.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
  });
  let modalBackgroung = document.getElementById("modal_backgroung");
  
  // modalBackgroung.onclick = closeModal.onclick = closeModal;
  modalBackgroung.addEventListener("click", (event) => {
    modal.style.display = "none";
  });
