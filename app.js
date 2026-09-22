import {
    renderCalendar,
    previousMonth,
    nextMonth
} from "./calendar.js";

import {
    getRecordedStarts,
    getAverageCycle,
    getShortestCycle,
    getLongestCycle,
    getLastStart,
    getNextPrediction
} from "./cycleMath.js";

function formatDate(dateString) {
    if (!dateString) {
        return "--";
    }

    return new Date(dateString)
        .toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
}

function updateStats() {
    document.getElementById(
        "recordedStarts"
    ).textContent =
        getRecordedStarts();

    document.getElementById(
        "averageCycle"
    ).textContent =
        getAverageCycle() ?
        `${getAverageCycle()}d` :
        "--";

    document.getElementById(
        "shortestCycle"
    ).textContent =
        getShortestCycle() ?
        `${getShortestCycle()}d` :
        "--";

    document.getElementById(
        "longestCycle"
    ).textContent =
        getLongestCycle() ?
        `${getLongestCycle()}d` :
        "--";

    document.getElementById(
        "lastStart"
    ).textContent =
        formatDate(getLastStart());

    const prediction =
        getNextPrediction();

    document.getElementById(
        "predictionDate"
    ).textContent =
        prediction
            ? prediction.toLocaleDateString(
                undefined,
                {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }
            )
            : "--";
}

window.updateStats = updateStats;

document
    .getElementById("prevMonth")
    .addEventListener("click", previousMonth);

document
    .getElementById("nextMonth")
    .addEventListener("click", nextMonth);

renderCalendar();
updateStats();
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(
        "./service-worker.js"
    );
}