let birthYear = ;


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


const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump()
});

function jump() {
    if(dino.classList !="jump") {
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 300);
}

let isAlite = setInterval (function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // alert("GAME OVER!!")
    }
}, 10)