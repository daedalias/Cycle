import {
    renderCalendar,
    previousMonth,
    nextMonth
} from "./calendar.js";

document
    .getElementById("prevMonth")
    .addEventListener("click", previousMonth);

document
    .getElementById("nextMonth")
    .addEventListener("click", nextMonth);

renderCalendar();