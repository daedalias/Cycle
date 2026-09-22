let currentMonth = new Date();

export function renderCalendar() {
    const calendar = document.getElementById("calendar");

    calendar.innerHTML = `
        <button id="testButton">
            Click Me
        </button>
    `;

    document
        .getElementById("testButton")
        .addEventListener("click", () => {
            alert("clicked");
        });
}

export function previousMonth() {}

export function nextMonth() {}