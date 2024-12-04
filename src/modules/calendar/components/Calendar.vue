<script lang="ts" setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';
import { getCurrentWeek } from '../utils/date';
import CalendarHeader from './CalendarHeader.vue';
import CalendarContent from './CalendarContent.vue';
import { CalendarEvent } from '../types';
import { getEventsForWeek } from '../utils/events';

const { events } = defineProps<{
    events: CalendarEvent[],
}>();


const today = ref<DateTime>(DateTime.now());
const week = ref<DateTime[]>(getCurrentWeek(today.value));
const eventsWeek = getEventsForWeek(events, week.value);

</script>

<template>
    <div id="libra-calendar-root">
        <table>
            <CalendarHeader :week=week />
            <CalendarContent :week=week :events=eventsWeek />
        </table>
    </div>
</template>

<style>
#libra-calendar-root {
    width: 100%;
    height: 100%;
    border: red solid 1px;
}

table {
    width: 100%;
    height: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid black;
    padding: 5px;
}
</style>
