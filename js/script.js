const messages = [
    "Hi...",
    "Maaf menunggu lama...",
    "Selamat hari Valentine Bintang✨!",
    "Mungkin ini ga seberapa, dan telat banget!",
    "Tapi semoga suka :)"
];

let messageIndex = 0;
let charIndex = 0;
const typingSpeed = 80;         
const pauseAfterMessage = 2000;  
const fadeDuration = 500;       
const typingElement = document.getElementById("typing");

function typeMessage() {
    if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
            typingElement.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeMessage, typingSpeed);
        } else {
            setTimeout(fadeOutMessage, pauseAfterMessage);
        }
    } else {
        document.getElementById("typing-container").style.display = "none";
        document.querySelector(".gallery").style.display = "grid";
        document.querySelector(".button-container").style.display = "block";
        
        const header = document.getElementById("headlinecontainer");
        header.style.transition = `opacity ${fadeDuration}ms ease`;
        header.style.opacity = 1;
    }
}

function fadeOutMessage() {
    typingElement.style.transition = `opacity ${fadeDuration}ms ease`;
    typingElement.style.opacity = 0;
    setTimeout(() => {
        typingElement.textContent = "";
        typingElement.style.opacity = 1;
        typingElement.style.transition = "";
        charIndex = 0;
        messageIndex++;
        setTimeout(typeMessage, 500);
    }, fadeDuration);
}

window.onload = function () {
    typeMessage();
}
