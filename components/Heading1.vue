<template>
  <h1 style="font-weight: 600; color: var(--heading1)" class="poppinsText text-h6">{{ text }}</h1>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style>
.poppinsText {
  font-family: 'Poppins' !important;
}
</style>
