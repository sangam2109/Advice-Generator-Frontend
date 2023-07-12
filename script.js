

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
    console.log(quote)
    console.log(quote.length)
    quotePosition.innerHTML = quote;
}
