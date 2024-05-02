<template>
  <div style="height: 110px">
    <div>
      <p class="text-uppercase" v-if="callendar.liturgicalMemorial">{{ callendar.liturgicalMemorial }}</p>
      <p v-else>{{ callendar.weeks.liturgical }}</p>
    </div>
    <div v-if="callendar.shortDescription">
      <p class="">
        {{ callendar.eucharisticReading.firstReading }} ,{{ callendar.eucharisticReading.psalm }} ,{{ callendar.eucharisticReading.secondReading ? callendar.eucharisticReading.secondReading + ',' : '' }}
        {{ callendar.eucharisticReading.gospel }}
      </p>
      <p class="mt-3" v-dompurify-html="callendar.shortDescription"></p>
    </div>
    <div v-else>
      <p class="">
        {{ callendar.eucharisticReading.firstReading }} ,{{ callendar.eucharisticReading.psalm }} ,{{ callendar.eucharisticReading.secondReading ? callendar.eucharisticReading.secondReading + ',' : '' }}
        {{ callendar.eucharisticReading.gospel }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    callendar: Array,
  },
};
</script>
