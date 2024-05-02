<template>
  <v-container class="d-flex justify-center flex-column align-center" style="padding-bottom: 100px">
    <v-row class="d-flex justify-center">
      <v-col :cols="10" :lg="10" :md="6">
        <div style="margin-top: 100px">
          <div class="d-flex justify-center mb-3">
            <img style="height: 300px" :src="artikelDetail.imageLink" alt="" />
          </div>
          <h1 class="text-h4">{{ artikelDetail.title }}</h1>
          <div class="text-end">
            <p style="margin-top: 12px; margin-bottom: 12px">{{ formatDate(artikelDetail.publishDate) }}</p>
            <p>Oleh: {{ artikelDetail.author }}</p>
          </div>
          <div class="content" v-html="artikelDetail.content"></div>
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/artikel"><Button :btnTitle="'Kembali'" /></NuxtLink>
        </div>
        <div class="d-flex mt-2 justify-center">
          <SocialShare :href="'https://www.facebook.com/sharer.php?u=' + slugPoint" network="facebook" :styled="true" :label="false" style="color: #ffffff; border-radius: 50%; background-color: var(--primaryColor)" />
          <SocialShare
            :href="`https://twitter.com/intent/tweet?text=http://smpktubanimavi.org/artikel/${useRoute().params.slug}`"
            style="border-radius: 50%; background-color: var(--primaryColor); color: #ffffff; margin-left: 4px; margin-right: 4px"
            network="twitter"
            :styled="true"
            :label="false"
          />
          <SocialShare
            :href="`https://api.whatsapp.com/send/?text=http://smpktubanimavi.org/artikel/${useRoute().params.slug}`"
            style="border-radius: 50%; background-color: var(--primaryColor); color: #ffffff"
            network="whatsapp"
            :styled="true"
            :label="false"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const artikelDetail = ref([]);
const runTimeConfig = useRuntimeConfig();
const fetchData = async () => {
  try {
    const response = await fetch(`https://api.imavi.org/imavi/articles/view/${useRoute().params.slug}`, {
      headers: {
        Id: runTimeConfig.public.Id,
        Secret: runTimeConfig.public.Secret,
        partner: runTimeConfig.public.Partner,
      },
    });
    // console.log(response);
    const result = await response.json();
    artikelDetail.value = result;
    // console.log(artikelDetail.value.content);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = formatMonthName(dateObject.getMonth() + 1);
  const year = dateObject.getFullYear();

  return `${day < 10 ? '0' : ''}${day} ${month < 10 ? '0' : ''}${month} ${year}`;
};

const formatMonthName = (monthNumber) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[monthNumber - 1] || '';
};

onMounted(() => {
  fetchData();
});
</script>

<!-- <style>
.content p {
  margin-bottom: 20px;
}
</style> -->
