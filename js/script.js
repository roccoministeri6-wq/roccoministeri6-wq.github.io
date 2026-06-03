
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
