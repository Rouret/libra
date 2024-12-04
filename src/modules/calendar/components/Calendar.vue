<script lang="ts" setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';
import { getCurrentWeek } from '../utils/date';

const today = ref<DateTime>(DateTime.now());
const week = ref<DateTime[]>(getCurrentWeek(today.value));

</script>


<template>
    <div id="libra-calendar-root">
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th v-for="day in week">
                        {{ day.toFormat('ccc, LLL d') }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hour in 24" :key="hour">
                    <td>{{ hour }}</td>
                    <td v-for="day in week">
                        <slot name="cell" :day="day" :hour="hour"></slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
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
