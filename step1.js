var chosenBurger = null;

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    const data = new FormData(form)

    var output = "";
    for(var i = 0; i < data.values().length; I++) {
      output += entry[i];
  }
    chosenBurger = output;
    e.preventDefault()
    console.log("BURGER: ", chosenBurger)
})

