<template>
  <div class="course-detail" style="margin-top: 100px; height: 100%">
    <v-container style="line-height: 150%">
      <v-row class="d-flex justify-center">
        <v-col :cols="12" :lg="8">
          <h1 class="text-center text-h4">{{ data.name }}</h1>
          <v-container>
            <div class="mt-6 content2" v-dompurify-html="data.description"></div>
          </v-container>

          <div class="text-center">
            <NuxtLink to="/program"><v-btn>Kembali</v-btn></NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref([]);
const runTimeConfig = useRuntimeConfig();
const fetchData = async () => {
  try {
    const response = await fetch(`https://api.imavi.org/cim/courses/view/${useRoute().params.slug}`, {
      headers: {
        Id: runTimeConfig.public.Id,
        Secret: runTimeConfig.public.Secret,
        partner: runTimeConfig.public.Partner,
      },
    });
    // console.log(response);
    const result = await response.json();
    result.description = ref(result.description);
    // console.log(result.description);
    data.value = result;
    // console.log(data.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style>
.content2 li {
  margin-left: 16px;
}
</style>
