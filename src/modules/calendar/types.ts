import { DateTime } from "luxon";

export type CalendarView = 'week';

export type CalendarEvent = {
    id: string;
    meta?: Record<string, any>;
    date: {
        startDateTime: DateTime;
        endDateTime: DateTime;
    }
    style?: {
        backgroundColor?: string;
        borderColor?: string;
    }
};
