const adviceBtn = document.querySelector("#advice-btn");
const adviceText = document.querySelector("#advice-text");
const adviceNumber = document.querySelector("#advice-number");

adviceBtn.addEventListener("click", function () {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
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
