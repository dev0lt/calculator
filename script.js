"use strict";
// Defining variables
const btns = document.querySelectorAll(".button");
const clearBtn = document.querySelector(".button_clear");
const resultHTML = document.querySelector(".result");
const btnEqual = document.querySelector(".button_equal");
const sign = document.querySelector(".sign");
let resultValue = "";

let signValue = "";

const regex = /[-+*\/]/;

let arr = [];

function calculation(first, second) {
  let a = Number(first);
  let b = Number(second);
  if (signValue === "+") {
    return a + b;
  } else if (signValue === "-") {
    return a - b;
  } else if (signValue === "*") {
    return a * b;
  } else if (signValue === "/") {
    return a / b;
  }
}

resultHTML.textContent = resultValue;

// Clicking a button
btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let clicked = e.target.closest(".button");
    if (
      // resultValue.length < 12 &&

      clicked.textContent !== "C" &&
      clicked.textContent !== "=" &&
      !regex.test(clicked.textContent)
    ) {
      resultValue += clicked.textContent;
      resultHTML.textContent = resultValue;
    } else if (regex.test(clicked.textContent)) {
      arr.push(resultValue);
      resultValue = "";
      resultHTML.textContent = "";
      if (arr.length === 2) {
        let newResult = calculation(arr[0], arr[1]);
        resultValue = newResult;
        resultHTML.textContent = resultValue;
        arr = [];
      }
      sign.textContent = clicked.textContent;
      signValue = clicked.textContent;
    } else if (btn === btnEqual) {
      let final = resultValue;
      resultHTML.textContent = eval(final);
    } else if (btn === clearBtn) {
      clear();
    }
  })
);

function clear() {
  resultHTML.textContent = "";
  resultValue = "";
  sign.textContent = "";
  arr = [];
}
