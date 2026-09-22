const STORAGE_KEY = "cycle-period-starts";

function loadPeriodStarts() {
    const saved =
        localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return new Set();
    }

    try {
        return new Set(JSON.parse(saved));
    } catch {
        return new Set();
    }
}

export const periodStarts =
    loadPeriodStarts();

function savePeriodStarts() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...periodStarts])
    );
}

export function togglePeriodStart(dateString) {
    if (periodStarts.has(dateString)) {
        periodStarts.delete(dateString);
    } else {
        periodStarts.add(dateString);
    }

    savePeriodStarts();
}

export function hasPeriodStart(dateString) {
    return periodStarts.has(dateString);
}