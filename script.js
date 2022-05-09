const adviceBtn = document.querySelector("#advice-btn");
const adviceText = document.querySelector("#advice-text");
const adviceNumber = document.querySelector("#advice-number");

adviceBtn.addEventListener("click", function () {
  getAdvice();
  makeUnavabile(adviceBtn);
});

window.onload = () => {
  getAdvice();
};

const adviceUrl = "https://api.adviceslip.com/advice";

function getAdvice() {
  fetch(adviceUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const adviceObj = data.slip;
      adviceText.textContent = `“${adviceObj.advice}”`;
      adviceNumber.textContent = `Advice #${adviceObj.id}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

function makeUnavabile(element) {
  element.style.backgroundColor = "hsl(217, 19%, 38%)";
  element.style.cursor = "not-allowed";
  element.style.pointerEvents = "none";
  setTimeout(function () {
    makeAvailable(element);
  }, 3000);
}

function makeAvailable(element) {
  element.style.backgroundColor = "hsl(150, 100%, 66%)";
  element.style.cursor = "pointer";
  element.style.pointerEvents = "auto";
}
