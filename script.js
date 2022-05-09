var btn = document.querySelector("button");
var p = document.querySelector("p");
var h1 = document.querySelector("h1");
let ct = 100;

btn.addEventListener("click", function () {
  getAdvice();
});

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceObj = data.slip;
      p.textContent = adviceObj.advice;
    })
    .catch((error) => {
      console.log(error);
    });
}
