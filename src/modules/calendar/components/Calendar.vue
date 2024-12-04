<script lang="ts" setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';
import { getCurrentWeek } from '../utils/date';
import CalendarHeader from './CalendarHeader.vue';
import CalendarContent from './CalendarContent.vue';

const today = ref<DateTime>(DateTime.now());
const week = ref<DateTime[]>(getCurrentWeek(today.value));

</script>

<template>
    <div id="libra-calendar-root">
        <table>
            <CalendarHeader :week=week />
            <CalendarContent :week=week />
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
