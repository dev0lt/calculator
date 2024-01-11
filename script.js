"use strict";
// Defining variables
const btns = document.querySelectorAll(".button");
const clearBtn = document.querySelector(".button_clear");
const resultHTML = document.querySelector(".result");
const btnEqual = document.querySelector(".button_equal");
const sign = document.querySelector(".sign");

const regex = /[-+*\/]/;
const regex2 = /[=C]/;

let currentValue = "";
let signValue = "";

let arr = [];
let sum = 0;

// Defining operator button functions
function calculation(first, second) {
  let a = Number(first);
  let b = Number(second);
  if (signValue === "+") {
    return parseFloat((a + b).toFixed(5));
  } else if (signValue === "-") {
    return parseFloat((a + b).toFixed(5));
  } else if (signValue === "*") {
    return parseFloat((a + b).toFixed(5));
  } else if (signValue === "/") {
    return parseFloat((a + b).toFixed(5));
  }
}

function clear() {
  resultHTML.textContent = "";
  currentValue = "";
  sign.textContent = "";
  arr = [];
  sum = 0;
}

resultHTML.textContent = currentValue;

// Clicking a button event
btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let clicked = e.target.closest(".button");
    if (
      arr[0] &&
      signValue === "" &&
      !regex.test(clicked.textContent) &&
      !regex2.test(clicked.textContent)
    )
      return;
    if (clicked.textContent === "." && currentValue === "") return;
    if (clicked.textContent === "." && currentValue.includes(".")) {
      currentValue = Math.trunc(currentValue);
    }
    if (currentValue.length > 12 && clicked.textContent !== "C") return;
    if (!regex2.test(clicked.textContent) && !regex.test(clicked.textContent)) {
      currentValue += clicked.textContent;
      resultHTML.textContent = currentValue;
    } else if (regex.test(clicked.textContent)) {
      if (currentValue === "" && arr.length === 0) return;
      if (currentValue !== "") {
        arr.push(currentValue);
      }
      // console.log(arr);
      if (arr[0] && arr[1]) {
        sum = calculation(arr[0], arr[1]);
        arr = [sum];
        // console.log(arr);
      }
      currentValue = "";
      resultHTML.textContent = arr[0];
      signValue = clicked.textContent;
    } else if (btn === btnEqual) {
      if (arr.length === 0) return;
      if (currentValue === "") return;
      arr.push(currentValue);
      // console.log(arr);
      sum = calculation(arr[0], arr[1]);
      currentValue = "";
      resultHTML.textContent = sum;
      arr = [sum];
      signValue = "";
      sign.textContent = signValue;
      // console.log(arr);
    } else if (btn === clearBtn) {
      clear();
      // console.log(sum, arr);
    }
  })
);
