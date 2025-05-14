var chosenBurger = null;

const form = document.querySelector("form")

function makeBurger() {
    document.getElementById("loading").style.display = "block";

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            resolve();
        }, 3000)
    })
}

function setBurger(e) {
    const data = new FormData(form)

    var output = "";

    for (var entry of data.values()) { 
      output += entry;
    }
    chosenBurger = output;
    e.preventDefault()

    makeBurger().then(() => {
        document.getElementById("result").innerHTML = chosenBurger;
    })
}

form.addEventListener("submit", setBurger)

