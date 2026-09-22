import {
    hasPeriodStart,
    togglePeriodStart
} from "./storage.js";

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdayLabels = [
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa"
];

let currentMonth = new Date();

function formatDate(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function renderCalendar() {
    const calendar = document.getElementById("calendar");
    const monthTitle = document.getElementById("monthTitle");

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    monthTitle.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const startingWeekday = firstDay.getDay();

    const daysInMonth =
        new Date(year, month + 1, 0).getDate();

    let html = `
        <div class="weekday-row">
            ${weekdayLabels
                .map(label => `<div class="weekday">${label}</div>`)
                .join("")}
        </div>

        <div class="calendar-grid">
    `;

    for (let i = 0; i < startingWeekday; i++) {
        html += `<div class="day empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateString =
            formatDate(year, month, day);

        const logged =
            hasPeriodStart(dateString);

        html += `
            <button
                class="day ${logged ? "logged" : ""}"
                data-date="${dateString}"
            >
                ${day}
            </button>
        `;
    }

    html += `
        </div>
    `;

    calendar.innerHTML = html;

    const dayButtons =
        calendar.querySelectorAll("[data-date]");

    dayButtons.forEach(button => {
        button.addEventListener("click", () => {
            togglePeriodStart(button.dataset.date);
            renderCalendar();
        });
    });
}

export function previousMonth() {
    currentMonth.setMonth(
        currentMonth.getMonth() - 1
    );

    renderCalendar();
}

export function nextMonth() {
    currentMonth.setMonth(
        currentMonth.getMonth() + 1
    );

    renderCalendar();
}