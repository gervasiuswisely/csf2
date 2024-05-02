<template>
  <v-overlay style="align-items: center; justify-content: center" :model-value="isLoading || formMessage !== ''" z-index="1000">
    <v-progress-circular v-if="isLoading" indeterminate size="64" color="primary" />
    <v-card v-if="!isLoading" color="white" dark class="form-message" style="padding: 24px">
      <v-card-title class="text-h4 ff-montserrat black--text"> Message </v-card-title>

      <v-card-subtitle class="text-h6 ff-montserrat grey--text pt-3">
        {{ formMessage }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn text class="ml-auto mr-5" color="primary" @click="closeModal"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    formMessage: {
      type: String,
      default() {
        return '';
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit('checkLoading', '');
      // console.log(this.formMessage);
      if (this.formMessage === 'Berhasil') {
        // window.location.href = '/';
      }
    },
  },
};
</script>
<style scoped>
.absolute-Center {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
