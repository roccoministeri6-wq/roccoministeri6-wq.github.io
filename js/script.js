
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    let target;

    if(targetText.includes("500")){
        target = 500;
    }
    else if(targetText.includes("120")){
        target = 120;
    }
    else{
        return;
    }

    let count = 0;

    const updateCounter = () => {

        const increment = target / 50;

        count += increment;

        if(count < target){

            counter.innerText = Math.floor(count);

            setTimeout(updateCounter, 30);

        }else{

            if(target === 500){
                counter.innerText = "500K+";
            }

            if(target === 120){
                counter.innerText = "120+";
            }

        }

    };

    counter.innerText = "0";

    updateCounter();

});
const dashboardCounters = document.querySelectorAll(".stat-card h2[data-target]");

dashboardCounters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const interval = setInterval(() => {

        count++;

        counter.innerText = count;

        if(count >= target){

            clearInterval(interval);

            if(target === 500){
                counter.innerText = "500K+";
            }

            if(target === 120){
                counter.innerText = "120+";
            }

            if(target === 98){
                counter.innerText = "98%";
            }

        }

    }, 10);

});

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit", function(event){

        event.preventDefault();

        document.getElementById("successMessage").innerText =
        "Messaggio inviato con successo!";

    });

}
