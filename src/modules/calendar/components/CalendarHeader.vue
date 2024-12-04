<script lang="ts" setup>
import { DateTime } from 'luxon';

const { week } = defineProps({
    week: Array<DateTime>,
});

</script>

<template>
    <thead>
        <tr>
            <th scope="col"></th>
            <th v-for="day in week" scope="col">
                {{ day.toFormat('ccc, LLL d') }}
            </th>
        </tr>
    </thead>
</template>
