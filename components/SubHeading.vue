<template>
  <h1 style="margin-top: 12px; color: var(--subheading)" class="ptserifText font-weight-bold text-lg-h4 text-h5">{{ subtext }}</h1>
  <div class="subheadingline" style="border: 2px solid var(--variable-collection-CIM); width: 10%; margin-top: 12px"></div>
</template>

<script>
export default {
  props: {
    subtext: String,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .subheadingline {
    margin: auto;
  }
}
.ptserifText {
  font-family: 'PtSerif' !important;
}
</style>
