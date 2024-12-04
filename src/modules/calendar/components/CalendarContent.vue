<script lang="ts" setup>
import { DateTime } from 'luxon';

const { week } = defineProps({
    week: Array<DateTime>,
});

</script>

<template>
    <tbody>
        <tr v-for="hour in 24" :key="hour">
            <td class="hours">{{ hour }}</td>
            <td v-for="day in week">
                <slot name="cell" :day="day" :hour="hour"></slot>
            </td>
        </tr>
    </tbody>
</template>


<style scoped>
.hours {
    user-select: none;
}
</style>
