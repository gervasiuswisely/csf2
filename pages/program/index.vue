<template>
  <div style="margin-top: 100px">
    <!-- <v-container style="margin-bottom: 20px">
      <h1 class="text-h4">Daftar Program</h1>
      <v-row class="mt-3">
        <v-col :cols="12" :lg="3" v-for="(course, index) in data" :key="index" style="box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)">
          <h1 class="text-h5">{{ course.name }}</h1>
          <NuxtLink :to="`/kursus/${course.slug}`"> <v-btn style="font-size: 12px" class="mt-3" rounded>read more</v-btn></NuxtLink>
        </v-col>
      </v-row>
    </v-container> -->

    <v-container style="margin-bottom: 20px">
      <h1 class="text-h4">Daftar Program</h1>
      <v-card class="mt-4">
        <v-tabs v-model="tab" style="color: white" bg-color="var(--variable-collection-CIM)">
          <v-tab value="one">Kursus</v-tab>
        </v-tabs>
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-row class="mt-3">
                <v-col :cols="12" :sm="6" :md="4" :lg="3" v-for="(images, index) in data" :key="index" style="">
                  <v-card class="mx-auto" max-width="200" v-if="!isClick" style="border-radius: 10px; border: 1px solid rgba(0, 0, 0, 0.3)">
                    <div style="height: 150px; display: flex; justify-content: center">
                      <img :src="images.imageLink ? images.imageLink : 'https://cdn.imavi.org/articles~5wXNm6M~articles~epATKgn~logo.png'" style="object-fit: contain" />
                    </div>
                    <div>
                      <div class="mt-1" style="padding: 12px">
                        <p style="margin-bottom: 8px; font-weight: bold; color: black" class="text-truncate loraText">{{ images.name }}</p>
                        <p style="color: black; line-height: 200%; margin-bottom: 1.5em" class="text-truncate cairotext">
                          {{ images.excerpt }}
                        </p>
                        <div class="d-flex flex-lg-row flex-column align-lg-center">
                          <div>
                            <button @click="click()" style="background-color: var(--variable-collection-CIM); color: #ffffff; border-radius: 50px; padding: 4px">
                              <div class="d-flex align-center">
                                <NuxtLink :to="`/program/kursus/${images.slug}`"> <p class="cairoText mx-1 text-white">lihat Detail</p></NuxtLink>
                                <i class="fa fa-arrow-right"></i>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item value="three">
              <v-row class="mt-3">
                <v-col :cols="12" :sm="6" :md="4" :lg="3">
                  <v-card class="mx-auto" max-width="200" v-if="!isClick" style="border-radius: 10px; border: 1px solid rgba(0, 0, 0, 0.3)">
                    <div style="height: 150px; display: flex; justify-content: center">
                      <img :src="data2.imageLink ? data2.imageLink : 'https://cdn.imavi.org/articles~5wXNm6M~articles~epATKgn~logo.png'" style="object-fit: contain" />
                    </div>
                    <div>
                      <div class="mt-1" style="padding: 12px">
                        <p style="margin-bottom: 8px; font-weight: bold; color: black" class="text-truncate loraText">{{ data2.title }}</p>
                        <p style="color: black; line-height: 200%; margin-bottom: 1.5em" class="text-truncate cairotext">
                          {{ data2.excerpt }}
                        </p>
                        <div class="d-flex flex-lg-row flex-column align-lg-center">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  data: () => ({
    tab: null,
  }),
  setup() {
    const data = ref([]);
    const data2 = ref();
    const runTimeConfig = useRuntimeConfig();
    const a = (x) => {
      console.log(x);
    };
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.imavi.org/cim/courses/panorama/get-all', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });

        // console.log(response);
        const result = await response.json();

        data.value = result;

        console.log(result.excerpt);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response2 = await fetch('https://api.imavi.org/imavi/events/view/seminar', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });

        // console.log(response);
        const result2 = await response2.json();

        data2.value = result2;

        console.log(result2);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    onMounted(() => {
      fetchData();
      fetchData2();
    });
    return {
      data,
      data2,
      a,
    };
  },
};
</script>
<!-- <script>
export default {
  data() {
    return {
      users: [],
    };
  },

    async mounted() {
      try {
        const response = await fetch('/.netlify/functions/get-all'); // Ganti URL sesuai dengan API Anda
        const data = await response.json();
        // console.log(data);
        this.users = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
};
</script> -->

<!-- <script>
export default {
  data: () => ({
    searchQuery: '',
    courses: [
      {
        _id: 'f68155da76023d87ca21567c',
        registrationStartDate: '2023-10-30',
        registrationEndDate: '2024-01-25',
        curriculaId: 'FwuK8JDMHLNPrbHww',
        curriculaname: 'Pastoral Kitab Suci',
        cpname: 'Studi Kitab Suci',
        psId: 'a3otbatqXQsPj3ujw',
        name: "Studi kitab Suci 'PERJALANAN MISI DI KOTA ROMA'",
        description:
          '<p>Studi Kitab Suci merupakan program belajar mengenai teologi Kitab Suci dari Kitab Kejadian hingga Kitab Wahyu. Pada program studi Kitab Suci 2023/2024 semester genap berfokus pada tema <span style="background-color:transparent;color:#000000;"><strong>“PERJALANAN MISI DI KOTA ROMA” (Surat Rasul Paulus Kepada Jemaat di Roma)</strong></span>. <span style="background-color:transparent;color:#000000;">Surat Paulus Kepada Jemaat di Roma berisikan sebuah pengajaran teologis yang penting bagi umat. Ada beberapa pembahasan yang menjadi point-point pengajaran kepada jemaat di Roma antara lain yakni mengenai kehidupan oleh iman, dosa dan akibatnya, kehidupan dalam Roh, penggenapan janji Allah dalam Kristus, dan rencana Allah bagi Israel. Surat Rasul Paulus kepada jemaat di Roma merupakan salah satu surat terpanjang yang ditulis oleh Rasul Paulus dan menjadi dasar sumber teologi Kristen dalam banyak hal dan juga studi Alkitab.</span> &nbsp;Dengan mengikuti program studi Kitab Suci, harapannya peserta kursus mengetahui konteks yang terkandung dalam Kitab Suci (sejarah, sosial, budaya, ekonomi, dan politik), mengetahui teologi yang terkandung dalam setiap ayat di Alkitab, mampu menafsirkan ayat sesuai dengan konteks yang benar, dan merenungkan Sabda Tuhan yang berbicara kepada pribadi lewat Kitab Suci dan mewartakan kabar suka cita dan kebenaran Injil di tengah kehidupan zaman ini.&nbsp;</p><p>&nbsp;</p>',
        schedule:
          '<figure class="table" style="float:left;"><table><tbody><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Tanggal</strong>&nbsp;</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Pertemuan</strong></span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Materi</strong></span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">29 Januari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;">&nbsp;</td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Kelas Perkenalan "PERJALANAN MISI DI KOTA ROMA"</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">3 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;">&nbsp;</td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Seminar</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">7 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 1</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pengantar : Surat-Surat Rasul Paulus</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">21 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 2</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Tindakan Dosa dan Akibatnya (Rm. 1)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">28 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 3</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hukum Allah Terhadap Tindakan Menghakimi Orang Lain (Rm. 2:1-16)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">6 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 4</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hukum Taurat dan Tradisi Sunat bagi Orang Kristen (Rm. 2:17-29 - 3:1-20)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">13 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 5</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Iman sebagai Jalan Keselamatan Manusia (Rm. 3:21-31- 5:1-11)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">20 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 6</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Adam Lama dan Adam Baru (Rm. 5: 12-21- 6:1-14)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">3 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 7</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Dua Macam Perhambaan (Rm. 6: 15-23)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">17 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 8</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Taurat dan Dosa (Rm. 7: 1-12; 7:13-26)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">24 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 9</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Makna Hidup oleh Roh (Rm. 8:1-17)</span></td></tr><tr><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">1 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 10</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Siapa anak-anak Allah? (Rm. 8: 18-30 - 9:30-10:3)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">8 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 11</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Iman yang Benar (Rm. 10:4-15)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">15 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 12</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hubungan Orang Kristen dan Bangsa Israel (Rm. 10: 16-21 - 11: 25-36)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">22 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 13</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hidup Kristen yang tangguh (Rm. 12-15)</span></td></tr><tr><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">29 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 14</span></td><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Harapan Paulus Kepada Jemaat di Roma (Rm.15:22-33)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">1-2 Juni</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 15</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Rekoleksi "Menjadi Rasul di Zaman ini, Siapa Takut!"</span></td></tr></tbody></table></figure>',
        lecturers: [],
        slug: 'Studi-Kitab-Suci',
      },
      {
        _id: 'f68155da76023d87ca21567c',
        registrationStartDate: '2023-10-30',
        registrationEndDate: '2024-01-25',
        curriculaId: 'FwuK8JDMHLNPrbHww',
        curriculaname: 'Pastoral Kitab Suci',
        cpname: 'Studi Kitab Suci',
        psId: 'a3otbatqXQsPj3ujw',
        name: "Studi kitab Suci 'PERJALANAN MISI DI KOTA ROMA'",
        description:
          '<p>Studi Kitab Suci merupakan program belajar mengenai teologi Kitab Suci dari Kitab Kejadian hingga Kitab Wahyu. Pada program studi Kitab Suci 2023/2024 semester genap berfokus pada tema <span style="background-color:transparent;color:#000000;"><strong>“PERJALANAN MISI DI KOTA ROMA” (Surat Rasul Paulus Kepada Jemaat di Roma)</strong></span>. <span style="background-color:transparent;color:#000000;">Surat Paulus Kepada Jemaat di Roma berisikan sebuah pengajaran teologis yang penting bagi umat. Ada beberapa pembahasan yang menjadi point-point pengajaran kepada jemaat di Roma antara lain yakni mengenai kehidupan oleh iman, dosa dan akibatnya, kehidupan dalam Roh, penggenapan janji Allah dalam Kristus, dan rencana Allah bagi Israel. Surat Rasul Paulus kepada jemaat di Roma merupakan salah satu surat terpanjang yang ditulis oleh Rasul Paulus dan menjadi dasar sumber teologi Kristen dalam banyak hal dan juga studi Alkitab.</span> &nbsp;Dengan mengikuti program studi Kitab Suci, harapannya peserta kursus mengetahui konteks yang terkandung dalam Kitab Suci (sejarah, sosial, budaya, ekonomi, dan politik), mengetahui teologi yang terkandung dalam setiap ayat di Alkitab, mampu menafsirkan ayat sesuai dengan konteks yang benar, dan merenungkan Sabda Tuhan yang berbicara kepada pribadi lewat Kitab Suci dan mewartakan kabar suka cita dan kebenaran Injil di tengah kehidupan zaman ini.&nbsp;</p><p>&nbsp;</p>',
        schedule:
          '<figure class="table" style="float:left;"><table><tbody><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Tanggal</strong>&nbsp;</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Pertemuan</strong></span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;"><strong>Materi</strong></span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">29 Januari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;">&nbsp;</td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Kelas Perkenalan "PERJALANAN MISI DI KOTA ROMA"</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">3 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;">&nbsp;</td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Seminar</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">7 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 1</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pengantar : Surat-Surat Rasul Paulus</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">21 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 2</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Tindakan Dosa dan Akibatnya (Rm. 1)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">28 Februari 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 3</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hukum Allah Terhadap Tindakan Menghakimi Orang Lain (Rm. 2:1-16)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">6 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 4</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hukum Taurat dan Tradisi Sunat bagi Orang Kristen (Rm. 2:17-29 - 3:1-20)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">13 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 5</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Iman sebagai Jalan Keselamatan Manusia (Rm. 3:21-31- 5:1-11)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">20 Maret 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 6</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Adam Lama dan Adam Baru (Rm. 5: 12-21- 6:1-14)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">3 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 7</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Dua Macam Perhambaan (Rm. 6: 15-23)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">17 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 8</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Taurat dan Dosa (Rm. 7: 1-12; 7:13-26)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">24 April 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 9</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Makna Hidup oleh Roh (Rm. 8:1-17)</span></td></tr><tr><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">1 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 10</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Siapa anak-anak Allah? (Rm. 8: 18-30 - 9:30-10:3)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">8 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 11</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Iman yang Benar (Rm. 10:4-15)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">15 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 12</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hubungan Orang Kristen dan Bangsa Israel (Rm. 10: 16-21 - 11: 25-36)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">22 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 13</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Hidup Kristen yang tangguh (Rm. 12-15)</span></td></tr><tr><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">29 Mei 2024</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 14</span></td><td style="background-color:#ffffff;border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Harapan Paulus Kepada Jemaat di Roma (Rm.15:22-33)</span></td></tr><tr><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">1-2 Juni</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Pertemuan 15</span></td><td style="border:0.45454574999999997pt solid #cccccc;padding:2pt;vertical-align:bottom;"><span style="background-color:transparent;color:#000000;">Rekoleksi "Menjadi Rasul di Zaman ini, Siapa Takut!"</span></td></tr></tbody></table></figure>',
        lecturers: [],
        slug: 'Studi-Kitab-Suci',
      },
    ],
  }),
  computed: {
    searchResults() {
      return this.callendar.filter((item) => item.aktivitas.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
};
</script> -->
