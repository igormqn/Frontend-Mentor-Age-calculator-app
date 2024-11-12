const dayInput = document.getElementById("input-day");
const monthInput = document.getElementById("input-month");
const yearInput = document.getElementById("input-year");

const daysOutput = document.getElementById("output-days");
const monthsOutput = document.getElementById("output-months");
const yearsOutput = document.getElementById("output-years");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = 1 + currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validateInputs() {
    const inputs = document.querySelectorAll("input");
    let isValid = true;
    inputs.forEach((input) => {
        const parent = input.parentElement;
        if (!input.value) {
            input.style.borderColor = "red";
            parent.querySelector("small").innerText = "This field is required.";
            isValid = false;
        } else if (input === monthInput && (input.value < 1 || input.value > 12)) {
            input.style.borderColor = "red";
            parent.querySelector("small").innerText = "Must be a valid month.";
            isValid = false;
        } else if (input === dayInput && (input.value < 1 || input.value > 31)) {
            input.style.borderColor = "red";
            parent.querySelector("small").innerText = "Must be a valid day.";
            isValid = false;
        } else {
            input.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
        }
    });
    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();
    if (validateInputs()) {
        let dayValue = parseInt(dayInput.value);
        let monthValue = parseInt(monthInput.value);
        let yearValue = parseInt(yearInput.value);

        if (dayValue > currentDay) {
            currentDay += daysInMonth[currentMonth - 1];
            currentMonth -= 1;
        }
        if (monthValue > currentMonth) {
            currentMonth += 12;
            currentYear -= 1;
        }

        const daysElapsed = currentDay - dayValue;
        const monthsElapsed = currentMonth - monthValue;
        const yearsElapsed = currentYear - yearValue;

        daysOutput.innerHTML = daysElapsed;
        monthsOutput.innerHTML = monthsElapsed;
        yearsOutput.innerHTML = yearsElapsed;
    }
}
