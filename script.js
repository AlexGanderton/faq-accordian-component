const questions = document.querySelectorAll(".question");

function questionsToggleAnswer() {
  const answer = this.nextElementSibling;
  const dropDown = this.nextElementSibling.nextElementSibling;
  if (answer.classList.contains("hide")) {
    answer.classList.remove("hide");
    this.style.fontWeight = 700
  } else {
    answer.classList.add("hide");
    this.style.fontWeight = '';
  }
  if (dropDown.style.transform == "") {
    dropDown.style.transform = "rotate(180deg)";
  } else {
    dropDown.style.transform = "";
  }
}

(function () {
  questions.forEach((e) => {
    e.addEventListener("click", questionsToggleAnswer);
  });
})();

console.log(questions[0].nextElementSibling.nextElementSibling.style);
