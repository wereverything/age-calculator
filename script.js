// GET THE INPUT VALUE
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-years");

// GET THE SPAN
const outDay = document.getElementById("days-output");
const outMonth = document.getElementById("months-output");
const outYear = document.getElementById("years-output");

// GET THE SUBMIT BUTTON
const btn = document.querySelector("#submit")

// GET YEARS
const y = new Date().getFullYear();
const m = new Date().getUTCMonth() + 1;
const d = new Date().getUTCDate();

function getDays() {
    if(inputDay.value > d) {
        return inputDay.value - d
    } else {
        return d - inputDay.value
    }
}

function getMonths() {
    return m - inputMonth.value
}

function getYears() {
    if(inputMonth.value <= m) {
        let yy = inputYear.value
        return y - 1 - yy
    } else if(inputMonth.value > m) {
        return y - inputYear.value
    }
}

btn.onclick = function() {
    outDay.innerText = getDays();
    outMonth.innerText = getMonths();
    outYear.innerText = getYears();
}