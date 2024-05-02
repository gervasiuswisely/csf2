<template>
  <v-row class="event-row" style="display: flex; align-items: center; margin-bottom: 12px" v-for="(images, index) in event" :key="index">
    <v-col :cols="2" :lg="2" :sm="3">
      <div style="display: flex; flex-direction: column">
        <h1 class="text-lg-h3">{{ images.tanggal }}</h1>
        <p class="text-lg-h6">{{ images.bulan }}</p>
      </div>
    </v-col>
    <v-col :cols="2" :lg="2" :sm="3" style="background-color: black; margin-right: 48px; border: 1px r">
      <div>
        <img :src="images.src" style="width: 100%" alt="" />
      </div>
    </v-col>
    <v-col :cols="2" :lg="2" :sm="3">
      <div style="display: flex; align-items: center">
        <img style="margin-right: 16px" src="/assets/time.svg" alt="" />
        <h3>{{ images.jam }}</h3>
      </div>
    </v-col>
    <v-col :cols="2" :lg="2" :sm="3">
      <div style="display: flex; align-items: center">
        <img style="margin-right: 16px" src="/assets/maps.svg" alt="" />
        <h3>{{ images.alamat }}</h3>
      </div>
    </v-col>
    <!-- <v-col :cols="2" :lg="2" :sm="2"> <button style="padding: 12px; border: 1px solid rgba(239, 106, 64, 0.35)">Registration</button> </v-col> -->
  </v-row>
</template>

<script>
export default {
  data: () => ({
    event: [
      {
        tanggal: '03',
        bulan: 'Agustus',
        src: 'assets/biblestudy.png',
        jam: '08.00 am - 05.00 pm ',
        alamat: '444 Branch Street Adrian, MI 49221',
      },
      {
        tanggal: '05',
        bulan: 'Agustus',
        src: 'assets/biblestudy.png',
        jam: '08.00 am - 05.00 pm ',
        alamat: '444 Branch Street Adrian, MI 49221',
      },
    ],
  }),
};
</script>
