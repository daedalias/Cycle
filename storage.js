export const periodStarts = new Set();

export function togglePeriodStart(dateString) {
    if (periodStarts.has(dateString)) {
        periodStarts.delete(dateString);
    } else {
        periodStarts.add(dateString);
    }
}

export function hasPeriodStart(dateString) {
    return periodStarts.has(dateString);
}