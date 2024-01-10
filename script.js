"use strict";
// Defining variables
const calcButtons = document.querySelectorAll(".button");
const clearBtn = document.querySelector(".button_clear");
const result = document.querySelector(".result");
let resultValue = "";

// Clicking a button
calcButtons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let clickedBtn = e.target.closest(".button");
    if (result.textContent === "result") {
      resultValue = clickedBtn.textContent;
      result.textContent = resultValue;
    } else if (
      result.textContent !== "result" &&
      resultValue.length < 12 &&
      clickedBtn.textContent !== "C"
    ) {
      resultValue += clickedBtn.textContent;
      result.textContent = resultValue;
    } else if (btn === clearBtn) {
      clearDisplay();
    }
  })
);

function clearDisplay() {
  result.textContent = "";
  resultValue = "";
}
