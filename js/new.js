var minus = document.querySelector(".fellow-travelers__remove")
var plus = document.querySelector(".fellow-travelers__add")
var peopleNumber = document.querySelector(".people-number")


minus.addEventListener("click", function() {
    if ((parseInt(peopleNumber.value, 10)) >= 1) {
      peopleNumber.value = parseInt(peopleNumber.value, 10) - 1;
    }
})


plus.addEventListener("click", function() {
  if ((parseInt(peopleNumber.value, 10)) < 16) {
    peopleNumber.value = parseInt(peopleNumber.value, 10) + 1;
  }
})







