// Output elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");

// Input elements
let ifValid = false;
const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");

// Error elements
const errorYear = document.querySelector(".error-year");
const errorMonth = document.querySelector(".error-month");
const errorDay = document.querySelector(".error-day");

// button
const submit_btn = document.querySelector(".submit-btn");

const calculateDate = () => {
  if (ifValid) {
    let birthday = `${inputMonth.value} / ${inputDay.value} / ${inputYear.value}`;
    let birthdayObj = new Date(birthday);
    let ageDifference = Date.now() - birthdayObj;
    let ageDate = new Date(ageDifference);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate();
    outputYear.textContent = ageYears;
    outputMonth.textContent = ageMonth;
    outputDay.textContent = ageDay;
    console.log(birthday);
  } else {
    alert("error");
  }
};
submit_btn.addEventListener("click", calculateDate);

// conditions
inputDay.addEventListener("input", () => {
  if (+inputDay.value > 31) {
    errorDay.textContent = "Must be a valid date";
    ifValid = false;
    return;
  } else {
    ifValid = true;
    errorDay.textContent = "";
  }
  if (+inputDay.value === 0) {
    errorDay.textContent = "This field is required";
    ifValid = false;
    return;
  } else {
    ifValid = true;
    errorDay.textContent = "";
  }
});

inputMonth.addEventListener("input", () => {
  if (+inputMonth.value > 12) {
    errorMonth.textContent = "Must be a valid date";
    ifValid = false;
    return;
  } else {
    ifValid = true;
    errorMonth.textContent = "";
  }
  if (+inputMonth.value === 0) {
    errorMonth.textContent = "This field is required";
    ifValid = false;
    return;
  } else {
    ifValid = true;
    errorMonth.textContent = "";
  }
});

inputYear.addEventListener("input", () => {
  if (+inputYear.value > 2024) {
    errorYear.textContent = "Must be a valid date";
    ifValid = false;
    return;
  } else {
    ifValid = true;
    errorYear.textContent = "";
  }
  if (+inputYear.value === 0) {
    errorYear.textContent = "This field is required";
    ifValid = false;
    return;
  } else {
    ifValid = true;
    errorYear.textContent = "";
  }
});
