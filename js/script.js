var feedback = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});