<script lang="ts" setup>
import { DateTime } from 'luxon';
import { CalendarEvent } from '../types';
import { hasEventForHour } from '../utils/events';

const { week } = defineProps<{
    week: Array<DateTime>,
    events: Array<CalendarEvent>,
}>();

</script>

<template>
    <tbody>
        <tr v-for="hour in 24" :key="hour">
            <td class="hours">{{ hour }}</td>
            <td class="event" v-for="day in week">
                <div>
                    <template v-for="event in events">
                        <template v-if="hasEventForHour(event, day, hour)">
                            <div>{{ event.date.startDateTime.toFormat('HH:mm') }} - {{
                                event.date.endDateTime.toFormat('HH:mm') }}</div>
                        </template>
                    </template>
                </div>
            </td>
        </tr>
    </tbody>
</template>


<style scoped>
.hours {
    user-select: none;
}

.event:hover {
    background-color: #f0f0f0;
}
</style>
