var chosenBurger = null;

var form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    var data = new FormData(form)

    var arrayData = Array.from(data.values())

    var output = "";
    for(var i = 0; i < arrayData.length; i++) {
      output += arrayData[i];
  }
    chosenBurger = output;
    e.preventDefault()
    console.log("BURGER: ", chosenBurger)
})

