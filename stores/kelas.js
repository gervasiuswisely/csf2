import { defineStore } from 'pinia';

export const useKelasStore = defineStore('kelas', () => {
  const data = ref([
    {
      nama: [],
      price: 0,
    },
  ]);

  return { data };
});
