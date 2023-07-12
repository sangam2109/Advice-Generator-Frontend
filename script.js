// Store the speech synthesis object
const synth = window.speechSynthesis;


const adviceText = document.getElementById('advice-text');


const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// SpeechSynthesisUtterance object to hold the current speech
let currentSpeech = null;

// Function to play the speech
function playSpeech() {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
        // Create a new SpeechSynthesisUtterance
        currentSpeech = new SpeechSynthesisUtterance(adviceText.textContent);

        // Play the speech
        synth.speak(currentSpeech);
    }
}

// Function to pause the speech
function pauseSpeech() {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
        // Pause the speech
        synth.cancel();
    }
}

// Add event listeners to the play and pause buttons
playButton.addEventListener('click', playSpeech);
pauseButton.addEventListener('click', pauseSpeech);



document.addEventListener("DOMContentLoaded", function () {
    const advice = document.getElementById("advice-id");
    const dice = document.getElementById("dice");

    dice.addEventListener("click", function () {
        const randomid = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
        advice.innerHTML = randomid;
    });
});

async function fetchquote() {
    var url = "https://type.fit/api/quotes";


    const response = await fetch(url);
    // console.log(typeof response);

    const allQuotes = await response.json();

    const indx = Math.floor(Math.random() * allQuotes.length);
    const quotePosition = document.getElementById("advice-text")
    const quote = allQuotes[indx].text;
    quotePosition.innerHTML = quote;
}

