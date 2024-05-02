<template>
  <ul style="list-style: none; margin-top: 20px; font-weight: 600; font-size: 18px; line-height: 150%">
    <div v-for="(list, index) in listaboutus" :key="index" style="display: flex; align-items: center">
      <i class="fa-solid fa-circle-check" style="font-size: 18px; color: #0b9948; margin-right: 16px"></i>
      <li class="poppinsText" style="font-size: 18px; font-weight: 600">{{ list.title }}</li>
    </div>
  </ul>
</template>

<script>
export default {
  data: () => ({
    listaboutus: [
      {
        title: 'Kami memiliki pengajar yang berkompeten',
      },
      {
        title: 'Komunitas Gereja terbesar di Indonesia',
      },
      {
        title: 'Menjadikan dunia menjadi tempat yang lebih baik',
      },
      {
        title: 'membagikan kasih kepada komunitas',
      },
    ],
  }),
};
</script>
