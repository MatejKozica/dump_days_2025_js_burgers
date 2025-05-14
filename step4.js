let chosenBurger = null;

const logger = document.getElementById("logger");
const form = document.querySelector("form");

function burgerCreationStep(stepDescription) {
    return new Promise((resolve, reject) => {
        try{
            const logText = document.createElement("p");
            logText.innerHTML = stepDescription;
            logger.appendChild(logText)
            setTimeout(() => {
                logText.innerHTML += "✅";
                resolve();
            }, 1000)
        } catch(err) {
            reject(err);
        }
    })
}

async function makeBurger() {
    document.getElementById("loading").style.display = "block";

    await burgerCreationStep("Grilling burger...");
    await burgerCreationStep("Preparing buns...");
    await burgerCreationStep("Preparing vegetables...");
    await burgerCreationStep("Assembling burger...");

    document.getElementById("loading").style.display = "none";
    document.getElementById("result").innerHTML = chosenBurger;
}

function setBurger(e) {
    const data = new FormData(form)

    let output = "";
    for (const entry of data.values()) {
      output = entry
    }
    chosenBurger = output;
    e.preventDefault()

    makeBurger().then(() => {
        document.getElementById("result").innerHTML = chosenBurger;
    })
}

form.addEventListener("submit", setBurger)


