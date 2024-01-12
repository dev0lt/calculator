"use strict";
// Defining variables
const screen = document.querySelector(".calculator_screen");
const btnsNumber = document.querySelectorAll(".number");
const btnsOperator = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".button_clear");
const resultHTML = document.querySelector(".result");
const btnEqual = document.querySelector(".button_equal");
const sequence = document.querySelector(".calculator_sequence");

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
    return parseFloat((a - b).toFixed(5));
  } else if (signValue === "*") {
    return parseFloat((a * b).toFixed(5));
  } else if (signValue === "/") {
    return parseFloat((a / b).toFixed(5));
  }
}

function clear() {
  resultHTML.textContent = "";
  currentValue = "";
  arr = [];
  sum = 0;
  sequence.textContent = "";
}

function createSequence() {
  sequence.textContent = `${arr[0]} ${signValue} ${
    arr[1] ? arr[1] + " =" : ""
  }`;
}

function cantDivideBy0() {
  resultHTML.style.setProperty("font-size", "30px");
  resultHTML.style.setProperty("justify-content", "center");
  resultHTML.textContent = "Can't divide by 0";
  currentValue = "";
  arr = [];
  sum = 0;
  sequence.textContent = "";
}

// resultHTML.textContent = currentValue;

// Clicking a button event

btnsNumber.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let clicked = e.target.closest(".number");
    if ((resultHTML.textContent = "Can't divide by 0")) {
      resultHTML.style.setProperty("font-size", "2.5rem");
      resultHTML.style.setProperty("justify-content", "right");
    }

    if (
      arr[0] &&
      signValue === "" &&
      !regex.test(clicked.textContent) &&
      !regex2.test(clicked.textContent)
    )
      return;

    if (currentValue.length > 12) return;

    currentValue += clicked.textContent;
    resultHTML.textContent = currentValue;
  })
);

btnsOperator.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let clicked = e.target.closest(".operator");

    if (clicked.textContent === "." && currentValue === "") return;
    if (clicked.textContent === "." && currentValue.includes(".")) return;
    if (clicked.textContent === "." && currentValue !== "") {
      currentValue += clicked.textContent;
      resultHTML.textContent = currentValue;
    }
    if (regex.test(clicked.textContent)) {
      if (currentValue === "" && arr.length === 0) return;
      if (currentValue !== "") {
        arr.push(currentValue);
      }
      console.log(arr);
      if (arr[0] && arr[1]) {
        sum = calculation(arr[0], arr[1]);
        arr = [sum];
        console.log(arr);
      }
      currentValue = "";
      resultHTML.textContent = arr[0];
      signValue = clicked.textContent;
      createSequence();
      console.log(signValue);
    } else if (btn === btnEqual) {
      if (arr.length === 0) return;
      if (currentValue === "") return;
      arr.push(currentValue);
      if (arr[1] === "0" && signValue === "/") {
        cantDivideBy0();
      } else {
        sum = calculation(arr[0], arr[1]);
        createSequence();
        currentValue = "";
        resultHTML.textContent = sum;
        arr = [sum];
        signValue = "";
      }
      // console.log(arr);
    } else if (btn === clearBtn) {
      clear();
    }
  })
);

/*
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
      console.log(arr);
      if (arr[0] && arr[1]) {
        sum = calculation(arr[0], arr[1]);
        arr = [sum];
        console.log(arr);
      }
      currentValue = "";
      resultHTML.textContent = arr[0];
      signValue = clicked.textContent;
      createSequence();
      console.log(signValue);
    } else if (btn === btnEqual) {
      if (arr.length === 0) return;
      if (currentValue === "") return;
      arr.push(currentValue);
      // console.log(arr);
      sum = calculation(arr[0], arr[1]);
      createSequence();
      currentValue = "";
      resultHTML.textContent = sum;
      arr = [sum];
      signValue = "";
      // console.log(arr);
    } else if (btn === clearBtn) {
      clear();
      // console.log(sum, arr);
    }
  })
);
*/
