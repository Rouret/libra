import { DateTime } from 'luxon';
import { beforeAll, describe, expect, test, vi } from 'vitest';

beforeAll(() => {
    vi.useFakeTimers()
    const date = new Date('2024-01-03')
    vi.setSystemTime(date)

});

describe('getCurrentWeek', () => {
    test('should return the current week', () => {
        const date = DateTime.now();
        const startOfWeek = date.startOf("week");
        const week = Array.from({ length: 7 }, (_, i) => startOfWeek.plus({ days: i }));
        expect(week).toEqual([
            DateTime.fromISO('2024-01-01T00:00:00.000+01:00'),
            DateTime.fromISO('2024-01-02T00:00:00.000+01:00'),
            DateTime.fromISO('2024-01-03T00:00:00.000+01:00'),
            DateTime.fromISO('2024-01-04T00:00:00.000+01:00'),
            DateTime.fromISO('2024-01-05T00:00:00.000+01:00'),
            DateTime.fromISO('2024-01-06T00:00:00.000+01:00'),
            DateTime.fromISO('2024-01-07T00:00:00.000+01:00')
        ])
    })
})
