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

export function renderCalendar() {
    const calendar = document.getElementById("calendar");
    const monthTitle = document.getElementById("monthTitle");

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    monthTitle.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const startingWeekday = firstDay.getDay();

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
        html += `
            <div class="day">
                ${day}
            </div>
        `;
    }

    html += `
        </div>
    `;

    calendar.innerHTML = html;
}

export function previousMonth() {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    renderCalendar();
}

export function nextMonth() {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    renderCalendar();
}