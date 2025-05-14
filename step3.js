let chosenBurger = null;

const logger = document.getElementById("logger");
const form = document.querySelector("form");

function grillBurger() {
    return new Promise((resolve, reject) => {
        try{
            const logText = document.createElement("p");
            logText.innerHTML = "Grilling burger...";
            logger.appendChild(logText)
            setTimeout(() => {
                resolve();
            }, 1000)
        } catch(err) {
            reject(err);
        }
    })
}

function prepareBuns() {
    return new Promise((resolve, reject) => {
        try{
            const logText = document.createElement("p");
            logText.innerHTML = "Preparing buns...";
            logger.appendChild(logText)
            setTimeout(() => {
                resolve();
            }, 1000)
        } catch(err) {
            reject(err);
        }
    })
}

function prepareVegetables() {
    return new Promise((resolve, reject) => {
        try{
            const logText = document.createElement("p");
            logText.innerHTML = "Preparing vegetables...";
            logger.appendChild(logText)
            setTimeout(() => {
                resolve();
            }, 1000)
        } catch(err) {
            reject(err);
        }  
    })
}

function assembleBurger() {
    return new Promise((resolve, reject) => {
        try{
            const logText = document.createElement("p");
            logText.innerHTML = "Assembling burger...";
            logger.appendChild(logText)
            setTimeout(() => {
                resolve();
            }, 1000)
        } catch(err) {
            reject(err);
        }
    })
}

function makeBurger() {
    document.getElementById("loading").style.display = "block";

    grillBurger().then(
        () => prepareBuns()
        .then(
            () => prepareVegetables()
            .then(
                () => assembleBurger()
                .then(() => {
                    document.getElementById("loading").style.display = "none";
                    document.getElementById("result").innerHTML = chosenBurger;
                }
            )
        )
    ))

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


