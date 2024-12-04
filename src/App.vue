<script setup lang="ts">
import { DateTime } from 'luxon';
import Calendar from './modules/calendar/components/Calendar.vue';
import { CalendarEvent } from './modules/calendar/types';

const now = DateTime.now();


const events: CalendarEvent[] = [{
  id: "1",
  date: {
    startDateTime: now.plus({ days: 1, hours: 10 }),
    endDateTime: now.plus({ days: 1, hours: 12 }),
  }
}]
</script>

<template>
  <Calendar :events=events>
    <template v-slot:event>
      hello
    </template>
  </Calendar>
</template>

<style scoped>
html {
  padding: 0;
  margin: 0;
}

div {
  width: 100vw;
  height: 100vh;
}
</style>
