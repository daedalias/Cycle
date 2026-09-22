import {
    renderCalendar,
    previousMonth,
    nextMonth
} from "./calendar.js";

console.log("app.js loaded");

document
    .getElementById("prevMonth")
    .addEventListener("click", previousMonth);

document
    .getElementById("nextMonth")
    .addEventListener("click", nextMonth);

console.log("calling renderCalendar");

renderCalendar();

console.log("renderCalendar finished");