const logger = document.getElementById("logger");
const form = document.querySelector("form");

function burgerCreationStep(stepDescription, duration = 1000) {
    return new Promise((resolve, reject) => {
        try{
            const logText = document.createElement("p");
            logText.innerHTML = stepDescription;
            logger.appendChild(logText)
            setTimeout(() => {
                logText.innerHTML += "✅";
                resolve();
            }, duration)
        } catch(err) {
            reject(err);
        }
    })
}

async function makeBurger(chosenBurger) {
    document.getElementById("loading").style.display = "block";

    await Promise.all([
        burgerCreationStep("Grilling burger...", 3000), 
        burgerCreationStep("Preparing buns..."),
        burgerCreationStep("Preparing vegetables..."),
    ])

     await burgerCreationStep("Assembling burger...", 1000)

    document.getElementById("loading").style.display = "none";
    document.getElementById(`${chosenBurger}-display`).style.display = "block";
}

function cleanup() {
    logger.innerHTML = "";
    const burgers = document.getElementsByClassName("burger")

    for(const burger of burgers) {
        burger.style.display = "none";
    }
    
}

function setBurger(e) {
    cleanup();
    
    const data = new FormData(form)

    let output = "";
    for (const entry of data.values()) {
      output = entry
    }
    chosenBurger = output;
    e.preventDefault()

    makeBurger(chosenBurger);
}

form.addEventListener("submit", setBurger)


