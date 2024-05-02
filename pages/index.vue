<template>
  <div class="desktop-beranda">
    <div style="margin-top: 64 px">
      <Hero :herotitle="'Welcome To Sacra Familia'" class="text-center" />
    </div>
    <!-- <div>
      <v-container-fluid>
        <CallendarToday />
      </v-container-fluid>
    </div>
    <About />
    <div>
      <Overlap />
    </div> -->

    <!-- <v-container>
      <div class="text-lg-center">
        <SubHeading :subtext="'Berita Terkini'" />
        <div style="width: 100%">
          <p style="margin-top: 20px; font-weight: bold">Daftar Berita Terbaru</p>
        </div>

        <div style="margin-top: 24px" class="text-left">
          <v-row style="display: flex; justify-content: center">
            <v-col :cols="12" :lg="6" :md="6" v-for="(article, index) in berita.slice(0, 4)" :key="index">
              <v-card style="height: 220px; border-radius: 20px" v-if="berita">
                <v-row class="d-flex justify-center">
                  <v-col :cols="4">
                    <div style="height: 200px; display: flex; align-items: center">
                      <v-img :src="article.imageLink" height="200" style="border-radius: 10px"></v-img>
                    </div>
                  </v-col>
                  <v-col :cols="7">
                    <div style="padding: 5px">
                      <div>
                        <p class="text-lg-h6 loraText" style="color: #0d0e0c; font-weight: 500; white-space: nowrap; text-overflow: ellipsis; overflow: hidden">{{ article.title }}</p>
                      </div>
                      <div>
                        <p class="text-lg-caption cairoText" style="margin-bottom: 8px; font-weight: 600; color: #2b6956">By {{ article.author }}|| on {{ formatDate(article.publishDate) }}</p>
                        <p class="text-content3 cairoText" v-html="article.content" style="color: #5a524c; line-height: 150%"></p>
                      </div>
                      <div style="margin-top: 8px">
                        <NuxtLink :to="`/artikel/${article.slug}`" class="cairoText" style="font-size: 18px; color: #2b6956">Baca Selengkapnya</NuxtLink>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>

              <div v-else>
                <v-skeleton-loader class="card" type="card"></v-skeleton-loader>
              </div>
            </v-col>
          </v-row>
          <div style="display: flex; justify-content: center">
            <div>
              <NuxtLink to="/berita">
                <ButtonCTA style="width: 100%" :ctaTitle="'Lihat Semua'" :bgcolorcta="'var(--variable-collection-CIM)'" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </v-container> -->

    <!-- <v-container>
      <div class="text-lg-center">
        <SubHeading :subtext="' Para pengajar kami '" />
        <p style="margin-top: 20px">Pengajar yang berkompeten dan telah menyelesaikan pendidikan di bidangnya. Di antaranya adalah:</p>
      </div>
      <div v-if="data">
        <swiper
          style="margin-top: 20px"
          :autoplay="{
            delay: 2500,
          }"
          :slidesPerView="4"
          :spaceBetween="10"
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(images, index) in data" :key="index">
            <v-card class="mx-auto" max-width="200">
              <div class="bg-white" style="height: 250px">
                <img :src="images.imageLink" style="width: 100%" />
              </div>
              <div class="d-flex align-center" style="height: 80px">
                <h3 class="text-center lecturer" style="padding: 24px; font-size: 16px">{{ images.fullname }}</h3>
              </div>
            </v-card>
          </swiper-slide>
        </swiper>
      </div>

      <div v-else>
        <swiper
          style="margin-top: 20px"
          :autoplay="{
            delay: 2500,
          }"
          :slidesPerView="4"
          :spaceBetween="10"
          :navigation="true"
          :breakpoints="{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1920: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(images, index) in data" :key="index">
            <v-card class="mx-auto" style="background-color: var(--variable-collection-CIM)" max-width="200">
              <v-skeleton-loader type="card"></v-skeleton-loader>
            </v-card>
          </swiper-slide>
        </swiper>
      </div>
    </v-container> -->

    <!-- 
    <v-container>
      <v-row style="margin-top: 24px">
        <div style="width: 100%; background-image: url('assets/backgroundalumni.png'); background-size: cover; background-repeat: no-repeat; height: 100vh; display: flex">
          <div style="width: 70%; display: flex; align-items: center; justify-content: center">
            <div style="width: 60%; margin-top: 64px">
              <h1 style="margin-bottom: 8px; font-weight: 600; color: #e5d32e" class="text-lg-h5">Alumni Interview</h1>
              <h1 style="margin-bottom: 8px; font-weight: bold; color: #ffffff" class="text-lg-h3">Romo Benny</h1>
              <p style="color: #ffffff; line-height: 150%; margin-bottom: 1.5em">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <button style="background-color: #ffffff; border-radius: 58px; padding: 12px; margin-bottom: 3em">
                <div style="display: flex">
                  <p style="margin-right: 8px">Baca Cerita Lengkapnya</p>
                  <i class="fa fa-arrow-right"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </v-row>
    </v-container> -->

    <!-- <div style="margin-top: 24px; background-image: url('assets/backgroundalumni.png'); height: 70vh; background-size: cover; display: flex; align-items: center">
      <div style="width: 80%; display: flex">
        <img style="width: 60%" src="assets/alumni.png" alt="" />
        <div class="ms-6 mt-5">
          <h1 style="margin-bottom: 8px; font-weight: 600; color: #e5d32e" class="text-lg-h5">Alumni Interview</h1>
          <h1 style="margin-bottom: 8px; font-weight: bold; color: #ffffff" class="text-lg-h3">Romo Benny</h1>
          <p style="color: #ffffff; line-height: 200%; margin-bottom: 1.5em">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <button style="background-color: #ffffff; border-radius: 58px; padding: 12px; margin-bottom: 3em">
            <div style="display: flex">
              <p style="margin-right: 8px">Baca Cerita Lengkapnya</p>
              <i class="fa fa-arrow-right"></i>
            </div>
          </button>
        </div>
      </div>
    </div> -->

    <!-- <v-container>
      <div>
        <div class="text-lg-center">
          <SubHeading :subtext="'  Cerita Para Alumni '" />
        </div>
      </div>
      <div v-if="alumni" class="mt-7">
        <swiper
          class="swiperWrapper"
          style="margin-top: 20px"
          :slidesPerView="2"
          :navigation="true"
          :breakpoints="{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            960: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 2,
            },
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(images, index) in alumni" :key="index" v-if="alumni">
            <v-card class="mx-auto" v-if="!images.isclick" style="border-radius: 10px; border: 1px solid rgba(0, 0, 0, 0.3)">
              <div style="height: 100px; display: flex; justify-content: center; margin-top: 8px">
                <img :src="images.fireImageLink" style="width: 100%; object-fit: contain" />
              </div>
              <div>
                <div style="padding: 12px">
                  <p style="margin-bottom: 8px; font-weight: bold; color: black" class="text-truncate loraText">{{ images.value2 }}</p>
                  <p style="color: black; line-height: 200%; margin-bottom: 1.5em; font-size: 12px" class="text-content text-truncate cairotext">
                    {{ images.value }}
                  </p>
                  <div class="d-flex flex-lg-row flex-column align-lg-center justify-center">
                    <div class="d-flex justify-center">
                      <button class="btnAlumni" :class="{ 'd-none': images.isclick }" @click="click(index)" style="width: 100%; background-color: var(--variable-collection-CIM); color: #ffffff; border-radius: 50px; padding: 4px">
                        <div class="d-flex align-center">
                          <p class="cairoText mx-3">Selengkapnya</p>
                          <i class="fa fa-arrow-right"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
            <v-card class="mx-auto" v-else>
              <div style="height: 150px">
                <img :src="images.fireImageLink" style="width: 100%; object-fit: contain" />
              </div>
              <div>
                <div class="mt-1" style="padding: 12px">
                  <p style="margin-bottom: 8px; font-weight: bold; color: black" class="text-truncate loraText">{{ images.value2 }}</p>
                  <p style="color: black; line-height: 200%; margin-bottom: 1.5em; font-size: 12px" class="cairotext">
                    {{ images.value }}
                  </p>
                  <div class="d-flex flex-lg-row flex-column align-lg-center justify-center">
                    <div class="d-flex justify-center">
                      <button
                        class="btnAlumni"
                        :class="{ 'd-none': images.isclick }"
                        @change="change(index)"
                        @click="click(index)"
                        style="width: 100%; background-color: var(--variable-collection-CIM); color: #ffffff; border-radius: 50px; padding: 4px"
                      >
                        <div class="d-flex align-center">
                          <p class="cairoText mx-3">SeLengkapnya</p>
                          <i class="fa fa-arrow-right"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </v-card>
          </swiper-slide>
        </swiper>
      </div>

      <div v-else>
        <swiper
          class="swiperWrapper"
          style="margin-top: 20px"
          :slidesPerView="4"
          :spaceBetween="10"
          :navigation="true"
          :pagination="{
            clickable: false,
          }"
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
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
        >
          <swiper-slide v-for="(Alumni, index) in alumni" :key="index">
            <v-row style="background-color: #103124">
              <v-col :cols="12" :lg="8" :md="7" style="background-color: var(--variable-collection-CIM); padding: 0">
                <div style="height: 500px; width: 100%">
                  <v-skeleton-loader type="image"></v-skeleton-loader>
                </div>
              </v-col>
              <v-col :cols="10" :lg="4" :md="4" style="margin-left: 20px; background-color: #103124">
                <div>
                  <div class="mt-5">
                    <v-skeleton-loader type="subtitle"></v-skeleton-loader>
                    <v-skeleton-loader type="subtitle"></v-skeleton-loader>
                    <v-skeleton-loader type="list-item-three-line"></v-skeleton-loader>
                    <div class="d-flex flex-lg-row flex-column align-lg-center">
                      <div>
                        <button class="btnAlumni" @click="click(index)" style="width: 100%; background-color: var(--variable-collection-CIM); color: #ffffff; border-radius: 50px; padding: 4px">
                          <div class="d-flex align-center">
                            <p class="cairoText mx-3">SeLengkapnya</p>
                            <i class="fa fa-arrow-right"></i>
                          </div></button
                        >``
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </swiper-slide>
        </swiper>
      </div>
    </v-container> -->

    <!-- <div class="ceritaalumni">
      <v-container fluid>
        <swiper
          style=""
          :slidesPerView="4"
          :spaceBetween="10"
          :pagination="{
            clickable: true,
          }"
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
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(alumni, index) in alumni" :key="index" style="background-color: #103124">
            <v-row style="background-color: #103124">
              <v-col :cols="12" :lg="6" style="background-color: #ffffff; padding: 0">
                <img :src="alumni.fireImageLink" style="width: 100%" alt="" />
              </v-col>
              <v-col :cols="10" :lg="5" style="margin-left: 20px; background-color: #103124">
                <div>
                  <div class="mt-5">
                    <h1 style="margin-bottom: 8px; font-weight: 600; color: #e5d32e" class="cairoText text-lg-h5">{{ alumni.title }}</h1>
                    <h1 style="margin-bottom: 8px; font-weight: bold; color: #ffffff" class="text-content2 loraText text-lg-h3">{{ alumni.value2 }}</h1>
                    <p style="color: #ffffff; line-height: 200%; margin-bottom: 1.5em" class="text-content cairotext">
                      {{ alumni.value }}
                    </p>
                    <div class="d-flex flex-lg-row flex-column align-lg-center">
                      <div>
                        <button style="background-color: #ffffff; border-radius: 58px; padding: 12px">
                          <div class="d-flex align-center">
                            <p class="cairoText mx-3">Baca Cerita Lengkapnya</p>
                            <i class="fa fa-arrow-right"></i>
                          </div>
                        </button>
                      </div>
                      <div class="mt-4 mt-lg-0">
                        <Social />
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </swiper-slide>
        </swiper>
      </v-container>
    </div> -->

    <!-- <v-container>
      <div class="text-lg-center">
        <SubHeading :subtext="'Artikel Terkini'" />
        <div style="width: 100%">
          <p style="margin-top: 20px; font-weight: bold">Daftar Artikel Terbaru</p>
        </div>

        <div style="margin-top: 24px" class="text-left">
          <v-row style="display: flex; justify-content: center">
            <v-col :cols="12" :lg="6" :md="6" v-for="(article, index) in artikel.slice(0, 4)" :key="index">
              <v-card style="height: 220px; border-radius: 20px" v-if="artikel">
                <v-row class="d-flex align-center justify-center">
                  <v-col :cols="4">
                    <div style="height: 150px; display: flex">
                      <v-img :src="article.imageLink" style="border-radius: 10px"></v-img>
                    </div>
                  </v-col>
                  <v-col :cols="7">
                    <div style="padding: 2px">
                      <div>
                        <p class="text-lg-h6 loraText" style="color: #0d0e0c; font-weight: 500; white-space: nowrap; text-overflow: ellipsis; overflow: hidden">{{ article.title }}</p>
                      </div>
                      <div>
                        <p class="text-lg-caption text-content cairoText" style="margin-bottom: 8px; font-weight: 600; color: #2b6956">By {{ article.author }}|| on {{ formatDate(article.publishDate) }}</p>
                        <p class="text-content3 text-wrap cairoText" v-dompurify-html="article.content" style="color: #5a524c; line-height: 150%"></p>
                      </div>
                      <div style="margin-top: 8px">
                        <NuxtLink :to="`/artikel/${article.slug}`" class="cairoText" style="font-size: 18px; color: #2b6956">Baca Selengkapnya</NuxtLink>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>

              <div v-else>
                <v-skeleton-loader class="card" type="card"></v-skeleton-loader>
              </div>
            </v-col>
          </v-row>
          <div style="display: flex; justify-content: center">
            <div>
              <NuxtLink to="/artikel">
                <ButtonCTA style="width: 100%" :ctaTitle="'Lihat Semua'" :bgcolorcta="'var(--variable-collection-CIM)'" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </v-container> -->
    <!-- <Contactform style="margin-top: 12px" /> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import { ref, onMounted } from 'vue';
import { Autoplay, Pagination } from 'swiper/modules';

export default {
  data: () => ({}),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const runTimeConfig = useRuntimeConfig();
    let isclick = ref(false);
    let ischange = ref(false);
    const data = ref([]);
    const berita = ref([]);
    const artikel = ref([]);
    const alumni = ref([]);
    let response2;
    let response3;
    let response4;

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.imavi.org/imavi/generals/lecturers/get-all', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });
        // console.log(response);
        response2 = response.status;
        // console.log(response2);
        const result = await response.json();
        data.value = result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData2 = async () => {
      try {
        const response = await fetch('https://api.imavi.org/imavi/articles/get-all', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });
        response3 = response.status;
        const result = await response.json();
        artikel.value = result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const fetchData3 = async () => {
      try {
        const response = await fetch('https://api.imavi.org/imavi/generals/item/landingTestimonySection', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });
        response4 = response.status;
        const result = await response.json();
        // console.log(result);
        alumni.value = result.subs;

        alumni.value = result.subs.map((item) => {
          return { ...item, isclick: ref(false) };
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchData4 = async () => {
      try {
        const response = await fetch('https://api.imavi.org/imavi/news/get-all', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });
        response3 = response.status;
        const result = await response.json();
        berita.value = result;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const formatDate = (dateString) => {
      const dateObject = new Date(dateString);
      const day = dateObject.getDate();
      const month = formatMonthName(dateObject.getMonth() + 1);
      const year = dateObject.getFullYear();

      return `${day < 10 ? '0' : ''}${day} ${month < 10 ? '0' : ''}${month}, ${year}`;
    };

    const formatMonthName = (monthNumber) => {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return monthNames[monthNumber - 1] || '';
    };
    onMounted(async () => {
      await fetchData();
      await fetchData2();
      await fetchData3();
      await fetchData4();
    });
    const reload = () => {
      window.location.reload(true);
    };
    const modules = [Pagination, Autoplay, Navigation];

    return {
      formatDate,
      formatMonthName,
      reload,
      data,
      artikel,
      alumni,
      modules,
      response2,
      berita,
      isclick,
    };
  },
  methods: {
    click(index) {
      this.alumni[index].isclick = !this.alumni[index].isclick;
      // console.log(this.alumni[index].isclick);
    },
  },
};
</script>
<!-- <script setup>
import { ref, onMounted } from 'vue';
const data = ref([]);
const fetchData = async () => {
  try {
    const response = await fetch('https://api.imavi.org/cim/courses/get-all', {
      headers: {
        Id: '6163b0c663bd513e8b3b8553',
        Secret: '2213be40-3625-4111-9b52-e828b5d335d8',
        partner: 'cim',
      },
    });
    // console.log(response);
    const result = await response.json();
    data.value = result;
    // console.log(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});
</script> -->
<!-- <script>
import Navigation from "./DesktopBeranda/sections/Navigation.vue";
import Overlap from "./DesktopBeranda/sections/Overlap.vue";
import About from "./DesktopBeranda/sections/About.vue";
import OverlapGroup from "./DesktopBeranda/sections/OverlapGroup.vue";
import OverlapWrapper from "./DesktopBeranda/sections/OverlapWrapper.vue";
import OverlapGroupWrapper from "./DesktopBeranda/sections/OverlapGroupWrapper.vue";
import Group from "./DesktopBeranda/sections/Group.vue";
import DivWrapper from "./DesktopBeranda/sections/DivWrapper.vue";
import LightButtonPrimaryWrapper from "./DesktopBeranda/sections/LightButtonPrimaryWrapper.vue";
import Div from "./DesktopBeranda/sections/Div.vue";
import LightButtonWrapper from "./DesktopBeranda/sections/LightButtonWrapper.vue";
import LatestNews from "./DesktopBeranda/sections/LatestNews.vue";
import SectionComponentNode from "./DesktopBeranda/sections/SectionComponentNode.vue";
import GroupWrapper from "./DesktopBeranda/sections/GroupWrapper.vue";
import Join from "./DesktopBeranda/sections/Join.vue";

export default {
  name: "DesktopBeranda",
  components: {
    Navigation,
    Overlap,
    About,
    OverlapGroup,
    OverlapWrapper,
    OverlapGroupWrapper,
    Group,
    DivWrapper,
    LightButtonPrimaryWrapper,
    Div,
    LightButtonWrapper,
    LatestNews,
    SectionComponentNode,
    GroupWrapper,
    Join,
  },
};
</script> -->

<style>
/* .titleLecturer {
  text-wrap: nowrap !important;
} */
.v-skeleton-loader__image {
  height: 500px;
  border-radius: 0;
}
.v-skeleton-loader__card .v-skeleton-loader__image {
  height: 300px;
}
.text-content {
  max-height: 75px;
  overflow: hidden;
}
.text-content3 {
  max-height: 75px;
  overflow: hidden;
}
.text-content2 {
  max-height: 1em;
  overflow: hidden;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* text-align: center; */

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
  .btnAlumni {
    width: 40% !important;
  }
}
.swiper-pagination {
  position: static;
  margin-top: 100px;
}
/* .desktop-beranda {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
} */

/* .desktop-beranda .div-4 {
  background-color: #ffffff;
  height: 6708px;
  overflow: hidden;
  position: relative;
  width: 1440px;
} */

.desktop-beranda .home {
  height: 588px;
  left: 0;
  position: absolute;
  top: 82px;
  width: 1440px;
}

.desktop-beranda .overlap-17 {
  height: 74px;
  left: 364px;
  position: absolute;
  top: 2532px;
  width: 709px;
}

.desktop-beranda .text-wrapper-39 {
  color: #253c56;
  font-family: 'PT Serif', Helvetica;
  font-size: 38px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 709px;
}

.desktop-beranda .divider-4 {
  background-color: #27674e;
  border-radius: 50px;
  height: 60px;
  left: 353px;
  position: absolute;
  top: 42px;
  transform: rotate(90deg);
  width: 3px;
}

.desktop-beranda .text-wrapper-40 {
  color: #768a38;
  font-family: var(--h6-left-font-family);
  font-size: var(--h6-left-font-size);
  font-style: var(--h6-left-font-style);
  font-weight: var(--h6-left-font-weight);
  left: 557px;
  letter-spacing: var(--h6-left-letter-spacing);
  line-height: var(--h6-left-line-height);
  position: absolute;
  text-align: center;
  top: 2493px;
  width: 324px;
}

.desktop-beranda .biblical-tour {
  color: #333333;
  font-family: 'PT Serif', Helvetica;
  font-size: 56px;
  font-weight: 400;
  left: 648px;
  letter-spacing: -2px;
  line-height: 64px;
  position: absolute;
  top: 2643px;
  white-space: nowrap;
}

.desktop-beranda .the-big-oxmox-advise {
  color: #333333;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 24px;
  font-weight: 700;
  left: 648px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 2716px;
  width: 570px;
}

.desktop-beranda .question-marks-and-d {
  color: #33333380;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 648px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 2780px;
  width: 570px;
}

.desktop-beranda .text-wrapper-41 {
  color: #333333;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 735px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 2859px;
  white-space: nowrap;
}

.desktop-beranda .element-branch-street-ad {
  color: #333333;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 735px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 2929px;
  white-space: nowrap;
}

.desktop-beranda .rectangle-6 {
  background-color: #d2d2d2;
  height: 1px;
  left: 141px;
  position: absolute;
  top: 2995px;
  width: 1170px;
}

.desktop-beranda .bitmap-2 {
  height: 144px;
  left: 341px;
  position: absolute;
  top: 3027px;
  width: 154px;
}

.desktop-beranda .shape-3 {
  height: 24px;
  left: 601px;
  position: absolute;
  top: 3088px;
  width: 24px;
}

.desktop-beranda .text-wrapper-42 {
  color: #333333;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 641px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3083px;
  white-space: nowrap;
}

.desktop-beranda .shape-4 {
  height: 24px;
  left: 863px;
  position: absolute;
  top: 3087px;
  width: 20px;
}

.desktop-beranda .element-branch-street-ad-2 {
  color: #333333;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 899px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3083px;
}

.desktop-beranda .rectangle-7 {
  background-color: #d2d2d2;
  height: 1px;
  left: 141px;
  position: absolute;
  top: 3203px;
  width: 1170px;
}

.desktop-beranda .bitmap-3 {
  height: 144px;
  left: 341px;
  position: absolute;
  top: 3235px;
  width: 154px;
}

.desktop-beranda .shape-5 {
  height: 24px;
  left: 601px;
  position: absolute;
  top: 3296px;
  width: 24px;
}

.desktop-beranda .text-wrapper-43 {
  color: #333333;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 641px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3291px;
  white-space: nowrap;
}

.desktop-beranda .shape-6 {
  height: 24px;
  left: 863px;
  position: absolute;
  top: 3295px;
  width: 20px;
}

.desktop-beranda .element-branch-street-ad-3 {
  color: #333333;
  font-family: 'Roboto Condensed', Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 899px;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  top: 3291px;
}

.desktop-beranda .rectangle-8 {
  background-color: #d2d2d2;
  height: 1px;
  left: 141px;
  position: absolute;
  top: 3411px;
  width: 1170px;
}

.desktop-beranda .image {
  height: 376px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 6268px;
  width: 1439px;
}
</style>
