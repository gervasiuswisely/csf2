<template>
  <v-row style="margin-bottom: 4px; border-radius: 50px" class="opensansText bg-red">
    <v-col :cols="4" :lg="4" style="border: 2px solid #10312; padding: 0; background-color: #385723; border-top-left-radius: 50px; border-bottom-left-radius: 50px">
      <!-- <v-img style="object-fit: contain" :src="items.imageLink ? items.imageLink : 'https://cdn.imavi.org/articles~5wXNm6M~articles~epATKgn~logo.pn'" /> -->
      <div style="height: 100px; display: flex; justify-content: center">
        <img :src="items.imageLink ? items.imageLink : 'https://cdn.imavi.org/articles~5wXNm6M~articles~epATKgn~logo.png'" style="height: 100%; padding: 10px" alt="" />
      </div>
    </v-col>
    <v-col :cols="8" :lg="8" class="d-flex flex-column justify-center align-center" style="border-top-right-radius: 50px; border-bottom-right-radius: 50px; background-color: #70ad47">
      <div class="text-white" style="line-height: 170%; width: 100%">
        <h1 class="font-weight-medium text-lg-h5 text-h5">{{ items.name }}</h1>
        <p class="kursusdescription" style="color: white;opacity: 70%; !important; max-height: 30px; overflow: hidden; margin-top: 8px">{{ items.excerpt }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>
