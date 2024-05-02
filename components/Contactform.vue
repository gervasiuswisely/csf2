<template>
  <v-container>
    <v-row style="display: flex; align-items: center">
      <v-col :cols="12" :sm="6" :md="6" :lg="6">
        <div>
          <h1 style="line-height: 130%" class="text-lg-h3 text-h5 montserratText font-weight-bold">Tertarik Mendalami Iman Katolik Lebih Dalam?</h1>
          <!-- <p class="mt-4 text-h6 montserratText" style="color: #56514d">
            Kami berusaha memberikan bantuan terbaik bagi semua orang yang membutuhkan dengan melakukan penggalangan dana ini agar semua pihak dapat saling membantu dan mendapatkan manfaat dengan berbagi kebahagiaan.
          </p> -->
          <v-row style="width: 70%; margin-top: 16px">
            <v-col :cols="12" :lg="6"> <Buttonjoin style="width: 100%" /> </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col :cols="12" :md="6" :sm="6" :lg="6" class="d-flex justify-center">
        <img style="width: 50%" src="/assets/contactimage.png" alt="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
// const a = await fetch('https://api.imavi.org/cim/courses/active/get-all', {
//   method: 'GET',
//   headers: {
//     Id: '6163b0c663bd513e8b3b8553',
//     Secret: '2213be40-3625-4111-9b52-e828b5d335d8',
//     partner: 'cim',
//   },
// });
// let thisData = await a.json();
// console.log(await a.json());
export default {
  data: () => ({
    rules: [
      (value) => {
        return !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!';
      },
    ],
    isActive: false,
    activeNow: {
      baru: true,
      daftar: false,
    },
    selectedEmail: null,
    selectedFullname: null,
    selectedDate: null,
    selectedMonth: null,
    selectedYear: null,
    selectedAlamat: null,
    selectedKeuskupan: null,
    selectedParoki: null,
    selectedWhatsapp: null,
    currentYear: new Date().getFullYear(), // Tahun saat ini
    yearOptions: [],

    bulanOptions: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    tanggalOptions: Array.from({ length: 31 }, (_, i) => (i + 1).toString()), // Membuat opsi tanggal dari 1 hingga 31
    tampilkan: 'baru',
    listkelas: [
      {
        title: 'Studi Kitab Suci',
        kitab: '(Kisah Para Rasul)',
        hari: 'rabu',
        jam: '18.30-20.00 Wib',
        harga: '350000',
        clicked: 'false',
      },
      {
        title: 'Studi Kitab Suci',
        kitab: '(Kisah Para Rasul)',
        hari: 'rabu',
        jam: '18.30-20.00 Wib',
        harga: '350000',
        clicked: 'false',
      },
      {
        title: 'Studi Kitab Suci',
        kitab: '(Kisah Para Rasul)',
        hari: 'rabu',
        jam: '18.30-20.00 Wib',
        harga: '350000',
        clicked: 'false',
      },
      {
        title: 'Studi Kitab Suci',
        kitab: '(Kisah Para Rasul)',
        hari: 'rabu',
        jam: '18.30-20.00 Wib',
        harga: '350000',
        clicked: 'false',
      },
      {
        title: 'Studi Kitab Suci',
        kitab: '(Kisah Para Rasul)',
        hari: 'rabu',
        jam: '18.30-20.00 Wib',
        harga: '350000',
        clicked: 'false',
      },
      {
        title: 'Studi Kitab Suci',
        kitab: '(Kisah Para Rasul)',
        hari: 'rabu',
        jam: '18.30-20.00 Wib',
        harga: '350000',
        clicked: 'false',
      },
      {
        title: 'Studi Kitab Suci',
        kitab: '(Kisah Para Rasul)',
        hari: 'rabu',
        jam: '18.30-20.00 Wib',
        harga: '350000',
        clicked: 'false',
      },
    ],
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    // const baruStore = useBarustore();
    // const getActive = baruStore.getActive;
    // const setActive = baruStore.setActive;

    // const handleSetActive = (val) => {
    //   // console.log(val);
    //   setActive.set(val);
    // };
    return {
      // baruStore,
      // getActive,
      // handleSetActive,
      modules: [Pagination],
    };
  },
  methods: {
    handlekelasclick(index) {
      this.listkelas[index].clicked = this.listkelas[index].clicked === 'true' ? 'false' : 'true';
    },
    handleSetActiveBaru(status) {
      status = this.activeNow.baru = true;
      status = this.activeNow.daftar = false;
    },
    handleSetActiveDaftar(status) {
      status = this.activeNow.daftar = true;
      status = this.activeNow.baru = false;
    },
    tampilkanKonten(jenis) {
      this.tampilkan = jenis;
    },
    kirimdatabaru() {
      alert('data berhasil dikirim');
    },
    toggleButton() {
      this.isActive = !this.isActive;
    },
  },
  created() {
    // Mengisi opsi tahun kelahiran dari tahun saat ini hingga 100 tahun ke belakang
    for (let year = this.currentYear; year >= this.currentYear - 100; year--) {
      this.yearOptions.push(year.toString());
    }
  },
};
</script>
