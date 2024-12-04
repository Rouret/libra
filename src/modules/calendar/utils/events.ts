import { DateTime } from "luxon";
import { CalendarEvent } from "../types";

export const getEventsForWeek = (events: CalendarEvent[], week: DateTime[]): CalendarEvent[] => {
    const weekSet = new Set(week.map(day => day.toISODate()));
    return events.filter(event => weekSet.has(event.date.startDateTime.toISODate()));
}

export const hasEventForHour = (event: CalendarEvent, day: DateTime, hour: number): boolean => {
    console.log(event)
    return event.date.startDateTime.weekday === day.weekday && event.date.startDateTime.hour <= hour && event.date.endDateTime.hour >= hour;
}
