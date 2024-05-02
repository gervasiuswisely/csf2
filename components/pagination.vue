<template>
  <div class="pagination text-center">
    <div style="display: flex; justify-content: center">
      <button style="color: var(--onNavbar); border-radius: 20px; padding: 8px; background-color: var(--primaryColor); margin-right: 5px" @click="prevPage" :disabled="currentPage === 1"><i class="fa-solid fa-arrow-left"></i></button>
      <div style="display: flex; align-items: center">
        <div>
          <p class="curpage me-1 text-h6">{{ currentPage }}</p>
        </div>

        <p>dari</p>
        <p class="text-red ms-1 text-h6">{{ totalPages }}</p>
      </div>
      <button style="color: var(--onNavbar); border-radius: 20px; padding: 8px; background-color: var(--primaryColor); margin-left: 5px" @click="nextPage" :disabled="currentPage === totalPages">
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<!-- <template>
    <UPagination v-model="currentPage" :page-count="5" :total="totalPages" />
  </template> -->
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    nextPage() {
      this.$emit('page-change', this.currentPage + 1);
    },
    prevPage() {
      this.$emit('page-change', this.currentPage - 1);
    },
  },
};
</script>

<style scoped>
.curpage {
  color: var(--primaryColor);
}
</style>
