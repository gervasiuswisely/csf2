<template>
  <button :style="{ marginTop: '24px', width: '30%', padding: '16px', borderRadius: '47px', backgroundColor: bgcolorcta, color: 'var(--white)' }">{{ ctaTitle }}</button>
</template>

<script>
export default {
  props: {
    ctaTitle: String,
    bgcolorcta: String,
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  /* button {
    width: 50% !important;
  } */
}
</style>
