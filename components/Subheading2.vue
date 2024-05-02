<template>
  <h1 style="margin-top: 16px; font-weight: bold; color: var(--subheading)" class="ptserifText text-lg-h4 text-h4">{{ subtext }}</h1>
  <div class="subheadingline" style="border: 2px solid #27674e; width: 10%; margin-top: 12px"></div>
</template>

<script>
export default {
  props: {
    subtext: String,
  },
};
</script>

<style>
.ptSeriftext {
  font-family: 'PtSerif';
}
</style>
