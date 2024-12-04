import { DateTime } from "luxon";

export const getCurrentWeek = (date: DateTime): DateTime[] => {
    const startOfWeek = date.startOf("week");
    return Array.from({ length: 7 }, (_, i) => startOfWeek.plus({ days: i }));
}
