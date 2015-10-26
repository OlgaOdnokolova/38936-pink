/**
 * Created by Belko on 26.10.15.
 */
var minusFt = document.querySelector(".fellow-travelers__remove")
var plusFt = document.querySelector(".fellow-travelers__add")
var peopleNumber = document.querySelector(".people-number")

var minusTt = document.querySelector(".traveling-time__remove")
var plusTt = document.querySelector(".traveling-time__add")
var daysNumber = document.querySelector(".days-number")

minusFt.addEventListener("click", function() {
  if ((parseInt(peopleNumber.value, 10)) >= 1) {
    peopleNumber.value = parseInt(peopleNumber.value, 10) - 1;
  }
})


plusFt.addEventListener("click", function() {
  if ((parseInt(peopleNumber.value, 10)) < 16) {
    peopleNumber.value = parseInt(peopleNumber.value, 10) + 1;
  }
})


minusTt.addEventListener("click", function() {
  if ((parseInt(daysNumber.value, 10)) >= 1) {
    daysNumber.value = parseInt(daysNumber.value, 10) - 1;
  }
})


plusTt.addEventListener("click", function() {
  if ((parseInt(daysNumber.value, 10)) < 30) {
    daysNumber.value = parseInt(daysNumber.value, 10) + 1;
  }
})
