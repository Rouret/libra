import { describe, expect, test } from 'vitest';
import { DateTime } from 'luxon';
import { getEventsForWeek } from './events';
import { CalendarEvent } from '../types';

describe('getEventsForWeek', () => {
    test('should return events that fall within the given week', () => {
        const week = [
            DateTime.fromISO('2024-01-01'),
            DateTime.fromISO('2024-01-02'),
            DateTime.fromISO('2024-01-03'),
            DateTime.fromISO('2024-01-04'),
            DateTime.fromISO('2024-01-05'),
            DateTime.fromISO('2024-01-06'),
            DateTime.fromISO('2024-01-07')
        ];

        const events: CalendarEvent[] = [
            { id: "1", date: { startDateTime: DateTime.fromISO('2024-01-01T10:00:00'), endDateTime: DateTime.fromISO('2024-01-01T11:00:00') } },
            {
                id: "2", date: { startDateTime: DateTime.fromISO('2024-01-03T12:00:00'), endDateTime: DateTime.fromISO('2024-01-03T13:00:00') }
            },
            { id: "3", date: { startDateTime: DateTime.fromISO('2024-01-08T09:00:00'), endDateTime: DateTime.fromISO('2024-01-08T10:00:00') } }
        ];

        const result = getEventsForWeek(events, week);

        expect(result).toEqual([
            { id: "1", date: { startDateTime: DateTime.fromISO('2024-01-01T10:00:00'), endDateTime: DateTime.fromISO('2024-01-01T11:00:00') } },
            {
                id: "2", date: { startDateTime: DateTime.fromISO('2024-01-03T12:00:00'), endDateTime: DateTime.fromISO('2024-01-03T13:00:00') }
            }
        ]);
    });

    test('should return an empty array if no events fall within the given week', () => {
        const week = [
            DateTime.fromISO('2024-01-01'),
            DateTime.fromISO('2024-01-02'),
            DateTime.fromISO('2024-01-03'),
            DateTime.fromISO('2024-01-04'),
            DateTime.fromISO('2024-01-05'),
            DateTime.fromISO('2024-01-06'),
            DateTime.fromISO('2024-01-07')
        ];

        const events: CalendarEvent[] = [
            { id: "1", date: { startDateTime: DateTime.fromISO('2024-01-08T09:00:00'), endDateTime: DateTime.fromISO('2024-01-08T10:00:00') } }
        ];

        const result = getEventsForWeek(events, week);

        expect(result).toEqual([]);
    });
});
