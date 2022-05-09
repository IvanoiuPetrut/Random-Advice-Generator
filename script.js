var btn = document.querySelector("button");
var p = document.querySelector("p");
var h1 = document.querySelector("h1");
let ct = 100;

btn.addEventListener("click", function () {
  p.textContent = ct;
  ct += 100;
});
