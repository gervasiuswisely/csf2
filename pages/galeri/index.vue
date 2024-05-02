<template>
  <v-container class="mt-16">
    <v-row>
      <v-col :cols="6" :sm="6" :md="6" :lg="4" :xl="3" v-for="(kategori, index) in kategori" :key="index">
        <div class="kategori">
          <div style="height: 200px; width: 341px" v-if="isPhoto(kategori.thumbnail)">
            <img class="kategoriImg" style="height: 100%; object-fit: contain" :src="kategori.thumbnail" alt="" />
          </div>

          <NuxtLink :to="`/galeri/${kategori.slug}`" class="kategoriLink" href="">
            <span class="linkTxt">
              <p class="linkP">{{ kategori.title }}</p>
            </span>
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  // data: () => ({
  //   kategori: [
  //     {
  //       nama: 'Kategori1',
  //       imgLink: '/img/kategori1.jpg',
  //     },
  //     {
  //       nama: 'Kategori2',
  //       imgLink: '/img/kategori1.jpg',
  //     },
  //     {
  //       nama: 'Kategori3',
  //       imgLink: '/img/kategori1.jpg',
  //     },
  //     {
  //       nama: 'Kategori4',
  //       imgLink: '/img/kategori1.jpg',
  //     },
  //     {
  //       nama: 'Kategori5',
  //       imgLink: '/img/kategori1.jpg',
  //     },
  //     {
  //       nama: 'Kategori6',
  //       imgLink: '/img/kategori1.jpg',
  //     },
  //   ],
  // }),

  setup() {
    let kategori = ref({});
    const runTimeConfig = useRuntimeConfig();
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.imavi.org/imavi/galleries/get-all', {
          headers: {
            Id: runTimeConfig.public.Id,
            Secret: runTimeConfig.public.Secret,
            partner: runTimeConfig.public.Partner,
          },
        });
        console.log(response);
        const hasil = await response.json();
        kategori.value = hasil;
        console.log(kategori.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    const isPhoto = (fileName) => {
      const videoExtensions = ['jpeg', 'jpg', 'png', 'gif'];
      const fileExtension = fileName.split('.').pop().toLowerCase();
      return videoExtensions.includes(fileExtension);
    };
    onMounted(async () => {
      await fetchData();
    });
    return {
      kategori,
      isPhoto,
    };
  },
};
</script>

<style>
.kategori {
  position: relative;
}
.kategoriImg {
  width: 100%;
}
.kategoriLink {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.linkTxt {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
}
.linkP {
  background-color: var(--variable-collection-CIM);
  padding: 10px;
  border-radius: 10px;
}
</style>
