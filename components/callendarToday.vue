<template>
  <!-- <v-container fluid>
    <v-row>
      <v-col v-for="(callendar, index) in callendartoday" :key="index" :cols="12" :lg="4" style="background-color: #09251a; padding: 24px; border-top: 6px solid #e4b200">
        <div class="text-white d-flex">
          <div style="margin-left: 32px; margin-right: 28px; display: flex; flex-direction: column; align-items: center; justify-content: center">
            <h1 class="text-lg-h3">{{ callendar.tanggal }}</h1>
            <p>{{ callendar.bulan }}</p>
          </div>

          <div style="width: 80%">
            <div style="line-height: 150%">
              <p class="text-lg-subtitle-2" style="color: var(--cta)">{{ callendar.jam }}</p>
              <h1 style="font-size: 20px; font-weight: bold">{{ callendar.title }}</h1>
            </div>
            <p style="line-height: 200%; color: #ebe5db; margin-top: 4px">{{ callendar.deskripsi }}</p>
          </div>
          <div class="d-flex align-center" style="margin-left: 20px">
            <img src="assets/readmore.png" alt="" />
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container> -->
  <div>
    <swiper
      :slidesPerView="4"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :breakpoints="{
        100: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1920: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(callendar, index) in calendar" :key="index" style="background-color: red">
        <v-col :cols="12" style="background-color: #09251a; padding: 24px; border-top: 6px solid #e4b200">
          <div class="text-white d-flex">
            <div style="margin-left: 32px; margin-right: 28px; display: flex; justify-content: start; align-items: center">
              <h1 class="text-h3 loraText">{{ callendar.tanggal }}</h1>
              <p class="cairoText text-center">{{ formatDate(callendar.dateCall) }}</p>
            </div>

            <div style="width: 100%; display: flex">
              <div style="line-height: 150%">
                <!-- <p class="text-lg-subtitle-2 cairoText" style="color: var(--cta)">{{ callendar.jam }}</p> -->
                <!-- <h1 class="loraText" style="font-size: 20px; font-weight: bold">{{ callendar.title }}</h1> -->
              </div>
              <liturgicalToday :callendar="callendar" />

              <!-- <p v-dompurify-html="callendar.shortDescription" class="cairotext" style="line-height: 200%; color: #ebe5db; margin-top: 4px"></p> -->
            </div>
            <!-- <div class="d-flex align-center" style="margin-left: 20px">
              <i class="fa-solid fa-circle-info" style="font-size: 24px; color: #eff1f5"></i>
            </div> -->
          </div>
        </v-col>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, onMounted } from 'vue';
// Import Swiper styles
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules

export default {
  data: () => ({
    currentDate: new Date(),
    currentday: null,
    currentmonth: null,
    callendartanggal: [],

    callendar: [
      {
        date: '2024-01-16T05:52:57.882Z',
        shortDescription: 'Kelas Studi Spiritualitas',
      },
    ],
    callendartoday: [
      {
        tanggal: '24',
        bulan: 'oktober',
        jam: '08.00-04.30 pm',
        title: 'Studi Kitab Suci',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt',
      },
      {
        tanggal: '24 ',
        bulan: 'Agustus',
        jam: '08.00-04.30 pm',
        title: 'Studi Kitab Suci',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt',
      },
      {
        tanggal: '24 ',
        bulan: 'Agustus',
        jam: '08.00-04.30 pm',
        title: 'Studi Kitab Suci',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt',
      },
      {
        tanggal: '24 ',
        bulan: 'Agustus',
        jam: '08.00-04.30 pm',
        title: 'Studi Kitab Suci',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt',
      },
      {
        tanggal: '24 ',
        bulan: 'Agustus',
        jam: '08.00-04.30 pm',
        title: 'Studi Kitab Suci',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt',
      },
      {
        tanggal: '24 ',
        bulan: 'Agustus',
        jam: '08.00-04.30 pm',
        title: 'Studi Kitab Suci',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt',
      },
    ],
    people: [
      {
        title: 'Team kami di Seminari Garum',
        description: 'Seminari kami merupakan seminari yang solid karena dikelilingi orang yang hebat seperti formator,guru dan staff yang selalu sabar dan setia dalam mendidik dan mengurus seminari kami tercinta',
        src: 'assets/card1.png',
        nama: 'Rd.Yuventius Fusi N. ',
        jabatan: 'Rektor',
      },
      {
        src: 'assets/card2.png',
        nama: 'Rp.Tetra Vici.a.,CM ',
        jabatan: 'Kepala Sekolah',
      },
      {
        src: 'assets/card3.png',
        nama: 'RD. Robertus Theo E.R',
        jabatan: 'Ekonom',
      },
      {
        src: 'assets/card4.png',
        nama: 'Robertus B. Aditya',
        jabatan: 'Domus',
      },
      {
        src: 'assets/card5.png',
        nama: 'RD.Agus Raharjo',
        jabatan: 'Formator',
      },
      {
        src: 'assets/card4.png',
        nama: 'Diakon vincentius Agsuko W',
        jabatan: 'Diakon',
      },
    ],
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const runTimeConfig = useRuntimeConfig();
    let calendar = ref({});
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.imavi.org/imavi/agendas/monthly/get-all', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });
        // console.log(response);
        const hasil = await response.json();
        calendar.value = hasil;
        console.log(calendar.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(async () => {
      await fetchData();
    });
    return {
      modules: [Navigation],
      calendar,
      fetchData,
    };
  },
  mounted() {
    this.hari = this.currentDate.getDay();
    this.currentday = this.currentDate.getDate();
    console.log(this.hari);
    const hari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    this.currentHari = hari[this.currentDate.getDay() - 1];
    console.log(this.currentHari);
    this.currentmonth = monthNames[this.currentDate.getMonth()];
    this.currentmonthnumber = this.currentDate.getMonth();
    this.currentyear = this.currentDate.getFullYear();
    // console.log(this.currentyear);
    this.currentlastday = getDaysInMonth(this.currentyear, this.currentmonthnumber);
    // console.log(this.currentlastday);
    let indexHari = this.hari - 2;
    for (let i = 0; i < this.currentlastday - this.currentday + 1; i++) {
      indexHari++;
      console.log(indexHari);

      if (indexHari > 6) {
        indexHari = 0;
      }

      this.callendartanggal.push({
        tanggal: this.currentday + i,
        bulan: this.currentmonth,
        hari: hari[indexHari],
        content: ' KEGIATAN HARI INI: Studi Glow Up  ',
        jam: '08.00-16.00',
        title: 'Studi Kitab Suci',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt',
      });
    }
    function getDaysInMonth(year, month) {
      // Perhitungan tanggal hari terakhir dalam bulan
      const lastDay = new Date(year, month + 1, 0).getDate();
      return lastDay;
    }
  },
  methods: {
    formatDate(value) {
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

      const [year, month, day] = value.split('-');
      const monthIndex = parseInt(month, 10) - 1;

      return `${months[monthIndex]} ${day}`;
    },
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: 100%;

  /* Center slide text vertically */
}

.swiper-slide img {
  display: block;
  width: 80%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 599px) {
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.swiper-pagination {
  position: static;
  margin-top: 16px;
}
</style>
