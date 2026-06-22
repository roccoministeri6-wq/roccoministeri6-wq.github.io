
const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        document.getElementById("successMessage").innerText =
        "Messaggio inviato con successo!";

    });

}
const factElement = document.getElementById("tech-fact");

if(factElement){

fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")

.then(response => response.json())

.then(data => {

    factElement.innerText = data.text;

})

.catch(() => {

    factElement.innerText =
    "Curiosità non disponibile al momento.";

});

}
const languages = [
    "Italiano",
    "Inglese",
    "Spagnolo",
    "Russo"
];

const qualities1 = [
    "Dedizione",
    "Leadership",
    "Empatia",
    "Problem Solving"
];

const qualities2 = [
    "Motivazione",
    "Teamwork",
    "Public Speaking",
    "Comunicazione"
];

let languageIndex = 0;
let qualityIndex1 = 0;
let qualityIndex2 = 0;

const languageElement = document.getElementById("languages-rotate");
const qualityElement1 = document.getElementById("skill-rotate-1");
const qualityElement2 = document.getElementById("skill-rotate-2");

if(languageElement){

    setInterval(() => {

        languageIndex =
        (languageIndex + 1) % languages.length;

        languageElement.innerText =
        languages[languageIndex];

    }, 2000);

}

if(qualityElement1){

    setInterval(() => {

        qualityIndex1 =
        (qualityIndex1 + 1) % qualities1.length;

        qualityElement1.innerText =
        qualities1[qualityIndex1];

    }, 2000);

}

if(qualityElement2){

    setInterval(() => {

        qualityIndex2 =
        (qualityIndex2 + 1) % qualities2.length;

        qualityElement2.innerText =
        qualities2[qualityIndex2];

    }, 2000);

}
