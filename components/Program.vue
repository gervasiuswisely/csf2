<template>
  <v-row style="display: flex; justify-content: center" v-if="data && response2 == 200" v-for="(items2, index2) in data">
    <v-col :cols="12" :sm="12" :md="5" :lg="5" style="margin-right: 12px; margin-left: 12px" v-for="(items, index) in items2" :key="index">
      <v-row style="margin-bottom: 4px; border-radius: 50px" class="opensansText">
        <v-col :cols="4" :md="3" :lg="4" class="primaryBackground" style="border: 2px solid #ffffff; padding: 0; border-top-left-radius: 50px; border-bottom-left-radius: 50px; display: flex; align-items: center; justify-content: center">
          <!-- <v-img style="object-fit: contain" :src="items.imageLink ? items.imageLink : 'https://cdn.imavi.org/articles~5wXNm6M~articles~epATKgn~logo.png'" /> -->
          <div style="height: 150px; display: flex; justify-content: center; width: 100%">
            <img :src="items.imageLink ? items.imageLink : 'https://cdn.imavi.org/articles~5wXNm6M~articles~epATKgn~logo.png'" style="height: 100%; padding: 30px" alt="" />
          </div>
        </v-col>
        <v-col :cols="8" :md="8" :lg="8" class="d-flex flex-column justify-center align-center programColor2" style="border-top-right-radius: 50px; border-bottom-right-radius: 50px">
          <div class="d-flex align-center" style="width: 100%; height: 150px">
            <div class="pa-2">
              <h1 v-if="items.name" class="font-weight-medium text-lg-h5 text-h5">{{ items.name }}</h1>
              <p v-if="items.title" style="color: var(--variable-collection-CIM)" class="font-weight-medium">{{ items.title }}</p>
              <p class="kursusdescription" style="margin-top: 8px; font-size: 14px">{{ items.excerpt }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <div v-else-if="response2 != 200" class="d-flex justify-center">
    <button @click="refresh">Refresh</button>
  </div>
  <div v-else>
    <v-row style="display: flex; justify-content: center">
      <v-col :cols="12" :lg="5" style="margin-right: 12px; margin-left: 12px" v-for="(items, index) in data.slice(0, 4)" :key="index">
        <v-row>
          <v-col :cols="6" :lg="8">
            <v-skeleton-loader type="image"></v-skeleton-loader>
          </v-col>
          <v-col :cols="6" :lg="4">
            <div>
              <v-skeleton-loader type="paragraph"></v-skeleton-loader>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
  <div style="display: flex; justify-content: center">
    <div>
      <NuxtLink to="/program">
        <ButtonCTA style="width: 100%" :ctaTitle="'Lihat Semua'" :bgcolorcta="'var(--variable-collection-CIM)'" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const data = ref([]);
const runTimeConfig = useRuntimeConfig();
let response2;
const fetchData = async () => {
  try {
    const response = await fetch('https://api.imavi.org/imavi/events/with-courses/featured/get-all', {
      headers: {
        Id: runTimeConfig.public.Id,
        Secret: runTimeConfig.public.Secret,
        partner: runTimeConfig.public.Partner,
      },
    });
    // console.log(response.status);
    response2 = response.status;
    const result = await response.json();
    const kegiatan = result.events.concat(result.courses);
    const newArray = [];
    for (let i = 0; i < kegiatan.length / 2 - 1; i += 2) {
      newArray.push(kegiatan.slice(i, i + 2));
    }
    // console.log(result.length);
    data.value = newArray;
    // console.log(newArray);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const refresh = () => {
  window.location.reload(true);
};
onMounted(() => {
  fetchData();
});
</script>

<!-- <script>
export default {
  data: () => ({
    program: [
      {
        title: 'Studi Kitab Suci',
        src: 'assets/overlapbg1.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipicising elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      },
      {
        title: 'Kursus Ajaran Iman',
        src: 'assets/overlapbg2.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipicising elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      },
      {
        title: 'Pendidikan etika dan moral ',
        src: 'assets/overlapbg3.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipicising elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      },
      {
        title: 'Kursus spiritualitas',
        src: 'assets/overlapbg4.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit adipicising elit. Ut elit tellus, luctus nec ullamcorper mattis.',
      },
    ],
  }),

  props: {
    pathimg: String,
  },
};
</script> -->

<style>
.programColor1 {
  background-color: #ffffff;
}
.programColor2 {
  background-color: #ffffff;
  border: 2px solid var(--variable-collection-CIM);
}
.v-skeleton-loader__image {
  height: 300px;
  border-radius: 0;
}
</style>
