
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
