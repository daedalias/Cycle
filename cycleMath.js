import { periodStarts } from "./storage.js";

function getSortedStarts() {
    return [...periodStarts].sort();
}

export function getRecordedStarts() {
    return periodStarts.size;
}

export function getLastStart() {
    const starts = getSortedStarts();

    if (starts.length === 0) {
        return null;
    }

    return starts[starts.length - 1];
}

export function getCycleLengths() {
    const starts = getSortedStarts();

    const lengths = [];

    for (let i = 1; i < starts.length; i++) {
        const previous = new Date(starts[i - 1]);
        const current = new Date(starts[i]);

        const days =
            (current - previous) /
            (1000 * 60 * 60 * 24);

        lengths.push(Math.round(days));
    }

    return lengths;
}

export function getAverageCycle() {
    const cycles = getCycleLengths();

    if (cycles.length === 0) {
        return null;
    }

    const total = cycles.reduce(
        (sum, value) => sum + value,
        0
    );

    return Math.round(
        total / cycles.length
    );
}

export function getShortestCycle() {
    const cycles = getCycleLengths();

    if (cycles.length === 0) {
        return null;
    }

    return Math.min(...cycles);
}

export function getLongestCycle() {
    const cycles = getCycleLengths();

    if (cycles.length === 0) {
        return null;
    }

    return Math.max(...cycles);
}

export function getNextPrediction() {
    const lastStart = getLastStart();
    const averageCycle = getAverageCycle();

    if (!lastStart || !averageCycle) {
        return null;
    }

    const nextDate = new Date(lastStart);

    nextDate.setDate(
        nextDate.getDate() + averageCycle
    );

    return nextDate;
}